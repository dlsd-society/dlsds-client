import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>DLSD Society</p>
          <p>Beltola Tiniali</p>
          <p>Guwahati</p>
          <p>Assam -781028</p>
          <p>Contact No: +91-8721909414</p>
          <p>Email: mail@dlsdsociety.org</p>
        </div>

        <div className="footer-column">
          <h3>Get Involved</h3>
          <ul>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Privacy & Cookie Policy</li>
            <li>Refund & Cancellation</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/dlsdsassam/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/dlsdsassam/"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Newsletters & Reports</h3>
          <ul className="newsletter-list">
            <li>📄 DLSDS Newsletter May 2025</li>
            <li>📄 DLSDS Newsletter December 2024</li>
            <li>📄 DLSDS Newsletter September 2024</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 DLSD Society.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
