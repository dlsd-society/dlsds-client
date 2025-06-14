import React from 'react';

const NGOPartnershipForm = () => {
  return (
    <section className="form-section">
      <h3><em>For NGO Partnership:</em></h3>
      <form className="partnership-form">
        <div className="form-row">
          <input type="text" placeholder="Your NGO Name" />
          <input type="text" placeholder="Contact Person Name" />
          <input type="text" placeholder="Contact Number" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Remarks" />
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default NGOPartnershipForm;
