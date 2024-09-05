import React from 'react';
import './ScrollButton.css'; // Import the ScrollButton CSS

const ScrollButton = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content'); // Get the content by ID
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the content
    }
  };

  return (
    <button className="scroll-button" onClick={scrollToContent}>
      <i class="fa-solid fa-arrow-down"></i>
    </button>
  );
};

export default ScrollButton;
