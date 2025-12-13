export default function OrdersListWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
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
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 overflow-hidden">

                {/* Table Header */}
                <div className="h-12 border-b-2 border-dashed border-gray-300 bg-gray-100/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div> {/* Checkbox */}
                    <div className="h-4 w-16 bg-gray-300 rounded"></div> {/* Order ID */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Date */}
                    <div className="h-4 w-32 bg-gray-300 rounded flex-1"></div> {/* Customer */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Payment Status */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Fulfillment */}
                    <div className="h-4 w-20 bg-gray-300 rounded text-right"></div> {/* Total */}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-dashed divide-gray-200">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-16 flex items-center px-6 gap-4 hover:bg-white transition-colors cursor-pointer">
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>

                            {/* Order ID */}
                            <div className="w-16 h-4 bg-gray-300 rounded font-bold"></div>

                            {/* Date */}
                            <div className="w-24 h-4 bg-gray-200 rounded"></div>

                            {/* Customer */}
                            <div className="flex-1 flex items-center gap-2">
                                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                            </div>

                            {/* Payment Status */}
                            <div className="w-24">
                                <div className={`h-6 w-20 rounded-full flex items-center justify-center ${i % 2 === 0 ? 'bg-green-100' : 'bg-yellow-100'}`}>
                                    <div className={`h-2 w-12 rounded ${i % 2 === 0 ? 'bg-green-300' : 'bg-yellow-300'}`}></div>
                                </div>
                            </div>

                            {/* Fulfillment */}
                            <div className="w-24">
                                <div className={`h-6 w-20 rounded-full flex items-center justify-center ${i % 3 === 0 ? 'bg-gray-100' : (i % 3 === 1 ? 'bg-yellow-100' : 'bg-green-100')}`}>
                                    <div className={`h-2 w-12 rounded ${i % 3 === 0 ? 'bg-gray-300' : (i % 3 === 1 ? 'bg-yellow-300' : 'bg-green-300')}`}></div>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="w-20 text-right flex justify-end">
                                <div className="h-4 w-16 bg-gray-300 rounded"></div>
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
