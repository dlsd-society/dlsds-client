// pages/User/SignupPage/UserSignupPage.jsx
import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Modal = styled.div`
  background: #fff;
  padding: 40px;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 28px;   /* medium size */
  cursor: pointer;
  color: #666;
  line-height: 1;

  &:hover {
    color: #222;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;

  &:focus {
    border-color: #4cafef;
    box-shadow: 0px 0px 5px rgba(74, 202, 239, 0.5);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #4cafef;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;

  &:hover {
    background: #379ad5;
  }
`;

const UserSignupPage = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/user/signup`, form);
      alert("Signup successful, please login.");
      onClose(); // close the modal after signup
      navigate("/user/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Modal>
      <CloseButton onClick={onClose}>&times;</CloseButton>

      <Title>User Signup</Title>
      <Form onSubmit={handleSignup}>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <Input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <Button type="submit">Signup</Button>
      </Form>
      
    </Modal>
  );
};

export default UserSignupPage;
