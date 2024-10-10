import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      REACTRON
      <nav>
        <ul>
          <a href="/"> 
            <li className="navlinks">home</li>
          </a>
          <a href="/about"> 
            <li className="navlinks">about</li>
          </a>
          <a href="/contact"> 
            <li className="navlinks">contact</li>
          </a>
          <a href="/feedback"> 
            <li className="navlinks">Feedback</li>
          </a>
        </ul>
      </nav>
      
    </div>
  );
}

export default Navbar;
