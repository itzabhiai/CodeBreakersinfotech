import React from 'react'
import './Web.css'
import { TbWorldWww } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import { AiOutlineGateway } from 'react-icons/ai'; // Gateway icon
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaChartBar } from 'react-icons/fa';

import { FaUserCog, FaRegLightbulb } from 'react-icons/fa';
import { MdCode, MdStorage, MdSettings, MdBrush } from 'react-icons/md';
import { FiCode , FiHelpCircle } from 'react-icons/fi';
import { AiOutlineCheckCircle, AiOutlineFileText, AiOutlineFolder, AiOutlineRise, AiOutlineTeam } from 'react-icons/ai';
import { IoMdDocument } from 'react-icons/io';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
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

     <div className='webbackground'>
      <div className='webtxt'>
        <h2> Full-Scale Web Development by CodeBreakers</h2>
        </div>
    <div className='webcard'>
         
         <div data-aos="fade-up" className="wcard">
         <i className='webicon2'> <FaChartBar /></i>
           <h3>Business analysis</h3>
           <p>Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned</p>
           <p1 >40+ business analysts</p1>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon2'> <MdBrush/></i>
           
           <h3>UX and UI design</h3>
           <p>We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys. Along the way, our UI designers join in to wrap the interface into a stylish cover.</p>
           <p1 >20+ UX and UI designers</p1>

         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon2'><MdStorage /></i>
           
           <h3>Architecture</h3>
           <p>Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full. They will also map all API connections within the web solution and with outside systems..</p>
           <p1 >Web architects with 10+ years of experience</p1>

         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon2'><FiCode /></i>
           
           <h3>Front-end development</h3>
           <p>Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember.</p>
           <p1 >240+ front-end developers</p1>

         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon2'><MdSettings /></i>
           
           <h3>Back-end development</h3>
           <p>Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go.</p>
           <p1 >200+ back-end developers</p1>

         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon2'><MdComputer /></i>
           
           <h3>Integration</h3>
           <p>We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems.</p>
           

         </div><div data-aos="fade-up" className="wcard">
         <i className='webicon2'><FaRegLightbulb /></i>
           
           <h3>Testing and QA</h3>
           <p>We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that.</p>
           <p1 >70+ testing engineers</p1>

         </div><div data-aos="fade-up" className="wcard">
         <i className='webicon2'><FiHelpCircle /></i>
           
           <h3>Help desk</h3>
           <p>Providing L1, L2 and L3 support services, we deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app.</p>
           <p1 >50+ support engineers</p1>

         </div><div data-aos="fade-up" className="wcard">
         <i className='webicon2'><FaUserCog /></i>
           
           <h3>Continuous support and evolution</h3>
           <p>We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks</p>
           <p1 >240+ front-end developers</p1>

         </div>
         </div>
     </div>
     <div className='webbackground'>
      <div className='webtxt'>
        <h2>How We Ensure Quality in Web Development Projects</h2>
       
        </div>
    <div className='webcard'>
         
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'><AiOutlineCheckCircle /></i>
           <h3>Accurate scoping</h3>
           <p>We put extra effort into defining full and clear software requirements, leaving no gaps or requirement conflicts. This allows us to scope the project accurately and prevent scope creep later.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'> <RiMoneyDollarCircleLine /></i>
           
           <h3>Precise cost estimation</h3>
           <p>We calculate the project cost after thoroughly analyzing software requirements and work breakdown structure to offer our clients precise estimates.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'> <AiOutlineCheckCircle /></i>
           
           <h3>Quality management</h3>
           <p>At ScienceSoft, QA is incorporated into every stage of SDLC, guaranteeing zero severe defects in production. Our approach to quality management is compliant with ISO 9001 standards.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'> <AiOutlineLock /></i>
           
           <h3>Security management</h3>
           <p>With an ISO 27001-certified security management system, we ensure full security of the project environment, our client’s digital assets and intellectual property, and the web software we create.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'><BsPeople /></i>
           
           <h3>Flexible collaboration</h3>
           <p>We adapt the frequency and means of collaboration to our client’s preferences to ensure transparency and steady progress in web development projects.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'><IoMdDocument /></i>
           
           <h3>Complete project documentation</h3>
           <p>We thoroughly document all important decisions regarding the software and its development process to ensure easy app maintenance and evolution in the future.</p>
         </div>
         <div data-aos="fade-up" className="wcard">
         <i className='webicon1'><AiOutlineTeam /></i>
           
           <h3>Mature knowledge management</h3>
           <p>By centralizing documentation and sharing access to it with our client, we guarantee that they own comprehensive project knowledge and prevent the risk of vendor lock-in.</p>
         </div>  <div data-aos="fade-up" className="wcard">
         <i className='webicon1'><AiOutlineRise /></i>
           
           <h3>Proactive success measurement</h3>
           <p>We select the best-suited sets of objectives and key results (OKRs) for each project to evaluate how well the software meets a client’s expectations. Also, we regularly report on the project progress to keep the client well-informed.</p>
         </div>

         </div>
     </div>

    </div>
  )
}
