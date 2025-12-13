"use client";

import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  AlertTriangle,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminDashboardWireframe() {
  const [timeRange, setTimeRange] = useState<'thisWeek' | 'lastWeek'>('thisWeek');
  const [activeMetric, setActiveMetric] = useState<string>('revenue');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  return (
    <div className="space-y-6 grayscale">
            {/* 1. Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Sales */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600">Lorem Ipsum Dolor</h3>
                            <p className="text-xs text-gray-400 mt-1">Sit amet</p>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 relative z-10">
                        <span className="text-3xl font-bold text-gray-900">RM 000.0K</span>
                        <span className="text-xs font-semibold text-gray-600 flex items-center bg-gray-100 px-1.5 py-0.5 rounded-full">
                            <ArrowUp size={10} className="ml-1" /> 00.0%
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 relative z-10">+RM 0.0k lorem ipsum</p>
                    <div className="mt-6 flex justify-end relative z-10">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Lorem</button>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
                </div>

                {/* Total Orders */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600">Lorem Ipsum Dolor</h3>
                            <p className="text-xs text-gray-400 mt-1">Sit amet</p>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 relative z-10">
                        <span className="text-3xl font-bold text-gray-900">000</span>
                        <span className="text-xs font-semibold text-gray-600 flex items-center bg-gray-100 px-1.5 py-0.5 rounded-full">
                            <ArrowUp size={10} className="ml-1" /> 00.0%
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 relative z-10">+00 lorem ipsum</p>
                    <div className="mt-6 flex justify-end relative z-10">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Lorem</button>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
                </div>

                {/* Low Stock Alerts */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-visible group hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-4 relative z-20">
                        <div className="flex items-center gap-2">
                            <AlertTriangle size={18} className="text-gray-500" />
                            <h3 className="font-bold text-gray-900">Lorem Ipsum Dolor</h3>
                        </div>
                    </div>

                    <div className="space-y-3 relative z-10 max-h-[140px] overflow-y-auto custom-scrollbar pr-1">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-bold text-gray-900 truncate max-w-[120px]">Lorem Ipsum {i}</p>
                                        <p className="text-[10px] text-gray-500 font-medium">Lorem {i} left</p>
                                    </div>
                                </div>
                                <button className="p-1.5 bg-gray-50 text-gray-500 rounded hover:text-gray-700 hover:bg-white shadow-sm">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-end relative z-10">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Lorem Ipsum</button>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-2xl pointer-events-none group-hover:bg-gray-200 transition-colors"></div>
                </div>
            </div>

            {/* 2. Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Report for this week */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-gray-900 text-lg">Lorem Ipsum Dolor</h3>
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setTimeRange('thisWeek')}
                                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${timeRange === 'thisWeek' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Lorem Ipsum
                            </button>
                            <button
                                onClick={() => setTimeRange('lastWeek')}
                                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${timeRange === 'lastWeek' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Dolor Sit
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-8">
                        {[
                            { label: 'Lorem Ipsum', metric: 'customers', value: '00' },
                            { label: 'Dolor Sit', metric: 'products', value: '000' },
                            { label: 'Amet', metric: 'stock', value: '00' },
                            { label: 'Consectetur', metric: 'outStock', value: '0' },
                            { label: 'Adipiscing', metric: 'revenue', value: 'RM 00.0k' }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveMetric(stat.metric)}
                                className={`group cursor-pointer p-2 rounded-lg transition-all ${activeMetric === stat.metric ? 'bg-gray-50 ring-1 ring-gray-300' : 'hover:bg-gray-50'}`}
                            >
                                <p className={`text-2xl font-bold transition-colors ${activeMetric === stat.metric ? 'text-gray-800' : 'text-gray-900'}`}>{stat.value}</p>
                                <p className={`text-xs font-medium transition-colors ${activeMetric === stat.metric ? 'text-gray-600' : 'text-gray-500'}`}>{stat.label}</p>
                                <div className={`h-1 w-8 mt-2 rounded-full transition-colors ${activeMetric === stat.metric ? 'bg-gray-700' : 'bg-transparent group-hover:bg-gray-200'}`}></div>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 relative min-h-[250px] w-full bg-gradient-to-b from-white to-gray-50/30 rounded-lg p-4 flex items-end justify-around gap-2">
                        {[20, 35, 25, 60, 40, 50, 65].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                                <div className="w-full relative" style={{ height: '200px' }}>
                                    <div 
                                        className="absolute bottom-0 w-full bg-gray-200 rounded-t"
                                        style={{ height: `${height}%` }}
                                    />
                                </div>
                                <span className="text-xs text-gray-400 mt-2">D{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Users in last 30 minutes */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Lorem Ipsum</h3>
                            <div className="text-4xl font-bold text-gray-900 mt-2">000</div>
                            <p className="text-xs text-gray-600 mt-1 flex items-center"><ArrowUp size={10} className="mr-1" /> Lorem ipsum dolor</p>
                        </div>
                    </div>

                    {/* Bar Chart Mock */}
                    <div className="h-64 mb-6 mt-4 flex items-end justify-around gap-2">
                        {[40, 60, 35, 80, 50, 70, 45, 65, 55, 75, 40, 85].map((height, i) => (
                            <div 
                                key={i}
                                className="flex-1 bg-gray-300 rounded-t"
                                style={{ height: `${height}%` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Transaction & Top Products Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Transaction Table */}
                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-900">Lorem Ipsum Dolor</h3>
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                            Lorem Ipsum <ChevronRight size={12} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-400 font-medium border-b border-gray-100">
                                <tr>
                                    <th className="pb-3 pl-2">Lorem ID</th>
                                    <th className="pb-3">Ipsum</th>
                                    <th className="pb-3">Dolor</th>
                                    <th className="pb-3">Sit</th>
                                    <th className="pb-3">Amet</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors">
                                        <td className="py-3 pl-2 font-medium text-gray-700">
                                            #LOREM-000{i}
                                        </td>
                                        <td className="py-3 font-semibold text-gray-900">Lorem Ipsum {i}</td>
                                        <td className="py-3">Ipsum 00, 0000</td>
                                        <td className="py-3 font-medium flex items-center gap-1.5">
                                            <div className={`w-2 h-2 rounded-full bg-gray-500`}></div>
                                            Lorem
                                        </td>
                                        <td className="py-3 font-bold text-gray-900">RM {i},000.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 4. Best Selling & Order Status (Moved to Bottom) Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Best selling product */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-900">Lorem ipsum dolor sit amet</h3>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-700">
                            Lorem <Filter size={12} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-gray-500 font-medium uppercase rounded-lg overflow-hidden">
                                <tr>
                                    <th className="py-3 pl-4 rounded-l-lg">Lorem</th>
                                    <th className="py-3">Ipsum</th>
                                    <th className="py-3">Dolor</th>
                                    <th className="py-3 pr-4 rounded-r-lg text-right">Sit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                        <td className="py-3 pl-2 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-gray-900 text-xs">Lorem Ipsum Dolor {i}</span>
                                        </td>
                                        <td className="py-3 text-xs">Lorem Ipsum</td>
                                        <td className="py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-700">{10 * i} unit</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-2 text-right font-bold text-gray-900 text-xs">RM {i},000.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Order Status Widget */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600">Lorem Ipsum Dolor</h3>
                            <p className="text-xs text-gray-400 mt-1">Sit amet</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                <p className="text-xs font-medium text-gray-500">Lorem</p>
                            </div>
                            <p className="text-xl font-bold text-gray-900">00 <span className="text-[10px] font-normal text-gray-400 ml-1">lorem</span></p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                                <p className="text-xs font-medium text-gray-500">Ipsum</p>
                            </div>
                            <p className="text-xl font-bold text-gray-900">0 <span className="text-[10px] font-medium text-gray-600 bg-gray-100 px-1 rounded ml-1"><ArrowDown size={8} className="inline" /> ~0%</span></p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Lorem</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
