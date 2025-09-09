import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";

const UserDashboardPage = () => {
  const { user, logout } = useUserAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user?.name || "User"} 👋</h1>
      <nav style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/user/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/user/purchases">My Purchases</Link>
          </li>
          <li>
            <Link to="/user/achievements">My Achievements</Link>
          </li>
          <li>
            <button onClick={logout} style={{ cursor: "pointer", color: "red", background: "none", border: "none" }}>
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserDashboardPage;