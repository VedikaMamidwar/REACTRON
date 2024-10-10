import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import aboutImage from '../../views/about/About us page-bro.png';
import './about.css';


function About(){
  return (
    <div>
      <Navbar />
      <h1>about</h1>
      <img src={aboutImage} alt="Feedback" className="header-image" />
    </div>
  );
}

export default About;