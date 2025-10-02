import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper"; // adjust import path

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

  &:hover {
    background: #379ad5;
  }
`;

const GoogleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  transition: 0.3s;

  &:hover {
    background: #f0f0f0;
  }
`;

const GoogleLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const UserLoginPage = ({ onClose }) => {
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
    <ModalWrapper>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <Title>User Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Button type="submit">Login</Button>
        </Form>

        <GoogleButton href={`${BASE_URL}/user/auth/google`}>
          <GoogleLogo src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
          Login with Google
        </GoogleButton>
      </Modal>
    </ModalWrapper>
  );
};

export default UserLoginPage;
