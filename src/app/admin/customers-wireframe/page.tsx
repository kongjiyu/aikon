export default function CustomersListWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-36 bg-gray-800 rounded opacity-20"></div>
            </div>

            {/* Toolbar / Filters */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50 flex flex-col md:flex-row gap-4 justify-between items-center">
                {/* Search */}
                <div className="h-10 w-full md:w-96 bg-gray-200 rounded flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>

                {/* Filters */}
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Customers Table */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 overflow-hidden">

                {/* Table Header */}
                <div className="h-12 border-b-2 border-dashed border-gray-300 bg-gray-100/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div> {/* Checkbox */}
                    <div className="h-4 w-32 bg-gray-300 rounded flex-1"></div> {/* Customer Name */}
                    <div className="h-4 w-32 bg-gray-300 rounded hidden md:block"></div> {/* Location */}
                    <div className="h-4 w-20 bg-gray-300 rounded text-center"></div> {/* Orders */}
                    <div className="h-4 w-24 bg-gray-300 rounded text-right"></div> {/* Amount Spent */}
                    <div className="h-4 w-20 bg-gray-300 rounded text-center"></div> {/* Actions */}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-dashed divide-gray-200">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-16 flex items-center px-6 gap-4 hover:bg-white transition-colors cursor-pointer group">
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>

                            {/* Customer Name & Email */}
                            <div className="flex-1 flex items-center gap-3">
                                <div className="h-8 w-8 bg-gray-200 rounded-full shrink-0"></div>
                                <div className="space-y-1">
                                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                    <div className="h-3 w-40 bg-gray-100 rounded"></div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="hidden md:block w-32">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            </div>

                            {/* Orders Count */}
                            <div className="w-20 text-center">
                                <div className="h-6 w-12 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-xs">{(i + 1) * 2}</div>
                            </div>

                            {/* Amount Spent */}
                            <div className="w-24 text-right">
                                <div className="h-4 w-16 bg-gray-300 rounded ml-auto"></div>
                            </div>

                            {/* Actions */}
                            <div className="w-20 flex justify-center gap-2">
                                <div className="h-8 w-8 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Wireframe */}
                <div className="h-16 border-t-2 border-dashed border-gray-300 bg-gray-50/50 flex justify-between items-center px-6">
                    <div className="h-4 w-32 bg-gray-200 rounded hidden sm:block"></div>
                    <div className="flex gap-2">
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                        <div className="h-8 w-8 bg-gray-300 rounded"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                </div>

            </div>

        </div>
    );
}
