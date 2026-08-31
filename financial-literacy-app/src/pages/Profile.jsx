// src/pages/Profile.jsx
import React from "react";
import NudgeNotification from "../components/NudgeNotification";

function Profile() {
  // Mock data for now
  const user = {
    name: "Student User",
    lessonsCompleted: 2,
    challengesCompleted: 1,
    badges: ["Budget Beginner", "Savings Starter"],
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome back, {user.name}!</p>

      <h3>Progress Overview</h3>
      <ul>
        <li>Lessons Completed: {user.lessonsCompleted}</li>
        <li>Challenges Completed: {user.challengesCompleted}</li>
      </ul>

      <h3>Badges Earned</h3>
      <ul>
        {user.badges.map((badge, index) => (
          <li key={index}>🏅 {badge}</li>
        ))}
      </ul>

      <NudgeNotification
        message="Keep going! Complete one more lesson to unlock the 'Financial Explorer' badge."
        type="info"
      />
    </div>
  );
}

export default Profile;
