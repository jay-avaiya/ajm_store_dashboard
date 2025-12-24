import { Pencil } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Table = () => {
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
      {/* headers */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#222222] text-[32px]">Recent Orders Table</h1>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center w-[179px]">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#B0B0B0] placeholder:text-[#8E8E8E] outline-none py-3 px-3  rounded-full w-full bg-white"
            />
            <FaMagnifyingGlass className="size-5 absolute right-3 text-[#1D7BBB]" />
          </div>
          <div className="w-[179px] bg-white border border-[#B0B0B0] rounded-full flex items-center justify-center py-3">
            <span className="text-[#222222] text-[16px]">4000 Customers</span>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="h-[1px] w-full border border-[#8E8E8E]"></div>

      <div className="overflow-x-auto border border-[#B0B0B0] bg-white rounded-3xl">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-[120px]" />
            <col className="w-[240px]" />
            <col className="w-[120px]" />
            <col className="w-[140px]" />
            <col className="w-[160px]" />
            <col className="w-[120px]" />
          </colgroup>

          <thead>
            <tr className="h-[64px] border-b border-[#E5E7EB]">
              <th className="px-6 font-normal text-center">ID</th>
              <th className="px-6 font-normal text-center">Customer</th>
              <th className="px-6 font-normal text-center">Total</th>
              <th className="px-6 font-normal text-center">Status</th>
              <th className="px-6 font-normal text-center">Date</th>
              <th className="px-6 font-normal text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="h-[64px] border-b border-[#E5E7EB] last:border-none"
              >
                <td className="px-6 text-center">{o.id}</td>
                <td className="px-6 text-center truncate">{o.customer}</td>
                <td className="px-6 text-center whitespace-nowrap">
                  {o.total}
                </td>
                <td className="px-6 text-center">{o.status}</td>
                <td className="px-6 text-center">{o.date}</td>
                <td className="px-6 text-center">
                  <div className="flex justify-center items-center gap-2 text-[#1D7BBB] cursor-pointer">
                    <span>View</span>
                    <Pencil className="size-4" />
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

export default Table;
