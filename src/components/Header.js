import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Import Header-specific CSS

const Header = () => {
  return (
    <header className="header-container">
      <img src="logo.png" alt="Wedding Planner Logo" />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/form">Get Started</Link>
      </nav>
    </header>
  );
};

export default Header;
