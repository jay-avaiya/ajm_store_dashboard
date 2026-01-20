import { Pencil } from "lucide-react";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const PaymentTable = ({ view, setView }) => {
  return (
    <div className="relative space-y-4 mt-5">
      <div className="overflow-x-auto border border-[#B0B0B0] bg-white rounded-3xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[64px] border-b border-[#E5E7EB]">
              <th className="px-6 font-normal text-center">Transaction ID</th>
              <th className="px-6 font-normal text-center">Gateway</th>
              <th className="px-6 font-normal text-center">Date</th>
              <th className="px-6 font-normal text-center whitespace-nowrap">
                User
              </th>
              <th className="px-6 font-normal text-center whitespace-nowrap">
                Amount
              </th>
              <th className="px-6 font-normal text-center">Status</th>
              <th className="px-6 font-normal text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <tr className="h-[64px] border-b border-[#E5E7EB]" key={item}>
                <td className="px-3 font-normal text-center text-[#5C5C5C]">
                  21345215149
                </td>
                <td className="px-4 font-normal text-center text-[#5C5C5C]">
                  Razorpay
                </td>
                <td className="px-3 font-normal text-center text-[#5C5C5C]">
                  Jul 7, 2025
                </td>
                <td className="px-3 font-normal text-center text-[#5C5C5C]">
                  Rahul Sharma
                </td>
                <td className="px-3 font-normal text-center text-[#5C5C5C]">
                  ₹1,299
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C]">
                  <div className="border border-[#34C759] rounded-full text-[#34C759] flex items-center justify-between px-3 py-2 w-[88px]">
                    <span className="text-[12px]">Active</span>
                    <IoMdArrowDropup className="size-3" />
                  </div>
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C]">
                  <div className="flex items-center gap-x-4">
                    <div
                      className="flex justify-center items-center gap-2 text-[#1D7BBB] cursor-pointer"
                      onClick={() => setView((prev) => !prev)}
                    >
                      <span>View</span>
                      <Pencil className="size-4" />
                    </div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className=" accent-[#1D7BBB]"
                    />
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

export default PaymentTable;
