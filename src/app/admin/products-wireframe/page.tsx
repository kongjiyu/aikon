export default function ProductWireframePage() {
    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50 text-gray-400 font-mono text-sm">

            {/* Header Wireframe */}
            <div className="flex justify-between items-center border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-32 bg-gray-800 rounded opacity-20"></div>
            </div>

            {/* Toolbar / Filters Wireframe */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white/50 flex flex-col md:flex-row gap-4 justify-between items-center">
                {/* Search */}
                <div className="h-10 w-full md:w-96 bg-gray-200 rounded flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>

                {/* Filters */}
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Product Data Table Wireframe */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white/50 overflow-hidden">

                {/* Table Header */}
                <div className="h-12 border-b-2 border-dashed border-gray-300 bg-gray-100/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div> {/* Checkbox */}
                    <div className="h-4 w-16 bg-gray-300 rounded"></div> {/* Image Header */}
                    <div className="h-4 w-48 bg-gray-300 rounded flex-1"></div> {/* Name Header */}
                    <div className="h-4 w-24 bg-gray-300 rounded hidden md:block"></div> {/* SKU Header */}
                    <div className="h-4 w-20 bg-gray-300 rounded hidden sm:block"></div> {/* Stock Header */}
                    <div className="h-4 w-20 bg-gray-300 rounded"></div> {/* Price Header */}
                    <div className="h-4 w-24 bg-gray-300 rounded hidden md:block"></div> {/* Status Header */}
                    <div className="h-4 w-12 bg-gray-300 rounded"></div> {/* Actions Header */}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-dashed divide-gray-200">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-20 flex items-center px-6 gap-4 hover:bg-white transition-colors">
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>
                            {/* Product Image */}
                            <div className="h-12 w-12 bg-gray-200 rounded shrink-0"></div>

                            {/* Name & Category */}
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                                <div className="h-3 w-1/3 bg-gray-100 rounded"></div>
                            </div>

                            {/* SKU */}
                            <div className="hidden md:block w-24">
                                <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            </div>

                            {/* Stock */}
                            <div className="hidden sm:block w-20">
                                <div className="h-4 w-12 bg-gray-200 rounded"></div>
                            </div>

                            {/* Price */}
                            <div className="w-20">
                                <div className="h-4 w-14 bg-gray-300 rounded"></div>
                            </div>

                            {/* Status Badge */}
                            <div className="hidden md:block w-24">
                                <div className={`h-6 w-20 rounded-full flex items-center justify-center ${i % 3 === 0 ? 'bg-green-100' : (i % 3 === 1 ? 'bg-yellow-100' : 'bg-red-100')}`}>
                                    <div className={`h-2 w-12 rounded ${i % 3 === 0 ? 'bg-green-300' : (i % 3 === 1 ? 'bg-yellow-300' : 'bg-red-300')}`}></div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="w-12 flex gap-2">
                                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                                <div className="h-8 w-8 bg-gray-200 rounded"></div>
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
