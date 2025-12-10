'use client';

import React from 'react';
import { 
  ArrowLeft, 
  Copy, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  Calendar,
  ShoppingBag,
  CheckCircle,
  XCircle,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function AdminCustomerDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch customer data based on params.id
  const customer = {
    id: '#CUST001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, NY',
    status: 'Active',
    registrationDate: '15.01.2025',
    lastPurchase: '10.01.2025',
    stats: {
      totalOrders: 150,
      completed: 140,
      canceled: 10
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/customers" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Customer Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Profile Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://ui-avatars.com/api/?name=John+Doe&background=random" 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-900 truncate">{customer.name}</h2>
                <p className="text-sm text-gray-500 truncate">{customer.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {customer.id}
                  </span>
                  <button className="text-brand-teal hover:text-brand-dark">
                    <Copy size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Customer Info</h3>
              
              <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                <Phone size={18} className="text-gray-400" />
                <span className="text-sm text-gray-700">{customer.phone}</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-sm text-gray-700">{customer.address}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Social Media</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors">
                  <MessageCircle size={18} />
                </button>
                <button className="p-2 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-100 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors">
                  <Instagram size={18} />
                </button>
              </div>
            </div>

            {/* Activity */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Activity</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Registration:</span>
                  <span className="font-medium text-gray-900">{customer.registrationDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Last purchase:</span>
                  <span className="font-medium text-gray-900">{customer.lastPurchase}</span>
                </div>
              </div>
            </div>

            {/* Order Overview */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Order Overview</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <p className="text-xl font-bold text-blue-600">{customer.stats.totalOrders}</p>
                  <p className="text-[10px] text-blue-400 uppercase mt-1">Total Order</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg text-center">
                  <p className="text-xl font-bold text-green-600">{customer.stats.completed}</p>
                  <p className="text-[10px] text-green-400 uppercase mt-1">Completed</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg text-center">
                  <p className="text-xl font-bold text-red-600">{customer.stats.canceled}</p>
                  <p className="text-[10px] text-red-400 uppercase mt-1">Canceled</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Orders / Detailed Stats (Expanded View) */}
        <div className="lg:col-span-2 space-y-6">
          {/* We can add a chart or a list of recent orders here to fill the space */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Items</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-brand-teal">#ORD-7782{i}</td>
                      <td className="px-4 py-3 text-gray-600">Oct 24, 2025</td>
                      <td className="px-4 py-3 text-gray-600">3 items</td>
                      <td className="px-4 py-3 font-medium text-gray-900">,240.00</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Additional Info Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
             <h3 className="font-bold text-gray-800 mb-4">Notes</h3>
             <textarea 
                className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                rows={4}
                placeholder="Add notes about this customer..."
             ></textarea>
             <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-brand-dark text-white rounded-lg text-sm hover:bg-gray-800">Save Note</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
