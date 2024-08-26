const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.summarizeText = async (text) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'text-davinci-003',
      messages: [{ role: 'user', content: `Summarize the following text:\n\n${text}` }],
      max_tokens: 150,
    });
    return response.choices[0].message.content.trim();
  } catch (err) {
    throw new Error('Error summarizing text: ' + err.message);
  }
};

exports.answerQuestion = async (question, text) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'text-davinci-003',
      messages: [
        { role: 'user', content: `Answer the question based on the following text:\n\n${text}\n\nQuestion: ${question}` }
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content.trim();
  } catch (err) {
    throw new Error('Error answering question: ' + err.message);
  }
};
