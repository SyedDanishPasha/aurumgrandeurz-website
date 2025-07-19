import React, { useEffect, useRef } from "react";
import "../ServicesPages/Konnects.css";
import KonnectsLogo from "../../images/AGBranding.png";

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

const Konnects = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const scrollAmount = container.firstChild.offsetWidth + 16;
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
        <img src={KonnectsLogo} alt="Konnects" className="service-detail-img" />
        <p>
          <strong>Konnects by Aurum Grandeurz</strong> is where brands come to life with bold
          creativity, clarity, and a distinctive digital identity.
        </p>
        <p>
          We specialize in branding, photography, logo design, and digital presence management to
          help businesses stand out with confidence and cohesion.
        </p>
        <p>
          Whether you're launching a startup or refining your established brand, Konnects gives you
          a powerful voice and visual identity that resonates.
        </p>
      </div>

      <div className="highlights">
        <h3>What We Offer</h3>
        <ul>
          <li>🎨 <strong>Logo & Identity:</strong> Custom logos, fonts, and palettes tailored to your brand story.</li>
          <li>📸 <strong>Brand Photography:</strong> Professional shoots for products, team, and lifestyle campaigns.</li>
          <li>📱 <strong>Social Media:</strong> Content creation and feed curation for Instagram, Facebook, and more.</li>
          <li>💻 <strong>Website Development:</strong> Sleek, functional sites to give your audience a seamless digital experience.</li>
          <li>🧩 <strong>Brand Strategy:</strong> Visual consistency, messaging, and storytelling to build recognition and trust.</li>
        </ul>
      </div>

      <div className="testimonials-section">
        <h3>Client Experiences</h3>
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
        <h3>Start Building Your Brand</h3>
        <p>We'd love to hear about your project or business. Let’s create something powerful together.</p>
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

export default Konnects;
