import React from "react";
import "./FooterSection.css";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>DLSD Society</p>          
          <p>Guwahati, Assam -781028</p>                    
          <p>Email: mail@dlsdsociety.org</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/firsthack">EmergeVibe</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/courses">Events</Link></li>                                    
          </ul>
        </div>

        <div className="footer-column">
          <h3>Important Links</h3>
          <ul>                        
            <li><Link to="/contact">Partners & Volunteers</Link></li>            
            <li><Link to="#">Career</Link></li>
            <li><Link to="/donation">Donation</Link></li>           
          </ul>
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
