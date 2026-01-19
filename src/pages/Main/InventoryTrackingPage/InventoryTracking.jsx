import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDelete, MdOutlineInventory } from "react-icons/md";
import InventoryTable from "./_components/InventoryTable";
import { IoMdArrowDropup } from "react-icons/io";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import InventoryInsight from "../../../components/InventoryInsight";
import { VscSparkleFilled } from "react-icons/vsc";

const InventoryTracking = () => {
  const [isEdit, setIsEdit] = useState(false);

  const rowStyle = "grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full";

  return (
    <div className="flex h-[calc(100vh-120px)]  gap-x-4">
      {/* Left content */}
      <div className="flex-1 overflow-y-auto no-scrollbar no-scroll-chain relative p-8">
        <div className="w-full max-w-[980px] mx-auto">
          {/* Header content */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <MdOutlineInventory className="size-6" />
              <span className="text-2xl">Inventory Tracking Management</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center w-[179px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none p-2  rounded-full w-full bg-white"
                />
                <FaMagnifyingGlass className="size-5 absolute right-3 text-[#1D7BBB]" />
              </div>
              <div className=" bg-white border border-[#B0B0B0] rounded-full flex items-center justify-center p-2">
                <span className="text-[#222222] text-[16px]">
                  4000 Listed Products
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

          {/* buttons */}
          <div className="w-full flex items-center justify-end gap-x-4">
            <button
              className="cursor-pointer bg-[#34C759] py-2 px-4 w-full max-w-[110px] rounded-full text-white active:scale-95 duration-100 transition-all"
              onClick={() => setIsEdit((prev) => !prev)}
            >
              Edit
            </button>
            <button className="cursor-pointer bg-[#F39D08] py-2  w-full max-w-[200px] rounded-full text-white active:scale-95 duration-100 transition-all">
              Send Restock Request
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

          {/* table */}
          <InventoryTable />

          {isEdit && (
            <div className="fixed z-50 top-[180px] right-[40px] w-[290px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2">
              <h3 className="text-xl text-[#222222]">View order Inventory</h3>

              {/* Divider */}
              <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

              {/* edit content */}
              <div className="flex flex-col gap-y-3 w-full px-2">
                <div className={rowStyle}>
                  <p className="text-sm text-left">Product ID</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-3 py-1 justify-self-end">
                    21345215149
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Product Name</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-1 py-1 justify-self-end">
                    Samsung Z Fold Case
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Category</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-1 py-1 justify-self-end">
                    Accessories
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Stock Level</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-3 py-1 justify-self-end">
                    10
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Status</p>
                  <p className="text-sm text-center">-</p>
                  <div className="text-[10px] border border-[#FF465F] rounded-full px-2 py-1 bg-[#FF465F] text-white flex items-center gap-1 justify-self-end">
                    <span>Low Stock</span>
                    <IoMdArrowDropup />
                  </div>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Restock ETA</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-3 py-1 justify-self-end">
                    9 July, 2025
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Vendor Name</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-3 py-1 justify-self-end">
                    Vendor A
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Requested On</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#5C5C5C] rounded-full px-3 py-1 justify-self-end">
                    Jul 6, 2025
                  </p>
                </div>

                <div className="flex items-center justify-center gap-x-4 w-full mt-5">
                  <button className="flex items-center justify-center gap-x-2 bg-black text-white rounded-full py-2 w-full max-w-[90px] active:scale-90 duration-100 transition-all cursor-pointer">
                    <span>Save</span>
                    <VscSparkleFilled />
                  </button>

                  <button className="flex items-center justify-center gap-x-2 bg-[#FF465F] text-white rounded-full py-2 w-full max-w-[100px] active:scale-90 duration-100 transition-all cursor-pointer">
                    <span>Delete</span>
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right content */}
      <div className="overflow-y-auto no-scrollbar no-scroll-chain px-3 gap-y-4 flex flex-col p-8">
        <NotificationBox />
        <FilterBox />
        <InventoryInsight />
      </div>
    </div>
  );
};

export default InventoryTracking;
