import React from 'react';
import './navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <h1>REACTRON</h1> 
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/feedback">Feedback</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
