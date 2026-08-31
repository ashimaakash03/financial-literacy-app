// src/context/GlobalState.jsx
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [badges, setBadges] = useState([]);

  const addBadge = (badgeName) => {
    if (!badges.includes(badgeName)) {
      setBadges([...badges, badgeName]);
    }
  };

  const markLessonComplete = (lessonTitle) => {
    if (!completedLessons.includes(lessonTitle)) {
      const newLessons = [...completedLessons, lessonTitle];
      setCompletedLessons(newLessons);

      // Award badges incrementally
      if (newLessons.length === 1) addBadge("Lesson Starter");
      if (newLessons.length === 2) addBadge("Lesson Explorer");
      if (newLessons.length === 3) addBadge("Financial Explorer");
    }
  };

  const markChallengeComplete = (challengeName) => {
    if (!completedChallenges.includes(challengeName)) {
      const newChallenges = [...completedChallenges, challengeName];
      setCompletedChallenges(newChallenges);

      // Award badges incrementally
      if (newChallenges.length === 1) addBadge("Challenge Beginner");
      if (newChallenges.length === 2) addBadge("Challenge Champion");
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
