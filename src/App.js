import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Flag from './components/Flag/Flag';
import Footer from './components/Footer/Footer';
import Learn from './components/Learn/Learn';
import Contact from './components/Contact/Contact';
import AdSenseScript from './components/Adsense/Adsense';
import Scroll from './components/Scroll/Scroll';
import { inject } from '@vercel/analytics';

inject();

function App() {
  return (
    <Router>
      <div className="App">
        <Flag />
        <Navbar />
        <Scroll />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <AdSenseScript />
    </Router>
    
  );
}

export default App;