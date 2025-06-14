import React from "react";
import "./SpotlightSection.css";
import spotlightImage from '../../assets/spotlight-01.jpg'; // Your uploaded image

const SpotlightSection = () => {
  return (
    <section className="spotlight-section">
      <h2 className="spotlight-title">SPOTLIGHT</h2>
      <p className="spotlight-subtitle">
        A glimpse into NIIT Foundation’s educational programs and other innovative programs, latest recognition and awards
      </p>

      <div className="spotlight-content">
        <div className="spotlight-left">          
          <img
            src={spotlightImage}
            alt="Financial Literacy"
          />
        </div>
        <div className="spotlight-right">
          <h3>Digital Bus</h3>
          <p>
            Digital Bus is a distinctive and impactful solution that tackles the issue of how to deliver digital literacy,
            financial literacy and upskilling courses to individuals in remote or isolated locations. Individuals who are in
            a disadvantaged position can welcome the world of information and knowledge at their doorstep. As our fleet expands,
            we hope to reduce the digital divide between various areas in India and help disseminate Government policies and
            schemes to citizens.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>

      <div className="spotlight-content">
        <div className="spotlight-right">
          <h3>Digital Bus</h3>
          <p>
            Digital Bus is a distinctive and impactful solution that tackles the issue of how to deliver digital literacy,
            financial literacy and upskilling courses to individuals in remote or isolated locations. Individuals who are in
            a disadvantaged position can welcome the world of information and knowledge at their doorstep. As our fleet expands,
            we hope to reduce the digital divide between various areas in India and help disseminate Government policies and
            schemes to citizens.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
        <div className="spotlight-left">          
          <img
            src={spotlightImage}
            alt="Financial Literacy"
          />
        </div>        
      </div>

      <div className="spotlight-content">
        <div className="spotlight-left">          
          <img
            src={spotlightImage}
            alt="Financial Literacy"
          />
        </div>
        <div className="spotlight-right">
          <h3>Digital Bus</h3>
          <p>
            Digital Bus is a distinctive and impactful solution that tackles the issue of how to deliver digital literacy,
            financial literacy and upskilling courses to individuals in remote or isolated locations. Individuals who are in
            a disadvantaged position can welcome the world of information and knowledge at their doorstep. As our fleet expands,
            we hope to reduce the digital divide between various areas in India and help disseminate Government policies and
            schemes to citizens.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
