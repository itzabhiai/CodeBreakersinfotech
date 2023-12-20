
import Modal from './Modal';
import { toast } from 'react-toastify';
import { useCollection } from 'react-firebase-hooks/firestore';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';

import { textdb } from '../.././firebaeConfig';
import DOMPurify from 'dompurify';
import ReactQuill from 'react-quill';
import"./Career.css"

export const Career = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [experiance, setExperiance] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedItemContant, setSelectedItemContant] = useState('');
    const [career, loading, error] = useCollection(collection(textdb, 'career'));
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [modals, setModals] = useState({});



    const handleUpload = async () => {
        if (!title || !content  || !position || !location || !experiance) {
          toast.error('Please fill in all fields');
          return;
        }
    
        toast.info('Uploading...', { autoClose: 3000 });
    
        try {
          
    
          
          const newCareerRef = doc(collection(textdb, 'career'));
    
         
          await setDoc(newCareerRef, {
            title,
            content,
            position,
         experiance,
          location,
           
          });
    
          
          toast.success('Career Data uploaded successfully!');
          setTitle('');
          setContent('');
          setPosition('');
          setExperiance('');
          setLocation('');
          
        } catch (error) {
          console.error('Error uploading Career data:', error);
          toast.error('Error uploading Career data');
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(textdb, 'Career'));
            querySnapshot.forEach((doc) => {
              console.log(doc.id, ' => ', doc.data());
            });
          } catch (error) {
            console.error('Error fetching Career Data:', error);
          }
        };
    
        fetchData();
      }, []);
    

      const handleDelete = async (careerId) => {
        try {
          const careerRef = doc(collection(textdb, 'blogs'), careerId);
      
          
          await deleteDoc(careerRef);
      
          
      
          toast.success('Career deleted successfully!');
        } catch (error) {
          console.error('Error deleting blog:', error);
          toast.error('Error deleting blog');
        }
      };
      useEffect(() => {
        if (career) {
          const initialModals = {};
          career.docs.forEach((doc) => {
            initialModals[doc.id] = false;
          });
          setModals(initialModals);
        }
      }, [career]);
    
      const openModal = (id) => {
        const updatedModals = { ...modals };
        updatedModals[id] = true;
        setModals(updatedModals);
      };
    
      const closeModal = (id) => {
        const updatedModals = { ...modals };
        updatedModals[id] = false;
        setModals(updatedModals);
      };

  return (
    <div className='main-career'>
        <div className='upload-career-card'>
        <div className='uploadcareer'>
      <h2>Upload Job Details</h2>
          <div className='uploadcareer'>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          
          <div className='uploadcareer'>
            <label>Position</label>
            <input type='text' value={position} onChange={(e) => setPosition(e.target.value)} />
          </div>
          <div className='uploadcareer'>
            <label>Location & Timing</label>
            <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className='uploadcareer'>
            <label>Experiance</label>
            <input type='text' value={experiance} onChange={(e) => setExperiance(e.target.value)} />
          </div>
          <div className='uploadcareer'>
            <label>Job Discription</label>
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
          </div>


          <h2 style={{textAlign:'start'}}> List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching blogs</p>}
      {career && (
        <div className='main-career-display'>
          {career.docs.map((career) => {
            const data = career.data();
            return (
               
                    <div className='main-card'>
                <div className='careerCard' key={career.id} >
                
                <h3 className='ctitle'>{data.title}</h3>
                <p className='careerp'>{data.position}</p>
                <p className='careerp'>{data.location}</p>
                <p className='careerp'>{data.experiance}</p>

              <div>
              <button className='delete' onClick={() => handleDelete(career.id)}>Delete</button>
              
              <button className='open-modal-button' onClick={() => openModal(career.id)}>
                    Discription
                  </button>
                  </div></div> 
        <Modal 
                    key={`modal-${career.id}`}
                    show={modals[career.id]}
                    handleClose={() => closeModal(career.id)}
                    experience={data.experience}
                  >
                    {modals[career.id] && (
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}></div>
                    )}
                  </Modal>
              
              
              
               </div>               

            );
          })}
        </div>
      )}

        </div>

  )
}
