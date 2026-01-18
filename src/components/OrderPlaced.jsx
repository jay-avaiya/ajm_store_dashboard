import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";

const OrderPlaced = () => {
  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <PiRecordFill className="size-5 text-[#FF1919]" />
          <h3 className="text-xl text-[#5A5A5A]">Order Placed</h3>
        </div>

        <button className="flex items-center gap-x-2 py-2 px-3 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
          <span className="text-[10px] text-[#222222]">Monthly</span>
          <MdKeyboardArrowUp size={16} color="1D7BBB" />
        </button>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]"></div>

      <div className="w-auto">
        <img src="/orderPlaced.png" alt="orderPlaced" className="" />
      </div>
    </div>
  );
};

export default OrderPlaced;
