// import React from "react";
// import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
// import CourseList from "../../components/CourseList/CourseList";
// import "./CoursesAndCertifications.css";

// const CoursesAndCertifications = () => {
//   return (
//     <div className="courses-page">
//       <SidebarFilter />
//       <div className="courses-content">
//         <h2>Results (89)</h2>
//         <CourseList />
//       </div>
//     </div>
//   );
// };

// export default CoursesAndCertifications;


// CoursesAndCertifications.jsx
import React from "react";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import CourseList from "../../components/CourseList/CourseList";
import "./CoursesAndCertifications.css";
import NoContent from "../../components/NoContent/NoContent";

const CoursesAndCertifications = () => {
  return (
    <div>
      <NoContent message="This feature is under development. Kindly check back later." />
    </div>
  );
};

export default CoursesAndCertifications;
