'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Plus,
    Search,
    Filter,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Package
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ProductListingWireframe() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectAll, setSelectAll] = useState(false);

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Products</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your product catalog</p>
                </div>
                <Link href="#" className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    <Plus size={16} /> Add Product
                </Link>
            </div>

            {/* Discover Categories Grid */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className={`bg-white p-4 rounded-xl border shadow-sm flex items-center gap-4 hover:shadow-md transition-all cursor-pointer border-gray-100`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors bg-gray-100`}>
                                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            </div>
                            <span className="font-medium text-gray-900">Category {i}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs & Toolbar */}
                <div className="p-6 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'all' ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            All Products (10)
                        </button>
                        <button
                            onClick={() => setActiveTab('low')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'low' ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Low Stock
                        </button>
                        <button
                            onClick={() => setActiveTab('out')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'out' ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Out of Stock
                        </button>
                    </div>

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
                                    <SelectValue placeholder="Filter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Category A</SelectItem>
                                    <SelectItem value="2">Category B</SelectItem>
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
                                    <th className="p-4 w-4">
                                        <input
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={() => setSelectAll(!selectAll)}
                                            className="rounded border-gray-300 text-brand-dark focus:ring-brand-teal"
                                        />
                                    </th>
                                    <th className="px-4 py-3 font-medium">No.</th>
                                    <th className="px-4 py-3 font-medium">Product</th>
                                    <th className="px-4 py-3 font-medium">Category</th>
                                    <th className="px-4 py-3 font-medium">Price</th>
                                    <th className="px-4 py-3 font-medium">Stock</th>
                                    <th className="px-2 py-3 font-medium text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3, 4, 5].map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50 group">
                                        <td className="p-4">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-brand-dark focus:ring-brand-teal"
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{i + 1}</td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    <img src="https://placehold.co/100x100" alt="Placeholder" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="font-medium text-gray-900 group-hover/item:text-brand-dark transition-colors">Product Name {i}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">Category Name</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">RM 199.00</td>
                                        <td className="px-4 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600`}>
                                                10 in stock
                                            </span>
                                        </td>
                                        <td className="px-2 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                                    <Pencil size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
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
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">3</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
