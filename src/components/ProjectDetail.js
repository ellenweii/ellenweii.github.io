import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  // Render the description based on the type of content
  const renderDescription = () => {
    return project.description.map((item, index) => {
      if (item.type === 'heading') {
        // Render headings
        return <p key={index} dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} style={{ fontWeight: 'bold' }} />;
      } else if (item.type === 'bullet') {
        // Render top-level bullet points
        return <li key={index} dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      } else if (item.type === 'sub-bullet') {
        // Render sub-bullets (nested bullet points)
        return <ul key={`sub-${index}`}><li dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} /></ul>;
      } else if (item.type === 'paragraph') {
        // Render paragraphs
        return <p key={index} dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      } else {
        return null;
      }
    });
  };

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <h2>{project.subtitle}</h2>

      {/* Render formatted description */}
      <div className="project-description">
        <ul>{renderDescription()}</ul>
      </div>

      <div className="project-details">
        {project.details.role && (
          <>
            <h3>Role:</h3>
            <p>{project.details.role}</p>
          </>
        )}
        {project.details.role_details && (
          <>
            <h3>Role Details:</h3>
            <p>{project.details.role_details}</p>
          </>
        )}
        {project.details.technologies && (
          <>
            <h3>Technologies Used:</h3>
            <p>{project.details.technologies}</p>
          </>
        )}
        {project.details.date && (
          <>
            <h3>Date:</h3>
            <p>{project.details.date}</p>
          </>
        )}
        {project.details.duration && (
          <>
            <h3>Duration:</h3>
            <p>{project.details.duration}</p>
          </>
        )}
        {project.details.affiliation && (
          <>
            <h3>Affiliation:</h3>
            <p>{project.details.affiliation}</p>
          </>
        )}
        {project.details.link && (
          <>
            <h3>Project Link:</h3>
            <p>
              <a href={project.details.link} target="_blank" rel="noopener noreferrer">
                {project.details.link}
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
