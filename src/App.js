import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HelloEllen from './HelloEllen';
import VerticalTabs from './components/VerticalTabs';

// Routing for Project Items
import ProjectDetail from './components/ProjectDetail';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Lab from './components/Lab';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloEllen />
      </header>
      
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<VerticalTabs />}>
            {/* Redirect root to about */}
            <Route index element={<Navigate to="/about" />} />

            {/* Layout with VerticalTabs */}
            <Route path="about" element={<About />} />
            
            {/* Add key prop (Optional) to force re-render when switching between categories */}
            <Route path="projects/competitions" element={<ProjectGallery key="competitions" category="competitions" />} />
            <Route path="projects/data-science" element={<ProjectGallery key="data-science" category="data-science" />} />
            <Route path="projects/machine-learning-ai" element={<ProjectGallery key="machine-learning-ai" category="machine-learning-ai" />} />
            <Route path="projects/finance" element={<ProjectGallery key="finance" category="finance" />} />
            <Route path="projects/bioinformatics" element={<ProjectGallery key="bioinformatics" category="bioinformatics" />} />
            
            <Route path="lab" element={<Lab />} />
            <Route path="work" element={<Work />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Project Detail route */}
            <Route path="projects/:category/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
