import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useNavigate } from "react-router-dom";

const UserSignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/user/signup`, form);
      alert("Signup successful, please login.");
      navigate("/user/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSignup}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default UserSignupPage;
