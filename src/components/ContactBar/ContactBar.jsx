import React from "react";
import "./ContactBar.css";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-left">
        📞 011-45512650 | 📧 contact@niitfoundation.org
      </div>
      <div className="contact-right">
        <button className="cta-button">Volunteer</button>
        <button className="cta-button">Donate</button>
        <button className="cta-button">Learn - LMS</button>
        <button className="cta-button">Join Us</button>
      </div>
    </div>
  );
};

export default ContactBar;
