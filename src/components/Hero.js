import React from "react";
import './Hero.css'; // Import Hero-specific CSS

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Plan Your Dream Wedding</h1>
        <p>Your perfect wedding, tailored to you</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
