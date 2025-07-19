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
            The <strong>Digital Literacy and Skill Development Society (DLSD Society)</strong> is a registered non-profit organization working to bridge the digital divide and make technology accessible to everyone. Our mission is to create a digitally empowered and inclusive society where every individual, regardless of background, has the opportunity to learn, grow, and thrive in the digital era.
            <br /><br />
            We conduct a wide range of training programs—from basic digital literacy (computer fundamentals, internet safety, digital payments) to advanced technical skills (programming, data analytics, cloud computing, cybersecurity, and more). Our programs are tailored for school and college students, job seekers, professionals, and marginalized communities, delivered both online and offline across India.
            <br /><br />
            By collaborating with government institutions, local bodies, and educational centers, we deliver hands-on, relevant, and practical digital learning at the grassroots level. Whether it's introducing a child to a computer or helping a young professional explore coding and emerging technologies, we are committed to nurturing lifelong digital skills for personal and professional growth.
          </p>

          <div className="intro-pillars">
            <div className="pillar">
              <h3>📶 Digital Inclusivity</h3>
              <p>We aim to bring digital education to every corner—rural, urban, underserved—so that everyone can participate in the digital revolution.</p>
            </div>
            <div className="pillar">
              <h3>🤝 Empowering Communities</h3>
              <p>Through hands-on training, awareness sessions, and outreach programs, we empower individuals to become confident, responsible digital citizens.</p>
            </div>
            <div className="pillar">
              <h3>❤️ Mission-Driven</h3>
              <p>As a non-profit, every effort we make is reinvested into building a stronger, more equitable digital future for all.</p>
            </div>
          </div>

          <p className="intro-description">
            DLSD Society is committed to democratizing digital access and building skills that enable employment, innovation, and independence. We strive to create a world where digital literacy is not a privilege—but a right available to all.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section id="mission" className="about-section">
        <h2 className="section-title">MISSION & VALUES</h2>        

        <ul className="about-list">
          <li>
            <span>✅</span>
            <div className="about-list-text">
              <strong>Empower through Education</strong> — Deliver quality digital literacy and skill development programs to foster growth and independence.
            </div>
          </li>
          <li>
            <span>✅</span>
            <div className="about-list-text">
              <strong>Be Inclusive & Accessible</strong> — Reach remote and underserved communities to ensure equal digital opportunities for all.
            </div>
          </li>
          <li>
            <span>✅</span>
            <div className="about-list-text">
              <strong>Foster Innovation</strong> — Encourage creative problem-solving, digital experimentation, and adaptive learning.
            </div>
          </li>
          <li>
            <span>✅</span>
            <div className="about-list-text">
              <strong>Build Lifelong Connections</strong> — Engage with learners beyond training, building a strong alumni and mentoring network.
            </div>
          </li>
          <li>
            <span>✅</span>
            <div className="about-list-text">
              <strong>Lead with Integrity</strong> — Operate with transparency, purpose, and accountability in every initiative.
            </div>
          </li>
          <li>
            <span>✅</span>
            <div className="about-list-text">
              <strong>Collaborate for Impact</strong> — Partner with institutions, educators, and changemakers to maximize reach and effectiveness.
            </div>
          </li>
        </ul>

      </section>

      {/* Member Body */}
      {/* <section id="members" className="about-section">
        <h2 className="section-title">Member Body</h2>
        <p>
          Our core team and advisory members include passionate educators, social entrepreneurs, and tech professionals dedicated to transforming lives through digital empowerment. Each member contributes expertise and leadership to ensure that our mission is realized with impact and integrity.
        </p>
      </section> */}

    </div>
  );
};

export default AboutPage;
