'use client';

import Link from 'next/link';
import { ChevronRight, Save, Upload, Plus } from 'lucide-react';
import { useState, useRef } from 'react';

export default function ProductDetailWireframePage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const colors = ['#E5E7EB', '#9CA3AF', '#6B7280', '#4B5563'];
  const thumbnails = [1, 2, 3];

  return (
    <div className="space-y-8 max-w-5xl mx-auto grayscale">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="#" className="hover:text-gray-700">Lorem</Link>
            <ChevronRight size={14} />
            <span>Lorem Ipsum Dolor</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Lorem
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <Save size={16} /> Lorem Ipsum
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* General Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Ipsum Dolor</h3>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Lorem Ipsum <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value="Lorem Ipsum Dolor Sit Amet Consectetur"
                disabled
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Lorem Ipsum <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                disabled
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Ipsum &amp; Dolor</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">RM</span>
                  <input
                    type="text"
                    value="0,000.00"
                    disabled
                    className="w-full pl-12 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Lorem Ipsum</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">RM</span>
                  <input
                    type="text"
                    value="0,000.00"
                    disabled
                    className="w-full pl-12 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Lorem</label>
                <input
                  type="text"
                  value="LOREM-000-XXX"
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value="000"
                  disabled
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Variants Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Ipsum</h3>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Lorem Ipsum Dolor</label>
              <div className="flex flex-wrap gap-4">
                {colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === i
                        ? 'border-gray-800 ring-2 ring-gray-400/20 scale-110'
                        : 'border-gray-200 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <button
                  onClick={() => colorInputRef.current?.click()}
                  className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-600 transition-all"
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
          {/* Product Image */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900">Lorem Ipsum</h3>
              <button className="text-sm text-gray-700 font-medium hover:underline">Lorem Ipsum</button>
            </div>

            {/* Main Preview */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-center justify-center min-h-[250px] relative group">
              <div className="text-gray-400 flex flex-col items-center">
                <svg className="w-20 h-20 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 p-1 relative flex items-center justify-center ${
                    selectedImageIndex === i
                      ? 'border-gray-700 ring-2 ring-gray-400/20'
                      : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              ))}

              {/* Upload Placeholder */}
              <button className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-600 hover:bg-gray-50/50 transition-all">
                <Upload size={20} />
                <span className="text-[10px] mt-1 font-medium">Lorem</span>
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Lorem Ipsum</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Lorem Ipsum Dolor <span className="text-red-500">*</span>
              </label>
              <div className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                Lorem Ipsum
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Lorem Ipsum Dolor</label>
              <input
                type="text"
                value="Lorem Ipsum, Dolor Sit"
                disabled
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
