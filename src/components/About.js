// src/components/About.js

import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>Focus</h1>
      <p>
      I dive into data, working on machine learning, analysis, and research. From collecting data to building models and creating visualizations, I explore AI, finance, and bioinformatics through the lens of data science.      </p>
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
        I code in primarily Python and R for my data science work. I have worked with SQL, MongoDB, Apache Spark, Docker, Azure DevOps, Javascript, Linux, Cloud Services for projects. Also experienced in HTML, CSS, React for building mobile and web apps; Tableau and PowerBI for dashboarding.
      </p>

      <section id="about-me">
        <h2>A Little More About Me</h2>
        
        <h3>Where I Grew Up</h3>
        <p>I grew up in Toronto, where I developed a passion for math competitions and enjoyed building projects in the woodshop at school. Later, I moved to Vancouver for high school, where I participated in science competitions like the KPU Science Challenge and UBC Physics Olympics. I was also part of the academically rigorous IB program, which further fueled my curiosity and love for learning. I thought I wanted to be a mechanical engineer so I even wrote my extended essay in physics!</p>
        
        <h3>Music and Performance</h3>
        <p>From a young age, I begged my mom to send me to violin lessons, and it became a central part of my life. I played in orchestras at school and in the community, and I've enjoyed performing in smaller ensembles like quartets, trios, and duos, both as a volunteer and for fun. Along the way, I experimented with other instruments, including the saxophone and cello, and played bass in my school's jazz band.</p>
        
        <h3>Sports and Recreation</h3>
        <p>In high school, I was an active member of my school's basketball and badminton teams, participating in three provincial tournaments for badminton. I still love playing badminton recreationally and continue to enjoy the sport during my time in college.</p>
</section>
    </div>
  );
};

export default About;
