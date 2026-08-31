// src/components/Footer.jsx
import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#004085",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Digital Financial Literacy Nudge Platform</p>
      <p>Helping students build smarter money habits 💡</p>
    </footer>
  );
}

export default Footer;
