import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Navigate to="/admin" replace />;
  }

  return element;
};

export default ProtectedRoute;
