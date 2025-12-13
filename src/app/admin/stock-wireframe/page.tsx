export default function StockWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-32 bg-gray-800 rounded opacity-20"></div>
            </div>

            {/* Toolbar */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="h-10 w-full md:w-96 bg-gray-200 rounded flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Stock Table */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 overflow-hidden">

                {/* Table Header */}
                <div className="h-12 border-b-2 border-dashed border-gray-300 bg-gray-100/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-12 bg-gray-300 rounded"></div> {/* Image */}
                    <div className="h-4 w-48 bg-gray-300 rounded flex-1"></div> {/* Product Name */}
                    <div className="h-4 w-32 bg-gray-300 rounded hidden md:block"></div> {/* SKU */}
                    <div className="h-4 w-32 bg-gray-300 rounded"></div> {/* Available Stock (Editable) */}
                    <div className="h-4 w-24 bg-gray-300 rounded hidden sm:block"></div> {/* Incoming */}
                    <div className="h-4 w-20 bg-gray-300 rounded"></div> {/* Actions */}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-dashed divide-gray-200">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="h-16 flex items-center px-6 gap-4 hover:bg-white transition-colors group">

                            {/* Image */}
                            <div className="h-10 w-10 bg-gray-200 rounded shrink-0"></div>

                            {/* Name */}
                            <div className="flex-1 space-y-1">
                                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                                <div className="h-3 w-24 bg-gray-100 rounded"></div>
                            </div>

                            {/* SKU */}
                            <div className="hidden md:block w-32">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            </div>

                            {/* Available Stock (Editable Mock) */}
                            <div className="w-32">
                                <div className="h-10 w-24 border-2 border-dashed border-gray-300 rounded bg-white flex items-center justify-center">
                                    <span className="h-4 w-8 bg-gray-800 rounded opacity-20"></span>
                                </div>
                            </div>

                            {/* Incoming */}
                            <div className="hidden sm:block w-24">
                                <div className="h-4 w-8 bg-gray-200 rounded"></div>
                            </div>

                            {/* Actions */}
                            <div className="w-20 flex gap-2">
                                <div className="h-8 w-8 bg-gray-200 rounded opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-8 w-8 bg-gray-800 rounded opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
