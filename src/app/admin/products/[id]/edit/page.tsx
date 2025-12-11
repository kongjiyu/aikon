'use client';

import Link from 'next/link';
import { ChevronRight, Save, Image as ImageIcon, Upload, Trash2, Plus, X } from 'lucide-react';
import { mockProducts } from '@/lib/mockData';
import { useState, use, useRef } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const [colors, setColors] = useState<string[]>(product.colors || []);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleAddColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    if (!colors.includes(newColor)) {
      setColors([...colors, newColor]);
      setSelectedColor(newColor);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Edit Product</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="/admin/products" className="hover:text-brand-dark">Products</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/products" className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Cancel
          </Link>
          <button className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">General Information</h3>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                defaultValue={product.name}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={5}
                defaultValue={product.description}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Pricing & Inventory</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Base Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    defaultValue={product.price}
                    className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Discount Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SKU</label>
                <input
                  type="text"
                  defaultValue={product.id}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                <input
                  type="number"
                  defaultValue={product.stock}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>
            </div>
          </div>

          {/* Variants Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Variants</h3>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Product Colors</label>
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
                  onClick={() => colorInputRef.current?.click()}
                  className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal transition-all"
                >
                  <Plus size={18} />
                </button>
                <input
                  type="color"
                  ref={colorInputRef}
                  onChange={handleAddColor}
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
              <h3 className="font-semibold text-gray-900">Product Image</h3>
              <button className="text-sm text-brand-teal font-medium hover:underline">Add Media</button>
            </div>

            {/* Main Preview */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-center justify-center min-h-[250px] relative group">
              {selectedImage ? (
                <img src={selectedImage} alt={product.name} className="max-w-full max-h-[250px] object-contain" />
              ) : (
                <div className="text-gray-400 flex flex-col items-center">
                  <ImageIcon size={48} className="mb-2 opacity-50" />
                  <span className="text-sm">No image selected</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images && product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 p-1 relative ${selectedImage === img ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-transparent hover:border-gray-200'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
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
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Category</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Product Category</label>
              <Select defaultValue={product.category.toLowerCase()}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smartphones">Smartphones</SelectItem>
                  <SelectItem value="laptops">Laptops</SelectItem>
                  <SelectItem value="tablets">Tablets</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="wearables">Wearables</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Product Tags</label>
              <input
                type="text"
                placeholder="e.g. New Arrival, Best Seller"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
