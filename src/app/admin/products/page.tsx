import Link from 'next/link';
import {
    Plus,
    MoreVertical,
    Search,
    Filter,
    Laptop,
    Smartphone,
    Tablet,
    Headphones,
    Watch,
    Cable,
    Gamepad2,
    Wifi,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { mockProducts } from '@/lib/mockData';

export default function ProductListingPage() {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Products</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your product catalog</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/admin/products/add" className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                        <Plus size={16} /> Add Product
                    </Link>
                    <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        More Action <MoreVertical size={16} />
                    </button>
                </div>
            </div>

            {/* Discover Categories Grid */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { name: 'Laptops', icon: Laptop, bg: 'bg-blue-50 text-blue-600' },
                        { name: 'Smartphones', icon: Smartphone, bg: 'bg-purple-50 text-purple-600' },
                        { name: 'Tablets', icon: Tablet, bg: 'bg-pink-50 text-pink-600' },
                        { name: 'Audio', icon: Headphones, bg: 'bg-orange-50 text-orange-600' },
                        { name: 'Wearables', icon: Watch, bg: 'bg-green-50 text-green-600' },
                        { name: 'Accessories', icon: Cable, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Gaming', icon: Gamepad2, bg: 'bg-red-50 text-red-600' },
                        { name: 'Networking', icon: Wifi, bg: 'bg-cyan-50 text-cyan-600' },
                    ].map((cat) => (
                        <div key={cat.name} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${cat.bg}`}>
                                <cat.icon size={24} />
                            </div>
                            <span className="font-medium text-gray-900 group-hover:text-brand-dark transition-colors">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs & Toolbar */}
                <div className="p-6 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {['All Products (145)', 'Featured', 'Low Stock', 'Out of Stock'].map((tab, i) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${i === 0 ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search products (e.g. iPhone 15, MacBook)"
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 flex items-center gap-2 px-3">
                                <Filter size={18} /> <span className="hidden sm:inline text-sm">Filter</span>
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                                <Plus size={18} />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="px-6 pb-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-brand-sage uppercase">
                                <tr>
                                    <th className="p-4 w-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-brand-dark focus:ring-brand-teal" />
                                    </th>
                                    <th className="px-4 py-3 font-medium">No.</th>
                                    <th className="px-4 py-3 font-medium">Product</th>
                                    <th className="px-4 py-3 font-medium">Category</th>
                                    <th className="px-4 py-3 font-medium">Price</th>
                                    <th className="px-4 py-3 font-medium">Stock</th>
                                    <th className="px-4 py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {mockProducts.map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50 group">
                                        <td className="p-4">
                                            <input type="checkbox" className="rounded border-gray-300 text-brand-dark focus:ring-brand-teal" />
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{i + 1}</td>
                                        <td className="px-4 py-4">
                                            <Link href={`/admin/products/${item.id}/edit`} className="flex items-center gap-3 group/item">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <item.icon size={20} />
                                                    )}
                                                </div>
                                                <span className="font-medium text-gray-900 group-hover/item:text-brand-dark transition-colors">{item.name}</span>
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{item.category}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">${item.price.toLocaleString()}</td>
                                        <td className="px-4 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.stock < 10 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                                {item.stock} in stock
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/products/${item.id}/edit`} className="p-1 text-gray-400 hover:text-brand-teal transition-colors">
                                                    <Pencil size={16} />
                                                </Link>
                                                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">12</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
