import React from 'react';
import './DonationPage.css';

const DonationPage = () => {
  return (
    <div className="donation-page">
      <div className="donation-container">
        <h1 className="page-title">Donations - NIIT Foundation</h1>

        <h2 className="donation-heading">
          THE MARGINALISED NEED OUR SUPPORT MORE THAN EVER: RESPOND TO COVID-19
        </h2>

        <p>
          NIIT Foundation will provide employability skills training to the at-risk youth so they can sustain their families at this time. The girls need our help more than ever – their skilling is even lower priority when family resources are limited.
        </p>

        <p>
          You can also choose to support at-risk families towards food, medicines and other critical needs for survival. To counter fake news and lack of understanding in the slums and villages, you can also choose to support NF to educate the vulnerable sections of our society on preventive care for COVID-19.
        </p>

        <p>
          We need your support in this fight. <strong>Donate now, and change a Life Today!</strong>
        </p>

        <p>
          All donations made to NIIT Foundation are eligible for 50% tax exemption (u/s 80G of Income Tax Act).
        </p>

        <p>
          After you donate, please share the screenshot of the donation at <strong>contact@niitfoundation.org</strong>
        </p>

        <div className="donation-button-section">
          <h3>ONLINE PAYMENT GATEWAY</h3>
          <a href="https://donate.niitfoundation.org" target="_blank" rel="noopener noreferrer" className="donate-button">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
