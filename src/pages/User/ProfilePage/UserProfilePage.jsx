// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useUserAuth } from "../../../context/UserAuthContext";
// import BASE_URL from "../../../config/config";
// import UserNavbar from "../../../components/Navbar/UserNavbar";

// const UserProfilePage = () => {
//   const { userToken } = useUserAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     bio: "",
//     profilePic: "",
//   });

//   useEffect(() => {
//     if (userToken) {
//       axios
//         .get(`${BASE_URL}/user/profile`, {
//           headers: { Authorization: `Bearer ${userToken}` },
//         })
//         .then((res) => {
//           const userData = res.data.user;
//           setFormData({
//             name: userData.name || "",
//             email: userData.email || "",
//             bio: userData.bio || "",
//             profilePic: userData.profilePic || "",
//           });
//         })
//         .catch((err) => console.error("Profile fetch error:", err));
//     }
//   }, [userToken]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`${BASE_URL}/user/profile`, formData, {
//         headers: { Authorization: `Bearer ${userToken}` },
//       })
//       .then(() => alert("Profile updated successfully!"))
//       .catch((err) => console.error("Profile update error:", err));
//   };

//   return (
//     <div>
//       <UserNavbar />
//       <div style={{ padding: "20px" }}>
//         <h2>My Profile</h2>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             maxWidth: "400px",
//           }}
//         >
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//           <input type="email" name="email" value={formData.email} disabled />
//           <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
//           <input
//             type="text"
//             name="profilePic"
//             value={formData.profilePic}
//             onChange={handleChange}
//             placeholder="Profile Pic URL"
//           />
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;



// UserProfilePage.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useUserAuth } from "../../../context/UserAuthContext";
import BASE_URL from "../../../config/config";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import avatar from '../../../assets/user_avatar.jpg';
import FooterSection from "../../../components/FooterSection/FooterSection";

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #4cafef;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #379ad5;
  }
`;

const ProfilePicWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 15px auto;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4cafef;
`;

const EditIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #9d9a9aff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid white; // optional, for a small white border
  transition: 0.2s;

  &:hover {
    background: #666;
  }
`;

const EditIcon = styled(FaPen)`
  color: white;
  font-size: 16px;
`;

const UserProfilePage = () => {
  const { userToken } = useUserAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    profilePic: "",
    linkedin: "",
    otherLink: "",
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (userToken) {
      axios
        .get(`${BASE_URL}/user/profile`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          const userData = res.data.user;
          setFormData({
            name: userData.name || "",
            email: userData.email || "",
            bio: userData.bio || "",
            profilePic: userData.profilePic || "",
            linkedin: userData.linkedin || "",
            otherLink: userData.otherLink || "",
          });
        })
        .catch((err) => console.error("Profile fetch error:", err));
    }
  }, [userToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/user/profile`, formData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(() => alert("Profile updated successfully!"))
      .catch((err) => console.error("Profile update error:", err));
  };

  return (
    <div>
      <UserNavbar />
      <Container>
        <Title>My Profile</Title>
        <ProfilePicWrapper>
          <ProfilePic
            src={formData.profilePic || avatar}
            alt="Profile"
          />
          <EditIconWrapper onClick={() => fileInputRef.current.click()}>
            <EditIcon />
          </EditIconWrapper>
        </ProfilePicWrapper>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <Input type="email" name="email" value={formData.email} disabled />
          <TextArea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
            rows={4}
          />
          <Input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
          />
          <Input
            type="url"
            name="otherLink"
            value={formData.otherLink}
            onChange={handleChange}
            placeholder="Other Link"
          />
          <Button type="submit">Save</Button>
        </Form>
      </Container>

      <FooterSection />
    </div>
  );
};

export default UserProfilePage;
