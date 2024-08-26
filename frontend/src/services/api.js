import axios from 'axios';

// Replace with your production backend URL
const API_URL = 'https://bookwise-46ay.onrender.com/api';

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('API Registration Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Registration failed' };
  }
};

// Login a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error('API Login Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Login failed' };
  }
};

// Add content
export const addContent = async (contentData, token) => {
  try {
    const response = await axios.post(`${API_URL}/content/add`, contentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('API Add Content Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Adding content failed' };
  }
};

// Get content
export const getContent = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/content`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('API Get Content Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Fetching content failed' };
  }
};

// Summarize content
export const summarizeContent = async (contentId, token) => {
  try {
    const response = await axios.post(`${API_URL}/content/summarize`, { contentId }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('API Summarize Content Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Summarizing content failed' };
  }
};

// Get answer to a question
export const getAnswer = async (contentId, question, token) => {
  try {
    const response = await axios.post(`${API_URL}/content/qa`, { contentId, question }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('API Get Answer Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Getting answer failed' };
  }
};
