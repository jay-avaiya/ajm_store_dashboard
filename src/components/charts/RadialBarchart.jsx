import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const RadialBarchart = () => {
  const rawData = [
    { name: "Airpods", value: 22, total: 30, fill: "#22C55E" },
    { name: "Phone Cases", value: 13, total: 20, fill: "#EF4444" },
    { name: "iPad Cases", value: 8, total: 10, fill: "#3B82F6" },
  ];

  const data = rawData.map((item) => ({
    ...item,
    percent: Math.round((item.value / item.total) * 100),
  }));

  return (
    <div className="flex items-center gap-4">
      {/* Radial chart */}
      <div className="h-64 w-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            barSize={10}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            {/* 🔥 THIS IS THE MAGIC FIX */}
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

            <RadialBar
              dataKey="percent"
              cornerRadius={50}
              background
              clockWise
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Right stats */}
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between border rounded-xl p-2 w-32"
            style={{ borderColor: item.fill }}
          >
            <div>
              <p className="text-xs font-medium" style={{ color: item.fill }}>
                {item.name}
              </p>
              <p className="text-sm font-semibold text-[#222222]">
                {item.value}
                <span className="text-xs text-[#6B7280]">
                  {" "}
                  / {item.total} ({item.percent}%)
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadialBarchart;
