'use client';

import Link from 'next/link';
import {
    ChevronRight,
    UploadCloud,
    X,
    Image as ImageIcon
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function AddProductWireframe() {
    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Link href="#" className="hover:text-brand-dark">Products</Link>
                        <ChevronRight size={14} />
                        <span>Add Product</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="#"
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        className="px-4 py-2 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Save Product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Basic Details */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Information</h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Product Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Lorem ipsum dolor sit"
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 resize-none focus:ring-brand-teal"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Pricing</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Base Price <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-gray-500 text-sm font-medium">RM</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Discount Added</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-gray-500 text-sm font-medium">RM</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded border-gray-300 text-brand-dark focus:ring-brand-teal" />
                                    <span className="text-sm text-gray-600">Charge tax on this product</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Inventory */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Inventory</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
                                <input
                                    type="text"
                                    placeholder="LOR-001"
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode</label>
                                <input
                                    type="text"
                                    placeholder="12345678"
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Quantity <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="100"
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column - Media & Organization */}
                <div className="space-y-8">

                    {/* Media */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Images</h3>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500 group-hover:text-brand-dark transition-colors">
                                <UploadCloud size={24} />
                            </div>
                            <p className="text-sm font-medium text-gray-900">Click to upload</p>
                            <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 relative group cursor-pointer">
                                    <ImageIcon size={20} />
                                    <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <X className="text-white" size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Organization */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Organization</h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Lorem Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Lorem Category 1</SelectItem>
                                        <SelectItem value="2">Lorem Category 2</SelectItem>
                                        <SelectItem value="3">Lorem Category 3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="published">Published</SelectItem>
                                        <SelectItem value="draft">Draft</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                                <input
                                    type="text"
                                    placeholder="Lorem, Ipsum"
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                                        Lorem <button className="hover:text-red-500"><X size={12} /></button>
                                    </span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                                        Ipsum <button className="hover:text-red-500"><X size={12} /></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
