import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BASE_URL from "../../config/config";
import "../../common-styles/form-progress-modal.css";

const HackathonRegistrationPage = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: "1",
    soloPreference: "",
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    experience: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.teamName.trim()) newErrors.teamName = "Team Name is required";
    if (formData.teamSize === "1" && !formData.soloPreference)
      newErrors.soloPreference = "Please select a solo/team preference";
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits";
    }
    if (!formData.cityState.trim())
      newErrors.cityState = "City/State is required";
    if (!formData.experience)
      newErrors.experience = "Please select your experience level";
    if (!formData.agreement)
      newErrors.agreement = "You must agree before submitting";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // setLoading(true);
    setIsSubmitting(true);
    try {
      const hackathonId = 2; // Hardcoded for now

      const res = await axios.post(
        `${BASE_URL}/hackathon-participants/${hackathonId}/register`,
        formData
      );

      setIsSubmitting(false);

      // ✅ Success Alert using SweetAlert2
      await Swal.fire({
        icon: "success",
        title: "Successfully saved!",
        text: `Registration successful! Your ID is ${res.data.participant.id}`,
        confirmButtonColor: "#1976d2",
      });

      // Reset form
      setFormData({
        teamName: "",
        teamSize: "1",
        soloPreference: "",
        fullName: "",
        email: "",
        phone: "",
        cityState: "",
        experience: "",
        agreement: false,
      });
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: err.response?.data?.message || "Something went wrong!",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  // Styles
  const fieldWrapper = { position: "relative", marginBottom: "20px" };
  const floatingLabel = {
    position: "absolute",
    top: "-10px",
    left: "12px",
    backgroundColor: "white",
    padding: "0 5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#444",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
  };
  const radioFieldset = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "30px 15px",
    marginBottom: "20px",
  };
  const errorStyle = { color: "red", fontSize: "13px" };

  return (
    <div
      style={{
        position: "relative",
        padding: "30px",
        maxWidth: "700px",
        margin: "0 auto",
        opacity: loading ? 0.5 : 1,
        pointerEvents: loading ? "none" : "auto", // disables clicks when loading
      }}
    >

      {isSubmitting && (
        <div className="loading-overlay">
          <div className="loading-modal">
            <h3>Registering your details</h3>
            <p>Please wait…</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      )}

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Hackathon Registration
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Section 1: Team Info */}
        <fieldset style={radioFieldset}>
          <legend>
            <strong>Section 1 - Team Info</strong>
          </legend>

          <div style={fieldWrapper}>
            <label style={floatingLabel}>Team Name</label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.teamName && (
              <span style={errorStyle}>{errors.teamName}</span>
            )}
          </div>

          <fieldset style={radioFieldset}>
            <legend
              style={{ fontSize: "14px", fontWeight: "bold", color: "#444" }}
            >
              Team Size
            </legend>
            {["1", "2", "3", "4"].map((size) => (
              <label key={size} style={{ marginRight: "15px" }}>
                <input
                  type="radio"
                  name="teamSize"
                  value={size}
                  checked={formData.teamSize === size}
                  onChange={handleChange}
                />{" "}
                {size === "1" ? "1 (Solo)" : size}
              </label>
            ))}
          </fieldset>

          {formData.teamSize === "1" && (
            <fieldset style={radioFieldset}>
              <legend
                style={{ fontSize: "14px", fontWeight: "bold", color: "#444" }}
              >
                Solo / Team Preference
              </legend>
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="soloPreference"
                  value="help"
                  checked={formData.soloPreference === "help"}
                  onChange={handleChange}
                />{" "}
                Yes, help me form a team
              </label>
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="soloPreference"
                  value="solo"
                  checked={formData.soloPreference === "solo"}
                  onChange={handleChange}
                />{" "}
                I will participate solo
              </label>
              {errors.soloPreference && (
                <span style={errorStyle}>{errors.soloPreference}</span>
              )}
            </fieldset>
          )}
        </fieldset>

        {/* Section 2: Participant Details */}
        <fieldset style={radioFieldset}>
          <legend>
            <strong>Section 2 - Participant Details</strong>
          </legend>

          <div style={fieldWrapper}>
            <label style={floatingLabel}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.fullName && (
              <span style={errorStyle}>{errors.fullName}</span>
            )}
          </div>

          <div style={fieldWrapper}>
            <label style={floatingLabel}>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}
          </div>

          <div style={fieldWrapper}>
            <label style={floatingLabel}>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
          </div>

          <div style={fieldWrapper}>
            <label style={floatingLabel}>City / State</label>
            <input
              type="text"
              name="cityState"
              value={formData.cityState}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.cityState && (
              <span style={errorStyle}>{errors.cityState}</span>
            )}
          </div>

          <fieldset style={radioFieldset}>
            <legend
              style={{ fontSize: "14px", fontWeight: "bold", color: "#444" }}
            >
              Experience Level
            </legend>
            {["Beginner", "Intermediate", "Advanced"].map((level) => (
              <label key={level} style={{ display: "block" }}>
                <input
                  type="radio"
                  name="experience"
                  value={level}
                  checked={formData.experience === level}
                  onChange={handleChange}
                />{" "}
                {level}
              </label>
            ))}
            {errors.experience && (
              <span style={errorStyle}>{errors.experience}</span>
            )}
          </fieldset>
        </fieldset>

        {/* Agreement */}
        <fieldset style={radioFieldset}>
          <legend>
            <strong>Agreement</strong>
          </legend>
          <div
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              marginLeft: "1rem",
            }}
          >
            <ul>
              <li>I will adhere to the hackathon code of conduct.</li>
              <li>All projects submitted will be original work.</li>
              <li>I will respect all participants.</li>
              <li>Organizers hold the final right to decisions.</li>
              <li>I will join the Discord server for updates.</li>
              <li>
                I consent to being contacted by the organisers via their
                channels.
              </li>
            </ul>
          </div>

          <label style={{ display: "block", marginTop: "10px" }}>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />{" "}
            I have read and agree to the terms and conditions above.
          </label>
          {errors.agreement && (
            <span style={errorStyle}>{errors.agreement}</span>
          )}
        </fieldset>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          {isSubmitting ? "Saving..." : "Submit Registration"}
        </button>
      </form>

      {/* Overlay Loader */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#1976d2",
            zIndex: 9999,
          }}
        >
          Saving...
        </div>
      )}
    </div>
  );
};

export default HackathonRegistrationPage;
