import { Pencil } from "lucide-react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "5,240",
      bg: "bg-[#D2FFEB]",
      icon: "/box.png",
      lineColor: "bg-[#2A9F0F]",
    },
    {
      title: "Registered Users",
      value: "12,380",
      bg: "bg-[#C7E8FF]",
      icon: "/teacher.png",
      lineColor: "bg-[#0071C0]",
    },
    {
      title: "Monthly Sales",
      value: "₹4,52,000",
      bg: "bg-[#CFC7FF]",
      icon: "/finance.png",
      lineColor: "bg-[#5B47CC]",
    },
    {
      title: "Active Carts",
      value: "153",
      bg: "bg-[#FFDDC4]",
      icon: "/cart.png",
      lineColor: "bg-[#F39D08]",
    },
    {
      title: "Returns",
      value: "78",
      bg: "bg-[#FFD4DB]",
      icon: "/assignment.png",
      lineColor: "bg-[#FF1919]",
    },
    {
      title: "New Signups Today",
      value: "34",
      bg: "bg-[#FDFFD3]",
      icon: "/article.png",
      lineColor: "bg-[#F39D08]",
    },
  ];

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
    <div className="flex-1 flex justify-between mt-8">
      {/* right content */}
      <div className="flex-1 w-full max-w-[980px] ">
        {/* stats cards */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-y-5 place-items-center">
            {/* 1st card */}
            {stats.map((s, i) => (
              <div
                key={s.title}
                className={`${s.bg} rounded-3xl w-[300px] shadow-[2px_5px_6px_0_rgba(0,0,0,0.1)] px-6 py-3 flex flex-col gap-y-2`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[#222222] space-y-5">
                    <p className="text-sm">{s.title}</p>
                    <p className="text-2xl">{s.value}</p>
                  </div>
                  <img
                    src={s.icon}
                    alt="box"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className={`h-[1px] w-full ${s.lineColor}`}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-2 h-2 rounded-full ${s.lineColor}`}></div>
                  <p className="text-[#909090] text-[10px]">This Month Data</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* table */}
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
                <span className="text-[#222222] text-[16px]">
                  4000 Customers
                </span>
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
      </div>

      {/* left content */}
      <div className="flex flex-col px-4 gap-y-4">
        {/* notifications */}
        <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-x-2">
            <GoBellFill className="size-8 text-[#F39D08]" />
            <span className="text-2xl font-medium text-[#222222]">
              Notifications
            </span>
          </div>
          <div className="h-[1px] w-full border border-[#E4E4E4]"></div>

          {/* Notificationss  */}
          <div className="relative w-full bg-[#F7F7F7] flex items-center px-3 py-2 rounded-2xl gap-x-3">
            <GoBellFill size={20} />
            <span className="text-[16px] text-[#696969]">One new Order</span>
            <span className="absolute  right-0 bottom-0 text-[10px] text-[#8E8E8E]">
              50 min ago
            </span>
          </div>
          <div className="relative w-full bg-[#F7F7F7] flex items-center px-3 py-2 rounded-2xl gap-x-3">
            <GoBellFill size={20} />
            <span className="text-[16px] text-[#696969]">
              We got one return
            </span>
            <span className="absolute  right-0 bottom-0 text-[10px] text-[#8E8E8E]">
              1hr ago
            </span>
          </div>
          <div className="relative w-full bg-[#F7F7F7] flex items-center px-3 py-2 rounded-2xl gap-x-3">
            <GoBellFill size={20} />
            <span className="text-[16px] text-[#696969]">Unknown Messages</span>
            <span className="absolute  right-0 bottom-0 text-[10px] text-[#8E8E8E]">
              2hr ago
            </span>
          </div>
        </div>

        {/* pie chart */}
        <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
          <h3 className="text-2xl text-[#5A5A5A]">Sales by categories</h3>
          <div className="w-auto">
            <img src="/pie.png" alt="pie" />
          </div>
        </div>

        {/* bar chart */}
        <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl text-[#5A5A5A]">Revenue</h3>

            <button className="flex items-center gap-x-2 p-3 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-full">
              <span className="text-[10px] text-[#222222]">Monthly</span>
              <MdKeyboardArrowUp size={16} color="1D7BBB" />
            </button>
          </div>
          <div className="w-auto">
            <img src="/bar.png" alt="pie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
