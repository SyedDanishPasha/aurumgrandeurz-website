import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlTijarah from "./components/ServicesPages/AlTijarah";
import Konnects from "./components/ServicesPages/Konnects";
import Events from "./components/ServicesPages/Events";
import ProductLaunch from "./components/ServicesPages/ProductLaunch";
import HomePage from "./components/HomePage";
import Logo from "./images/AurumGrandeurzLogo.png";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-logo">
          <img src={Logo} alt="Loading Logo" />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/al-tijarah" element={<AlTijarah />} />
        <Route path="/services/konnects" element={<Konnects />} />
        <Route path="/services/events" element={<Events />} />
        <Route path="/services/product-launch" element={<ProductLaunch />} />
      </Routes>
    </Router>
  );
}

export default App;
