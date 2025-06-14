import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>NIIT Foundation</p>
          <p>8, Balaji Estate</p>
          <p>Kalkaji</p>
          <p>New Delhi -110019</p>
          <p>Contact No: 011-45512650</p>
          <p>Email: contact@niitfoundation.org</p>
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
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Newsletters & Reports</h3>
          <ul className="newsletter-list">
            <li>📄 NF Newsletter May 2025</li>
            <li>📄 NF Newsletter December 2024</li>
            <li>📄 NF Newsletter September 2024</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 NIIT Foundation.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
