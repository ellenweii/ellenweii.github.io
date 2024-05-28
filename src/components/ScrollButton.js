// src/components/ScrollButton.js

import React from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const scrollToContent = () => {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-button" onClick={scrollToContent}>
      ⬇️
    </div>
  );
};

export default ScrollButton;
