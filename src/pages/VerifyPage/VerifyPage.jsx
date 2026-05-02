// pages/VerifyPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../config/config';
import './VerifyPage.css';

const VerifyPage = () => {
  const { code } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(
          'Calling verify API:',
          `${BASE_URL}/api/admin/verify/${code}`,
        );

        const res = await axios.get(`${BASE_URL}/admin/verify/${code}`);
        setData(res.data);
      } catch (err) {
        setError('❌ Credential not found');
        console.log(err);
      }
    };
    fetchData();
  }, [code]);

  if (error) return <h2>{error}</h2>;
  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Credential Verification</h2>
      <div style={{ display: 'flex ', justifyContent: 'space-between' }}>
        {/* <p>
          <strong>Type:</strong> {data.type}
        </p>
        <p>
          <strong>Category:</strong> {data.category}
        </p> */}
        <div className="cert-content">
          <p>
            <strong>Issued To:</strong> {data.user} ({data.email})
          </p>
          <p>
            <strong>Issued At:</strong>{' '}
            {new Date(data.issuedAt).toLocaleString()}
          </p>
        </div>
        {data.hackathon && (
          <p>
            <strong>Hackathon:</strong> {data.hackathon.name} (
            {data.hackathon.version})
          </p>
        )}
        {data.internship && (
          <p>
            <strong>Internship:</strong> {data.internship.title}
          </p>
        )}
        {data.fileUrl && (
          <div className="certificate">
            <p>
              <strong>Badge/Certificate:</strong>
            </p>
            <img
              src={data.fileUrl}
              alt="Credential"
              className="credentials"
              // style={{ maxWidth: '1400px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyPage;
