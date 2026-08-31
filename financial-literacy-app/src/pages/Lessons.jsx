// src/pages/Lessons.jsx
import React, { useContext } from "react";
import LessonCard from "../components/LessonCard";
import { GlobalContext } from "../context/GlobalState";

function Lessons() {
  const { markLessonComplete } = useContext(GlobalContext);

  const lessons = [
    { title: "Budgeting Basics", description: "Track expenses and set goals." },
    { title: "Understanding Credit", description: "Learn about credit scores." },
    { title: "Saving Strategies", description: "Explore saving methods." },
  ];

  return (
    <div>
      <h1>Lessons</h1>
      <p>Browse and complete bite-sized financial literacy lessons:</p>

      {lessons.map((lesson, index) => (
        <LessonCard
          key={index}
          title={lesson.title}
          description={lesson.description}
          onComplete={() => markLessonComplete(lesson.title)}
        />
      ))}
    </div>
  );
}

export default Lessons;
