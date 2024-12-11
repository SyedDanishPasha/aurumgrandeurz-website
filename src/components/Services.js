import React from "react";
import "./Services.css";

const Services = () => {
  const redirectToDetails = (service) => {
    window.location.href = `/services/${service.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {/* First Card */}
        <div className="service-card image-right">
          <div className="service-details">
            <h2>Al Tijarah</h2>
            <h3>A Carnival of Brands and Entertainment</h3>
            <p>
              Al Tijarah is an exciting event that brings together brands, products, and services in a vibrant marketplace. It’s perfect for business owners and families looking for fun and entertainment.
            </p>
            <p>Explore products, enjoy live performances, and discover hidden gems. Entry is free!</p>
          </div>
          <div className="service-image">
            <img src="/images/al-tijarah.jpg" alt="Al Tijarah" />
            <button
              className="service-button"
              onClick={() => redirectToDetails("Al Tijarah")}
            >
              Know More
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="service-card image-left">
          <div className="service-image">
            <img src="/images/branding.jpg" alt="Branding" />
            <button
              className="service-button"
              onClick={() => redirectToDetails("Branding")}
            >
              Know More
            </button>
          </div>
          <div className="service-details">
            <h2>Branding</h2>
            <h3>Building Your Brand, Elevating Your Presence</h3>
            <p>
              At Aurum Grandeurz, we specialize in helping your brand grow with professional photography, social media management, website development, and logo design.
            </p>
            <p>
              Let us bring your vision to life with stunning visuals, engaging content, and strategic online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
