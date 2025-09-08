import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/user/login`, { email, password });
      login(res.data.token, res.data.user);
      navigate("/user/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLoginPage;
