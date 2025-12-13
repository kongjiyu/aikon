"use client";

import { useState } from 'react';
import Link from 'next/link';
import {

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
    const [activeTab, setActiveTab] = useState('All order');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const itemsPerPage = 5;

    const toggleMenu = (menu: string) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    // Filter Logic
    const filteredOrders = mockOrders.filter(order => {
        // Status Filter
        const matchesStatus =
            activeTab === 'All order' ||
            (activeTab === 'Completed' && order.status === 'Delivered') ||
            (activeTab === 'Pending' && order.status === 'Pending') ||
            (activeTab === 'Canceled' && order.status === 'Cancelled');

        // Search Filter (ID or Product Name)
        const mainProduct = mockProducts.find(p => p.id === order.items[0].productId);
        const matchesSearch =
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (mainProduct?.name.toLowerCase().includes(searchQuery.toLowerCase()) || false);

        return matchesStatus && matchesSearch;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Counts for Tabs
    const counts = {
        all: mockOrders.length,
        completed: mockOrders.filter(o => o.status === 'Delivered').length,
        pending: mockOrders.filter(o => o.status === 'Pending').length,
        canceled: mockOrders.filter(o => o.status === 'Cancelled').length,
    };

    const tabs = [
        { label: 'All order', count: counts.all },
        { label: 'Completed', count: counts.completed },
        { label: 'Pending', count: counts.pending },
        { label: 'Canceled', count: counts.canceled }
    ];

    // Handle Tab Change (Reset Page)
    const handleTabChange = (label: string) => {
        setActiveTab(label);
        setCurrentPage(1);
    };

    // Handle Select All
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedOrders([]);
            setSelectAll(false);
        } else {
            setSelectedOrders(paginatedOrders.map(order => order.id));
            setSelectAll(true);
        }
    };

    // Handle Individual Selection
    const handleSelectOrder = (orderId: string) => {
        if (selectedOrders.includes(orderId)) {
            setSelectedOrders(selectedOrders.filter(id => id !== orderId));
            setSelectAll(false);
        } else {
            const newSelected = [...selectedOrders, orderId];
            setSelectedOrders(newSelected);
            if (newSelected.length === paginatedOrders.length) {
                setSelectAll(true);
            }
        }
    };

    return (
        <div className="space-y-8" onClick={() => setActiveMenu(null)}>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Order List</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your orders</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => toggleMenu('header-more')}
                            className={`flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors ${activeMenu === 'header-more' ? 'ring-2 ring-brand-teal/20' : ''}`}
                        >
                            More Action <MoreVertical size={16} />
                        </button>
                        {activeMenu === 'header-more' && (
                            <div className="absolute right-0 top-12 w-40 bg-white shadow-xl rounded-lg border border-gray-100 py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Export to CSV</button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Export to PDF</button>
                                <div className="h-px bg-gray-100 my-1"></div>
                                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Bulk Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
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
                        {tabs.map((tab, i) => (
                            <button
                                key={tab.label}
                                onClick={(e) => { e.stopPropagation(); handleTabChange(tab.label); }}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab.label
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
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#748E8B]/50 transition-shadow shadow-sm"
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Filter Button */}
                            <div className="relative" onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={() => toggleMenu('filter')}
                                    className={`p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors ${activeMenu === 'filter' ? 'ring-2 ring-brand-teal/20 bg-gray-50' : ''}`}
                                >
                                    <Filter size={18} />
                                </button>
                                {activeMenu === 'filter' && (
                                    <div className="absolute right-0 top-12 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                                        <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Filter By</div>
                                        <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                            <input type="checkbox" className="rounded text-brand-dark" />
                                            <span className="ml-2 text-sm text-gray-700">Date Range</span>
                                        </label>
                                        <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                            <input type="checkbox" className="rounded text-brand-dark" />
                                            <span className="ml-2 text-sm text-gray-700">Price: High to Low</span>
                                        </label>
                                        <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                            <input type="checkbox" className="rounded text-brand-dark" />
                                            <span className="ml-2 text-sm text-gray-700">Price: Low to High</span>
                                        </label>
                                        <div className="px-3 mt-2">
                                            <button className="w-full bg-brand-dark text-white text-xs py-1.5 rounded">Apply Filter</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sort Button */}
                            <button
                                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                {sortOrder === 'asc' ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                            </button>

                            {/* Three Dot Menu */}
                            <div className="relative" onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={() => toggleMenu('more')}
                                    className={`p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors ${activeMenu === 'more' ? 'ring-2 ring-brand-teal/20 bg-gray-50' : ''}`}
                                >
                                    <MoreVertical size={18} />
                                </button>
                                {activeMenu === 'more' && (
                                    <div className="absolute right-0 top-12 w-36 bg-white shadow-xl rounded-lg border border-gray-100 py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Refresh List</button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Table Settings</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="px-6 py-6" onClick={(e) => e.stopPropagation()}>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white uppercase bg-brand-sage">
                                <tr>
                                    <th className="p-4 w-4">
                                        <input 
                                            type="checkbox" 
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            className="rounded border-gray-300 text-brand-sage focus:ring-brand-sage" 
                                        />
                                    </th>
                                    <th className="px-4 py-3 font-medium">No.</th>
                                    <th className="px-4 py-3 font-medium">Order ID</th>
                                    <th className="px-4 py-3 font-medium">Product</th>
                                    <th className="px-4 py-3 font-medium">Date</th>
                                    <th className="px-4 py-3 font-medium">Price</th>
                                    <th className="px-4 py-3 font-medium">Payment</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {paginatedOrders.length > 0 ? (sortOrder === 'asc' ? [...paginatedOrders].reverse() : paginatedOrders).map((item, i) => {
                                    const mainProduct = mockProducts.find(p => p.id === item.items[0].productId);

                                    return (
                                        <tr key={i} className="hover:bg-gray-50 group cursor-pointer">
                                            <td className="p-4">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedOrders.includes(item.id)}
                                                    onChange={() => handleSelectOrder(item.id)}
                                                    className="rounded border-gray-300 text-brand-sage focus:ring-brand-sage" 
                                                />
                                            </td>
                                            <td className="px-4 py-4 text-gray-500">{item.id}</td>
                                            <td className="px-4 py-4 font-medium text-gray-900">
                                                <Link href={`/admin/orders/${item.id}`} className="hover:text-brand-sage hover:underline">
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
                                                    <span className="font-medium text-gray-900 group-hover/item:text-brand-sage transition-colors">
                                                        {mainProduct?.name || 'Unknown Product'}
                                                        {item.items.length > 1 && ` +${item.items.length - 1} more`}
                                                    </span>
                                                </Link>
                                            </td>
                                            <td className="px-4 py-4 text-gray-500">{item.date}</td>
                                            <td className="px-4 py-4 font-medium text-gray-900">RM {item.total.toLocaleString()}</td>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${item.payment === 'Paid' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                    <span className={`font-medium ${item.payment === 'Paid' ? 'text-gray-900' : 'text-gray-500'}`}>{item.payment}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className={`flex items-center gap-2 ${item.status === 'Delivered' ? 'text-green-600' :
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
                                }) : (
                                    <tr>
                                        <td colSpan={8} className="px-4 py-16 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                                    <Package className="text-gray-400" size={32} />
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orders Found</h3>
                                                <p className="text-sm text-gray-500 max-w-sm">
                                                    We couldn't find any orders matching your search or filter. Please try different criteria.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="px-6 pb-6 flex items-center justify-between">
                    <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <div className="flex items-center gap-1">
                        {/* Page 1 */}
                        <button
                            onClick={() => setCurrentPage(1)}
                            className={`w-8 h-8 flex items-center justify-center rounded text-sm ${currentPage === 1 ? 'bg-brand-dark text-white' : 'hover:bg-gray-100 text-gray-600'}`}
                        >
                            1
                        </button>

                        {/* Page 2 */}
                        {totalPages > 1 && (
                            <button
                                onClick={() => setCurrentPage(2)}
                                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${currentPage === 2 ? 'bg-brand-dark text-white' : 'hover:bg-gray-100 text-gray-600'}`}
                            >
                                2
                            </button>
                        )}

                        {/* Page 3 */}
                        {totalPages > 2 && (
                            <button
                                onClick={() => setCurrentPage(3)}
                                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${currentPage === 3 ? 'bg-brand-dark text-white' : 'hover:bg-gray-100 text-gray-600'}`}
                            >
                                3
                            </button>
                        )}

                        {/* Ellipsis if > 4 */}
                        {totalPages > 4 && <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>}

                        {/* Last Page if > 3 (covers the gap from 3 to last) */}
                        {totalPages > 3 && (
                            <button
                                onClick={() => setCurrentPage(totalPages)}
                                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${currentPage === totalPages ? 'bg-brand-dark text-white' : 'hover:bg-gray-100 text-gray-600'}`}
                            >
                                {totalPages}
                            </button>
                        )}
                    </div>
                    <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
