import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('API Registration Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Registration failed' };
  }
};

// Login a user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('API Login Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Login failed' };
  }
};
