import "./Watsapp.css";
import React, { useEffect, useState } from 'react';


const Watsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPositionToShow = 500; // Adjust this value as needed

      setIsVisible(scrollTop > scrollPositionToShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <div>
      {isVisible && (
        <div className='wat'>

          <a id="a1" href='https://api.whatsapp.com/send?text=i saw this on Websites &phone=+91 82196 99134'>
            <img src='https://res.cloudinary.com/drjh3dcfh/image/upload/v1684748368/4-2-whatsapp-transparent_dkamgd.png' alt='js' />
          </a>
          
          {/* <a id="a2" href='tel:+919512244779'>
            Call Us <img src='https://res.cloudinary.com/drjh3dcfh/image/upload/v1684748471/Pngtree_call_icon_png_3621527_uunk6o.png' alt='js' />
          </a> */}
        </div>
      )}
    </div>
  );
};

export default Watsapp;
