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

  // Calculate Stats - Simplified for demo interactions
  const totalSales = mockOrders.reduce((acc, order) => acc + order.total, 0);
  const totalOrders = mockOrders.length;
  const pendingOrders = mockOrders.filter(o => o.status === 'Pending').length;
  const canceledOrders = mockOrders.filter(o => o.status === 'Cancelled').length;

  // Recent Transactions (Last 5 orders)
  const recentTransactions = [...mockOrders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
  // Top Products
  const topProducts = [...mockProducts].sort((a, b) => b.price - a.price).slice(0, 4);
  // Low Stock
  const lowStockProducts = mockProducts.filter(p => p.stock < 20);

  // Revenue Data Mock
  const revenueData = {
    thisWeek: [15, 22, 18, 45, 25, 30, 40],
    lastWeek: [12, 15, 10, 30, 20, 25, 28]
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
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); toggleMenu('sales'); }} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"><MoreVertical size={16} /></button>
              <ActionMenu id="sales" link="/admin/orders" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-3xl font-bold text-gray-900">${(totalSales / 1000).toFixed(1)}K</span>
            <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full">
              Sales <ArrowUp size={10} className="ml-1" /> 10.4%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2 relative z-10">Previous 7days ($2.3k)</p>
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
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); toggleMenu('orders'); }} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"><MoreVertical size={16} /></button>
              <ActionMenu id="orders" link="/admin/orders" />
            </div>
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
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden border-l-4 border-l-red-100 group hover:shadow-md transition-all">
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <AlertTriangle size={18} className="text-red-500" />
              <h3 className="font-bold text-gray-900">Low Stock Alerts</h3>
            </div>
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); toggleMenu('lowstock'); }} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"><MoreVertical size={16} /></button>
              <ActionMenu id="lowstock" link="/admin/products" />
            </div>
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
              <div className="relative ml-2">
                <button onClick={(e) => { e.stopPropagation(); toggleMenu('revenue'); }} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200"><MoreVertical size={16} /></button>
                <ActionMenu id="revenue" link="/admin/orders" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Customers', value: timeRange === 'thisWeek' ? '42' : '38' },
              { label: 'Total Products', value: mockProducts.length.toString() },
              { label: 'Stock Products', value: mockProducts.filter(p => p.stock > 0).length.toString() },
              { label: 'Out of Stock', value: mockProducts.filter(p => p.stock === 0).length.toString() },
              { label: 'Revenue', value: '$' + (timeRange === 'thisWeek' ? (totalSales / 1000).toFixed(1) : ((totalSales * 0.8) / 1000).toFixed(1)) + 'k' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-2xl font-bold text-gray-900 group-hover:text-brand-dark transition-colors">{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors">{stat.label}</p>
                <div className={`h-1 w-8 mt-2 rounded-full transition-colors ${i === 4 ? 'bg-brand-dark' : 'bg-transparent group-hover:bg-gray-200'}`}></div>
              </div>
            ))}
          </div>

          <div className="flex-1 relative min-h-[250px] w-full bg-gradient-to-b from-white to-gray-50/30 rounded-lg p-4">
            <DashboardLineChart data={revenueData[timeRange]} />
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
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); toggleMenu('live'); }} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"><MoreVertical size={16} /></button>
              <ActionMenu id="live" link="/admin/customers" />
            </div>
          </div>

          {/* Bar Chart Mock with Chart.js */}
          <div className="h-20 mb-6 mt-4">
            <DashboardBarChart />
          </div>

          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-gray-900">Sales by Country</h4>
            <p className="text-xs text-gray-500 font-medium">Sales</p>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto pr-1 custom-scrollbar">
            {[
              { country: 'US', name: 'USA', flag: <Flag color="bg-blue-600" />, val: 30 },
              { country: 'Malaysia', name: 'Malaysia', flag: <Flag color="bg-red-600" />, val: 45 },
              { country: 'Singapore', name: 'Singapore', flag: <Flag color="bg-red-500" />, val: 25 },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3 w-24">
                  <span className="text-base">{c.flag}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{c.val}%</div>
                    <div className="text-[10px] text-gray-500">{c.name}</div>
                  </div>
                </div>
                <div className="flex-1 mx-3 bg-gray-100 rounded-full h-1.5">
                  <div className="bg-brand-dark h-1.5 rounded-full" style={{ width: `${c.val}%` }}></div>
                </div>
                <div className="text-[10px] font-bold text-green-500 flex items-center">
                  <ArrowUp size={8} />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-auto py-2 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            View Analytics
          </button>
        </div>
      </div>

      {/* 3. Transaction & Top Products Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">Recent Transactions</h3>
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
                    <td className="py-3 text-right pr-2 font-bold text-gray-900">${order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-gray-900">Top Products</h3>
            </div>
            <p className="text-xs text-gray-400">By Price</p>
          </div>

          <div className="space-y-5">
            {topProducts.map((prod, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center p-1 border border-gray-100">
                  <img src={prod.images?.[0] || prod.image} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/admin/products/${prod.id}/edit`} className="text-sm font-bold text-gray-900 truncate hover:text-brand-dark block">{prod.name}</Link>
                  <p className="text-xs text-gray-400">Stock: {prod.stock}</p>
                </div>
                <div className="text-xs font-bold text-gray-900">${prod.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Best Selling & Order Status (Moved to Bottom) Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Best selling product */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">Best selling product</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-700">
              Filter <Filter size={12} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white bg-gray-500 font-medium uppercase rounded-lg overflow-hidden">
                <tr>
                  <th className="py-3 pl-4 rounded-l-lg">Product</th>
                  <th className="py-3">Category</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 pr-4 rounded-r-lg text-right">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {topProducts.slice(0, 4).map((row, idx) => (
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
                        <div className={`w-1.5 h-1.5 rounded-full ${row.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className={`text-xs ${row.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>{row.stock > 0 ? 'In Stock' : 'Stock Out'}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-2 text-right font-bold text-gray-900 text-xs">${row.price}</td>
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
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); toggleMenu('status'); }} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"><MoreVertical size={16} /></button>
              <ActionMenu id="status" link="/admin/orders" />
            </div>
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
