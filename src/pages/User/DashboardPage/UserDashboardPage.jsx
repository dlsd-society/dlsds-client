import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiCamera, FiChevronDown, FiEdit2 } from "react-icons/fi";
import { useUserAuth } from "../../../context/UserAuthContext";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import FooterSection from "../../../components/FooterSection/FooterSection";
import BASE_URL from "../../../config/config";
import "./UserDashboardPage.css";
import defaultAvatar from "../../../assets/user_avatar.jpg";
import Swal from 'sweetalert2';

const UserDashboardPage = () => {
  const { user, userToken } = useUserAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "User Name",
    email: user?.email || "user@example.com",
    role: user?.role || "Learner",
    image: user?.profilePic || defaultAvatar,
    linkedIn: user?.linkedIn || "",
    website: user?.website || "",
    about: user?.about || "",
  });
  const [originalProfile, setOriginalProfile] = useState(profile);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // default closed

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({
        ...profile,
        image: imageUrl,
        imageFile: file, // store the actual File for uploading
      });
    }
  }; 

  const toggleEdit = () => setIsEditing(!isEditing);  

  const handleSave = async () => {
    setIsUpdating(true);
    try {
      const formData = new FormData();
      formData.append("name", profile.name);
      formData.append("email", profile.email);
      formData.append("role", profile.role);
      formData.append("linkedIn", profile.linkedIn);
      formData.append("website", profile.website);
      formData.append("about", profile.about);
      if (profile.imageFile) formData.append("profilePic", profile.imageFile);

      const res = await axios.put(`${BASE_URL}/user/profile`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const updated = {
        name: res.data.user.name,
        email: res.data.user.email,
        role: res.data.user.role,
        image: res.data.user.profilePic || defaultAvatar,
        linkedIn: res.data.user.linkedIn || "",
        website: res.data.user.website || "",
        about: res.data.user.about || "",
      };

      setProfile(updated);
      setOriginalProfile(updated); // ✅ Update the stored original profile
      setIsEditing(false);

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been successfully updated!",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Profile update error:", err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setIsUpdating(false);
    }
  };  

  const truncateText = (text, maxLength = 35) => {
    if (!text) return "Not provided";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };


  return (
    <div className="dashboard-container">
      <UserNavbar />

      <div className="dashboard-content">
        {/* ===== Left Sidebar ===== */}
        <div className="user-sidebar">
          {/* === Edit Icon at Top Right === */}
          <button className="edit-icon-top" onClick={toggleEdit}>
            <FiEdit2 />
          </button>

          {/* === Profile Picture Section === */}
          <div className="user-image-container">
            <img src={profile.image} alt="User Avatar" className="user-image" />
            {isEditing && (
              <div className="upload-btn-wrapper">
                <label htmlFor="imageUpload" className="upload-btn">
                  <FiCamera />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>

          {/* === User Info Section === */}
          <div className="user-info">
            {/* <h3>User Profile</h3> */}
            <div className="info-fields">
              <div className="info-field">
              <label>Name</label>
              <p>{profile.name}</p>
            </div>

            <div className="info-field">
              <label>Email</label>
              <p>{profile.email}</p>
            </div>

            <div className="info-field">
              <label>LinkedIn</label>
              <p>{profile.linkedIn || "Not provided"}</p>
            </div>

            <div className="info-field">
              <label>Website / Other Profile</label>
              <p>{profile.website || "Not provided"}</p>
            </div>

            <div className="info-field">
              <label>About Me</label>
              <p>{profile.about || "No bio yet"}</p>
            </div>                     
            </div>

            {/* === Save & Cancel Buttons === */}
            {isEditing && (
              <div className="action-btns">                
                <button
                  className="cancel-btn"
                  onClick={() => {
                    setProfile(originalProfile); // ✅ revert to original values
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>

                <button className="save-btn" onClick={handleSave} disabled={isUpdating}>
                  {isUpdating ? (
                    <span className="spinner"></span> // We'll style this below
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ===== Right Main Content ===== */}
        <div className="user-main-content">

          <section className="my-profile-section">
            <div
    className="section-header"
    onClick={() => setIsProfileOpen((prev) => !prev)}
    style={{ cursor: "pointer" }}
  >
<h3>My Profile</h3>
<FiChevronDown className={`arrow ${isProfileOpen ? "open" : ""}`} />

  </div>
  

  <div
    className={`collapsible-content ${
      isProfileOpen ? "open" : ""
    }`}
  >

    <div className="profile-layout">
    {/* ===== Left: Profile Image ===== */}
    <div className="profile-left">
      <div className="profile-image-box">
        <img
          src={profile.image || "/default-profile.png"}
          alt="Profile"
          className="profile-img"
        />

        {/* Show camera icon only when editing */}
        {isEditing && (
          <>
            <label htmlFor="profilePicUpload" className="profile-edit-icon">
              <FiCamera />
            </label>
            <input
              type="file"
              id="profilePicUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </>
        )}
      </div>
    </div>

    {/* ===== Right: Profile Info ===== */}
    <div className="profile-right">
      <div className="profile-row">
        <div className="profile-field">
          <label>Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          ) : (
            <div className="readonly-box" title={profile.name}>
              {profile.name.length > 11
                ? `${profile.name.substring(0, 11)}...`
                : profile.name}
            </div>
          )}
        </div>

        <div className="profile-field">
          <label>Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          ) : (
            <div className="readonly-box" title={profile.email}>
              {profile.email.length > 11
                ? `${profile.email.substring(0, 11)}...`
                : profile.email}
            </div>
          )}
        </div>
      </div>

      <div className="profile-row">
        <div className="profile-field">
          <label>LinkedIn</label>
          {isEditing ? (
            <input
              type="text"
              name="linkedIn"
              value={profile.linkedIn}
              onChange={handleChange}
            />
          ) : (
            <div className="readonly-box" title={profile.linkedIn}>
              {profile.linkedIn.length > 11
                ? `${profile.linkedIn.substring(0, 11)}...`
                : profile.linkedIn || "Not provided"}
            </div>
          )}
        </div>

        <div className="profile-field">
          <label>Website</label>
          {isEditing ? (
            <input
              type="text"
              name="website"
              value={profile.website}
              onChange={handleChange}
            />
          ) : (
            <div className="readonly-box" title={profile.website}>
              {profile.website.length > 11
                ? `${profile.website.substring(0, 11)}...`
                : profile.website || "Not provided"}
            </div>
          )}
        </div>
      </div>

      <div className="profile-row">
        <div className="profile-field full-width">
          <label>Bio</label>
          {isEditing ? (
            <textarea
              rows="3"
              name="about"
              value={profile.about}
              onChange={handleChange}
            />
          ) : (            
              <textarea
                rows="3"
                name="about"
                value={profile.about}                
              />
            
          )}
        </div>
      </div>

      <div className="profile-buttons">
        {isEditing ? (
          <>
            <button
              className="cancel-btn"
              onClick={() => {
                setProfile(originalProfile);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
            <button
              className="save-btn"
              onClick={handleSave}
              disabled={isUpdating}
            >
              {isUpdating ? <span className="spinner"></span> : "Save"}
            </button>
          </>
        ) : (
          <button className="edit-btn" onClick={toggleEdit}>
            <FiEdit2 /> Edit Profile
          </button>
        )}
      </div>
    </div>
  </div>

  </div>

  
</section>


          {/* === Recent Achievements === */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>Recent Achievements</h3>
              <button className="more-btn">
                <a href="/user/achievements">More..</a>
              </button>
            </div>

            {loading ? (
              <p>Loading achievements...</p>
            ) : achievements.length === 0 ? (
              <p>No achievements yet 🚀</p>
            ) : (
              <div className="card-row">
                {achievements.map((a) => (
                  <div key={a.id} className="card">
                    {a.fileUrl && (
                      <img
                        src={a.fileUrl}
                        alt="Achievement"
                        className="achievement-img"
                      />
                    )}
                    <div className="card-content">
                      <h4>{a.category || a.type}</h4>
                      {a.participant?.hackathon && (
                        <p>
                          {a.participant.hackathon.name} (
                          {a.participant.hackathon.version})
                        </p>
                      )}
                      {a.internship && (
                        <p>
                          Internship: {a.internship.projectPreference || "N/A"}
                        </p>
                      )}
                      <p>Issued: {new Date(a.issuedAt).toLocaleDateString()}</p>
                      <a
                        href={`/verify/${a.code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify Credential
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* === Recent Purchases (Static Placeholder) === */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>Recent Purchases</h3>
              <button className="more-btn">
                <a href="/user/purchases">More..</a>
              </button>
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
              <h3>Courses / Events You Might Be Interested In</h3>
              <button className="more-btn">
                <a href="/courses">More..</a>
              </button>
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