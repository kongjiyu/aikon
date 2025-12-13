'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    MoreVertical,
    Search,
    Filter,
    ArrowUp,
    ArrowDown,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Clock,
    Package
} from 'lucide-react';

export default function OrderListingWireframe() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('All order');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const tabs = [
        { label: 'All order', count: 100 },
        { label: 'Completed', count: 80 },
        { label: 'Pending', count: 15 },
        { label: 'Canceled', count: 5 }
    ];

    return (
        <div className="space-y-8" onClick={() => setActiveMenu(null)}>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Order List</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage and track your orders</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => toggleMenu('header-more')}
                            className={`flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors ${activeMenu === 'header-more' ? 'ring-2 ring-brand-teal/20' : ''}`}
                        >
                            Button Text <MoreVertical size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Orders', value: '1,240', change: '14.4%', color: 'green' },
                    { label: 'New Orders', value: '240', change: '20%', color: 'green' },
                    { label: 'Completed Orders', value: '960', change: '85%', color: 'green' },
                    { label: 'Canceled Orders', value: '87', change: '5%', color: 'red' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                            <span className={`text-xs font-medium text-${stat.color}-500 flex items-center`}>
                                {stat.color === 'green' ? <ArrowUp size={12} /> : <ArrowDown size={12} />} {stat.change}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                    </div>
                ))}
            </div>

            {/* Order List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs & Toolbar */}
                <div className="p-6 border-b border-gray-100 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.label}
                                onClick={(e) => { e.stopPropagation(); setActiveTab(tab.label); }}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab.label
                                    ? 'bg-[#2B3433] text-white shadow-md'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {tab.label} <span className="opacity-70 ml-1">({tab.count})</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="relative flex-1 max-w-lg">
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#748E8B]/50 transition-shadow shadow-sm"
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Filter Button */}
                            <button
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
                                title="Filter"
                            >
                                <Filter size={18} />
                            </button>

                            {/* Sort Button */}
                            <button
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
                                title="Sort"
                            >
                                <ArrowDown size={18} />
                            </button>

                            {/* Three Dot Menu */}
                            <button
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
                                title="More"
                            >
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="px-6 py-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white uppercase bg-brand-sage">
                                <tr>
                                    <th className="p-4 w-4">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-brand-sage focus:ring-brand-sage"
                                        />
                                    </th>
                                    <th className="px-4 py-3 font-medium">No.</th>
                                    <th className="px-4 py-3 font-medium">Order ID</th>
                                    <th className="px-4 py-3 font-medium">Product</th>
                                    <th className="px-4 py-3 font-medium">Date</th>
                                    <th className="px-4 py-3 font-medium">Price</th>
                                    <th className="px-4 py-3 font-medium">Payment</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 group cursor-pointer">
                                        <td className="p-4">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-brand-sage focus:ring-brand-sage"
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{1000 + i}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            #{1000 + i}
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    <img src="https://placehold.co/100x100" alt="Placeholder" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="font-medium text-gray-900">
                                                    Product {i}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">2024-01-0{i}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">RM {100 * i}.00</td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                                                <span className="font-medium text-gray-900">Paid</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className={`flex items-center gap-2 text-green-600`}>
                                                <CheckCircle2 size={16} />
                                                <span className="font-medium">Delivered</span>
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
                    <button
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm bg-brand-dark text-white">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-gray-100 text-gray-600">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-gray-100 text-gray-600">3</button>
                    </div>
                    <button
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                    >
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
