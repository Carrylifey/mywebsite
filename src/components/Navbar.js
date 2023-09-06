import React from 'react';
import './Style.css'; // Assuming style.css is in the same directory


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo */}
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        {/* Navigation Links */}
        <ul>
          <li><a href="#emotions">Emotions</a></li>
          <li><a href="#manifesto">Manifesto</a></li>
          <li><a href="#self-awareness">Self Awareness Test</a></li>
          <li><a href="#work-with-us">Work with Us</a></li>
        </ul>
      </div>
      <div className="navbar-buttons">
        {/* Download Now Button */}
        <button className="download-button">Download Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
