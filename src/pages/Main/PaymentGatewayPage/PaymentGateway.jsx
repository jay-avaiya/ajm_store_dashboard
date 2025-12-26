import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { VscSparkleFilled, VscWatch } from "react-icons/vsc";
import PaymentTable from "./_components/PaymentTable";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import PaymentStatus from "../../../components/PaymentStatus";

const PaymentGateway = () => {
  const [ConnectPayment, setConnectPayment] = useState(false);
  const [view, setView] = useState(false);

  return (
    <div className="flex-1 flex justify-between mt-8">
      <div className="relative w-full max-w-[980px] h-full">
        {/* Header content */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <VscWatch className="size-6" />
            <span className="text-3xl">Payment Management</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer bg-[#34C759] py-2 px-4 rounded-full text-white active:scale-95 duration-100 transition-all"
              onClick={() => setConnectPayment((prev) => !prev)}
            >
              Connect Payment Gateway
            </button>
            <button className="cursor-pointer bg-[#1D7BBB] py-2 px-4 rounded-full text-white active:scale-95 duration-100 transition-all">
              Export CSV
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* stats card */}
        <div className="w-full flex items-center justify-between">
          {/* card 1 - Connected Gateways */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#EDC111] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px]">
            <h4>Connected Gateways</h4>
            <p>03</p>
          </div>

          {/* card 2 - Total Transactions */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#34C759] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px]">
            <h4>Total Transactions</h4>
            <p>1200</p>
          </div>

          {/* card 3 - Total Revenue */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#1D7BBB] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px]">
            <h4 className="w-[60%]">Total Revenue</h4>
            <p>4,50,250</p>
          </div>

          {/* card 4 - Failed Transactions */}
          <div className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#FF1919] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px]">
            <h4>Failed Transactions</h4>
            <p>5,000</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* Payments History */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">All Payments History</span>
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

        {/* Table */}
        <PaymentTable view={view} setView={setView} />

        {/* connect payment content */}
        {ConnectPayment && (
          <div className="absolute top-16 left-1/7 translate-x-1/2 border border-[#C0C0C0] bg-white w-full max-w-[480px] rounded-3xl flex flex-col items-center py-1">
            <h3 className="text-2xl">Connect Payment Gateway</h3>

            {/* divider */}
            <div className="w-full h-[1px] border border-[#C0C0C0] my-2" />

            {/* DETAILS */}
            <div className="flex flex-col w-full mt-5">
              <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
                <p className="font-medium text-lg ">Payment Method Name</p>
                <p>UPI via Razorpay</p>
              </div>

              <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
                <p className="font-medium text-lg ">Payment Gateway</p>
                <p>Razorpay</p>
              </div>

              <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
                <p className="font-medium text-lg ">Status</p>
                <p>Active</p>
              </div>

              <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
                <p className="font-medium text-lg ">API Key ID</p>
                <p>5487-5854-965</p>
              </div>

              <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
                <p className="font-medium text-lg ">Merchant ID</p>
                <p>5487-5854-965</p>
              </div>

              <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
                <p className="font-medium text-lg ">Display at Checkout</p>
                <label
                  for="hs-basic-usage"
                  class="relative inline-block w-11 h-6 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="hs-basic-usage"
                    class="peer sr-only"
                  />
                  <span class="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-[#34C759] dark:bg-neutral-700 dark:peer-checked:bg-[#34C759] peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                  <span class="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                </label>
              </div>
            </div>

            <div className="self-end px-6 mt-5 mb-3">
              <button className="flex items-center w-full max-w-[120px] gap-x-4 rounded-full bg-[#F39D08] text-white px-4 py-1 active:scale-90 duration-100 transition-all cursor-pointer">
                <span>Save</span>
                <VscSparkleFilled />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4">
        {/* Notifications */}
        <NotificationBox />
        <FilterBox />
        <PaymentStatus />
      </div>
    </div>
  );
};

export default PaymentGateway;
