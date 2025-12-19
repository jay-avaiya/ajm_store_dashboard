import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./main_component/Sidebar";
import Topbar from "./main_component/Topbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen font-poppins">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
