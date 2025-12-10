"use client";

import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Ticket,
  Copy,
  Trash2,
  Edit
} from 'lucide-react';

export default function CouponsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coupon Codes</h1>
          <p className="text-sm text-gray-500 mt-1">Manage discount vouchers and promo codes</p>
        </div>
        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          <Plus size={16} />
          Create New Coupon
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Active Coupons</p>
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
            <Calendar size={20} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Controls */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search coupons..."
              className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-500 font-medium uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-3">Code / Name</th>
                <th className="px-6 py-3">Discount</th>
                <th className="px-6 py-3">Usage</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Valid Until</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { code: 'SUMMER2025', name: 'Summer Sale', discount: '20% OFF', type: 'Percent', used: 450, limit: 1000, status: 'Active', date: 'Dec 31, 2025' },
                { code: 'WELCOME10', name: 'New User Promo', discount: '$10.00', type: 'Fixed', used: 890, limit: '∞', status: 'Active', date: 'No Expiry' },
                { code: 'FLASH50', name: 'Flash Deal', discount: '50% OFF', type: 'Percent', used: 100, limit: 100, status: 'Expired', date: 'Oct 01, 2025' },
                { code: 'FREESHIP', name: 'Free Shipping', discount: 'Free Ship', type: 'Shipping', used: 230, limit: 500, status: 'Active', date: 'Jan 15, 2026' },
                { code: 'VIPMEMBER', name: 'VIP Exclusive', discount: '15% OFF', type: 'Percent', used: 45, limit: 200, status: 'Scheduled', date: 'Starts Dec 20' },
              ].map((coupon, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 border border-dashed border-gray-300 bg-gray-50 px-2 py-0.5 rounded w-fit mb-1">{coupon.code}</span>
                      <span className="text-xs text-gray-400">{coupon.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">{coupon.discount}</span>
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{coupon.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${coupon.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} style={{ width: typeof coupon.limit === 'number' ? `${(coupon.used / coupon.limit) * 100}%` : '50%' }}></div>
                      </div>
                      <span className="text-xs">{coupon.used} / {coupon.limit}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${coupon.status === 'Active' ? 'bg-green-50 text-green-600' :
                        coupon.status === 'Expired' ? 'bg-red-50 text-red-600' :
                          'bg-yellow-50 text-yellow-600'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${coupon.status === 'Active' ? 'bg-green-500' :
                          coupon.status === 'Expired' ? 'bg-red-500' :
                            'bg-yellow-500'
                        }`}></span>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {coupon.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <p>Showing 1-5 of 24 coupons</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
