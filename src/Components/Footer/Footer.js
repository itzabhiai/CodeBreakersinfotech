import React from 'react';
import "./Footer.css"
import { FaFacebook ,FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img
              style={{ width:"85%" }}
              src="https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702117256/sibztxkzea6bxtod0ehf.png"
              alt=""
            />
             <div className="footer-icons">
          <a href="#">
            <i className="insta"> <IoLogoInstagram /></i>
          </a>
          <a href="#">
            <i className="fa fa-face"><FaFacebook /></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"><CiLinkedin /></i>
          </a>
          <a href="#">
            <i className="fa fa-github"> <FaGithub /></i>
          </a>
        </div>
          </span>
        </h3>
        <p className="footer-links">
      <Link to="/">  <a className="link-1">
            Home
          </a></Link>  
          <Link to="srvices"> <a >Services </a></Link>  
          <Link to="portfolio"> <a >Portfolio </a></Link>  
          <Link to="/career"> <a >Career </a></Link>  
          <Link to="/blog"> <a >Blog </a></Link>  
          <Link to="/contact-us"><a >Contact </a></Link>  
        </p>
        
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> <FaMapMarkerAlt />444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p><FaPhone/> +1.555.555.5555</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p style={{ color: 'white' }} className="footer-company-about">
          <span>About the company</span>
          E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.
        </p>
       
        <p className="footer-company-name">Code Brakers Infotech © 2023</p>

      </div>
    </footer>
  );
};

export default Footer;
