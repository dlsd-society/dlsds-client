// pages/admin/IssueCertificatesPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config/config';
import { useAdminAuth } from '../context/AdminAuthContext';


const IssueCertificatesPage = () => {
  const { adminToken } = useAdminAuth();
  const [internships, setInternships] = useState([]);
  const [selected, setSelected] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/internships`, {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
        setInternships(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInternships();
  }, [adminToken]);

  const handleIssue = async () => {
    if (!selected || !fileUrl) {
      setMessage('Please select a participant and provide a file URL');
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/admin/issue-certificate`,
        {
          userId: selected.userId,
          internshipId: selected.id,
          fileUrl,
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      setMessage(res.data.message || 'Certificate issued successfully ✅');
      setFileUrl('');
    } catch (err) {
      setMessage('Error issuing certificate ❌');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Issue Certificates (Internships)</h2>
      <ul>
        {internships.map((i) => (
          <li key={i.id}>
            {i.fullName} ({i.email}) — <button onClick={() => setSelected(i)}>Select</button>
          </li>
        ))}
      </ul>

      {selected && (
        <div style={{ marginTop: 20 }}>
          <h3>Selected: {selected.fullName}</h3>
          <input
            type="text"
            placeholder="Enter certificate file URL"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
          />
          <button onClick={handleIssue}>Issue Certificate</button>
        </div>
      )}

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
};

export default IssueCertificatesPage;
