import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HelloEllen from './HelloEllen';
import VerticalTabs from './components/VerticalTabs';
import ScrollButton from './components/ScrollButton';

// Routing for Project Items
import Competitions from './components/Competitions';
import ProjectDetail from './components/ProjectDetail';
import ProjectPage from './components/ProjectPage';
import ProjectGallery from './components/ProjectGallery'
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloEllen />
      
      </header>
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<VerticalTabs />}>
          <Route path="about" element={<About />} />
          <Route path="projects/competitions" element={<Competitions />} />
          <Route path="projects/data-science" element={<ProjectGallery category="data-science" />} />
          <Route path="projects/machine-learning-ai" element={<ProjectGallery category="machine-learning-ai" />} />
          <Route path="projects/finance" element={<ProjectGallery category="finance" />} />
          <Route path="projects/bioinformatics" element={<ProjectGallery category="bioinformatics" />} />
          <Route path="lab" element={<div>Lab Content</div>} />
          <Route path="work" element={<div>Work Content</div>} />
          <Route path="resume" element={<div>Resume Content: ADD RESUME FILE</div>} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;


// <img src = "%PUBLIC_URL%/bunny.png" alt="bunny image"></img>
