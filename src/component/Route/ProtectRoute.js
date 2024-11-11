import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
    // If the user is not authenticated, redirect to the login page
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
