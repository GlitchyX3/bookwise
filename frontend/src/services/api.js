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

// Add other API functions (e.g., addContent, getContent, etc.) here as needed
