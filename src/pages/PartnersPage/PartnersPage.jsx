import React, { useState } from "react";
import NoContent from "../../components/NoContent/NoContent";
import PartnershipForm from "../../components/ContactForms/PartnershipForm";
import styled from 'styled-components';
import "./PartnersPage.css";

const GeneralButton = styled.a`
  display: inline-block;
  margin-top: 16px;
  margin-right: 12px;
  background-color: #005a9c;
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #00477a;
  }`

const PartnersPage = () => {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);

  const closePartnershipModal = () => setShowPartnershipModal(false);

  return (
    <div className="partners-page">
      <NoContent message="Network error. Please try again later." />

      {/* Partner Button */}
      <div className="partner-action">
        {/* <button
          className="action-btn"
          onClick={() => setShowPartnershipModal(true)}
        >
          Partner with us
        </button> */}

        <GeneralButton
          href="https://forms.gle/2yF1bGfSZ2zZamkd7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Partner with us (Organisations)
        </GeneralButton>
      </div>

      {/* Partnership Modal (same as ContactPage) */}
      {showPartnershipModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button
              onClick={closePartnershipModal}
              className="close-btn"
            >
              ×
            </button>
            <PartnershipForm onClose={closePartnershipModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersPage;
