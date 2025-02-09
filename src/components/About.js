// src/components/About.js

import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'; // Correct import for maple leaf

const About = () => {
  return (
    <div className="about-container">
      <h1>Focus</h1>
      <p>
        I dive into data, working on machine learning, analysis, and research. From collecting data to building models and creating visualizations, 
        I explore AI, finance, and bioinformatics through the lens of data science.      
      </p>
      
      <p>
        Looking for full-time data scientist/machine learning scientist/quantitative research opportunities. Currently based in NYC.
      </p>
      
      <h1>Education</h1>
      <p>
        BS in Statistics & Data Science at UCLA.<br />
        Minor in Bioinformatics.
        Recently studying for the CFA!
      </p>

      <h1>Code</h1>
      <p>
        I code primarily in Python and R for my data science work. 
        I have worked with SQL, MongoDB, Apache Spark, Docker, Azure DevOps, Azure Data Lake, Databricks, JavaScript, Linux, and cloud services for projects. 
        Also experienced in HTML, CSS, React for building mobile and web apps; Tableau and PowerBI for dashboarding, although I prefer to build custom dashboards in Python.
        Recently also doing ServiceNow development at work.
      </p>

      <section id="about-me">
        <h2>A Little More About Me</h2>

        <h3>
          <FontAwesomeIcon icon={faCanadianMapleLeaf} /> Where I Grew Up
        </h3>
        <p>I grew up in Toronto and later moved to beautiful Vancouver for high school, where I competed in math and science competitions and was part of the IB program.</p>

        <h3>
          <FontAwesomeIcon icon={faMusic} /> Music
        </h3>
        <p>I've loved playing the violin since childhood, performing in orchestras and small ensembles. Also dabbled in saxophone, cello, and played bass in my school's jazz band.</p>

        <h3>
          <FontAwesomeIcon icon={faBasketballBall} /> Sports
        </h3>
        <p>After class you could find me playing basketball and badminton. I liked leaving class early in high school to go compete!</p>
      </section>
    </div>
  );
};

export default About;
