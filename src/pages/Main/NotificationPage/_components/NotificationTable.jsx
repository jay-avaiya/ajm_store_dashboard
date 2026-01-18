import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { RiPencilFill } from "react-icons/ri";

const NotificationTable = ({ data, activeTab }) => {
  return (
    <div className="space-y-4 mt-5">
      <div className="overflow-x-auto border border-[#B0B0B0] bg-white rounded-3xl">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="h-[64px] border-b border-[#E5E7EB]">
              <th className="px-6 font-normal text-center whitespace-nowrap">
                Notification ID
              </th>
              <th className="px-6 font-normal text-center">Type</th>
              <th className="px-6 font-normal text-center">Message</th>
              <th className="px-6 font-normal text-center">Status</th>
              <th className="px-6 font-normal text-center">Category</th>
              <th className="px-6 font-normal text-center">Timestamp</th>
              <th className="px-6 font-normal text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5]
              .flatMap((i) => data.map((item) => ({ ...item, _k: i })))
              .map((item) => (
                <tr
                  className="h-[64px] border-b border-[#E5E7EB]"
                  key={`${item.id}-${item._k}`}
                >
                  <td className="px-3 font-normal text-center text-[#5C5C5C]">
                    {activeTab !== null ? (
                      <div className="flex items-center gap-x-2">
                        <input type="checkbox" name="" id="" />
                        <span>21345215149</span>
                      </div>
                    ) : (
                      "21345215149"
                    )}
                  </td>
                  <td className="px-3 font-normal text-center text-[#5C5C5C] whitespace-nowrap">
                    Inventory Alert
                  </td>
                  <td className="px-3 font-normal text-center text-[#5C5C5C] w-full max-w-[120px]">
                    <div className="line-clamp-2">
                      {item.message || "AirPods Pro stock below..."}
                    </div>
                  </td>
                  <td className="px-3 font-normal text-center text-[#5C5C5C]">
                    <div className="border border-[#F39D08] rounded-full text-[#F39D08] flex items-center justify-between px-3 py-2 w-[90px] cursor-pointer">
                      <span className="text-[12px]">unread</span>
                      <IoMdArrowDropup />
                    </div>
                  </td>
                  <td className="px-3 font-normal text-center text-[#5C5C5C] whitespace-nowrap">
                    Inventory Alert
                  </td>
                  <td className="px-3 font-normal text-center text-[#5C5C5C]">
                    Jul 7, 2025
                  </td>
                  <td className="px-3 font-normal text-center text-[#1D7BBB] text-sm">
                    <div className="flex items-center gap-x-2">
                      {activeTab === null && (
                        <>
                          <div className="flex items-center gap-x-1 cursor-pointer">
                            <span>Edit</span>
                            <RiPencilFill />
                          </div>{" "}
                          <span>|</span>{" "}
                        </>
                      )}
                      <div className="flex items-center gap-x-1 cursor-pointer">
                        <span>View</span>
                        <PiMagnifyingGlassFill />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationTable;
