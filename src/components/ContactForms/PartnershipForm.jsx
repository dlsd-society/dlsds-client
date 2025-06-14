import React from 'react';
import './FormStyles.css';

const PartnershipForm = () => {
  return (
    <section className="form-section">
      <h3><em>For Partnerships:</em></h3>
      <form className="partnership-form">
        <div className="form-row">
          <select>
            <option>Type of Partnership</option>
          </select>
          <input type="text" placeholder="Contact Person Name" />
          <input type="text" placeholder="Contact Number" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email ID" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Remarks" />
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default PartnershipForm;
