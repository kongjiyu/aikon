'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { mockOrders } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReturnRefundPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;
  
  const [returnType, setReturnType] = useState<'return' | 'refund'>('return');
  const [reason, setReason] = useState('');
  const [method, setMethod] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  // Find the order from mock data
  const order = mockOrders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">Order not found</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reason || !method) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Handle return/refund submission
    setShowSuccessDialog(true);
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
    router.push(`/orders/${orderId}`);
  };

  const returnReasons = [
    'Product defective or damaged',
    'Wrong item received',
    'Item not as described',
    'Changed my mind',
    'Better price available elsewhere',
    'Ordered by mistake',
    'Other'
  ];

  const returnMethods = [
    'Pickup by courier',
    'Drop off at collection point',
    'Self-arrange shipping'
  ];

  const refundMethods = [
    'Original payment method',
    'Store credit',
    'Bank transfer'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Return & Refund Request</h1>
        </div>

        {/* Main White Background Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Product Info Card */}
          <div className="p-6 mb-8 border-b border-gray-200">
            <div className="flex items-start gap-6">
              {/* Product Image */}
              <div className="w-32 h-32 flex items-start justify-center flex-shrink-0">
                <Image 
                  src={order.productImage} 
                  alt={order.productName}
                  width={128}
                  height={128}
                  className="object-contain rounded"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 space-y-[17px]">
                <h2 className="font-inter text-2xl font-semibold text-gray-900">{order.productName}</h2>
                <p className="font-roboto text-2xl font-semibold text-gray-400">RM {order.price.toFixed(2)}</p>
                
                <div className="flex items-center gap-3 font-roboto text-base text-gray-400">
                  <div className="flex items-center gap-2">
                    <span>Colour:</span>
                    <span className="text-gray-400">{order.color}</span>
                    <div className={`w-4 h-4 rounded-full ${
                      order.color === 'Orange' ? 'bg-orange-500' :
                      order.color === 'Space Gray' ? 'bg-gray-500' :
                      order.color === 'Pure Green' ? 'bg-green-500' :
                      order.color === 'Pure Black' ? 'bg-black' :
                      order.color === 'Light Green' ? 'bg-green-400' : 'bg-gray-300'
                    }`}></div>
                  </div>
                  {order.storage && (
                    <>
                      <span>|</span>
                      <div>{order.storage}</div>
                    </>
                  )}
                  <span>|</span>
                  <div>Quantity: {order.quantity}</div>
                </div>

                <div className="flex items-center gap-2 font-roboto text-sm text-green-600 font-bold">
                  Delivered
                  <Image 
                    src="/images/delivered.svg" 
                    alt="Delivered" 
                    width={20} 
                    height={20}
                    className="inline"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Return/Refund Form */}
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
                    className="w-4 h-4 text-[#2C3E3C] focus:ring-[#2C3E3C]"
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
                    className="w-4 h-4 text-[#2C3E3C] focus:ring-[#2C3E3C]"
                  />
                  <span className="text-sm text-gray-700">Refund Only</span>
                </label>
              </div>
            </div>

            {/* Reason */}
            <div>
              <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-3">
                Reason for {returnType === 'return' ? 'Return' : 'Refund'} <span className="text-red-500">*</span>
              </label>
              <Select value={reason} onValueChange={setReason} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  {returnReasons.map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Method */}
            <div>
              <label htmlFor="method" className="block text-sm font-semibold text-gray-900 mb-3">
                {returnType === 'return' ? 'Return Method' : 'Refund Method'} <span className="text-red-500">*</span>
              </label>
              <Select value={method} onValueChange={setMethod} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a method" />
                </SelectTrigger>
                <SelectContent>
                  {(returnType === 'return' ? returnMethods : refundMethods).map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-3">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                rows={6}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Please provide any additional details about your return/refund request..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none resize-none text-sm text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#2C3E3C] text-white py-4 rounded-lg font-semibold text-base hover:bg-[#3d5350] transition-colors"
              >
                Submit {returnType === 'return' ? 'Return' : 'Refund'} Request
              </button>
            </div>
          </form>
        </div>

        {/* Success Dialog */}
        {showSuccessDialog && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {returnType === 'return' ? 'Return' : 'Refund'} Request Received!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We've received your {returnType} request and our team will review it shortly. You'll receive an email confirmation with the next steps within 24 hours.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleCloseDialog}
                className="w-full bg-[#6B8784] text-white py-3 rounded-lg font-semibold hover:bg-[#5a736f] transition-colors"
              >
                Okay, I understand
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
