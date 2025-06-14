import React from 'react';
import './ContactPage.css';
import PartnershipForm from '../../components/ContactForms/PartnershipForm';
import NGOPartnershipForm from '../../components/ContactForms/NGOPartnershipForm';
import AdmissionForm from '../../components/ContactForms/AdmissionForm';
import VolunteerForm from '../../components/ContactForms/VolunteerForm';


const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-cards">
        <div className="contact-card">
          <h2><em>Partnerships</em></h2>
          <p>please write to us at</p>
          <p className="email">partner@niitfoundation.org</p>
          <p>to know more about the partnership opportunities.</p>
        </div>
        <div className="contact-card">
          <h2><em>Admission</em></h2>
          <p>please write to us at</p>
          <p className="email">enquiry@niitfoundation.org</p>
          <p>along with your course preference and contact details.</p>
        </div>
        <div className="contact-card">
          <h2><em>Volunteering</em></h2>
          <p>please write to us at</p>
          <p className="email">volunteer@niitfoundation.org</p>
          <p>with your core skills, interest areas and location preference.</p>
        </div>
      </section>

      <div className="or-text">OR</div>
      <div className="form-heading">Fill the Form Below</div>

      <div className="form-row-wrapper">
        <div className="form-half">
          <PartnershipForm />
        </div>
        <div className="vertical-divider"></div>
        <div className="form-half">
          <NGOPartnershipForm />
        </div>
      </div>

      <div className="form-row-wrapper">
        <div className="form-half">
          <AdmissionForm />
        </div>
        <div className="vertical-divider"></div>
        <div className="form-half">
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
