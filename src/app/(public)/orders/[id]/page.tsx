'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { mockOrders } from '@/data/mockData';

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;
  
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
                  src="/images/delivered.png" 
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
                  <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#1434CB"/>
                    <path d="M19.5 22h-3.2l-2-7.7c-.1-.4-.3-.7-.7-.9-.6-.3-1.4-.6-2.1-.8l.1-.3h3.6c.5 0 .9.3 1 .8l.9 4.8 2.2-5.6h3.1l-4.6 9.7h1.7zm6.1 0h-3l1.9-9.7h3l-1.9 9.7zm8.1-9.7l-3.5 9.7h-3.1l-1.7-6.5c.7.4 1.5.9 2 1.5.5.6.8 1.2.9 1.8l1.5 3.2 3.9-9.7h-3-3zm6.8 6.6c0-.9-.5-1.6-1.6-2.2-.7-.4-1.1-.6-1.1-1 0-.4.4-.7 1.3-.7.7 0 1.3.1 1.8.3l.2.1.3-1.9c-.6-.2-1.5-.4-2.7-.4-3 0-5.1 1.6-5.1 3.8 0 1.7 1.5 2.6 2.6 3.1 1.1.6 1.5.9 1.5 1.4 0 .7-.9 1.1-1.7 1.1-.9 0-1.8-.2-2.5-.5l-.3-.2-.3 2c.7.3 2 .6 3.4.6 3.2 0 5.2-1.6 5.2-4z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Need Help Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help</h3>
              <div className="space-y-2">
                <Link href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6B8784]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="w-28">Order Issues</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6B8784]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="w-28">Delivery Info</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6B8784]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <span className="w-28">Returns</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
    </div>
  );
}
