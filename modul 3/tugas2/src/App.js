// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
