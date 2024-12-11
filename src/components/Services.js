import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Al Tijarah",
      subtitle: "A Carnival of Brands and Entertainment",
      description:
        "Al Tijarah is an exciting event designed to bring together both insiders and outsiders in a vibrant marketplace where brands, products, and services can be showcased, promoted, and sold. It's a one-stop carnival experience for everyone, whether you're a business owner, food lover, or simply looking for family fun.",
      image: "https://via.placeholder.com/500", // Replace with the actual image URL
      link: "/al-tijarah-details",
    },
    {
      id: 2,
      title: "Branding",
      subtitle: "Building Your Brand, Elevating Your Presence",
      description:
        "At Aurum Grandeurz, we specialize in helping your brand grow and stand out. Our comprehensive services include professional photography and videography, expert social media management, website development, and custom logo design—all crafted to ensure your brand makes a lasting impact.",
      image: "https://via.placeholder.com/500", // Replace with the actual image URL
      link: "/branding-details",
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${index % 2 === 0 ? "image-right" : "image-left"}`}
          >
            <div className="service-container">
              <div className="service-details">
                <h2 className="uppercase">{service.title}</h2>
                <h3>{service.subtitle}</h3>
                <p>{service.description}</p>
                <button
                  className="cta-button"
                  onClick={() => window.location.href = service.link}
                >
                  Know More
                </button>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
