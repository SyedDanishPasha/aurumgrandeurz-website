import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import './App.css';
import Logo from "./images/AurumGrandeurzLogo.png"; // Import your logo

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // Splash timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2-second splash
    return () => clearTimeout(timer);
  }, []);

  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
        <Route path="/" element={<Hero />} />
      </Routes>
      <Gallery />
      <Services />
      <Footer />

      <div
        className={`floating-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <span><LiaArrowCircleUpSolid /></span>
      </div>
    </Router>
  );
}

export default App;
