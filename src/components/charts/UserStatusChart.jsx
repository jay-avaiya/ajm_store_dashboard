import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Active", value: 65, color: "#1E88E5" },
  { name: "New", value: 25, color: "#22C55E" },
  { name: "Inactive", value: 10, color: "#EF4444" },
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
  fill,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 18;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const lineX = cx + outerRadius * Math.cos(-midAngle * RADIAN);
  const lineY = cy + outerRadius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      {/* connector line */}
      <line
        x1={lineX}
        y1={lineY}
        x2={x}
        y2={y}
        stroke={fill}
        strokeWidth={1.5}
      />

      {/* label */}
      <text
        x={x}
        y={y}
        fill={fill}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={11}
        fontWeight={500}
      >
        {name}
      </text>
    </g>
  );
};

const UserStatusChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            paddingAngle={4}
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStatusChart;
