import React, { useState } from 'react';
import './Resume.css'; // Optional: Add styling here

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState('data-science'); // Default to Data Science Resume

  // Paths to the resumes in your public folder
  const dataScienceResumePath = '/Ellen Wei_resume_ds.pdf';
  const financeResumePath = '/Ellen Wei_resume_finance.pdf';

  return (
    <div className="resume-container">
      <div className="resume-buttons">
        <button
          className={selectedResume === 'data-science' ? 'active' : ''}
          onClick={() => setSelectedResume('data-science')}
        >
          Data Science Resume
        </button>
        <button
          className={selectedResume === 'finance' ? 'active' : ''}
          onClick={() => setSelectedResume('finance')}
        >
          Finance Resume
        </button>
      </div>

      <div className="resume-content">
        {selectedResume === 'data-science' ? (
          <>
            <iframe
              src={dataScienceResumePath}
              title="Data Science Resume"
              width="100%"
              height="800px"
            />
            <div className="download-button">
              <a href={dataScienceResumePath} download="Data_Science_Resume.pdf">
                Download Data Science Resume
              </a>
            </div>
          </>
        ) : (
          <>
            <iframe
              src={financeResumePath}
              title="Finance Resume"
              width="100%"
              height="800px"
            />
            <div className="download-button">
              <a href={financeResumePath} download="Finance_Resume.pdf">
                Download Finance Resume
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resume;
