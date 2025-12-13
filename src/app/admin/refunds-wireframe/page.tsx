export default function RefundsWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
            </div>

            {/* Toolbar / Filters */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50 flex gap-4 items-center">
                {/* Status Tabs */}
                <div className="flex gap-2 bg-gray-100/50 p-1 rounded-lg border border-dashed border-gray-200">
                    <div className="h-8 w-24 bg-white shadow-sm rounded flex items-center justify-center font-bold text-gray-500 text-xs">Pending</div>
                    <div className="h-8 w-24 bg-transparent rounded flex items-center justify-center text-gray-400 text-xs">Approved</div>
                    <div className="h-8 w-24 bg-transparent rounded flex items-center justify-center text-gray-400 text-xs">Rejected</div>
                </div>
                <div className="h-10 w-64 bg-gray-200 rounded ml-auto flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Refunds Table */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 overflow-hidden">

                {/* Table Header */}
                <div className="h-12 border-b-2 border-dashed border-gray-300 bg-gray-100/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-20 bg-gray-300 rounded"></div> {/* Request ID */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Order ID */}
                    <div className="h-4 w-32 bg-gray-300 rounded flex-1"></div> {/* Product */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Customer */}
                    <div className="h-4 w-48 bg-gray-300 rounded hidden md:block"></div> {/* Reason */}
                    <div className="h-4 w-20 bg-gray-300 rounded text-right"></div> {/* Amount */}
                    <div className="h-4 w-24 bg-gray-300 rounded text-center"></div> {/* Actions */}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-dashed divide-gray-200">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-20 flex items-center px-6 gap-4 hover:bg-white transition-colors">

                            {/* IDs */}
                            <div className="w-20 font-bold text-xs">RF-{1000 + i}</div>
                            <div className="w-24 text-blue-300 underline text-xs">#{2024 + i}</div>

                            {/* Product */}
                            <div className="flex-1 flex items-center gap-3">
                                <div className="h-10 w-10 bg-gray-200 rounded shrink-0"></div>
                                <div className="space-y-1">
                                    <div className="h-3 w-32 bg-gray-300 rounded"></div>
                                    <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                </div>
                            </div>

                            {/* Customer */}
                            <div className="w-24">
                                <div className="h-3 w-16 bg-gray-300 rounded"></div>
                            </div>

                            {/* Reason */}
                            <div className="hidden md:block w-48 text-xs text-gray-500 italic truncate">
                                "Item arrived damaged in the corner..."
                            </div>

                            {/* Amount */}
                            <div className="w-20 text-right font-bold text-gray-600">
                                RM 120.00
                            </div>

                            {/* Actions */}
                            <div className="w-24 flex justify-center gap-2">
                                <div className="h-8 w-8 bg-green-100 rounded flex items-center justify-center text-green-500">✓</div>
                                <div className="h-8 w-8 bg-red-100 rounded flex items-center justify-center text-red-500">✕</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
