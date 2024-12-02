import React from "react";
import Logo from '../images/AurumGrandeurzLogo.png';// Update this to the actual path of your logo
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { CiPhone } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  const whatsappNumber = "8660062906";

  const redirectToWhatsApp = (service) => {
    const message = `Hello, I am interested in your ${service} service. Please provide more details.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <footer className="footer-container">
      <div className="footer-block">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <div className="logo-container">
            <img src={Logo} alt="Aurum Grandeurz Logo" className="logo" />
            <span className="logo-text">Aurum Grandeurz</span>
          </div>

          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <CiFacebook className="social-icon"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <CiInstagram className="social-icon"/> 
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon"/>
            </a>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="vertical-line"></div>

        {/* Contact Details Section */}
        <div className="footer-section contact-section">
          <h3>Contact Details</h3>
          <h4><TbMail  className="contact-icon"/> TestMail </h4>
          <h4><CiPhone className="contact-icon"/> TestPhone </h4>

          <hr />
          <ul>
            <li>
              <button
                className="footer-service-link"
                onClick={() => redirectToWhatsApp("Wedding Planner")}
              >
                Wedding Planner
              </button>
            </li>
            <li>
              <button
                className="footer-service-link"
                onClick={() => redirectToWhatsApp("Al Tijarah")}
              >
                Al Tijarah
              </button>
            </li>
            <li>
              <button
                className="footer-service-link"
                onClick={() => redirectToWhatsApp("Branding")}
              >
                Branding
              </button>
            </li>
          </ul>
        </div>

        {/* Vertical Separator */}
        <div className="vertical-line"></div>

        {/* Address Section */}
        <div className="footer-section address-section">
          <h3>Our Address</h3>
          <p>
            1234 Example Street, <br />
            City Name, State, <br />
            Country - 123456
          </p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <hr className="horizontal-line" />

      {/* Copyright Section */}
      <p>&copy; 2024 Aurum Grandeurz, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;