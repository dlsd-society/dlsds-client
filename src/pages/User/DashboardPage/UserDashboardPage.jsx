// import React, { useState } from "react";
// import { useUserAuth } from "../../../context/UserAuthContext";
// import { FiEdit2 } from "react-icons/fi";
// import UserNavbar from "../../../components/Navbar/UserNavbar";
// import FooterSection from "../../../components/FooterSection/FooterSection";
// import "./UserDashboardPage.css";
// import avatar from "../../../assets/user_avatar.jpg";

// const UserDashboardPage = () => {
//   const { user } = useUserAuth();

//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: user?.name || "User Name",
//     email: user?.email || "user@example.com",
//     role: user?.role || "Learner",
//     image: user?.photoURL || avatar,
//   });

//   // Handle profile field edit
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfile({ ...profile, image: imageUrl });
//     }
//   };

//   // Toggle edit mode
//   const toggleEdit = () => setIsEditing(!isEditing);

//   return (
//     <div className="dashboard-container">
//       <UserNavbar />

//       <div className="dashboard-content">
//         {/* ===== Left Sidebar ===== */}
//         <div className="user-sidebar">
//           {/* === Editable User Image === */}
//           <div className="user-image-container">
//             <img src={profile.image} alt="User Avatar" className="user-image" />

//             <label htmlFor="imageUpload" className="edit-icon-btn">
//               <FiEdit2 />
//             </label>
//             <input
//               type="file"
//               id="imageUpload"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//             />
//           </div>

//           {/* === Editable User Info === */}
//           <div className="user-info">
//             <div className="info-header">
//               <h3>User Profile</h3>
//               <button className="edit-icon-btn" onClick={toggleEdit}>
//                 <FiEdit2 />
//               </button>
//             </div>

//             <div className="info-fields">
//               <label>Name:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={profile.name}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <p>{profile.name}</p>
//               )}

//               <label>Email:</label>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={profile.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <p>{profile.email}</p>
//               )}

//               <label>Role:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="role"
//                   value={profile.role}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <p>{profile.role}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ===== Right Main Content ===== */}
//         <div className="user-main-content">
//           {/* === Recent Achievements === */}
//           <section className="dashboard-section">
//             <div className="section-header">
//               <h3>Recent Achievements</h3>
//               <button className="more-btn">More..</button>
//             </div>
//             <div className="card-row">
//               <div className="card">Achievement 1</div>
//               <div className="card">Achievement 2</div>
//               <div className="card">Achievement 3</div>
//             </div>
//           </section>

//           {/* === Recent Purchases === */}
//           <section className="dashboard-section">
//             <div className="section-header">
//               <h3>Recent Purchases</h3>
//               <button className="more-btn">More..</button>
//             </div>
//             <div className="card-row">
//               <div className="card">Purchase 1</div>
//               <div className="card">Purchase 2</div>
//               <div className="card">Purchase 3</div>
//             </div>
//           </section>

//           {/* === Courses/Events === */}
//           <section className="dashboard-section">
//             <div className="section-header">
//               <h3>Courses / Events You Would Like</h3>
//               <button className="more-btn">More..</button>
//             </div>
//             <div className="card-row">
//               <div className="card">Course 1</div>
//               <div className="card">Course 2</div>
//               <div className="card">Course 3</div>
//             </div>
//           </section>
//         </div>
//       </div>

//       <FooterSection />
//     </div>
//   );
// };

// export default UserDashboardPage;






import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";
import { useUserAuth } from "../../../context/UserAuthContext";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import FooterSection from "../../../components/FooterSection/FooterSection";
import BASE_URL from "../../../config/config";
import "./UserDashboardPage.css";
import defaultAvatar from "../../../assets/user_avatar.jpg";

const UserDashboardPage = () => {
  const { user, userToken } = useUserAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "User Name",
    email: user?.email || "user@example.com",
    role: user?.role || "Learner",
    image: user?.photoURL || defaultAvatar,
  });

  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  // === Fetch Achievements (latest 3) ===
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/user/achievements`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        // Sort by issuedAt descending and pick top 3
        const sorted = res.data.sort(
          (a, b) => new Date(b.issuedAt) - new Date(a.issuedAt)
        );
        setAchievements(sorted.slice(0, 3));
      } catch (err) {
        console.error("Error fetching achievements:", err);
      } finally {
        setLoading(false);
      }
    };
    if (userToken) fetchAchievements();
  }, [userToken]);

  // === Handle profile field edit ===
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // === Handle image upload ===
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="dashboard-container">
      <UserNavbar />

      <div className="dashboard-content">
        {/* ===== Left Sidebar ===== */}
        <div className="user-sidebar">
          <div className="user-image-container">
            <img src={profile.image} alt="User Avatar" className="user-image" />

            <label htmlFor="imageUpload" className="edit-icon-btn">
              <FiEdit2 />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <div className="user-info">
            <div className="info-header">
              <h3>User Profile</h3>
              <button className="edit-icon-btn" onClick={toggleEdit}>
                {isEditing ? "Save" : <FiEdit2 />}
              </button>
            </div>

            <div className="info-fields">
              <label>Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.name}</p>
              )}

              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.email}</p>
              )}

              <label>Role:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.role}</p>
              )}
            </div>
          </div>
        </div>

        {/* ===== Right Main Content ===== */}
        <div className="user-main-content">
          {/* === Recent Achievements === */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>Recent Achievements</h3>
              <button className="more-btn">More..</button>
            </div>

            {loading ? (
              <p>Loading achievements...</p>
            ) : achievements.length === 0 ? (
              <p>No achievements yet 🚀</p>
            ) : (
              <div className="card-row">
                {achievements.map((a) => (
                  <div key={a.id} className="card">
                    <h4>{a.category || a.type}</h4>
                    {a.participant?.hackathon && (
                      <p>
                        Hackathon: {a.participant.hackathon.name} (
                        {a.participant.hackathon.version})
                      </p>
                    )}
                    {a.internship && (
                      <p>
                        Internship: {a.internship.projectPreference || "N/A"}
                      </p>
                    )}
                    <p>
                      Issued: {new Date(a.issuedAt).toLocaleDateString()}
                    </p>
                    {a.fileUrl && (
                      <img
                        src={a.fileUrl}
                        alt="Achievement"
                        className="achievement-img"
                      />
                    )}
                    <a
                      href={`/verify/${a.code}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Credential
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* === Recent Purchases (Static Placeholder) === */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>Recent Purchases</h3>
              <button className="more-btn">More..</button>
            </div>
            <div className="card-row">
              <div className="card">Purchase 1</div>
              <div className="card">Purchase 2</div>
              <div className="card">Purchase 3</div>
            </div>
          </section>

          {/* === Courses/Events === */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>Courses / Events You Would Like</h3>
              <button className="more-btn">More..</button>
            </div>
            <div className="card-row">
              <div className="card">Course 1</div>
              <div className="card">Course 2</div>
              <div className="card">Course 3</div>
            </div>
          </section>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default UserDashboardPage;