import React from "react";
import "./ReportSection.css";

const ReportSection = ({ title, id, reports }) => {
  return (
    <section id={id} className="report-section">
      <h2>{title}</h2>
      <div className="report-grid">
        {reports.map((report, index) => (
          <div className="report-card" key={index}>
            <h3>{report.title}</h3>
            <a href={report.link} target="_blank" rel="noopener noreferrer">
              <button>Click Here</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReportSection;
