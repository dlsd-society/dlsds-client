import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this
import './ContactBar.css';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
const ContactBarFirstHack = () => {
  const navigate = useNavigate(); // <-- Hook for navigation

  return (
    <div className="contact-bar">
      <a href="/" className="back-btn">
        <IoMdArrowBack /> Back to DLSDS
      </a>

      <div className="social-icons">
        <a target="_blank" href="https://www.facebook.com/dlsdsassam/">
          <FaFacebookF />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/dlsdsociety/">
          <FaLinkedinIn />
        </a>
        <a target="_blank" href="#">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default ContactBarFirstHack;
