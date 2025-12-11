'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { mockOrders } from '@/data/mockData';

export default function OrderReviewPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
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
    // Handle review submission
    setShowSuccessDialog(true);
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
    router.push(`/orders/${orderId}`);
  };

  // Order tracking stages
  const trackingStages = [
    { label: 'Order Confirmed', date: '2025 Mon 1st', status: 'completed' },
    { label: 'Shipped', date: '2025 Wed 11th', status: 'completed' },
    { label: 'Out of Delivery', date: '2025 Fri 13th', status: 'completed' },
    { label: 'Delivered', date: '2025 Mon 16th', status: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Review</h1>
        </div>

        {/* Main White Background Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Order Tracking Status Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
              <div className="h-full bg-green-600 transition-all duration-500 w-full"></div>
            </div>

            {trackingStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 bg-green-600 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className={`text-sm font-medium text-center ${
                  index === 3 ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {stage.label}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stage.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Card */}
        <div className="p-6 mb-8">
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
                  src="/images/delivered.png" 
                  alt="Delivered" 
                  width={20} 
                  height={20}
                  className="inline"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Write Your Review Here!</h2>
            <p className="text-gray-600">
              Help others by sharing your experience. Tell us if the gadget is helpful, easy to use, or if you have suggestions.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Star Rating */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-all duration-150 hover:scale-110"
                  >
                    <svg
                      className={`w-10 h-10 ${
                        star <= (hoveredRating || rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 fill-gray-300'
                      } transition-colors duration-150`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="review" className="block text-sm font-semibold text-gray-900 mb-3">
                Your Precise Review
              </label>
              <textarea
                id="review"
                rows={8}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Was the product useful? Easy to use? Share your thoughts..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none resize-none text-sm text-gray-900 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C3E3C] text-white py-4 rounded-lg font-semibold text-base hover:bg-[#3d5350] transition-colors"
            >
              Submit My Review
            </button>
          </form>
        </div>
        </div>

        {/* Success Dialog */}
        {showSuccessDialog && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Thank You for Your Review!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your feedback has been successfully submitted. We really appreciate you taking the time to share your experience with us!
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleCloseDialog}
                className="w-full bg-[#6B8784] text-white py-3 rounded-lg font-semibold hover:bg-[#5a736f] transition-colors"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
