import React from "react";
import Logo from '../images/AurumGrandeurzLogo.png';
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { CiPhone } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  const whatsappNumber = "919742799998";

  const redirectToWhatsApp = (service) => {
    const message = `Hello, I am interested in your ${service} service. Please provide more details.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <footer id="contact" className="footer-container">
      <div className="footer-block">
        {/* Logo + Social Section */}
        <div className="footer-section logo-section">
          <div className="logo-main-container">
            <div className="logo-subcontainer">
              <img src={Logo} alt="Aurum Grandeurz Logo" className="logo" />
            </div>
            <div className="social-subcontainer">
              <a href="https://www.instagram.com/aurum_grandeurz?igsh=cWRlOGN5enphZ3Ry" target="_blank" rel="noopener noreferrer">
                <CiInstagram className="social-icon" />
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="vertical-line"></div>

        {/* Contact Section */}
        <div className="footer-section contact-section">
          <h3>Contact Details</h3>
          <h4><TbMail className="contact-icon" /> aurumgrandeurz2014@gmail.com</h4>
          <h4><CiPhone className="contact-icon" /> +919742799998</h4>

          <hr />
          <ul>
            <li><button className="footer-service-link" onClick={() => redirectToWhatsApp("Wedding Planner")}>Wedding Planner</button></li>
            <li><button className="footer-service-link" onClick={() => redirectToWhatsApp("Al Tijarah")}>Al Tijarah</button></li>
            <li><button className="footer-service-link" onClick={() => redirectToWhatsApp("Branding")}>Branding</button></li>
            <li><button className="footer-service-link" onClick={() => redirectToWhatsApp("Product Launch")}>Product Launch</button></li>
          </ul>
        </div>

        {/* Vertical Separator */}
        <div className="vertical-line"></div>

        {/* Address Section */}
        <div className="footer-section address-section">
          <h3>Our Address</h3>
          <p>
            No 15 16/36, Near Church, <br />
            St Marks Road, <br />
            Bengaluru, Karnataka, <br />
            India 560001
          </p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <hr className="horizontal-line" />

      {/* Copyright */}
      <p>&copy; 2025 Aurum Grandeurz, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;