import React from 'react';
import useAuth from '../firebase/useAuth';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const {currentUser} = useAuth()
  return (
   currentUser ? children : <Navigate to="/login"/>
  )
}

export default ProtectedRoute