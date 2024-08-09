// src/components/ProjectItem.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.css'; // Add CSS for styling

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.image} alt={project.title} />
      <h3>
        <Link to={`/project/${project.id}`}>{project.title}</Link>
      </h3>
      <p>{project.subtitle}</p>
    </div>
  );
};

export default ProjectItem;
