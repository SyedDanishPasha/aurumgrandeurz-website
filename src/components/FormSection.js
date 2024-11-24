import React, { useState } from "react";
import './FormSection.css'; // Import FormSection-specific CSS

const FormSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", weddingDate: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="form-container">
      <h2>Start Planning Your Wedding</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="date"
          name="weddingDate"
          value={formData.weddingDate}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">Submit</button>
      </form>
    </section>
  );
};

export default FormSection;
