import React from "react";
import "./DonateSection.css";
import donateImage from "../../assets/donation.png";

const DonateSection = () => {
  return (
    <section className="donate-section">
      <div className="donate-container">
        <div className="donate-image">
          <img src={donateImage} alt="Donate Banner" />
        </div>
        <div className="donate-content">
          <h2>Thank you for being with us on this Journey</h2>
          <p>
            Your time and support plays a significant role in NIIT Foundation’s
            vision and efforts that are steered towards making a deep impact in
            our communities.
          </p>
          <button className="donate-button">DONATE</button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
