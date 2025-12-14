"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  Eye,
  RotateCcw,
  X,
  CheckCircle
} from 'lucide-react';

// Mock Data for Refunds
interface RefundRequest {
  id: string;
  orderId: string;
  customer: string;
  amount: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Processing';
  date: string;
}

const mockRefunds: RefundRequest[] = [
  { id: 'RF-1234', orderId: 'ORD0001', customer: 'John Doe', amount: 350.00, reason: 'Defective item', status: 'Pending', date: '01-01-2025' },
  { id: 'RF-1235', orderId: 'ORD0002', customer: 'Jane Smith', amount: 1199.00, reason: 'Wrong item received', status: 'Approved', date: '01-01-2025' },
  { id: 'RF-1236', orderId: 'ORD0003', customer: 'Robert Johnson', amount: 1299.00, reason: 'Changed mind', status: 'Rejected', date: '01-01-2025' },
  { id: 'RF-1237', orderId: 'ORD0004', customer: 'Emily Davis', amount: 799.00, reason: 'Size too small', status: 'Processing', date: '01-01-2025' },
  { id: 'RF-1238', orderId: 'ORD0005', customer: 'John Doe', amount: 69.00, reason: 'Item description error', status: 'Pending', date: '01-01-2025' },
  { id: 'RF-1239', orderId: 'ORD0006', customer: 'Michael Wilson', amount: 1299.00, reason: 'Damaged in transit', status: 'Approved', date: '01-01-2025' },
  { id: 'RF-1240', orderId: 'ORD0007', customer: 'Jane Smith', amount: 1099.00, reason: 'Late delivery', status: 'Processing', date: '01-01-2025' },
  { id: 'RF-1241', orderId: 'ORD0008', customer: 'Robert Johnson', amount: 249.00, reason: 'Duplicate order', status: 'Pending', date: '01-01-2025' },
];

