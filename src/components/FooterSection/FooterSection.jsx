import React from "react";
import "./FooterSection.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>                        
            <li><Link to="/courses">Courses</Link></li> 
            <li><Link to="/hackathon">Hackathons</Link></li> 
            <li><Link to="/internship">Internships & Trainings</Link></li> 
            <li><Link to="#">Seminars & Webinars</Link></li> 
          </ul>
        </div>

        <div className="footer-column">
          <h3>Important Links</h3>
          <ul>                                    
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="#">Career</Link></li>
            <li><Link to="/donation">Donation</Link></li>           
            <li><Link to="/contact">Partners & Volunteers</Link></li>            
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletters & Reports</h3>
          <ul className="newsletter-list">
            <li>📄 DLSDS Newsletter Oct-Dec 2025</li>
            <li>📄 DLSDS Newsletter July-Sept 2024</li>
            <li>📄 DLSDS Newsletter Apr-June 2024</li>
            <li>📄 DLSDS Newsletter Jan-Mar 2025</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>DLSD Society</p>          
          <p>Guwahati, Assam -781028</p>                    
          <p>Email: mail@dlsdsociety.org</p>

          {/* 🔹 Social icons */}
          <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/dlsdsociety">
              <FaFacebookF />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/dlsdsociety">
              <FaLinkedinIn />
            </a>
            <a target="_blank" href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 DLSD Society.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
