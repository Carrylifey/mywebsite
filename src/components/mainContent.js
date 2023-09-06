// MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
    {/* Left Side (Text) */}
    <div className="left-side">
        <h2>Small Heading</h2>
        <h1>Main Heading</h1>
      </div>

      {/* Right Side (Image) */}
      <div className="right-side">
        <img src="" alt="Image" />
      </div>
    </div>
  );
};

export default MainContent;
