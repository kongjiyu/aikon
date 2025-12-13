'use client';

import { useState } from 'react';
import {
    Plus,
    Search,
    Filter,
    Ticket,
    Copy,
    Calendar as CalendarIcon,
    Edit,
    Trash2,
    ChevronLeft,
    ChevronRight,
    X,
    CheckCircle
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function VouchersWireframe() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Vouchers</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage discount codes and coupons</p>
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                    <Plus size={16} />
                    Create Voucher
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Active Coupons</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">24</h3>
                    </div>
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                        <Ticket size={20} />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Used</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">1,203</h3>
                    </div>
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                        <Copy size={20} />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Expired</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">8</h3>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                        <CalendarIcon size={20} />
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Controls */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">

                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search vouchers..."
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#748E8B]/50 transition-shadow shadow-sm"
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="1">Active</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="1">Fixed Amount</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="px-6 py-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white uppercase bg-brand-sage">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Code / Name</th>
                                    <th className="px-4 py-3 font-medium">Discount</th>
                                    <th className="px-4 py-3 font-medium">Usage</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 font-medium">Valid Until</th>
                                    <th className="px-4 py-3 font-medium text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 group transition-colors">
                                        <td className="px-4 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 border border-dashed border-gray-300 bg-gray-50 px-2 py-0.5 rounded w-fit mb-1">SUMMERSALE-{i}</span>
                                                <span className="text-xs text-gray-400">Summer Sale Voucher {i}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="font-medium text-gray-900">20% OFF</span>
                                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">Percent</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full bg-green-500" style={{ width: '50%' }}></div>
                                                </div>
                                                <span className="text-xs">500 / 1000</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-green-500`}></span>
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">
                                            Dec 31, 2025
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                                >
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
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 text-white text-sm">1</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
