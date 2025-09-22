import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import BASE_URL from "../../../config/config";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const { login } = useUserAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Save token & fetch user from backend
      fetch(`${BASE_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            login(token, data.user);
            navigate("/user/dashboard");
          } else {
            navigate("/user/login");
          }
        })
        .catch(() => navigate("/user/login"));
    } else {
      navigate("/user/login");
    }
  }, [login, navigate]);

  return <div>Logging in with Google...</div>;
};

export default GoogleSuccess;
