import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Home from "./pages/Home.tsx";
import { useSelector } from "react-redux";
import Logout from "./pages/Logout.tsx";
import { RootState } from './Types/Types.ts';
import CardDetail from './components/CardDetail.tsx';



function App() {
  const token = useSelector((state: RootState) => state.user.token)


  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        {token ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<CardDetail />} /> 
            <Route path="/logout" element={<Logout />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<Navigate to={token ? "/home" : "/login"} />} />

      </Routes>
    </>
  );
}

export default App;
