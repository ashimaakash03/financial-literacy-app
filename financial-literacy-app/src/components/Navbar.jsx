// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#004085",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Dashboard</Link>
      <Link to="/lessons" style={linkStyle}>Lessons</Link>
      <Link to="/challenges" style={linkStyle}>Challenges</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
    </nav>
  );
}

export default Navbar;
