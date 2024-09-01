// src/components/ProjectGallery.js

import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '../data/projectData'; // Example data file
import './ProjectGallery.css';

const ProjectGallery = ({ category }) => {
  const filteredProjects = projectData.filter(project => project.category === category);

  return (
    <div className="project-gallery">
      {filteredProjects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
