// src/components/InvestmentSimulator.jsx
import React, { useState } from "react";

function InvestmentSimulator() {
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const simulateInvestment = () => {
    if (choice === "safe") {
      setResult("✅ Your savings grew steadily by 5% this year.");
    } else if (choice === "risky") {
      const outcome = Math.random() > 0.5
        ? "🎉 Jackpot! Your investment doubled."
        : "⚠️ Oops! You lost half your investment.";
      setResult(outcome);
    } else {
      setResult("Please select an option first.");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h3>Investment Simulator</h3>
      <p>Choose where to invest your money:</p>

      <label>
        <input
          type="radio"
          name="investment"
          value="safe"
          onChange={() => setChoice("safe")}
        />
        Safe Option (Low risk, steady growth)
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="investment"
          value="risky"
          onChange={() => setChoice("risky")}
        />
        Risky Option (High risk, high reward)
      </label>
      <br />

      <button onClick={simulateInvestment}>Simulate Outcome</button>

      {result && <p><strong>Result:</strong> {result}</p>}
    </div>
  );
}

export default InvestmentSimulator;