
import Link from 'next/link';
import {
  ChevronRight,
  Printer,
  Download,
  Mail,
  User,
  MapPin,
  Phone,
  CreditCard,
  Calendar,
  Package,
  Truck,
  CheckCircle2,
  Headphones,
  Clock,
  XCircle
} from 'lucide-react';
import { mockOrders, mockProducts } from '@/lib/mockData';

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // In a real app this would be `use` hook or async page
  const { id } = await params;
  const order = mockOrders.find(o => o.id === id) || mockOrders[0];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="/admin/orders" className="hover:text-brand-dark">Orders</Link>
            <ChevronRight size={14} />
            <span>#{order.id}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Printer size={18} />
          </button>
          <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Download size={18} />
          </button>
          <button className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <Mail size={16} /> Send Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Order Info */}
        <div className="lg:col-span-2 space-y-8">

          {/* Order Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Order Items <span className="text-gray-500 font-normal">({order.items.length})</span></h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.payment === 'Paid' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                {order.payment}
              </span>
            </div>
            <div className="divide-y divide-gray-50">
              {order.items.map((item, i) => {
                const product = mockProducts.find(p => p.id === item.productId);

                return (
                  <div key={i} className="p-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden">
                      {product?.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <Package size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{product?.name || `Product ${item.productId}`}</h4>
                      <p className="text-sm text-gray-500">{product?.category || 'Unknown Category'}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">RM {(item.price * item.qty).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{item.qty} x RM {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-6 bg-white border-t border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 text-lg">Order Summary</h4>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Discount</span>
                <span>(20%) - RM 719.80</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery</span>
                <span>RM 20.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span>+ RM 575.84</span>
              </div>
              <div className="pt-4 border-t border-gray-100 border-dashed flex justify-between items-baseline">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-gray-900 font-bold text-xl">RM 3475.04</span>
              </div>
            </div>
          </div>

          {/* Order Timeline Horizontal */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                  <div 
                    className="h-full bg-green-600 transition-all duration-500"
                    style={{ width: order.status === 'Delivered' ? '100%' : '66%' }}
                  ></div>
                </div>

                {[
                  { label: 'Order Confirmed', date: '2025 Mon 1st', status: 'completed' },
                  { label: 'Shipped', date: '2025 Wed 11th', status: 'completed' },
                  { label: 'Out of Delivery', date: '2025 Fri 13th', status: 'completed' },
                  { label: 'Delivered', date: '2025 Mon 16th', status: order.status === 'Delivered' ? 'completed' : 'pending' },
                ].map((stage, index) => (
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
          </div>

        </div>

        {/* Right Column - Customer & Address */}
        <div className="space-y-8">

          {/* Customer Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Customer</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-sage rounded-full flex items-center justify-center text-white font-bold text-lg">
                {order.customerName.charAt(0)}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{order.customerName}</h4>
                <p className="text-sm text-gray-500">Customer ID: {order.customerId}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <span>{order.customerEmail}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>{order.customerPhone}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Shipping Address</h3>
            <div className="flex gap-3">
              <MapPin size={20} className="text-gray-400 shrink-0 mt-1" />
              <p className="text-sm text-gray-600 leading-relaxed">
                123 Tech Street, <br />
                Silicon Valley, CA 94025, <br />
                United States
              </p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Payment Info</h3>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/visa.svg" alt="Visa" className="w-8 h-6 object-contain" />
              <span className="text-sm text-gray-900 font-medium">**** **** **** 4242</span>
            </div>
            <p className="text-sm text-gray-500">Payment via Stripe</p>
            <div className={`mt-4 w-full py-2 text-center rounded-lg text-sm font-medium border ${order.payment === 'Paid' ? 'border-green-200 text-green-700 bg-green-50' : 'border-red-200 text-red-700 bg-red-50'}`}>
              {order.payment}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
