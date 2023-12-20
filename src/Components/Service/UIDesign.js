import React from 'react';
import './Web.css';

import { HiOutlineColorSwatch } from "react-icons/hi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { RiLayoutFill } from "react-icons/ri";
import { IoIosRocket } from "react-icons/io";
import { Link } from 'react-router-dom';

export const UIDesign = () => {
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
      <h1>UI/UX Design Services</h1>
      <p>Crafting intuitive and visually appealing user experiences</p>
      <p>
        Our UI/UX design services focus on creating seamless and engaging experiences that
        captivate users, enhance usability, and elevate brand value.
      </p>
      <Link to='/contact-us' style={{textDecoration:'none'}}>    <button className='btn-donate'>Schedule a free Consultation</button></Link>
    </div>

    <div className='webheroimg'>
      <img
        data-aos='fade-left'
        src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png'
        alt='UI/UX Design'
      />
    </div>
  </>
</div>

      <div className='webbackground'>
        <div className='webtxt'>
          <h2>Our Approach to UI/UX Design</h2>
          <p>UI/UX design is more than just creating a visually appealing interface. It's about understanding user behavior and crafting experiences that resonate. At our firm, we follow a comprehensive process that ensures seamless user interactions and stunning aesthetics.</p>
        </div>
        <div className='webcard'>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'>1</i>
            <h3>Visual Design</h3>
            <p>We craft visually captivating designs that resonate with your audience while aligning with your brand's identity. Our designs aim for both aesthetics and functionality.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><HiOutlineColorSwatch /></i>
            <h3>Color & Typography</h3>
            <p>Colors and typography play a vital role in shaping user perception. We meticulously choose colors and fonts that enhance readability and evoke desired emotions.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><AiOutlineAntDesign /></i>
            <h3>User-Centric Approach</h3>
            <p>Our design process revolves around user needs. We conduct thorough research to understand user behavior and preferences, ensuring intuitive and user-friendly interfaces.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><RiLayoutFill /></i>
            <h3>Responsive Layouts</h3>
            <p>We create designs that seamlessly adapt to various devices and screen sizes. Ensuring a consistent and engaging experience across all platforms.</p>
          </div>
          <div data-aos="fade-up" className="wcard">
            <i className='webicon'><IoIosRocket /></i>
            <h3>Prototyping & Testing</h3>
            <p>Prototyping allows us to validate design concepts early on. Through user testing, we refine designs to ensure they not only look great but also perform exceptionally.</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default UIDesign;
