// src/data/projectData.js

const projectData = [
  {
    id: 1,
    category: 'competitions',
    title: 'Hackathon Project 1',
    subtitle: 'A project created for a hackathon',
    image: require('./clouds.jpg'),
    description: 'Detailed description of Hackathon Project 1',
    details: {
      technologies: 'React, Node.js, MongoDB',
      teamMembers: ['Alice', 'Bob', 'Charlie'],
      date: 'January 2023',
      link: 'https://github.com/example/hackathon-project-1'
    }
  },
  {
    id: 2,
    category: 'competitions',
    title: 'Datathon Project 1',
    subtitle: 'A project created for a datathon',
    image: require('./clouds.jpg'),
    description: 'Detailed description of Datathon Project 1',
    details: {
      technologies: 'Python, Pandas, Scikit-learn',
      teamMembers: ['Dave', 'Eve', 'Frank'],
      date: 'February 2023',
      link: 'https://github.com/example/datathon-project-4'
    }
  },
  // Add more projects as needed
];

export default projectData;
