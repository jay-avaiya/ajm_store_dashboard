import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";

const OrderStatus = () => {
  return (
    <div className="w-full max-w-[450px] h-[300px] p-6 bg-white rounded-[30px] shadow-[0_6px_7px_0_rgba(0,0,0,0.25)] space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <PiRecordFill className="size-7 text-[#FF1919]" />
          <span className="text-[16px] font-medium text-[#222222]">
            Order Status
          </span>
        </div>
        <button className="flex items-center gap-x-2 p-3 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
          <span className="text-[10px] text-[#222222]">Monthly</span>
          <MdKeyboardArrowUp size={16} color="1D7BBB" />
        </button>
      </div>

      {/* divider */}
      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div className="w-full h-[70%]">
        <img
          src="/sales_1.png"
          alt="slaes"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default OrderStatus;
