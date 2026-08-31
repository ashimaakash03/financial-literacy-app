// src/components/LessonCard.jsx
import React from "react";

function LessonCard({ title, description, onComplete }) {
  return (
    <div className="lesson-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onComplete}>Mark as Complete</button>
    </div>
  );
}

export default LessonCard;
