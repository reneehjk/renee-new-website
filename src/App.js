import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router basename="/">
      <div className='bg-background h-screen'>
        <main>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
