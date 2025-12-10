
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
                if (!product) return null;

                return (
                  <div key={i} className="p-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <Package size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${(item.price * item.qty).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{item.qty} x ${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-6 bg-gray-50 space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${order.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax (0%)</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between font-bold text-gray-900 text-lg">
                <span>Total</span>
                <span>${order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Order Status</h3>
            <div className="relative pl-4 border-l-2 border-gray-100 space-y-8">
              <div className="relative">
                <div className={`absolute -left-[21px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm flex items-center justify-center
                        ${order.status === 'Delivered' ? 'bg-green-500' : 'bg-gray-300'}`}>
                </div>
                <h4 className="font-medium text-gray-900">Order Delivered</h4>
                <p className="text-sm text-gray-500 mt-1">Expected: {order.date}</p>
              </div>
              <div className="relative">
                <div className={`absolute -left-[21px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm flex items-center justify-center
                        ${order.status === 'Shipped' ? 'bg-blue-600' :
                    order.status === 'Delivered' ? 'bg-gray-300' : 'bg-gray-300'}`}>
                </div>
                <h4 className="font-medium text-gray-900">Shipped</h4>
                {order.status === 'Shipped' && <p className="text-sm text-gray-500 mt-1">In Transit</p>}
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-brand-teal border-2 border-white shadow-sm"></div>
                <h4 className="font-medium text-gray-900">Order Confirmed</h4>
                <p className="text-sm text-gray-500 mt-1">{order.date}</p>
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
              <div className="w-10 h-6 bg-blue-600 rounded text-white text-[10px] font-bold flex items-center justify-center">VISA</div>
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
