import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<Profile />} />
      <Route path="*" element={<Navigate to="/welcome" />} />
    </Routes>
  );
}

export default AppRoutes;
