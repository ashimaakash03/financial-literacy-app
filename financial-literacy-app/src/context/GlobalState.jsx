// src/context/GlobalState.jsx
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [badges, setBadges] = useState([]);

  const markLessonComplete = (lessonTitle) => {
    if (!completedLessons.includes(lessonTitle)) {
      setCompletedLessons([...completedLessons, lessonTitle]);
      if (completedLessons.length + 1 === 3) {
        setBadges([...badges, "Financial Explorer"]);
      }
    }
  };

  const markChallengeComplete = (challengeName) => {
    if (!completedChallenges.includes(challengeName)) {
      setCompletedChallenges([...completedChallenges, challengeName]);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        completedLessons,
        completedChallenges,
        badges,
        markLessonComplete,
        markChallengeComplete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
