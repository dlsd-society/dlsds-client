import React from 'react';
import './DonationPage.css';
import FooterSection from '../../components/FooterSection/FooterSection';

const DonationPage = () => {
  return (

    <div className="donation-page">
      <div className="donation-container">
        <h1 className="page-title">Donations - DLSD Society</h1>

        <h2 className="donation-heading">
          Your Contribution Can Change Lives — Join Us in Bridging the Digital Divide
        </h2>

        <p>
          Digital Literacy and Skill Development Society (DL&SDS) is committed to bridging the digital divide by empowering underserved communities with the skills they need to thrive in the modern economy.
        </p>

        <p>
          Your donation will directly support our initiatives—offering free digital literacy classes, remote internships, job-oriented software development training, and skill-building programs for youth and women from rural and underprivileged backgrounds.
        </p>

        <p>
          As technology continues to shape every aspect of our lives, ensuring access to digital knowledge is no longer a privilege—it is a necessity. By donating, you become a part of our journey to make digital education accessible and inclusive for all.
        </p>

        <p>
          <strong>Every contribution counts. Help us create opportunities and build a future where no one is left behind.</strong>
        </p>

        <p>
          All donations made to DLSD Society are eligible for 50% tax exemption under Section 80G of the Income Tax Act.
        </p>

        <p>
          Once you've donated, kindly share a screenshot of your transaction with us at <strong>contact@dlsds.in</strong>
        </p>

        <div className="donation-button-section">
          <h3>ONLINE PAYMENT GATEWAY</h3>
          <a href="https://your-donation-link.com" target="_blank" rel="noopener noreferrer" className="donate-button">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
