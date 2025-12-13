'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Star } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: 'review',
    customerName: 'Sarah Johnson',
    orderNumber: 'ORD-2024-001',
    productName: 'iPhone 15 Pro Max',
    rating: 5,
    message: 'Amazing product! Fast delivery and great quality.',
    time: '5 minutes ago',
    unread: true
  },
  {
    id: 2,
    type: 'review',
    customerName: 'Michael Chen',
    orderNumber: 'ORD-2024-002',
    productName: 'Samsung Galaxy S24 Ultra',
    rating: 4,
    message: 'Good phone but delivery was a bit slow.',
    time: '1 hour ago',
    unread: true
  },
  {
    id: 3,
    type: 'review',
    customerName: 'Emma Wilson',
    orderNumber: 'ORD-2024-003',
    productName: 'MacBook Pro 16"',
    rating: 5,
    message: 'Excellent laptop! Exceeded expectations.',
    time: '3 hours ago',
    unread: false
  },
  {
    id: 4,
    type: 'review',
    customerName: 'David Lee',
    orderNumber: 'ORD-2024-004',
    productName: 'AirPods Pro 2',
    rating: 3,
    message: 'Product is okay but had some issues with connectivity.',
    time: '5 hours ago',
    unread: false
  }
];

// Helper function to get page title based on pathname
const getPageTitle = (pathname: string): string => {
  if (pathname === '/admin') return 'Dashboard';
  if (pathname.startsWith('/admin/products/reviews')) return 'Product Reviews';
  if (pathname.startsWith('/admin/products') && pathname.includes('/edit')) return 'Edit Product';
  if (pathname.startsWith('/admin/products/add')) return 'Add Product';
  if (pathname.startsWith('/admin/products')) return 'Products';
  if (pathname.startsWith('/admin/orders')) return 'Orders';
  if (pathname.startsWith('/admin/customers')) return 'Customers';
  if (pathname.startsWith('/admin/vouchers')) return 'Vouchers';
  if (pathname.startsWith('/admin/stock')) return 'Stock Management';
  if (pathname.startsWith('/admin/refunds')) return 'Refunds';
  if (pathname.startsWith('/admin/roles')) return 'Admin Profile';
  return 'Dashboard';
};

export default function TopNav() {
  const [showNotifications, setShowNotifications] = useState(false);
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const unreadCount = mockNotifications.filter(n => n.unread).length;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-brand-dark">{pageTitle}</h1>

      <div className="flex items-center gap-4">

        {/* Notification Bell */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              </>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <>
              {/* Backdrop to close dropdown */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowNotifications(false)}
              ></div>

              {/* Dropdown Content */}
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-[500px] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    {unreadCount > 0 && (
                      <span className="text-xs text-gray-500">{unreadCount} unread</span>
                    )}
                  </div>
                </div>

                {/* Notifications List */}
                <div className="overflow-y-auto flex-1">
                  {mockNotifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <Bell size={32} className="mx-auto mb-2 text-gray-300" />
                      <p>No notifications yet</p>
                    </div>
                  ) : (
                    mockNotifications.map((notification) => (
                      <Link
                        key={notification.id}
                        href="/admin/products/reviews"
                        onClick={() => setShowNotifications(false)}
                        className={`block p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                          notification.unread ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Star size={20} className="text-yellow-600" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-semibold text-gray-900 truncate">
                                {notification.customerName}
                              </p>
                              {notification.unread && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 mb-1">
                              Left a review for order <span className="font-medium">{notification.orderNumber}</span>
                            </p>
                            <p className="text-xs text-gray-500 mb-2 truncate">
                              {notification.productName}
                            </p>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(notification.rating)}
                            </div>

                            {/* Review Message */}
                            <p className="text-xs text-gray-700 line-clamp-2 mb-2">
                              "{notification.message}"
                            </p>

                            {/* Time */}
                            <p className="text-xs text-gray-400">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-sm text-gray-700 hover:text-gray-900 font-medium text-center">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
