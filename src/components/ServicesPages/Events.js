import React, { useEffect, useRef } from "react";
import "../ServicesPages/Events.css";
import EventLogo from "../../images/EventLogo.png"; // replace with your actual logo

const testimonials = [
  {
    name: "Fatima Khan",
    text: "Al Tijarah was such a vibrant event! We discovered so many amazing local brands. Can’t wait for the next one!",
  },
  {
    name: "Imran Qureshi",
    text: "As a vendor, this was a fantastic platform. We saw a 40% boost in our sales and gained loyal customers.",
  },
  {
    name: "Ayesha N.",
    text: "The atmosphere was electric – from delicious food to cultural performances, it had everything!",
  },
  {
    name: "Zaid Merchant",
    text: "Loved the variety of stalls and how well-organized everything was. A must-visit for all families.",
  },
  {
    name: "Sara D.",
    text: "We showcased our products at Al Tijarah and received incredible exposure. Truly grateful!",
  },
  {
    name: "Mohammed Faisal",
    text: "A beautiful blend of community, commerce, and culture. This event is exactly what our city needed.",
  },
  {
    name: "John Mathews",
    text: "It was refreshing to see such an inclusive marketplace. The diversity of businesses was impressive.",
  },
  {
    name: "Neha Sharma",
    text: "Al Tijarah gave our handcrafted items the perfect platform. Loved the experience!",
  },
  {
    name: "Harpreet Singh",
    text: "A vibrant and respectful event. Everything from logistics to footfall was excellent.",
  },
  {
    name: "Rebecca Cohen",
    text: "Amazing initiative! It felt like a celebration of unity and culture.",
  },
  {
    name: "Lama Tenzin",
    text: "A peaceful, vibrant space to share our wellness products. The community support was wonderful.",
  },
  {
    name: "Omar Siddiqui",
    text: "Every detail felt thoughtful and professional. A fantastic opportunity for small brands.",
  },
  {
    name: "Priya Rajan",
    text: "The audience was warm and curious. We had meaningful interactions and great sales!",
  },
  {
    name: "David Abraham",
    text: "Al Tijarah made us feel welcomed. It’s more than just a market — it’s a cultural experience.",
  },
  {
    name: "Amina Yusuf",
    text: "Beautifully organized and thoughtfully curated. We’re definitely returning next time.",
  },
  {
    name: "Simran Kaur",
    text: "Our brand got amazing visibility, and we met several like-minded creators.",
  },
  {
    name: "Yusuf Khan",
    text: "It brought our community closer together and helped many discover new talents.",
  },
  {
    name: "Rina Das",
    text: "I was amazed at the variety and quality of products. The team did a brilliant job!",
  },
  {
    name: "Isaac D’Souza",
    text: "A vibrant celebration of entrepreneurs across faiths. I left feeling inspired.",
  },
  {
    name: "Nadia Farooq",
    text: "This event was a big leap forward for ethical and community-driven business. Truly empowering!",
  },
];

const Events = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const container = carouselRef.current;
          const scrollAmount = container.firstChild.offsetWidth + 16; // 16px gap
          const maxScrollLeft = container.scrollWidth - container.clientWidth;

          if (container.scrollLeft >= maxScrollLeft - scrollAmount) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 5000);

      return () => clearInterval(interval);
    }, []);


  return (
    <section className="service-detail">
      <div className="intro">
        <img src={EventLogo} alt="Events" className="service-detail-img" />
        <p>
          <strong>Events by Aurum Grandeurz</strong> are more than just planned occasions—they’re unforgettable
          experiences crafted with passion, precision, and creativity.
        </p>
        <p>
          Whether it's an intimate gathering, a brand launch, a community celebration, or a large-scale cultural
          festival, our team ensures every detail is managed with excellence.
        </p>
        <p>
          We bring life to your ideas with stunning setups, seamless coordination, engaging entertainment,
          and a touch of elegance that leaves a lasting impression on every guest.
        </p>
      </div>

      <div className="highlights">
        <h3>Event Highlights</h3>
        <ul>
          <li>🧠 <strong>Creative Conceptualization:</strong> We work closely with you to understand your vision and turn it into a memorable event experience.</li>
          <li>🔧 <strong>End-to-End Execution:</strong> From decor to logistics to entertainment, we handle everything so you can enjoy stress-free.</li>
          <li>📸 <strong>Visual Storytelling:</strong> With our in-house photography and content team, your event lives on beautifully through photos, videos, and reels.</li>
          <li>🎯 <strong>Custom Themes:</strong> Whether it’s cultural, modern, or corporate—we tailor every event uniquely.</li>
          <li>🤝 <strong>Vendor Network:</strong> Access to trusted vendors, artists, and performers to add magic to your event.</li>
        </ul>
      </div>

      <div className="testimonials-section">
        <h3>What Our Clients Say</h3>
        <div className="testimonial-carousel" ref={carouselRef}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{t.text}”</p>
              <p className="testimonial-author">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section-servicespage">
        <h3>Get in Touch</h3>
        <p>Want to participate or learn more? Drop us a message below and we’ll get back to you shortly.</p>
        <form className="modern-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="modern-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Events;
