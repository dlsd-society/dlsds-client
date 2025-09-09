import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserAuth } from "../../../context/UserAuthContext";
import BASE_URL from "../../../config/config";

const UserProfilePage = () => {
  const { userToken } = useUserAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    profilePic: "",
  });

  useEffect(() => {
    if (userToken) {
      axios
        .get(`${BASE_URL}/user/profile`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          const userData = res.data.user; // ✅ correct path
          setFormData({
            name: userData.name || "",
            email: userData.email || "",
            bio: userData.bio || "",
            profilePic: userData.profilePic || "",
          });
        })
        .catch((err) => console.error("Profile fetch error:", err));
    }
  }, [userToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/user/profile`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => alert("Profile updated successfully!"))
      .catch((err) => console.error("Profile update error:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          disabled
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Bio"
        />
        <input
          type="text"
          name="profilePic"
          value={formData.profilePic}
          onChange={handleChange}
          placeholder="Profile Pic URL"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfilePage;