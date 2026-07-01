import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import Projects from "@/pages/Projects/Projects";
import Programs from "@/pages/Programs/Programs";
import Team from "@/pages/Team/Team";
import Channels from "@/pages/Channels/Channels";
import Collection from "@/pages/Collection/Collection";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
