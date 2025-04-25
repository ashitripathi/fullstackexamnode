import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import ProfileDetail from "./components/ProfileDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/profiles/:id" element={<ProfileDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
