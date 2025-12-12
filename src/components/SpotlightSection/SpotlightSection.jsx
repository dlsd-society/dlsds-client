import React from "react";
import "./SpotlightSection.css";
// import awarenessPrograms from "../../assets/awareness-programs.jpg";
import awarenessPrograms from "../../assets/1.png";

// import skillDevelopment from "../../assets/skill-development.jpg"; // Replace with the actual image
import skillDevelopment from "../../assets/2.png"; // Replace with the actual image
// import internshipsTraining from "../../assets/internships.png"; // Replace with the actual image
import internshipsTraining from "../../assets/3.png"; // Replace with the actual image
// import womenInTech from "../../assets/women-in-tech.png"; // Replace with the actual image
// import digitalSeniors from "../../assets/senior-citizen.jpeg"; // Replace with the actual image
import digitalSeniors from "../../assets/6.png"; // Replace with the actual image
// import ruralAccess from "../../assets/rural-india.jpg"; // Replace with the actual image
import ruralAccess from "../../assets/4.png"; // Replace with the actual image
// import youthEmployment from "../../assets/youth-employment.png"; // Replace with the actual image
import youthEmployment from "../../assets/5.png"; // Replace with the actual image

const SpotlightSection = () => {
  return (
    <section className="spotlight-section">
      <h2 className="spotlight-title">Popular Programs</h2>
      <p className="spotlight-subtitle">
        Showcasing DLSD Society’s impactful programs, forward-thinking initiatives, and honors received.
      </p>

      <div className="spotlight-grid">
        <div className="spotlight-card" style={{ backgroundImage: `url(${skillDevelopment})` }}>
          <div className="spotlight-overlay">
            <h3>Skill Development</h3>
            <p>Building connections and creating impactful collaborations for shared progress.</p>
          </div>
        </div>

        <div className="spotlight-card" style={{ backgroundImage: `url(${awarenessPrograms})` }}>
          <div className="spotlight-overlay">
            <h3>Awareness Programs</h3>
            <p>Guiding choices with illuminating insights and understanding.</p>
          </div>
        </div>

        <div className="spotlight-card" style={{ backgroundImage: `url(${internshipsTraining})` }}>
          <div className="spotlight-overlay">
            <h3>Internships & Trainings</h3>
            <p>Developing skills, addressing challenges, fostering growth, and embracing opportunities.</p>
          </div>
        </div>        

        {/* <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${womenInTech})` }}
        >
          <div className="spotlight-overlay">
            <h3>Women in Tech</h3>
            <p>
              Encouraging digital participation among women through tailored training and mentorship programs, bridging the gender gap in tech.
            </p>
          </div>
        </div> */}

        <div className="spotlight-card" style={{ backgroundImage: `url(${ruralAccess})` }}>
          <div className="spotlight-overlay">
            <h3>Rural Digital Access</h3>
            <p>Empowering rural area with digital access for growth.</p>
          </div>
        </div>

        <div className="spotlight-card" style={{ backgroundImage: `url(${youthEmployment})` }}>
          <div className="spotlight-overlay">
            <h3>Youth Employment Readiness</h3>
            <p>Preparing young minds for future readiness and skills.</p>
          </div>
        </div>

        <div className="spotlight-card" style={{ backgroundImage: `url(${digitalSeniors})` }}>
          <div className="spotlight-overlay">
            <h3>Digital Literacy for Seniors</h3>
            <p>Ensuring elderly stay informed, connected, and secure in the digital age.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SpotlightSection;
