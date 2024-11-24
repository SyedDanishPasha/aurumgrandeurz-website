import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import './index.css'; // Import global styles

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/form" element={<FormSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
