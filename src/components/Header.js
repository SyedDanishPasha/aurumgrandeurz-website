import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import Logo from '../images/AurumGrandeurzLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-container ${isScrolling ? "shrunk" : ""}`}>
      <div className="logo-container" onClick={() => window.location.reload()}>
        <img
          src={Logo}
          alt="Wedding Planner Logo"
          className="logo"
        />
        <span className="logo-text">Aurum Grandeurz</span>
      </div>

      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        {isHome ? (
          <>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="navbar-link"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="gallery"
              smooth={true}
              duration={500}
              className="navbar-link"
              onClick={toggleMenu}
            >
              Gallery
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="navbar-link"
              onClick={toggleMenu}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="navbar-link"
              onClick={toggleMenu}
            >
              Contact Us
            </ScrollLink>
          </>
        ) : (
          <Link to="/" className="navbar-link" onClick={toggleMenu}>
            Home
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
