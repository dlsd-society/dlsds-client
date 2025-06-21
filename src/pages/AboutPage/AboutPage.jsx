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

      {/* Introduction About DLSDS */}
      <section className="about-intro">
        <div className="intro-container">
          <h2 className="section-title">Who We Are</h2>
          <p className="intro-tagline">
            Digital Literacy and Skill Development Society (DLSDS) is a non-profit organization dedicated to bridging the digital gap in North-East India.
          </p>

          <div className="intro-pillars">
            <div className="pillar">
              <h3>📶 Digital Inclusivity</h3>
              <p>We aim to bring digital skills to every corner of the region, ensuring no one is left behind in the digital revolution.</p>
            </div>
            <div className="pillar">
              <h3>🤝 Empowering Communities</h3>
              <p>Through workshops, training, and outreach, we empower individuals to become confident digital citizens.</p>
            </div>
            <div className="pillar">
              <h3>❤️ Non-Profit Commitment</h3>
              <p>As a mission-driven organization, we reinvest our efforts into building accessible, equitable digital education for all.</p>
            </div>
          </div>

          <p className="intro-description">
            Committed to making digital literacy accessible to all, DLSDS actively works towards empowering individuals with the skills needed to thrive in the digital age. By providing comprehensive training programs, workshops, and awareness initiatives, DLSDS ensures that communities, regardless of their socio-economic background, have the knowledge and tools to navigate the digital landscape.
          </p>
        </div>
      </section>

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