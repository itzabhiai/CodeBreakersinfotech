import React from 'react';
import './Web.css';

import { RiRemoteControl2Line } from "react-icons/ri";
import { BsFilm } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const OTTApps = () => {
  return (
    <div className='mainweb'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>OTT/TV App</title>
                <meta name="description" content="  Our OTT/TV app development services focus on creating engaging platforms that cater to the evolving entertainment needs of modern users." />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <div className='webhero'>
        <>
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            className='webherodata'
          >
            <h1>OTT/TV App Development</h1>
            <p>Delivering immersive and seamless entertainment experiences</p>
            <p>
              Our OTT/TV app development services focus on creating engaging platforms that cater to the evolving entertainment needs of modern users.
            </p>
            <Link to='/contact-us' style={{textDecoration:'none'}}>    <button className='btn-donate'>Schedule a free Consultation</button></Link>
          </div>

          <div className='webheroimg'>
            <img
              data-aos='fade-left'
              src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png'
              alt='OTT/TV App Development'
            />
          </div>
        </>
      </div>

      <div className='webbackground'>
        <div className='webtxt'>
          <h2>Our Approach to OTT/TV App Development</h2>
          <p>OTT/TV apps require a perfect blend of content and technology. Our development process revolves around creating captivating interfaces and seamless streaming experiences.</p>
        </div>
        <div className='webcard'>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><RiRemoteControl2Line /></i>
            <h3>Content Discovery</h3>
            <p>We develop features that assist users in discovering content tailored to their preferences, enhancing user engagement and satisfaction.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><BsFilm /></i>
            <h3>Media Streaming</h3>
            <p>Our apps ensure smooth and high-quality streaming experiences across devices, providing uninterrupted entertainment.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><AiOutlineDesktop /></i>
            <h3>Platform Compatibility</h3>
            <p>We ensure the compatibility of our apps across various platforms, including smart TVs, mobile devices, and web browsers.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><BiCameraMovie /></i>
            <h3>Interactive Experiences</h3>
            <p>Our focus lies in delivering interactive features that enhance user engagement and create memorable viewing experiences.</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default OTTApps;
