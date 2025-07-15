import React, { useState } from 'react';
import './ContactPage.css';
import PartnershipForm from '../../components/ContactForms/PartnershipForm';
import VolunteerForm from '../../components/ContactForms/VolunteerForm';

const ContactPage = () => {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  
  // Close handlers
  const closePartnershipModal = () => setShowPartnershipModal(false);
  const closeVolunteerModal = () => setShowVolunteerModal(false);

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-content">
        {/* Get Involved section (appears on left in larger screens, top on mobile) */}
        <div className="contact-action-links">
          <h2>Get Involved</h2>
          <button onClick={() => setShowPartnershipModal(true)} className="action-btn">
            Partnerships
          </button>
          <button onClick={() => setShowVolunteerModal(true)} className="action-btn">
            Volunteering
          </button>
        </div>

        {/* Our Address section */}
        <div className="contact-map-address">
          <div className="address-and-map-container">
            <div className="address-text">
              <h2>Our Address</h2>
              <p>Digital Literacy and Skill Development Society</p>
              <p>Beltola Tiniali, Bishnu Rabha Path</p>
              <p>Guwahati, Assam, Kamrup(M), India</p>
              <p>Phone: +91-8721909414</p>
              <p>Email: contact@dlsdsociety.org</p>
            </div>
            <div className="map-embed">
              <iframe
                title="DLSD Society Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83920875844!2d77.06889921808932!3d28.527582000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b6fdf2e44b%3A0xc2d5e9c1a5b5b9d5!2sNIIT%20Foundation!5e0!3m2!1sen!2sin!4v1718107050666!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-frame"
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      {/* Modal - Partnerships */}
      {showPartnershipModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button onClick={() => setShowPartnershipModal(false)} className="close-btn">×</button>            
            <PartnershipForm onClose={closePartnershipModal} />
          </div>
        </div>
      )}

      {/* Modal - Volunteering */}
      {showVolunteerModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button onClick={() => setShowVolunteerModal(false)} className="close-btn">×</button>            
            <VolunteerForm onClose={closeVolunteerModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
