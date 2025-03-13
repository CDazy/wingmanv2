import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;