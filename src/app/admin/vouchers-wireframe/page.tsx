export default function VouchersListWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-40 bg-gray-800 rounded opacity-20"></div>
            </div>

            {/* Toolbar */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="h-10 w-full md:w-96 bg-gray-200 rounded flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="flex gap-2 bg-gray-100/50 p-1 rounded-lg border border-dashed border-gray-200">
                    <div className="h-8 w-20 bg-white shadow-sm rounded flex items-center justify-center font-bold text-gray-500 text-xs">All</div>
                    <div className="h-8 w-20 bg-transparent rounded flex items-center justify-center text-gray-400 text-xs">Active</div>
                    <div className="h-8 w-20 bg-transparent rounded flex items-center justify-center text-gray-400 text-xs">Expired</div>
                </div>
            </div>

            {/* Vouchers Table */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 overflow-hidden">

                {/* Table Header */}
                <div className="h-12 border-b-2 border-dashed border-gray-300 bg-gray-100/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded flex-1"></div> {/* Code/Title */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Discount */}
                    <div className="h-4 w-24 bg-gray-300 rounded hidden md:block"></div> {/* Status */}
                    <div className="h-4 w-20 bg-gray-300 rounded text-center"></div> {/* Usage */}
                    <div className="h-4 w-32 bg-gray-300 rounded text-right"></div> {/* Date */}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-dashed divide-gray-200">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-16 flex items-center px-6 gap-4 hover:bg-white transition-colors cursor-pointer">
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>

                            {/* Code & Title */}
                            <div className="flex-1 space-y-1">
                                <div className="h-4 w-24 bg-gray-800 rounded opacity-80"></div>
                                <div className="h-3 w-40 bg-gray-200 rounded"></div>
                            </div>

                            {/* Discount */}
                            <div className="w-24 font-bold text-gray-500">
                                {i % 2 === 0 ? '20% Off' : 'RM 50.00 Off'}
                            </div>

                            {/* Status */}
                            <div className="hidden md:block w-24">
                                <div className={`h-6 w-16 rounded-full flex items-center justify-center text-xs ${i === 4 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>
                                    {i === 4 ? 'Expired' : 'Active'}
                                </div>
                            </div>

                            {/* Usage */}
                            <div className="w-20 text-center text-xs">
                                <span className="font-bold">12</span> / 100
                            </div>

                            {/* Date */}
                            <div className="w-32 text-right">
                                <div className="h-3 w-24 bg-gray-200 rounded ml-auto"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
