import React from "react";

const NotificationPercentage = () => {
  const stats = [
    {
      label: "Read",
      value: 60.28,
      color: "bg-indigo-500",
    },
    {
      label: "Unread",
      value: 68.28,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="grid grid-cols-3 text-sm text-[#5A5A5A] font-medium">
        <span>Notification</span>
        <span className="col-span-1"></span>
        <span className="text-right">Value</span>
      </div>

      {/* Rows */}
      {stats.map((item) => (
        <div key={item.label} className="grid grid-cols-3 items-center gap-3">
          {/* Label Left One */}
          <span className="text-sm text-[#5A5A5A]">{item.label}</span>

          {/* Progress bar */}
          <div className="col-span-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${item.color}`}
              style={{ width: `${item.value}%` }}
            />
          </div>

          {/* Percentage in right */}
          <span className="text-sm text-[#5A5A5A] text-right">
            {item.value.toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default NotificationPercentage;
