'use client';

import { useState } from 'react';
import { Search, Filter, X, CheckCircle, XCircle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function RefundListPage() {
  const [selectedRefund, setSelectedRefund] = useState<number | null>(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Refund Requests</h1>
        <p className="text-gray-600 mt-1">Manage and process customer refund requests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Requests', value: '42', change: '+8 this week' },
          { label: 'Pending Approval', value: '18', change: '-3 from yesterday' },
          { label: 'Processing', value: '12', change: '+2 today' },
          { label: 'Refunded Amount', value: 'RM8,540', change: 'Total YTD' },
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
        {['All Requests', 'Pending', 'Approved', 'Rejected'].map((tab, i) => (
          <button
            key={i}
            className={`pb-4 px-2 font-medium transition-colors ${i === 0
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
              placeholder="Search by Request ID, Order ID, or Customer..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Request ID</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Customer</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Reason</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#RF-1234', order: '#LO-5678', customer: 'Sarah Wilson', amount: 'RM899.99', reason: 'Defective item', status: 'pending', date: 'Dec 15, 2024' },
                { id: '#RF-1235', order: '#LO-5679', customer: 'John Doe', amount: 'RM124.50', reason: 'Wrong item received', status: 'approved', date: 'Dec 14, 2024' },
                { id: '#RF-1236', order: '#LO-5680', customer: 'Jane Smith', amount: 'RM199.00', reason: 'Changed mind', status: 'rejected', date: 'Dec 14, 2024' },
                { id: '#RF-1237', order: '#LO-5681', customer: 'Mike Johnson', amount: 'RM45.99', reason: 'Size too small', status: 'pending', date: 'Dec 13, 2024' },
                { id: '#RF-1238', order: '#LO-5682', customer: 'Emily Davis', amount: 'RM299.99', reason: 'Item description error', status: 'processing', date: 'Dec 13, 2024' },
                { id: '#RF-1239', order: '#LO-5683', customer: 'David Wilson', amount: 'RM67.50', reason: 'Damaged in transit', status: 'approved', date: 'Dec 12, 2024' },
                { id: '#RF-1240', order: '#LO-5684', customer: 'Lisa Anderson', amount: 'RM156.00', reason: 'Late delivery', status: 'pending', date: 'Dec 12, 2024' },
                { id: '#RF-1241', order: '#LO-5685', customer: 'Robert Taylor', amount: 'RM89.99', reason: 'Duplicate order', status: 'processing', date: 'Dec 11, 2024' },
              ].map((refund, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <span className="font-medium text-gray-900">{refund.id}</span>
                  </td>
                  <td className="p-4">
                    <Link href={`/admin/orders/${refund.order.replace('#', '')}`} className="text-blue-600 hover:underline cursor-pointer">
                      {refund.order}
                    </Link>
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
                      className={`px-3 py-1 rounded-full text-xs font-medium ${refund.status === 'approved'
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
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/refunds/${refund.id.replace('#', '')}`}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Eye size={16} /> View
                      </Link>
                      {refund.status === 'pending' && (
                        <>
                          <button
                            onClick={() => {
                              setSelectedRefund(i);
                              setShowApproveModal(true);
                            }}
                            className="px-3 py-1.5 bg-green-100 hover:bg-green-200 text-green-700 text-sm rounded-lg transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => {
                              setSelectedRefund(i);
                              setShowRejectModal(true);
                            }}
                            className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-sm rounded-lg transition-colors"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1-10 of 95 requests</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded ${page === 1
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

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
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
                Approve Refund?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to approve this refund request? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowApproveModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowApproveModal(false)}
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Confirm Approve
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

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
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
                Reject Refund?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Please provide a reason for rejection. This will be sent to the customer.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rejection Reason *
                  </label>
                  <textarea
                    placeholder="Enter reason..."
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
                  Cancel
                </button>
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Confirm Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
