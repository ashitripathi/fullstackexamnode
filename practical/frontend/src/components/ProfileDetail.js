import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/profiles/${id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>{profile.user.username}</h2>
      <p>{profile.bio}</p>
      <p>
        <b>Skills:</b> {profile.skills.join(", ")}
      </p>
    </div>
  );
}

export default ProfileDetail;
