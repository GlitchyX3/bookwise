import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('API Registration Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Registration failed' };
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error('API Login Error:', error.response ? error.response.data : error.message);
    throw error.response?.data || { msg: 'Login failed' };
  }
};
