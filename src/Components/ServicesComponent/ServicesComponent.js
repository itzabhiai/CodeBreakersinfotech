import React, { useState, useEffect } from 'react';
import './ServicesComponent.css'; // Import CSS file for styling
import {Link} from "react-router-dom"
const ServicesComponent = () => {
  const [selectedText, setSelectedText] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const serviceData = [
    {
      title: 'Web Development',
      content:
        'Web development involves creating and maintaining websites to meet your business goals. Our team specializes in front-end and back-end development, ensuring responsive, user-friendly, and scalable web solutions. We use cutting-edge technologies to build custom websites that enhance your online presence and drive success.'
    },
    {
      title: 'Android APP Development',
      content:
        'We specialize in Android app development, creating robust applications tailored to Android devices. Our team crafts feature-rich apps with intuitive interfaces, ensuring seamless user experiences. From conceptualization to deployment, we focus on scalable solutions that meet your business objectives.'
    },
    {
      title: 'iOS App Development',
      content:
        'Our iOS app development involves leveraging the latest technologies to build engaging applications for Apple devices. We ensure optimal performance, employing Swift and Xcode to create user-centric apps. From ideation to App Store deployment, we deliver innovative iOS solutions.'
    },
    {
      title: 'OTT/Tv Apps',
      content:
        'OTT/TV apps require a perfect blend of content and technology. Our development process revolves around creating captivating interfaces and seamless streaming experiences.'

        
    },
    {
      title: 'Testing & QA',
      content:
        'Testing and Quality Assurance form the backbone of our development process. Our comprehensive QA strategies guarantee high-quality products, ensuring functionality and reliability. From automated tests to rigorous manual checks, we assure flawless performance and user satisfaction.'
    },
    {
      title: 'UI/UX Design',
      content:
        'Our UI/UX design focuses on creating visually stunning and user-friendly interfaces. We emphasize intuitive designs that enhance user experiences. With user research and innovative design principles, we craft engaging UI/UX solutions that resonate with your audience.'
    },
    {
      title: 'Digital Marketing',
      content:
        'Digital marketing is our forte, encompassing diverse strategies to boost online visibility. From SEO to targeted campaigns, we optimize digital channels to expand reach and drive engagement. Our data-driven approach ensures effective marketing solutions aligned with your business goals.'
    }
  ];
  

  useEffect(() => {
    // Set the default selected service and its title on component mount
    const defaultService = serviceData[0];
    setSelectedService(defaultService.content);
    setSelectedTitle(defaultService.title);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  

  const handleClickTitle = (title) => {
    setSelectedText(title === selectedText ? null : title);
  };

  const serviceRoutes = {
    'Web Development': 'web',
    'Android APP Development': 'android-app',
    'iOS App Development': 'ios-app',
    'Testing & QA':"testing",
    'UI/UX Design':'ui-desgin',
    'Digital Marketing':'digital-marketing',
    'OTT/Tv Apps':'ottapp'

  };

  const [selectedLink, setSelectedLink] = useState('');

  useEffect(() => {
    const defaultService = serviceData[0];
    setSelectedService(defaultService.content);
    setSelectedTitle(defaultService.title);
    setSelectedLink(serviceRoutes[defaultService.title]);
  }, []);

  const handleClick = (content, title) => {
    setSelectedService(content);
    setSelectedTitle(title);
    setSelectedLink(serviceRoutes[title]);
    setSelectedText(title);
  };

  return (
    <div className="services-container">
      <h2>Service We Offer</h2>
      <div className="services">
        <div data-aos="fade-up" className="headings">
          {serviceData.map((service, index) => (
            <div className="service-box" key={index}>
              <h3
                onClick={() => {
                  handleClick(service.content, service.title);
                }}
                className={selectedText === service.title ? 'clicked' : 'clickable'}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="contant">
          <div className="selected-title">
            {selectedTitle && <h3>{selectedTitle}</h3>}
          </div>
          <div className={`paragraph ${selectedService ? 'fade-in' : ''}`}>
            <p>{selectedService}</p>
           
            {selectedLink && (
              <div className="routing-buttons">
                <Link to={`/${selectedLink}`}>
                  <button className='btnmore'>More →</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;