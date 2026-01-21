import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSlidersHorizontalLight } from "react-icons/pi";

const FilterBox = () => {
  return (
    <div className="w-[100%] bg-white rounded-3xl px-5 py-4 space-y-2 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-x-2">
        <PiSlidersHorizontalLight className="size-8 text-[#1D7BBB]" />
        <span className="text-2xl font-medium text-[#222222]">Filters</span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]"></div>

      <div className="w-full bg-[#1D7BBB] border border-transparent flex items-center justify-between px-6 py-3 rounded-full gap-x-3 text-white">
        <span>Category</span>
        <IoMdArrowDropdown size={20} />
      </div>

      <div className="w-full bg-white border border-[#959595] flex items-center justify-between px-6 py-3 rounded-full gap-x-3 text-[#959595]">
        <span>Status</span>
        <IoMdArrowDropdown size={20} />
      </div>

      <div className="w-full bg-white border border-[#959595] flex items-center justify-between px-6 py-3 rounded-full gap-x-3 text-[#959595]">
        <span>Date</span>
        <IoMdArrowDropdown size={20} />
      </div>
    </div>
  );
};

export default FilterBox;
