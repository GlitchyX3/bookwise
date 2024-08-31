import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { registerUser } from '../services/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    console.log('Registration attempt with:', { username, email });
    if (!username || !email || !password) {
      setError('Please enter all fields');
      return;
    }
    try {
      const userData = { username, email, password };
      console.log('Sending registration request with data:', userData);
      const response = await registerUser(userData);
      console.log('Registration response:', response);
      setSuccess('Registration successful!');
      // You can handle further actions here, like redirecting to the login page
    } catch (error) {
      console.error('Registration error:', error);
      console.error('Error details:', error.response?.data);
      setError(error.response?.data?.message || error.message || 'Registration failed');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        {success && <Typography color="primary">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
