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
        <h2 className="section-title">MISSION & VALUES</h2>
        <ul className="about-list">
          <li>Be Customer Centric — Students and Employers — be the preferred choice/</li>
          <li>Meet any and every commitment that we make — lead by example</li>
          <li>Leverage Partnerships — be a platform for growth for all including staff</li>
          <li>Each one to operate from Entrepreneurial mind-set — being innovative in everything we do</li>
          <li>Each one to recognise risk-taking — celebrate people who stick their necks out — we know that path breakers are treading unknown paths</li>
          <li>Actively build Alumni Network — it’s not about one time push but being a lifelong friend</li>
        </ul>
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