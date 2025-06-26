// import { useState } from "react";
// import "./Navbar.css";
// import logo from '../../assets/logo.png';

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img
//           src={logo}
//           alt="Logo"
//           className="logo"
//         />
//         <p>Digital Literacy and Skill Development Society</p>
//       </div>      

//       <ul className="navbar-links">
//         <li><a href="/">HOME</a></li>

//         <li
//           onMouseEnter={() => handleDropdown("about")}
//           onMouseLeave={() => handleDropdown(null)}
//         >
//           <a href="/about">ABOUT US ▾</a> 
//           {openDropdown === "about" && (
//             <div className="dropdown">
//               <a href="/about#about-intro">Who are we</a>
//               <a href="/about#mission">Mission and Values</a>
//               <a href="/about#members">Member Body</a>
//             </div>
//           )}
//         </li>

//         <li
//           onMouseEnter={() => handleDropdown("programs")}
//           onMouseLeave={() => handleDropdown(null)}
//         >
//           <a href="/programs">PROGRAMS ▾</a>
//           {openDropdown === "programs" && (
//             <div className="dropdown">
//               <a href="/programs">Skilling</a>
//               <a href="/programs">Education</a>
//               <a href="/programs">Digital Literacy</a>
//             </div>
//           )}
//         </li>

//         <li
//           onMouseEnter={() => handleDropdown("partners")}
//           onMouseLeave={() => handleDropdown(null)}
//         >
//           <a href="/partners">PARTNERSHIPS ▾</a>
//           {openDropdown === "partners" && (
//             <div className="dropdown">
//               <a href="/partners">Corporate</a>
//               <a href="/partners">Government</a>
//               <a href="/partners">NGO Partners</a>
//             </div>
//           )}
//         </li>

//         <li
//           onMouseEnter={() => handleDropdown("learning")}
//           onMouseLeave={() => handleDropdown(null)}
//         >
//           <a href="/courses">LEARNING ▾</a>
//           {openDropdown === "learning" && (
//             <div className="dropdown">
//               <a href="/courses">Online Courses</a>
//               <a href="#">Seminars & Webinars</a>
//               <a href="#">Workshops</a>
//               <a href="#">Internships & Training</a>
//             </div>
//           )}
//         </li>

//         <li
//           onMouseEnter={() => handleDropdown("resources")}
//           onMouseLeave={() => handleDropdown(null)}
//         >
//           <a href="/resources">RESOURCES ▾</a>
//           {openDropdown === "resources" && (
//             <div className="dropdown">
//               <a href="/resources#activities">Activities</a>
//               <a href="/resources#audit">Audit Reports</a>
//               <a href="/resources#annual">Annual Reports</a>
//             </div>
//           )}
//         </li>

//         <li><a href="/contact">CONTACT</a></li>
//       </ul>

//     </nav>
//   );
// };

// export default Navbar;


import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Close mobile menu on window resize if it's large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1369) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <p>Digital Literacy and Skill Development Society</p>
      </div>

      {/* Hamburger Icon for Mobile/Tablet */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Desktop Navbar */}
      <ul className="navbar-links">
        <li><a href="/">HOME</a></li>

        <li>
          <a href="/about">ABOUT US ▾</a>
          <div className="dropdown">
            <a href="/about#about-intro">Who are we</a>
            <a href="/about#mission">Mission and Values</a>
            <a href="/about#members">Member Body</a>
          </div>
        </li>

        <li>
          <a href="/programs">PROGRAMS ▾</a>
          <div className="dropdown">
            <a href="/programs#skilling">Skilling</a>
            <a href="/programs#education">Education</a>
            <a href="/programs#digital">Digital Literacy</a>
          </div>
        </li>

        <li>
          <a href="/partners">PARTNERSHIPS ▾</a>
          <div className="dropdown">
            <a href="/partners#corporate">Corporate</a>
            <a href="/partners#government">Government</a>
            <a href="/partners#ngo">NGO Partners</a>
          </div>
        </li>

        <li>
          <a href="/courses">LEARNING ▾</a>
          <div className="dropdown">
            <a href="/courses#online">Online Courses</a>
            <a href="#">Seminars & Webinars</a>
            <a href="#">Workshops</a>
            <a href="#">Internships & Training</a>
          </div>
        </li>

        <li>
          <a href="/resources">RESOURCES ▾</a>
          <div className="dropdown">
            <a href="/resources#activities">Activities</a>
            <a href="/resources#audit">Audit Reports</a>
            <a href="/resources#annual">Annual Reports</a>
          </div>
        </li>

        <li><a href="/contact">CONTACT</a></li>
      </ul>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="/">HOME</a></li>

            <li onClick={() => toggleDropdown("about")}>
              <span>ABOUT US ▾</span>
              {openDropdown === "about" && (
                <div className="mobile-dropdown">
                  <a href="/about#about-intro">Who are we</a>
                  <a href="/about#mission">Mission and Values</a>
                  <a href="/about#members">Member Body</a>
                </div>
              )}
            </li>

            <li onClick={() => toggleDropdown("programs")}>
              <span>PROGRAMS ▾</span>
              {openDropdown === "programs" && (
                <div className="mobile-dropdown">
                  <a href="/programs#skilling">Skilling</a>
                  <a href="/programs#education">Education</a>
                  <a href="/programs#digital">Digital Literacy</a>
                </div>
              )}
            </li>

            <li onClick={() => toggleDropdown("partners")}>
              <span>PARTNERSHIPS ▾</span>
              {openDropdown === "partners" && (
                <div className="mobile-dropdown">
                  <a href="/partners#corporate">Corporate</a>
                  <a href="/partners#government">Government</a>
                  <a href="/partners#ngo">NGO Partners</a>
                </div>
              )}
            </li>

            <li onClick={() => toggleDropdown("learning")}>
              <span>LEARNING ▾</span>
              {openDropdown === "learning" && (
                <div className="mobile-dropdown">
                  <a href="/courses#online">Online Courses</a>
                  <a href="#">Seminars & Webinars</a>
                  <a href="#">Workshops</a>
                  <a href="#">Internships & Training</a>
                </div>
              )}
            </li>

            <li onClick={() => toggleDropdown("resources")}>
              <span>RESOURCES ▾</span>
              {openDropdown === "resources" && (
                <div className="mobile-dropdown">
                  <a href="/resources#activities">Activities</a>
                  <a href="/resources#audit">Audit Reports</a>
                  <a href="/resources#annual">Annual Reports</a>
                </div>
              )}
            </li>

            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;