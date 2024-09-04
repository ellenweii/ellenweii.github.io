// src/components/Competitions.js

import React from 'react';
import './Competitions.css'
import ProjectGallery from './ProjectGallery';

const Competitions = () => {
  return (
    <div className="competitions-container">
      <h1>Hackathons, Datathons</h1>
      <ProjectGallery category="competitions" />
    </div>
  );
};

export default Competitions;