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

      {view && (
        <div className="absolute top-0 -right-79 bg-white border border-[#C0C0C0] shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] w-full max-w-[310px] flex flex-col items-center rounded-3xl h-[380px]">
          <h3 className="text-2xl">View Transaction</h3>

          <div className="w-full h-[1px] border-b border-[#C0C0C0] my-2" />

          <div className="w-full mt-5 flex flex-col gap-y-4 px-3">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full">
              <p className="text-sm text-left">Transaction ID</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[#5C5C5C] text-[10px] justify-self-end">
                21345215149
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full">
              <p className="text-sm text-left">User Name</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[#5C5C5C] text-[10px] justify-self-end">
                Aarav Mehta
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full">
              <p className="text-sm text-left">Payment Gateway</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[#5C5C5C] text-[10px] justify-self-end">
                Paytm
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full">
              <p className="text-sm text-left">Date</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[#5C5C5C] text-[10px] justify-self-end">
                7 July, 2025
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full">
              <p className="text-sm text-left">Amount</p>
              <p className="text-sm text-center">-</p>
              <p className="text-[#5C5C5C] text-[10px] justify-self-end">
                Rs 1,299
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 w-full">
              <p className="text-sm text-left">Status</p>
              <p className="text-sm text-center">-</p>
              <div className="flex items-center gap-x-3 px-4 py-1 text-white text-[10px] justify-self-end bg-[#44D769] rounded-full">
                <span>Active</span>
                <IoMdArrowDropup />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
