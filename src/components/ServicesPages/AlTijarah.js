import React, { useEffect, useRef } from "react";
import "../ServicesPages/AlTijarah.css";
import ALTijarahLogo from "../../images/ALTIjarahLogo.png";

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


const AlTijarah = () => {
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
        <img src={ALTijarahLogo} alt="Al Tijarah" className="service-detail-img" />
        <p>
          Al Tijarah is more than just an event—it's a celebration of culture, commerce, and community. This vibrant marketplace brings together passionate entrepreneurs, emerging and established brands, and enthusiastic visitors under one welcoming roof.
        </p>
        <p>
          Whether you're a family looking for a lively weekend experience, a foodie on the hunt for authentic flavors, or a business aiming to showcase your products to a broader audience—Al Tijarah has something for everyone.
        </p>
        <p>
          From local handcrafted products and homegrown fashion labels to artisan food stalls and live performances, every corner of Al Tijarah radiates creativity, inclusivity, and entrepreneurial spirit. It’s a hub where culture meets commerce, and where stories turn into successful ventures.
        </p>
      </div>

      <div className="highlights">
        <h3>Event Highlights</h3>
        <ul>
          <li>🌟 Support Local: Discover and uplift small businesses and artisans from diverse backgrounds.</li>
          <li>🎭 Live Experiences: Enjoy engaging performances, cultural showcases, and workshops.</li>
          <li>🍽️ Food & Flavors: Savor the best of regional delicacies, fusion treats, and global cuisine.</li>
          <li>🛍️ Shop Unique: Explore handcrafted goods, beauty products, wellness items, and more.</li>
          <li>👨‍👩‍👧‍👦 Family-Friendly: With games, entertainment, and surprises for all age groups.</li>
          <li>🤝 Networking: A platform to meet fellow creators, collaborators, and community leaders.</li>
        </ul>
      </div>

      <div className="audience">
        <h3>Our Mission</h3>
        <p>
          Al Tijarah aims to empower small businesses while promoting harmony and cultural appreciation. We believe in celebrating diversity, encouraging innovation, and creating economic opportunities through community-driven events..
        </p>
      </div>

      <div className="audience">
        <h3>Join Us</h3>
        <p>
          Be part of a movement that celebrates unity, creativity, and empowerment. Whether you're attending as a visitor or participating as a vendor, Al Tijarah promises an experience filled with joy, learning, and endless possibilities.
        </p>
      </div>

      <div className="testimonials-section">
        <h3>What People Are Saying</h3>
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

export default AlTijarah;
