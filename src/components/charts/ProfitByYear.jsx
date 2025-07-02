'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
  { year: '2016', profit: 45 },
  { year: '2017', profit: 70 },
  { year: '2018', profit: 60 },
  { year: '2019', profit: 40 },
  { year: '2020', profit: 55 },
];

export default function ProfitByYear() {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Profit By Year</h3>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#06B6D4" strokeWidth={3} />
      </LineChart>
    </>
  );
}
