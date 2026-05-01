// DonationPage.jsx
import React from "react";
import "./DonationPage.css";
import FooterSection from "../../components/FooterSection/FooterSection";
import qrImage from "../../assets/QR-Code.png"; // <-- Add your QR image here

const DonationPage = () => {
  return (
    <div className="donation-page">
      <div className="donation-container">
        <h1 className="page-title">Donations - DLSD Society</h1>

        <h2 className="donation-heading">
          Your Contribution Can Change Lives — Join Us in Bridging the Digital Divide
        </h2>

        <p>
          Digital Literacy and Skill Development Society is committed to bridging
          the digital divide by empowering underserved communities with the
          skills they need to thrive in the modern economy.
        </p>

        <p>
          Your donation will directly support our initiatives—offering digital
          literacy classes, internships, job-oriented software development
          training, and skill-building programs for youth and women from rural
          and underprivileged backgrounds.
        </p>

        <p>
          As technology continues to shape every aspect of our lives, ensuring
          access to digital knowledge is no longer a privilege—it is a necessity.
          By donating, you become a part of our journey to make digital
          education accessible and inclusive for all.
        </p>

        <p>
          <strong>
            Every contribution counts. Help us create opportunities and build a
            future where no one is left behind.
          </strong>
        </p>        

        {/* DONATE BUTTON COMMENTED OUT TEMPORARILY */}
        {/*
        <div className="donation-button-section">
          <h3>ONLINE PAYMENT GATEWAY</h3>
          <a 
            href="https://your-donation-link.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="donate-button"
          >
            Donate Now
          </a>
        </div>
        */}

        {/* NEW BANK + QR SECTION */}
        <div className="donation-flex-box">
          <div className="bank-details-box">
            <h3>Bank Transfer Details</h3>
            <div style={{ marginTop: '2rem' }}>
              <p><strong>Account Name:</strong> DIGITAL LITERACY AND SKILL DEVELOPMENT SOCIETY</p>
              <p><strong>Bank Name:</strong> PUNJAB NATIONAL BANK</p>
              <p><strong>Account Number:</strong> 2027200100001577</p>
              <p><strong>IFSC Code:</strong> PUNB0202720</p>
              <p><strong>Branch:</strong> BELTOLA BAZAR</p>
            </div>            
            <div style={{ marginTop: '5rem' }}>
              <p>
                <em>
                  Note : Once you've donated, kindly share a screenshot of your transaction with
                us at <strong>contact@dlsds.org</strong>
                </em>
              </p>
            </div>            
          </div>

          <div className="qr-box">
            <h3>UPI Payment (Scan & Pay)</h3>
            <img src={qrImage} alt="UPI QR Code" className="qr-image" />
          </div>
        </div>

      </div>
            
    </div>
  );
};

export default DonationPage;
