// src/components/BudgetChallenge.jsx
import React, { useState } from "react";

function BudgetChallenge() {
  const [budget, setBudget] = useState({
    food: 0,
    rent: 0,
    entertainment: 0,
  });

  const total = budget.food + budget.rent + budget.entertainment;

  const handleChange = (category, value) => {
    setBudget({ ...budget, [category]: Number(value) });
  };

  const getNudge = () => {
    if (budget.food > total * 0.4) {
      return "⚠️ You’re spending too much on food. Try setting a weekly cap!";
    }
    if (budget.entertainment > total * 0.3) {
      return "⚠️ Entertainment is eating into your savings. Consider reducing it.";
    }
    if (budget.rent < total * 0.3) {
      return "⚠️ Rent seems unusually low — did you account for it correctly?";
    }
    return "✅ Good balance! Keep it up.";
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h3>Budget Challenge</h3>
      <p>Allocate your monthly budget:</p>

      <label>
        Food: 
        <input
          type="number"
          value={budget.food}
          onChange={(e) => handleChange("food", e.target.value)}
        />
      </label>
      <br />

      <label>
        Rent: 
        <input
          type="number"
          value={budget.rent}
          onChange={(e) => handleChange("rent", e.target.value)}
        />
      </label>
      <br />

      <label>
        Entertainment: 
        <input
          type="number"
          value={budget.entertainment}
          onChange={(e) => handleChange("entertainment", e.target.value)}
        />
      </label>
      <br />

      <p><strong>Total:</strong> {total}</p>
      <p><strong>Nudge:</strong> {getNudge()}</p>
    </div>
  );
}

export default BudgetChallenge;
