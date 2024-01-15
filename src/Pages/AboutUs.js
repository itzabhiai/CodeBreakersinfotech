import React from 'react'
import "../Pages/About.css"
import { FaCheck } from "react-icons/fa";
import { DisplayQuote } from '../Components/ContactUs/DisplayQuote';
import { GetQuoteForm } from '../Components/ContactUs/GetQuoteForm';
const AboutUs = () => {
  return (
    <div>
    <div className='aboutmain'>
      <div className='hero-about'><h1>About Us</h1></div>
        
<div className='Welcome-card'>
        <div className='welcome-img'>
          <img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705332322/ytfjemonw3bkcvytpwod.png' alt=''/>
        </div>
        <div className='welcome-text'>
          <h3>Welcome to</h3>
          <h2>CodeBreakers Infotech</h2>
          <p>At CodeBreakers Infotech, we specialize in crafting innovative and imaginative products and services. Our primary objective is to deliver top-notch work that not only meets but exceeds the expectations of our customers, fostering lasting partnerships. We are dedicated to offering creative and cutting-edge solutions tailored for medium to large businesses worldwide.</p>

          <p>Our range of solutions empowers our clients to optimize their business processes effectively. We are firm believers in leveraging the latest technology to simplify and enhance user experiences for our clients. At CodeBreakers Infotech, we take pride in delivering high-quality solutions paired with unparalleled customer service, ensuring our clients receive the best in both technology and support.</p>
        </div>

 
    </div>
   
    
   <div className='working-process'>
    <h2>Our Working Process</h2>
    <div className='working-process-card'>
    <div className='working-process-img-card'> 
    <img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705337851/j4juqmbfc7jbfcfjrpcr.png' alt='' />
    <div className='blue-box'></div>
    <div className='blue-box1'></div>
        <p >Discovery</p>
    </div>
    <div className='working-process-img-card'> 
    <img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705337774/mpanec0k4xnnud3tvrq9.png' alt='' />
    <div className='blue-box'></div>
    <div className='blue-box1'></div>
        <p>Planning</p>
    </div>

    <div className='working-process-img-card'> 
    <img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705337734/ms4qudoqysnkfqtjngny.png' alt='' />
    <div className='blue-box'></div>
    <div className='blue-box1'></div>
        <p>Execute</p>
    </div>

    <div className='working-process-img-card'> 
    <img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705337723/onknh3yy6fkkccuvsedg.png' alt='' />
    <div className='blue-box'></div>
    <div className='blue-box1'></div>
        <p>Deliver</p>
    </div>
   </div>

   
   </div>


   <div className='pricing'>
<h3>Our Pricing Plan</h3>
<div className='pricing-card'>
<div className='pricing-card-contant'>
<img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705340541/zrtaik5tb9rjzjbtgbn4.png' alt='' />
<h2>$20.00</h2>
<p>Hourly Hiring</p>

<ul> <li>Dedicated Developer/Team  </li> <FaCheck className='check'/></ul> 
<ul><li>Agile Methodology</li> <FaCheck className='check' /></ul> 
<ul><li>On-Time Delivery of Project</li> <FaCheck className='check'/></ul> 
<ul><li>Strict NDA Signed for Complete Privacy</li> <FaCheck className='check'/></ul> 
<button className='btn-donate'>Book Now</button>

<div className='hourly'> Hourly</div>
</div>
<div className='pricing-card-contant'>
<img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705340541/zrtaik5tb9rjzjbtgbn4.png' alt='' />
<h2>$2499</h2>
<p>Monthly Hiring</p>

<ul> <li>Dedicated Developer/Team </li> <FaCheck className='check'/></ul> 
<ul><li>Agile Methodology</li> <FaCheck className='check' /></ul> 
<ul><li>On-Time Delivery of Project</li> <FaCheck className='check'/></ul> 
<ul><li>Strict NDA Signed for Complete Privacy</li> <FaCheck className='check'/></ul> 
<button className='btn-donate'>Book Now</button>

<div className='hourly'>Monthly</div>
</div>
<div className='pricing-card-contant'>
<img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1705340541/zrtaik5tb9rjzjbtgbn4.png' alt='' />
<h5>Contact us for Yearly Hiring</h5>
<p>Yearly Hiring</p>

<ul> <li>Dedicated Developer/Team  </li> <FaCheck className='check'/></ul> 
<ul><li>Agile Methodology</li> <FaCheck className='check' /></ul> 
<ul><li>On-Time Delivery of Project</li> <FaCheck className='check'/></ul> 
<ul><li>Strict NDA Signed for Complete Privacy</li> <FaCheck className='check'/></ul> 
<button className='btn-donate'>Book Now</button>

<div className='hourly'> Yearly</div>
</div>
   </div>  
   
 <GetQuoteForm/>
    </div>

    </div>
    </div>

  )
}

export default AboutUs