import React from "react";
import "./DonateSection.css";
import donateImage from "../../assets/donation.png";
import { useNavigate } from "react-router-dom";

const DonateSection = () => {

  const navigate = useNavigate();

  return (
    <section className="donate-section">
      <div className="donate-container">
        <div className="donate-image">
          <img src={donateImage} alt="Donate Banner" />
        </div>
        <div className="donate-content">
          <h2>Thank you for being a part of our journey.</h2>
          <p>         
            Your continued support and time are invaluable to the Digital Literacy and Skill Development Society’s mission of creating a meaningful and lasting impact in our communities.
          </p>
          <div className="donate-button" onClick={() => navigate("/donation")}>          
          <button>Donate Now</button>                    
        </div>
          {/* <button className="donate-button">DONATE</button> */}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
