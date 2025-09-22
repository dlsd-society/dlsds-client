// pages/admin/IssueBadgesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config/config";
import { useAdminAuth } from "../context/AdminAuthContext";

const IssueBadgesPage = () => {
  const { adminToken } = useAdminAuth();

  const [hackathons, setHackathons] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [fileUrl, setFileUrl] = useState("");
  const [category, setCategory] = useState("PARTICIPANT");
  const [message, setMessage] = useState("");

  // Fetch hackathons when page loads
  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/hackathons`, {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
        setHackathons(res.data);
      } catch (err) {
        console.error("Error fetching hackathons:", err);
      }
    };
    fetchHackathons();
  }, [adminToken]);

  // Select hackathon → fetch participants
  const handleSelectHackathon = async (hackathon) => {
    setSelectedHackathon(hackathon);
    setParticipants([]);
    setSelectedParticipants([]);
    setSelectAll(false);

    try {
      const res = await axios.get(
        `${BASE_URL}/admin/hackathon/${hackathon.id}/participants`,
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      setParticipants(res.data);
    } catch (err) {
      console.error("Error fetching participants:", err);
    }
  };

  // Toggle individual participant selection
  const toggleParticipant = (participantId) => {
    if (selectedParticipants.includes(participantId)) {
      setSelectedParticipants(
        selectedParticipants.filter((id) => id !== participantId)
      );
    } else {
      setSelectedParticipants([...selectedParticipants, participantId]);
    }
  };

  // Toggle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedParticipants([]);
      setSelectAll(false);
    } else {
      setSelectedParticipants(participants.map((p) => p.id));
      setSelectAll(true);
    }
  };

  // Issue badge(s)
  // const handleIssue = async () => {
  //   if (selectedParticipants.length === 0 || !fileUrl) {
  //     setMessage("⚠️ Please select at least one participant and provide a file URL");
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(
  //       `${BASE_URL}/admin/issue-badge`,
  //       {
  //         participantIds: selectedParticipants,
  //         hackathonId: selectedHackathon.id,
  //         category,
  //         fileUrl,
  //       },
  //       { headers: { Authorization: `Bearer ${adminToken}` } }
  //     );

  //     setMessage(res.data.message || "Badges issued successfully ✅");
  //     setFileUrl("");
  //     setSelectedParticipants([]);
  //     setSelectAll(false);
  //   } catch (err) {
  //     console.error("Error issuing badges:", err);
  //     setMessage("❌ Error issuing badges");
  //   }
  // };

  // Issue badge(s)
  const handleIssue = async () => {
    if (selectedParticipants.length === 0 || !fileUrl) {
      setMessage("⚠️ Please select at least one participant and provide a file URL");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/admin/issue-badge`,
        {
          participantIds: selectedParticipants,
          hackathonId: selectedHackathon.id,
          category,
          fileUrl,
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      // If backend returns badges with codes
      if (res.data.badges && Array.isArray(res.data.badges)) {
        const links = res.data.badges.map(
          (b) => `✅ Badge for ${b.participantName}: Verify at ${window.location.origin}/verify/${b.code}`
        );
        setMessage(links);
      } else {
        setMessage([res.data.message || "Badges issued successfully ✅"]);
      }

      setFileUrl("");
      setSelectedParticipants([]);
      setSelectAll(false);
    } catch (err) {
      console.error("Error issuing badges:", err);
      setMessage(["❌ Error issuing badges"]);
    }
  };


  return (
    <div style={{ padding: 20 }}>
      <h2>Issue Badges</h2>

      {/* Hackathon List */}
      <ul>
        {hackathons.map((h) => (
          <li key={h.id}>
            {h.name} ({h.version}){" "}
            <button onClick={() => handleSelectHackathon(h)}>
              Select Hackathon
            </button>
          </li>
        ))}
      </ul>

      {/* Participants Table */}
      {selectedHackathon && participants.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>
            Participants in {selectedHackathon.name} ({selectedHackathon.version}
            )
          </h3>

          <table
            border="1"
            cellPadding="8"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((p) => (
                <tr key={p.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedParticipants.includes(p.id)}
                      onChange={() => toggleParticipant(p.id)}
                    />
                  </td>
                  <td>{p.fullName}</td>
                  <td>{p.email}</td>
                  <td>{p.teamName || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Issue Badge Form */}
      {selectedHackathon && (
        <div style={{ marginTop: 20 }}>
          <h3>Issue Badge</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="PARTICIPANT">Participant</option>
            <option value="WINNER">Winner</option>
            <option value="RUNNER_UP">Runner Up</option>
          </select>
          <input
            type="text"
            placeholder="Enter badge file URL"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
          />
          <button onClick={handleIssue}>Issue Badge(s)</button>
        </div>
      )}

      {/* {message && <p style={{ marginTop: 20 }}>{message}</p>} */}
      {message && message.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h4>Result:</h4>
          <ul>
            {message.map((m, idx) => (
              <li key={idx}>
                <a href={m.split("Verify at ")[1]} target="_blank" rel="noopener noreferrer">
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default IssueBadgesPage;
