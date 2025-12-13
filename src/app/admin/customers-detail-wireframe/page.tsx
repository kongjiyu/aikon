export default function CustomerDetailWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">{'<'}</div>
                    <div className="space-y-1">
                        <div className="h-6 w-48 bg-gray-300 rounded"></div>
                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    </div>
                </div>
                <div className="h-10 w-24 bg-red-100 rounded text-red-400 flex items-center justify-center">Delete</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-white/50 p-4 rounded-xl border-2 border-dashed border-gray-300 space-y-2">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Last Order */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="h-5 w-32 bg-gray-200 rounded"></div>
                            <div className="h-4 w-24 bg-blue-100/50 text-blue-400 rounded flex items-center justify-center text-xs">View Order</div>
                        </div>
                        <div className="h-16 w-full bg-gray-50 rounded border border-dashed border-gray-200 flex items-center px-4 gap-4">
                            <div className="h-10 w-10 bg-gray-200 rounded"></div>
                            <div className="space-y-1 flex-1">
                                <div className="h-4 w-48 bg-gray-300 rounded"></div>
                                <div className="h-3 w-32 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-6 w-20 bg-green-100 rounded"></div>
                        </div>
                    </div>

                    {/* Order History Table */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="divide-y-2 divide-dashed divide-gray-200">
                            <div className="py-2 flex gap-4 text-xs font-bold text-gray-400">
                                <div className="w-16">Order</div>
                                <div className="w-24">Date</div>
                                <div className="w-24">Status</div>
                                <div className="w-20 text-right">Total</div>
                            </div>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="py-3 flex gap-4 items-center hover:bg-white transition-colors">
                                    <div className="w-16 text-blue-300 underline">#{1020 - i}</div>
                                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-24 h-6 bg-gray-100 rounded-full"></div>
                                    <div className="w-20 text-right h-4 bg-gray-300 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Contact */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex justify-between items-center"><div className="h-5 w-32 bg-gray-200 rounded"></div><div className="h-4 w-8 bg-gray-200 rounded"></div></div>
                        <div className="space-y-3">
                            <div className="flex gap-2 items-center"><div className="h-4 w-4 bg-gray-300 rounded"></div><div className="h-4 w-48 bg-gray-200 rounded"></div></div>
                            <div className="flex gap-2 items-center"><div className="h-4 w-4 bg-gray-300 rounded"></div><div className="h-4 w-32 bg-gray-200 rounded"></div></div>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex justify-between items-center"> <div className="h-5 w-32 bg-gray-200 rounded"></div> <div className="h-4 w-8 bg-gray-200 rounded"></div></div>
                        <div className="space-y-2">
                            <div className="h-3 w-40 bg-gray-100 rounded font-bold">Default Address</div>
                            <div className="h-3 w-full bg-gray-100 rounded"></div>
                            <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                        <div className="h-24 w-full bg-gray-50 rounded border border-dashed border-gray-200 p-2 text-xs italic">
                            No notes provided.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
