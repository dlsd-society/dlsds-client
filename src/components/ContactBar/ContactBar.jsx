import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Add this
import "./ContactBar.css";

const ContactBar = () => {
  const navigate = useNavigate(); // <-- Hook for navigation

  return (
    <div className="contact-bar">
      <div className="contact-left">
        📞 011-45512650 | 📧 contact@niitfoundation.org
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
    </div>
  );
};

export default ContactBar;
