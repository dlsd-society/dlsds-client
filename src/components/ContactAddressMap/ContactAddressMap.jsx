import React from 'react';
import './ContactAddressMap.css';

const ContactAddressMap = () => {
  return (
    <div className="registered-office-container">
      <iframe
        title="Digital Literacy and Skill Development Society"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83920875844!2d77.06889921808932!3d28.527582000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b6fdf2e44b%3A0xc2d5e9c1a5b5b9d5!2sNIIT%20Foundation!5e0!3m2!1sen!2sin!4v1718107050666!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-frame"
      ></iframe>

      <div className="office-details">
        <h2>Registered Office:</h2>
        <hr />
        <p>Digital Literacy and Skill Development Society</p>
        <p>Beltola Tiniali</p>
        <p>Bishnu Rabha Path, Bylane 04</p>
        <p>Guwahati - 781028, Assam</p>
        <p>Contact No: +91-8721909414</p>
      </div>
    </div>
  );
};

export default ContactAddressMap;
