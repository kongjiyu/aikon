'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockOrders, Order, OrderStatus as OrderStatusType } from '@/data/mockData';

type OrderStatus = 'all' | OrderStatusType;

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter orders based on active tab
  const filteredOrders = mockOrders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = order.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalOrders = mockOrders.length;
  const completedCount = mockOrders.filter(o => o.status === 'delivered').length;
  const pendingCount = mockOrders.filter(o => o.status === 'pending').length;
  const cancelledCount = mockOrders.filter(o => o.status === 'cancelled').length;

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600';
      case 'cancelled':
        return 'text-red-600';
      case 'pending':
        return 'text-orange-500';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return (
          <Image 
            src="/images/delivered.png" 
            alt="Delivered" 
            width={16} 
            height={16}
            className="inline"
          />
        );
      case 'cancelled':
        return (
          <Image 
            src="/images/cancelled.png" 
            alt="Cancelled" 
            width={16} 
            height={16}
            className="inline"
          />
        );
      case 'pending':
        return (
          <Image 
            src="/images/pending.png" 
            alt="Pending" 
            width={16} 
            height={16}
            className="inline"
          />
        );
    }
  };

  const getStatusLabel = (status: Order['status']) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Order</h1>

      {/* Filters and Search Row */}
      <div className="flex justify-between items-center gap-4 mb-6">
        {/* Filter Tabs - Compact row on the left */}
        <div className="bg-[#6B8784] rounded-lg px-2 py-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            All order ({totalOrders})
          </button>
          <button
            onClick={() => setActiveTab('delivered')}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'delivered'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Delivered
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'pending'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'cancelled'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Cancelled
          </button>
        </div>

        {/* Search and Actions - Right side without background */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search order"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>

          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-[#6B8784] text-white">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 font-medium text-sm">
            <div className="col-span-3 text-center">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-1 text-center">Qty</div>
            <div className="col-span-2 text-center">Date</div>
            <div className="col-span-1 text-center">Status</div>
            <div className="col-span-3 text-center">Action</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {filteredOrders.map((order) => (
            <Link 
              key={order.id} 
              href={`/orders/${order.id}`}
              className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Product */}
              <div className="col-span-3 flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image 
                    src={order.miniImage} 
                    alt={order.productName}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{order.productName}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-3 h-3 rounded-full ${
                      order.color === 'Space Gray' ? 'bg-gray-500' :
                      order.color === 'Pure Green' ? 'bg-green-500' :
                      order.color === 'Pure Black' ? 'bg-black' :
                      order.color === 'Orange' ? 'bg-orange-500' :
                      order.color === 'Light Green' ? 'bg-green-400' : 'bg-gray-300'
                    }`}></div>
                    <span className="text-sm text-gray-600">{order.color}</span>
                    {order.storage && (
                      <span className="text-sm text-gray-400">| {order.storage}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 text-center">
                <span className="font-semibold text-gray-900">RM {order.price.toFixed(2)}</span>
              </div>

              {/* Quantity */}
              <div className="col-span-1 text-center">
                <span className="text-gray-900">{order.quantity}</span>
              </div>

              {/* Date */}
              <div className="col-span-2 text-center">
                <span className="text-gray-600">{order.date}</span>
              </div>

              {/* Status */}
              <div className="col-span-1">
                <span className={`inline-flex items-center gap-2 font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {getStatusLabel(order.status)}
                </span>
              </div>

              {/* Action */}
              <div className="col-span-3 text-center">
                <span className="inline-flex items-center gap-1 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Order
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-lg bg-teal-700 text-white font-medium">1</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">2</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">3</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">4</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">5</button>
          <span className="px-2 text-gray-400">...</span>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">24</button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors">
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
