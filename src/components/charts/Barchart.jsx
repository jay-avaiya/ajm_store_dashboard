// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// const data = [
//   { name: "Jan", value: 40, status: "Low" },
//   { name: "Feb", value: 70, status: "Improved" },
//   { name: "Mar", value: 50, status: "Low" },
//   { name: "Apr", value: 85, status: "Improved" },
//   { name: "May", value: 45, status: "Low" },
//   { name: "Jun", value: 95, status: "Good" },
// ];

// const getStatusColor = (status) => {
//   if (status === "Low") return "#FB923C";
//   return "#22C55E";
// };

// const renderTopLabel = ({ x, y, width, payload }) => {
//   if (!payload) return null;

//   return (
//     <g>
//       <rect
//         x={x + width / 2 - 28}
//         y={y - 24}
//         width={56}
//         height={20}
//         rx={10}
//         fill="#fff"
//         stroke={getStatusColor(payload.status)}
//       />
//       <text
//         x={x + width / 2}
//         y={y - 12}
//         textAnchor="middle"
//         fontSize={10}
//         fill={getStatusColor(payload.status)}
//         fontWeight="600"
//       >
//         {payload.status}
//       </text>
//     </g>
//   );
// };

// const Barchart = () => {
//   return (
//     <div className="h-64">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           margin={{ top: 40, right: 10, left: 10, bottom: 20 }}
//         >
//           {/* gradient definition */}
//           <defs>
//             <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#60A5FA" />
//               <stop offset="100%" stopColor="#93C5FD" />
//             </linearGradient>
//           </defs>

//           <CartesianGrid stroke="#E5E7EB" vertical={false} />
//           <XAxis dataKey="name" tickLine={false} axisLine={false} />
//           <YAxis width={25} axisLine={false} tickLine={false} />

//           <Bar
//             dataKey="value"
//             radius={[20, 20, 20, 20]}
//             barSize={20}
//             label={renderTopLabel}
//           >
//             {data.map((_, index) => (
//               <Cell key={index} fill="url(#barGradient)" />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Barchart;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { name: "Jan", value: 65, status: "Low" },
  { name: "Feb", value: 85, status: "Improved" },
  { name: "Mar", value: 72, status: "Low" },
  { name: "Apr", value: 93, status: "Improved" },
  { name: "May", value: 68, status: "Low" },
  { name: "Jun", value: 98, status: "Good" },
];

const getStatusColor = (status) => {
  if (status === "Low") return "#FB923C";
  if (status === "Improved") return "#22C55E";
  return "#22C55E";
};

const CustomLabel = (props) => {
  const { x, y, width, value, index } = props;
  const status = data[index]?.status;

  if (!status) return null;

  const labelWidth = 45;
  const labelHeight = 16;
  const labelX = x + width / 2 - labelWidth / 2;
  const labelY = y - 30;

  return (
    <g>
      <rect
        x={labelX}
        y={labelY}
        width={labelWidth}
        height={labelHeight}
        rx={11}
        fill="#fff"
        stroke={getStatusColor(status)}
        strokeWidth={1.5}
      />
      <text
        x={x + width / 2}
        y={labelY + labelHeight / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={8}
        fill={getStatusColor(status)}
        fontWeight="500"
      >
        {status}
      </text>
    </g>
  );
};

const Barchart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 5, left: -20, bottom: 5 }}
          barCategoryGap="20%"
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E88E5" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#E5E7EB"
            vertical={false}
            strokeDasharray="0"
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <YAxis
            width={56}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            tickFormatter={(value) => `${value}`}
          />

          <Bar dataKey="value" radius={[15, 15, 15, 15]} maxBarSize={15}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill="url(#barGradient)" />
            ))}
            <LabelList content={<CustomLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
