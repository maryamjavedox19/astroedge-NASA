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
import Neptune from './components/Neptune';
import Uranus from './components/Uranus';
import Venus from './components/Venus';
import Mercury from './components/Mercury';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';



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
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/voyages" element={<Voyages />} />










        <Route path="/starttour" element={<Planets />} />






      </Routes>
    </Router>
  );
}

