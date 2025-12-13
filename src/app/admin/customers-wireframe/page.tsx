'use client';

import React, { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Mail,
    Trash2,
    ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

export default function AdminCustomersWireframePage() {
    const [timeRange, setTimeRange] = useState<'thisWeek' | 'lastWeek'>('thisWeek');

    return (
        <div className="space-y-6 grayscale">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Lorem Ipsum</h1>
            </div>

            {/* Stats & Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Stats Cards */}
                <div className="space-y-6">
                    {/* Total Customers */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Lorem Ipsum Dolor</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">00,000</span>
                            <span className="text-xs font-medium text-gray-600 flex items-center">
                                <ArrowUpRight size={12} className="mr-0.5" /> 00.0%
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                    </div>

                    {/* New Customers */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Lorem Ipsum Dolor</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">0,000</span>
                            <span className="text-xs font-medium text-gray-600 flex items-center">
                                <ArrowUpRight size={12} className="mr-0.5" /> 00%
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                    </div>

                    {/* Visitor */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Lorem Ipsum</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">000k</span>
                            <span className="text-xs font-medium text-gray-600 flex items-center">
                                <ArrowUpRight size={12} className="mr-0.5" /> 00%
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                    </div>
                </div>

                {/* Right Column: Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-gray-800">Lorem Ipsum Dolor</h3>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={(e) => { e.stopPropagation(); setTimeRange('thisWeek'); }}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${timeRange === 'thisWeek' ? 'bg-gray-800 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                Lorem ipsum
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setTimeRange('lastWeek'); }}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${timeRange === 'lastWeek' ? 'bg-gray-800 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                Lorem ipsum
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">00k</p>
                            <p className="text-xs text-gray-500">Lorem Ipsum Dolor</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">0.0k</p>
                            <p className="text-xs text-gray-500">Lorem Ipsum Dolor</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">000k</p>
                            <p className="text-xs text-gray-500">Lorem Ipsum</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">0.0%</p>
                            <p className="text-xs text-gray-500">Lorem Ipsum Sit</p>
                        </div>
                    </div>

                    {/* Chart Area - Placeholder */}
                    <div className="flex-1 bg-gray-50 relative min-h-[250px] w-full rounded-lg border border-gray-200 flex items-end justify-around p-6 gap-3">
                        {/* Simple bar chart visualization */}
                        {[65, 45, 80, 55, 70, 50, 90].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center justify-end">
                                <div 
                                    className="w-full bg-gray-300 rounded-t"
                                    style={{ height: `${height}%` }}
                                />
                                <span className="text-xs text-gray-400 mt-2">D{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Customer List Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-gray-600 uppercase">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Lorem Ipsum Id</th>
                                    <th className="px-4 py-3 font-medium">Lorem</th>
                                    <th className="px-4 py-3 font-medium">Ipsum</th>
                                    <th className="px-4 py-3 font-medium text-center">Dolor Sit</th>
                                    <th className="px-4 py-3 font-medium text-right">Amet Consectetur</th>
                                    <th className="px-4 py-3 font-medium">Adipiscing</th>
                                    <th className="px-4 py-3 font-medium text-center">Elit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            <Link href="#" className="hover:text-gray-700 hover:underline">
                                                #LOREM00{i}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">Lorem Ipsum Dolor</td>
                                        <td className="px-4 py-4 text-gray-600">+000000000000</td>
                                        <td className="px-4 py-4 text-center text-gray-600">{i * 5}</td>
                                        <td className="px-4 py-4 text-right text-gray-900 font-medium">RM {i},000.00</td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                i % 3 === 0 ? 'bg-gray-300 text-gray-700' :
                                                i % 3 === 1 ? 'bg-gray-200 text-gray-600' :
                                                'bg-gray-100 text-gray-500'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                                    i % 3 === 0 ? 'bg-gray-600' :
                                                    i % 3 === 1 ? 'bg-gray-500' :
                                                    'bg-gray-400'
                                                }`}></span>
                                                Lorem
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                                    <Mail size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
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
                        <ChevronLeft size={16} /> Lorem
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 text-white text-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">3</button>
                        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">00</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Ipsum <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
