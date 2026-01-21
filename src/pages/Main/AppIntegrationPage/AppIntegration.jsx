import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import UserStatus from "../../../components/UserStatus";
import AppTable from "./_components/AppTable";

const AppIntegration = () => {
  return (
    <div className="flex-1 flex justify-between pt-8 min-h-0 h-full overflow-hidden">
      {/* Left content */}
      <div className="relative w-full max-w-[100%] h-full min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pr-2 pb-4">
        {/* Header content */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <MdOutlineInventory className="size-6" />
            <span className="text-3xl">App Integration</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center w-[179px]">
              <input
                type="text"
                placeholder="Search..."
                className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none p-2 rounded-full w-full bg-white"
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

        {/* stat card */}
        <div className="w-full flex items-center gap-x-3">
          {/* 1st card - Total App Users */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#34C759] text-xl  p-2 flex items-center justify-between w-[25%] h-[74px]">
            <h4 className="w-[60%]">Total App Users</h4>
            <p>18,420</p>
          </div>

          {/* 2nd card - Active users */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#1D7BBB] text-xl  p-2 flex items-center justify-between w-[25%] h-[74px]">
            <h4 className="w-[60%]">Active Users (Today)</h4>
            <p>18,420</p>
          </div>

          {/* 3rd card - App Installs  */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#8A38F5] text-xl  p-2 flex items-center justify-between w-[25%] h-[74px]">
            <h4 className="w-[40%]">App Installs</h4>
            <p>27,940</p>
          </div>

          {/*  4th card - New Users */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#FF7049] text-xl  p-2 flex items-center justify-between w-[25%] h-[74px]">
            <h4 className="">New Users</h4>
            <p>986</p>
          </div>
        </div>

        {/* table */}
        <AppTable />
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4 h-full min-h-0 max-w-[26%] w-full shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain mr-2 pb-4">
        {/* Notifications */}
        <NotificationBox />
        <FilterBox />
        <UserStatus />
      </div>
    </div>
  );
};

export default AppIntegration;
