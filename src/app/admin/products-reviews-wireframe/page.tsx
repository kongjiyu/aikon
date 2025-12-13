export default function ProductReviewsWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center bg-white/50 p-4 rounded-xl border-2 border-dashed border-gray-300">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-yellow-500 text-xl">★</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Summary Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <div key={star} className="flex items-center gap-2">
                                    <div className="w-4 text-xs font-bold text-gray-400">{star}</div>
                                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-300 w-2/3 rounded-full opacity-50"></div>
                                    </div>
                                    <div className="w-8 h-3 bg-gray-200 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-3 space-y-4">

                    {/* Toolbar */}
                    <div className="bg-white/50 p-4 rounded-xl border-2 border-dashed border-gray-300 flex justify-between items-center">
                        <div className="h-10 w-64 bg-gray-200 rounded flex items-center px-3 gap-2">
                            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                        </div>
                        <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    </div>

                    {/* Review Items */}
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4 hover:bg-white transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                    <div>
                                        <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
                                        <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <div key={index} className={`h-4 w-4 rounded-sm ${index < 4 ? 'bg-yellow-200' : 'bg-gray-200'}`}></div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 pl-14">
                                <div className="h-4 w-full bg-gray-100 rounded"></div>
                                <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    ))}

                    {/* Pagination */}
                    <div className="h-12 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50/50 flex justify-center items-center gap-2">
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                        <div className="h-8 w-8 bg-gray-300 rounded"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>

                </div>
            </div>

        </div>
    );
}
