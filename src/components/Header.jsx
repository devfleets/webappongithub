import { FaBell, FaCog } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-sm">
      {/* Left Spacer */}
      <div className="w-64 hidden lg:block"></div>

      {/* Search */}
      <div className="flex-1 max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Search ............"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 ml-auto">
        <button className="text-gray-500 hover:text-gray-700">
          <FaBell />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <FaCog />
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="/image.svg"
            alt="Admin"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-right">
            <div className="text-sm font-semibold">Admin User</div>
            <div className="text-xs text-gray-500">super admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}

// This is the header component for the FleetPro dashboard.
// It includes a welcome message and a brief description of the dashboard's purpose.