import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProSignUp from "./pages/ProSignUp";
import Packages from "./pages/Packages";
import Services from "./pages/Services";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="pro-signup" element={<ProSignUp />} />
          <Route path="packages" element={<Packages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
