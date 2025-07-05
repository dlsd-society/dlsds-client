import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Add this
import "./ContactBar.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactBar = () => {
  const navigate = useNavigate(); // <-- Hook for navigation

  return (
    <div className="contact-bar">
      <div className="contact-left">
        📞 +91-8721909414 | 📧 mail@dlsdsociety.org
      </div>
      <div className="contact-right">
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Volunteer
        </button>
        <button className="cta-button" onClick={() => navigate("/donation")}>
          Donate
        </button>
        <button className="cta-button">Learn - LMS</button>
        <button className="cta-button">Join Us</button>
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/dlsdsassam/"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/dlsdsassam/"><FaLinkedinIn /></a>        
        <a href="#"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default ContactBar;
