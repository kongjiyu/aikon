'use client';

import Link from 'next/link';
import { ChevronRight, Save, Image as ImageIcon, Upload, Plus, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ProductDetailWireframe() {
    const router = useRouter();

    // Mock generic state
    const [formData, setFormData] = useState({
        name: 'Lorem Ipsum Product Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '999.99',
        discountPrice: '888.88',
        stock: '100',
        category: 'Lorem Category',
        tags: 'Lorem Tag',
    });

    const [selectedImage, setSelectedImage] = useState('https://placehold.co/600x400');
    const [colors, setColors] = useState<string[]>(['#CCCCCC', '#999999', '#666666']);
    const [selectedColor, setSelectedColor] = useState('#CCCCCC');
    const colorInputRef = useRef<HTMLInputElement>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        setShowSuccessModal(true);
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum Title</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Link href="#" className="hover:text-brand-dark">Lorem Parent</Link>
                        <ChevronRight size={14} />
                        <span>Lorem Current</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="#" className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
                        Button Text
                    </Link>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        <Save size={16} /> Button Text
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Section Header</h3>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Lorem Label <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                placeholder="Lorem placeholder"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Lorem Description Label <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows={5}
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                placeholder="Lorem ipsum dolor sit amet..."
                            />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Pricing Header</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Lorem Label <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-gray-500">RM</span>
                                    <input
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => handleInputChange('price', e.target.value)}
                                        className="w-full pl-12 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Lorem Label</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-gray-500">RM</span>
                                    <input
                                        type="number"
                                        value={formData.discountPrice}
                                        onChange={(e) => handleInputChange('discountPrice', e.target.value)}
                                        placeholder="0.00"
                                        className="w-full pl-12 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Lorem SKU</label>
                                <input
                                    type="text"
                                    defaultValue="LOREM-12345"
                                    disabled
                                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed focus:outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Lorem Stock <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    value={formData.stock}
                                    onChange={(e) => handleInputChange('stock', e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Variants Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Variants</h3>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">Lorem Colors</label>
                            <div className="flex flex-wrap gap-4">
                                {colors.map((color, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-brand-dark ring-2 ring-brand-teal/20 scale-110' : 'border-gray-200 hover:scale-105'
                                            }`}
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    />
                                ))}
                                <button
                                    className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal transition-all"
                                >
                                    <Plus size={18} />
                                </button>
                                <input
                                    type="color"
                                    ref={colorInputRef}
                                    className="absolute opacity-0 pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <h3 className="font-semibold text-gray-900">Lorem Image Header</h3>
                            <button className="text-sm text-brand-teal font-medium hover:underline">Button Text</button>
                        </div>

                        {/* Main Preview */}
                        <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-center justify-center min-h-[250px] relative group">
                            <img src={selectedImage} alt="Placeholder" className="max-w-full max-h-[250px] object-contain" />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedImage('https://placehold.co/600x400')}
                                    className={`aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 p-1 relative ${i === 0 ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-transparent hover:border-gray-200'
                                        }`}
                                >
                                    <img src="https://placehold.co/100x100" alt="" className="w-full h-full object-contain" />
                                </button>
                            ))}

                            {/* Upload Placeholder */}
                            <button className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                                <Upload size={20} />
                                <span className="text-[10px] mt-1 font-medium">Add</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Category Header</h3>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Lorem Label <span className="text-red-500">*</span>
                            </label>
                            <Select defaultValue="lorem">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="lorem">Lorem Category 1</SelectItem>
                                    <SelectItem value="ipsum">Lorem Category 2</SelectItem>
                                    <SelectItem value="dolor">Lorem Category 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Lorem Label</label>
                            <input
                                type="text"
                                value={formData.tags}
                                onChange={(e) => handleInputChange('tags', e.target.value)}
                                placeholder="Lorem placeholder"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                        <div className="p-6 space-y-4">
                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lorem Ipsum Success!</h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="text-xs text-gray-500">
                                    Sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => router.push('/admin/products')}
                                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Button Text
                                </button>
                                <button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="flex-1 px-4 py-2.5 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Button Text
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
