// src/pages/Profile.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import NudgeNotification from "../components/NudgeNotification";

function Profile() {
  const { completedLessons, completedChallenges, badges } = useContext(GlobalContext);

  const totalLessons = 3;
  const totalChallenges = 2;

  const lessonProgress = (completedLessons.length / totalLessons) * 100;
  const challengeProgress = (completedChallenges.length / totalChallenges) * 100;

  const progressBarStyle = {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    marginBottom: "1rem",
    overflow: "hidden",
    height: "20px",
  };

  const fillStyle = (percent, color) => ({
    width: `${percent}%`,
    backgroundColor: color,
    height: "100%",
    transition: "width 0.5s ease",
  });

  const badgeGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  };

  const badgeCardStyle = (locked) => ({
    backgroundColor: locked ? "#f0f0f0" : "#f8f9fa",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    opacity: locked ? 0.5 : 1,
  });

  // Define all possible badges
  const allBadges = [
    "Lesson Starter",
    "Lesson Explorer",
    "Financial Explorer",
    "Challenge Beginner",
    "Challenge Champion",
  ];

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome back, Student!</p>

      <h3>Progress Overview</h3>
      <ul>
        <li>Lessons Completed: {completedLessons.length} / {totalLessons}</li>
        <div style={progressBarStyle}>
          <div style={fillStyle(lessonProgress, "#4caf50")}></div>
        </div>

        <li>Challenges Completed: {completedChallenges.length} / {totalChallenges}</li>
        <div style={progressBarStyle}>
          <div style={fillStyle(challengeProgress, "#2196f3")}></div>
        </div>
      </ul>

      <h3>Badges Showcase</h3>
      <div style={badgeGridStyle}>
        {allBadges.map((badge, index) => {
          const earned = badges.includes(badge);
          return (
            <div key={index} style={badgeCardStyle(!earned)}>
              <span style={{ fontSize: "2rem" }}>{earned ? "🏅" : "🔒"}</span>
              <p><strong>{badge}</strong></p>
              {!earned && <p style={{ fontSize: "0.8rem", color: "#666" }}>Locked</p>}
            </div>
          );
        })}
      </div>

      <NudgeNotification
        message="Stay consistent! Completing more lessons unlocks new badges."
        type="info"
      />
    </div>
  );
}

export default Profile;
