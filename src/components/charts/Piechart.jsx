import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Tablet Case", value: 56, gradient: ["#EF4863", "#892939"] },
    { name: "Apple Watch case", value: 40, gradient: ["#FF9F58", "#FF9F58"] },
    { name: "Samsung case", value: 60, gradient: ["#9A8EE0", "#544D7A"] },
    { name: "Other Devices", value: 80, gradient: ["#3290D0", "#19496A"] },
    { name: "Phone Case", value: 89, gradient: ["#50D699", "#2A7050"] },
  ];

  const renderCustomLabel = (props) => {
    const { cx, cy, midAngle, outerRadius, name } = props;
    const RADIAN = Math.PI / 180;

    // Position label outside the pie
    const radius = outerRadius + 15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Determine text anchor based on position
    const textAnchor = x > cx ? "start" : "end";

    // Split text into multiple lines if too long
    const words = name.split(" ");
    const lines = [];

    if (words.length > 1) {
      // Split into 2 lines for longer names
      const mid = Math.ceil(words.length / 3);
      lines.push(words.slice(0, mid).join(" "));
      lines.push(words.slice(mid).join(" "));
    } else {
      lines.push(name);
    }

    return (
      <text
        x={x}
        y={y}
        fill="#5A5A5A"
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize={10}
        fontWeight="500"
      >
        {lines.map((line, i) => (
          <tspan key={i} x={x} dy={i === 0 ? (lines.length > 1 ? -6 : 0) : 12}>
            {line}
          </tspan>
        ))}
      </text>
    );
  };

  const renderInnerLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight="600"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="h-64 min-h-[16rem]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 45, bottom: 20, left: 45 }}>
          <defs>
            {data.map((entry, index) => (
              <linearGradient
                key={index}
                id={`grad-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={entry.gradient[0]} />
                <stop offset="100%" stopColor={entry.gradient[1]} />
              </linearGradient>
            ))}
          </defs>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={2}
            label={renderCustomLabel}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={`slice-${index}`} fill={`url(#grad-${index})`} />
            ))}
          </Pie>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={2}
            label={renderInnerLabel}
            labelLine={false}
            isAnimationActive={false}
          >
            {data.map((_, index) => (
              <Cell key={`inner-${index}`} fill="transparent" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
