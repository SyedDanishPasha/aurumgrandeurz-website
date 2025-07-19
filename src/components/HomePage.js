// HomePage.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Services from "./Services";
import Footer from "./Footer";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import "../App.css"

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      <Header />
      <section id="home"><Hero /></section>
      <section id="gallery"><Gallery /></section>
      <section id="services"><Services /></section>
      <Footer />

      {/* Scroll to Top */}
      <div
        className={`floating-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <span><LiaArrowCircleUpSolid /></span>
      </div>
    </>
  );
};

export default HomePage;
