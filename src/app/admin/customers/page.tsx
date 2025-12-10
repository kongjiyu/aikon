'use client';

import React from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  Trash2,
  Users,
  UserPlus,
  Eye,
  ArrowUpRight,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export default function AdminCustomersPage() {
  const customers = [
    { id: '#CUST001', name: 'John Doe', phone: '+1234567890', orders: 25, spend: '3,450.00', status: 'Active' },
    { id: '#CUST002', name: 'Jane Smith', phone: '+1234567890', orders: 5, spend: '250.00', status: 'Inactive' },
    { id: '#CUST003', name: 'Emily Davis', phone: '+1234567890', orders: 30, spend: '4,600.00', status: 'VIP' },
    { id: '#CUST004', name: 'Michael Brown', phone: '+1234567890', orders: 12, spend: '1,200.00', status: 'Active' },
    { id: '#CUST005', name: 'Sarah Wilson', phone: '+1234567890', orders: 8, spend: '850.00', status: 'Active' },
    { id: '#CUST006', name: 'David Lee', phone: '+1234567890', orders: 3, spend: '150.00', status: 'Inactive' },
    { id: '#CUST007', name: 'Lisa Anderson', phone: '+1234567890', orders: 45, spend: '6,700.00', status: 'VIP' },
    { id: '#CUST008', name: 'Robert Taylor', phone: '+1234567890', orders: 18, spend: '2,100.00', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Search data, users, or reports" 
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Stats & Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Stats Cards */}
        <div className="space-y-6">
            {/* Total Customers */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Total Customers</h3>
                    <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
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
                    <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
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
                    <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
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

        {/* Right Column: Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800">Customer Overview</h3>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-xs font-medium bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">This week</button>
                    <button className="px-3 py-1 text-xs font-medium bg-brand-dark text-white rounded-md">Last week</button>
                    <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
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

            {/* Mock Chart Area */}
            <div className="flex-1 bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden min-h-[200px]">
                <div className="absolute inset-0 flex items-end justify-between px-4 pb-0 opacity-30">
                    {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                        <div key={i} className="w-full bg-brand-teal mx-1 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Chart Visualization Placeholder</p>
                </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
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
                            <th className="px-4 py-3 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {customers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-4 font-medium text-gray-900">
                                    <Link href="/admin/customers/1" className="hover:text-brand-teal hover:underline">
                                        {customer.id}
                                    </Link>
                                </td>
                                <td className="px-4 py-4 text-gray-600">{customer.name}</td>
                                <td className="px-4 py-4 text-gray-600">{customer.phone}</td>
                                <td className="px-4 py-4 text-center text-gray-600">{customer.orders}</td>
                                <td className="px-4 py-4 text-right text-gray-900 font-medium">${customer.spend}</td>
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
                                <td className="px-4 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                            <MessageSquare size={16} />
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
                <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">24</button>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                Next <ChevronRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
}
