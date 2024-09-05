import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '../data/projectData'; 
import './ProjectGallery.css';

const ProjectGallery = ({ category }) => {
  // Filter projects based on whether their category array contains the selected category
  const filteredProjects = projectData.filter(project => 
    project.category.includes(category)  // Check if the category is in the array
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
