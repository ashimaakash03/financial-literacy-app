// src/pages/Challenges.jsx
import React from "react";
import BudgetChallenge from "../components/BudgetChallenge";
import InvestmentSimulator from "../components/InvestmentSimulator";

function Challenges() {
  return (
    <div>
      <h1>Challenges</h1>
      <p>Test your financial skills with interactive challenges:</p>

      <BudgetChallenge />
      <InvestmentSimulator />
    </div>
  );
}

export default Challenges;
