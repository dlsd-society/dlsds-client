import React, { useEffect } from "react";
import "./AboutPage.css";
import { useLocation } from "react-router-dom";
import aboutImage from '../../assets/about.jpg'; // Your uploaded image

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="about-page">
      {/* Hero image */}
      <div className="about-hero">
        <img
          src={aboutImage}
          alt="About Hero"
        />
        <div className="about-hero-text">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Mission and Values */}
      <section id="mission" className="about-section">
        <h2>Mission and Values</h2>
        <p>
          Our mission is to bridge the digital divide and empower underserved communities with access to education, skilling, and livelihood opportunities. 
          <br />
          We believe in inclusivity, sustainability, and measurable impact.
        </p>
      </section>

      {/* Member Body */}
      <section id="members" className="about-section">
        <h2>Member Body</h2>
        <p>
          Our governing body comprises passionate leaders, educators, and industry experts committed to transforming lives. Each member plays a strategic role in ensuring our mission is fulfilled effectively.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
