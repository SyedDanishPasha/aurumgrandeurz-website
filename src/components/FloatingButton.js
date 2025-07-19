import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // You can use any icon of your choice
import "./FloatingButton.css"

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Show button if scrolled down by 300px
    } else {
      setIsVisible(false); // Hide button when at the top
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition); // Add scroll event listener

    return () => window.removeEventListener("scroll", checkScrollPosition); // Cleanup
  }, []);

  return (
    <div
      className={`floating-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={30} color="white" />
    </div>
  );
};

export default FloatingButton;
