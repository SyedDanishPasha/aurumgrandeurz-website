import React from "react";
import "./Services.css";

const Services = () => {
  const whatsappNumber = "8660062906";

  const redirectToWhatsApp = (service) => {
    const message = `Hello, I am interested in your ${service} service. Please provide more details.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Open in a new tab
  };

  return (
    <section id="services" className="services-section">
      <h2 id="services">Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h2>Al Tijarah</h2>
          <h3>A Carnival of Brands and Entertainment</h3>
          <p>Al Tijarah is an exciting event designed to bring together both insiders and outsiders in a vibrant marketplace where brands, products, and services can be showcased, promoted, and sold. It's a one-stop carnival experience for everyone, whether you're a business owner, food lover, or simply looking for family fun.</p>
          <p>The event offers a unique platform for brands across all industries – including food, fashion, and lifestyle – to engage with a diverse audience. There’s something for everyone: enjoy delicious food from a variety of vendors, explore products from up-and-coming brands, and discover hidden gems in the marketplace.</p>
          <p>For families, we’ve got a dedicated play area for kids, ensuring a fun and safe environment for the little ones. Plus, the excitement doesn’t stop there! Enjoy live musical performances throughout the day, adding an extra layer of energy and entertainment to the event.</p>
          <p>And the best part? Entry is completely free, so bring your friends and family to experience the best of what Al Tijarah has to offer!</p>
          <p>Whether you're looking to promote your brand, discover new products, or simply enjoy a day of entertainment, Al Tijarah has it all.</p>

          {/* Line Separator */}
          <div className="line-separator"></div>

          {/* Centered h3 and Button */}
          <h3 className="cta-title">
            Explore our specialized Al Tijarah services tailored for your business needs.
          </h3>
          <button
            className="cta-button"
            onClick={() => redirectToWhatsApp("Al Tijarah")}
          >
            Contact Us
          </button>
        </div>

        <div className="service-card">
          <h2>Branding</h2>
          <h3>Building Your Brand, Elevating Your Presence</h3>
          <p>At Aurum Grandeurz, we specialize in helping your brand grow and stand out. Our comprehensive services include professional photography and videography, expert social media management, website development, and custom logo design—all crafted to ensure your brand makes a lasting impact.</p>
          <p>We’re here to bring your vision to life with high-quality visuals, engaging content, and a strategic online presence. Whether you need stunning photos and videos to showcase your products, a sleek website, or a unique logo to represent your business, we’ve got the tools and expertise to make it happen.</p>
          <p>Let us help you build a brand that resonates and grows, both online and offline. Your brand’s success starts here.</p>

          {/* Line Separator */}
          <div className="line-separator"></div>

          {/* Centered h3 and Button */}
          <h3 className="cta-title">
            Boost your brand's visibility with our expert branding services.
          </h3>
          <button
            className="cta-button"
            onClick={() => redirectToWhatsApp("Branding")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
