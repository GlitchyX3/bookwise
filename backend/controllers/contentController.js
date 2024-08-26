const Content = require('../models/Content');
const { summarizeText, answerQuestion } = require('../services/aiService');

// Add new content
exports.addContent = async (req, res) => {
  const { title, body, tags } = req.body;
  try {
    const newContent = new Content({ title, body, tags });
    await newContent.save();
    res.json(newContent);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Summarize specific content
exports.summarizeContent = async (req, res) => {
  const { contentId } = req.body;
  try {
    const content = await Content.findById(contentId);
    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }
    const summary = await summarizeText(content.body);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Answer a question based on specific content
exports.getAnswer = async (req, res) => {
  const { contentId, question } = req.body;
  try {
    const content = await Content.findById(contentId);
    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }
    const answer = await answerQuestion(question, content.body);
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
