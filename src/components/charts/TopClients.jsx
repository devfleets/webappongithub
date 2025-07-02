'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Client A', value: 34.86 },
  { name: 'Client B', value: 28.97 },
  { name: 'Client C', value: 28.88 },
  { name: 'Client D', value: 22.9 },
  { name: 'Client E', value: 21.31 },
];

export default function TopClients() {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Top 5 Clients</h3>
      <BarChart width={500} height={300} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Bar dataKey="value" fill="#7C3AED" />
        <Tooltip />
        <Legend />
      </BarChart>
    </>
  );
}

// This component renders a bar chart showing the top 5 clients based on their values.