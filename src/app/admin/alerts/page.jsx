'use client';
import { useState } from 'react';
 import { XMarkIcon, ExclamationTriangleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function AlertsPage() {
  const [typeFilter, setTypeFilter] = useState('All Types');

  return (
    <div className="flex min-h-screen">

      {/* Main Content */}
       <div className="flex-1 bg-gray-50 p-6"> 
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Alerts & Notification</h1>
            <p className="text-gray-500 text-sm mt-1">Stay updated with important fleet notifications and alerts</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700">Mark All Read</button>
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">2 Unread</span>
          </div>
        </div> 

        {/* Search & Filter */}
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="search client........"
            className="border rounded-md px-4 py-2 w-1/3 text-sm"
          />
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-md">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h14M3 6h18M3 14h6" />
              </svg>
            </button>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              <option>All Types</option>
              <option>Document</option>
              <option>Loss</option>
            </select>
          </div>
        </div> 

        {/* Alert Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Insurance Expiring Cards */}
           {[1, 2].map((_, index) => (
            <div
              key={index}
              className="border border-red-300 bg-white rounded-md p-4 relative shadow-sm flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <DocumentTextIcon className="h-5 w-5 text-red-500" />
                  <h2 className="font-semibold text-red-600 text-sm">Insurance Expiring</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-blue-600 text-xs">Mark Read</button>
                  <XMarkIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
              <div className="text-sm">
                <p><span className="font-medium">Client :</span> ABC Corporation</p>
                <p><span className="font-medium">Vehicle :</span> GJ-01-XY-7890</p>
                <p className="text-red-500"><span className="font-medium">Due:</span> 11/20/2024</p>
              </div>
              <button className="mt-2 text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-md w-fit">
                Renew Document
              </button>
            </div>
          ))}
        </div> 

        {/* Combined Card: Loss & Expense */}
         <div className="mt-6 bg-white border rounded-md p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Loss due to Vehicles */}
             <div> 
              <div className="flex items-center gap-2 mb-2">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                <h2 className="font-semibold text-sm text-red-600">Loss due to Vehicles</h2>
              </div>
              <div className="text-sm">
                <p><span className="font-medium">Vehicle :</span> GJ-01-XY-7890</p>
                <p><span className="font-medium">Client :</span> ABC Corporation</p>
              </div>
              <div className="mt-3 bg-red-100 text-red-700 p-3 rounded-md text-sm">
                <p className="font-bold">Total Loss <span className="float-right font-bold">₹12,500</span></p>
                <p>Loss Percentage <span className="float-right font-medium">27.5%</span></p>
              </div>
            </div> 

            {/* Expense Breakdown */}
             <div>
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold text-sm">Expense Breakdown</h2>
                <XMarkIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
              <div className="text-sm space-y-1">
                <p>Cng: <span className="float-right font-medium">₹20,000</span></p>
                <p>Maintenance: <span className="float-right font-medium">₹5,000</span></p>
                <p>Driver: <span className="float-right font-medium">₹18,000</span></p>
                <hr className="my-2" />
                <p className="text-green-600 font-semibold">Total Expenses: <span className="float-right">₹42,000</span></p>
                <p className="text-red-600 font-semibold">Income: <span className="float-right">₹30,000</span></p>
              </div>
              <button className="mt-4 text-sm px-3 py-1 bg-green-100 text-green-700 rounded">
                Review Pricing
              </button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
