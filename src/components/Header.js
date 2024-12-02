import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Import Header-specific CSS
import Logo from '../images/AurumGrandeurzLogo.png';

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false); // Track if scrolling
  const [isMenuActive, setIsMenuActive] = useState(false); // Mobile menu active state

  // Check the scroll position to shrink the header
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true); // Header shrinks after 50px scroll
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen to scroll events

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={`header-container ${isScrolling ? 'shrunk' : ''}`}>
      <div className="logo-container">
        <img src={Logo} alt="Wedding Planner Logo" className="logo" />
        <span className="logo-text">Aurum Grandeurz</span>
      </div>
      <div className="burger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="./Services.js" className="navbar-link">Services</Link>
        <Link to="/" className="navbar-link">Get Started</Link>
      </nav>
    </header>
  );
};

export default Header;
