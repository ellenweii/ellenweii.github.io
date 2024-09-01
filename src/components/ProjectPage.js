// src/components/ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData'; // Adjust the path if needed
import './ProjectPage.css'; // Add CSS for styling

const ProjectPage = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectData.find(p => p.id === parseInt(id)); // Find the project by ID

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <h3>{project.subtitle}</h3>
      <p>{project.description}</p>

      <div className="project-details">
        <h4>Technologies Used:</h4>
        <p>{project.details.technologies}</p>
        
        <h4>Team Members:</h4>
        <ul>
          {project.details.teamMembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
        
        <h4>Date:</h4>
        <p>{project.details.date}</p>
        
        <h4>Project Link:</h4>
        <a href={project.details.link} target="_blank" rel="noopener noreferrer">
          {project.details.link}
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
