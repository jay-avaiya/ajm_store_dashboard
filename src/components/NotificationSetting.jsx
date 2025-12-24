import React, { useState } from "react";

const NotificationSetting = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-center">
        <span className="text-2xl font-medium text-[#222222]">
          Notification Settings
        </span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div className="w-full flex flex-col items-center px-3 py-2 rounded-2xl gap-y-3">
        {/* New Order Alerts */}
        <div className="flex w-full items-center justify-between">
          <p>New Order Alerts</p>

          <div className="relative inline-block w-13 h-5">
            <input
              id="switch-component"
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-[#34C759] cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[#34C759] cursor-pointer"
            />
          </div>
        </div>

        {/*  Low Stock Warnings */}
        <div className="flex w-full items-center justify-between">
          <p>Low Stock Warnings</p>

          <div className="relative inline-block w-13 h-5">
            <input
              id="switch-component"
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-[#34C759] cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[#34C759] cursor-pointer"
            />
          </div>
        </div>

        {/* Failed Payment Alerts */}
        <div className="flex w-full items-center justify-between">
          <p>Failed Payment Alerts</p>

          <div className="relative inline-block w-13 h-5">
            <input
              id="switch-component"
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-[#34C759] cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[#34C759] cursor-pointer"
            />
          </div>
        </div>

        {/* Admin Notification Email */}
        <div className="flex w-full items-center justify-between">
          <p>Admin Notification Email</p>

          <div className="relative inline-block w-13 h-5">
            <input
              id="switch-component"
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-[#34C759] cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[#34C759] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
