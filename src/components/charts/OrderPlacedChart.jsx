import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Week 1", value: 45, color: "#FBBF24" },
  { name: "Week 2", value: 65, color: "#3B82F6" },
  { name: "Week 3", value: 55, color: "#34D399" },
  { name: "Week 4", value: 75, color: "#A78BFA" },
];

const OrderPlacedChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          barCategoryGap="30%"
        >
          {/* Grid */}
          <CartesianGrid
            stroke="#E5E7EB"
            vertical={false}
            strokeDasharray="3 3"
          />

          {/* X Axis */}
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
          />

          {/* Y Axis */}
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
            domain={[0, 80]}
            ticks={[0, 20, 40, 60, 80]}
          />

          {/* Bars */}
          <Bar
            dataKey="value"
            label={{ position: "top", fontSize: 10 }}
            radius={[20, 20, 20, 20]}
            maxBarSize={28}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderPlacedChart;
