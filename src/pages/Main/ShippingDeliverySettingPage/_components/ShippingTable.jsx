import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { RiPencilFill } from "react-icons/ri";

const ShippingTable = () => {
  return (
    <div className="space-y-4 mt-5">
      <div className="border border-[#B0B0B0] bg-white rounded-3xl overflow-x-auto lg:overflow-x-visible">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="h-[64px] border-b border-[#E5E7EB]">
              <th className="px-4 text-center font-normal w-[70px]">ID</th>
              <th className="px-4 text-center font-normal">Name</th>
              <th className="px-4 text-center font-normal">Zone</th>
              <th className="px-4 text-center font-normal">Courier</th>
              <th className="px-4 text-center font-normal whitespace-nowrap">
                Dispatch Date
              </th>
              <th className="px-4 text-center font-normal w-[120px]">Status</th>
              <th className="px-4 text-center font-normal whitespace-nowrap">
                Expected Delivery
              </th>
              <th className="px-4 text-center font-normal w-[140px]">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <tr
                className="h-[56px] border-b last:border-b-0  text-[#5C5C5C]"
                key={_}
              >
                <td className="px-4 text-center">21345215149</td>
                <td className="px-4 text-center">Rohan</td>
                <td className="px-4 text-center">A</td>
                <td className="px-4 text-center">BlueDart</td>
                <td className="px-4 text-center whitespace-nowrap">
                  Jul 6, 2025
                </td>

                <td className="px-4 text-center">
                  <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full">
                    <span>Active</span>
                    <IoMdArrowDropup />
                  </div>
                </td>

                <td className="px-4 text-center whitespace-nowrap">
                  Jul 7, 2025
                </td>

                <td className="px-4 text-center text-[#1D7BBB] text-sm">
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="flex items-center gap-x-1 cursor-pointer">
                      <span>Edit</span>
                      <RiPencilFill />
                    </div>
                    <span>|</span>
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

export default ShippingTable;
