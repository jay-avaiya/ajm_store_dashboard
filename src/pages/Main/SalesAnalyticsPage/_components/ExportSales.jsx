import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";
import RadialBarchart from "../../../../components/charts/RadialBarchart";
import UserStatusChart from "../../../../components/charts/UserStatusChart";
import Linechart from "../../../../components/charts/Linechart";

const ExportSales = () => {
  return (
    <div className="w-full max-w-[100%] h-[350px] p-6 bg-white rounded-[30px] shadow-[0_6px_7px_0_rgba(0,0,0,0.25)] space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <PiRecordFill className="size-7 text-[#FF1919]" />
          <span className="text-[16px] font-medium text-[#222222]">
            Sales Trend
          </span>
        </div>
        <button className="flex items-center gap-x-2 p-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
          <span className="text-[10px] text-[#222222]">Monthly</span>
          <MdKeyboardArrowUp size={16} color="1D7BBB" />
        </button>
      </div>

      {/* divider */}
      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div className="w-[300px] mx-auto">
        <Linechart />
      </div>
    </div>
  );
};

export default ExportSales;
