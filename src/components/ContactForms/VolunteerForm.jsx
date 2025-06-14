import React from 'react';

const VolunteerForm = () => {
  return (
    <section className="form-section">
      <h3><em>Be a Volunteer:</em></h3>
      <form className="partnership-form">
        <div className="form-row">
          <input type="text" placeholder="Volunteer Name" />
          <input type="text" placeholder="Contact Number" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="City" />
          <select>
            <option>State</option>
          </select>
          <select>
            <option>Area of Interest</option>
          </select>
        </div>
        <p className="volunteer-questions">
          * Do you wish to serve the Society? &nbsp;|&nbsp;
          * Can you give your time without payment or benefit? &nbsp;|&nbsp;
          * Do you enjoy taking up responsibility?
        </p>
        <div className="checkbox-row">
          <input type="checkbox" id="volunteer-agree" />
          <label htmlFor="volunteer-agree">Yes, I agree with the above points</label>
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default VolunteerForm;
