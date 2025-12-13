export default function DashboardWireframePage() {
    return (
        <div className="p-6 space-y-8 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header Wireframe */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex gap-2">
                    <div className="h-8 w-24 bg-gray-200 rounded"></div>
                    <div className="h-8 w-32 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Stats Grid Wireframe */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-32 border-2 border-dashed border-gray-300 rounded-xl bg-white/50 p-4 flex flex-col justify-between hover:bg-white transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                            <div className="h-4 w-12 bg-gray-200 rounded"></div>
                        </div>
                        <div>
                            <div className="h-8 w-24 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

                {/* Large Chart Area (2/3) */}
                <div className="lg:col-span-2 border-2 border-dashed border-gray-300 rounded-xl bg-white/50 p-6 flex flex-col items-center justify-center relative hover:bg-white transition-colors">
                    <span className="absolute top-4 left-6 h-6 w-32 bg-gray-200 rounded"></span>
                    <div className="w-full h-full flex items-end justify-between px-8 pb-8 gap-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-full bg-gray-200 rounded-t-sm" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                        ))}
                    </div>
                    <p className="text-gray-400 mt-4">Main Analytics Chart Area</p>
                </div>

                {/* Right Sidebar / Notifications (1/3) */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 p-6 flex flex-col gap-4 hover:bg-white transition-colors">
                    <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-3 items-center">
                            <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-auto h-10 w-full bg-gray-200 rounded flex items-center justify-center">Action Button</div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders Table Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 p-6 min-h-[300px] hover:bg-white transition-colors">
                    <div className="h-6 w-40 bg-gray-200 rounded mb-6"></div>
                    <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-12 w-full bg-gray-100 rounded flex items-center px-4 gap-4">
                                <div className="h-4 w-4 bg-gray-300 rounded"></div>
                                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                                <div className="h-4 w-full bg-gray-200 rounded"></div>
                                <div className="h-6 w-16 bg-gray-300 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Products / Another Widget */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 p-6 min-h-[300px] hover:bg-white transition-colors">
                    <div className="h-6 w-40 bg-gray-200 rounded mb-6"></div>
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                                Prod Image
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
