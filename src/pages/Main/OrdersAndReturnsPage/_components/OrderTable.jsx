import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { LuMapPinPlusInside } from "react-icons/lu";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { RiPencilFill } from "react-icons/ri";

const OrderTable = ({ mode }) => {
  return (
    <div className="space-y-4 mt-5">
      <div className="border border-[#B0B0B0] bg-white rounded-3xl overflow-x-auto lg:overflow-x-visible">
        <table className="w-full border-collapse table-auto">
          <thead>
            {mode !== "return" && (
              <tr className="h-[64px] border-b border-[#E5E7EB]">
                <th className="px-4 text-center font-normal w-[70px] whitespace-nowrap">
                  Order ID
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Customer Name
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Amount Status
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Order
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Order Date
                </th>
                <th className="px-4 text-center font-normal w-[120px]">
                  Delivery
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Action
                </th>
              </tr>
            )}

            {mode === "return" && (
              <tr className="h-[64px] border-b border-[#E5E7EB]">
                <th className="px-4 text-center font-normal w-[70px] whitespace-nowrap">
                  Order ID
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Customer Name
                </th>
                <th className="px-4 text-center font-normal">
                  Reason for return
                </th>
                <th className="px-4 text-center font-normal ">
                  Payment Status
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Order Date
                </th>
                <th className="px-4 text-center font-normal w-[120px]">
                  Pickup
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Action
                </th>
              </tr>
            )}
          </thead>

          {mode !== "return" && (
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <tr
                  className="h-[56px] border-b last:border-b-0  text-[#5C5C5C]"
                  key={_}
                >
                  <td className="px-4 text-center">21345215149</td>
                  <td className="px-4 text-center whitespace-nowrap">
                    Akash Chaudhary
                  </td>

                  <td className="px-4 text-center">
                    <div className="inline-flex items-center gap-x-2  px-2 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full w-[120px]">
                      <span>Online Payment</span>
                      <IoMdArrowDropup />
                    </div>
                  </td>

                  <td className="px-4 text-center">
                    <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full">
                      <span>Delivered</span>
                      <IoMdArrowDropup />
                    </div>
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    5 july, 2025
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    9 july, 2025
                  </td>

                  <td className="px-4 text-center text-[#1D7BBB] text-sm">
                    {mode === "initial" && (
                      <div className="flex items-center justify-center gap-x-2">
                        <div className="flex items-center gap-x-1 cursor-pointer">
                          <span>Edit</span>
                          <RiPencilFill />
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-x-1 cursor-pointer">
                          <span>Track</span>
                          <LuMapPinPlusInside />
                        </div>
                      </div>
                    )}

                    {(mode === "edit" || mode === "delete") && (
                      <div className="flex items-center justify-center gap-x-2">
                        <input type="checkbox" className="accent-[#1D7BBB]" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          )}

          {mode === "return" && (
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <tr
                  className="h-[56px] border-b last:border-b-0  text-[#5C5C5C]"
                  key={_}
                >
                  <td className="px-4 text-center">21345215149</td>
                  <td className="px-4 text-center whitespace-nowrap">
                    Akash Chaudhary
                  </td>

                  <td className="px-4 text-center">Size is not Appropriate</td>

                  <td className="px-4 text-center">
                    <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full">
                      <span>Returned</span>
                      <IoMdArrowDropup />
                    </div>
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    5 july, 2025
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    9 july, 2025
                  </td>

                  <td className="px-4 text-center text-[#1D7BBB] text-sm py-1">
                    <div className="flex flex-col  gap-y-1">
                      <div className="w-[100px] bg-[#1D7BBB] text-white border border-[#1D7BBB] text-[10px] py-1 rounded-full">
                        Approved Refund
                      </div>

                      <div className="w-[100px] text-[#1D7BBB] bg-white border border-[#1D7BBB] text-[10px] py-1 rounded-full">
                        Track Refund
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
