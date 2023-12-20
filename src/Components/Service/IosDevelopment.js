import React from 'react';
import './Web.css';
import { IoLogoApple } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const IosDevelopment = () => {
  return (
    <div className='mainweb'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>iOS Development</title>
                <meta name="description" content=" Expertise in crafting exceptional iOS applications" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      {/* Web Hero */}
      <div className='webhero'>
        <>
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            className='webherodata'
          >
            <h1>iOS Development Services</h1>
            <p>Expertise in crafting exceptional iOS applications</p>
            <p>
              Leveraging extensive experience in iOS app development, we specialize in creating
              user-friendly and innovative solutions that resonate with Apple users worldwide.
            </p>
            <Link to='/contact-us' style={{textDecoration:'none'}}>    <button className='btn-donate'>Schedule a free Consultation</button></Link>
          </div>

          <div className='webheroimg'>
            <img
              data-aos='fade-left'
              src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png'
              alt='iOS Development'
            />
          </div>
        </>
      </div>

      {/* Web Background */}
      <div className='webbackground'>
        <div className='webtxt'>
          <h2>What iOS Solution Do You Need?</h2>
          <p>
            Our iOS development services encompass a range of applications tailored to meet diverse
            client needs. From business-centric apps to engaging consumer-focused solutions, we
            ensure top-notch performance and user experience across all iOS devices.
          </p>
        </div>

        {/* Web Cards */}
        <div className='webcard'>
          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoLogoApple />
            </i>
            <h3>iOS Applications</h3>
            <p>
              We excel in developing custom iOS apps that resonate with the Apple ecosystem and
              offer seamless functionality and engaging user experiences.
            </p>
          </div>

          {/* Additional Cards */}
          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoLogoApple />
            </i>
            <h3>App Prototyping</h3>
            <p>
              Our team assists in the initial stages of app development, creating prototypes to
              validate ideas and streamline the development process.
            </p>
          </div>

          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoLogoApple />
            </i>
            <h3>iOS UI/UX Design</h3>
            <p>
              We focus on crafting visually stunning and intuitive interfaces, ensuring a seamless
              user experience throughout the app.
            </p>
          </div>

          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoLogoApple />
            </i>
            <h3>App Maintenance</h3>
            <p>
              We provide comprehensive support and maintenance services to keep your iOS apps
              up-to-date and running smoothly.
            </p>
          </div>

          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoLogoApple />
            </i>
            <h3>iOS Integration</h3>
            <p>
              Our expertise extends to integrating iOS apps with existing systems, ensuring
              seamless operation and data flow.
            </p>
          </div>

          <div data-aos='fade-up' className='wcard'>
            <i className='webicon'>
              <IoLogoApple />
            </i>
            <h3>App Store Optimization</h3>
            <p>
              We employ strategies to optimize app visibility and performance on the App Store,
              enhancing reach and downloads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IosDevelopment;
