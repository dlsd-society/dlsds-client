// VerifyCertificatePage.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaCertificate,
  FaArrowLeft,
} from "react-icons/fa";
import "./VerifyCertificatePage.css";

const VerifyCertificatePage = () => {
  const { id } = useParams();

  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCertificate = async () => {
      try {
        const response = await fetch("/certificates.json");
        const data = await response.json();

        const foundCertificate = data.find(
          (cert) => cert.id.toLowerCase() === id.toLowerCase()
        );

        if (foundCertificate) {
          setCertificate({
            ...foundCertificate,
            image: `/certificates/${foundCertificate.id}.jpg`,
          });
        }
      } catch (error) {
        console.error("Verification failed:", error);
      } finally {
        setLoading(false);
      }
    };

    verifyCertificate();
  }, [id]);

  if (loading) {
    return (
      <div className="verify-loading-container">
        <div className="loader"></div>
        <p>Verifying certificate...</p>
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="verify-invalid-page">
        <div className="verify-invalid-card">
          <h1>Invalid Certificate</h1>
          <p>
            The certificate you are trying to verify does not exist or may have
            been removed.
          </p>

          <Link to="/" className="back-home-btn">
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="verify-page">
        <div className="verify-card">

        {/* LEFT SIDE */}
        <div className="verify-left">

            <div className="verified-badge">
            <FaCheckCircle />
            VERIFIED
            </div>
            

            <p className="verify-description">
            This certificate has been officially issued and verified
            by Digital Literacy and SKill Development Society.
            </p>

            <div className="verify-info-grid">

                <div className="verify-info-box">
                    <FaCertificate className="info-icon" />
                    <div>
                    <span>Certificate ID</span>
                    <h3>{certificate.id}</h3>
                    </div>
                </div>

                <div className="verify-info-box">
                    <FaShieldAlt className="info-icon" />
                    <div>
                    <span>Status</span>
                    <h3>Active & Valid</h3>
                    </div>
                </div>

            </div>

            <div className="certificate-details">

                <div className="detail-row">
                    <span>Recipient Name</span>
                    <strong>{certificate.name}</strong>
                </div>            

                <div className="detail-row">
                    <span>Issue Date</span>
                    <strong>{certificate.issueDate}</strong>
                </div>           

            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="verify-right">
            <div className="certificate-preview">
            <img
                src={certificate.image}
                alt="Verified Certificate"
            />
            </div>
        </div>

        </div>
    </div>
    );
};

export default VerifyCertificatePage;