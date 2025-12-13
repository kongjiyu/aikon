'use client';

import { useState } from 'react';
import { Upload, X, CheckCircle2 } from 'lucide-react';

export default function MockReturnRefundPage() {
  const [returnType, setReturnType] = useState<'return' | 'refund'>('return');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 grayscale">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Return & Refund Request</h1>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-8">
          {/* Product Info Card */}
          <div className="p-6 mb-8 border-b border-gray-300">
            <div className="flex items-start gap-6">
              {/* Product Image */}
              <div className="w-32 h-32 flex items-center justify-center flex-shrink-0 bg-gray-200 rounded-lg">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Lorem Ipsum Dolor Sit Amet</h2>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><span className="font-semibold">Order ID:</span> #000000</p>
                  <p><span className="font-semibold">Color, Storage:</span> Lorem, Ipsum</p>
                  <p><span className="font-semibold">Quantity:</span> 0</p>
                  <p><span className="font-semibold">Price:</span> RM 0,000.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Request Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Request Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="returnType"
                    value="return"
                    checked={returnType === 'return'}
                    onChange={(e) => setReturnType(e.target.value as 'return' | 'refund')}
                    className="w-4 h-4 text-gray-700 focus:ring-gray-700"
                  />
                  <span className="text-sm text-gray-700">Return Product</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="returnType"
                    value="refund"
                    checked={returnType === 'refund'}
                    onChange={(e) => setReturnType(e.target.value as 'return' | 'refund')}
                    className="w-4 h-4 text-gray-700 focus:ring-gray-700"
                  />
                  <span className="text-sm text-gray-700">Refund Only</span>
                </label>
              </div>
            </div>

            {/* Reason Dropdown */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Reason for Request <span className="text-gray-600">*</span>
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white text-gray-900"
              >
                <option value="">Lorem ipsum dolor</option>
                <option>Lorem ipsum dolor sit amet</option>
                <option>Consectetur adipiscing elit</option>
                <option>Sed do eiusmod tempor</option>
                <option>Incididunt ut labore</option>
                <option>Et dolore magna aliqua</option>
                <option>Ut enim ad minim</option>
                <option>Quis nostrud exercitation</option>
              </select>
            </div>

            {/* Method Dropdown */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                {returnType === 'return' ? 'Return Method' : 'Refund Method'} <span className="text-gray-600">*</span>
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white text-gray-900"
              >
                <option value="">Lorem ipsum dolor</option>
                {returnType === 'return' ? (
                  <>
                    <option>Lorem ipsum dolor sit</option>
                    <option>Consectetur adipiscing</option>
                    <option>Sed do eiusmod tempor</option>
                  </>
                ) : (
                  <>
                    <option>Lorem ipsum dolor</option>
                    <option>Sit amet consectetur</option>
                    <option>Adipiscing elit sed</option>
                  </>
                )}
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Additional Information (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none bg-white text-gray-900"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                className="flex-1 py-3 px-6 border-2 border-gray-400 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-gray-700" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Request Submitted!
              </h3>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <p className="text-sm text-gray-600">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Request ID:</span>
                  <span className="font-semibold text-gray-900">#000000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Status:</span>
                  <span className="font-semibold text-gray-900">Lorem Ipsum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Expected Time:</span>
                  <span className="font-semibold text-gray-900">0-0 Consectetur</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
