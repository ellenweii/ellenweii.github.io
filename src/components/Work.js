import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      <div className="job-container">
        <h2>Sumitomo Mitsui Banking Corporation - Data Science Analyst</h2>
        <p className="job-details">
          <strong>Role:</strong> Data Science on the Platform Integration & Automation Team<br />
          <strong>Location:</strong> New York City<br />
          <strong>Date:</strong> July 2024-Current<br />
          <strong>Responsibilities:</strong> Involved in data engineering tasks, including fixing software monitoring systems, writing new software code, and performing data analysis.<br />
          <strong>Technologies:</strong> Python, Azure DevOps, ServiceNow
        </p>
      </div>

      <div className="job-container">
        <h2>Sumitomo Mitsui Banking Corporation - Technology Intern</h2>
        <p className="job-details">
          <strong>Role:</strong> Data Science Intern on the Platform Integration & Automation Team<br />
          <strong>Location:</strong> New York City<br />
          <strong>Date:</strong> June-August 2023<br />
          <strong>Responsibilities:</strong> Analyzed over 200,000 rows of IT Asset Management and systems infrastructure data using Python, Azure DevOps, and ServiceNow, and reported findings directly to the CTO to support informed decision-making. Developed interactive PowerBI dashboards to visualize real-time system metrics, facilitating proactive maintenance and minimizing downtime. Additionally, wrote Key Reporting Index documentation for sustainable monitoring and enhanced existing systems dashboards by identifying and resolving data inconsistencies, and constructing time plots for improved operational transparency.<br />
          <strong>Technologies:</strong> Python, Azure DevOps, ServiceNow, PowerBI
        </p>
      </div>
    </div>
  );
};

export default Work;
