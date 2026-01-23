import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const today = 5461;
const expected = 8085;
const progress = Math.round((today / expected) * 100);

const data = [
  { name: "Completed", value: today },
  { name: "Remaining", value: expected - today },
];

const COLORS = ["#5B4DFF", "#EEF0FF"];

const UserProgressChart = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* Left */}
      <div>
        <p className="text-3xl font-semibold text-[#222222]">5,461</p>
        <p className="text-sm text-[#6B7280]">Today</p>
      </div>

      {/* Center ring */}
      <div className="w-[120px] h-[120px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={42}
              outerRadius={50}
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs text-[#5B4DFF] font-medium">USERS</p>
          <p className="text-sm font-semibold text-[#5B4DFF]">{progress}%</p>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <p className="text-3xl font-semibold text-[#222222]">8,085</p>
        <p className="text-sm text-[#6B7280]">Expected</p>
      </div>
    </div>
  );
};

export default UserProgressChart;
