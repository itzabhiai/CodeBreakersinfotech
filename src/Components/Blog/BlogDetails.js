
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { textdb } from '../.././firebaeConfig';
import DOMPurify from 'dompurify';
import "./Blogdetails.css"
import { GetQuoteForm } from '../ContactUs/GetQuoteForm';
import { Loder } from '../Loder/Loder';
import { Helmet } from 'react-helmet';
export const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const docRef = doc(textdb, 'blogs', blogId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (!blog) {
    return <p><Loder/></p>;
  }

  return (
    <div className='main-detail'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{blog.title}</title>
                <meta name="description" content="" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <div data-aos='fade-up' className='detail'>
      <img src={blog.imageUrl} alt={blog.title} style={{ maxWidth: '100%' }} />
      <h2>{blog.title}</h2>
      {/* <p>{blog.p1}</p> */}
              
              
                <div className='blogp' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}></div>


                </div>
                
    </div>
  );
};


