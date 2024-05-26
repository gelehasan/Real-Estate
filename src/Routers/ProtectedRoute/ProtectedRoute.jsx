import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [loading, setLoading] = useState(true);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      const timer = setTimeout(() => {
        setShouldNavigate(true);
      }, 1000);  

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (shouldNavigate) {
    return <Navigate to="/admin" replace />;
  }

  if (loading) {
    return <div>Loading...</div>;  
  }

  return element;
};

export default ProtectedRoute;
    