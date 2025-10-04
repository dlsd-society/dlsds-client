import React from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import UserNavbar from "../../../components/Navbar/UserNavbar";

const UserDashboardPage = () => {
  const { user } = useUserAuth();

  return (
    <div>
      <UserNavbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome, {user?.name || "User"} 👋</h1>
      </div>
    </div>
  );
};

export default UserDashboardPage;
