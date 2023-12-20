import React, { useState ,useEffect} from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { textdb } from '../.././firebaeConfig'; // Assuming you have your Firestore instance initialized as 'db'
import "./ContactUs.css"
import { toast } from 'react-toastify';
export const GetQuoteForm = () => {
  const [quoteDetails, setQuoteDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteDetails({ ...quoteDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
    try {
      const docRef = await addDoc(collection(textdb, 'quotes'), quoteDetails);
      console.log('Document written with ID: ', docRef.id);
      setQuoteSubmitted(true);
      setQuoteDetails({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      } );
      
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    window.location.reload();
    toast.success("Success")
  };

  const getQuotesFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(textdb, 'quotes'));
    const quotesData = [];
    querySnapshot.forEach((doc) => {
      quotesData.push({ id: doc.id, ...doc.data() });
    });
    setQuotes(quotesData);
  };

  // Fetch quotes on component mount
  useEffect(() => {
    getQuotesFromFirebase();
  }, []);

  return (
    <div className='quote-form'>
      <div className='main-farm'>
        <div data-aos="fade-right" className='inputform'>
      <h2>Get a Quote for Your Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className='mes'

          type='text'
          name='name'
          value={quoteDetails.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          className='mes'

          type='email'
          name='email'
          value={quoteDetails.email}
          onChange={handleChange}
          required
        />
        <label>Phone Number:</label>
        <input
          className='mes'

          type='text'
          name='phoneNumber'
          value={quoteDetails.phoneNumber}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          className='mes'
          name='message'
          value={quoteDetails.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className='button' type='submit'>{uploading ? "Submiting..." : "Submit"}</button>
      </form>
      </div>
     




<div  className='loginimg'>

  <img data-aos="fade-up" src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png' alt='' />
</div>
    </div>
    </div>
  );
};
