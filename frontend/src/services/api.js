import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const registerUser = async (userData) => {
  console.log('Attempting to register user with API URL:', apiUrl);
  try {
    console.log('Registration request data:', userData);
    const response = await axios.post(`${apiUrl}/auth/register`, userData);
    console.log('Registration response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Registration Error:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error.response?.data || { message: 'Registration failed' };
  }
};

// Assuming the loginUser function is similar in structure
export const loginUser = async (loginData) => {
  console.log('Attempting to log in user with API URL:', apiUrl);
  try {
    console.log('Login request data:', loginData);
    const response = await axios.post(`${apiUrl}/auth/login`, loginData);
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Login Error:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error.response?.data || { message: 'Login failed' };
  }
};
