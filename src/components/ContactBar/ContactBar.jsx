import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./ContactBar.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const ContactBar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserAuth();

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

        {/* 🔹 Conditional rendering based on login */}
        {!isUserLoggedIn ? (
          <>
            <button className="auth-button" onClick={onLoginClick}>
              Sign In
            </button>
            <button className="auth-button" onClick={onSignupClick}>
              Sign Up
            </button>
          </>
        ) : (
          <button
            className="auth-button"
            onClick={() => navigate("/user/dashboard")}
          >
            User Dashboard
          </button>
        )}

        {/* 🔹 Social icons */}
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
