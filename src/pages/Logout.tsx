import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout: React.FC = () => {

  return (
    <Navigate to="/login" />
  )
}

export default Logout
