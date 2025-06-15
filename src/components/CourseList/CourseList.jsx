import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./CourseList.css";

const sampleCourses = [
  {
    title: "Understanding the EU Cyber Resilience Act",
    category: "Cybersecurity",
    description: "Learn to navigate CRA compliance, mitigate risks, and meet regulatory standards.",
  },
  {
    title: "Open Source RT-Thread RTOS on RISC-V",
    category: "IoT & Embedded Development",
    description: "Expand your skill set by learning how to port and configure an RTOS for embedded...",
  },
  {
    title: "Security for Software Development Managers",
    category: "Cybersecurity",
    description: "Gain the knowledge and skills needed to lead developer teams securely...",
  },
  // Add more course objects here
];

const CourseList = () => {
  return (
    <div className="course-list">
      {sampleCourses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
