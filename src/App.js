import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';
import Moon from './components/Moon';
import Mars from './components/Mars';
import Dwarfplanets from './components/Dwarfplanets'
import Asteroids from './components/Asteroids';
import Voyages from './components/Voyages';
import Introduction from './components/Introduction';
import Contact from './components/Contact';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/dwarf" element={<Dwarfplanets />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/asteroid" element={<Asteroids />} />
        <Route path="/voyages" element={<Voyages />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/starttour" element={<Planets />} />








      </Routes>
    </Router>
  );
}

