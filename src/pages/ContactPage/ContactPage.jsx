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
          <h2>Join Us</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => setShowPartnershipModal(true)} className="action-btn">
              Partner with us (Organisations)
            </button>
            <button onClick={() => setShowVolunteerModal(true)} className="action-btn">
              Become a Volunteer (Individuals)
            </button>
          </div>          
        </div>

        {/* Our Address section */}
        <div className="contact-map-address">
          <div className="address-and-map-container">
            <div className="address-text">
              <h2>Our Address</h2>
              <p>DLSD Society</p>
              <p>Beltola Tiniali, Bishnu Rabha Path</p>
              <p>Guwahati-781028, Assam, India</p>              
              <p>Email: contact@dlsdsociety.org</p>
            </div>
            <div className="map-embed">
              <iframe
                title="DLSD Society Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3139925382034!2d91.79053440970793!3d26.121303277032332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5f6d31adb0cb%3A0x3e7dd44ac638f90!2sDigital%20Literacy%20and%20Skill%20Development%20Society!5e0!3m2!1sen!2sin!4v1753002342753!5m2!1sen!2sin"
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
