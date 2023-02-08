import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import Subject from '../src/components/Subject'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title-container">Open Book Library</div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="subject/:subject_id" element={<Subject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
