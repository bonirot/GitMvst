import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

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
