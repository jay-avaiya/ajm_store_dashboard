import { useEffect, useState } from "react";
import { FaBox, FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { TbShoppingBagCheck } from "react-icons/tb";
import { VscSparkleFilled, VscWatch } from "react-icons/vsc";
import ShippingTable from "./_components/ShippingTable";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import LiveOverview from "../../../components/LiveOverview";
import PanelWrapper from "./_components/PanelWrapper";

const ShippingSetting = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  };

  const rowStyle = "grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full";

  useEffect(() => {
    function handleOutsideClick() {
      setOpenPanel(null);
    }

    if (openPanel) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [openPanel]);

  return (
    <div className="flex-1 flex justify-between mt-8 overflow-x-hidden">
      {/* Left content */}
      <div className="relative w-full max-w-[980px] h-full">
        {/* Header content */}
        <div className="flex items-center gap-x-3">
          <VscWatch className="size-6" />
          <span className="text-3xl">Shipping & Delivery Management</span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* stats card */}
        <div className="w-full flex items-center justify-between">
          {/* card 1 - Shipping Partners Setup */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              togglePanel("shipping");
            }}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[230px] h-[70px] active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <h4>Shipping Partners Setup</h4>
            <FaBox className="size-6 text-[#EDC111]" />
          </div>

          {/* card 2 - Delivery Zones */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              togglePanel("delivery");
            }}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[230px] h-[70px] active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <h4>Delivery Zones</h4>
            <IoLocationSharp className="size-6 text-[#1D7BBB]" />
          </div>

          {/* card 3 - Delivery Timelines */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              togglePanel("timeline");
            }}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[230px] h-[70px] active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <h4 className="w-[60%]">Delivery Timelines</h4>
            <FaBox className="size-6 text-[#34C759]" />
          </div>

          {/* card 4 - Shipping Charges */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              togglePanel("charges");
            }}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[230px] h-[70px] active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <h4>Shipping Charges</h4>
            <TbShoppingBagCheck className="size-6 text-[#FC893E]" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* All Shipment Status */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">All Shipment Status</span>
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

        {/* Shipping Table */}
        <ShippingTable />

        {/* Shipping Partners */}
        <PanelWrapper
          isOpen={openPanel === "shipping"}
          className="absolute top-40 left-5 border border-[#C0C0C0] bg-white w-full max-w-[510px] rounded-3xl flex flex-col items-center py-1 z-50"
        >
          <h3 className="text-2xl">Shipping Partners</h3>

          {/* divider */}
          <div className="w-full h-[1px] border border-[#C0C0C0] my-2" />

          {/* DETAILS */}
          <div className="flex flex-col w-full mt-5">
            <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
              <p className="font-medium text-lg ">Partner Name</p>
              <div className="border border-[#808080] rounded-full flex items-center justify-center w-full max-w-[150px]">
                <p>Shiprocket</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
              <p className="font-medium text-lg ">Service Type</p>
              <div className="border border-[#808080] rounded-full flex items-center justify-center w-full max-w-[150px]">
                <p>Express</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
              <p className="font-medium text-lg ">Status</p>
              <div className="border border-[#808080] rounded-full flex items-center justify-center w-full max-w-[150px]">
                <p>Active</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
              <p className="font-medium text-lg ">Contact Email</p>
              <div className="border border-[#808080] rounded-full flex items-center justify-center w-full max-w-[150px]">
                <p>5487-5854-965</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[#5C5C5C] px-6 my-2">
              <p className="font-medium text-lg ">Support Number</p>
              <div className="border border-[#808080] rounded-full flex items-center justify-center w-full max-w-[150px]">
                <p>+91 9876543210</p>
              </div>
            </div>
          </div>

          <div className="self-end px-6 mt-5 mb-3">
            <button className="flex items-center w-full max-w-[120px] gap-x-4 rounded-full bg-[#F39D08] text-white px-4 py-1 active:scale-90 duration-100 transition-all cursor-pointer">
              <span>Save</span>
              <VscSparkleFilled />
            </button>
          </div>
        </PanelWrapper>

        {/* Delivery Zones */}
        <PanelWrapper
          isOpen={openPanel === "delivery"}
          className="absolute z-50 top-1/4 right-80 h-[360px] w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
        >
          <h3 className="text-xl text-[#222222]">Delivery Zones</h3>

          {/* Divider */}
          <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

          {/* edit content */}

          <div className="flex flex-col gap-y-3 w-full px-4">
            <div className="flex items-center justify-between">
              <p>Zones</p>
              <p>Cities</p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Zone A</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Delhi, Mumbai, Bangalore, Kolkata
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Zone B</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Jaipur, Pune, Ahmedabad, Lucknow
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Zone B</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Indore, Patna, Bhopal, Ranchi, others
              </p>
            </div>

            <div className="flex items-end h-full w-full justify-end mb-5 mr-5">
              <button className="flex  items-center justify-center gap-x-3 bg-[#F39D08] text-white rounded-full w-full max-w-[130px]  py-2 cursor-pointer hover:bg-[#F39D08]/90">
                Update <VscSparkleFilled />
              </button>
            </div>
          </div>
        </PanelWrapper>

        {/* Delivery Timelines */}
        <PanelWrapper
          isOpen={openPanel === "timeline"}
          className="absolute z-50 top-1/4 right-80 h-[360px] w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
        >
          <h3 className="text-xl text-[#222222]">Delivery Timeline</h3>

          {/* Divider */}
          <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

          {/* edit content */}
          <div className="flex flex-col gap-y-3 w-full px-4">
            <div className="flex items-center justify-between">
              <p>Shipping Type</p>
              <p>Delivery Time</p>
            </div>

            <div className={`${rowStyle} text-[10px] text-[#5C5C5C]`}>
              <p className=" text-left">Standard Shipping</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px]   px-3 py-1 justify-self-end">
                3–7 Days
              </p>
            </div>

            <div className={`${rowStyle} text-[10px] text-[#5C5C5C]`}>
              <p className=" text-left">Economy Delivery</p>
              <p className="text-sm text-center">-</p>
              <p className="  px-3 py-1 justify-self-end">5–8 Days</p>
            </div>

            <div className={`${rowStyle} text-[10px] text-[#5C5C5C]`}>
              <p className=" text-left">Express Delivery</p>
              <p className="text-sm text-center">-</p>
              <p className="  px-3 py-1 justify-self-end">1–2 Days</p>
            </div>
          </div>

          <div className="flex items-end h-full w-full justify-end mb-5 mr-5">
            <button className="flex  items-center justify-center gap-x-3 bg-[#F39D08] text-white rounded-full w-full max-w-[130px]  py-2 cursor-pointer hover:bg-[#F39D08]/90">
              Update <VscSparkleFilled />
            </button>
          </div>
        </PanelWrapper>

        {/* Shipping Charges */}
        <PanelWrapper
          isOpen={openPanel === "charges"}
          className="absolute z-50 top-1/4 right-10 h-[360px] w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
        >
          <h3 className="text-xl text-[#222222]">Shipping Charges</h3>

          {/* Divider */}
          <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

          {/* edit content */}
          <div className="flex flex-col gap-y-3 w-full px-4">
            <div className="flex items-center justify-between">
              <p>Order Number</p>
              <p>Delivery Charges</p>
            </div>

            <div className={`${rowStyle} text-[10px] text-[#5C5C5C]`}>
              <p className=" text-left">Orders below ₹499</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px]   px-3 py-1 justify-self-end">
                ₹49 (Standard)
              </p>
            </div>

            <div className={`${rowStyle} text-[10px] text-[#5C5C5C]`}>
              <p className=" text-left">Orders above ₹499</p>
              <p className="text-sm text-center">-</p>
              <p className="  px-3 py-1 justify-self-end">Free Shipping</p>
            </div>

            <div className={`${rowStyle} text-[10px] text-[#5C5C5C]`}>
              <p className=" text-left">Express Delivery (Any Zone)</p>
              <p className="text-sm text-center">-</p>
              <p className="  px-3 py-1 justify-self-end">₹79 extra</p>
            </div>
          </div>

          <div className="flex items-end h-full w-full justify-end mb-5 mr-5">
            <button className="flex  items-center justify-center gap-x-3 bg-[#F39D08] text-white rounded-full w-full max-w-[130px]  py-2 cursor-pointer hover:bg-[#F39D08]/90">
              Update <VscSparkleFilled />
            </button>
          </div>
        </PanelWrapper>
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4">
        <NotificationBox />
        <FilterBox />
        <LiveOverview />
      </div>
    </div>
  );
};

export default ShippingSetting;
