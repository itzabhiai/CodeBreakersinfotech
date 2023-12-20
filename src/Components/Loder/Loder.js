import React, { useState, useEffect } from 'react';
import "./Loder.css"
export const Loder = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      // Simulate a delay or condition for visibility
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);
  
      // Clear the timeout when the component is unmounted
      return () => clearTimeout(timeout);
    }, []);
  
    const containerClassName = `mainloader ${visible ? '' : 'exit-animation'}`;
  
  return (
    <div className={containerClassName}>
    <div className='colorful'>

    

    </div>
    </div>
  )
}
