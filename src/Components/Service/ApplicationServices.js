import React from 'react';
import './Web.css';
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt, FaRegClone } from "react-icons/fa";


export const ApplicationServices = () => {
  return (
    <div className='mainweb'>
      <div className='webhero'>
        {/* Hero section code remains unchanged */}
      </div>

      <div className='webbackground'>
        <div className='webtxt'>
          <h2>What Application Services Do You Need?</h2>
          <p>We offer a wide array of application services catering to diverse platforms and functionalities, ensuring seamless experiences for users and businesses.</p>
        </div>

        <div className='webcard'>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><MdPhoneIphone /></i>
            <h3>Mobile Applications</h3>
            <p>Specializing in creating user-friendly mobile applications for iOS and Android platforms, ensuring exceptional user experiences and performance.</p>
          </div>

          <div data-aos="fade-up" className="wcard">
            <i className='webicon'> <RiComputerLine /></i>
            <h3>Desktop Applications</h3>
            <p>Developing software applications for various operating systems, enhancing productivity and functionality for businesses.</p>
          </div>

          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><FaMobileAlt /></i>
            <h3>Hybrid Applications</h3>
            <p>Creating versatile applications compatible with multiple platforms, reducing development time and costs while maintaining quality.</p>
          </div>

          <div data-aos="fade-up" className="wcard">
            <i className='webicon'>< k/></i>
            <h3>Custom Application Solutions</h3>
            <p>Offering tailored application solutions addressing specific business needs, leveraging cutting-edge technologies for scalability and efficiency.</p>
          </div>

          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><FaRegClone /></i>
            <h3>Application Replication</h3>
            <p>Duplicating and replicating existing applications to different platforms or versions, ensuring consistency and usability across various environments.</p>
          </div>

          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><k/></i>
            <h3>Application Migration</h3>
            <p>Assisting in migrating applications to new environments or platforms, ensuring seamless transition and optimal performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
