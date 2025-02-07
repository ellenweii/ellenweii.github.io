import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      
      {/* Data Science Analyst Position */}
      <div className="job-container">
        <h2>Sumitomo Mitsui Banking Corporation - Data Science Analyst</h2>
        <p className="job-details">
          <strong>Role:</strong> Data Science on the Platform Integration & Automation Team<br />
          <strong>Location:</strong> New York City<br />
          <strong>Date:</strong> July 2024 - Current<br />
          <strong>Responsibilities:</strong>
        </p>
        
        {/* Big Data Architecture & Data Pipeline Section - Moved to the Top */}
        <ul>
          <li>Designed and built a <strong>real-time data pipeline and big data architecture</strong> to ingest live data from ServiceNow using <strong>Azure Data Lake and Databricks</strong>.</li>
          <li>Developed <strong>Azure DevOps pipelines</strong> to automate <strong>sentence matching</strong> for the challenging and time-consuming task of matching records across multiple databases.</li>
          <li>Optimized computational efficiency by implementing <strong>tokenization</strong> techniques to reduce processing space while improving accuracy.</li>
          <li>Implemented <strong>batch processing</strong> and an <strong>exponential backoff strategy</strong> to prevent API overload when pushing processed data back to ServiceNow.</li>
          <li>Leveraged <strong>Azure DevOps, Python, and Databricks</strong> to streamline data integration and automate large-scale record matching.</li>
        </ul>

        {/* UI & Workflow Optimization Section */}
        <ul>
          <li>Developed an <strong>automated pipeline</strong> to pull, modify, and update ServiceNow data via REST API, integrated with <strong>Azure DevOps YAML pipelines</strong>.</li>
          <li>Built a <strong>custom UI Page</strong> to visualize <strong>hierarchical workflow chains</strong> using <strong>JavaScript, HTML, CSS, and GlideRecord</strong>.</li>
          <li>Implemented <strong>dynamic, clickable elements</strong> to streamline navigation and track dependencies, improving system traceability and issue identification.</li>
          <li>Integrated <strong>server-side logic</strong> with front-end components using <strong>GlideAjax</strong> for real-time data retrieval.</li>
        </ul>

        <p className="job-details">
          <strong>Technologies:</strong> Python, Azure DevOps, ServiceNow, JavaScript, HTML, CSS, UI Pages, GlideRecord, JSON, Databricks, Azure Data Lake<br />
          <strong>Key Skills:</strong> Big Data Architecture, Real-Time Data Processing, API Optimization, Sentence Matching, Tokenization, Hierarchical Data Structures, Dynamic UI Development, ServiceNow Scripting
        </p>
      </div>

      {/* Technology Intern Position */}
      <div className="job-container">
        <h2>Sumitomo Mitsui Banking Corporation - Technology Intern</h2>
        <p className="job-details">
          <strong>Role:</strong> Data Science Intern on the Platform Integration & Automation Team<br />
          <strong>Location:</strong> New York City<br />
          <strong>Date:</strong> June - August 2023<br />
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Analyzed over <strong>200,000 rows of IT Asset Management and systems infrastructure data</strong> using Python, Azure DevOps, and ServiceNow.</li>
          <li>Reported key findings directly to the CTO to support strategic decision-making.</li>
          <li>Developed <strong>interactive PowerBI dashboards</strong> to visualize real-time system metrics, facilitating proactive maintenance and minimizing downtime.</li>
          <li>Authored Key Reporting Index documentation for sustainable monitoring and tracking improvements.</li>
          <li>Enhanced existing systems dashboards by identifying and resolving data inconsistencies and constructing time plots for improved operational transparency.</li>
        </ul>

        <p className="job-details">
          <strong>Technologies:</strong> Python, Azure DevOps, ServiceNow, PowerBI
        </p>
      </div>
    </div>
  );
};

export default Work;
