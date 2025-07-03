import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
import './Header.css'; // Import Header-specific CSS
import Logo from '../images/AurumGrandeurzLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);// Mobile menu active state
  const [isScrolling, setIsScrolling] = useState(false); // Track if scrolling
  
   // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <header className={`header-container ${isScrolling ? 'shrunk' : ''}`}>
      <div className="logo-container">
        <img src={Logo} alt="Wedding Planner Logo" className="logo" onClick={() => window.location.reload()} />
        <span className="logo-text">Aurum Grandeurz</span>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ScrollLink to="main" smooth={true} duration={500} className="navbar-link">
          Home
        </ScrollLink>
        <ScrollLink to="gallery" smooth={true} duration={500} className="navbar-link">
          Gallery
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} className="navbar-link">
          Services
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className="navbar-link">
          Contact Us
        </ScrollLink>
      </nav>
    </header>
  );
};

export default Header;
