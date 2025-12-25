import { Pencil } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";

const AppTable = () => {
  const orders = [
    {
      id: "21345215149",
      customer: "Yash Choudhary",
      total: "₹1,499",
      status: "Shipped",
      date: "Jul 7, 2025",
    },
    {
      id: "21345215150",
      customer: "Aman Patel",
      total: "₹2,299",
      status: "Pending",
      date: "Jul 7, 2025",
    },
    {
      id: "21345215151",
      customer: "Riya Sharma",
      total: "₹3,999",
      status: "Cancelled",
      date: "Jul 6, 2025",
    },
    {
      id: "21345215149",
      customer: "Yash Choudhary",
      total: "₹1,499",
      status: "Shipped",
      date: "Jul 7, 2025",
    },
    {
      id: "21345215150",
      customer: "Aman Patel",
      total: "₹2,299",
      status: "Pending",
      date: "Jul 7, 2025",
    },
    {
      id: "21345215151",
      customer: "Riya Sharma",
      total: "₹3,999",
      status: "Cancelled",
      date: "Jul 6, 2025",
    },
    {
      id: "21345215149",
      customer: "Yash Choudhary",
      total: "₹1,499",
      status: "Shipped",
      date: "Jul 7, 2025",
    },
  ];

  return (
    <div className="space-y-4 mt-5">
      <div className="overflow-x-auto border border-[#B0B0B0] bg-white rounded-3xl">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="h-[64px] border-b border-[#E5E7EB]">
              <th className="px-6 font-normal text-center">User ID</th>
              <th className="px-6 font-normal text-center">Name</th>
              <th className="px-6 font-normal text-center">Device</th>
              <th className="px-6 font-normal text-center">Last Active</th>
              <th className="px-6 font-normal text-center">Location</th>
              <th className="px-6 font-normal text-center">Status</th>
              <th className="px-6 font-normal text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <tr className="h-[64px] border-b border-[#E5E7EB]">
                <td className="px-6 font-normal text-center text-[#5C5C5C]">
                  21345215149
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C] whitespace-nowrap text-ellipsis">
                  Rahul Shetty
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C]">
                  Android
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C] whitespace-nowrap text-ellipsis">
                  Jul 8, 09:22 AM
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C] whitespace-nowrap text-ellipsis">
                  Mumbai, IN
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C]">
                  <div className="border border-[#34C759] rounded-full text-[#34C759] flex items-center justify-between px-3 py-2 w-[88px]">
                    <span className="text-[12px]">Active</span>
                    <IoMdArrowDropup className="size-3" />
                  </div>
                </td>
                <td className="px-6 font-normal text-center text-[#5C5C5C]">
                  <div className="flex items-center gap-x-4">
                    <div className="flex justify-center items-center gap-2 text-[#1D7BBB] cursor-pointer">
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

export default AppTable;
