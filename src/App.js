import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery"
import Services from "./components/Services"
import Footer from "./components/Footer";
import './index.css'; // Import global styles

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Gallery />
      <Services />
      <Footer />
    </Router>
  );
}

export default App;
