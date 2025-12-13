"use client";

import { useState } from 'react';
import Link from 'next/link';
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
    XCircle,
    Truck,
    Package
} from 'lucide-react';

export default function OrderListingWireframePage() {
    const [activeTab, setActiveTab] = useState('All order');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const tabs = [
        { label: 'All order', count: 10 },
        { label: 'Completed', count: 8 },
        { label: 'Pending', count: 2 },
        { label: 'Canceled', count: 1 }
    ];

    return (
        <div className="space-y-8 grayscale">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum Dolor</h2>
                    <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Lorem Ipsum <MoreVertical size={16} />
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Lorem Ipsum Dolor</h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">0,000</span>
                        <span className="text-xs font-medium text-gray-600 flex items-center"><ArrowUp size={12} /> 00.0%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Lorem Ipsum Dolor</h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">000</span>
                        <span className="text-xs font-medium text-gray-600 flex items-center"><ArrowUp size={12} /> 00%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Lorem Ipsum Dolor</h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">000</span>
                        <span className="text-xs font-medium text-gray-600 flex items-center"><ArrowUp size={12} /> 00%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Lorem Ipsum Dolor</h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">00</span>
                        <span className="text-xs font-medium text-gray-600 flex items-center"><ArrowDown size={12} /> 0%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem 0 ipsum</p>
                </div>
            </div>

            {/* Order List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs & Toolbar */}
                <div className="p-6 border-b border-gray-100 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.label}
                                onClick={() => setActiveTab(tab.label)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab.label
                                    ? 'bg-gray-800 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {tab.label} {tab.count > 0 && <span className="opacity-70 ml-1">({tab.count})</span>}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="relative flex-1 max-w-lg">
                            <input
                                type="text"
                                placeholder="Lorem ipsum dolor sit"
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none transition-shadow shadow-sm"
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                                <Filter size={18} />
                            </button>
                            <button
                                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                {sortOrder === 'asc' ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                            </button>
                            <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="px-6 py-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white uppercase bg-gray-600">
                                <tr>
                                    <th className="p-4 w-4">
                                        <input 
                                            type="checkbox" 
                                            className="rounded border-gray-300 text-gray-600" 
                                        />
                                    </th>
                                    <th className="px-4 py-3 font-medium">No.</th>
                                    <th className="px-4 py-3 font-medium">Lorem ID</th>
                                    <th className="px-4 py-3 font-medium">Ipsum</th>
                                    <th className="px-4 py-3 font-medium">Dolor</th>
                                    <th className="px-4 py-3 font-medium">Sit</th>
                                    <th className="px-4 py-3 font-medium">Amet</th>
                                    <th className="px-4 py-3 font-medium">Consectetur</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 group cursor-pointer">
                                        <td className="p-4">
                                            <input 
                                                type="checkbox" 
                                                className="rounded border-gray-300 text-gray-600" 
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">LOREM-000{i}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            <Link href="#" className="hover:text-gray-700 hover:underline">
                                                #LOREM-000{i}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4">
                                            <Link href="#" className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <span className="font-medium text-gray-900">
                                                    Lorem Ipsum Dolor
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">Ipsum 00, 0000</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">RM {i},000.00</td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-gray-500' : 'bg-gray-400'}`}></div>
                                                <span className="font-medium text-gray-900">{i % 2 === 0 ? 'Lorem' : 'Ipsum'}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className={`flex items-center gap-2 ${
                                                i % 4 === 0 ? 'text-gray-700' :
                                                i % 4 === 1 ? 'text-gray-600' :
                                                i % 4 === 2 ? 'text-gray-600' : 'text-gray-500'
                                            }`}>
                                                {i % 4 === 0 ? <CheckCircle2 size={16} /> :
                                                    i % 4 === 1 ? <Clock size={16} /> :
                                                    i % 4 === 2 ? <Truck size={16} /> :
                                                        <XCircle size={16} />
                                                }
                                                <span className="font-medium">
                                                    {i % 4 === 0 ? 'Lorem' :
                                                        i % 4 === 1 ? 'Ipsum' :
                                                        i % 4 === 2 ? 'Dolor' : 'Sit'}
                                                </span>
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
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm bg-gray-800 text-white">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-gray-100 text-gray-600">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-gray-100 text-gray-600">
                            3
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-gray-100 text-gray-600">
                            00
                        </button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Ipsum <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
