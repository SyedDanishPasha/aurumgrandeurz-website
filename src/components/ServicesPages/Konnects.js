import React from "react";
import "../Services.css";
import BrandLogo from "../../images/AGBranding.png";

const Konnects = () => {
  return (
    <section className="service-detail">
      <h2>Konnects</h2>
      <img src={BrandLogo} alt="Konnects" className="service-detail-img" />
      <p>
        At Aurum Grandeurz, we specialize in helping your brand grow with professional photography,
        social media management, website development, and logo design.
      </p>
      <p>
        Let us bring your vision to life with stunning visuals, engaging content, and a strong
        online presence.
      </p>

      <form className="contact-form">
        <h3>Contact Us</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Konnects;
