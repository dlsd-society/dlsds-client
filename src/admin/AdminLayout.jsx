import React from "react";
import './admin.css'; // Optional: separate styles for admin

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout-wrapper">
      {children}
    </div>
  );
};

export default AdminLayout;
