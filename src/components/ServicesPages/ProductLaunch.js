import React from "react";
import "../Services.css";
import ProductLaunchLogo from "../../images/ProductLaunchLogo.png";

const ProductLaunch = () => {
  return (
    <section className="service-detail">
      <h2>Product Launch</h2>
      <img src={ProductLaunchLogo} alt="Product Launch" className="service-detail-img" />
      <p>
        Launch your product with style and strategy. We offer branding, visual storytelling, and
        event management tailored for impactful unveilings.
      </p>
      <p>Create buzz and connect with your audience from the very first moment.</p>

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

export default ProductLaunch;
