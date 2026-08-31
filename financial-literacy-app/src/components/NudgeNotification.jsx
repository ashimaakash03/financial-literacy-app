// src/components/NudgeNotification.jsx
import React from "react";

function NudgeNotification({ message, type = "info" }) {
  const getStyle = () => {
    switch (type) {
      case "positive":
        return { backgroundColor: "#d4edda", color: "#155724", padding: "1rem", margin: "1rem 0", borderRadius: "5px" };
      case "warning":
        return { backgroundColor: "#fff3cd", color: "#856404", padding: "1rem", margin: "1rem 0", borderRadius: "5px" };
      case "info":
      default:
        return { backgroundColor: "#cce5ff", color: "#004085", padding: "1rem", margin: "1rem 0", borderRadius: "5px" };
    }
  };

  return (
    <div style={getStyle()}>
      <strong>Nudge:</strong> {message}
    </div>
  );
}

export default NudgeNotification;
