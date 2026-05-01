// import React, { useState } from 'react';
// import './FormStyles.css';
// import axios from 'axios';
// import BASE_URL from '../../config/config';

// const VolunteerForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     contactNumber: '',
//     email: '',
//     qualification: '',
//     city: '',
//     state: '',
//     agreed: false,
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { fullName, contactNumber, email, qualification, city, state, agreed } = formData;

//     if (!fullName || !contactNumber || !email || !qualification || !city || !state || !agreed) {
//       setError('Please fill in all fields and agree to the terms.');
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/volunteers/submit`, formData);
//       setSuccess('Thank you for joining as a Volunteer!');
//       setTimeout(() => {
//         setSuccess('');
//         onClose(); // close modal
//       }, 2000);
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <section className="form-section">
//       <h3><em>Be a Volunteer:</em></h3>
//       <p style={{ fontWeight: 'bold', color: '#005a9c' }}>
//         ✅ Become a verified volunteer and earn your Digital Volunteer Badge — 
//         a symbol of your contribution and identity with our organization!
//       </p>

//       <form className="partnership-form" onSubmit={handleSubmit}>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {success && <p style={{ color: 'green' }}>{success}</p>}

//         <div className="form-row">
//           <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
//           <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
//         </div>

//         <div className="form-row">
//           <input type="email" name="email" placeholder="Email ID" style={{ flex: 1 }} value={formData.email} onChange={handleChange} />
//           <select name="qualification" style={{ flex: 1 }} value={formData.qualification} onChange={handleChange}>
//             <option value="">Highest Qualification</option>
//             <option value="hslc">HSLC Passed</option>
//             <option value="hs">HS Passed</option>
//             <option value="grad">Graduation</option>
//             <option value="masters">Masters</option>
//           </select>
//         </div>

//         <div className="form-row">
//           <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
//           <select name="state" value={formData.state} onChange={handleChange}>
//             <option value="">State</option>
//             <option value="Assam">Assam</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Karnataka">Karnataka</option>
//             {/* Add more states */}
//           </select>
//         </div>

//         <div className="checkbox-row">
//           <input type="checkbox" id="volunteer-agree" name="agreed" checked={formData.agreed} onChange={handleChange} />
//           <label htmlFor="volunteer-agree">
//             I agree to serve voluntarily without compensation and accept the associated responsibilities.
//           </label>
//         </div>

//         <button type="submit" className="submit-btn">SUBMIT</button>
//       </form>
//     </section>
//   );
// };

// export default VolunteerForm;


import React, { useEffect, useState } from 'react';
import './FormStyles.css';
import axios from 'axios';
import BASE_URL from '../../config/config';
import indianStates from '../../data/indianStates.json';

const VolunteerForm = ({ onClose }) => {
  const defaultState = {
    fullName: '',
    contactNumber: '',
    email: '',
    qualification: '',
    city: '',
    state: '',
    agreed: false,
  };

  const [stateList] = useState(indianStates);
  const [formData, setFormData] = useState(defaultState);
  const [error, setError] = useState(''); 
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, contactNumber, email, qualification, city, state, agreed } = formData;

    if (!fullName || !contactNumber || !email || !qualification || !city || !state || !agreed) {
      setError('Please fill in all fields and agree to the terms.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/volunteers/submit`, formData);
      
      if (response.status === 200 || response.status === 201) {
        setFormData(defaultState);
        onClose();
        window.alert("Volunteer request submitted successfully. Our team will contact you in a few moments.");
      } else {
        setError("Unexpected server response. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="form-section">
      <h3><em>Be a Volunteer:</em></h3>
      <p style={{ fontWeight: 'bold', color: '#005a9c' }}>
        ✅ Become a verified volunteer and earn your Digital Volunteer Badge — 
        a symbol of your contribution and identity with our organization!
      </p>

      <form className="partnership-form" onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="form-row">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        </div>

        <div className="form-row">
          <input type="email" name="email" placeholder="Email ID" style={{ flex: 1 }} value={formData.email} onChange={handleChange} />
          {/* <select name="qualification" style={{ flex: 1 }} value={formData.qualification} onChange={handleChange}>
            <option value="">Highest Qualification</option>
            <option value="hslc">HSLC Passed</option>
            <option value="hs">HS Passed</option>
            <option value="grad">Graduation</option>
            <option value="masters">Masters</option>
          </select> */}
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}            
            className={!formData.qualification ? "placeholder-select" : ""}
          >
            {!formData.qualification && (
              <option value="" disabled hidden>
                Highest Qualification
              </option>
            )}
            <option value="hslc">HSLC Passed</option>
            <option value="hs">HS Passed</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Post Graduate</option>
          </select>
        </div>

        <div className="form-row">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
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

        <div className="checkbox-row">
          <input type="checkbox" id="volunteer-agree" name="agreed" checked={formData.agreed} onChange={handleChange} />
          <label htmlFor="volunteer-agree">
            I agree to serve voluntarily without compensation and accept the associated responsibilities.
          </label>
        </div>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default VolunteerForm;