import React from "react";
import { GoBellFill } from "react-icons/go";

const NotificationBox = () => {
  return (
    <div className="w-[100%] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-x-2">
        <GoBellFill className="size-8 text-[#F39D08]" />
        <span className="text-2xl font-medium text-[#222222]">
          Notifications
        </span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]"></div>

      {/* Notificationss  */}
      <div className="relative w-full bg-[#F7F7F7] flex items-center px-3 py-2 rounded-2xl gap-x-3">
        <GoBellFill size={20} />
        <span className="text-[16px] text-[#696969]">One new Order</span>
        <span className="absolute  right-2 bottom-1 text-[10px] text-[#8E8E8E]">
          50 min ago
        </span>
      </div>
      <div className="relative w-full bg-[#F7F7F7] flex items-center px-3 py-2 rounded-2xl gap-x-3">
        <GoBellFill size={20} />
        <span className="text-[16px] text-[#696969]">We got one return</span>
        <span className="absolute  right-2 bottom-1 text-[10px] text-[#8E8E8E]">
          1hr ago
        </span>
      </div>
      <div className="relative w-full bg-[#F7F7F7] flex items-center px-3 py-2 rounded-2xl gap-x-3">
        <GoBellFill size={20} />
        <span className="text-[16px] text-[#696969]">Unknown Messages</span>
        <span className="absolute  right-2 bottom-1 text-[10px] text-[#8E8E8E]">
          2hr ago
        </span>
      </div>
    </div>
  );
};

export default NotificationBox;
