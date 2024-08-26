const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register); // Route for registration
router.post('/login', login); // Route for login

module.exports = router;
