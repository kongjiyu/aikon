export default function AddProductWireframePage() {
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

                    {/* Basic Info */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            <div className="h-10 w-full bg-gray-100 rounded"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            <div className="h-40 w-full bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Media */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        <div className="h-40 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center gap-2 bg-gray-50">
                            <div className="h-8 w-8 bg-gray-200 rounded"></div>
                            <div className="h-4 w-40 bg-gray-200 rounded"></div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-24 bg-gray-200 rounded"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                <div className="h-10 w-full bg-gray-100 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-10 w-full bg-gray-100 rounded"></div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                        </div>
                    </div>

                    {/* Inventory */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-24 bg-gray-200 rounded"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="h-4 w-12 bg-gray-200 rounded"></div>
                                <div className="h-10 w-full bg-gray-100 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                <div className="h-10 w-full bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">

                    {/* Status */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white/50 space-y-4">
                        <div className="h-6 w-24 bg-gray-200 rounded"></div>
                        <div className="h-10 w-full bg-gray-100 rounded flex items-center px-4 justify-between">
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            <div className="h-6 w-12 bg-green-100 rounded-full"></div>
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
                        <div className="space-y-2">
                            <div className="h-4 w-12 bg-gray-200 rounded"></div>
                            <div className="h-20 w-full bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
