import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import feedbackImage from '../../views/feedback/feedback.png';
import './feedback.css';

function Feedback() { 
  return (
    <div>
      <Navbar />
      <h1>Feedback</h1> 
      <img src={feedbackImage} alt="Feedback" className="header-image" />
    </div>
  );
}

export default Feedback;
