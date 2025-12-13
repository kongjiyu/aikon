export default function CreateVoucherWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">{'<'}</div>
                    <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex gap-3">
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-800 rounded opacity-20"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Code & Title */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-10 w-full bg-gray-100 rounded flex items-center px-4 justify-between">
                                    <span className="text-gray-400">SUMMER2025</span>
                                    <div className="h-4 w-20 bg-gray-200 rounded text-xs flex items-center justify-center">Generate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Value */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <div className="h-10 w-full bg-gray-100 rounded flex items-center justify-center gap-2">
                                    <div className="h-4 w-4 bg-gray-400 rounded-full"></div>Percentage
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="h-10 w-full bg-gray-50 rounded border border-dashed border-gray-200 flex items-center justify-center gap-2">
                                    <div className="h-4 w-4 border-2 border-gray-300 rounded-full"></div>Fixed Amount
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            <div className="h-10 w-48 bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-48 bg-gray-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 bg-gray-400 rounded-full border-2 border-gray-400"></div>
                                <div className="h-4 w-48 bg-gray-200 rounded"></div>
                            </div>
                            <div className="pl-8">
                                <div className="h-10 w-48 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Summary Card */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                        <div className="space-y-2 border-t border-dashed border-gray-200 pt-2">
                            <div className="h-4 w-full bg-gray-100 rounded"></div>
                            <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Active Dates */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-32 bg-gray-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="space-y-1"><div className="h-3 w-16 bg-gray-200 rounded"></div><div className="h-10 w-full bg-gray-100 rounded"></div></div>
                            <div className="space-y-1"><div className="h-3 w-16 bg-gray-200 rounded"></div><div className="h-10 w-full bg-gray-100 rounded"></div></div>
                        </div>
                    </div>

                    {/* Usage Limits */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-32 bg-gray-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center"><div className="h-4 w-48 bg-gray-200 rounded"></div><div className="h-5 w-10 bg-gray-300 rounded-full"></div></div>
                            <div className="flex justify-between items-center"><div className="h-4 w-40 bg-gray-200 rounded"></div><div className="h-5 w-10 bg-gray-200 rounded-full"></div></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
