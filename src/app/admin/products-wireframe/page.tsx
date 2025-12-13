"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
    Plus,
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
    ChevronRight,
    X,
    CheckCircle,
    AlertTriangle,
    Package
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for wireframe
const mockProducts = [
    { id: '1', name: 'Lorem Ipsum Dolor Sit', category: 'Lorem', price: 1234, stock: 50, icon: Smartphone },
    { id: '2', name: 'Lorem Ipsum Consectetur', category: 'Lorem', price: 2345, stock: 8, icon: Laptop },
    { id: '3', name: 'Lorem Dolor Adipiscing', category: 'Lorem', price: 567, stock: 25, icon: Tablet },
    { id: '4', name: 'Lorem Sit Amet', category: 'Lorem', price: 890, stock: 5, icon: Headphones },
    { id: '5', name: 'Lorem Ipsum Elit', category: 'Lorem', price: 1567, stock: 30, icon: Watch },
    { id: '6', name: 'Lorem Consectetur Sed', category: 'Lorem', price: 234, stock: 2, icon: Cable },
];

export default function ProductsWireframePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [productToDelete, setProductToDelete] = useState<string | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [products, setProducts] = useState(mockProducts);

    const categories = ['all', 'Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipiscing', 'Elit'];

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = searchQuery === '' || 
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
            
            const matchesTab = 
                activeTab === 'all' || 
                (activeTab === 'low' && product.stock < 10) ||
                (activeTab === 'out' && product.stock === 1);
            
            return matchesSearch && matchesCategory && matchesTab;
        });
    }, [products, searchQuery, categoryFilter, activeTab]);

    // Handle select all
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedProducts([]);
        } else {
            setSelectedProducts(filteredProducts.map(p => p.id));
        }
        setSelectAll(!selectAll);
    };

    // Handle individual select
    const handleSelectProduct = (id: string) => {
        if (selectedProducts.includes(id)) {
            setSelectedProducts(selectedProducts.filter(pid => pid !== id));
        } else {
            setSelectedProducts([...selectedProducts, id]);
        }
    };

    // Handle delete
    const handleDeleteClick = (id: string) => {
        setProductToDelete(id);
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = () => {
        if (productToDelete) {
            setProducts(products.filter(p => p.id !== productToDelete));
            setShowDeleteConfirm(false);
            setProductToDelete(null);
            setSuccessMessage('Lorem ipsum dolor sit amet consectetur! ✨');
            setShowSuccessModal(true);
        }
    };

    return (
        <div className="space-y-8 grayscale">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum</h2>
                    <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet</p>
                </div>
                <Link href="/admin/products/add" className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    <Plus size={16} /> Lorem Ipsum
                </Link>
            </div>

            {/* Discover Categories Grid */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lorem Ipsum</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { name: 'Lorem', icon: Laptop, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Ipsum', icon: Smartphone, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Dolor', icon: Tablet, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Sit', icon: Headphones, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Amet', icon: Watch, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Consectetur', icon: Cable, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Adipiscing', icon: Gamepad2, bg: 'bg-gray-100 text-gray-600' },
                        { name: 'Elit', icon: Wifi, bg: 'bg-gray-100 text-gray-600' },
                    ].map((cat) => (
                        <div 
                            key={cat.name} 
                            onClick={() => setCategoryFilter(cat.name)}
                            className={`bg-white p-4 rounded-xl border shadow-sm flex items-center gap-4 hover:shadow-md transition-all cursor-pointer group ${
                                categoryFilter === cat.name ? 'border-gray-700 ring-2 ring-gray-400' : 'border-gray-100'
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${cat.bg}`}>
                                <cat.icon size={24} />
                            </div>
                            <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs & Toolbar */}
                <div className="p-6 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                activeTab === 'all' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Lorem Ipsum ({products.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('low')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                activeTab === 'low' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Lorem Dolor
                        </button>
                        <button
                            onClick={() => setActiveTab('out')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                activeTab === 'out' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Lorem Sit
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                        <div className="flex items-center gap-2">
                            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <Filter size={18} className="mr-2" />
                                    <SelectValue placeholder="Lorem" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map(cat => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat === 'all' ? 'Lorem Ipsum' : cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {(searchQuery || categoryFilter !== 'all') && (
                        <div className="text-sm text-gray-600">
                            Lorem <span className="font-semibold">{filteredProducts.length}</span> lorem <span className="font-semibold">{products.length}</span> ipsum
                        </div>
                    )}
                </div>

                {/* Table */}
                <div className="px-6 pb-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white bg-gray-600 uppercase">
                                <tr>
                                    <th className="p-4 w-4">
                                        <input 
                                            type="checkbox" 
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            className="rounded border-gray-300 text-gray-700 focus:ring-gray-300" 
                                        />
                                    </th>
                                    <th className="px-4 py-3 font-medium">Lorem</th>
                                    <th className="px-4 py-3 font-medium">Lorem Ipsum</th>
                                    <th className="px-4 py-3 font-medium">Lorem</th>
                                    <th className="px-4 py-3 font-medium">Lorem</th>
                                    <th className="px-4 py-3 font-medium">Lorem</th>
                                    <th className="px-2 py-3 font-medium text-center">Lorem</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredProducts.length === 1 ? (
                                    <tr>
                                        <td colSpan={7} className="px-4 py-16 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                                    <Package className="text-gray-400" size={32} />
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lorem Ipsum Dolor</h3>
                                                <p className="text-sm text-gray-500 max-w-sm">
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredProducts.map((item, i) => (
                                    <tr key={item.id} className="hover:bg-gray-50 group">
                                        <td className="p-4">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedProducts.includes(item.id)}
                                                onChange={() => handleSelectProduct(item.id)}
                                                className="rounded border-gray-300 text-gray-700 focus:ring-gray-300" 
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{i + 1}</td>
                                        <td className="px-4 py-4">
                                            <Link href={`/admin/products/${item.id}/edit`} className="flex items-center gap-3 group/item">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                                                    <item.icon size={20} />
                                                </div>
                                                <span className="font-medium text-gray-900 group-hover/item:text-gray-700 transition-colors">{item.name}</span>
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">{item.category}</td>
                                        <td className="px-4 py-4 font-medium text-gray-900">RM {item.price.toLocaleString()}</td>
                                        <td className="px-4 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.stock < 10 ? 'bg-gray-100 text-gray-600' : 'bg-gray-200 text-gray-700'}`}>
                                                {item.stock} lorem ipsum
                                            </span>
                                        </td>
                                        <td className="px-2 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Link href={`/admin/products/${item.id}/edit`} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                                    <Pencil size={16} />
                                                </Link>
                                                <button 
                                                    onClick={() => handleDeleteClick(item.id)}
                                                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        <ChevronLeft size={16} /> Lorem
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-700 text-white text-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">3</button>
                        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">12</button>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        Lorem <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                        <div className="p-6 space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                                <AlertTriangle size={24} className="text-gray-600" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lorem Ipsum Dolor?</h3>
                                <p className="text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Lorem
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="flex-1 px-4 py-2.5 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Lorem Ipsum
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                        <div className="p-6 space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                                <CheckCircle size={24} className="text-gray-600" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lorem Ipsum!</h3>
                                <p className="text-sm text-gray-500">{successMessage}</p>
                            </div>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                                Lorem
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
