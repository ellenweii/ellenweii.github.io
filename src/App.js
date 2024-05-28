import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HelloEllen from './HelloEllen';
import VerticalTabs from './components/VerticalTabs';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloEllen />
        <ScrollButton/>
      </header>
      <main id="main-content" className="main-content">
        <VerticalTabs />
      </main>
      
    </div>
  );
}

export default App;