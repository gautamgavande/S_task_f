import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LeadList from './components/Leads/LeadList';
import CreateLead from './components/Leads/CreateLead';
import UpdateLead from './components/Leads/UpdateLead';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/leads" element={<PrivateRoute><LeadList /></PrivateRoute>} />
    <Route path="/leads/create" element={<PrivateRoute><CreateLead /></PrivateRoute>} />
    <Route path="/leads/update/:id" element={<PrivateRoute><UpdateLead /></PrivateRoute>} />
  </Routes>
  );
};

export default App;

