// RequireUserAuth.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const RequireUserAuth = ({ children }) => {
  const { isUserLoggedIn, loading } = useUserAuth();

  if (loading) {
    return <div>Loading...</div>; // 👈 or a spinner
  }

  return isUserLoggedIn ? children : <Navigate to="/user/login" />;
};

export default RequireUserAuth;
