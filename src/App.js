import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import './App.css'; // Import the external CSS file for the floating button

function App() {
  const [isVisible, setIsVisible] = useState(false); // Track if the button should be visible

  // Function to check the scroll position (change 300 to 100)
  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Show button if scrolled more than 100px
    } else {
      setIsVisible(false); // Hide button if scrolled to top
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Adding event listener on mount and removing it on unmount
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Cleanup
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Gallery />
      <Services />
      <Footer />
      
      {/* Floating Button */}
      <div
        className={`floating-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop} // When clicked, scroll to top
      >
        <span><LiaArrowCircleUpSolid /></span> {/* Up arrow symbol */}
      </div>
    </Router>
  );
}

export default App;
