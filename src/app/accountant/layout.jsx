export default function AccountantLayout({ children }) {
    return (
        <div>
            {/* Top Nav */}
            <div className="bg-[#0E1B33] text-white px-6 py-4 flex justify-between items-center">
                <div className="flex gap-12 items-center">
                    <div className="font-bold text-xl flex items-center gap-2">
                        <div className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">F</div>
                        <span>FleetPro</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <span className="border-b-2 border-white pb-1">
                            <Link href={"/accountant"}>Dashboard</Link>
                        </span>
                        <span> <Link href={"accountant/clients"}>Client Accounting</Link> </span>
                        <span> <Link href={"accountant/billing"}>Tender & Invoices</Link> </span>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-sm bg-white text-black px-3 py-1 rounded-full">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">A</div>
                    <div>
                        <div className="font-medium">Accountant</div>
                        <div className="text-xs text-gray-500">data</div>
                    </div>
                    <FaArrowLeft className="ml-3 text-lg text-gray-500 hover:text-black cursor-pointer" />
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
  }