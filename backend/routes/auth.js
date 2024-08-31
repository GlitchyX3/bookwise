const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', registerUser);

// Other routes (login, etc.)

module.exports = router;
