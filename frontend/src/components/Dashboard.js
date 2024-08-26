// src/components/Dashboard.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome to the Dashboard</Typography>
      <Typography>This is a protected route accessible only after login.</Typography>
    </Container>
  );
};

export default Dashboard;
