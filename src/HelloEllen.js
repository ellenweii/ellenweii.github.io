// src/HelloEllen.js

import React from 'react';
import './HelloEllen.css'; // Import the CSS file

const HelloEllen = () => {
  return (
    <div className="hello-ellen-container">
      <div className="image-container">
        <img src={require('./data/profilepic.jpg')} alt="profile pic" />
      </div>
      <div className="text-container">
        <h1>Hello, my name is Ellen</h1>
      </div>
    </div>
  );
};

export default HelloEllen;
