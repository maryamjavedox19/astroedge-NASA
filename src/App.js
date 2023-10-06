import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';
<<<<<<< HEAD
import Moon from './components/Moon';
=======
import Mars from './components/Mars';
>>>>>>> b8107a538bf0a852505e87bfdcaf9957926422e3

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
<<<<<<< HEAD
        <Route path="/moon" element={<Moon />} />

=======
        <Route path="/mars" element={<Mars />} />
>>>>>>> b8107a538bf0a852505e87bfdcaf9957926422e3
      </Routes>
    </Router>
  );
}

