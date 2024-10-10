import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import homeImage from '../../views/home/Home screen-bro.png';
import './home.css';

function Home(){
  return (
    <div>
      <Navbar />
      <h1>home</h1>
      <img src={homeImage} alt="Feedback" className="header-image" />
    </div>
  )
}

export default Home