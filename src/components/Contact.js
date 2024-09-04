import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Let's connect!</h1>
      <p><i className="fas fa-envelope"></i> Email: <a href="mailto:ellenwei@g.ucla.edu">ellenwei@g.ucla.edu</a></p>
      <p><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/ellen-wei/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ellen-wei/</a></p>
      <p>Currently based in 📍New York City</p> {/* Added pin emoji before the location */}
    </div>
  );
};

export default Contact;
