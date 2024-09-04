import React from 'react';
import './Lab.css';

const Lab = () => {
  return (
    <div className="lab-experience">
      <h1>Research Experience</h1>

      <div className="lab-container">
        <h2>UCLA Computational Diagnostics Lab - Research Assistant</h2>
        <p>
          <strong>Date:</strong> Aug-Nov 2023
        </p>
        <p>
          Explored attention-guided deep learning methods and integrated uncertainty techniques, including multiple instance learning, to enhance the accuracy of cancer lesion localization and diagnostic classification. Focused on attention-guided prostate lesion localization and grade group classification using multiple instance learning.
        </p>
        <p>
          Now known as the UCLA Biomedical Artificial Intelligence Research Lab. Affiliated with the David Geffen School of Medicine and Samueli School of Engineering. 
          <br />
          <a href="https://bair.seas.ucla.edu" target="_blank" rel="noopener noreferrer">
            https://bair.seas.ucla.edu
          </a>
        </p>
      </div>

      <div className="lab-container">
        <h2>UCLA Data Science in Cardiovascular Medicine Research Program - Research Assistant</h2>
        <p>
          <strong>Date:</strong> June-Nov 2022
        </p>
        <p>
          Conducted research on integrating neural networks with multi-omics Python libraries and C++ source code to expedite the search and generation of post-translational modifications in proteins.
        </p>
        <p>
          Affiliated with the David Geffen School of Medicine and NHLBI Integrated Data Science Training Program in Cardiovascular Medicine (iDISCOVER).
          <br />
          <a href="https://cvdatascience.dgsom.ucla.edu/pages/" target="_blank" rel="noopener noreferrer">
            https://cvdatascience.dgsom.ucla.edu/pages/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Lab;
