'use client';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Pending Bills', value: 33.3 },
  { name: 'Received Bills', value: 66.7 },
];

const COLORS = ['#0F172A', '#60A5FA'];

export default function PendingVsReceived() {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Pending vs Received Bill</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  );
}

// This component renders a pie chart comparing pending and received bills.
// It uses the Recharts library to create the chart and displays it with a title and a tooltip