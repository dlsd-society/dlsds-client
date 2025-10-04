import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/config";
import { useUserAuth } from "../../../context/UserAuthContext";
import UserNavbar from "../../../components/Navbar/UserNavbar";

const MyAchievementsPage = () => {
  const { userToken } = useUserAuth();
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/user/achievements`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setBadges(res.data);
      } catch (err) {
        console.error("Error fetching achievements:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBadges();
  }, [userToken]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <UserNavbar />
      <div style={{ padding: "20px" }}>
        <h2>My Achievements</h2>
        {badges.length === 0 ? (
          <p>No achievements yet 🚀</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
            {badges.map((badge) => (
              <div key={badge.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px" }}>
                <h4>{badge.category}</h4>
                {badge.hackathon && (
                  <p>
                    Hackathon: {badge.hackathon.name} ({badge.hackathon.version})
                  </p>
                )}
                <p>Issued At: {new Date(badge.issuedAt).toLocaleString()}</p>
                <img
                  src={badge.fileUrl}
                  alt="Badge"
                  style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
                />
                <a href={`/verify/${badge.code}`} target="_blank" rel="noopener noreferrer">
                  Verify Credential
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAchievementsPage;
