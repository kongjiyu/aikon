'use client';

import Link from 'next/link';
import {
    Search,
    Filter,
    ChevronLeft,
    ChevronRight,
    Pencil,
    Archive
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function StockWireframe() {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Stock Management</h2>
                    <p className="text-sm text-gray-500 mt-1">Monitor and update product inventory</p>
                </div>
            </div>

            {/* List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="p-6 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">

                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <Filter size={18} className="mr-2" />
                                    <SelectValue placeholder="Stock Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Items</SelectItem>
                                    <SelectItem value="low">Low Stock</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="px-6 pb-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-brand-sage uppercase">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Product Name</th>
                                    <th className="px-4 py-3 font-medium">SKU</th>
                                    <th className="px-4 py-3 font-medium">Category</th>
                                    <th className="px-4 py-3 font-medium">Current Stock</th>
                                    <th className="px-4 py-3 font-medium">Stock Status</th>
                                    <th className="px-2 py-3 font-medium text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3, 4, 5].map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50 group">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    <img src="https://placehold.co/100x100" alt="Placeholder" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="font-medium text-gray-900">Product Name {i}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">SKU-{100 + i}</td>
                                        <td className="px-4 py-4 text-gray-500">Category</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">120</td>
                                        <td className="px-4 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600`}>
                                                In Stock
                                            </span>
                                        </td>
                                        <td className="px-2 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                                    <Pencil size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                                    <Archive size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-brand-dark text-white text-sm">1</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
