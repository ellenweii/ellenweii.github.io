// src/components/ProjectDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import './ProjectDetail.css'; // Add CSS for styling if needed

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <h2>{project.subtitle}</h2>
      <p>{project.description}</p>
      <div className="project-details">
        <h3>Technologies Used:</h3>
        <p>{project.details.technologies}</p>
        <h3>Team Members:</h3>
        <ul>
          {project.details.teamMembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
        <h3>Date:</h3>
        <p>{project.details.date}</p>
        <h3>Project Link:</h3>
        <p><a href={project.details.link} target="_blank" rel="noopener noreferrer">{project.details.link}</a></p>
      </div>
    </div>
  );
};

export default ProjectDetail;
