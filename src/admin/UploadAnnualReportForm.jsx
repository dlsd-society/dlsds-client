// /admin/UploadActivityForm.jsx
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config/config";

export default function UploadAnnualReportForm() {
  const [form, setForm] = useState({
    title: "",
    session: "",
    startDate: "",
    endDate: "",
    file: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let key in form) formData.append(key, form[key]);
      formData.append("category", "annual");

      const token = localStorage.getItem("adminToken");
      const res = await axios.post(`${BASE_URL}/reports/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Uploaded!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="session" placeholder="Session" onChange={handleChange} required />
      <input type="date" name="startDate" onChange={handleChange} required />
      <input type="date" name="endDate" onChange={handleChange} required />
      <input type="file" onChange={handleFile} required />
      <button type="submit">Upload Activity</button>
    </form>
  );
}
