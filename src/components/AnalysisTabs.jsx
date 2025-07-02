export default function AnalysisTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'pending', label: 'Pending vs Received Bill' },
    { id: 'clients', label: 'Top 5 Clients' },
    { id: 'year', label: 'Profit By Year' },
    { id: 'month', label: 'Profit By Month' },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-xs">
      <h2 className="text-lg font-semibold mb-4">Analysis</h2>
      <div className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === tab.id
                ? 'bg-gray-100 font-semibold shadow'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// This component renders a list of tabs for analysis options.
// It allows the user to select a tab, which updates the selected state in the parent component