export default function RefundListPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All requests');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRefunds, setSelectedRefunds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Modal States
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [actionRefundId, setActionRefundId] = useState<string | null>(null);

  const itemsPerPage = 5;

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Filter Logic
  const filteredRefunds = mockRefunds.filter(refund => {
    // Status Filter
    const matchesStatus =
      activeTab === 'All requests' ||
      (activeTab === 'Pending' && refund.status === 'Pending') ||
      (activeTab === 'Approved' && refund.status === 'Approved') ||
      (activeTab === 'Rejected' && refund.status === 'Rejected') ||
      (activeTab === 'Processing' && refund.status === 'Processing');

    // Search Filter (ID, Order ID, Customer)
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      refund.id.toLowerCase().includes(q) ||
      refund.orderId.toLowerCase().includes(q) ||
      refund.customer.toLowerCase().includes(q);

    return matchesStatus && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredRefunds.length / itemsPerPage);
  const paginatedRefunds = filteredRefunds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Counts for Tabs
  const counts = {
    all: mockRefunds.length,
    pending: mockRefunds.filter(r => r.status === 'Pending').length,
    approved: mockRefunds.filter(r => r.status === 'Approved').length,
    rejected: mockRefunds.filter(r => r.status === 'Rejected').length,
    processing: mockRefunds.filter(r => r.status === 'Processing').length,
  };

  const tabs = [
    { label: 'All requests', count: counts.all },
    { label: 'Pending', count: counts.pending },
    { label: 'Processing', count: counts.processing },
    { label: 'Approved', count: counts.approved },
    { label: 'Rejected', count: counts.rejected }
  ];

  // Handle Tab Change (Reset Page)
  const handleTabChange = (label: string) => {
    setActiveTab(label);
    setCurrentPage(1);
  };

  // Handle Select All
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRefunds([]);
      setSelectAll(false);
    } else {
      setSelectedRefunds(paginatedRefunds.map(r => r.id));
      setSelectAll(true);
    }
  };

  // Handle Individual Selection
  const handleSelectRefund = (id: string) => {
    if (selectedRefunds.includes(id)) {
      setSelectedRefunds(selectedRefunds.filter(sid => sid !== id));
      setSelectAll(false);
    } else {
      const newSelected = [...selectedRefunds, id];
      setSelectedRefunds(newSelected);
      if (newSelected.length === paginatedRefunds.length) {
        setSelectAll(true);
      }
    }
  };

  const openActionModal = (type: 'approve' | 'reject', id: string) => {
    setActionRefundId(id);
    if (type === 'approve') setShowApproveModal(true);
    else setShowRejectModal(true);
  };

  return (
    <div className="space-y-8" onClick={() => setActiveMenu(null)}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Refund Requests</h2>
          <p className="text-sm text-gray-500 mt-1">Manage customer refund requests</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => toggleMenu('header-more')}
              className={`flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors ${activeMenu === 'header-more' ? 'ring-2 ring-brand-teal/20' : ''}`}
            >
              More Action <MoreVertical size={16} />
            </button>
            {activeMenu === 'header-more' && (
              <div className="absolute right-0 top-12 w-40 bg-white shadow-xl rounded-lg border border-gray-100 py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Export to CSV</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Export to PDF</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Requests</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{counts.all}</span>
            <span className="text-xs font-medium text-green-500 flex items-center"><ArrowUp size={12} /> +8 this week</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">All time</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-500">Pending</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{counts.pending}</span>
            <span className="text-xs font-medium text-yellow-500 flex items-center"><Clock size={12} /> Requires Action</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Current</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-500">Processing</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{counts.processing}</span>
            <span className="text-xs font-medium text-blue-500 flex items-center"><RotateCcw size={12} /> In Progress</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Current</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-500">Refunded (YTD)</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">RM 8,540</span>
            <span className="text-xs font-medium text-gray-400">Total</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Year to Date</p>
        </div>
      </div>

      {/* Refund List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Tabs & Toolbar */}
        <div className="p-6 border-b border-gray-100 space-y-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={(e) => { e.stopPropagation(); handleTabChange(tab.label); }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab.label
                  ? 'bg-[#2B3433] text-white shadow-md'
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
                placeholder="Search request ID, order ID, or customer..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#748E8B]/50 transition-shadow shadow-sm"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
            <div className="flex items-center gap-2">
              {/* Filter Button */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => toggleMenu('filter')}
                  className={`p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors ${activeMenu === 'filter' ? 'ring-2 ring-brand-teal/20 bg-gray-50' : ''}`}
                >
                  <Filter size={18} />
                </button>
                {activeMenu === 'filter' && (
                  <div className="absolute right-0 top-12 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Filter By</div>
                    <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-dark" />
                      <span className="ml-2 text-sm text-gray-700">Date Range</span>
                    </label>
                    <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-dark" />
                      <span className="ml-2 text-sm text-gray-700">Amount: High to Low</span>
                    </label>
                    <div className="px-3 mt-2">
                      <button className="w-full bg-brand-dark text-white text-xs py-1.5 rounded">Apply Filter</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Sort Button */}
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
              >
                {sortOrder === 'asc' ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-6 py-6" onClick={(e) => e.stopPropagation()}>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-brand-sage">
                <tr>
                  <th className="p-4 w-4">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-brand-sage focus:ring-brand-sage"
                    />
                  </th>
                  <th className="px-4 py-3 font-medium">Request ID</th>
                  <th className="px-4 py-3 font-medium">Order ID</th>
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Amount</th>
                  <th className="px-4 py-3 font-medium">Reason</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paginatedRefunds.length > 0 ? (sortOrder === 'asc' ? [...paginatedRefunds].reverse() : paginatedRefunds).map((item, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 group transition-colors"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedRefunds.includes(item.id)}
                        onChange={() => handleSelectRefund(item.id)}
                        className="rounded border-gray-300 text-brand-sage focus:ring-brand-sage"
                      />
                    </td>
                    <td className="px-4 py-4 font-medium text-gray-900">
                      <Link href={`/admin/refunds/${item.id.replace('RF-', '')}`} className="hover:text-brand-sage hover:underline">
                        {item.id}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-gray-500">
                      <Link href={`/admin/orders/${item.orderId}`} className="text-blue-600 hover:underline">
                        {item.orderId}
                      </Link>
                    </td>
                    <td className="px-4 py-4 font-medium text-gray-900">{item.customer}</td>
                    <td className="px-4 py-4 font-medium text-gray-900">RM {item.amount.toLocaleString()}</td>
                    <td className="px-4 py-4 text-gray-500 max-w-xs truncate" title={item.reason}>{item.reason}</td>
                    <td className="px-4 py-4">
                      <div className={`flex items-center gap-2 ${item.status === 'Approved' ? 'text-green-600' :
                          item.status === 'Rejected' ? 'text-red-600' :
                            item.status === 'Processing' ? 'text-blue-600' :
                              'text-orange-500'
                        }`}>
                        {item.status === 'Approved' ? <CheckCircle2 size={16} /> :
                          item.status === 'Rejected' ? <XCircle size={16} /> :
                            item.status === 'Processing' ? <RotateCcw size={16} /> :
                              <Clock size={16} />
                        }
                        <span className="font-medium">{item.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-500">{item.date}</td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/refunds/${item.id.replace('RF-', '')}`}
                          className="p-1.5 text-gray-500 hover:text-brand-sage hover:bg-gray-100 rounded transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </Link>
                        {item.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => openActionModal('approve', item.id)}
                              className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                              title="Approve"
                            >
                              <CheckCircle size={16} />
                            </button>
                            <button
                              onClick={() => openActionModal('reject', item.id)}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                              title="Reject"
                            >
                              <XCircle size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={9} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <RotateCcw className="text-gray-400" size={32} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Requests Found</h3>
                        <p className="text-sm text-gray-500 max-w-sm">
                          We couldn't find any refund requests matching your filters.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${currentPage === page ? 'bg-brand-dark text-white' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Approve Modal */}
      {showApproveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowApproveModal(false)}></div>
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <button onClick={() => setShowApproveModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Approve Refund?</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to approve request {actionRefundId}? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setShowApproveModal(false)} className="flex-1 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Cancel</button>
                <button onClick={() => setShowApproveModal(false)} className="flex-1 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg">Confirm Approve</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowRejectModal(false)}></div>
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <button onClick={() => setShowRejectModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Reject Refund?</h3>
              <p className="text-gray-600 text-center mb-6">Please provide a reason for rejection of {actionRefundId}.</p>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason *</label>
                <textarea placeholder="Enter reason..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sage resize-none" rows={3}></textarea>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowRejectModal(false)} className="flex-1 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Cancel</button>
                <button onClick={() => setShowRejectModal(false)} className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg">Confirm Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
