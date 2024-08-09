import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HelloEllen from './HelloEllen';
import VerticalTabs from './components/VerticalTabs';
import ScrollButton from './components/ScrollButton';

// Routing for Project Items
import Competitions from './components/Competitions';
import ProjectDetail from './components/ProjectDetail';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloEllen />
        <img src='/bunny.jpg' alt='bunny pic' />
        <ScrollButton/>
      </header>
      <main id="main-content" className="main-content">
      <VerticalTabs />
      </main>
    </div>
  );
}

export default App;