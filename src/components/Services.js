import React from "react";
import "./Services.css";
import ALTijarahLogo from "../images/ALTIjarahLogo.png";
import BrandLogo from "../images/AGBranding.png";
import EventLogo from "../images/EventLogo.png";
import ProductLaunchLogo from "../images/ProductLaunchLogo.png";

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
          <div className="service-container">
            <div className="service-details">
              <h2>Al Tijarah</h2>
              <h3>A Carnival of Brands and Entertainment</h3>
              <p>
                Al Tijarah is an exciting event that brings together brands, products, and services in a vibrant marketplace. It’s perfect for business owners and families looking for fun and entertainment.
              </p>
              <p>Explore products, enjoy live performances, and discover hidden gems. Entry is free!</p>
            </div>
            <div className="service-image">
              <img src={ALTijarahLogo} alt="Al Tijarah" />
              <button
                className="service-button"
                onClick={() => redirectToDetails("Al Tijarah")}
              >
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="service-card image-left">
          <div className="service-container">
            <div className="service-details">
              <h2>Konnects</h2>
              <h3>Building Your Brand, Elevating Your Presence</h3>
              <p>
                At Aurum Grandeurz, we specialize in helping your brand grow with professional photography, social media management, website development, and logo design.
              </p>
              <p>Let us bring your vision to life with stunning visuals, engaging content, and strategic online presence.</p>
            </div>
            <div className="service-image">
              <img src={BrandLogo} alt="Konnects" />
              <button
                className="service-button"
                onClick={() => redirectToDetails("Konnects")}
              >
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="service-card image-right">
          <div className="service-container">
            <div className="service-details">
              <h2>Events</h2>
              <h3>Memorable Celebrations</h3>
              <p>
                From weddings to corporate events, we plan and execute each occasion with perfection and passion. Let us handle the details while you enjoy the moment.
              </p>
              <p>We bring creativity, coordination, and charm to every celebration.</p>
            </div>
            <div className="service-image">
              <img src={EventLogo} alt="Events" />
              <button
                className="service-button"
                onClick={() => redirectToDetails("Events")}
              >
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="service-card image-left">
          <div className="service-container">
            <div className="service-details">
              <h2>Product Launch</h2>
              <h3>Make an Impact from Day One</h3>
              <p>
                Launch your product with style and strategy. We offer branding, visual storytelling, and event management tailored for product unveilings.
              </p>
              <p>
                Create buzz and connect with your audience from the first moment.
              </p>
            </div>
            <div className="service-image">
              <img src={ProductLaunchLogo} alt="Product Launch" />
              <button
                className="service-button"
                onClick={() => redirectToDetails("Product Launch")}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
