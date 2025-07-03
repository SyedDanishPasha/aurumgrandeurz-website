import React from "react";
import "../Services.css";
import ALTijarahLogo from "../../images/ALTIjarahLogo.png";

const AlTijarah = () => {
  return (
    <section className="service-detail">
      <h2>Al Tijarah</h2>
      <img src={ALTijarahLogo} alt="Al Tijarah" className="service-detail-img" />
      <p>
        Al Tijarah is an exciting event that brings together brands, products, and services in a vibrant marketplace.
        It’s perfect for business owners and families looking for fun and entertainment.
      </p>
      <p>
        Explore products, enjoy live performances, and discover hidden gems. Entry is free!
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

export default AlTijarah;
