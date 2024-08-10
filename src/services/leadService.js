import axios from 'axios';
import authHeader from '../utils/authHeader';

const API_URL = 'http://localhost:5000/api/leads';

const getLeads = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getLead = (id) => {
  return axios.get(`${API_URL}/${id}`, { headers: authHeader() });
};

const createLead = (leadData) => {
  return axios.post(API_URL, leadData, { headers: authHeader() });
};

const updateLead = (id, leadData) => {
  return axios.put(`${API_URL}/${id}`, leadData, { headers: authHeader() });
};

const deleteLead = (id) => {
  return axios.delete(`${API_URL}/${id}`, { headers: authHeader() });
};

export default { getLeads, getLead, createLead, updateLead, deleteLead };
