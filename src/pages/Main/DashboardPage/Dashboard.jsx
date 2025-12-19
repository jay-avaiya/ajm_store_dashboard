import { Pencil } from "lucide-react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import StatCard from "./_components/StatCard";
import NotificationBox from "../../../components/NotificationBox";
import Table from "./_components/Table";

const Dashboard = () => {
  return (
    <div className="flex-1 flex justify-between mt-8">
      {/* right content */}
      <div className="flex-1 w-full max-w-[980px] ">
        {/* stats cards */}
        <StatCard />

        {/* table */}
        <Table />
      </div>

      {/* left content */}
      <div className="flex flex-col px-4 gap-y-4">
        {/* notifications */}
        <NotificationBox />

        {/* pie chart */}
        <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
          <h3 className="text-2xl text-[#5A5A5A]">Sales by categories</h3>
          <div className="w-auto">
            <img src="/pie.png" alt="pie" />
          </div>
        </div>

        {/* bar chart */}
        <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl text-[#5A5A5A]">Revenue</h3>

            <button className="flex items-center gap-x-2 p-3 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
              <span className="text-[10px] text-[#222222]">Monthly</span>
              <MdKeyboardArrowUp size={16} color="1D7BBB" />
            </button>
          </div>
          <div className="w-auto">
            <img src="/bar.png" alt="pie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
