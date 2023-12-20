import React from 'react';
import './Web.css';
import { IoMdMegaphone } from 'react-icons/io';
import { FaRegChartBar } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { RiAdvertisementFill } from 'react-icons/ri';
import { BsChatQuote } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DigitalMarketing = () => {
  return (
    <div className='webbackground'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Digital Marketing</title>
                <meta name="description" content=" Boost your digital presence with our comprehensive marketing strategies" />
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
      <h1>Digital Marketing Services</h1>
      <p>Boost your digital presence with our comprehensive marketing strategies</p>
      <p>
        Our tailored digital marketing solutions help businesses expand their online reach,
        increase brand visibility, and engage with target audiences across various
        platforms.
      </p>
      <Link to='/contact-us' style={{textDecoration:'none'}}>    <button className='btn-donate'>Schedule a free Consultation</button></Link>
    </div>

    <div className='webheroimg'>
      <img
        data-aos='fade-left'
        src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png'
        alt='Digital Marketing'
      />
    </div>
  </>
</div>

      <div className='webtxt'>
        <h2>Digital Marketing Solutions</h2>
        <p>
          Our digital marketing strategies are tailored to drive engagement, traffic, and conversions.
          We harness the power of digital platforms to amplify your brand's presence and maximize
          ROI.
        </p>
      </div>
      <div className='webcard'>
        <div data-aos='fade-up' className='wcard'>
          <i className='webicon'>
            <IoMdMegaphone />
          </i>
          <h3>Social Media</h3>
          <p>
            Engage with your audience on social media platforms. We create compelling content and
            strategies to increase brand awareness and drive user engagement.
          </p>
        </div>
        <div data-aos='fade-up' className='wcard'>
          <i className='webicon'>
            <FaRegChartBar />
          </i>
          <h3>SEO & Analytics</h3>
          <p>
            Boost your website's visibility with effective SEO strategies. Our analytics-driven
            approach ensures data-backed decisions to improve your online presence.
          </p>
        </div>
        <div data-aos='fade-up' className='wcard'>
  <i className='webicon'>
    <AiOutlineMobile />
  </i>
  <h3>Mobile Marketing</h3>
  <p>
    Leverage mobile devices to reach your audience. We craft mobile-centric strategies for
    app promotion, SMS marketing, and location-based targeting.
  </p>
</div>
<div data-aos='fade-up' className='wcard'>
  <i className='webicon'>
    <RiAdvertisementFill />
  </i>
  <h3>PPC Advertising</h3>
  <p>
    Accelerate your marketing efforts with Pay-Per-Click ads. Our targeted campaigns on
    various platforms ensure optimal ad performance and conversions.
  </p>
</div>
<div data-aos='fade-up' className='wcard'>
  <i className='webicon'>
    <BsChatQuote />
  </i>
  <h3>Content Marketing</h3>
  <p>
    Deliver value through content. We curate engaging, high-quality content to attract,
    inform, and convert your audience into customers.
  </p>
</div>


      </div>
    </div>
  );
};

export default DigitalMarketing;
