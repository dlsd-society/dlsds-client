import React from "react";
import "./SpotlightSection.css";
import awarenessPrograms from "../../assets/awareness-programs.jpg";
import skillDevelopment from "../../assets/skill-development.jpg"; // Replace with the actual image
import internshipsTraining from "../../assets/internships.png"; // Replace with the actual image
// import womenInTech from "../../assets/women-in-tech.png"; // Replace with the actual image
import digitalSeniors from "../../assets/senior-citizen.jpeg"; // Replace with the actual image
import ruralAccess from "../../assets/rural-india.jpg"; // Replace with the actual image
import youthEmployment from "../../assets/youth-employment.png"; // Replace with the actual image

const SpotlightSection = () => {
  return (
    <section className="spotlight-section">
      <h2 className="spotlight-title">SPOTLIGHT</h2>
      <p className="spotlight-subtitle">
        A glimpse into DLSD Society's programs and other innovative programs, latest recognition and awards
      </p>

      <div className="spotlight-grid">
        <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${awarenessPrograms})` }}
        >
          <div className="spotlight-overlay">
            <h3>Awareness Programs</h3>
            <p>
              Illuminating insights, fostering understanding, and guiding
              towards informed choices in diverse domains.
            </p>
          </div>
        </div>

        <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${internshipsTraining})` }}
        >
          <div className="spotlight-overlay">
            <h3>Internships & Trainings</h3>
            <p>
              Developing skills, addressing challenges, fostering growth, and
              embracing opportunities.
            </p>
          </div>
        </div>

        <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${skillDevelopment})` }}
        >
          <div className="spotlight-overlay">
            <h3>Skill Development</h3>
            <p>
              Building connections and creating impactful collaborations for
              shared progress.
            </p>
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

        <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${ruralAccess})` }}
        >
          <div className="spotlight-overlay">
            <h3>Rural Digital Access</h3>
            <p>
              Empowering remote communities with digital infrastructure and learning hubs to ensure inclusive growth in the digital era.
            </p>
          </div>
        </div>

        <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${youthEmployment})` }}
        >
          <div className="spotlight-overlay">
            <h3>Youth Employment Readiness</h3>
            <p>
              Preparing young minds with essential digital and professional skills to enhance employability and future readiness.
            </p>
          </div>
        </div>

        <div
          className="spotlight-card"
          style={{ backgroundImage: `url(${digitalSeniors})` }}
        >
          <div className="spotlight-overlay">
            <h3>Digital Literacy for Seniors</h3>
            <p>
              Ensuring elderly individuals stay informed, connected, and secure in the digital age through customized training.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SpotlightSection;
