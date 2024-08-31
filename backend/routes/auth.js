const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registration Route
router.post('/register', async (req, res) => {
  console.log('Received registration request:', req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Creating new user:', email);
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    console.log('User registered successfully:', email);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  console.log('Received login request:', req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log('User not found:', email);
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials for user:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful for user:', email);
    res.json({ token, userId: user._id });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

module.exports = router;
