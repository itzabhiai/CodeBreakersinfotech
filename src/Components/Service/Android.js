import React from 'react';
import './Web.css';
import { IoLogoAndroid, IoMdPhonePortrait, IoMdRocket } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Android = () => {
    return (
        <div className='mainweb'>
            <div className='webhero'>
     
     <>
   <div data-aos="fade-right"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine" className='webherodata'>
 <h1>Android App Development Services</h1>
    <p>Genuine care for your Android app development project</p>
    <p>With expertise in crafting versatile Android applications, we specialize in creating user-centric, scalable solutions that elevate businesses and user experiences.</p>
    <Link to='/contact-us' style={{textDecoration:'none'}}>    <button className='btn-donate'>Schedule a free Consultation</button></Link>
 </div>
 
 <div className='webheroimg'>
   <img data-aos="fade-left" src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png' alt=''/>
 </div>
  </>
  
 </div>
          <div className='webbackground'>
            <div className='webtxt'>
              <h2> Android App Development Solutions</h2>
              <p> Explore our Android app development services tailored to meet your business objectives. Our team ensures top-notch performance and user-friendly experiences.</p>
            </div>
            <div className='webcard'>
              <div data-aos='fade-up' className='wcard'>
                <i className='webicon'><IoLogoAndroid /></i>
                <h3>Native Android Apps</h3>
                <p>Utilize the power of native Android apps crafted with expertise in Java or Kotlin to offer high-performance user experiences.</p>
              </div>
              <div data-aos='fade-up' className='wcard'>
                <i className='webicon'><IoMdPhonePortrait /></i>
                <h3>Responsive Design</h3>
                <p>Create intuitive interfaces for seamless experiences across various Android devices and screen sizes.</p>
              </div>
              <div data-aos='fade-up' className='wcard'>
                <i className='webicon'><IoMdRocket /></i>
                <h3>App Launch & Support</h3>
                <p>From development to deployment, ensure your app's success with our comprehensive support and maintenance services.</p>
              </div>
              {/* Add more points as needed */}
            </div>
          </div>
        </div>
      );
    };

export default Android;
