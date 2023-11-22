import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Notes from "./pages/notes/notes";
import Goals from "./pages/goals/goals";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
