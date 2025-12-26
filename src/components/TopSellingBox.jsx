import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";

const TopSellingBox = () => {
  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <PiRecordFill className="size-5 text-[#FF1919]" />
          <span className="text-xs font-medium text-[#222222]">
            Top-Selling Products
          </span>
        </div>
        <button className="flex items-center gap-x-2 p-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
          <span className="text-[10px] text-[#222222]">Monthly</span>
          <MdKeyboardArrowUp size={16} color="1D7BBB" />
        </button>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div>
        <img src="/sales_5.png" alt="sales" />
      </div>
    </div>
  );
};

export default TopSellingBox;
