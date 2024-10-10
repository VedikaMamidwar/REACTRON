import React from 'react';
import Navbar from '../../Components/navbar/navbar'; 
import contactImage from '../../views/contact/contact.png';
import './contact.css'; 

function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <img src={contactImage} alt="Contact" className="header-image" />
    </div>
  );
}

export default Contact;
