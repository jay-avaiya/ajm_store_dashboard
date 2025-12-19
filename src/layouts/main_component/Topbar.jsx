import React from "react";
import { BsBell } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between h-[120px] border-b border-[#8E8E8E] p-5">
      <h1 className="text-[#222222] text-[40px] font-medium">
        Welcome back, Vinit
      </h1>

      <div className="flex items-center justify-center gap-x-10">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none py-3 px-7 rounded-full"
          />
          <FaMagnifyingGlass className="size-6 absolute right-4" />
        </div>

        <BsBell className="size-7" />

        <div className="border border-[#B0B0B0] rounded-3xl flex items-center justify-between p-2.5  w-[220px]">
          <div className="flex gap-4">
            <img src="/profile.jpg" alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-[#222222] text-xl font-medium">Name</p>
              <span className="text-[#222222] text-sm font-inter">Admin</span>
            </div>
          </div>
          <MdKeyboardArrowDown className="size-6" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
