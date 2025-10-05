import React from "react";
import "./ContactBar.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const ContactBarFirstHack = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserAuth();

  return (
    <div className="contact-bar">
      {/* 🔹 Back Button */}
      <a href="/" className="back-btn">
        <IoMdArrowBack /> Back to DLSDS
      </a>

      {/* 🔹 Right Section */}
      <div className="contact-right">
        {/* 🔹 Conditional Buttons */}
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

        {/* 🔹 Social Icons */}
        <div className="social-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/dlsdsassam/"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dlsdsociety/"
          >
            <FaLinkedinIn />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBarFirstHack;
