import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Linechart = ({ size }) => {
  const data = [
    { month: "Jan", red: 10, green: 15 },
    { month: "Feb", red: 20, green: 25 },
    { month: "Mar", red: 22, green: 25 },
    { month: "Apr", red: 25, green: 28 },
    { month: "May", red: 35, green: 30 },
    { month: "Jun", red: 38, green: 32 },
    { month: "Jul", red: 36, green: 28 },
    { month: "Aug", red: 26, green: 30 },
    { month: "Sep", red: 36, green: 32 },
    { month: "Oct", red: 30, green: 34 },
    { month: "Nov", red: 40, green: 36 },
    { month: "Dec", red: 36, green: 45 },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={data}>
          <XAxis
            dataKey={"month"}
            tick={{ fontSize: `${size || 6}`, fill: "#8E8E8E" }}
            axisLine={false}
            tickLine={false}
            interval={0}
            textAnchor="end"
          />
          <YAxis hide />
          <Tooltip />

          <Line
            type="monotone"
            dataKey={"red"}
            stroke="#EF4444"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey={"green"}
            stroke="#22C55E"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
