import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Revenue = () => {
  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-[#5A5A5A]">Campaign Performance</h3>

        <button className="flex items-center gap-x-2 p-3 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
          <span className="text-[10px] text-[#222222]">Monthly</span>
          <MdKeyboardArrowUp size={16} color="1D7BBB" />
        </button>
      </div>
      <div className="w-auto">
        <img src="/bar.png" alt="pie" />
      </div>
    </div>
  );
};

export default Revenue;
