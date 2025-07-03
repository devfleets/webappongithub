'use client';
import { useParams, useRouter } from 'next/navigation';

export default function ClientViewPage() {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 space-y-6">

        {/* Header Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Company Info */}
          <div className="bg-white p-4 rounded shadow col-span-1">
            <h2 className="font-semibold text-sm mb-2 text-[#0E1F51]">🏢 Company Information</h2>
            <div className="text-sm space-y-1">
              <p>Contact Person: Aviraj Mahadik</p>
              <p>Email: john@abccorp.com</p>
              <p>Phone: +91-9876543210</p>
              <p>Address: 123 Business Park, Mumbai</p>
              <p>Client Since: 1/15/2023</p>
              <p className="text-green-600 font-medium">🟢 Active</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white p-4 rounded shadow col-span-2">
            <h2 className="font-semibold text-sm mb-2 text-[#0E1F51]">📊 Performance Metrics</h2>
            <div className="grid grid-cols-5 gap-2 text-sm">
              <div className="bg-blue-100 rounded p-2">🚚 Vehicles<br /><strong>45</strong></div>
              <div className="bg-green-100 rounded p-2">🧍 Drivers<br /><strong>45</strong></div>
              <div className="bg-purple-100 rounded p-2">📈 Total Trips<br /><strong>45</strong></div>
              <div className="bg-red-100 rounded p-2">🔥 Active Trips<br /><strong>45</strong></div>
            </div>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-sm mb-4 text-[#0E1F51]">💰 Financial Overview</h2>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="bg-gray-50 p-2 rounded border text-green-600 font-semibold">Monthly Revenue<br />₹1,250,000</div>
            <div className="bg-gray-50 p-2 rounded border text-blue-600 font-semibold">Fuel Costs<br />₹1,250,000</div>
            <div className="bg-gray-50 p-2 rounded border text-red-600 font-semibold">Maintenance<br />₹1,250,000</div>
          </div>
        </div>

        {/* Details & Billing Details */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column - Details */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-sm mb-4 text-[#0E1F51]">🧾 Details</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>Monthly Billing: ₹1,250,000</p>
              <p>Freight: ₹1,250,000</p>
              <p>Welfare Payment: ₹1,250,000</p>
              <p>Fuel Expenses: ₹1,250,000</p>
              <p>Vehicle EMI: ₹1,250,000</p>
              <p>Other Expenses: ₹1,250,000</p>
              <p>Salary: ₹1,250,000</p>
              <p>Unpaid Amount: ₹1,250,000</p>
            </div>
          </div>

          {/* Right Column - Billing Details */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-sm mb-4 text-[#0E1F51]">📄 Billing Details</h2>
            <div className="text-sm space-y-2">
              <p>Bill Month: June</p>
              <p>Bill Year: 2025</p>
              <p>Invoice No: 25-PMCO-245667</p>
              <p>Invoice Date: 11-02-2025</p>
              <p>Invoice Amount: ₹1,250,000</p>
              <p>Final Amount: ₹1,250,000</p>
              <p>Security Deposit: ₹1,250,000</p>
              <p>Received Amount: ₹1,250,000</p>
            </div>
          </div>
        </div>

        {/* All Client Entries */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-sm mb-4 text-[#0E1F51]">📋 All Client Entries</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Date</th>
                <th className="p-2">Type</th>
                <th className="p-2">Description</th>
                <th className="p-2">Vehicle/Driver</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
                <th className="p-2">Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">2024-01-22</td>
                <td className="p-2">Fuel</td>
                <td className="p-2">Diesel for Fleet Vehicles</td>
                <td className="p-2">MH-01-AB-1234 / Rajesh Kumar</td>
                <td className="p-2">₹25,000</td>
                <td className="p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span></td>
                <td className="p-2">₹1,250,000</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">2024-01-20</td>
                <td className="p-2">Maintenance</td>
                <td className="p-2">Vehicle Service & Repair</td>
                <td className="p-2">MH-01-AB-1234 / Rajesh Kumar</td>
                <td className="p-2">₹25,000</td>
                <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                <td className="p-2">₹1,250,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
