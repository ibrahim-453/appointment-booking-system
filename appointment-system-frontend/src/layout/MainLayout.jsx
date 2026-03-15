import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <div>
        <main className="flex">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
