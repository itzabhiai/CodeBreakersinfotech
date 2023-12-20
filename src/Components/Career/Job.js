import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { storage, textdb } from '../.././firebaeConfig';
import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { toast } from 'react-toastify';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; // Import the library
import { GoogleSpreadsheet } from 'google-spreadsheet';
export const Job = () => {
  const [jobs, loading, error] = useCollection(collection(textdb, 'job'));

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

  const handleDelete = async (jobId, imageUrl) => {
    try {
      const jobRef = doc(collection(textdb, 'job'), jobId);

      // Delete the document from Firestore
      await deleteDoc(jobRef);

      // Delete the image from storage
      const imageRef = ref(storage, `job_images/${imageUrl}`);
      await deleteObject(imageRef);

      toast.success('Blog deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Error deleting blog');
    }
  };

  const DownloadButton = ({ imageUrl }) => {
    const [url, loading, error] = useDownloadURL(ref(storage, `job_images/${imageUrl}`));

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error loading image</p>;
    }

    return (
      <a href={url} download>
        Download Image
      </a>
    );
  };
  const exportToGoogleSheet = async () => {
    try {
      // Initialize the Google Sheets API
      const doc = new GoogleSpreadsheet(); // Leave it empty to create a new Sheet
      await doc.useServiceAccountAuth(require('./YOUR_JSON_FILE.json'));

      // Create a new Sheet
      await doc.loadInfo();
      const sheet = await doc.addSheet({ title: 'Job Data' });

      // Add header row
      await sheet.setHeaderRow(['Image', 'Position', 'First Name', 'Last Name', 'Email', 'Mobile', 'Message']);

      // Add data rows
      jobs.docs.forEach((job) => {
        const data = job.data();
        sheet.addRow([
          data.imageUrl,
          data.position,
          data.firstName,
          data.lastName,
          data.email,
          data.mobile,
          data.message,
        ]);
      });

      toast.success('Data exported to Google Sheets successfully!');
    } catch (error) {
      console.error('Error exporting data to Google Sheets:', error);
      toast.error('Error exporting data to Google Sheets');
    }
  };

  return (
    <div>
      <h2>Job List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching blogs</p>}
      {jobs && (
        <div>
        
          <ReactHTMLTableToExcel
            id="exportButton"
            className="btn btn-info"
            table="jobTable"
            filename="job_data"
            sheet="Job Data"
            buttonText="Export to Excel"
            onClick={exportToGoogleSheet}
          /> 
          <table id="jobTable">
            <thead>
              <tr>
                <th>Image</th>
                <th>Position</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.docs.map((job) => {
                const data = job.data();
                return (
                  <tr key={job.id}>
                    <td>
                      <img src={data.imageUrl} alt={data.firstname} style={{ maxWidth: '100px' }} />
                    </td>
                    <td>{data.position}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.mobile}</td>
                    <td>{data.message}</td>
                    <td>
                      <button onClick={() => handleDelete(job.id, data.imageUrl)}>Delete</button>
                      <DownloadButton imageUrl={data.imageUrl} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
