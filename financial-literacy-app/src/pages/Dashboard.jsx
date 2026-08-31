// src/pages/Dashboard.jsx
import React from "react";
import LessonCard from "../components/LessonCard";
import BudgetChallenge from "../components/BudgetChallenge";

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
    </div>
  );
}

export default Dashboard;
