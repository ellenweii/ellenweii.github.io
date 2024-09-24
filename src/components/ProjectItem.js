import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.css'; // Import the CSS file

const ProjectItem = ({ project }) => {
  return (
    <Link to={`/projects/${project.category}/${project.id}`} className="project-item-link">
      <div className="project-item">
        <div className="image-container">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="content-container">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
