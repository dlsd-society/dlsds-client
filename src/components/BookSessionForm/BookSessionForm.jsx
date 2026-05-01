// components/BookSessionForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./BookSessionForm.css";
import "../../common-styles/form-progress-modal.css";
import BASE_URL from "../../config/config";

const BookSessionForm = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    organization: "",
    topics: {
      computerBasics: false,
      webDesigning: false,
      tally: false,
      cyberSecurity: false,
      other: false,
    },
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [statesList, setStatesList] = useState([]);
  const [statesLoading, setStatesLoading] = useState(true);
  const [statesError, setStatesError] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch states on mount
  useEffect(() => {
  const fetchStates = async () => {
    try {
      setStatesLoading(true);

      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "India",
        }
      );

      const states = res.data?.data?.states;

      if (Array.isArray(states)) {
        setStatesList(states);
      } else {
        throw new Error("States data is not an array");
      }
    } catch (err) {
      console.error("Error fetching states:", err);
      setStatesError("Could not load states list");
    } finally {
      setStatesLoading(false);
    }
  };

  fetchStates();
}, []);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in formData.topics) {
      setFormData((prev) => ({
        ...prev,
        topics: { ...prev.topics, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.organization.trim())
      newErrors.organization = "Organisation/Institution is required";

    const anyTopic = Object.values(formData.topics).some((t) => t);
    if (!anyTopic) newErrors.topics = "Please select at least one topic";

    // if (!formData.agreement)
    //   newErrors.agreement = "You must agree before submitting";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   // setLoading(true);
  //   setIsSubmitting(true);
  //   try {
  //     await axios.post(`${BASE_URL}/book-session`, formData);

  //     setIsSubmitting(false);

  //     await Swal.fire({
  //       icon: "success",
  //       title: "Successfully Booked!",
  //       text: "Your session has been scheduled. We'll reach out soon!",
  //       confirmButtonColor: "#1976d2",
  //     });

  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       phone: "",
  //       state: "",
  //       city: "",
  //       organization: "",
  //       topics: {
  //         computerBasics: false,
  //         webDesigning: false,
  //         tally: false,
  //         cyberSecurity: false,
  //       },
  //       agreement: false,
  //     });

  //     if (onSuccess) onSuccess();
  //     if (onClose) onClose();
  //   } catch (err) {
  //     setIsSubmitting(false);
  //     console.error(err);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops!",
  //       text: err.response?.data?.message || "Something went wrong!",
  //       confirmButtonColor: "#d33",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   setIsSubmitting(true);

  //   try {
  //     await axios.post(`${BASE_URL}/book-session`, formData);

  //     // Close modal FIRST
  //     if (onClose) onClose();

  //     // Show alert independently
  //     await Swal.fire({
  //       icon: "success",
  //       title: "Successfully Booked!",
  //       text: "Your session has been scheduled. We'll reach out soon!",
  //       confirmButtonColor: "#1976d2",
  //     });

  //     if (onSuccess) onSuccess();
  //   } catch (err) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops!",
  //       text: err.response?.data?.message || "Something went wrong!",
  //       confirmButtonColor: "#d33",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setIsSubmitting(true);

  try {
    await axios.post(`${BASE_URL}/book-session`, formData);

    // ✅ MODAL FLOW
    if (onClose) {
      onClose(); // unmounts component → overlay disappears
    } else {
      // ✅ PAGE FLOW
      setIsSubmitting(false); // explicitly stop loader
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        organization: "",
        topics: {
          computerBasics: false,
          webDesigning: false,
          tally: false,
          cyberSecurity: false,
        }
      });
    }

    await Swal.fire({
      icon: "success",
      title: "Successfully Booked!",
      text: "Your session has been scheduled. We'll reach out soon!",
      confirmButtonColor: "#1976d2",
    });

    if (onSuccess) onSuccess();
  } catch (err) {
    setIsSubmitting(false);

    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: err.response?.data?.message || "Something went wrong!",
      confirmButtonColor: "#d33",
    });
  }
};


  return (
    <form onSubmit={handleSubmit}>

      {isSubmitting && (
        <div className="loading-overlay">
          <div className="loading-modal">
            <h3>Booking your session..</h3>
            <p>Please wait…</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div className="field-wrapper">
        <label className="floating-label">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
        />
        {errors.fullName && <p className="error-text">{errors.fullName}</p>}
      </div>

      {/* Email + Phone */}
      <div className="row-contact">
        <div className="field-wrapper email-field">
          <label className="floating-label">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="field-wrapper phone-field">
          <label className="floating-label">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
      </div>

      {/* State / City */}
      <div className="row-address">
        <div className="field-wrapper">
          <label className="floating-label">State</label>
          {statesLoading ? (
            <p>Loading states...</p>
          ) : statesError ? (
            <p className="error-text">{statesError}</p>
          ) : (
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="input-field"
            >
              <option value=""></option>
              {statesList.map((st, index) => (
                <option key={index} value={st.name}>
                  {st.name}
                </option>
              ))}
            </select>
          )}
          {errors.state && <p className="error-text">{errors.state}</p>}
        </div>
        <div className="field-wrapper">
          <label className="floating-label">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input-field"
          />
          {errors.city && <p className="error-text">{errors.city}</p>}
        </div>
      </div>

      {/* Organisation / Institution */}
      <div className="field-wrapper">
        <label className="floating-label">Organisation / Institution</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="input-field"
        />
        {errors.organization && (
          <p className="error-text">{errors.organization}</p>
        )}
      </div>

      {/* Topics */}
      <fieldset className="checkbox-fieldset">
        <legend className="left-aligned-legend">Select Session Topic(s)</legend>
        <div className="checkbox-options">
          <label>
            <input
              type="checkbox"
              name="computerBasics"
              checked={formData.topics.computerBasics}
              onChange={handleChange}
            />
            Computer Basics
          </label>
          <label>
            <input
              type="checkbox"
              name="webDesigning"
              checked={formData.topics.webDesigning}
              onChange={handleChange}
            />
            Web Designing
          </label>
          <label>
            <input
              type="checkbox"
              name="tally"
              checked={formData.topics.tally}
              onChange={handleChange}
            />
            Tally
          </label>
          <label>
            <input
              type="checkbox"
              name="cyberSecurity"
              checked={formData.topics.cyberSecurity}
              onChange={handleChange}
            />
            Cyber Security
          </label>
          <label>
            <input
              type="checkbox"
              name="other"
              checked={formData.topics.other}
              onChange={handleChange}
            />
            Any other topic
          </label>
        </div>
        {errors.topics && <p className="error-text">{errors.topics}</p>}
      </fieldset>

      {/* Submit */}
      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? "Submitting..." : "Book Session"}
      </button>
    </form>
  );
};

export default BookSessionForm;
