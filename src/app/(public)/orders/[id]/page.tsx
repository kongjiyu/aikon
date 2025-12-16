'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { mockOrders } from '@/data/mockData';
import { X, MessageCircle, Phone, Mail } from 'lucide-react';

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [helpType, setHelpType] = useState<'order' | 'delivery' | 'returns' | null>(null);
  
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

  // Order tracking stages
  const trackingStages = [
    { label: 'Order Confirmed', date: '2025 Mon 1st', status: 'completed' },
    { label: 'Shipped', date: '2025 Wed 11th', status: 'completed' },
    { label: 'Out of Delivery', date: '2025 Fri 13th', status: 'completed' },
    { label: 'Delivered', date: '2025 Mon 16th', status: order.status === 'delivered' ? 'completed' : 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
        </div>

        {/* Main White Background Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Order Tracking Status Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
              <div 
                className="h-full bg-green-600 transition-all duration-500"
                style={{ width: order.status === 'delivered' ? '100%' : '66%' }}
              ></div>
            </div>

            {trackingStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  stage.status === 'completed' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {stage.status === 'completed' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-current"></div>
                  )}
                </div>
                <p className={`text-sm font-medium text-center ${
                  stage.status === 'completed' ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {stage.label}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stage.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details and Order Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Product Image */}
          <div className="flex items-start justify-center">
            <Image 
              src={order.productImage} 
              alt={order.productName}
              width={600}
              height={600}
              className="object-contain w-full h-auto rounded"
            />
          </div>

          {/* Order Information */}
          <div className="space-y-6">
            {/* Product Title and Basic Info */}
            <div className="space-y-[17px]">
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
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                <Image 
                  src="/images/delivered.svg" 
                  alt="Delivered" 
                  width={20} 
                  height={20}
                  className="inline"
                />
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-gray-900">(20%) - RM 719.80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="text-gray-900">RM 20.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">+ RM 575.84</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between font-semibold text-base">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">RM 3475.04</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Delivery and Payment Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="block font-medium">Address</span>
                  Jalan Setapak,<br />
                  Genting Residence<br />
                  67800 Kuala Ipoh
                </p>
              </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Visa ***50</span>
                  <Image 
                  src="/images/visa.svg" 
                  alt="Visa" 
                  width={32} 
                  height={20}
                  />
                </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Need Help Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    setHelpType('order');
                    setShowHelpModal(true);
                  }}
                  className="w-full flex items-center gap-2 text-sm text-gray-600 hover:text-[#6B8784] hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="w-28 text-left">Order Issues</span>
                  <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    setHelpType('delivery');
                    setShowHelpModal(true);
                  }}
                  className="w-full flex items-center gap-2 text-sm text-gray-600 hover:text-[#6B8784] hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="w-28 text-left">Delivery Info</span>
                  <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    setHelpType('returns');
                    setShowHelpModal(true);
                  }}
                  className="w-full flex items-center gap-2 text-sm text-gray-600 hover:text-[#6B8784] hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <span className="w-28 text-left">Returns</span>
                  <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Link 
                href={`/orders/${orderId}/review`}
                className="flex-1 bg-[#2C3E3C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3d5350] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Write Review
              </Link>
              <Link 
                href={`/orders/${orderId}/return-refund`}
                className="flex-1 bg-[#2C3E3C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3d5350] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refund Product
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setShowHelpModal(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowHelpModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              {/* Order Issues Help */}
              {helpType === 'order' && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#6B8784]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#6B8784]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Order Issues</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Issues & Solutions</h4>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-900 mb-1">Wrong item received</p>
                          <p className="text-sm text-gray-600">Contact our support team immediately with photos of the received item. We'll arrange a replacement or refund within 24 hours.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-900 mb-1">Item damaged or defective</p>
                          <p className="text-sm text-gray-600">Please document the damage with photos and contact support. We offer free return shipping and full refunds for damaged items.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-900 mb-1">Order modification</p>
                          <p className="text-sm text-gray-600">If your order hasn't shipped yet, you can modify the delivery address or cancel items. Contact support as soon as possible.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Support</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a href="tel:+60123456789" className="flex items-center gap-2 p-3 bg-[#6B8784]/5 rounded-lg hover:bg-[#6B8784]/10 transition-colors">
                          <Phone className="w-4 h-4 text-[#6B8784]" />
                          <div>
                            <p className="text-xs text-gray-600">Call us</p>
                            <p className="text-sm font-medium text-gray-900">+60 12-345 6789</p>
                          </div>
                        </a>
                        <a href="mailto:support@aikon.com" className="flex items-center gap-2 p-3 bg-[#6B8784]/5 rounded-lg hover:bg-[#6B8784]/10 transition-colors">
                          <Mail className="w-4 h-4 text-[#6B8784]" />
                          <div>
                            <p className="text-xs text-gray-600">Email</p>
                            <p className="text-sm font-medium text-gray-900">support@aikon.com</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Delivery Info Help */}
              {helpType === 'delivery' && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#6B8784]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#6B8784]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Delivery Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Order #{orderId}</h4>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Carrier</span>
                          <span className="font-medium text-gray-900">J&T Express</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tracking Number</span>
                          <span className="font-medium text-gray-900">JT{orderId.substring(0, 10).toUpperCase()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Estimated Delivery</span>
                          <span className="font-medium text-gray-900">2025 Mon 16th</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Address</span>
                          <span className="font-medium text-gray-900 text-right">Jalan Setapak, Genting Residence<br />67800 Kuala Ipoh</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Delivery FAQs</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-[#6B8784] pl-4">
                          <p className="font-medium text-gray-900 mb-1">Can I change the delivery address?</p>
                          <p className="text-sm text-gray-600">Yes, you can change the address before the item is shipped. Contact support immediately to update your delivery details.</p>
                        </div>
                        <div className="border-l-4 border-[#6B8784] pl-4">
                          <p className="font-medium text-gray-900 mb-1">What if I'm not home during delivery?</p>
                          <p className="text-sm text-gray-600">The courier will leave a notice and attempt redelivery. You can also arrange to pick up from the nearest collection point.</p>
                        </div>
                        <div className="border-l-4 border-[#6B8784] pl-4">
                          <p className="font-medium text-gray-900 mb-1">How can I track my package?</p>
                          <p className="text-sm text-gray-600">Use the tracking number provided above on the courier's website for real-time updates on your delivery status.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Returns Help */}
              {helpType === 'returns' && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#6B8784]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#6B8784]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Returns & Refunds</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Return Policy</h4>
                      <div className="bg-[#6B8784]/5 p-4 rounded-lg space-y-2">
                        <p className="text-sm text-gray-700">✓ 30-day return window from delivery date</p>
                        <p className="text-sm text-gray-700">✓ Items must be in original condition with all packaging</p>
                        <p className="text-sm text-gray-700">✓ Free return shipping for defective items</p>
                        <p className="text-sm text-gray-700">✓ Full refund processed within 5-7 business days</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">How to Return</h4>
                      <ol className="space-y-3">
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#6B8784] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                          <div>
                            <p className="font-medium text-gray-900">Initiate Return</p>
                            <p className="text-sm text-gray-600">Click the "Refund Product" button or contact support to start your return request.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#6B8784] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                          <div>
                            <p className="font-medium text-gray-900">Pack Your Item</p>
                            <p className="text-sm text-gray-600">Securely pack the item in its original packaging with all accessories included.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#6B8784] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                          <div>
                            <p className="font-medium text-gray-900">Ship It Back</p>
                            <p className="text-sm text-gray-600">Use the prepaid return label we'll email you, or arrange your own shipping.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#6B8784] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                          <div>
                            <p className="font-medium text-gray-900">Get Your Refund</p>
                            <p className="text-sm text-gray-600">Once we receive and inspect the item, your refund will be processed automatically.</p>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> Opened electronics and personalized items may not be eligible for return. Please review our full return policy for exceptions.
                      </p>
                    </div>

                    <Link 
                      href={`/orders/${orderId}/return-refund`}
                      onClick={() => setShowHelpModal(false)}
                      className="block w-full bg-[#2C3E3C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3d5350] transition-colors text-center"
                    >
                      Start Return Process
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
