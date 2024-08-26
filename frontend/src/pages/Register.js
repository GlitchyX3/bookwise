import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { registerUser } from '../services/api'; // Ensure this matches the export name in your API service

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = { email, password };
      const data = await registerUser(userData); // Ensure this matches the function name in your API service
      console.log('Registration successful:', data);
      // Redirect or update UI after successful registration if needed
    } catch (error) {
      setError(error.msg || 'Registration failed');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
