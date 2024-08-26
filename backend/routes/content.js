const express = require('express');
const { addContent, getAllContent, summarizeContent, getAnswer } = require('../controllers/contentController');
const auth = require('../middleware/auth');
const router = express.Router();

// Route to add new content
router.post('/add', auth, addContent);

// Route to get all content
router.get('/', auth, getAllContent);

// Route to summarize specific content
router.post('/summarize', auth, summarizeContent);

// Route to get an answer to a question based on specific content
router.post('/qa', auth, getAnswer);

module.exports = router;
