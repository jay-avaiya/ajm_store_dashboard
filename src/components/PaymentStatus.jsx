import React from "react";
import { PiRecordFill } from "react-icons/pi";

const PaymentStatus = () => {
  return (
    <div className="w-[100%] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-x-2">
        <PiRecordFill className="size-7 text-[#FF1919]" />
        <span className="text-xl font-medium text-[#222222]">
          Inventory Insights
        </span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div>
        <img src="/payment_status.png" alt="" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default PaymentStatus;
