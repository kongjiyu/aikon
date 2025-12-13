'use client';

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

// Mock search results
const mockResults = Array.from({ length: 12 }, (_, i) => ({
  id: `result-${i + 1}`,
  name: 'Lorem Ipsum Dolor',
  category: 'Lorem Ipsum',
  price: 9999.99,
}));

export default function MockSearchPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 grayscale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Lorem Ipsum</h1>
          
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Lorem ipsum dolor sit amet..."
                className="w-full px-4 py-3 pl-12 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white"
                defaultValue="lorem ipsum"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
              Button Text
            </button>
          </div>
        </div>

        {/* Results Info & Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700">
                <span className="font-bold text-gray-900">00</span> lorem ipsum dolor sit amet <span className="font-semibold text-gray-900">"lorem ipsum"</span>
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4" />
              Lorem Ipsum
            </button>
          </div>
        </div>

        {/* Categories Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium">
            Lorem Ipsum
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
            Dolor Sit
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
            Amet
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
            Consectetur
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
            Adipiscing
          </button>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 hover:shadow-md transition-shadow cursor-pointer group">
              {/* Image */}
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Category */}
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                LOREM IPSUM
              </p>

              {/* Product Name */}
              <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2.5em]">
                Lorem Ipsum Dolor Sit Amet
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-gray-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-sm">★</span>
                  ))}
                </div>
                <span className="text-xs text-gray-600">(00)</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">
                  RM 0,000
                </p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded">
                  Button Text
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            Lorem
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            Dolor
          </button>
        </div>
      </div>
    </div>
  );
}
