import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "Payments",
    confirmed: 850,
    pending: 300,
  },
];

const PaymentStatuschart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          barCategoryGap={40}
          barGap={16} // ✅ gap between bars
        >
          <CartesianGrid
            stroke="#E5E7EB"
            vertical={false}
            strokeDasharray="4 4"
          />

          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis
            domain={[0, 1000]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            tickLine={false}
            axisLine={false}
          />

          <Bar
            dataKey="confirmed"
            fill="#22C55E"
            barSize={24}
            radius={[18, 18, 0, 0]}
          />

          <Bar
            dataKey="pending"
            fill="#FB923C"
            barSize={24}
            radius={[18, 18, 0, 0]}
          />

          <Legend verticalAlign="bottom" iconType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentStatuschart;
