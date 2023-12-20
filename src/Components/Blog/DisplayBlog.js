import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { textdb } from '../.././firebaeConfig';
import { collection } from 'firebase/firestore';
import './DisplayBlog.css';
import { Link, useNavigate } from 'react-router-dom';
import { Loder } from '../Loder/Loder';
import { Helmet } from 'react-helmet';

export const DisplayBlog = () => {
  const [blogs, loading, error] = useCollection(collection(textdb, 'blogs'));
  const navigate = useNavigate();

  return (
    <div className='blogdishmain'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
                <meta name="description" content=" Read Our Blogs" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <h2 className='disph2'>Read Blog</h2>
      {loading && <p><Loder/></p>}
      {error && <p>Error fetching blogs</p>}

      {blogs && (
        <div className='dismain'>
          {blogs.docs.map((blog) => {
            const data = blog.data();
            return (
              <div data-aos='fade-up' className='DisplayCard' key={blog.id}>
                <img src={data.imageUrl} alt={data.title} style={{ maxWidth: '100%' }} />
                <p className='time'>{data.timestamp && data.timestamp.toDate().toLocaleString()}</p>
                <h3 className='btitle'>{data.title}</h3>
               
                <p className='blogp' >{data.p1}</p>
                <Link to={`/blog/${blog.id}`} className='blog-link'>
                  <button className='bn11'>More →</button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};


