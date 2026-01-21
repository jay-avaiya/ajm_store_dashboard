import React, { useState } from "react";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import UserStatus from "../../../components/UserStatus";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { MdAutoDelete, MdOutlineControlPointDuplicate } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { TfiLayersAlt } from "react-icons/tfi";
import UserTable from "./_components/UserTable";
import OrderPlaced from "../../../components/OrderPlaced";
import ActiveUser from "../../../components/ActiveUser";
import LiveOverview from "../../../components/LiveOverview";
import NewUser from "./_components/NewUser";

const UserManagement = () => {
  const [pageMode, setPageMode] = useState("initial");
  // Values: Initial || Add (add new user) || Edit (edit user) || Bulk || Delete

  const headerMap = {
    initial: "User Management",
    add: "Add User",
    edit: "Edit User",
    bulk: "Bulk Management",
    delete: "Delete User",
  };

  const headerIcon = {
    initial: ImUsers,
    add: MdOutlineControlPointDuplicate,
    edit: FaPencilAlt,
    bulk: TfiLayersAlt,
    delete: MdAutoDelete,
  };

  const HeaderIcon = headerIcon[pageMode];

  return (
    <div className="flex-1 flex justify-between pt-8 min-h-0 h-full overflow-hidden">
      {/* Left content */}
      <div className="relative w-full max-w-[100%] h-full min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pr-2 pb-4">
        {/* Header content */}
        <div className="flex items-center gap-x-3">
          <HeaderIcon className="size-6" />
          <span className="text-3xl">
            {headerMap[pageMode] || "User Management"}{" "}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* buttons */}
        <div className="w-full flex items-center justify-between">
          {/* button 1 - Add New User */}
          <button
            onClick={() => setPageMode("add")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px] hover:text-white hover:bg-[#EDC111] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Add New User</span>
            <MdOutlineControlPointDuplicate className="text-[#EDC111] size-6 group-hover:text-white" />
          </button>

          {/* button 2 - Edit User */}
          <button
            onClick={() => setPageMode("edit")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#1D7BBB] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Edit User</span>
            <FaPencilAlt className="text-[#1D7BBB] size-6 group-hover:text-white" />
          </button>

          {/* button 3 - Bulk Manage */}
          <button
            onClick={() => setPageMode("bulk")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#FF9F55] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Bulk Manage</span>
            <TfiLayersAlt className="text-[#FF9F55] size-6 group-hover:text-white" />
          </button>

          {/* button 4 - Delete */}
          <button
            onClick={() => setPageMode("delete")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#FF465F] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Delete</span>
            <MdAutoDelete className="text-[#FF465F] size-6 group-hover:text-white" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* All User */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">
              {pageMode === "add" ? "Add New User" : "All Listed Users"}
            </span>
          </div>
          {(pageMode === "initial" ||
            pageMode === "add" ||
            pageMode === "edit") && (
            <div className="flex items-center gap-4">
              <div className="relative flex items-center w-[179px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none py-2 px-4  rounded-full w-full bg-white"
                />
                <FaMagnifyingGlass className="size-5 absolute right-3 text-[#1D7BBB]" />
              </div>

              <div className=" bg-white border border-[#B0B0B0] rounded-full flex items-center justify-center py-2 px-4">
                <span className="text-[#222222] text-[16px]">
                  4000 Listed Products
                </span>
              </div>
            </div>
          )}

          {pageMode === "bulk" && (
            <div className="flex items-center gap-4">
              <button className=" bg-[#34C759] rounded-full flex items-center justify-center p-2 px-4 text-white text-[16px]">
                Send Email
              </button>

              <button className=" bg-[#F39D08] rounded-full flex items-center justify-center p-2 px-4 text-white text-[16px]">
                Suspend User
              </button>

              <button className=" bg-[#1D7BBB] rounded-full flex items-center justify-center p-2 px-4 text-white text-[16px]">
                Export CSV
              </button>
            </div>
          )}

          {pageMode === "delete" && (
            <div className="flex items-center gap-4">
              <div className="relative flex items-center w-[179px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none py-2 px-4  rounded-full w-full bg-white"
                />
                <FaMagnifyingGlass className="size-5 absolute right-3 text-[#1D7BBB]" />
              </div>

              <button className=" bg-[#FF465F] rounded-full flex items-center justify-center p-2 px-4 text-white text-[16px]">
                Delete User
              </button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* Table */}
        {pageMode !== "add" && <UserTable pageMode={pageMode} />}

        {pageMode === "add" && <NewUser />}
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4 h-full min-h-0 max-w-[26%] w-full shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pb-4 mr-2">
        <NotificationBox />
        <FilterBox />
        {(pageMode === "initial" || pageMode === "bulk") && <UserStatus />}

        {pageMode === "add" && <ActiveUser />}

        {pageMode === "edit" && <OrderPlaced />}

        {pageMode === "delete" && <LiveOverview src={"/sales_4.png"} />}
      </div>
    </div>
  );
};

export default UserManagement;
