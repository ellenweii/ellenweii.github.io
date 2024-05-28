import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HelloEllen from './HelloEllen';
import VerticalTabs from './components/VerticalTabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloEllen />
      </header>
      <VerticalTabs />
    </div>
  );
}

export default App;