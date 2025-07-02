'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
  { month: 'Jan', profit: 0 },
  { month: 'Feb', profit: 2000 },
  { month: 'Mar', profit: 2200 },
  { month: 'Apr', profit: 4500 },
  { month: 'May', profit: 2000 },
  { month: 'Jun', profit: 3000 },
  { month: 'Jul', profit: 8500 },
  { month: 'Aug', profit: 10000 },
  { month: 'Sep', profit: 7000 },
  { month: 'Oct', profit: 8000 },
  { month: 'Nov', profit: 6500 },
  { month: 'Dec', profit: 2500 },
];

export default function ProfitByMonth() {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Profit By Month</h3>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#60A5FA" />
      </BarChart>
    </>
  );
}
