import React from 'react';
import './WhyUs.css';
import { FaExpand ,FaChartPie } from 'react-icons/fa';
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { HiArrowsPointingOut ,HiOutlineUserGroup ,HiMiniCodeBracketSquare ,HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";

const WhyUs = () => {
 return (
    <div className="why-us-container">
      <h2>Why Us?    <hr style={{width:"100px"}}/></h2>
   
      <div className="why-us">
      <div   data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="highlight">
        <div className="item">
          <i className="fas fa-code"><HiMiniCodeBracketSquare  /></i>
          <h3>High Quality Code</h3>
        </div>
        <div className="item">
          <i className="fas fa-user-secret">  <GrShieldSecurity /></i>
          <h3>Data Security</h3>
        </div>
        <div className="item">
          <i className="fas fa-users"><BiLogoMicrosoftTeams /></i>
          <h3>Full Stack Team</h3>
        </div>
      
     
        <div className="item">
          <i className="fas fa-code-branch"><FaChartPie /></i>
          <h3>AGILE APPROACH</h3>
        </div>
        <div className="item">
          <i className="fas fa-dollar-sign"><HiMiniCurrencyDollar  /></i>
          <h3>COST-EFFECTIVENESS</h3>
        </div>
        <div className="item">
          <i className="fas fa-industry"><HiOutlineUserGroup  /></i>
          <h3>INDUSTRY EXPERTISE</h3>
        </div>
        <div className="item">
          <i className="fas fa-mobile-alt"><HiOutlineLightBulb /></i>
          <h3>INNOVATIVE TECHNOLOGY</h3>
        </div>
        <div className="item">
          <i className="fas fa-expand"><HiArrowsPointingOut /></i>
          <h3>SCALABILITY</h3>
        </div>
      </div>
      <div data-aos="fade-up" className='whylogo'>
<img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702205161/ufq3pmqatk2pmkyhxdmn.png' alt=' ' />
      </div>
      </div>
    </div>
 );
};

export default WhyUs;

// HiMiniCodeBracketSquare 