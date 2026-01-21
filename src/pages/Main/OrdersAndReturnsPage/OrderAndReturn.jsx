import { useState } from "react";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { MdAutoDelete, MdOutlineControlPointDuplicate } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import LiveOverview from "../../../components/LiveOverview";
import { IoBag } from "react-icons/io5";
import OrderTable from "./_components/OrderTable";
import NewOrder from "./_components/NewOrder";

const OrderAndReturn = () => {
  const [pageMode, setPageMode] = useState("initial");
  // Values: Initial || Add (add new user) || Edit (edit user) || Bulk || Delete

  const headerMap = {
    initial: "Order & Return Management",
    add: "Add Order",
    edit: "Edit Order",
    return: "Return Manage",
    delete: "Delete Order",
  };

  const headerIcon = {
    initial: ImUsers,
    add: MdOutlineControlPointDuplicate,
    edit: FaPencilAlt,
    return: IoBag,
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
            {headerMap[pageMode] || "Order & Return Management"}{" "}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* buttons */}
        <div className="w-full flex items-center justify-between">
          {/* button 1 - Add New Return */}
          <button
            onClick={() => setPageMode("add")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px] hover:text-white hover:bg-[#EDC111] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Add New Return</span>
            <MdOutlineControlPointDuplicate className="text-[#EDC111] size-6 group-hover:text-white" />
          </button>

          {/* button 2 - Edit Order */}
          <button
            onClick={() => setPageMode("edit")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#1D7BBB] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Edit Order</span>
            <FaPencilAlt className="text-[#1D7BBB] size-6 group-hover:text-white" />
          </button>

          {/* button 3 - Return Manage */}
          <button
            onClick={() => setPageMode("return")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#FF9F55] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Return Manage</span>
            <IoBag className="text-[#FF9F55] size-6 group-hover:text-white" />
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
              {pageMode === "add" ? "Add New Order" : "All Listed Orders"}
            </span>
          </div>
          {(pageMode === "initial" ||
            pageMode === "edit" ||
            pageMode === "return") && (
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

          {pageMode === "add" && (
            <div className=" bg-white border border-[#B0B0B0] rounded-full flex items-center justify-center py-2 px-4">
              <span className="text-[#222222] text-[16px]">
                4000 Listed Products
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* Table */}
        {pageMode !== "add" && <OrderTable mode={pageMode} />}
        {pageMode === "add" && <NewOrder />}
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4 h-full min-h-0 max-w-[26%] w-full shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain mr-2 pb-4">
        <NotificationBox />
        <FilterBox />
        <LiveOverview src={"/sales_4.png"} title={"Active Order Status"} />
      </div>
    </div>
  );
};

export default OrderAndReturn;
