import Modal from './Modal';
import { toast } from 'react-toastify';
import { useCollection } from 'react-firebase-hooks/firestore';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { BiLineChart,BiSolidCameraHome } from "react-icons/bi";
import { textdb } from '../.././firebaeConfig';
import DOMPurify from 'dompurify';
import "./DisplayCareer.css"
import ApplyModal from './ApplyModal';
import { FaRegLightbulb } from "react-icons/fa";
import { Helmet } from 'react-helmet';
export const DisplayCareer = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedItemContant, setSelectedItemContant] = useState('');
    const [career, loading, error] = useCollection(collection(textdb, 'career'));
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [modals, setModals] = useState({});




    useEffect(() => {
        if (career) {
          const initialModals = {};
          career.docs.forEach((doc) => {
            initialModals[doc.id] = false;
          });
          setModals(initialModals);
        }
      }, [career]);
    
     
    
      const closeModal = (id) => {
        const updatedModals = { ...modals };
        updatedModals[id] = false;
        setModals(updatedModals);
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


      const openModal = (id) => {
        const updatedModals = { ...modals };
        updatedModals[id] = true;
        setModals(updatedModals);
      };
      const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
      const openApplyModal = (data) => {
        setSelectedData(data); // Set the data for the selected career
        setShowApplyModal(true);
      };
    
      const closeApplyModal = () => {
        setShowApplyModal(false);
        setSelectedData(null); // Reset selected data when modal is closed
      };
      
  return (
    <div>
      <div className='careerbackground'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Career</title>
                <meta name="description" content=" At Code Crackers, the area of learning is really wide." />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <div data-aos="fade-up" className='wearehiring'>
        <h2> We Are <span className='hiring'>Hiring</span></h2>
        <p >At Code Crackers, the area of learning is really wide. We encourage our employees to take advantage of opportunities to enhance and improve their skills with our ongoing guidance and support. We're always open to new ideas and initiatives, distinguishing ourselves from our competitors and inspiring us to Excel, Innovate and Lead</p>
      </div>
      
      <div data-aos="fade-up" className='wearehiring'>
        <h4> Why Join Us? </h4>
        <p >At Code Crackers, the area of learning is really wide. We encourage our employees to take advantage of opportunities to enhance and improve their skills with our ongoing guidance and support. We're always open to new ideas and initiatives, distinguishing ourselves from our competitors and inspiring us to Excel, Innovate and Lead</p>
      </div>
      


      </div>
        <div >
        <div className='carercard'>
         
        <div data-aos="fade-up" className="ccard">
        <i className='careericon'><BiLineChart /></i>
          <h3>Growth</h3>
          <p>Your training is our responsibility. We aim to build professionals.</p>
        </div>
        <div data-aos="fade-up" className="ccard">
        <i className='careericon'> <FaRegLightbulb /></i>
          
          <h3>Innovate</h3>
          <p>We thrive on innovation, and so can you!</p>
        </div>
        <div data-aos="fade-up" className="ccard">
        <i className='careericon'><BiSolidCameraHome/></i>
          
          <h3>Trainings</h3>
          <p>We thrive on innovation, and so can you!</p>
        </div>
     
    </div>
        </div>
        <div className='displayUploadCareer'> 
        <h2 data-aos="fade-up"> Current <span className='opening'>Openings</span></h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching blogs</p>}
      {career && (
        <div  className='main-career-display'>
          {career.docs.map((career) => {
            const data = career.data();
            return (
                
                    <div className='main-card'>
                <div data-aos="fade-up" className='careerCard' key={career.id} >
                
                <h3 className='ctitle'>{data.title}</h3>
                <p className='careerp'>{data.position}</p>
                <p className='careerp'>{data.location}</p>
                <p className='careerp'>{data.experiance}</p>

              <div className='buttoncontrol'>
              <button className='apply' onClick={() => openModal(data.title)}>Apply</button>
              
              <button className='open-modal-button' onClick={() => openModal(career.id)}>
                    Discription
                  </button>
                  </div></div> 

           
                  <ApplyModal 
                    key={`modal-${data.title}`}
                    show={modals[data.title]}
                    handleClose={() => closeModal(data.title)}
                    position={data.position}
                  >
                    {modals[career.id] && (
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}></div>
                    )}
                  </ApplyModal>
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
    </div>
  )
}
