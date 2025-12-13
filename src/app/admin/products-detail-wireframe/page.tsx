export default function ProductDetailWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">{'<'}</div>
                    <div className="space-y-1">
                        <div className="h-6 w-48 bg-gray-200 rounded"></div>
                        <div className="h-4 w-20 bg-green-100 rounded text-green-600 text-xs flex items-center justify-center">Active</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-red-100 rounded text-red-400 flex items-center justify-center">Delete</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Product Performance (Differences this from Add Page) */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="flex justify-between">
                            <div className="h-6 w-32 bg-gray-200 rounded"></div>
                            <div className="h-6 w-24 bg-gray-100 rounded"></div>
                        </div>
                        <div className="h-32 w-full bg-gray-50 rounded border-2 border-dashed border-gray-200 flex items-end justify-between px-4 pb-2 gap-2">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-full bg-blue-100 rounded-t-sm" style={{ height: `${Math.random() * 80 + 10}%` }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Basic Info (Filled) */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="space-y-2">
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            <div className="h-10 w-full bg-gray-100 rounded border border-gray-200 flex items-center px-4 font-sans text-gray-500">iPhone 17 Pro Max</div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            <div className="h-32 w-full bg-gray-100 rounded border border-gray-200 p-4 font-sans text-gray-500">
                                The ultimate iPhone. Featuring titanium design, A18 Pro chip...
                            </div>
                        </div>
                    </div>

                    {/* Media (Filled) */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="aspect-square bg-gray-200 rounded border-2 border-blue-400"></div> {/* Main */}
                            <div className="aspect-square bg-gray-100 rounded"></div>
                            <div className="aspect-square bg-gray-100 rounded"></div>
                            <div className="aspect-square border-2 border-dashed border-gray-300 rounded flex items-center justify-center">+</div>
                        </div>
                    </div>

                    {/* Variants Table (Existing) */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-24 bg-gray-200 rounded"></div>
                        <div className="divide-y-2 divide-dashed divide-gray-200">
                            <div className="py-2 flex justify-between font-bold">
                                <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                                <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                            </div>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="py-3 flex justify-between items-center text-gray-500 font-sans">
                                    <div className="w-1/3">Variant {i + 1}</div>
                                    <div className="w-1/4">RM 4999</div>
                                    <div className="w-1/4">450 available</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">

                    {/* Insights */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                        <div className="h-8 w-full bg-blue-50 rounded flex items-center px-3 text-blue-400 font-sans text-xs">
                            Last order: 2 hours ago
                        </div>
                    </div>

                    {/* Organization */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-20 bg-gray-200 rounded"></div>
                            <div className="h-10 w-full bg-gray-100 rounded"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            <div className="h-10 w-full bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
