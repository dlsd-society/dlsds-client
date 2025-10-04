import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactBar.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const ContactBar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();

  return (
    <div className="contact-bar">
      <div className="contact-left">
        📞 +91-8721909414 | 📧 mail@dlsdsociety.org
      </div>

      <div className="contact-right">
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Volunteer
        </button>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Partnership
        </button>
        <button className="cta-button" onClick={() => navigate("/donation")}>
          Donate
        </button>

        {/* 🔹 Sign In / Sign Up first */}
        <button className="auth-button" onClick={onLoginClick}>
          Sign In
        </button>
        <button className="auth-button" onClick={onSignupClick}>
          Sign Up
        </button>

        {/* 🔹 Then social icons */}
        <div className="social-icons">
          <a target="_blank" href="https://www.facebook.com/dlsdsassam/">
            <FaFacebookF />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/dlsdsassam/">
            <FaLinkedinIn />
          </a>
          <a target="_blank" href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
