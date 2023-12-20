import React from 'react';
import './Web.css';
import { IoConstruct ,IoSpeedometerOutline  } from 'react-icons/io5';
import { VscSymbolNamespace } from "react-icons/vsc";
import { FiShield } from "react-icons/fi";
import { Link } from 'react-router-dom';
export const TestingQA = () => {
  return (
    <div className='mainweb'>
      
      <div className='webhero'>
        <>
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            className='webherodata'
          >
            <h1>Testing & Quality Assurance</h1>
            <p>Ensuring quality and reliability through comprehensive testing</p>
            <p>
              Our dedicated QA team conducts rigorous testing protocols to guarantee smooth
              functionality and eliminate performance issues across various applications and
              platforms.
            </p>
            <Link to='/contact-us' style={{textDecoration:'none'}}>   <button className='btn-donate'>Schedule a free Consultation</button></Link>
          </div>

          <div className='webheroimg'>
            <img
              data-aos='fade-left'
              src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png'
              alt='Testing & QA'
            />
          </div>
        </>
      </div>

      {/* Web Background */}
      <div className='webbackground'>
        <div className='webtxt'>
          <h2>Our Testing Approach</h2>
          <p>
            We employ a meticulous testing strategy to ensure that your applications are robust,
            secure, and optimized for seamless performance. Our QA experts focus on various testing
            types to meet quality benchmarks.
          </p>
        </div>

        {/* Web Cards */}
        <div className='webcard'>
          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoConstruct />
            </i>
            <h3>Functional Testing</h3>
            <p>
              Our team rigorously tests each function of your application to verify that it behaves
              as expected and meets all requirements.
            </p>
          </div>

          <div data-aos='fade-up' className='wcard'>
  <i className='webicon'>
  <VscSymbolNamespace />
  </i>
  <h3>Usability Testing</h3>
  <p>
    Ensuring that your application provides a seamless user experience across various devices
    and scenarios.
  </p>
</div>

<div data-aos='fade-up' className='wcard'>
  <i className='webicon'>
  <IoSpeedometerOutline />
  </i>
  <h3>Performance Testing</h3>
  <p>
    Assessing the speed, responsiveness, and stability of your application under different
    load conditions.
  </p>
</div>

<div data-aos='fade-up' className='wcard'>
  <i className='webicon'>
  <FiShield />
  </i>
  <h3>Security Testing</h3>
  <p>
    Identifying vulnerabilities and ensuring robust security measures to protect your
    application and user data.
  </p>
</div>
        </div>
      </div>
    </div>
  );
};

export default TestingQA;
