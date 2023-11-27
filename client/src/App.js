import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Notes from "./pages/notes/notes";
import Dsa from "./pages/notes/dsa";
import Frontend from "./pages/notes/frontend";
import Backend from "./pages/notes/backend";
import Python from "./pages/notes/notes";
import Goals from "./pages/goals/goals";
import Profile from "./pages/profile/profile";
import Askavet from "./pages/profile/askAvet";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/dsa" element={<Dsa />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/python" element={<Python />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/askAvet" element={<Askavet />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
