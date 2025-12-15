import React, { useState } from "react";
import NoContent from "../../components/NoContent/NoContent";
import PartnershipForm from "../../components/ContactForms/PartnershipForm";
import "./PartnersPage.css";

const PartnersPage = () => {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);

  const closePartnershipModal = () => setShowPartnershipModal(false);

  return (
    <div className="partners-page">
      <NoContent message="Network error. Please try again later." />

      {/* Partner Button */}
      <div className="partner-action">
        <button
          className="action-btn"
          onClick={() => setShowPartnershipModal(true)}
        >
          Partner with us
        </button>
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
