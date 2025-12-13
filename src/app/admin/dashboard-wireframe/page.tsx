'use client';

import {
    ArrowUp,
    ArrowDown,
    Search,
    Filter,
    ChevronRight,
    AlertTriangle,
    Package
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Flag = ({ color }: { color: string }) => (
    <div className={`w-5 h-3.5 rounded-sm ${color}`}></div>
);

export default function DashboardWireframe() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [timeRange, setTimeRange] = useState<'thisWeek' | 'lastWeek'>('thisWeek');
    const [activeMetric, setActiveMetric] = useState<string>('revenue');

    // Placeholder Metrics Data
    const metricsData: Record<string, { thisWeek: number[]; lastWeek: number[] }> = {
        revenue: {
            thisWeek: [15, 22, 18, 45, 25, 30, 40],
            lastWeek: [12, 15, 10, 30, 20, 25, 28]
        },
        customers: {
            thisWeek: [5, 8, 6, 12, 8, 10, 15],
            lastWeek: [4, 6, 5, 8, 7, 8, 10]
        },
        products: {
            thisWeek: [20, 20, 21, 21, 22, 22, 23],
            lastWeek: [18, 18, 19, 19, 19, 20, 20]
        },
        stock: {
            thisWeek: [40, 38, 35, 30, 28, 25, 20],
            lastWeek: [45, 43, 40, 38, 35, 32, 30]
        },
        outStock: {
            thisWeek: [0, 1, 2, 3, 3, 4, 5],
            lastWeek: [0, 0, 1, 1, 2, 2, 3]
        }
    };

    const toggleMenu = (menu: string) => activeMenu === menu ? setActiveMenu(null) : setActiveMenu(menu);

    const FilterMenu = () => (
        activeMenu === 'filter' && (
            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg py-1 border border-gray-100 z-50 w-40 animate-in fade-in zoom-in-95 duration-100">
                {['All', 'Electronics', 'Clothing', 'Home & Garden'].map((cat) => (
                    <button
                        key={cat}
                        onClick={(e) => { e.stopPropagation(); setActiveMenu(null); }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        )
    );

    return (
        <div className="space-y-6" onClick={() => setActiveMenu(null)}>
            {/* 1. Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Sales */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600">Total Sales</h3>
                            <p className="text-xs text-gray-400 mt-1">Last 30 days</p>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 relative z-10">
                        <span className="text-3xl font-bold text-gray-900">RM 123.4K</span>
                        <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full">
                            <ArrowUp size={10} className="ml-1" /> 10.4%
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 relative z-10">+RM 2.3k from last month</p>
                    <div className="mt-6 flex justify-end relative z-10">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
                </div>

                {/* Total Orders */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600">Total Orders</h3>
                            <p className="text-xs text-gray-400 mt-1">Last 30 days</p>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 relative z-10">
                        <span className="text-3xl font-bold text-gray-900">456</span>
                        <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full">
                            <ArrowUp size={10} className="ml-1" /> 14.4%
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 relative z-10">+76 form last month</p>
                    <div className="mt-6 flex justify-end relative z-10">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
                </div>

                {/* Low Stock Alerts */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-visible group hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-4 relative z-20">
                        <div className="flex items-center gap-2">
                            <AlertTriangle size={18} className="text-red-500" />
                            <h3 className="font-bold text-gray-900">Low Stock Alerts</h3>
                        </div>
                    </div>

                    <div className="space-y-3 relative z-10 max-h-[140px] overflow-y-auto custom-scrollbar pr-1">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50/50 transition-colors">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center p-1">
                                        <img src="https://placehold.co/100x100" alt="Placeholder" className="w-full h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-bold text-gray-900 truncate max-w-[120px]">Product {i}</p>
                                        <p className="text-[10px] text-red-500 font-medium">Only {i} left</p>
                                    </div>
                                </div>
                                <button className="p-1.5 bg-gray-50 text-gray-500 rounded hover:text-brand-dark hover:bg-white shadow-sm">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-end relative z-10">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">View All</button>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/10 transition-colors"></div>
                </div>
            </div>

            {/* 2. Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Report for this week */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-gray-900 text-lg">Revenue Report</h3>
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setTimeRange('thisWeek')}
                                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${timeRange === 'thisWeek' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                This Week
                            </button>
                            <button
                                onClick={() => setTimeRange('lastWeek')}
                                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${timeRange === 'lastWeek' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Last Week
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-8">
                        {[
                            { label: 'Customers', metric: 'customers', value: '42' },
                            { label: 'Products', metric: 'products', value: '100' },
                            { label: 'Stock', metric: 'stock', value: '80' },
                            { label: 'Out of Stock', metric: 'outStock', value: '5' },
                            { label: 'Revenue', metric: 'revenue', value: 'RM 12.3k' }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveMetric(stat.metric)}
                                className={`group cursor-pointer p-2 rounded-lg transition-all ${activeMetric === stat.metric ? 'bg-gray-50 ring-1 ring-brand-teal/20' : 'hover:bg-gray-50'}`}
                            >
                                <p className={`text-2xl font-bold transition-colors ${activeMetric === stat.metric ? 'text-brand-dark' : 'text-gray-900'}`}>{stat.value}</p>
                                <p className={`text-xs font-medium transition-colors ${activeMetric === stat.metric ? 'text-brand-teal' : 'text-gray-500'}`}>{stat.label}</p>
                                <div className={`h-1 w-8 mt-2 rounded-full transition-colors ${activeMetric === stat.metric ? 'bg-brand-dark' : 'bg-transparent group-hover:bg-gray-200'}`}></div>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 relative min-h-[250px] w-full bg-gradient-to-b from-white to-gray-50/30 rounded-lg p-4 flex items-center justify-center">
                        <img src="https://placehold.co/600x300?text=Chart+Placeholder" alt="Chart Placeholder" className="w-full h-full object-cover opacity-50" />
                    </div>
                </div>

                {/* Users in last 30 minutes */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Live Visitors</h3>
                            <div className="text-4xl font-bold text-gray-900 mt-2">124</div>
                            <p className="text-xs text-green-500 mt-1 flex items-center"><ArrowUp size={10} className="mr-1" /> Visitors per minute</p>
                        </div>
                    </div>

                    {/* Bar Chart Mock with Chart.js */}
                    <div className="h-64 mb-6 mt-4 flex items-end justify-center">
                        <img src="https://placehold.co/300x200?text=Bar+Chart" alt="Bar Chart Placeholder" className="w-full h-full object-cover opacity-50" />
                    </div>
                </div>
            </div>

            {/* 3. Transaction & Top Products Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Transaction Table */}
                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-900">Recent Orders</h3>
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                            View All <ChevronRight size={12} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-400 font-medium border-b border-gray-100">
                                <tr>
                                    <th className="pb-3 pl-2">Order ID</th>
                                    <th className="pb-3">Customer</th>
                                    <th className="pb-3">Date</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors">
                                        <td className="py-3 pl-2 font-medium text-brand-teal">
                                            #{1000 + i}
                                        </td>
                                        <td className="py-3 font-semibold text-gray-900">Customer {i}</td>
                                        <td className="py-3">2024-01-0{i}</td>
                                        <td className="py-3 font-medium flex items-center gap-1.5">
                                            <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                                            Completed
                                        </td>
                                        <td className="py-3 font-bold text-gray-900">RM 10{i}.00</td>
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
                        <h3 className="font-bold text-gray-900">Top Selling Products</h3>
                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); toggleMenu('filter'); }}
                                className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-700"
                            >
                                Filter <Filter size={12} />
                            </button>
                            <FilterMenu />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-gray-500 font-medium uppercase rounded-lg overflow-hidden">
                                <tr>
                                    <th className="py-3 pl-4 rounded-l-lg">Product</th>
                                    <th className="py-3">Category</th>
                                    <th className="py-3">Sales</th>
                                    <th className="py-3 pr-4 rounded-r-lg text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                        <td className="py-3 pl-2 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center p-1">
                                                <img src="https://placehold.co/100x100" alt="Placeholder" className="w-full h-full object-contain mix-blend-multiply" />
                                            </div>
                                            <span className="font-semibold text-gray-900 text-xs">Product {i}</span>
                                        </td>
                                        <td className="py-3 text-xs">Category {i}</td>
                                        <td className="py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-700">{10 * i} unit</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-2 text-right font-bold text-gray-900 text-xs">RM {99 * i}.00</td>
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
                            <h3 className="text-sm font-semibold text-gray-600">Order Status</h3>
                            <p className="text-xs text-gray-400 mt-1">Overview</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <p className="text-xs font-medium text-gray-500">Pending</p>
                            </div>
                            <p className="text-xl font-bold text-gray-900">12 <span className="text-[10px] font-normal text-gray-400 ml-1">orders</span></p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <p className="text-xs font-medium text-gray-500">Cancelled</p>
                            </div>
                            <p className="text-xl font-bold text-gray-900">5 <span className="text-[10px] font-medium text-red-500 bg-red-50 px-1 rounded ml-1"><ArrowDown size={8} className="inline" /> ~4%</span></p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
