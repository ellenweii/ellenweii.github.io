import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '../data/projectData'; 
import './ProjectGallery.css';

const ProjectGallery = ({ category }) => {
  // Filter projects based on whether their category array contains the selected category
  const filteredProjects = projectData.filter(project => 
    Array.isArray(project.category) 
      ? project.category.includes(category)  // Check if category is in the array
      : project.category === category        // Handle single-category items
  );

  return (
    <div className="project-gallery">
      {filteredProjects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
