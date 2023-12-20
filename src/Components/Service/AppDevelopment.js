import React from 'react';
import './Web.css';
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { Helmet } from 'react-helmet';

export const AppDevelopment = () => {
  return (
    <div className='mainweb'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>App Development</title>
                <meta name="description" content=" Customized solutions for your application development needs" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <div className='webhero'>
        <>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className='webherodata'>
            <h1>App Development Services</h1>
            <p>Customized solutions for your application development needs</p>
            <p>With experience in developing diverse applications, our team delivers tailored solutions to meet your business requirements. We ensure seamless user experiences and efficient functionality.</p>
            <button className='btn-donate'>Get in Touch</button>
          </div>
          <div className='webheroimg'>
            <img data-aos="fade-left" src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png' alt='' />
          </div>
        </>
      </div>
      <div className='webbackground'>
        <div className='webtxt'>
          <h2> What App Solution Do You Need?</h2>
          <p>Our app development services cover a wide spectrum of needs, catering to various platforms and functionalities. We understand the nuances of different app types and deliver solutions that resonate with your audience.</p>
        </div>
        <div className='webcard'>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><MdPhoneIphone /></i>
            <h3>Mobile Apps</h3>
            <p>We specialize in creating user-friendly mobile applications for iOS and Android platforms. Our apps focus on delivering exceptional user experiences while ensuring performance and reliability.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'> <RiComputerLine /></i>
            <h3>Desktop Apps</h3>
            <p>For desktop applications, we design and develop software that suits various operating systems, enhancing productivity and functionality for your business operations.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><FaMobileAlt /></i>
            <h3>Hybrid Apps</h3>
            <p>Our expertise in hybrid app development allows us to create versatile apps compatible with multiple platforms, reducing development time and cost while maintaining quality.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><IoIosApps /></i>
            <h3>Custom App Solutions</h3>
            <p>We offer custom app development solutions tailored to your specific business needs, leveraging cutting-edge technologies to provide scalable and efficient applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
