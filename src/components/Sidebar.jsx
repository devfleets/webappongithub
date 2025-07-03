'use client';
import {
  FaCarSide, FaUsers, FaChartBar, FaBell, FaCogs,
  FaGasPump, FaExclamationTriangle, FaFileAlt, FaRoute, FaUserFriends
} from 'react-icons/fa';




const menuItems = [
  { name: 'Dashboard', icon: <FaCarSide /> },
  { name: 'Clients', icon: <FaUsers />, path: '/clients' },
  { name: 'Vehicles', icon: <FaCarSide /> },
  { name: 'Drivers', icon: <FaUserFriends /> },
  { name: 'Trips', icon: <FaRoute /> },
  { name: 'Maintenance', icon: <FaCogs /> },
  { name: 'Fuel', icon: <FaGasPump /> },
  { name: 'Records', icon: <FaFileAlt /> },
  { name: 'Alerts', icon: <FaExclamationTriangle /> },
  { name: 'Reports', icon: <FaChartBar /> },
];


// const navLinks = [
//   { href: '/accountant', label: 'Home' },
//   { href: '/accountant/clients', label: 'Client Accounting' },
//   { href: '/accountant/billing', label: 'Tender & Invoices' },
// ];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0F172A] text-white min-h-screen flex flex-col">
      <div className="text-white text-xl font-bold px-6 py-5 flex items-center space-x-2">
        <FaCarSide className="text-blue-400 text-2xl" />
        <span>NextMove</span>
        
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={`flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition ${
              idx === 0 ? 'bg-blue-600' : ''
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
          N
        </div>
      </div>
    </aside>
  );
}

 // This is the sidebar component for the FleetPro dashboard.
 // It includes a list of menu items with icons and names.
 // The sidebar is styled with Tailwind CSS and is hidden on smaller screens.
 // The menu items include links to various sections of the dashboard such as Dashboard, Clients, Vehicles