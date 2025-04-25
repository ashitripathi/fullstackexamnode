import React, { useState, useEffect } from "react";

function ProfileForm() {
  const [form, setForm] = useState({ bio: "", skills: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/profiles", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.bio) {
          setForm({ bio: data.bio, skills: data.skills.join(", ") });
        }
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(form),
    });
    alert("Profile saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Your Profile</h2>
      <textarea
        name="bio"
        placeholder="Bio"
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
      ></textarea>
      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={form.skills}
        onChange={(e) => setForm({ ...form, skills: e.target.value })}
      />
      <button type="submit">Save Profile</button>
    </form>
  );
}

export default ProfileForm;
