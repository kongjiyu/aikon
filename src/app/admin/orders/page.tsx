import Link from 'next/link';
import {
    Plus,
    MoreVertical,
    Search,
    Filter,
    ArrowUp,
    ArrowDown,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Clock,
    XCircle,
    Truck,
    Package
} from 'lucide-react';
import { mockOrders, mockProducts } from '@/lib/mockData';

export default function OrderListingPage() {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Order List</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your orders</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                        <Plus size={16} /> Add Order
                    </button>
                    <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        More Action <MoreVertical size={16} />
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">1,240</span>
                        <span className="text-xs font-medium text-green-500 flex items-center"><ArrowUp size={12} /> 14.4%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">New Orders</h3>
                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">240</span>
                        <span className="text-xs font-medium text-green-500 flex items-center"><ArrowUp size={12} /> 20%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Completed Orders</h3>
                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">960</span>
                        <span className="text-xs font-medium text-green-500 flex items-center"><ArrowUp size={12} /> 85%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Canceled Orders</h3>
                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">87</span>
                        <span className="text-xs font-medium text-red-500 flex items-center"><ArrowDown size={12} /> 5%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                </div>
            </div>

            {/* Order List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs & Toolbar */}
                <div className="p-6 border-b border-gray-100 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {[
                            { label: 'All order', count: 240 },
                            { label: 'Completed', count: 0 },
                            { label: 'Pending', count: 0 },
                            { label: 'Canceled', count: 0 }
                        ].map((tab, i) => (
                            <button
                                key={tab.label}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${i === 0
                                    ? 'bg-[#2B3433] text-white shadow-md'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {tab.label} {tab.count > 0 && <span className="opacity-70 ml-1">({tab.count})</span>}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="relative flex-1 max-w-lg">
                            <input
                                type="text"
                                placeholder="Search order report"
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#748E8B]/50 transition-shadow shadow-sm"
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                                <Filter size={18} />
                            </button>
                            <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                                <ArrowUp size={18} />
                            </button>
                            <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-white uppercase bg-[#748E8B]">
                            <tr>
                                <th className="p-4 w-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#748E8B] focus:ring-[#748E8B]" />
                                </th>
                                <th className="px-4 py-3 font-medium">No.</th>
                                <th className="px-4 py-3 font-medium">Order ID</th>
                                <th className="px-4 py-3 font-medium">Product</th>
                                <th className="px-4 py-3 font-medium">Date</th>
                                <th className="px-4 py-3 font-medium">Price</th>
                                <th className="px-4 py-3 font-medium">Payment</th>
                                <th className="px-4 py-3 font-medium text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockOrders.map((item, i) => {
                                const mainProduct = mockProducts.find(p => p.id === item.items[0].productId);

                                return (
                                    <tr key={i} className="hover:bg-gray-50 group cursor-pointer">
                                        <td className="p-4">
                                            <input type="checkbox" className="rounded border-gray-300 text-[#748E8B] focus:ring-[#748E8B]" />
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{i + 1}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            <Link href={`/admin/orders/${item.id}`} className="hover:text-[#748E8B] hover:underline">
                                                #{item.id}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4">
                                            <Link href={`/admin/orders/${item.id}`} className="flex items-center gap-3 group/item">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    {mainProduct?.image ? (
                                                        <img src={mainProduct.image} alt={mainProduct.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Package size={20} />
                                                    )}
                                                </div>
                                                <span className="font-medium text-gray-900 group-hover/item:text-[#748E8B] transition-colors">
                                                    {mainProduct?.name || 'Unknown Product'}
                                                    {item.items.length > 1 && ` +${item.items.length - 1} more`}
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{item.date}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">${item.total.toLocaleString()}</td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${item.payment === 'Paid' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                <span className={`font-medium ${item.payment === 'Paid' ? 'text-gray-900' : 'text-gray-500'}`}>{item.payment}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <div className={`flex items-center justify-center gap-2 ${item.status === 'Delivered' ? 'text-green-600' :
                                                item.status === 'Pending' ? 'text-orange-500' :
                                                    item.status === 'Shipped' ? 'text-blue-600' :
                                                        'text-red-500'
                                                }`}>
                                                {item.status === 'Delivered' ? <CheckCircle2 size={16} /> :
                                                    item.status === 'Pending' ? <Clock size={16} /> :
                                                        item.status === 'Shipped' ? <Truck size={16} /> :
                                                            <XCircle size={16} />
                                                }
                                                <span className="font-medium">{item.status}</span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-brand-dark text-white text-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">3</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">4</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">5</button>
                        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">24</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
