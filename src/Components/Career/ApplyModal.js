import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { storage, textdb } from '../.././firebaeConfig';
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { toast } from 'react-toastify';

import "./ApplyModal.css"

const ApplyModal = ({ handleClose, show, position }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPosition, setSelectedPosition] = useState(position);

  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !mobile || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.info('Uploading...', { autoClose: 3000 });

    try {
      const imageRef = ref(storage, `job_images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      const newJobRef = doc(collection(textdb, 'job'));

      await setDoc(newJobRef, {
        position: selectedPosition,
        firstName,
        lastName,
        imageUrl,
        mobile,
        email,
        message,
      });

      console.log("submitted");

      toast.success('Blog uploaded successfully!');
      setSelectedPosition(position);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setImage('');
      setMessage('');
    } catch (error) {
      console.error('Error uploading blog:', error);
      toast.error('Error uploading blog');
    }
  };

  const [job, loading, error] = useCollection(collection(textdb, 'job'));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(textdb, 'job'));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };

    fetchData();
  }, []);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
        <h4>Apply for {position}</h4>
      <div className="modal-content">
        <button className='close-button' onClick={handleClose}>X</button>
        <form>
          <label className='inputcareermodal'>
            Position:
            <select className='inputmodal' value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
              <option value={position}>{position}</option>
              {/* Add other position options if needed */}
            </select>
          </label>
          <label className='inputcareermodal'>
            First Name:
            <input className='inputmodal' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label className='inputcareermodal'>
            Last Name:
            <input className='inputmodal' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label className='inputcareermodal'>
            Email:
            <input className='inputmodal' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className='inputcareermodal'>
            Mobile Number:
            <input className='inputmodal' type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </label>
          <label className='inputcareermodal'>
            Upload Your CV:
            <input className='inputmodal' type="file" onChange={handleImageChange} />
          </label>
          <label className='inputcareermodal'>
            Message:
            <textarea  value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <br/>
          <button className='button' onClick={handleSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
