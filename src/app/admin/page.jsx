"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import AnalysisTabs from "@/components/AnalysisTabs";
import AnalysisChart from "@/components/AnalysisChart";
import { FaCarSide, FaMoneyBillWave, FaMoneyCheckAlt, FaWallet } from "react-icons/fa";

export default function TheDashboard() {
    const [activeTab, setActiveTab] = useState("pending");

    return (
        <div className="flex h-screen bg-gray-100">
           

            {/* Main content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <Header />

                <main className="p-6 space-y-6 overflow-auto">

                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard
                            title="Total Vehicles"
                            value="456"
                            icon={<FaCarSide />}
                            color="#9333ea"
                            change="+12 from last month"
                        />
                        <StatCard
                            title="Total Revenue"
                            value="456"
                            icon={<FaMoneyBillWave />}
                            color="#2563eb"
                            change="+12 from last month"
                        />
                        <StatCard
                            title="Total Expense"
                            value="456"
                            icon={<FaMoneyCheckAlt />}
                            color="#dc2626"
                            change="+12 from last month"
                        />
                        <StatCard
                            title="Net Profit"
                            value="456"
                            icon={<FaWallet />}
                            color="#16a34a"
                            change="+12 from last month"
                        />
                    </div>

                    {/* Analysis Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                            <AnalysisTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                        </div>
                        <div className="lg:col-span-2">
                            <AnalysisChart activeTab={activeTab} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

// This is the main dashboard page that includes the sidebar, header, stat cards, analysis tabs, and analysis chart.
// It uses the useState hook to manage the selected chart type for the analysis section.
// The layout is responsive, adjusting the number of stat cards displayed based on the screen size.