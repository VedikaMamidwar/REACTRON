import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import feedbackImage from '../../views/feedback/feedback.png';
import './feedback.css';

function Feedback() { // Capitalized the function name
  return (
    <div>
      <Navbar />
      <h1>Feedback</h1> {/* Corrected capitalization */}
      <img src={feedbackImage} alt="Feedback" className="header-image" />
    </div>
  );
}

export default Feedback;
