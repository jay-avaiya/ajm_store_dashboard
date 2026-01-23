import React, { useState } from "react";

const NotificationSetting = () => {
  const [settings, setSettings] = useState({
    newOrder: true,
    lowStock: true,
    failedPayment: false,
    adminEmail: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-[300px] bg-white rounded-3xl px-5 py-4 space-y-3 shadow-[0_6px_7px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-center">
        <span className="text-2xl font-medium text-[#222222]">
          Notification Settings
        </span>
      </div>

      <div className="h-[1px] w-full border border-[#E4E4E4]" />

      <div className="flex flex-col gap-y-4">
        {/* New Order Alerts */}
        <ToggleRow
          label="New Order Alerts"
          checked={settings.newOrder}
          onChange={() => toggle("newOrder")}
          id="new-order"
        />

        {/* Low Stock Warnings */}
        <ToggleRow
          label="Low Stock Warnings"
          checked={settings.lowStock}
          onChange={() => toggle("lowStock")}
          id="low-stock"
        />

        {/* Failed Payment Alerts */}
        <ToggleRow
          label="Failed Payment Alerts"
          checked={settings.failedPayment}
          onChange={() => toggle("failedPayment")}
          id="failed-payment"
        />

        {/* Admin Notification Email */}
        <ToggleRow
          label="Admin Notification Email"
          checked={settings.adminEmail}
          onChange={() => toggle("adminEmail")}
          id="admin-email"
        />
      </div>
    </div>
  );
};

const ToggleRow = ({ label, checked, onChange, id }) => (
  <div className="flex w-full items-center justify-between">
    <p>{label}</p>

    <div className="relative inline-block w-11 h-5">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-[#34C759] cursor-pointer transition-colors duration-300"
      />
      <label
        htmlFor={id}
        className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[#34C759] cursor-pointer"
      />
    </div>
  </div>
);

export default NotificationSetting;
