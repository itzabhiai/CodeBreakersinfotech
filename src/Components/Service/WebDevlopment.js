import React from 'react'
import './Web.css'
import { TbWorldWww } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import { AiOutlineGateway } from 'react-icons/ai'; // Gateway icon
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export const WebDevlopment = () => {
  return (
    <div className='mainweb'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Web Development</title>
                <meta name="description" content="Genuine care for your web development project" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
         <div className='webhero'>
     
        <>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='webherodata'>
<h1>Web Development Services</h1>
<p>Genuine care for your web development project</p>
<p>With the expertise built on 1,000+ web projects, ScienceSoft professionally designs, redesigns and continuously supports customer-facing and enterprise web apps and achieves high conversion and adoption rates.</p>
<Link to='/contact-us' style={{textDecoration:'none'}}>  <button className='btn-donate'>Schedule a free Consultation</button></Link>
    </div>
    
    <div className='webheroimg'>
      <img data-aos="fade-left" src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702460221/gj6pbwzrmtkicgqt8gqm.png' alt=''/>
    </div>
     </>
     
    </div>
    <div className='webbackground'>
      <div className='webtxt'>
        <h2> What Web Solution Do You Need?</h2>
        <p>Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside but we approach them differently and know what factors are winning in each case.</p>
        </div>
    <div className='webcard'>
         
         <div data-aos="fade-up" className="wcard">
         <i className='webicon'><TbWorldWww /></i>
           <h3>Web Sites</h3>
           <p>250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon'> <AiOutlineGateway /></i>
           
           <h3>Web portals</h3>
           <p>Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon'><RiShoppingBag3Fill /></i>
           
           <h3>Ecommerce</h3>
           <p>20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon'><MdComputer /></i>
           
           <h3>Web Apps</h3>
           <p>In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation.</p>
         </div>
         </div>
     </div>


    </div>
  )
}
