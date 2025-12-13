'use client';

import React, { useState } from 'react';
import {
    Search,
    Filter,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Mail,
    Trash2,
    Users,
    UserPlus,
    Eye,
    ArrowUpRight,
    Calendar,
    AlertTriangle,
    CheckCircle,
    Package
} from 'lucide-react';
import Link from 'next/link';
import CustomersBarChart from '@/components/admin/charts/CustomersBarChart';

interface Customer {
    id: string;
    name: string;
    phone: string;
    orders: number;
    spend: string;
    status: string;
}

export default function AdminCustomersPage() {
    const [timeRange, setTimeRange] = useState<'thisWeek' | 'lastWeek'>('thisWeek');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [customers, setCustomers] = useState<Customer[]>([
        { id: '#CUST001', name: 'John Doe', phone: '+1234567890', orders: 25, spend: '3,450.00', status: 'Active' },
        { id: '#CUST002', name: 'Jane Smith', phone: '+1234567890', orders: 5, spend: '250.00', status: 'Inactive' },
        { id: '#CUST003', name: 'Emily Davis', phone: '+1234567890', orders: 30, spend: '4,600.00', status: 'VIP' },
        { id: '#CUST004', name: 'Michael Brown', phone: '+1234567890', orders: 12, spend: '1,200.00', status: 'Active' },
        { id: '#CUST005', name: 'Sarah Wilson', phone: '+1234567890', orders: 8, spend: '850.00', status: 'Active' },
        { id: '#CUST006', name: 'David Lee', phone: '+1234567890', orders: 3, spend: '150.00', status: 'Inactive' },
        { id: '#CUST007', name: 'Lisa Anderson', phone: '+1234567890', orders: 45, spend: '6,700.00', status: 'VIP' },
        { id: '#CUST008', name: 'Robert Taylor', phone: '+1234567890', orders: 18, spend: '2,100.00', status: 'Active' },
    ]);

    const toggleMenu = (menu: string) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleDeleteClick = (customer: Customer) => {
        setCustomerToDelete(customer);
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = () => {
        if (customerToDelete) {
            setCustomers(customers.filter(c => c.id !== customerToDelete.id));
            setShowDeleteConfirm(false);
            setShowSuccessModal(true);
            setCustomerToDelete(null);
        }
    };

    return (
        <div className="space-y-6" onClick={() => setActiveMenu(null)}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
                {/* Search removed as requested */}
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
                            <h3 className="text-sm font-medium text-gray-600">Visitor</h3>
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
                                onClick={(e) => { e.stopPropagation(); setTimeRange('thisWeek'); }}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${timeRange === 'thisWeek' ? 'bg-[#2B3433] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                This week
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setTimeRange('lastWeek'); }}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${timeRange === 'lastWeek' ? 'bg-[#2B3433] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                Last week
                            </button>
                            {/* Removed MoreVertical button */}
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">25k</p>
                            <p className="text-xs text-gray-500">Active Customers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">5.6k</p>
                            <p className="text-xs text-gray-500">Repeat Customers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">250k</p>
                            <p className="text-xs text-gray-500">Shop Visitor</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">5.5%</p>
                            <p className="text-xs text-gray-500">Conversion Rate</p>
                        </div>
                    </div>

                    {/* Chart Area with Chart.js */}
                    <div className="flex-1 bg-white relative min-h-[250px] w-full">
                        <CustomersBarChart timeRange={timeRange} />
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
                                    <th className="px-4 py-3 font-medium text-center">Order Count</th>
                                    <th className="px-4 py-3 font-medium text-right">Total Spend</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 font-medium text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {customers.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-4 py-16 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                                    <Users className="text-gray-400" size={32} />
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Customers Yet</h3>
                                                <p className="text-sm text-gray-500 max-w-sm">
                                                    Your customer list is empty. Start adding customers to see them here.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    customers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            <Link href="/admin/customers/1" className="hover:text-brand-teal hover:underline">
                                                {customer.id}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{customer.name}</td>
                                        <td className="px-4 py-4 text-gray-600">{customer.phone}</td>
                                        <td className="px-4 py-4 text-center text-gray-600">{customer.orders}</td>
                                        <td className="px-4 py-4 text-right text-gray-900 font-medium">RM {customer.spend}</td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                        ${customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                    customer.status === 'VIP' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 
                                            ${customer.status === 'Active' ? 'bg-green-500' :
                                                        customer.status === 'VIP' ? 'bg-yellow-500' :
                                                            'bg-red-500'}`}></span>
                                                {customer.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                                    <Mail size={16} />
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteClick(customer)}
                                                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                )}
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
                        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">24</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && customerToDelete && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                        <div className="p-6 space-y-4">
                            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                                <AlertTriangle size={24} className="text-red-600" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Customer?</h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    Are you sure you want to remove <span className="font-semibold text-gray-900">{customerToDelete.name}</span> from your customer list?
                                </p>
                                <p className="text-xs text-gray-400">
                                    This action cannot be undone. All customer data and history will be permanently deleted.
                                </p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => {
                                        setShowDeleteConfirm(false);
                                        setCustomerToDelete(null);
                                    }}
                                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                                >
                                    Delete Customer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                        <div className="p-6 space-y-4">
                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Removed Successfully! ✨</h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    The customer has been removed from your system.
                                </p>
                                <p className="text-xs text-gray-500">
                                    Your customer list has been updated and all changes are now live.
                                </p>
                            </div>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full px-4 py-2.5 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                                Got it, thanks!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
