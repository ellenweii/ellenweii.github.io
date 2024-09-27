import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.css'; // Import the CSS file

const ProjectItem = ({ project, activeCategory }) => {
  // Ensure we're linking using the active category, even if the project belongs to multiple categories
  const categoryForUrl = Array.isArray(project.category) ? activeCategory : project.category;

  return (
    <Link to={`/projects/${categoryForUrl}/${project.id}`} className="project-item-link">
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
