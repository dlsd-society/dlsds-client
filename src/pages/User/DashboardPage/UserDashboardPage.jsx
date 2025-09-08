import React from "react";
import { useUserAuth } from "../../../context/UserAuthContext";

const UserDashboardPage = () => {
  const { user, logout } = useUserAuth();

  return (
    <div>
      <h2>Welcome {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserDashboardPage;
