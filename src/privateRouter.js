import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.authenticate); // Access authentication state from Redux

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
