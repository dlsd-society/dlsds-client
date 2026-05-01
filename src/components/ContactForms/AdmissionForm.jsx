import React from 'react';

const AdmissionForm = () => {
  return (
    <section className="form-section">
      <h3><em>For Admission Inquiry:</em></h3>
      <form className="partnership-form">
        <div className="form-row">
          <input type="text" placeholder="Student Name" />
          <input type="text" placeholder="Contact Number" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="City" />
          <select>
            <option>Course Preference</option>
          </select>
          <input type="text" placeholder="Remarks" />
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default AdmissionForm;
