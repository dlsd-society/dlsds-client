import React, { useState } from "react";
import "./HeroSection.css";
import BookSessionModal from "../BookSessionModal/BookSessionModal";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-overlay">
          <h1 style={{ fontSize: "2rem" }}>
            Digital Literacy and Skill Development Society
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            Creating Opportunities Through Skills and Digital Empowerment
          </p>
        </div>
        <div className="hero-buttons">
          <button>Join Us</button>
          <button>Our Programs</button>
          <button>Contact</button>
          <div>
      <button onClick={() => setShowModal(true)}>Book Session</button>
      <BookSessionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
        </div>

        {showModal && <BookSessionModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};

export default HeroSection;
