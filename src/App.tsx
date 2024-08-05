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

        <Route index element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        {token && <Route path="/home" element={<Home />} />}
        {token && <Route path="/home/:id" element={<CardDetail />} />}
        {!token && <Route path="/login" element={<Login />} />}
        {token && <Route path="/logout" element={<Logout />} />}
        {!token && <Route path="/signup" element={<SignUp />} />}

        <Route path="/home" element={!token && <Navigate to="/login" />} />
        <Route path="/home/:id" element={!token && <Navigate to="/login" />} />
        <Route path="/logout" element={!token && <Navigate to="/login" />} />
        <Route path="/login" element={token && <Navigate to="/home" />} />
        <Route path="/signup" element={token && <Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
