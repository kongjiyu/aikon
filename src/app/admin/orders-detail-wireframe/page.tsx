export default function OrderDetailWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header */}
            <div className="flex justify-between items-center bg-white/50 p-4 rounded-xl border-2 border-dashed border-gray-300">
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">{'<'}</div>
                    <div className="space-y-1">
                        <div className="flex gap-2 items-center">
                            <div className="h-6 w-32 bg-gray-300 rounded"></div>
                            <div className="h-5 w-16 bg-green-100 rounded"></div>
                            <div className="h-5 w-20 bg-yellow-100 rounded"></div>
                        </div>
                        <div className="h-4 w-48 bg-gray-200 rounded"></div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Order Items */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="divide-y-2 divide-dashed divide-gray-200">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="py-4 flex gap-4 items-center">
                                    <div className="h-12 w-12 bg-gray-200 rounded"></div>
                                    <div className="flex-1 space-y-1">
                                        <div className="h-4 w-48 bg-gray-300 rounded"></div>
                                        <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                                        <div className="h-3 w-8 bg-gray-200 rounded ml-auto"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t-2 border-dashed border-gray-200 pt-4 flex justify-end">
                            <div className="w-64 space-y-2">
                                <div className="flex justify-between"><div className="w-16 h-3 bg-gray-200 rounded"></div><div className="w-16 h-3 bg-gray-200 rounded"></div></div>
                                <div className="flex justify-between"><div className="w-16 h-3 bg-gray-200 rounded"></div><div className="w-16 h-3 bg-gray-200 rounded"></div></div>
                                <div className="flex justify-between font-bold pt-2 border-t border-dashed border-gray-200"><div className="w-12 h-4 bg-gray-300 rounded"></div><div className="w-20 h-4 bg-gray-300 rounded"></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="h-6 w-32 bg-gray-200 rounded"></div>
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-12 w-full bg-gray-100 rounded border border-gray-200 flex items-center px-4 justify-between">
                            <div className="flex items-center gap-2"><div className="w-8 h-5 bg-gray-300 rounded"></div><div className="w-24 h-3 bg-gray-200 rounded"></div></div>
                            <div className="w-16 h-4 bg-gray-300 rounded"></div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-6">
                        <div className="h-6 w-24 bg-gray-200 rounded"></div>
                        <div className="relative border-l-2 border-dashed border-gray-200 ml-2 space-y-8 pl-6 py-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="relative">
                                    <div className={`absolute -left-[33px] top-0 h-4 w-4 rounded-full border-2 border-white ${i === 0 ? 'bg-blue-300' : 'bg-gray-300'}`}></div>
                                    <div className="space-y-1">
                                        <div className="h-4 w-48 bg-gray-300 rounded"></div>
                                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Customer */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                        <div className="flex gap-3 items-center">
                            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                            <div>
                                <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
                                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-dashed border-gray-200">
                            <div className="h-3 w-full bg-gray-100 rounded"></div>
                            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex justify-between items-center"> <div className="h-5 w-32 bg-gray-200 rounded"></div> <div className="h-4 w-8 bg-gray-200 rounded"></div></div>
                        <div className="space-y-2">
                            <div className="h-3 w-40 bg-gray-100 rounded"></div>
                            <div className="h-3 w-32 bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-gray-300 space-y-4">
                        <div className="flex justify-between items-center"> <div className="h-5 w-32 bg-gray-200 rounded"></div> <div className="h-4 w-8 bg-gray-200 rounded"></div></div>
                        <div className="h-32 w-full bg-gray-100 rounded"></div> {/* Map */}
                        <div className="space-y-2">
                            <div className="h-3 w-full bg-gray-100 rounded"></div>
                            <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
