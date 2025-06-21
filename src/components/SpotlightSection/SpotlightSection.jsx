import React from "react";
import "./SpotlightSection.css";
import awarenessPrograms from "../../assets/awareness-programs.jpg";
import skillDevelopment from "../../assets/skill-development.jpg"; // Replace with the actual image
import internshipsTraining from "../../assets/internships.png"; // Replace with the actual image

const SpotlightSection = () => {
  return (
    <section className="spotlight-section">
      <h2 className="spotlight-title">SPOTLIGHT</h2>
      <p className="spotlight-subtitle">
        A glimpse into NIIT Foundation’s educational programs and other innovative programs, latest recognition and awards
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
      </div>
    </section>
  );
};

export default SpotlightSection;
