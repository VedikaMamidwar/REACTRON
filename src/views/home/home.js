import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import homeImage from '../../views/home/Home screen-bro.png';
import './home.css';
import toast, { Toaster } from "react-hot-toast";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>home</h1>
      <img src={homeImage} alt="Feedback" className="header-image" />

      <button className="my-button" onClick={() => {
        toast.loading("Loaded..");
      }}>
        Click me!!
      </button>
      <Toaster  />
    </div>
  );
}

export default Home;
