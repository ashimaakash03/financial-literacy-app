// src/pages/Challenges.jsx
import React, { useContext } from "react";
import BudgetChallenge from "../components/BudgetChallenge";
import InvestmentSimulator from "../components/InvestmentSimulator";
import { GlobalContext } from "../context/GlobalState";

function Challenges() {
  const { markChallengeComplete } = useContext(GlobalContext);

  const handleBudgetComplete = () => {
    markChallengeComplete("Budget Challenge");
    alert("Budget Challenge marked as complete!");
  };

  const handleInvestmentComplete = () => {
    markChallengeComplete("Investment Simulator");
    alert("Investment Simulator marked as complete!");
  };

  return (
    <div>
      <h1>Challenges</h1>
      <p>Test your financial skills with interactive challenges:</p>

      {/* Budget Challenge */}
      <BudgetChallenge />
      <button onClick={handleBudgetComplete}>Complete Budget Challenge</button>

      {/* Investment Simulator */}
      <InvestmentSimulator />
      <button onClick={handleInvestmentComplete}>Complete Investment Simulator</button>
    </div>
  );
}

export default Challenges;
