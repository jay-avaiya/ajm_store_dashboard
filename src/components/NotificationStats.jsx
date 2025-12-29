import { PiRecordFill } from "react-icons/pi";

const NotificationStats = () => {
  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-x-2">
        <PiRecordFill className="size-7 text-[#FF1919]" />
        <span className="text-xl font-medium text-[#222222]">
          Inventory Insights
        </span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div className="w-auto h-auto">
        <img src="/noti_stat.png" alt="sales_1.png" className="scale-105" />
      </div>
    </div>
  );
};

export default NotificationStats;
