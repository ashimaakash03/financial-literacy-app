// src/pages/Lessons.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

function Lessons() {
  const { markLessonComplete } = useContext(GlobalContext);

  const lessons = [
    { title: "Budgeting Basics", description: "Track expenses and set goals." },
    { title: "Understanding Credit", description: "Learn about credit scores." },
    { title: "Saving Strategies", description: "Explore saving methods." },
  ];

  const handleComplete = (title) => {
    markLessonComplete(title);
    alert(`✅ Lesson "${title}" marked as complete!`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Lessons
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Browse and complete bite-sized financial literacy lessons:
      </Typography>

      <Grid container spacing={3}>
        {lessons.map((lesson, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">{lesson.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {lesson.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleComplete(lesson.title)}
                >
                  Mark as Complete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Lessons;
