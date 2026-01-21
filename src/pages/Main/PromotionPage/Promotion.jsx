import { ChartNoAxesGantt, Mails, Watch } from "lucide-react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import { MdAutoDelete, MdCampaign } from "react-icons/md";
import FilterBox from "../../../components/FilterBox";
import NotificationBox from "../../../components/NotificationBox";
import Revenue from "../../../components/Revenue";
import PromoTable from "./_components/PromoTable";
import PanelWrapper from "../ShippingDeliverySettingPage/_components/PanelWrapper";
import { VscSparkleFilled } from "react-icons/vsc";

const Promotion = () => {
  const [openPanel, setOpenPanel] = useState(null);
  const [tableMode, setTableMode] = useState("normal"); // Normal || Bulk || Delete

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
    <div className="flex-1 flex justify-between pt-8 min-h-0 h-full overflow-hidden">
      {/* Left content */}
      <div className="relative w-full max-w-[100%] h-full min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pr-2 pb-4">
        {/* Header content */}
        <div className="flex items-center gap-x-3">
          <Watch className="size-6" />
          <span className="text-3xl">Promotions and Newsletter Management</span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* buttons */}
        <div className="w-full flex items-center justify-between">
          {/* button 1 - Create Campaign */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTableMode("normal");
              togglePanel("campaign");
            }}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px] hover:text-white hover:bg-[#EDC111] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Create Campaign</span>
            <MdCampaign className="text-[#EDC111] size-6 group-hover:text-white" />
          </button>

          {/* button 2 - Send Newsletter */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTableMode("normal");
              togglePanel("newsletter");
            }}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#1D7BBB] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Send Newsletter</span>
            <Mails className="text-[#1D7BBB] size-6 group-hover:text-white" />
          </button>

          {/* button 3 - Bulk Manage */}
          <button
            onClick={() => setTableMode("bulk")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#FF9F55] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Bulk Manage</span>
            <ChartNoAxesGantt className="text-[#FF9F55] size-6 group-hover:text-white" />
          </button>

          {/* button 4 - Delete */}
          <button
            onClick={() => setTableMode("delete")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#FF465F] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Delete</span>
            <MdAutoDelete className="text-[#FF465F] size-6 group-hover:text-white" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* All Notifications */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">All Listed Campaigns</span>
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

            {tableMode === "normal" && (
              <div className=" bg-white border border-[#B0B0B0] rounded-full flex items-center justify-center p-4">
                <span className="text-[#222222] text-[16px]">
                  4000 Listed Products
                </span>
              </div>
            )}

            {tableMode === "bulk" && (
              <div className="flex items-center gap-x-5">
                <div className=" bg-[#34C759] rounded-full flex items-center justify-center p-2 px-4">
                  <span className="text-white text-[16px]">Reschedule</span>
                </div>

                <div className=" bg-[#F39D08] rounded-full flex items-center justify-center p-2 px-4">
                  <span className="text-white text-[16px]">Pause Events</span>
                </div>
              </div>
            )}

            {tableMode === "delete" && (
              <div className=" bg-[#FF465F] rounded-full flex items-center justify-center gap-x-2 p-2 px-6">
                <span className="text-white text-[16px]">Delete</span>
                <FaTrash className="text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-6"></div>

        {/* Table */}
        <PromoTable mode={tableMode} />

        {/* Create Campaign Panel */}
        <PanelWrapper
          isOpen={openPanel === "campaign"}
          className="absolute z-50 top-1/4 left-30 h-[360px] w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
        >
          <h3 className="text-xl text-[#222222]">Create Campaign</h3>

          {/* Divider */}
          <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

          {/* edit content */}

          <div className="flex flex-col gap-y-3 w-full px-2">
            <div className={rowStyle}>
              <p className="text-sm text-left">Campaign Name</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                "Summer Sale 2025"
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Start Date & Time</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                08 Jul, 10:00 AM
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">End Date & Time</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                10 Jul, 10:00 AM
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Target Audience</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                All User
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Subject Line</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Flat 20% Off – Today Only!
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Message Body</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Flat 20% Off
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Attach Image</p>
              <p className="text-sm text-center">-</p>
              <div className="border border-[#808080] text-[10px] text-[#5C5C5C]  rounded-full flex items-center justify-center w-full max-w-[90px] justify-self-end py-1">
                <p>Uploaded</p>
              </div>
            </div>

            <div className="flex items-end h-full w-full justify-end mb-5 mr-5">
              <button className="flex  items-center justify-center gap-x-3 bg-[#F39D08] text-white rounded-full w-full max-w-[130px]  py-1 px-4 cursor-pointer hover:bg-[#F39D08]/90">
                Publish <VscSparkleFilled />
              </button>
            </div>
          </div>
        </PanelWrapper>

        {/* Send Newsletter Panel */}
        <PanelWrapper
          isOpen={openPanel === "newsletter"}
          className="absolute z-50 top-1/4 left-60 h-[400px] w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
        >
          <h3 className="text-xl text-[#222222]">Create Newsletter</h3>

          {/* Divider */}
          <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

          {/* edit content */}
          <div className="flex flex-col gap-y-3 w-full px-2">
            <div className={rowStyle}>
              <p className="text-sm text-left">Newsletter Title</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                "Summer Sale 2025"
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Email Subject</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                "Summer Sale 2025"
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Schedule Send Time</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                10 Jul, 10:00 AM
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Target Audience</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                All User
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Recipient List</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                All User
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Email Headline</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Flat 20% Off – Today!
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Main Body</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                Flat 20% Off
              </p>
            </div>

            <div className={rowStyle}>
              <p className="text-sm text-left">Attach Image</p>
              <p className="text-sm text-center">-</p>
              <div className="border border-[#808080] text-[10px] text-[#5C5C5C]  rounded-full flex items-center justify-center w-full max-w-[90px] justify-self-end py-1">
                <p>Uploaded</p>
              </div>
            </div>

            <div className="flex items-end h-full w-full justify-end mb-5 mr-5">
              <button className="flex  items-center justify-center gap-x-3 bg-[#F39D08] text-white rounded-full w-full max-w-[130px]  py-1 px-4 cursor-pointer hover:bg-[#F39D08]/90">
                Publish <VscSparkleFilled />
              </button>
            </div>
          </div>
        </PanelWrapper>
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4 h-full min-h-0 max-w-[26%] w-full shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pb-4 mr-2">
        <NotificationBox />
        <FilterBox />
        <Revenue />
      </div>
    </div>
  );
};

export default Promotion;
