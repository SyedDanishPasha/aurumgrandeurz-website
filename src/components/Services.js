import React from "react";
import "./Services.css";
import ALTijarahLogo from "../images/ALTIjarahLogo.png";
import BrandLogo from "../images/AGBranding.png";
import EventLogo from "../images/EventLogo.png";
import ProductLaunchLogo from "../images/ProductLaunchLogo.png";

const Services = () => {
  const redirectToDetails = (serviceSlug) => {
    const url = `/services/${serviceSlug}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {/* Al Tijarah */}
        <div className="service-card image-right">
          <div className="service-container">
            <div className="service-details">
              <h2>Al Tijarah</h2>
              <h3>A Carnival of Brands and Entertainment</h3>
              <p>
                Al Tijarah is an exciting event that brings together brands, products, and services in a vibrant marketplace.
              </p>
              <p>Explore products, enjoy live performances, and discover hidden gems. Entry is free!</p>
            </div>
            <div className="service-image">
              <img src={ALTijarahLogo} alt="Al Tijarah" />
              <button className="service-button" onClick={() => redirectToDetails("al-tijarah")}>
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Konnects */}
        <div className="service-card image-left">
          <div className="service-container">
            <div className="service-details">
              <h2>Konnects</h2>
              <h3>Building Your Brand, Elevating Your Presence</h3>
              <p>
                We help your brand grow with photography, social media, website dev, and logo design.
              </p>
              <p>Let us bring your vision to life with stunning visuals and strategy.</p>
            </div>
            <div className="service-image">
              <img src={BrandLogo} alt="Konnects" />
              <button className="service-button" onClick={() => redirectToDetails("konnects")}>
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="service-card image-right">
          <div className="service-container">
            <div className="service-details">
              <h2>Events</h2>
              <h3>Memorable Celebrations</h3>
              <p>
                From weddings to corporate events, we handle it all so you can enjoy every moment.
              </p>
              <p>We bring creativity, coordination, and charm to every celebration.</p>
            </div>
            <div className="service-image">
              <img src={EventLogo} alt="Events" />
              <button className="service-button" onClick={() => redirectToDetails("events")}>
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Product Launch */}
        <div className="service-card image-left">
          <div className="service-container">
            <div className="service-details">
              <h2>Product Launch</h2>
              <h3>Make an Impact from Day One</h3>
              <p>
                Launch with style and buzz. We handle branding, visual storytelling, and event rollout.
              </p>
              <p>Connect with your audience from the very first moment.</p>
            </div>
            <div className="service-image">
              <img src={ProductLaunchLogo} alt="Product Launch" />
              <button className="service-button" onClick={() => redirectToDetails("product-launch")}>
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
