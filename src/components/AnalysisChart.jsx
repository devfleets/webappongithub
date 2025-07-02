import PendingVsReceived from "./charts/PendingVsReceived";
import TopClients from "./charts/TopClients";
import ProfitByYear from "./charts/ProfitByYear";
import ProfitByMonth from "./charts/ProfitByMonth";

export default function AnalysisChart({ activeTab }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex justify-center items-center w-full">
      {activeTab === 'pending' && <PendingVsReceived />}
      {activeTab === 'clients' && <TopClients />}
      {activeTab === 'year' && <ProfitByYear />}
      {activeTab === 'month' && <ProfitByMonth />}
    </div>
  );
}

// This component renders the analysis chart based on the selected tab.
// It conditionally displays different charts based on the `selected` prop, which is managed by the parent component.