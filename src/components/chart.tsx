import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Test 1", score: 78 },
  { name: "Test 2", score: 90 },
  { name: "Test 3", score: 85 },
  { name: "Test 4", score: 88 },
];

export default function ProgressChart() {
  return (
    <div className="w-full h-64  max-w-md mx-auto">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="score"
            stroke="#1d4ed8"
            strokeWidth={3}
          />
          <CartesianGrid stroke="#e5e7eb" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
