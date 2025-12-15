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
        📧 contact@dlsdsociety.org
      </div>

      <div className="contact-right">
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Join Us
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

        <button className="cta-button" onClick={() => navigate("/book-session")}>
          Book A Free Session
        </button>    

      </div>
    </div>
  );
};

export default ContactBar;
