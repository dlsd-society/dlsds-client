// pages/InternshipRegistrationPage/InternshipRegistrationPage.jsx
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BASE_URL from "../../config/config";
import "./Internship.css";

const InternshipRegistrationPage = () => {
  const [formData, setFormData] = useState({
    joinPreference: "",
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    institution: "",
    projectPreference: "Solo",
    groupDetails: "",
    domains: [],
    tools: "",
    previousProjects: "", 
    certificateOption: "Yes",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);  

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, domains: [...prev.domains, value] };
      } else {
        return { ...prev, domains: prev.domains.filter((d) => d !== value) };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.joinPreference)
      newErrors.joinPreference = "Please select a joining preference";
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
    if (!formData.institution.trim())
      newErrors.institution = "Institution is required";
    if (!formData.projectPreference)
      newErrors.projectPreference = "Please select project preference";
    if (formData.projectPreference === "Group" && !formData.groupDetails.trim())
      newErrors.groupDetails = "Please provide group details";
    if (formData.domains.length === 0)
      newErrors.domains = "Please select at least one domain";
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
      const res = await axios.post(`${BASE_URL}/internships`, formData);
      
      setIsSubmitting(false);

      Swal.fire({
        title: "✅ Registration Successful!",
        text: "Your internship registration has been submitted successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      setFormData({
        joinPreference: "",
        fullName: "",
        email: "",
        phone: "",
        cityState: "",
        institution: "",
        projectPreference: "Solo",
        groupDetails: "",
        domains: [],
        tools: "",
        previousProjects: "",
        certificateOption: "No",
        agreement: false,
      });
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);     
      Swal.fire({
        title: "❌ Something went wrong!",
        text: "Unable to submit your registration. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
      }); 
    } finally {
      setLoading(false);
    }
  };

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

  const radioFieldset = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "30px 15px",
    marginBottom: "20px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "0 auto" }}>

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
        {/* Section 1: Joining Preference */}
        <fieldset style={radioFieldset}>
            <legend>
                <strong>Section 1 - Joining Preference</strong>
            </legend>

            {[
                { label: "Winter (starts January)", value: "winter" },
                { label: "Summer (starts August)", value: "summer" }                
            ].map((option) => (
                <label key={option.value} style={{ display: "block" }}>
                <input
                    type="radio"
                    name="joinPreference"
                    value={option.value}
                    checked={formData.joinPreference === option.value}
                    onChange={handleChange}
                />{" "}
                {option.label}
                </label>
            ))}

            {errors.joinPreference && (
                <span style={errorStyle}>{errors.joinPreference}</span>
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
            <label style={floatingLabel}>Contact Number (WhatsApp preferred)</label>
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

          <div style={fieldWrapper}>
            <label style={floatingLabel}>College/University</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.institution && (
              <span style={errorStyle}>{errors.institution}</span>
            )}
          </div>
        </fieldset>

        {/* Section 3: Project Preference */}
        <fieldset style={radioFieldset}>
          <legend>
            <strong>Section 3 - Project Preference</strong>
          </legend>
          {["Solo", "Group"].map((pref) => (
            <label key={pref} style={{ display: "block" }}>
              <input
                type="radio"
                name="projectPreference"
                value={pref}
                checked={formData.projectPreference === pref}
                onChange={handleChange}
              />{" "}
              {pref}
            </label>
          ))}
          {errors.projectPreference && (
            <span style={errorStyle}>{errors.projectPreference}</span>
          )}
        </fieldset>

        {formData.projectPreference === "Group" && (
            <>
                <div style={{ height: '12vh', fontSize: '0.85rem' }}>               
                    <p>Include their Full Name, Email ID, and Contact Number.</p>
                    <p><span style={{ fontWeight: '600' }}>NOTE: </span>If you don’t have any group members in mind but still want to work in a team, just mention: “I don’t have group members yet. Please assign me to a team.”</p>
                </div>
                <div style={fieldWrapper}>            
                    <label style={floatingLabel}>Group Details</label>            
                    <textarea
                    name="groupDetails"
                    value={formData.groupDetails}
                    onChange={handleChange}
                    style={{ ...inputStyle, minHeight: "80px" }}
                    />
                    {errors.groupDetails && (
                    <span style={errorStyle}>{errors.groupDetails}</span>
                    )}
                </div>
            </>            
        )}

        {/* Section 4: Domains */}
        <fieldset style={radioFieldset}>
          <legend>
            <strong>Section 4 - Preferred Domains</strong>
          </legend>
          {["AI/ML", "Web Development", "Mobile-App Development", "Project Management -Agile/Scrum", "UI/UX"].map(
            (domain) => (
              <label key={domain} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  value={domain}
                  checked={formData.domains.includes(domain)}
                  onChange={handleCheckboxChange}
                />{" "}
                {domain}
              </label>
            )
          )}
          {errors.domains && <span style={errorStyle}>{errors.domains}</span>}
        </fieldset>

        {/* Section 5: Tools & Previous Projects */}
        <div style={fieldWrapper}>
          <label style={floatingLabel}>Tools You Use</label>
          <textarea
            name="tools"
            value={formData.tools}
            onChange={handleChange}
            style={{ ...inputStyle, minHeight: "80px" }}
          />
        </div>

        <div style={fieldWrapper}>
          <label style={floatingLabel}>Previous Projects (if any)</label>
          <textarea
            name="previousProjects"
            value={formData.previousProjects}
            onChange={handleChange}
            style={{ ...inputStyle, minHeight: "80px" }}
          />
        </div>

        {/* Section 6: Certification / Proof of Work and Confirmation */}
        <fieldset style={radioFieldset}>
        <legend>
            <strong>
            Section 3: Certification / Proof of Work and Confirmation
            </strong>
        </legend>       

        <label style={{ display: "block", marginBottom: "5px" }}>
            <input
            type="radio"
            name="certificateOption"
            value="Yes"
            checked={formData.certificateOption === "Yes"}
            onChange={handleChange}
            />{" "}
            Yes <span style={{ fontSize: '0.85rem' }}>(Certificate fee of ₹499 is required at the time of final registration.)</span>
        </label>

        <label style={{ display: "block" }}>
            <input
            type="radio"
            name="certificateOption"
            value="No"
            checked={formData.certificateOption === "No"}
            onChange={handleChange}
            />{" "}
            No <span style={{ fontSize: '0.85rem' }}>(I do not need a certificate or official proof of work.)</span>
        </label>
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
              <li>I will complete my assigned tasks responsibly.</li>
              <li>I will maintain professional behavior.</li>
              <li>Any project work will be original or properly credited.</li>
              <li>Organizers hold the final right to decisions.</li>
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
            cursor: "pointer",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
};

export default InternshipRegistrationPage;