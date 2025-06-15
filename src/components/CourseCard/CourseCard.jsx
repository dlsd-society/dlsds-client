import React from "react";
import "./CourseCard.css";

const CourseCard = ({ title, category, description }) => {
  return (
    <div className="course-card">
      <div className="badge">FREE COURSE</div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="category">{category}</p>
    </div>
  );
};

export default CourseCard;
