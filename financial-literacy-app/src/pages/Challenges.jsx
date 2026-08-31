// src/pages/Challenges.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Box,
} from "@mui/material";
import BudgetChallenge from "../components/BudgetChallenge";
import InvestmentSimulator from "../components/InvestmentSimulator";

function Challenges() {
  const { markChallengeComplete } = useContext(GlobalContext);

  const challenges = [
    {
      title: "Budget Challenge",
      description: "Test your budgeting skills with real scenarios.",
      component: <BudgetChallenge />,
    },
    {
      title: "Investment Simulator",
      description: "Simulate investments and learn risk vs reward.",
      component: <InvestmentSimulator />,
    },
  ];

  const handleComplete = (name) => {
    markChallengeComplete(name);
    alert(`✅ Challenge "${name}" marked as complete!`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Challenges
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Test your financial skills with interactive challenges:
      </Typography>

      <Grid container spacing={3}>
        {challenges.map((challenge, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Card elevation={4} sx={{ height: "100%" }}>
  <CardContent
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      pb:8
    }}
  >
    {/* Top content */}
    <Box>
      <Typography variant="h6" gutterBottom>
        {challenge.title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mb: 2 }}
      >
        {challenge.description}
      </Typography>

      {/* Render component if available */}
      {challenge.component && (
        <Box sx={{ mb: 2 }}>{challenge.component}</Box>
      )}
    </Box>

    {/* Button inside card, lifted upwards */}
    <Box
      sx={{
        mt: "auto",
        mb: 3, // increased margin so button sits comfortably above bottom
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleComplete(challenge.title)}
      >
        Complete {challenge.title}
      </Button>
    </Box>
  </CardContent>
</Card>


          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Challenges;
