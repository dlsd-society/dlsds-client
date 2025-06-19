import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://niitfoundation.org/images/logo.png"
          alt="Logo"
          className="logo"
        />
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
              <a href="/about#mission">Mission and Values</a>
              <a href="/about#members">Member Body</a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => handleDropdown("programs")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="#">PROGRAMS ▾</a>
          {openDropdown === "programs" && (
            <div className="dropdown">
              <a href="#">Skilling</a>
              <a href="#">Education</a>
              <a href="#">Digital Literacy</a>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => handleDropdown("partners")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="#">PARTNERS ▾</a>
          {openDropdown === "partners" && (
            <div className="dropdown">
              <a href="#">Corporate</a>
              <a href="#">Government</a>
              <a href="#">NGO Partners</a>
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
          <a href="#">RESOURCES ▾</a>
          {openDropdown === "resources" && (
            <div className="dropdown">
              <a href="#">Media</a>
              <a href="#">Newsletters</a>
              <a href="#">Audit Reports</a>
              <a href="#">Annual Reports</a>              
            </div>
          )}
        </li>
        <li><a href="/contact">CONTACT US</a></li>
      </ul>

      <div className="navbar-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </nav>
  );
};

export default Navbar;
