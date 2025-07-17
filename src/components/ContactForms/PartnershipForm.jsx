import React, { useState } from 'react';
import './FormStyles.css';
import axios from 'axios';
import BASE_URL from '../../config/config';
import indianStates from '../../data/indianStates.json';

const PartnershipForm = ({ onClose }) => {
  
  const defaultState = {
    organisation: '',
    contactPerson: '',
    email: '',
    contactNumber: '',
    remarks: '',
    state: '',
    city: '',
  };

  const [formData, setFormData] = useState(defaultState);
  const [error, setError] = useState('');
  const [stateList] = useState(indianStates);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { organisation, contactPerson, email, contactNumber, remarks, state, city } = formData;

    if (!organisation || !contactPerson || !email || !contactNumber || !state || !city) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/partnerships/submit`, formData);
      if (response.status === 201) {
        setFormData(defaultState);
        onClose();
        window.alert("Partnership request submitted successfully. Our team will contact you shortly.");
      } else {
        setError("Unexpected server response. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="form-section">
      <h3><em>For Partnerships:</em></h3>
      <form className="partnership-form" onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="form-row">
          <input type="text" name="organisation" placeholder="Organisation Name" value={formData.organisation} onChange={handleChange} />
          <input type="text" name="contactPerson" placeholder="Contact Person Name" value={formData.contactPerson} onChange={handleChange} />
        </div>

        <div className="form-row">
          <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} />
          <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={!formData.state ? "placeholder-select" : ""}
          >
            {!formData.state && (
              <option value="" disabled hidden>
                State
              </option>
            )}
            {stateList.map((state) => (
              <option key={state.state_id} value={state.state_name}>
                {state.state_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <textarea name="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleChange} style={{ flex: 1 }} rows={3} />
        </div>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default PartnershipForm;