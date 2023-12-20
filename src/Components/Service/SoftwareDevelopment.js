import React from 'react';
import './Web.css';
import { FaCode ,FaCloud } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const SoftwareDevelopment = () => {
  return (
    <div className='mainweb'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Software Development</title>
                <meta name="description" content=" Be spoke solutions for your software development needs" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <div className='webhero'>
        <>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className='webherodata'>
            <h1>Software Development Services</h1>
            <p>Be spoke solutions for your software development needs</p>
            <p>Our team excels in crafting tailored software solutions to address complex business challenges. From planning to deployment, we ensure scalable and efficient software delivery.</p>
            <Link to='/contact-us' style={{textDecoration:'none'}}>    <button className='btn-donate'>Schedule a free Consultation</button></Link>
          </div>
          <div className='webheroimg'>
            <img data-aos="fade-left" src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png' alt='' />
          </div>
        </>
      </div>
      <div className='webbackground'>
        <div className='webtxt'>
          <h2> What Software Solution Do You Need?</h2>
          <p>Our software development services encompass various aspects of the software lifecycle. We cater to diverse needs and ensure solutions that align with your business objectives.</p>
        </div>
        <div className='webcard'>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><FaCode /></i>
            <h3>Custom Software</h3>
            <p>We specialize in crafting bespoke software solutions tailored to meet your unique business requirements, ensuring scalability, and flexibility for future enhancements.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'> <AiOutlineDeploymentUnit /></i>
            <h3>Enterprise Applications</h3>
            <p>Our expertise lies in developing robust enterprise-level applications that streamline operations, improve efficiency, and support business growth.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><BiNetworkChart /></i>
            <h3>Networking Solutions</h3>
            <p>We offer networking solutions to build secure and scalable networks, ensuring seamless connectivity and data transfer within your organization.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><FiDatabase /></i>
            <h3>Database Management</h3>
            <p>Our services include robust database management solutions, ensuring efficient storage, retrieval, and management of your data assets.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><FaCloud /></i>
            <h3>Cloud Solutions</h3>
            <p>We provide cloud-based solutions to optimize infrastructure, enhance scalability, and enable cost-effective operations for your software applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
