import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";
import UserProgressChart from "../../../../components/charts/UserProgressChart";

const CustomerInsights = () => {
  return (
    <div className="w-full h-[350px] p-6 bg-white rounded-[30px] shadow-[0_6px_7px_0_rgba(0,0,0,0.25)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <PiRecordFill className="size-7 text-[#FF1919]" />
          <span className="text-[16px] font-medium text-[#222222]">
            Customer Insights
          </span>
        </div>
        <button className="flex items-center gap-x-2 p-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
          <span className="text-[10px] text-[#222222]">Monthly</span>
          <MdKeyboardArrowUp size={16} color="1D7BBB" />
        </button>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full border border-[#E4E4E4] my-4" />

      {/* CENTER CONTENT */}
      <div className="flex-1 flex items-center justify-center">
        <UserProgressChart />
      </div>
    </div>
  );
};

export default CustomerInsights;
