import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../Types/Types.ts';

const PublicRoute: React.FC = () => {
  const token = useSelector((state: RootState) => state.user.token);
  
  return !token ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
