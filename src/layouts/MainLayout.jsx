import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./main_component/Sidebar";
import Topbar from "./main_component/Topbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen font-poppins overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
