import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Greeting from './Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" />
        </div>
      </Router>
    </div>
  );
}

export default App;
