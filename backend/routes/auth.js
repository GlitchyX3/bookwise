// auth.js
const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', registerUser);

// Export the router
module.exports = router;
