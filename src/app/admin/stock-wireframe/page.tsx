'use client';

import { useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, Pencil, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function StockWireframe() {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="space-y-8 grayscale">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Lorem Ipsum Dolor</h2>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet consectetur adipiscing</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Lorem Ipsum', value: '458', status: 'Lorem' },
          { label: 'Lorem Dolor', value: '23', status: 'Lorem' },
          { label: 'Lorem Sit', value: '12', status: 'Lorem' },
          { label: 'Lorem Amet', value: '$145,280', status: 'Lorem' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.status}</p>
          </div>
        ))}
      </div>

      {/* List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Lorem ipsum dolor sit..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <Filter size={18} className="mr-2" />
                  <SelectValue placeholder="Lorem Ipsum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Lorem Ipsum</SelectItem>
                  <SelectItem value="low">Lorem Dolor</SelectItem>
                  <SelectItem value="out">Lorem Sit</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-6 pb-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white bg-gray-700 uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Lorem Ipsum</th>
                  <th className="px-4 py-3 font-medium">Lorem SKU</th>
                  <th className="px-4 py-3 font-medium">Lorem Dolor</th>
                  <th className="px-4 py-3 font-medium">Lorem Sit</th>
                  <th className="px-4 py-3 font-medium">Lorem Amet</th>
                  <th className="px-2 py-3 font-medium text-center">Lorem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Lorem Ipsum Dolor Sit', sku: 'SKU-1234', category: 'Lorem', stock: 145, status: 'in' },
                  { name: 'Consectetur Adipiscing Elit', sku: 'SKU-1235', category: 'Ipsum', stock: 23, status: 'low' },
                  { name: 'Sed Do Eiusmod Tempor', sku: 'SKU-1236', category: 'Dolor', stock: 0, status: 'out' },
                  { name: 'Incididunt Ut Labore', sku: 'SKU-1237', category: 'Lorem', stock: 89, status: 'in' },
                  { name: 'Et Dolore Magna Aliqua', sku: 'SKU-1238', category: 'Sit', stock: 12, status: 'low' },
                  { name: 'Ut Enim Ad Minim', sku: 'SKU-1239', category: 'Amet', stock: 234, status: 'in' },
                  { name: 'Veniam Quis Nostrud', sku: 'SKU-1240', category: 'Lorem', stock: 0, status: 'out' },
                  { name: 'Exercitation Ullamco Laboris', sku: 'SKU-1241', category: 'Ipsum', stock: 67, status: 'in' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 group">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded bg-gray-200 shrink-0 overflow-hidden">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <rect width="100" height="100" fill="#d1d5db" />
                            <text
                              x="50"
                              y="50"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill="#9ca3af"
                              fontSize="14"
                              fontWeight="bold"
                            >
                              IMG
                            </text>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-600">{item.sku}</td>
                    <td className="px-4 py-4 text-gray-600">{item.category}</td>
                    <td className="px-4 py-4 font-semibold text-gray-900">{item.stock}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'in'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'low'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.status === 'in' ? 'Lorem Ipsum' : item.status === 'low' ? 'Lorem Dolor' : 'Lorem Sit'}
                      </span>
                    </td>
                    <td className="px-2 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setShowEditModal(true)}
                          className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
                        >
                          <Pencil size={18} />
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
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            <ChevronLeft size={16} /> Lorem
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
                  page === 1 ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            Lorem <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Edit Stock Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowEditModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Ipsum
                  </label>
                  <input
                    type="text"
                    value="Lorem Ipsum Dolor Sit"
                    disabled
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem SKU
                  </label>
                  <input
                    type="text"
                    value="SKU-1234"
                    disabled
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Dolor Sit *
                  </label>
                  <input
                    type="number"
                    defaultValue="145"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Amet (Lorem)
                  </label>
                  <textarea
                    placeholder="Lorem ipsum dolor sit amet..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
