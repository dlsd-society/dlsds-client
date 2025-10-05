import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import avatar from "../../assets/user_avatar.jpg";
import "./UserNavbar.css";

const UserNavbar = () => {
  const { user, logout } = useUserAuth();  
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="dashboard-navbar">
      {/* Logo */}
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <p>Digital Literacy and Skill Development Society</p>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li>
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/achievements"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Achievements
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/purchases"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Purchases
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/profile"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            My Profile
          </NavLink>
        </li>

        {/* Avatar + Dropdown */}
        <li className="avatar-container">
          <img
            src={avatar}
            alt="User Avatar"
            className="avatar"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="#" className="accounts">
                Account Settings
              </NavLink>
              <button onClick={logout} className="accounts">
                Logout
              </button>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="/user/achievements"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            My Achievements
          </NavLink>
          <NavLink
            to="/user/purchases"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            My Purchases
          </NavLink>
          <NavLink
            to="/user/profile"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Account Settings
          </NavLink>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
