import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { registerUser } from '../services/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please enter all fields');
      return;
    }

    try {
      const userData = { email, password };
      const data = await registerUser(userData);
      console.log('Registration successful:', data);
      setSuccess('Registration successful!');
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
        {success && <Typography color="success">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
