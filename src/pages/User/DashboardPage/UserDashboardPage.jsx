import React from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import FooterSection from "../../../components/FooterSection/FooterSection";

const UserDashboardPage = () => {
  const { user } = useUserAuth();

  return (
    <div>
      <UserNavbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome, {user?.name || "User"} 👋</h1>
      </div>
      <FooterSection />
    </div>
  );
};

export default UserDashboardPage;
