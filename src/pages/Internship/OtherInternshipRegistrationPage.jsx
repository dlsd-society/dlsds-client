import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BASE_URL from "../../config/config";

const OtherInternshipRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    institution: "",
    areaOfInternship: "",
    otherAreaText: "",
    certificateOption: "Yes",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle "Others" dynamic field
    if (name === "areaOfInternship" && value !== "Others") {
      setFormData((prev) => ({
        ...prev,
        areaOfInternship: value,
        otherAreaText: "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
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

    if (!formData.cityState.trim()) newErrors.cityState = "City/State is required";
    if (!formData.institution.trim()) newErrors.institution = "Institution is required";

    if (!formData.areaOfInternship) {
      newErrors.areaOfInternship = "Please select an internship area";
    } else if (formData.areaOfInternship === "Others" && !formData.otherAreaText.trim()) {
      newErrors.areaOfInternship = "Please specify your internship area";
    }

    if (!formData.agreement) newErrors.agreement = "You must agree before submitting";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;    

    const submissionData = {
      ...formData,
      areaOfInternship:
        formData.areaOfInternship === "Others"
          ? formData.otherAreaText
          : formData.areaOfInternship,
    };

    // setLoading(true);
    setIsSubmitting(true);
    try {      
      await axios.post(`${BASE_URL}/other-internships`, submissionData);

      setIsSubmitting(false);

      Swal.fire({
        title: "Registration Successful",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        cityState: "",
        institution: "",
        areaOfInternship: "",
        otherAreaText: "",
        certificateOption: "Yes",
        agreement: false,
      });
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
      Swal.fire({
        title: "Submission Failed",
        text: "Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  // Styles
  const fieldWrapper = {
    position: "relative",
    marginBottom: "20px",
  };
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
  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };
  const fieldsetStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "30px 15px",
    marginBottom: "20px",
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "30px" }}>

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
        Internship Registration
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <fieldset style={fieldsetStyle}>
          <legend><strong>Personal Details</strong></legend>

          {/* fullName */}
          <div style={fieldWrapper}>
            <label style={floatingLabel}>Full Name</label>
            <input
              type="text"
              name="fullName"
              style={inputStyle}
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
          </div>

          {/* email */}
          <div style={fieldWrapper}>
            <label style={floatingLabel}>Email</label>
            <input
              type="text"
              name="email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}
          </div>

          {/* phone */}
          <div style={fieldWrapper}>
            <label style={floatingLabel}>Phone / WhatsApp</label>
            <input
              type="text"
              name="phone"
              style={inputStyle}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
          </div>

          {/* city */}
          <div style={fieldWrapper}>
            <label style={floatingLabel}>City / State</label>
            <input
              type="text"
              name="cityState"
              style={inputStyle}
              value={formData.cityState}
              onChange={handleChange}
            />
            {errors.cityState && <span style={errorStyle}>{errors.cityState}</span>}
          </div>

          {/* institution */}
          <div style={fieldWrapper}>
            <label style={floatingLabel}>College / University</label>
            <input
              type="text"
              name="institution"
              style={inputStyle}
              value={formData.institution}
              onChange={handleChange}
            />
            {errors.institution && <span style={errorStyle}>{errors.institution}</span>}
          </div>
        </fieldset>

        {/* Internship Details */}
        <fieldset style={fieldsetStyle}>
          <legend><strong>Internship Details</strong></legend>

          {/* Internship Area */}
          <div style={fieldWrapper}>
            <label style={floatingLabel}>Area of Internship</label>
            <select
              name="areaOfInternship"
              style={inputStyle}
              value={formData.areaOfInternship}
              onChange={handleChange}
            >
              <option value="">Select an area</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Project Management">Project Management</option>
              <option value="Social Work">Social Work</option>
              <option value="Others">Others</option>
            </select>
            {errors.areaOfInternship && (
              <span style={errorStyle}>{errors.areaOfInternship}</span>
            )}
          </div>

          {/* Dynamic "Other" input */}
          {formData.areaOfInternship === "Others" && (
            <div style={fieldWrapper}>
              <label style={floatingLabel}>Specify Internship Area</label>
              <input
                type="text"
                name="otherAreaText"
                style={inputStyle}
                value={formData.otherAreaText}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Certificate Option */}
          <label>
            <input
              type="radio"
              name="certificateOption"
              value="Yes"
              checked={formData.certificateOption === "Yes"}
              onChange={handleChange}
            />{" "}
            Certificate Required
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="certificateOption"
              value="No"
              checked={formData.certificateOption === "No"}
              onChange={handleChange}
            />{" "}
            No Certificate Required
          </label>
        </fieldset>

        {/* Agreement */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />{" "}
          I agree to the terms and conditions.
        </label>
        {errors.agreement && <span style={errorStyle}>{errors.agreement}</span>}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "12px",
            background: "#0056a3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
};

export default OtherInternshipRegistrationPage;
