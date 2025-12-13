'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

// Mock product data
const mockProducts = Array.from({ length: 8 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: 'Lorem Ipsum Dolor',
  category: 'Lorem Ipsum',
  price: 9999.99,
}));

export default function MockProductListingPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grayscale">
      {/* Dynamic Title */}
      <div className="flex flex-col items-center justify-center mb-12 space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Lorem Ipsum Dolor</h1>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="flex items-start">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden lg:block pr-8">
          {/* Quick Filters */}
          <div className="space-y-4 mb-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
              </div>
              <span className="text-sm font-medium text-gray-900">Lorem Ipsum</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 border border-gray-400 rounded-sm"></div>
              <span className="text-sm font-medium text-gray-900">Dolor Sit</span>
            </label>
          </div>

          {/* Category Filter */}
          <div className="border-b border-gray-200 py-6">
            <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-4">Lorem Ipsum</h3>
            <div className="space-y-3">
              {['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
                  <span className="text-sm text-gray-700">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="border-b border-gray-200 py-6">
            <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-4">Dolor Sit</h3>
            <div className="space-y-3">
              {['Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur', 'Adipiscing', 'Elit Sed'].map((tag) => (
                <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
                  <span className="text-sm text-gray-700">{tag}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="border-b border-gray-200 py-6">
            <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-4">Consectetur</h3>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[3/2] bg-gray-200 rounded border border-gray-300 p-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="border-b border-gray-200 py-6">
            <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-4">Adipiscing Elit</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor (RM <span className="font-medium text-gray-900">0</span> - RM
              <span className="font-medium text-gray-900 mx-1">00000</span>).
            </p>
            <div className="w-full h-2 bg-gray-300 rounded-full relative">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-gray-700 rounded-full"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white"></div>
              <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Toolbar */}
          <div className="flex justify-end mb-6">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Lorem: Lorem Ipsum
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {mockProducts.map((product) => (
              <div key={product.id} className="group block cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-square bg-gray-200 overflow-hidden rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  {/* Category */}
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    LOREM IPSUM
                  </p>

                  {/* Product Name */}
                  <h3 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2 min-h-[2.5em]">
                    Lorem Ipsum Dolor Sit
                  </h3>

                  {/* Price */}
                  <p className="text-base font-bold text-gray-900 pt-1">
                    RM 0,000.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
