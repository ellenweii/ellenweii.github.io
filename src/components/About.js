// src/components/About.js

import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>Focus</h1>
      <p>
        I work with data doing machine learning, data analysis, and research. Everything from data collection, to building models, to visualizations. Exploring AI, finance, and bioinformatics with data science.
      </p>
      <p>
        Looking for full-time data scientist/machine learning scientist/quantitative research roles. Currently based in NYC.
      </p>
      <h1>Education</h1>
      <p>
        BS in Statistics & Data Science at UCLA.<br />
        Minor in Bioinformatics.
      </p>
      <h1>Code</h1>
      <p>
        I code in primarily Python and R for my data science work. I have also worked with SQL, MongoDB, Apache Spark, Docker, Azure DevOps, Linux, Cloud Services for data management. Also experienced in HTML, CSS, React for building mobile and web apps; Tableau and PowerBI for dashboarding.
      </p>
    </div>
  );
};

export default About;
