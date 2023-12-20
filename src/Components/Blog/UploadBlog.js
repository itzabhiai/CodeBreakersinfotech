import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { storage, textdb } from '../.././firebaeConfig';
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Uploading.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const UploadBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [p1, setP1] = useState('');
  const [image, setImage] = useState(null);
  const [blogs, loading, error] = useCollection(collection(textdb, 'blogs'));
  const [selectedBlog, setSelectedBlog] = useState(null); // Track the selected blog for detailed view


  
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!title || !content || !p1 || !image) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.info('Uploading...', { autoClose: 3000 });

    try {
      const imageRef = ref(storage, `blog_images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      const timestamp = new Date();

      // Create a new document reference for each blog entry
      const newBlogRef = doc(collection(textdb, 'blogs'));

      // Set the data for the new blog entry
      await setDoc(newBlogRef, {
        title,
        content,
        p1,
        imageUrl,
        timestamp,
       
      });

      toast.success('Blog uploaded successfully!');
      setTitle('');
      setContent('');
      setP1('');
      setImage(null);
      
    } catch (error) {
      console.error('Error uploading blog:', error);
      toast.error('Error uploading blog');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(textdb, 'blogs'));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (blogId, imageUrl) => {
    try {
      const blogRef = doc(collection(textdb, 'blogs'), blogId);
  
      // Delete the document from Firestore
      await deleteDoc(blogRef);
  
      // Delete the image from storage
      const imageRef = ref(storage, `blog_images/${imageUrl}`);
      await deleteObject(imageRef);
  
      toast.success('Blog deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Error deleting blog');
    }
  };



  return (
    <div className='mainup'>
      <div className='Mainuploadblog'>
        <div className='uploadBlog'>
      <h2>Upload Blog</h2>
          <div className='uploadblog'>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          
          <div className='uploadblog'>
            <label>Description</label>
            <input type='text' value={p1} onChange={(e) => setP1(e.target.value)} />
          </div>
          <div className='uploadblog'>
            <label>Image:</label>
            <input type='file' onChange={handleImageChange} />
          </div>
          <div className='uploadblog'>
            <label>Content:</label>
            <ReactQuill 
        value={content} 
        onChange={(value) => setContent(value)} 
        modules={{ toolbar: true }} 
        formats={['link']} 
        className="custom-quill"
      />
          </div>
          <button className='uplodbtn' onClick={handleUpload}>
            Upload 
          </button>
          </div>
        <hr />

        <h2>Blog List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching blogs</p>}
      {blogs && (
        <div>
          {blogs.docs.map((blog) => {
            const data = blog.data();
            return (
                <div className='dismain'>
                <div className='DisplayCard' key={blog.id} >
                <img src={data.imageUrl} alt={data.title} style={{ maxWidth: '100%' }} />
                <p className='time'> {data.timestamp && data.timestamp.toDate().toLocaleString()}</p>
                <h3 className='btitle'>{data.title}</h3>
                <p className='blogp'>{data.p1}</p>
              
              <button className='bn11' onClick={() => handleDelete(blog.id)}>Delete</button>
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
