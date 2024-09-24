import React from 'react';
import './HelloEllen.css'; // Import the CSS file
import ScrollButton from './components/ScrollButton'; // Import ScrollButton

const HelloEllen = () => {
  return (
    <div className="hello-ellen-container">
      <div className="image-container">
        <img src={require('./data/profilepic.jpg')} alt="profile pic" />
      </div>
      <div className="text-container">
        <h1>Hello, my name is Ellen</h1>
        <p>I'm a data scientist based in New York City.</p>
        <ScrollButton /> {/* Place the ScrollButton under the text */}
        <div className="note">
          <p>*Note: This website is still a work in progress! Web dev is not my specialty...</p>
        </div>
        
      </div>
    </div>
  );
};

export default HelloEllen;
