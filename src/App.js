import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';
<<<<<<< HEAD
import Moon from './components/Moon';
=======
import Mars from './components/Mars';
>>>>>>> b8107a538bf0a852505e87bfdcaf9957926422e3
import Dwarfplanets from './components/Dwarfplanets';
import Moon from './components/Moon';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
<<<<<<<<< Temporary merge branch 1
        <Route path="/mars" element={<Mars />} />
=========
        <Route path="/moon" element={<Moon />} />

>>>>>>>>> Temporary merge branch 2
      </Routes>
    </Router>
  );
}

