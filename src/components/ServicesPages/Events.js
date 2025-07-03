import React from "react";
import "../Services.css";
import EventLogo from "../../images/EventLogo.png";

const Events = () => {
  return (
    <section className="service-detail">
      <h2>Events</h2>
      <img src={EventLogo} alt="Events" className="service-detail-img" />
      <p>
        From weddings to corporate events, we plan and execute each occasion with perfection
        and passion. Let us handle the details while you enjoy the moment.
      </p>
      <p>We bring creativity, coordination, and charm to every celebration.</p>

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

export default Events;
