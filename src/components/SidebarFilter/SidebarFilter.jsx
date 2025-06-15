import React from "react";
import "./SidebarFilter.css";

const SidebarFilter = () => {
  return (
    <div className="sidebar">
      <h3>Explore all</h3>

      <div className="filter-section">
        <strong>Areas of Interest</strong>
        {["AI & ML", "Blockchain & Decentralized Identity", "Cloud & Containers", "Cybersecurity", "DevOps & Site Reliability"].map(item => (
          <div key={item}>
            <input type="checkbox" id={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>

      <div className="filter-section">
        <strong>Type</strong>
        {["Free Course", "Microlearning", "Reports/Articles", "Tutorial", "Webinar"].map(item => (
          <div key={item}>
            <input type="checkbox" id={item} defaultChecked={item === "Free Course"} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>

      <input className="search-box" type="text" placeholder="Search Resources" />
    </div>
  );
};

export default SidebarFilter;