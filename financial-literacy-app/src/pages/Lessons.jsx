// src/pages/Lessons.jsx
import React from "react";
import LessonCard from "../components/LessonCard";

function Lessons() {
  const lessons = [
    {
      title: "Budgeting Basics",
      description: "Learn how to track your expenses and set savings goals.",
    },
    {
      title: "Understanding Credit",
      description: "Discover how credit scores work and how to build good credit.",
    },
    {
      title: "Saving Strategies",
      description: "Explore different ways to save money effectively.",
    },
  ];

  const handleComplete = (title) => {
    alert(`Lesson "${title}" marked as complete!`);
  };

  return (
    <div>
      <h1>Lessons</h1>
      <p>Browse and complete bite-sized financial literacy lessons:</p>

      {lessons.map((lesson, index) => (
        <LessonCard
          key={index}
          title={lesson.title}
          description={lesson.description}
          onComplete={() => handleComplete(lesson.title)}
        />
      ))}
    </div>
  );
}

export default Lessons;
