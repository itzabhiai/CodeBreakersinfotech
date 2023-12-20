import React from 'react'
import { useState,useEffect } from 'react';
import "./Hero.css"
import { Loder } from '../Loder/Loder';
export const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [videoSource, setVideoSource] = useState('');

  useEffect(() => {
    // Fetch the video source path or use an imported video path
    const pathToVideo = '/https://res.cloudinary.com/ddkyeuhk8/video/upload/v1703060294/x4st7j37gh10u0h7ijrq.webm';
    setVideoSource(pathToVideo);
  }, []);
  useEffect(() => {
    // Simulate data loading
    fetchData().then(() => setLoading(false));
  }, []);

  const fetchData = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual API call
    // Update loading state when data is ready
  };

  return (
    
    <div className='hero'>
      <video autoplay loop muted>
  <source src={videoSource} type="video/webm"/>

</video>

      {loading ? (
        <Loder/>
      ) : (
        <>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='herodata'>
<h1>Elevate Your Enterprise with Our Mastery</h1>
<p>Creating innovative and state-of-the-art goods and services that transform the digital
market is our mission at Code Breakers Infotech. Delivering the best possible work is our
main objective, as it should motivate our clients to choose us as their go-to web
development partner.</p>
<button className='btn-donate'>Schedule a free Consultation</button>
    </div>
    
    <div className='heroimg'>
      <img data-aos="fade-left" src='https://res.cloudinary.com/dy4uaesfo/image/upload/v1702456261/Untitled_design_57_mstpwx.png' alt=''/>
    </div>
     </>
     )}
    </div>
  )
}
