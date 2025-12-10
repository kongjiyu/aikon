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
  Scissors
} from 'lucide-react';

const FlagUS = () => (
  <svg className="w-4 h-4 rounded-sm shadow-sm" viewBox="0 0 640 480">
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640M0 423.9h640" />
    <path fill="#192f5d" d="M0 0h296v258.1H0" />
    <path fill="#fff" d="M305 0h89v480h-89z" />
  </svg>
);

// Placeholder simplified flags for demo
const Flag = ({ color }: { color: string }) => (
  <div className={`w-5 h-3.5 rounded-sm ${color}`}></div>
);

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* 1. Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Total Sales</h3>
              <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-3xl font-bold text-gray-900">$350K</span>
            <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100">
              Sales <ArrowUp size={10} className="ml-1" /> 10.4%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2 relative z-10">Previous 7days ($235)</p>
          <div className="mt-6 flex justify-end relative z-10">
            <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0"></div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Total Orders</h3>
              <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-3xl font-bold text-gray-900">10.7K</span>
            <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100">
              order <ArrowUp size={10} className="ml-1" /> 14.4%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2 relative z-10">Previous 7days (7.6k)</p>
          <div className="mt-6 flex justify-end relative z-10">
            <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0"></div>
        </div>

        {/* Pending & Canceled */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Pending & Canceled</h3>
              <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <p className="text-xs font-medium text-gray-500">Pending</p>
              </div>
              <p className="text-xl font-bold text-gray-900">509 <span className="text-[10px] font-normal text-gray-400 ml-1">user 204</span></p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <p className="text-xs font-medium text-gray-500">Canceled</p>
              </div>
              <p className="text-xl font-bold text-gray-900">94 <span className="text-[10px] font-medium text-red-500 bg-red-50 px-1 rounded ml-1"><ArrowDown size={8} className="inline" /> 14.4%</span></p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
          </div>
        </div>
      </div>

      {/* 2. Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report for this week */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-gray-900 text-lg">Report for this week</h3>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button className="px-4 py-1.5 text-xs font-bold bg-white rounded-md shadow-sm text-gray-900">This week</button>
              <button className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Last week</button>
              <button className="ml-2 text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Customers', value: '52k' },
              { label: 'Total Products', value: '3.5k' },
              { label: 'Stock Products', value: '2.5k' },
              { label: 'Out of Stock', value: '0.5k' },
              { label: 'Revenue', value: '250k' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-2xl font-bold text-gray-900 group-hover:text-brand-dark">{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium group-hover:text-gray-700">{stat.label}</p>
                <div className={`h-1 w-8 mt-2 rounded-full ${i === 2 ? 'bg-brand-dark' : 'bg-transparent group-hover:bg-gray-200'}`}></div>
              </div>
            ))}
          </div>

          <div className="flex-1 relative min-h-[250px] w-full bg-gradient-to-b from-white to-gray-50/30 rounded-lg border border-gray-50">
            {/* Chart Layout */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-xs text-gray-300 font-mono pointer-events-none">
              {[50, 40, 30, 20, 10, 0].map(n => <div key={n} className="border-b border-gray-50 w-full h-full flex items-end ml-6">{n}k</div>)}
            </div>
            {/* SVG Chart Line */}
            <svg className="absolute bottom-4 left-10 right-0 h-[80%] w-[90%] overflow-visible" preserveAspectRatio="none">
              <path d="M0,150 C50,150 80,100 150,100 C220,100 250,140 320,130 C390,120 420,80 500,80 C580,80 620,130 700,130 L700,200 L0,200 Z" fill="url(#gradient)" opacity="0.1" />
              <path d="M0,150 C50,150 80,100 150,100 C220,100 250,140 320,130 C390,120 420,80 500,80 C580,80 620,130 700,130" fill="none" stroke="#2B4242" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2B4242" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Tooltip Mock */}
              <foreignObject x="450" y="30" width="100" height="60">
                <div className="bg-brand-dark text-white rounded-lg p-2 text-center shadow-lg transform -translate-x-1/2">
                  <div className="text-[10px] opacity-80">Thursday</div>
                  <div className="text-sm font-bold">25.409</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-brand-dark"></div>
                </div>
              </foreignObject>
              <circle cx="500" cy="80" r="4" fill="white" stroke="#2B4242" strokeWidth="2" />
            </svg>
            <div className="absolute bottom-2 left-10 right-0 flex justify-between text-xs text-gray-400 px-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>

        {/* Users in last 30 minutes */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Users in last 30 minutes</h3>
              <div className="text-4xl font-bold text-gray-900 mt-2">21.5K</div>
              <p className="text-xs text-green-500 mt-1 flex items-center"><ArrowUp size={10} className="mr-1" /> Users per minute</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
          </div>

          {/* Bar Chart Mock */}
          <div className="h-16 flex items-end gap-1 mb-6 mt-4">
            {Array.from({ length: 25 }).map((_, i) => {
              // Deterministic height generation to prevent hydration mismatch
              const height = ((i * 37 + 19) % 80) + 20;
              return (
                <div key={i} className={`flex-1 rounded-t-sm ${i % 5 === 0 ? 'bg-brand-dark' : 'bg-gray-200'}`} style={{ height: `${height}%` }}></div>
              );
            })}
          </div>

          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-gray-900">Sales by Country</h4>
            <p className="text-xs text-gray-500 font-medium">Sales</p>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto pr-1 custom-scrollbar">
            {[
              { country: 'US', name: 'USA', flag: <Flag color="bg-blue-600" />, val: 30 },
              { country: 'Brazil', name: 'Brazil', flag: <Flag color="bg-green-600" />, val: 30 },
              { country: 'Australia', name: 'Australia', flag: <Flag color="bg-blue-800" />, val: 25 },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3 w-24">
                  <span className="text-base">{c.flag}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{c.val}k</div>
                    <div className="text-[10px] text-gray-500">{c.name}</div>
                  </div>
                </div>
                <div className="flex-1 mx-3 bg-gray-100 rounded-full h-1.5">
                  <div className="bg-brand-dark h-1.5 rounded-full" style={{ width: `${c.val * 2}%` }}></div>
                </div>
                <div className="text-[10px] font-bold text-green-500 flex items-center">
                  <ArrowUp size={8} /> {c.val}.8%
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-auto py-2 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            View Insight
          </button>
        </div>
      </div>

      {/* 3. Transaction & Top Products Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">Transaction</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
              Filter <Filter size={12} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 font-medium border-b border-gray-100">
                <tr>
                  <th className="pb-3 pl-2">No</th>
                  <th className="pb-3">Id Customer</th>
                  <th className="pb-3">Order Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right pr-2">Amount</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  { no: '1.', id: '#6545', date: '01 Oct | 11:29 am', status: 'Paid', amount: '$64', statusColor: 'text-green-500' },
                  { no: '2.', id: '#5412', date: '01 Oct | 11:29 am', status: 'Pending', amount: '$557', statusColor: 'text-yellow-500' },
                  { no: '3.', id: '#6622', date: '01 Oct | 11:29 am', status: 'Paid', amount: '$156', statusColor: 'text-green-500' },
                  { no: '4.', id: '#6462', date: '01 Oct | 11:29 am', status: 'Paid', amount: '$265', statusColor: 'text-green-500' },
                  { no: '5.', id: '#6462', date: '01 Oct | 11:29 am', status: 'Paid', amount: '$265', statusColor: 'text-green-500' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 border-b border-gray-50 last:border-0">
                    <td className="py-3 pl-2 font-medium">{row.no}</td>
                    <td className="py-3 font-semibold text-gray-900">{row.id}</td>
                    <td className="py-3">{row.date}</td>
                    <td className="py-3 font-medium flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${row.status === 'Paid' ? 'bg-green-500' : 'bg-yellow-400'}`}></div>
                      {row.status}
                    </td>
                    <td className="py-3 text-right pr-2 font-bold text-gray-900">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-gray-900">Top Products</h3>
            </div>
            <p className="text-xs text-gray-400">All product</p>
          </div>
          {/* Search within card */}
          <div className="relative mb-6">
            <input type="text" placeholder="Search" className="w-full bg-gray-50 text-xs py-2 pl-9 rounded-lg outline-none focus:ring-1 focus:ring-gray-200" />
            <Search className="absolute left-3 top-2 text-gray-400" size={14} />
          </div>

          <div className="space-y-5">
            {[
              { name: 'Apple iPhone 13', meta: 'Item: #FXZ-4567', price: '$999.00', Icon: Smartphone },
              { name: 'Nike Air Jordan', meta: 'Item: #FXZ-4567', price: '$72.40', Icon: Shirt }, // best match for demo
              { name: 'T-shirt', meta: 'Item: #FXZ-4567', price: '$35.40', Icon: Shirt },
              { name: 'Assorted Cross Bag', meta: 'Item: #FXZ-4567', price: '$80.00', Icon: Wallet }, // best match
            ].map((prod, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg shadow-sm text-gray-500">
                  <prod.Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{prod.name}</p>
                  <p className="text-xs text-gray-400">{prod.meta}</p>
                </div>
                <div className="text-xs font-bold text-gray-900">{prod.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Best Selling & Add Product Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Best selling product */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
                  <th className="py-3">Total Order</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 pr-4 rounded-r-lg text-right">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  { name: 'Apple iPhone 13', orders: '104', status: 'Stock', price: '$999.00', Icon: Smartphone },
                  { name: 'Nike Air Jordan', orders: '56', status: 'Stock out', price: '$999.00', Icon: Shirt },
                  { name: 'T-shirt', orders: '266', status: 'Stock', price: '$999.00', Icon: Shirt },
                  { name: 'Cross Bag', orders: '506', status: 'Stock', price: '$999.00', Icon: Wallet },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                    <td className="py-3 pl-2 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                        <row.Icon size={16} />
                      </div>
                      <span className="font-semibold text-gray-900 text-xs">{row.name}</span>
                    </td>
                    <td className="py-3 text-xs">{row.orders}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'Stock' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className={`text-xs ${row.status === 'Stock' ? 'text-green-500' : 'text-red-500'}`}>{row.status}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-2 text-right font-bold text-gray-900 text-xs">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="text-xs font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Details</button>
          </div>
        </div>

        {/* Add New Product & Product List side widgets */}
        <div className="space-y-6">
          {/* Add New Product Categories */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Add New Product</h3>
              <button className="text-xs flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <Plus size={12} /> Add New
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-4">Categories</p>
            <div className="space-y-2">
              {[
                { name: 'Electronic', Icon: Monitor },
                { name: 'Fashion', Icon: Shirt },
                { name: 'Home', Icon: Home }
              ].map((cat, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-gray-50 hover:bg-gray-50 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-white transition-colors">
                      <cat.Icon size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Product List Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs text-gray-400">Product</p>
              <button className="text-xs text-gray-400 hover:text-gray-600">See more</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Smart Fitness Tracker', price: '$39.99', Icon: Watch },
                { name: 'Leather Wallet', price: '$19.99', Icon: Wallet },
                { name: 'Electric Hair Trimmer', price: '$34.99', Icon: Scissors },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-lg text-gray-500">
                      <p.Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.price}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-white rounded-full text-[10px] hover:bg-gray-700">
                    <Plus size={10} /> Add
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-xs text-gray-400 hover:text-gray-600">See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
