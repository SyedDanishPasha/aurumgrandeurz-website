import React, { useState } from "react";
import './Hero.css'; // Import Hero-specific CSS
import BackgroundVideo from '../images/12207605_1920_1080_24fps.mp4';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    code: "IN +91", // Default country code
    phone: "",
    eventDate: new Date(), // Default to today's date
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      eventDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.eventDate || !formData.location) {
      alert("Please fill out all required fields.");
      return;
    }

    const phoneLength = formData.phone.length;
    if (formData.code === "IN +91" && phoneLength !== 10) {
      alert("Please enter a valid 10-digit phone number for India.");
      return;
    }

    const whatsappNumber = "8660062906";
    const formattedDate = formData.eventDate.toISOString().slice(0, 10);
    const whatsappMessage = `Hello, my name is ${formData.fullName}. I am interested in wedding planning for ${formattedDate} at ${formData.location}. Please contact me at ${formData.code} ${formData.phone}.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  const indianCities = [
    "Delhi", "Mumbai", "Kolkata", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Chandigarh"
  ];

  return (
    <section id="main" className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-container">
        <h1 className="text-line-bold">
          Are you trying to find a wedding planner in Bangalore?
        </h1>
        <p className="text-line">
          Speak with India's Leading Wedding Specialist Right Away
        </p>
      </div>

      <div className="form-container">
        <h2>Speak To Our Expert</h2>
        <p>Have all your questions answered and get a free competitive quote</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phone">Code *</label>
          <div className="phone-container">
            <select
              name="code"
              value={formData.code}
              onChange={handleInputChange}
            >
              <option value="IN +91">IN +91</option>
              <option value="US +1">US +1</option>
              {/* Add more codes as needed */}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <label htmlFor="eventDate">Event Date *</label>
          <div className="date-picker-wrapper">
            <DatePicker
              selected={formData.eventDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className="custom-date-picker"
              required
            />
            <span
              className="calendar-icon"
              onClick={() => document.querySelector('.custom-date-picker').focus()}
            >
              📅 {/* Replace this with an icon if needed */}
            </span>
          </div>

          <label htmlFor="location">Location *</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Your Location</option>
            {indianCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>

          <div className="checkbox-container">
            <input type="checkbox" id="updates" name="updates" defaultChecked />
            <label htmlFor="updates">Send me updates on WhatsApp</label>
          </div>

          <button type="submit" className="cta-button">Get Instant Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
