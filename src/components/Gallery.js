import React, { useState, useEffect } from "react";
import Img1 from "../images/Gal1.jpg";
import Img2 from "../images/Gal2.jpeg";
import Img3 from "../images/Gal3.jpg";
import Img4 from "../images/Gal4.jpg";
import Img5 from "../images/Gal5.jpg";
import Img6 from "../images/Gal6.jpg";
import Img7 from "../images/Gal7.jpg";
import Img8 from "../images/Gal8.jpg";
import Img9 from "../images/Gal9.jpg";
import Img10 from "../images/Gal10.jpg";
import Img11 from "../images/Gal11.jpg";
import Img12 from "../images/Gal12.jpeg";
import Img13 from "../images/Gal13.jpg";
import Img14 from "../images/Gal14.jpeg";
import Img15 from "../images/Gal15.jpg";
import Img16 from "../images/Gal16.jpg";
import Img17 from "../images/Gal17.jpg";
import Img18 from "../images/Gal18.jpg";
import "./Gallery.css";

// Define the replacement sequence for each position
const imageSequences = [
  [Img1, Img7, Img13, Img1],
  [Img2, Img10, Img15, Img2],
  [Img3, Img8, Img17, Img3],
  [Img4, Img11, Img14, Img4],
  [Img5, Img9, Img16, Img5],
  [Img6, Img12, Img18, Img6],
];

const Gallery = () => {
  const [currentImages, setCurrentImages] = useState(
    imageSequences.map((sequence) => sequence[0]) // Start with the first image in each sequence
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) =>
        prevImages.map((_, index) => {
          const sequence = imageSequences[index];
          const currentIndex = sequence.indexOf(prevImages[index]);
          const nextIndex = (currentIndex + 1) % sequence.length;
          return sequence[nextIndex];
        })
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <p className="gallery-subtitle">Explore Our Wedding Expertise</p>
      <div className="gallery-grid">
        {currentImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt=""// Meaningful alt text for accessibility
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
