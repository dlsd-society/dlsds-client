// components/Navbar/UserNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/logo.png';
import avatar from '../../assets/user_avatar.jpg';
import "./UserNavbar.css";

const UserNavbar = () => {
  const { user, logout } = useUserAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const avatar = user?.avatar || "https://via.placeholder.com/40";

  return (
    <nav className="dashboard-navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <p>Digital Literacy and Skill Development Society</p>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="nav-links">
        <li>
          <Link to="/user/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/user/achievements">Achievements</Link>
        </li>
        <li>
          <Link to="/user/purchases">Purchases</Link>
        </li>
        <li>
          <Link to="/user/profile">My Profile</Link>
        </li>
        <li className="avatar-container">
          <img
            src={avatar}
            alt="User Avatar"
            className="avatar"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="#" className="accounts">Account Settings</Link>
              <button onClick={logout} className="accounts">Logout</button>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/user/achievements" onClick={() => setMenuOpen(false)}>
            My Achievements
          </Link>
          <Link to="/user/purchases" onClick={() => setMenuOpen(false)}>
            My Purchases
          </Link>
          <Link to="/user/profile" onClick={() => setMenuOpen(false)}>
            Account Settings
          </Link>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;