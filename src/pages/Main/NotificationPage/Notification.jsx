import { BiSolidBellRing } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  MdAppsOutage,
  MdOutlineManageAccounts,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { TbBellPlusFilled } from "react-icons/tb";
import NotificationTable from "./_components/NotificationTable";
import FilterBox from "../../../components/FilterBox";
import NotificationStats from "../../../components/NotificationStats";
import { useState } from "react";

const Notification = () => {
  const tabs = {
    INVENTORY: "inventory",
    ORDER: "order",
    SYSTEM: "system",
    USER: "user",
  };

  const tabLabels = {
    inventory: "Inventory Alerts",
    order: "Order Notification",
    system: "System Alerts",
    user: "User Activity",
  };

  const mockNotifications = [
    {
      id: 1,
      type: "inventory",
      message: "AirPods stock below 10 units",
      date: "2025-07-07",
    },
    {
      id: 2,
      type: "order",
      message: "New order #ORD2134 placed",
      date: "2025-07-07",
    },
    {
      id: 3,
      type: "system",
      message: "System backup completed",
      date: "2025-07-07",
    },
    {
      id: 4,
      type: "user",
      message: "Akash updated profile details",
      date: "2025-07-07",
    },
  ];

  const [activeTab, setActiveTab] = useState(null);
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifications = activeTab
    ? notifications.filter((n) => n.type === activeTab)
    : notifications;

  return (
    <div className="flex-1 flex justify-between pt-8  min-h-0  h-full">
      {/* Left content */}
      <div className="w-full max-w-[100%] h-full overflow-y-auto no-scrollbar no-scroll-chain pr-2 pb-4">
        {/* Header content */}
        <div className="flex items-center gap-x-3">
          <TbBellPlusFilled className="size-6" />
          <span className="text-3xl">
            {activeTab ? tabLabels[activeTab] : "Notifications"}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* buttons */}
        <div className="w-full flex items-center justify-between">
          {/* button 1 - Inventory Alerts */}
          <button
            onClick={() => setActiveTab("inventory")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px] hover:text-white hover:bg-[#EDC111] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Inventory Alerts</span>
            <BiSolidBellRing className="text-[#EDC111] size-6 group-hover:text-white" />
          </button>

          {/* button 2 - Order Notification */}
          <button
            onClick={() => setActiveTab("order")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#1D7BBB] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Order notification</span>
            <MdOutlineShoppingCartCheckout className="text-[#1D7BBB] size-6 group-hover:text-white" />
          </button>

          {/* button 3 - System Alerts */}
          <button
            onClick={() => setActiveTab("system")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#34C759] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>System Alerts</span>
            <MdAppsOutage className="text-[#34C759] size-6 group-hover:text-white" />
          </button>

          {/* button 4 - User Activity */}
          <button
            onClick={() => setActiveTab("user")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#FF9F55] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>User Activity</span>
            <MdOutlineManageAccounts className="text-[#FF9F55] size-6 group-hover:text-white" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/*  */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">All Notifications</span>
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
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* Table */}

        <NotificationTable data={filteredNotifications} activeTab={activeTab} />
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4  h-full max-w-[26%] w-full shrink-0 overflow-y-auto no-scrollbar no-scroll-chain pb-4 mr-2">
        <FilterBox />
        <NotificationStats />
      </div>
    </div>
  );
};

export default Notification;
