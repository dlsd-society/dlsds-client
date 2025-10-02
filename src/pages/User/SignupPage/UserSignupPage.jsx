// pages/User/SignupPage/UserSignupPage.jsx
import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

// Reuse the same styled components from login
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f7fa;
`;

const Card = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0px 0px 5px rgba(74, 144, 226, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #357abd;
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const StyledLink = styled(Link)`
  color: #4a90e2;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserSignupPage = () => {
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
      navigate("/user/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Container>
      <Card>
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

        <FooterText>
          Already have an account? <StyledLink to="/user/login">Login here</StyledLink>
        </FooterText>
      </Card>
    </Container>
  );
};

export default UserSignupPage;
