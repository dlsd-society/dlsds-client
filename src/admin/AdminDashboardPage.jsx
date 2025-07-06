// src/admin/AdminDashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboardPage = () => {
  const { logout, adminToken } = useAdminAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admins/dashboard', {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });
        setMessage(res.data.message);
      } catch (err) {
        logout();
        navigate('/admin-login');
      }
    };

    fetchDashboard();
  }, [adminToken, logout, navigate]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <button onClick={() => { logout(); navigate('/admin-login'); }}>Logout</button>
      <p style={{ marginTop: '1rem' }}>{message}</p>

      <div style={{ marginTop: 20 }}>
        <p>🔗 Placeholder Links to manage:</p>
        <ul>
          <li>Manage Users</li>
          <li>Manage Courses</li>
          <li>Manage Content</li>
          <li>Reports</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
