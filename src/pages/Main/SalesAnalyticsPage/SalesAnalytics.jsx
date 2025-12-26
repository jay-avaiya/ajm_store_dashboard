import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import TopSellingBox from "../../../components/TopSellingBox";
import OrderStatus from "./_components/OrderStatus";

const SalesAnalytics = () => {
  return (
    <div className="flex-1 flex justify-between mt-8">
      {/* Left content */}
      <div className="w-full max-w-[980px] h-full">
        {/* Header content */}
        <div className="flex items-center gap-x-3">
          <ImUsers className="size-6" />
          <span className="text-3xl">Sales Analytics</span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* stats card */}
        <div className="w-full flex items-center justify-between">
          {/* card 1 - Total Orders */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#34C759] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px]">
            <h4>Total Orders</h4>
            <p>4,258</p>
          </div>

          {/* card 2 - Total Revenue */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#1D7BBB] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px]">
            <h4>Total Revenue</h4>
            <p>₹17,84,320</p>
          </div>

          {/* card 3 - Products Sold */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#8A38F5] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px]">
            <h4 className="w-[60%]">Products Sold</h4>
            <p>12,934</p>
          </div>

          {/* card 4 - Return Rate */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#FF1919] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px]">
            <h4>Return Rate</h4>
            <p>4.3%</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* Listed Users */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">All Listed Users</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center w-[179px]">
              <input
                type="text"
                placeholder="Search..."
                className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none p-4  rounded-full w-full bg-white"
              />
              <FaMagnifyingGlass className="size-5 absolute right-3 text-[#1D7BBB]" />
            </div>
            <div className=" bg-white border border-[#B0B0B0] rounded-full flex items-center justify-center p-4">
              <span className="text-[#222222] text-[16px]">
                4000 Listed Products
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* graphs */}
        <div className="grid grid-cols-2 w-full place-items-center gap-y-6">
          <OrderStatus />
          <OrderStatus />
          <OrderStatus />
          <OrderStatus />
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4">
        <NotificationBox />
        <FilterBox />
        <TopSellingBox />
      </div>
    </div>
  );
};

export default SalesAnalytics;
