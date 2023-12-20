import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { storage, textdb } from '../.././firebaeConfig';
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Portfolio.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Portfolio = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [p1, setP1] = useState('');
  const [image, setImage] = useState(null);
  const [portfolio, loading, error] = useCollection(collection(textdb, 'portfolio'));
  const [selectedportfolio, setSelectedportfolio] = useState(null); // Track the selected portfolio for detailed view


  
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!title ||  !p1 || !image) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.info('Uploading...', { autoClose: 3000 });

    try {
      const imageRef = ref(storage, `portfolio_images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      const timestamp = new Date();

      // Create a new document reference for each portfolio entry
      const newportfolioRef = doc(collection(textdb, 'portfolio'));

      // Set the data for the new portfolio entry
      await setDoc(newportfolioRef, {
        title,
            p1,
        imageUrl,
    
       
      });

      toast.success('portfolio uploaded successfully!');
      setTitle('');
      setContent('');
      setP1('');
      setImage(null);
      
    } catch (error) {
      console.error('Error uploading portfolio:', error);
      toast.error('Error uploading portfolio');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(textdb, 'portfolio'));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (portfolioId, imageUrl) => {
    try {
      const portfolioRef = doc(collection(textdb, 'portfolio'), portfolioId);
  
      // Delete the document from Firestore
      await deleteDoc(portfolioRef);
  
      // Delete the image from storage
      const imageRef = ref(storage, `portfolio_images/${imageUrl}`);
      await deleteObject(imageRef);
  
      toast.success('portfolio deleted successfully!');
    } catch (error) {
      console.error('Error deleting portfolio:', error);
      toast.error('Error deleting portfolio');
    }
  };



  return (
    <div className='mainup'>
      <div className='Mainuploadportfolio'>
        <div className='uploadportfolio'>
      <h2>Upload portfolio</h2>
          <div className='uploadportfolio'>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          
          <div className='uploadportfolio'>
            <label>Description</label>
            <input type='text' value={p1} onChange={(e) => setP1(e.target.value)} />
          </div>
          <div className='uploadportfolio'>
            <label>Image:</label>
            <input type='file' onChange={handleImageChange} />
          </div>
          <div className='uploadportfolio'>
            
       
          </div>
          <button className='uplodbtn' onClick={handleUpload}>
            Upload 
          </button>
          </div>
       



        <h2>portfolio List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching portfolio</p>}
      {portfolio && (
        <div>
          {portfolio.docs.map((portfolio) => {
            const data = portfolio.data();
            return (
                <div className='portfolio-main'>
                <div className='portfolio-Card' key={portfolio.id} >
                <img src={data.imageUrl} alt={data.title} style={{ maxWidth: '100%' }} />
                <p className='time'> {data.timestamp && data.timestamp.toDate().toLocaleString()}</p>
                <h3 className='btitle'>{data.title}</h3>
                <p className='portfoliop'>{data.p1}</p>
              
              <button className='delete' onClick={() => handleDelete(portfolio.id)}>Delete</button>
              </div>  </div>
            );
          })}
        </div>
      )}

        <ToastContainer />
      </div>

     
    </div>
  );
};
