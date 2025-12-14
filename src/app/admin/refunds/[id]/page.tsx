'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, FileText, X } from 'lucide-react';
import Link from 'next/link';

export default function RefundProcessPage() {
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [actionType, setActionType] = useState<'approved' | 'rejected' | null>(null);

    const handleAction = () => {
        if (showApproveModal) {
            setShowApproveModal(false);
            setActionType('approved');
        } else {
            setShowRejectModal(false);
            setActionType('rejected');
        }
        setShowSuccessModal(true);
    };

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header & Back Navigation */}
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/refunds"
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900">Request #RF-1234</h1>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            Pending
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Submitted on Dec 15, 2024 at 10:30 AM</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Reason Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <AlertCircle size={18} className="text-gray-400" />
                            Reason for Refund
                        </h2>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">Reason Type</span>
                            <p className="font-semibold text-gray-900">Item Defective or Doesn't Work</p>
                        </div>
                        <div>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">Customer Comment</span>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                I purchased these headphones two days ago, and the left earbud has a constant static noise. Connectivity drops frequently when my phone is in my pocket. I've tried resetting them multiple times but the issue persists.
                            </p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Items to Refund</h2>
                        <div className="border rounded-lg border-gray-200 overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">Product</th>
                                        <th className="px-4 py-3 font-medium">Unit Price</th>
                                        <th className="px-4 py-3 font-medium">Qty</th>
                                        <th className="px-4 py-3 font-medium text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                                                    <img src="/images/homePage/appleAirPodsPro(2ndgen).png" alt="Product" className="w-full h-full object-contain" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Apple AirPods Pro (2nd gen)</p>
                                                    <p className="text-xs text-gray-500">White / MagSafe Case</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">$89.99</td>
                                        <td className="px-4 py-4 text-gray-600">1</td>
                                        <td className="px-4 py-4 text-right font-medium text-gray-900">$89.99</td>
                                    </tr>
                                </tbody>
                                <tfoot className="bg-gray-50 border-t border-gray-200">
                                    <tr>
                                        <td colSpan={3} className="px-4 py-3 text-right text-gray-600 font-medium">Refund Amount</td>
                                        <td className="px-4 py-3 text-right font-bold text-gray-900">$89.99</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Evidence/Attachments */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FileText size={18} className="text-gray-400" />
                            Evidence & Attachments
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { id: 1, src: '/images/homePage/section8-img4.png', label: 'Box Damage' },
                                { id: 2, src: '/images/homePage/appleAirPodsPro(2ndgen).png', label: 'Item Photo' }
                            ].map((img) => (
                                <div key={img.id} className="aspect-square bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative group overflow-hidden">
                                    <img src={img.src} alt={img.label} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                        <span className="text-white text-xs font-medium">View</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Customer Info & Actions */}
                <div className="space-y-6">
                    {/* Action Panel */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Actions</h2>
                        <div className="space-y-3">
                            <button
                                onClick={() => setShowApproveModal(true)}
                                className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                            >
                                <CheckCircle size={18} />
                                Approve Refund
                            </button>
                            <button
                                onClick={() => setShowRejectModal(true)}
                                className="w-full py-2.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                <XCircle size={18} />
                                Reject Refund
                            </button>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="text-xs text-gray-500 mb-2">Internal Note (Optional)</p>
                            <textarea
                                className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                                rows={3}
                                placeholder="Add a note for other admins..."
                            ></textarea>
                            <button className="mt-2 text-xs font-medium text-gray-600 hover:text-gray-900">Save Note</button>
                        </div>
                    </div>

                    {/* Customer Info */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Customer Details</h2>
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                                SW
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Sarah Wilson</p>
                                <p className="text-xs text-gray-500">Customer since 2023</p>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div>
                                <span className="text-gray-500 block text-xs">Email</span>
                                <span className="text-gray-900 font-medium">sarah.wilson@example.com</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block text-xs">Phone</span>
                                <span className="text-gray-900 font-medium">+1 (555) 987-6543</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block text-xs">Total Orders</span>
                                <span className="text-gray-900 font-medium">12 Orders ($1,240.00 spent)</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <Link href="/admin/customers-detail-wireframe" className="text-sm font-medium text-blue-600 hover:underline">
                                View Customer Profile
                            </Link>
                        </div>
                    </div>

                    {/* Order Info */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Original Order</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Order ID</span>
                                <Link href="/admin/orders-detail-wireframe" className="font-medium text-blue-600 hover:underline">#LO-5678</Link>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Date</span>
                                <span className="font-medium text-gray-900">Dec 10, 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Payment</span>
                                <span className="font-medium text-gray-900">Credit Card (**** 4242)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Status</span>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Delivered</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Approve Modal */}
            {showApproveModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" onClick={() => setShowApproveModal(false)}></div>
                    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <button onClick={() => setShowApproveModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                            <X size={20} />
                        </button>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Approve Refund?</h3>
                            <p className="text-gray-600 text-center mb-6">
                                This will initiate a refund of <strong>$89.99</strong> to the customer's original payment method. This action cannot be undone.
                            </p>
                            <div className="flex gap-3">
                                <button onClick={() => setShowApproveModal(false)} className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                                    Cancel
                                </button>
                                <button onClick={handleAction} className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
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
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" onClick={() => setShowRejectModal(false)}></div>
                    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <button onClick={() => setShowRejectModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                            <X size={20} />
                        </button>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <XCircle size={32} className="text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Reject Refund?</h3>
                            <p className="text-gray-600 text-center mb-6">
                                Please provide a reason for rejection. This will be sent to the customer.
                            </p>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason</label>
                                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" rows={3} placeholder="e.g., Item usage exceeds return policy limits..."></textarea>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setShowRejectModal(false)} className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                                    Cancel
                                </button>
                                <button onClick={handleAction} className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                                    Confirm Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" onClick={() => setShowSuccessModal(false)}></div>
                    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-8 text-center">
                            <div className={`w-16 h-16 ${actionType === 'approved' ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                {actionType === 'approved' ? <CheckCircle size={32} className="text-green-600" /> : <XCircle size={32} className="text-red-600" />}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Refund {actionType === 'approved' ? 'Approved' : 'Rejected'}</h3>
                            <p className="text-gray-600 mb-6">
                                The customer has been notified and the order status has been updated.
                            </p>
                            <Link href="/admin/refunds" className="block w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors">
                                Return to Refund List
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
