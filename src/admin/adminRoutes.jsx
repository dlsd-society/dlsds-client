import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';

const RequireAdminAuth = ({ children }) => {
  const { isAdminLoggedIn } = useAdminAuth();
  return isAdminLoggedIn ? children : <Navigate to="/admin-login" />;
};

export default RequireAdminAuth;
