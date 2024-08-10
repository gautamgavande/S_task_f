import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export default { login, register };

