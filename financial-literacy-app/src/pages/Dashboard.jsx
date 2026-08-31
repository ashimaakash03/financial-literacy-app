// src/pages/Dashboard.jsx
import React from "react";
import LessonCard from "../components/LessonCard";
import BudgetChallenge from "../components/BudgetChallenge";
import InvestmentSimulator from "../components/InvestmentSimulator";
import NudgeNotification from "../components/NudgeNotification";

function Dashboard() {
  const handleComplete = () => {
    alert("Lesson marked as complete!");
  };

  return (
    <div>
      <h1>Financial Literacy Nudge Platform</h1>
      <p>Welcome, student! This is your dashboard.</p>

      <LessonCard
        title="Budgeting Basics"
        description="Learn how to track your expenses and set savings goals."
        onComplete={handleComplete}
      />

      <BudgetChallenge />
      <InvestmentSimulator/>
      <NudgeNotification
        message="You saved 20% of your income last month — great job!"
        type="positive"
      />

      <NudgeNotification
        message="Your entertainment spending is above 30% — consider reducing it."
        type="warning"
      />
      <NudgeNotification
        message="Remember to review your budget weekly to stay on track."
        type="info"
      />
    </div>
  );
}

export default Dashboard;
