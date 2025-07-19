import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AlTijarah from "./components/ServicesPages/AlTijarah";
import Konnects from "./components/ServicesPages/Konnects";
import Events from "./components/ServicesPages/Events";
import ProductLaunch from "./components/ServicesPages/ProductLaunch";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import './App.css';
import Logo from "./images/AurumGrandeurzLogo.png";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const checkScrollPosition = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-logo">
          <img src={Logo} alt="Loading Logo" />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Gallery />
            <Services />
          </>
        } />
        <Route path="/services/al-tijarah" element={<AlTijarah />} />
        <Route path="/services/konnects" element={<Konnects />} />
        <Route path="/services/events" element={<Events />} />
        <Route path="/services/product-launch" element={<ProductLaunch />} />
      </Routes>
      <Footer />

      {/* Scroll to Top Button */}
      <div
        className={`floating-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <span className="icon"><LiaArrowCircleUpSolid /></span>
      </div>
    </Router>
  );
}

export default App;
