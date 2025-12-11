"use client";

import {
  MoreVertical,
  ArrowUp,
  ArrowDown,
  Search,
  Filter,
  Plus,
  ChevronRight,
  Monitor,
  Smartphone,
  Shirt,
  Home,
  Watch,
  Wallet,
  Scissors,
  AlertTriangle,
  Package
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import DashboardLineChart from '@/components/admin/charts/DashboardLineChart';
import DashboardBarChart from '@/components/admin/charts/DashboardBarChart';
import { mockOrders, mockProducts } from '@/lib/mockData';

const FlagUS = () => (
  <svg className="w-4 h-4 rounded-sm shadow-sm" viewBox="0 0 640 480">
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640M0 423.9h640" />
    <path fill="#192f5d" d="M0 0h296v258.1H0" />
    <path fill="#fff" d="M305 0h89v480h-89z" />
  </svg>
);

const Flag = ({ color }: { color: string }) => (
  <div className={`w-5 h-3.5 rounded-sm ${color}`}></div>
);

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<'thisWeek' | 'lastWeek'>('thisWeek');
  const [activeMetric, setActiveMetric] = useState<string>('revenue');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Calculate Stats - Simplified for demo interactions
  const totalSales = mockOrders.reduce((acc, order) => acc + order.total, 0);
  const totalOrders = mockOrders.length;
  const pendingOrders = mockOrders.filter(o => o.status === 'Pending').length;
  const canceledOrders = mockOrders.filter(o => o.status === 'Cancelled').length;
  // Recent Transactions (Last 5 orders)
  const recentTransactions = [...mockOrders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  // Top Products & Filtering
  const allTopProducts = [...mockProducts].sort((a, b) => b.price - a.price);
  const filteredProducts = filterCategory === 'All'
    ? allTopProducts
    : allTopProducts.filter(p => p.category === filterCategory);

  // Display top 4 of the filtered list
  const displayProducts = filteredProducts.slice(0, 4);

  // Low Stock
  const lowStockProducts = mockProducts.filter(p => p.stock < 20);

  // Metrics Data Map for Interactive Chart
  const metricsData: Record<string, { thisWeek: number[]; lastWeek: number[] }> = {
    revenue: {
      thisWeek: [15, 22, 18, 45, 25, 30, 40],
      lastWeek: [12, 15, 10, 30, 20, 25, 28]
    },
    customers: {
      thisWeek: [5, 8, 6, 12, 8, 10, 15],
      lastWeek: [4, 6, 5, 8, 7, 8, 10]
    },
    products: {
      thisWeek: [20, 20, 21, 21, 22, 22, 23], // Slightly increasing product count
      lastWeek: [18, 18, 19, 19, 19, 20, 20]
    },
    stock: {
      thisWeek: [40, 38, 35, 30, 28, 25, 20], // Decreasing stock
      lastWeek: [45, 43, 40, 38, 35, 32, 30]
    },
    outStock: {
      thisWeek: [0, 1, 2, 3, 3, 4, 5], // Increasing out of stock
      lastWeek: [0, 0, 1, 1, 2, 2, 3]
    }
  };

  const toggleMenu = (menu: string) => activeMenu === menu ? setActiveMenu(null) : setActiveMenu(menu);

  // Reusable Menu Component
  const ActionMenu = ({ id, link }: { id: string, link?: string }) => (
    activeMenu === id && (
      <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg py-1 border border-gray-100 z-50 w-32 animate-in fade-in zoom-in-95 duration-100">
        <Link href={link || "/admin/orders"} className="block w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700">View Details</Link>
        <button className="w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700">Export PDF</button>
        <button className="w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-red-600">Remove Widget</button>
      </div>
    )
  );

  const FilterMenu = () => (
    activeMenu === 'filter' && (
      <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg py-1 border border-gray-100 z-50 w-40 animate-in fade-in zoom-in-95 duration-100">
        {['All', 'Laptops', 'Smartphones', 'Tablets', 'Accessories'].map((cat) => (
          <button
            key={cat}
            onClick={(e) => { e.stopPropagation(); setFilterCategory(cat); setActiveMenu(null); }}
            className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 ${filterCategory === cat ? 'text-brand-dark font-bold bg-gray-50' : 'text-gray-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>
    )
  );

  return (
    <div className="space-y-6" onClick={() => setActiveMenu(null)}>
      {/* 1. Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Total Sales</h3>
              <p className="text-xs text-gray-400 mt-1">All time</p>
            </div>
            {/* Removed MoreVertical button */}
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-3xl font-bold text-gray-900">RM {(totalSales / 1000).toFixed(1)}K</span>
            <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full">
              Sales <ArrowUp size={10} className="ml-1" /> 10.4%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2 relative z-10">Previous 7days (RM 2.3k)</p>
          <div className="mt-6 flex justify-end relative z-10">
            <Link href="/admin/orders" className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</Link>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Total Orders</h3>
              <p className="text-xs text-gray-400 mt-1">All time</p>
            </div>
            {/* Removed MoreVertical button */}
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-3xl font-bold text-gray-900">{totalOrders}</span>
            <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full">
              order <ArrowUp size={10} className="ml-1" /> 14.4%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2 relative z-10">Previous 7days (76)</p>
          <div className="mt-6 flex justify-end relative z-10">
            <Link href="/admin/orders" className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</Link>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
        </div>

        {/* Low Stock Alerts (Moved to Top Row) */}
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-visible group hover:shadow-md transition-all">
          <div className="flex justify-between items-center mb-4 relative z-20">
            <div className="flex items-center gap-2">
              <AlertTriangle size={18} className="text-red-500" />
              <h3 className="font-bold text-gray-900">Low Stock Alerts</h3>
            </div>
            {/* Removed MoreVertical button */}
          </div>

          <div className="space-y-3 relative z-10 max-h-[140px] overflow-y-auto custom-scrollbar pr-1">
            {lowStockProducts.length > 0 ? lowStockProducts.slice(0, 4).map((p, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50/50 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center p-1">
                    <img src={p.images?.[0] || p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate max-w-[120px]">{p.name}</p>
                    <p className="text-[10px] text-red-500 font-medium">Only {p.stock} left</p>
                  </div>
                </div>
                <Link href={`/admin/products/${p.id}/edit`} className="p-1.5 bg-gray-50 text-gray-500 rounded hover:text-brand-dark hover:bg-white shadow-sm">
                  <ChevronRight size={14} />
                </Link>
              </div>
            )) : (
              <div className="text-center py-6 text-gray-500 text-sm">
                <Package size={24} className="mx-auto mb-2 opacity-50" />
                All stock healthy
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-end relative z-10">
            <Link href="/admin/products" className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">View All</Link>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/10 transition-colors"></div>
        </div>
      </div>

      {/* 2. Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report for this week */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-gray-900 text-lg">Revenue Report</h3>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setTimeRange('thisWeek')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${timeRange === 'thisWeek' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                This week
              </button>
              <button
                onClick={() => setTimeRange('lastWeek')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${timeRange === 'lastWeek' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Last week
              </button>
              {/* Removed MoreVertical button */}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Customers', metric: 'customers', value: timeRange === 'thisWeek' ? '42' : '38' },
              { label: 'Total Products', metric: 'products', value: mockProducts.length.toString() },
              { label: 'Stock Products', metric: 'stock', value: mockProducts.filter(p => p.stock > 0).length.toString() },
              { label: 'Out of Stock', metric: 'outStock', value: mockProducts.filter(p => p.stock === 0).length.toString() },
              { label: 'Revenue', metric: 'revenue', value: 'RM ' + (timeRange === 'thisWeek' ? (totalSales / 1000).toFixed(1) : ((totalSales * 0.8) / 1000).toFixed(1)) + 'k' }
            ].map((stat, i) => (
              <div
                key={i}
                onClick={() => setActiveMetric(stat.metric)}
                className={`group cursor-pointer p-2 rounded-lg transition-all ${activeMetric === stat.metric ? 'bg-gray-50 ring-1 ring-brand-teal/20' : 'hover:bg-gray-50'}`}
              >
                <p className={`text-2xl font-bold transition-colors ${activeMetric === stat.metric ? 'text-brand-dark' : 'text-gray-900'}`}>{stat.value}</p>
                <p className={`text-xs font-medium transition-colors ${activeMetric === stat.metric ? 'text-brand-teal' : 'text-gray-500'}`}>{stat.label}</p>
                <div className={`h-1 w-8 mt-2 rounded-full transition-colors ${activeMetric === stat.metric ? 'bg-brand-dark' : 'bg-transparent group-hover:bg-gray-200'}`}></div>
              </div>
            ))}
          </div>

          <div className="flex-1 relative min-h-[250px] w-full bg-gradient-to-b from-white to-gray-50/30 rounded-lg p-4">
            <DashboardLineChart data={metricsData[activeMetric][timeRange]} />
          </div>
        </div>

        {/* Users in last 30 minutes */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Live Visitors</h3>
              <div className="text-4xl font-bold text-gray-900 mt-2">124</div>
              <p className="text-xs text-green-500 mt-1 flex items-center"><ArrowUp size={10} className="mr-1" /> Users per minute</p>
            </div>
            {/* Removed MoreVertical button */}
          </div>

          {/* Bar Chart Mock with Chart.js */}
          <div className="h-64 mb-6 mt-4 flex items-end">
            <DashboardBarChart />
          </div>
        </div>
      </div>

      {/* 3. Transaction & Top Products Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Table */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">Recent Orders</h3>
            <Link href="/admin/orders" className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
              View All <ChevronRight size={12} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 font-medium border-b border-gray-100">
                <tr>
                  <th className="pb-3 pl-2">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right pr-2">Amount</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {recentTransactions.map((order, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors">
                    <td className="py-3 pl-2 font-medium text-brand-teal">
                      <Link href={`/admin/orders/${order.id}`}>{order.id}</Link>
                    </td>
                    <td className="py-3 font-semibold text-gray-900">{order.customerName}</td>
                    <td className="py-3">{order.date}</td>
                    <td className="py-3 font-medium flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' :
                        order.status === 'Pending' ? 'bg-yellow-400' :
                          order.status === 'Cancelled' ? 'bg-red-500' : 'bg-blue-500'
                        }`}></div>
                      {order.status}
                    </td>
                    <td className="py-3 text-right pr-2 font-bold text-gray-900">RM {order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. Best Selling & Order Status (Moved to Bottom) Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Best selling product */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">Best selling product</h3>
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); toggleMenu('filter'); }}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-700"
              >
                {filterCategory === 'All' ? 'Filter' : filterCategory} <Filter size={12} />
              </button>
              <FilterMenu />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white bg-gray-500 font-medium uppercase rounded-lg overflow-hidden">
                <tr>
                  <th className="py-3 pl-4 rounded-l-lg">Product</th>
                  <th className="py-3">Category</th>
                  <th className="py-3">Sales</th>
                  <th className="py-3 pr-4 rounded-r-lg text-right">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {displayProducts.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pl-2 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center p-1">
                        <img src={row.images?.[0] || row.image} alt={row.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <span className="font-semibold text-gray-900 text-xs">{row.name}</span>
                    </td>
                    <td className="py-3 text-xs">{row.category}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700">{row.sales || Math.floor(row.price / 10)} unit</span>
                      </div>
                    </td>
                    <td className="py-3 pr-2 text-right font-bold text-gray-900 text-xs">RM {row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Status Widget (Moved to Bottom) */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Order Status</h3>
              <p className="text-xs text-gray-400 mt-1">Current</p>
            </div>
            {/* Removed MoreVertical button */}
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <p className="text-xs font-medium text-gray-500">Pending</p>
              </div>
              <p className="text-xl font-bold text-gray-900">{pendingOrders} <span className="text-[10px] font-normal text-gray-400 ml-1">orders</span></p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <p className="text-xs font-medium text-gray-500">Canceled</p>
              </div>
              <p className="text-xl font-bold text-gray-900">{canceledOrders} <span className="text-[10px] font-medium text-red-500 bg-red-50 px-1 rounded ml-1"><ArrowDown size={8} className="inline" /> ~4%</span></p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Link href="/admin/orders" className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
