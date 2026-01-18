import React from "react";
import { PiRecordFill } from "react-icons/pi";

const LiveOverview = ({ src }) => {
  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-x-3">
        <PiRecordFill className="size-5 text-[#FF1919]" />
        <span className="text-2xl font-medium text-[#222222]">
          Live Overview
        </span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div>
        <img src={src || "/live.png"} alt="user-status" />
      </div>
    </div>
  );
};

export default LiveOverview;
