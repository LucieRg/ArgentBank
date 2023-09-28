import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../redux/actions/authActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Vérifiez s'il y a un token JWT dans le localStorage
    const token = localStorage.getItem("token");

    // Si un token existe, dispatchez une action pour connecter l'utilisateur automatiquement
    if (token) {
      dispatch(loginUserAsync({ token }));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
