'use client';

import { useState } from 'react';
import { Search, Filter, X, CheckCircle, XCircle } from 'lucide-react';

export default function RefundsWireframe() {
  const [selectedRefund, setSelectedRefund] = useState<number | null>(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  return (
    <div className="space-y-6 grayscale">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Lorem Ipsum Dolor</h1>
        <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Lorem Ipsum', value: '42', change: '+8 lorem' },
          { label: 'Lorem Dolor', value: '18', change: '-3 ipsum' },
          { label: 'Lorem Sit', value: '12', change: '+2 dolor' },
          { label: 'Lorem Amet', value: '$8,540', change: 'lorem ipsum' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        {['Lorem Ipsum', 'Lorem Dolor', 'Lorem Sit', 'Lorem Amet'].map((tab, i) => (
          <button
            key={i}
            className={`pb-4 px-2 font-medium transition-colors ${
              i === 0
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Lorem ipsum dolor sit..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={20} />
            <span>Lorem Ipsum</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem ID</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem Ipsum</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem Dolor</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem Sit</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem Amet</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem Status</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Lorem Ipsum</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#RF-1234', order: '#LO-5678', customer: 'Lorem Ipsum', amount: '$89.99', reason: 'Lorem ipsum dolor sit', status: 'pending', date: 'Dec 15, 2024' },
                { id: '#RF-1235', order: '#LO-5679', customer: 'Dolor Sit Amet', amount: '$124.50', reason: 'Lorem dolor consectetur', status: 'approved', date: 'Dec 14, 2024' },
                { id: '#RF-1236', order: '#LO-5680', customer: 'Consectetur Elit', amount: '$199.00', reason: 'Lorem ipsum amet', status: 'rejected', date: 'Dec 14, 2024' },
                { id: '#RF-1237', order: '#LO-5681', customer: 'Sed Eiusmod', amount: '$45.99', reason: 'Lorem sit dolor', status: 'pending', date: 'Dec 13, 2024' },
                { id: '#RF-1238', order: '#LO-5682', customer: 'Tempor Incididunt', amount: '$299.99', reason: 'Lorem consectetur adipiscing', status: 'processing', date: 'Dec 13, 2024' },
                { id: '#RF-1239', order: '#LO-5683', customer: 'Ut Labore', amount: '$67.50', reason: 'Lorem ipsum dolor', status: 'approved', date: 'Dec 12, 2024' },
                { id: '#RF-1240', order: '#LO-5684', customer: 'Et Dolore', amount: '$156.00', reason: 'Lorem sit amet', status: 'pending', date: 'Dec 12, 2024' },
                { id: '#RF-1241', order: '#LO-5685', customer: 'Magna Aliqua', amount: '$89.99', reason: 'Lorem dolor elit', status: 'processing', date: 'Dec 11, 2024' },
              ].map((refund, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <span className="font-medium text-gray-900">{refund.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-blue-600 hover:underline cursor-pointer">{refund.order}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-700">{refund.customer}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-gray-900">{refund.amount}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-600 text-sm">{refund.reason}</span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        refund.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : refund.status === 'rejected'
                          ? 'bg-red-100 text-red-700'
                          : refund.status === 'processing'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {refund.status.charAt(0).toUpperCase() + refund.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-600 text-sm">{refund.date}</span>
                  </td>
                  <td className="p-4">
                    {refund.status === 'pending' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedRefund(i);
                            setShowApproveModal(true);
                          }}
                          className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                        >
                          Lorem
                        </button>
                        <button
                          onClick={() => {
                            setSelectedRefund(i);
                            setShowRejectModal(true);
                          }}
                          className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                        >
                          Lorem
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-600">Lorem 1-10 ipsum 95</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded ${
                  page === 1
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Approve Modal */}
      {showApproveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowApproveModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={() => setShowApproveModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Lorem Ipsum Dolor?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Ipsum (Lorem)
                  </label>
                  <textarea
                    placeholder="Lorem ipsum dolor sit amet..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowApproveModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button
                  onClick={() => setShowApproveModal(false)}
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowRejectModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={() => setShowRejectModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle size={32} className="text-red-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Lorem Ipsum Dolor?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Ipsum *
                  </label>
                  <textarea
                    placeholder="Lorem ipsum dolor sit amet..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
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
