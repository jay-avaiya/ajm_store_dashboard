import React from "react";
import { BiBrightness } from "react-icons/bi";
import {
  MdAddAlert,
  MdAmpStories,
  MdAutoGraph,
  MdCampaign,
  MdExitToApp,
  MdOutlineInventory,
} from "react-icons/md";
import { PiCodesandboxLogo, PiHandCoinsFill } from "react-icons/pi";
import { RiMoneyRupeeCircleFill, RiUser3Fill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { VscWatch } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    {
      label: "Dashboard",
      icon: TbLayoutDashboardFilled,
      path: "/dashboard",
    },
    {
      label: "Product Management",
      icon: VscWatch,
      path: "/dashboard/product-management",
    },
    {
      label: "User Management",
      icon: RiUser3Fill,
      path: "/dashboard/user-management",
    },
    {
      label: "Orders & Returns Section",
      icon: PiCodesandboxLogo,
      path: "/dashboard/orders-and-returns",
    },
    {
      label: "Promotions & Newsletter Tools",
      icon: MdCampaign,
      path: "/dashboard/promotion",
    },
    {
      label: "Notification Panel",
      icon: MdAddAlert,
      path: "/dashboard/notification",
    },
    {
      label: "Sales Analytics",
      icon: MdAutoGraph,
      path: "/dashboard/sales-analytics",
    },
    {
      label: "Inventory Tracking",
      icon: MdOutlineInventory,
      path: "/dashboard/inventory-tracking",
    },
    {
      label: "Payment Gateway Integration",
      icon: RiMoneyRupeeCircleFill,
      path: "/dashboard/payment",
    },
    {
      label: "Shipping & Delivery Settings",
      icon: PiHandCoinsFill,
      path: "/dashboard/shipping-delivery-setting",
    },
    {
      label: "Apps & Integrations",
      icon: MdAmpStories,
      path: "/dashboard/app-integrations",
    },
    {
      label: "Settings",
      icon: BiBrightness,
      path: "/dashboard/setting",
    },
    {
      label: "Logout",
      icon: MdExitToApp,
      path: "/logout",
    },
  ];

  return (
    <div className="w-full max-w-[250px] p-4 font-poppins">
      <div className="bg-white px-2 py-4 rounded-3xl w-full">
        <ul className="space-y-3">
          {menu.map((m, i) => {
            const Icon = m.icon;
            const isDashboard = m.path === "/dashboard";
            return (
              <li key={m.label}>
                <NavLink to={m.path} end={isDashboard}>
                  {({ isActive }) => (
                    <div
                      className={`${
                        isActive
                          ? "flex items-center gap-x-4 text-white bg-black rounded-full cursor-pointer p-3 transition-all duration-300"
                          : "flex items-center gap-x-4 text-[#808080] cursor-pointer p-3 hover:bg-[#F1F2F4] rounded-full hover:text-black transition duration-200"
                      }`}
                    >
                      <Icon className="size-6" />
                      <span className="text-[16px]">{m.label}</span>
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
