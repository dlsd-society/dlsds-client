import { useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <p>Digital Literacy and Skill Development Society</p>
      </div>      

      <ul className="navbar-links">
        <li><a href="/">HOME</a></li>

        <li
          onMouseEnter={() => handleDropdown("about")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="/about">ABOUT US ▾</a> 
          {openDropdown === "about" && (
            <div className="dropdown">
              <a href="/about#about-intro">Who are we</a>
              <a href="/about#mission">Mission and Values</a>
              <a href="/about#members">Member Body</a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => handleDropdown("programs")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="/programs">PROGRAMS ▾</a>
          {openDropdown === "programs" && (
            <div className="dropdown">
              <a href="/programs">Skilling</a>
              <a href="/programs">Education</a>
              <a href="/programs">Digital Literacy</a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => handleDropdown("partners")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="/partners">PARTNERSHIPS ▾</a>
          {openDropdown === "partners" && (
            <div className="dropdown">
              <a href="/partners">Corporate</a>
              <a href="/partners">Government</a>
              <a href="/partners">NGO Partners</a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => handleDropdown("learning")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="/courses">LEARNING ▾</a>
          {openDropdown === "learning" && (
            <div className="dropdown">
              <a href="/courses">Online Courses</a>
              <a href="#">Seminars & Webinars</a>
              <a href="#">Workshops</a>
              <a href="#">Internships & Training</a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => handleDropdown("resources")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="/resources">RESOURCES ▾</a>
          {openDropdown === "resources" && (
            <div className="dropdown">
              <a href="/resources#activities">Activities</a>
              <a href="/resources#audit">Audit Reports</a>
              <a href="/resources#annual">Annual Reports</a>
            </div>
          )}
        </li>

        <li><a href="/contact">CONTACT</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
