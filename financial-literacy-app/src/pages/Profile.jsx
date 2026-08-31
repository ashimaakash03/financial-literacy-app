// src/pages/Profile.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import NudgeNotification from "../components/NudgeNotification";

function Profile() {
  const { completedLessons, completedChallenges, badges } = useContext(GlobalContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome back, Student!</p>

      <h3>Progress Overview</h3>
      <ul>
        <li>Lessons Completed: {completedLessons.length}</li>
        <li>Challenges Completed: {completedChallenges.length}</li>
      </ul>

      <h3>Badges Earned</h3>
      {badges.length > 0 ? (
        <ul>
          {badges.map((badge, index) => (
            <li key={index}>🏅 {badge}</li>
          ))}
        </ul>
      ) : (
        <p>No badges yet — keep learning!</p>
      )}

      <NudgeNotification
        message="Stay consistent! Completing more lessons unlocks new badges."
        type="info"
      />
    </div>
  );
}

export default Profile;
