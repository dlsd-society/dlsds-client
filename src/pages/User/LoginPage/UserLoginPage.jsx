// import React, { useState } from "react";
// import axios from "axios";
// import BASE_URL from "../../../config/config";
// import { useUserAuth } from "../../../context/UserAuthContext";
// import { useNavigate } from "react-router-dom";

// const UserLoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useUserAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${BASE_URL}/user/login`, { email, password });
//       login(res.data.token, res.data.user);
//       navigate("/user/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Login</button>
//       </form>
//       <a href={`${BASE_URL}/user/auth/google`}>
//         <button>Login with Google</button>
//       </a>
//     </div>
//   );
// };

// export default UserLoginPage;


// pages/user/login/UserLoginPage.jsx
import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
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
  background: ${(props) => (props.google ? "#fff" : "#4a90e2")};
  color: ${(props) => (props.google ? "#444" : "#fff")};
  border: ${(props) => (props.google ? "1px solid #ddd" : "none")};
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${(props) => (props.google ? "#f8f8f8" : "#357abd")};
  }
`;

const GoogleLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #888;
  font-size: 14px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  &:not(:empty)::before {
    margin-right: 10px;
  }

  &:not(:empty)::after {
    margin-left: 10px;
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

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });
      login(res.data.token, res.data.user);
      navigate("/user/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container>
      <Card>
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

        <Divider>OR</Divider>

        <a href={`${BASE_URL}/user/auth/google`} style={{ textDecoration: "none", width: "100%", display: "block" }}>
          <Button google>
            <GoogleLogo
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
            />
            Login with Google
          </Button>
        </a>

        <FooterText>
          Don’t have an account? <StyledLink to="/user/signup">Sign up here</StyledLink>
        </FooterText>

      </Card>
    </Container>
  );
};

export default UserLoginPage;
