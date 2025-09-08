import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const RequireUserAuth = ({ children }) => {
  const { isUserLoggedIn } = useUserAuth();
  return isUserLoggedIn ? children : <Navigate to="/user/login" />;
};

export default RequireUserAuth;
