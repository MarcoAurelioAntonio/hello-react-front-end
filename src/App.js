import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetings from './features/Greetings';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
