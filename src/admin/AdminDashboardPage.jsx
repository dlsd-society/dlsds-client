import React, { useEffect, useState } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../config/config';

const AdminDashboardPage = () => {
  const { logout, adminToken } = useAdminAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/dashboard`, {
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
          <li>
            <Link to="/admin-dashboard/manage-reports" className="admin-link">
              Manage Reports
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/internships">
              View / Manage Interns
            </Link>
          </li>  
          <li>
            <Link to="/admin-dashboard/issue-certificates">
              Issue Certificates
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/issue-badges">
              Issue Badges
            </Link>
          </li>          
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
