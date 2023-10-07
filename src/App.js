import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';
import Moon from './components/Moon';
import Mars from './components/Mars';
import Dwarfplanets from './components/Dwarfplanets';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />

        <Route path="/moon" element={<Moon />} />


        <Route path="/dwarf" element={<Dwarfplanets />} />

        <Route path="/moon" element={<Moon />} />

      </Routes >
    </Router >
  );
}

