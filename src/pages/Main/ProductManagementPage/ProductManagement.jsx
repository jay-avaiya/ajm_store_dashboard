import { useEffect, useRef, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdAutoDelete, MdOutlineControlPointDuplicate } from "react-icons/md";
import { TfiLayersAlt } from "react-icons/tfi";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import LiveOverview from "../../../components/LiveOverview";
import ProductTable from "./_components/ProductTable";
import { CirclePlus, Watch } from "lucide-react";
import NewProduct from "./_components/NewProduct";
import PanelWrapper from "../ShippingDeliverySettingPage/_components/PanelWrapper";
import { VscSparkleFilled } from "react-icons/vsc";
import { IoMdArrowDropup } from "react-icons/io";

const ProductManagement = () => {
  const [pageMode, setPageMode] = useState("initial");
  const [view, setView] = useState(null);
  const [panelPos, setPanelPos] = useState({ top: 0 });

  const panelRef = useRef(null);
  const containerRef = useRef(null);

  const headerMap = {
    initial: "Product Management",
    add: "Add Product",
    edit: "Edit Product",
    bulk: "Bulk Manage",
    delete: "Delete Product",
  };

  const headerIcon = {
    initial: Watch,
    add: CirclePlus,
    edit: FaPencilAlt,
    bulk: TfiLayersAlt,
    delete: MdAutoDelete,
  };

  const HeaderIcon = headerIcon[pageMode];

  const rowStyle = "grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full";

  useEffect(() => {
    if (!view) return;

    const handleOutsideClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setView(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [view]);

  useEffect(() => {
    setView(null);
  }, [pageMode]);

  return (
    <div className="flex-1 flex justify-between pt-8 min-h-0 h-full overflow-hidden">
      {/* Left content */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[100%] h-full min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pr-2 pb-4"
      >
        {/* Header content */}
        <div className="flex items-center gap-x-3">
          <HeaderIcon className="size-6" />
          <span className="text-3xl">
            {headerMap[pageMode] || "Product Management"}{" "}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        {/* buttons */}
        <div className="w-full flex items-center justify-between">
          {/* button 1 - Add Product */}
          <button
            onClick={() => setPageMode("add")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[210px] h-[70px] hover:text-white hover:bg-[#EDC111] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Add Product</span>
            <MdOutlineControlPointDuplicate className="text-[#EDC111] size-6 group-hover:text-white" />
          </button>

          {/* button 2 - Edit Product */}
          <button
            onClick={() => setPageMode("edit")}
            className="bg-[#F9FDFF] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  text-lg  px-4 py-5 flex items-center justify-between w-full max-w-[220px] h-[70px] hover:text-white hover:bg-[#1D7BBB] group active:scale-95 duration-100 transition-all cursor-pointer"
          >
            <span>Edit Product</span>
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
              {pageMode === "add" ? "Add New Product" : "All Listed Products"}
            </span>
          </div>
          {(pageMode === "initial" || pageMode === "edit") && (
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

          {pageMode === "add" && (
            <div className="flex items-center gap-4">
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
        {pageMode !== "add" && (
          <ProductTable
            pageMode={pageMode}
            setView={setView}
            setPanelPos={setPanelPos}
            containerRef={containerRef}
          />
        )}

        {/* Add Product field */}
        {pageMode === "add" && <NewProduct />}

        {/* Edit & View Field Details */}

        {view === "edit" && (
          <div ref={panelRef}>
            <PanelWrapper
              isOpen={view === "edit"}
              className="absolute z-50 -right-80  w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
              style={{ top: panelPos.top }}
            >
              <h3 className="text-xl text-[#222222]">Edit Product</h3>

              {/* Divider */}
              <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

              {/* edit content */}
              <div className="flex flex-col gap-y-3 w-full px-2">
                <div className={rowStyle}>
                  <p className="text-sm text-left">Product ID</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#B0B0B0] rounded-full  px-3 py-1 justify-self-end">
                    21345215149
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Product Name</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#B0B0B0] rounded-full  px-3 py-1 justify-self-end">
                    Samsung z Case
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Category</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#B0B0B0] rounded-full  px-3 py-1 justify-self-end">
                    Samsung
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Status</p>
                  <p className="text-sm text-center">-</p>

                  <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full w-fit justify-self-end">
                    <span>Active</span>
                    <IoMdArrowDropup />
                  </div>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Posted Date</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] border border-[#B0B0B0] rounded-full  px-3 py-1 justify-self-end">
                    Jul 7, 2025
                  </p>
                </div>

                <div className="flex flex-col items-end h-full w-full justify-end mb-5 mr-5 space-y-3 mt-8">
                  <button className="flex  items-center justify-center gap-x-3 bg-black text-white rounded-full w-full max-w-[130px]  py-1 px-4 cursor-pointer hover:bg-black/90">
                    Save <VscSparkleFilled />
                  </button>

                  <button className="flex  items-center justify-center gap-x-3 bg-[#FF465F] text-white rounded-full w-full max-w-[130px]  py-1 px-4 cursor-pointer hover:bg-[#FF465F]/90">
                    Delete <FaTrash />
                  </button>
                </div>
              </div>
            </PanelWrapper>
          </div>
        )}

        {view === "view" && (
          <div ref={panelRef}>
            <PanelWrapper
              isOpen={view === "view"}
              className="absolute z-50 -right-80  w-full max-w-[310px] flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_13px_0_rgba(0,0,0,0.25)] py-2"
              style={{ top: panelPos.top }}
            >
              <h3 className="text-xl text-[#222222]">View Product</h3>

              {/* Divider */}
              <div className="h-[1px] w-full border border-[#E4E4E4] my-2" />

              {/* edit content */}
              <div className="flex flex-col gap-y-3 w-full px-2">
                <div className={rowStyle}>
                  <p className="text-sm text-left">Product ID</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] px-3 py-1 justify-self-end">
                    21345215149
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Product Name</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                    Samsung z Case
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Category</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C]  px-3 py-1 justify-self-end">
                    Samsung
                  </p>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Status</p>
                  <p className="text-sm text-center">-</p>

                  <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border bg-[#44D769] text-white rounded-full w-fit justify-self-end">
                    <span>Active</span>
                    <IoMdArrowDropup />
                  </div>
                </div>

                <div className={rowStyle}>
                  <p className="text-sm text-left">Posted Date</p>
                  <p className="text-sm text-center">-</p>
                  <p className="text-[10px] text-[#5C5C5C] px-3 py-1 justify-self-end">
                    Jul 7, 2025
                  </p>
                </div>

                <div className="flex flex-col items-end h-full w-full justify-end mb-5 mr-5 space-y-3 mt-8">
                  <button className="flex  items-center justify-center gap-x-3 bg-[#F39D08] text-white rounded-full w-full max-w-[130px]  py-1 px-4 cursor-pointer hover:bg-[#F39D08]/90">
                    Update <VscSparkleFilled />
                  </button>
                </div>
              </div>
            </PanelWrapper>
          </div>
        )}
      </div>

      {/* Right content */}
      <div className="flex flex-col px-4 gap-y-4 mb-4 h-full min-h-0 max-w-[25%] shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pb-4 mr-2">
        <NotificationBox />
        <FilterBox />
        <LiveOverview src={"/sales_4.png"} />
      </div>
    </div>
  );
};

export default ProductManagement;
