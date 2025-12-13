'use client';

import React, { useState } from 'react';
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Mail,
    Trash2,
    Users,
} from 'lucide-react';
import Link from 'next/link';

export default function CustomersWireframe() {
    const [timeRange, setTimeRange] = useState<'thisWeek' | 'lastWeek'>('thisWeek');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
            </div>

            {/* Stats & Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Stats Cards */}
                <div className="space-y-6">
                    {/* Total Customers */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Total Customers</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">11,040</span>
                            <span className="text-xs font-medium text-green-500 flex items-center">
                                <ArrowUpRight size={12} className="mr-0.5" /> 14.4%
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                    </div>

                    {/* New Customers */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium text-gray-600">New Customers</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">2,370</span>
                            <span className="text-xs font-medium text-green-500 flex items-center">
                                <ArrowUpRight size={12} className="mr-0.5" /> 20%
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                    </div>

                    {/* Visitor */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Total Visitors</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">250k</span>
                            <span className="text-xs font-medium text-green-500 flex items-center">
                                <ArrowUpRight size={12} className="mr-0.5" /> 20%
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                    </div>
                </div>

                {/* Right Column: Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-gray-800">Customer Overview</h3>
                        <div className="flex items-center gap-2">
                            <button
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${timeRange === 'thisWeek' ? 'bg-[#2B3433] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                This Week
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">25k</p>
                            <p className="text-xs text-gray-500">Active</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">5.6k</p>
                            <p className="text-xs text-gray-500">Repeat</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">250k</p>
                            <p className="text-xs text-gray-500">Visitors</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">5.5%</p>
                            <p className="text-xs text-gray-500">Conversion Rate</p>
                        </div>
                    </div>

                    {/* Chart Area with Chart.js */}
                    <div className="flex-1 bg-white relative min-h-[250px] w-full flex items-center justify-center">
                        <img src="https://placehold.co/600x300?text=Customer+Activity+Chart" alt="Customer Activity Chart Placeholder" className="w-full h-full object-cover opacity-50" />
                    </div>
                </div>
            </div>

            {/* Customer List Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-brand-sage uppercase">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Customer Id</th>
                                    <th className="px-4 py-3 font-medium">Name</th>
                                    <th className="px-4 py-3 font-medium">Phone</th>
                                    <th className="px-4 py-3 font-medium text-center">Orders</th>
                                    <th className="px-4 py-3 font-medium text-right">Spend</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 font-medium text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            <Link href="#" className="hover:text-brand-teal hover:underline">
                                                #CUST-00{i}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">Customer {i}</td>
                                        <td className="px-4 py-4 text-gray-600">+1234567890</td>
                                        <td className="px-4 py-4 text-center text-gray-600">{10 * i}</td>
                                        <td className="px-4 py-4 text-right text-gray-900 font-medium">RM {1000 * i}.00</td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 bg-green-500`}></span>
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                                    <Mail size={16} />
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
                <div className="px-6 pb-6 flex items-center justify-between">
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
