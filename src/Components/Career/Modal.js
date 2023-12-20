import React, { useState } from 'react';
import "./Modal.css"
const Modal = ({ handleClose, show, children, content }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <p className='careerp'>{content}</p>
        <button className='close-button' onClick={handleClose}>X</button>
      </section>
    </div>
  );
};

export default Modal;
