// pages/admin/IssueBadgesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config/config";
import { useAdminAuth } from "../context/AdminAuthContext";

const badgeUrls = {
  PARTICIPANT:
    "https://res.cloudinary.com/ddrpu3dfs/image/upload/v1758222410/participation-badge-sample-02_fuuv2g.png",
  WINNER:
    "https://res.cloudinary.com/ddrpu3dfs/image/upload/v1758222181/winner-badge-sample-01_ypdpvd.avif",
  RUNNER_UP:
    "https://res.cloudinary.com/ddrpu3dfs/image/upload/v1758222158/participant-badge-sample-01_thfbfi.avif",
};

const IssueBadgesPage = () => {
  const { adminToken } = useAdminAuth();

  const [hackathons, setHackathons] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [category, setCategory] = useState("PARTICIPANT");
  const [fileUrl, setFileUrl] = useState(badgeUrls["PARTICIPANT"]);
  const [message, setMessage] = useState("");

  // number of participants to show initially
  const [displayCount, setDisplayCount] = useState(15);

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
    setDisplayCount(15); // reset load more

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
      {/* <ul>
        {hackathons.map((h) => (
          <li key={h.id}>
            {h.name} ({h.version}){" "}
            <button onClick={() => handleSelectHackathon(h)}>
              Select Hackathon
            </button>
          </li>
        ))}
      </ul> */}

      {/* Hackathon Select Dropdown */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="hackathonSelect">Select Hackathon: </label>
        <select
          id="hackathonSelect"
          value={selectedHackathon?.id || ""}
          onChange={(e) => {
            const hackathon = hackathons.find((h) => h.id === parseInt(e.target.value));
            if (hackathon) handleSelectHackathon(hackathon);
          }}
        >
          <option value="" disabled>
            -- Select a Hackathon --
          </option>
          {hackathons.map((h) => (
            <option key={h.id} value={h.id}>
              {h.name} ({h.version})
            </option>
          ))}
        </select>
      </div>


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
              {participants.slice(0, displayCount).map((p) => {
                const alreadyIssued = p.credentials.some(c => c.type === "BADGE"); 

                return (
                  <tr key={p.id}>
                    <td>
                      <input
                        type="checkbox"
                        disabled={alreadyIssued}
                        checked={selectedParticipants.includes(p.id)}
                        onChange={() => toggleParticipant(p.id)}
                      />
                    </td>
                    <td>{p.fullName}</td>
                    <td>{p.email}</td>
                    <td>{p.teamName || "-"}</td>
                  </tr>
                )                
              })}
            </tbody>
          </table>

          {/* Load More Button */}
          {displayCount < participants.length && (
            <button
              style={{ marginTop: 10 }}
              onClick={() => setDisplayCount((prev) => prev + 15)}
            >
              Load More
            </button>
          )}
        </div>
      )}

      {/* Issue Badge Form */}
      {selectedHackathon && (
        <div style={{ marginTop: 20 }}>
          <h3>Issue Badge</h3>
          <select
            value={category}
            onChange={(e) => {
              const newCategory = e.target.value;
              setCategory(newCategory);
              setFileUrl(badgeUrls[newCategory]); // auto-assign URL
            }}
          >
            <option value="PARTICIPANT">Participant</option>
            <option value="WINNER">Winner</option>
            <option value="RUNNER_UP">Runner Up</option>
          </select>
          
          {/* Show preview of the hardcoded badge image */}
          <div style={{ marginTop: 10 }}>
            <img src={fileUrl} alt="Badge Preview" width="200" />
          </div>

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
