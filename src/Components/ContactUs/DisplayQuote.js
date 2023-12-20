import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc ,doc} from 'firebase/firestore';
import { textdb } from '../.././firebaeConfig';
import PushNotification from 'react-push-notification';
import "./DisplayQuote.css"
export const DisplayQuote = ({ user }) => {

    const [userRole, setUserRole] = useState(null); 
  const [quotes, setQuotes] = useState([]);
  const [previousQuotesCount, setPreviousQuotesCount] = useState(0);
  const getQuotesFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(textdb, 'quotes'));
    const quotesData = [];
    querySnapshot.forEach((doc) => {
      quotesData.push({ id: doc.id, ...doc.data() });
    });
    setQuotes(quotesData.reverse()); // Reverse the order to show the latest entry first
  };

  useEffect(() => {
    getQuotesFromFirebase();
  }, []);
  useEffect(() => {
    getQuotesFromFirebase();
    // Set the initial count of quotes
    setPreviousQuotesCount(quotes.length);
  }, []);

  useEffect(() => {
    // Check for new entries whenever quotes array changes
    if (quotes.length > previousQuotesCount) {
      handleNewEntry();
      setPreviousQuotesCount(quotes.length); // Update the count
    }
  }, [quotes, previousQuotesCount]);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(textdb, 'quotes', id));
      getQuotesFromFirebase();
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };
  const handleNewEntry = (entry) => {
    if (entry && entry.name && entry.phoneNumber && entry.email) {
      const { name, phoneNumber, email } = entry;
  
      const notificationText = `New Entry: ${name} - ${phoneNumber} - ${email}`;
  
      if (Notification.permission === 'granted') {
        const notification = new Notification('New Entry!', {
          body: notificationText,
          icon: '/path/to/icon.png', // Replace with your icon path
        });
  
        notification.addEventListener('click', () => {
          // Navigate to the table path or perform an action
          // Example: Redirect to a specific page or scroll to the table
          window.location.href = '/your-table-path'; // Replace with your table path
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('New Entry!', {
              body: notificationText,
              icon: '/path/to/icon.png', // Replace with your icon path
            });
          }
        });
      }
    } else {
      console.error('Entry data is missing or incomplete.');
      // Handle the case where the entry data is missing or incomplete
    }
  };
  
  return (
    <div className='displayquote'>
      <h3>Previous Quotes:</h3>
      <div className='mainquote'>
      <table >
        <thead>
          <tr>
            <th id='name'>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.name}</td>
              <td>{quote.email}</td>
              <td>{quote.phoneNumber}</td>
              <td>{quote.message}</td>
              
                <td>
                  <button className='delete' onClick={() => handleDelete(quote.id)}>Delete</button>
                </td>
            
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
};
