import React from 'react';
import { Navigate } from 'react-router-dom';
// import authService from '../services/authService';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
