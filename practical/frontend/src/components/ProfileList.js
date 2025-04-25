import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [skill, setSkill] = useState("");

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/profiles" + (skill ? `?skill=${skill}` : "")
    )
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, [skill]);

  return (
    <div>
      <h2>All Profiles</h2>
      <input
        placeholder="Filter by skill..."
        onChange={(e) => setSkill(e.target.value)}
      />
      <ul>
        {profiles.map((p) => (
          <li key={p._id}>
            <Link to={`/profiles/${p._id}`}>
              <strong>{p.user.username}</strong> — {p.bio}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
