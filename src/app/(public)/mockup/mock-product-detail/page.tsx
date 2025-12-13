'use client';

import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, Minus, Plus } from 'lucide-react';

export default function MockProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);

  const colors = ['#E5E7EB', '#9CA3AF', '#6B7280', '#4B5563'];
  const storageOptions = ['000 Lorem', '000 Dolor', '000 Sit', '0 Amet'];
  const gridImages = [1, 2, 3, 4];
  const relatedProducts = [1, 2, 3, 4];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grayscale">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Visual Gallery */}
        <div className="flex flex-col items-center">
          {/* Main Large Image */}
          <div className="relative w-full aspect-[4/5] max-w-lg mb-6 bg-gray-200 rounded-lg flex items-center justify-center group">
            <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 w-full max-w-lg">
            {gridImages.map((img) => (
              <div
                key={img}
                className="relative aspect-[3/4] w-full bg-gray-200 rounded-lg flex items-center justify-center group cursor-pointer"
              >
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col pt-8">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-600 mb-4 flex items-center gap-2">
            <span>Lorem</span>
            <span>/</span>
            <span className="font-medium text-gray-900">Lorem Ipsum</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lorem Ipsum Dolor Sit Amet</h1>

          {/* Rating & reviews */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-1 font-bold text-gray-900">0.0</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">000 Lorem</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-800 font-medium">Lorem Ipsum</span>
          </div>

          <div className="text-3xl font-bold text-gray-800 mb-8">
            RM 00,000
            <span className="text-xl text-gray-500 line-through ml-4 font-normal">
              RM 00,000
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Color Selection */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-900 mb-3">
              Color: <span className="font-normal text-gray-700">Lorem Ipsum</span>
            </label>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(index)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedColor === index ? 'border-gray-900 ring-2 ring-offset-2 ring-gray-900' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Storage Selection */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-900 mb-3">
              Storage: <span className="font-normal text-gray-700">{storageOptions[selectedStorage]}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {storageOptions.map((storage, index) => (
                <button
                  key={storage}
                  onClick={() => setSelectedStorage(index)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedStorage === index
                      ? 'border-gray-900 bg-gray-200 text-gray-900'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center border border-gray-400 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-l-lg"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-r-lg"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="flex-1 bg-gray-800 text-white font-bold h-12 rounded-lg hover:bg-gray-700 transition-colors uppercase tracking-wide">
              Add to Cart
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-800">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Lorem Ipsum</h4>
                <p className="text-xs text-gray-600">Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Dolor Sit Amet</h4>
                <p className="text-xs text-gray-600">Lorem ipsum dolor</p>
              </div>
            </div>
          </div>

          {/* Specs Summary */}
          <div className="mt-12 bg-gray-100 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">Key Specifications</h3>
            <div className="space-y-3 text-sm">
              {[1, 2, 3, 4, 5].map((spec) => (
                <div key={spec} className="flex justify-between border-b border-gray-300 pb-2 last:border-0 last:pb-0">
                  <span className="text-gray-600">Lorem Ipsum</span>
                  <span className="font-medium text-gray-900">Dolor Sit Amet</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="mt-20 pt-10 border-t border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Lorem Ipsum Dolor</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div key={p} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase">LOREM</p>
              <h3 className="text-sm font-bold text-gray-900 line-clamp-2">Lorem Ipsum Dolor</h3>
              <p className="text-base font-bold text-gray-900">RM 0,000.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
