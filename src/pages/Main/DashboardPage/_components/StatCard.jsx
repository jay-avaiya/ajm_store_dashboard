import React from "react";

const StatCard = () => {
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

  return (
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
  );
};

export default StatCard;
