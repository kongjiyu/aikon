'use client';

import React, { Suspense } from 'react';
import ProductFilterSidebar from '@/components/public/ProductFilterSidebar';
import ProductListingCard from '@/components/public/ProductListingCard';
import { mockProducts } from '@/lib/mockData';
import { ChevronDown } from 'lucide-react';

import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const subcategoryParam = searchParams.get('subcategory');
  const searchQuery = searchParams.get('q');

  // Filter Logic
  const filteredProducts = mockProducts.filter((product) => {
    // 1. Category Filter
    if (categoryParam && product.category.toLowerCase() !== categoryParam.toLowerCase()) {
      return false;
    }

    // 2. Subcategory (Tag) Filter
    if (subcategoryParam) {
      if (!product.tags || !product.tags.some(tag => tag.toLowerCase() === subcategoryParam.toLowerCase())) {
        return false;
      }
    }

    // 3. Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) return false;
    }

    return true;
  });

  const pageTitle = categoryParam ? `${categoryParam} ${subcategoryParam ? `- ${subcategoryParam}` : ''}` : 'All Products';

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dynamic Title */}
      <div className="flex flex-col items-center justify-center mb-12 space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
        <p className="text-gray-500 text-sm">Find your favorite technology.</p>
      </div>

      <div className="flex items-start">
        {/* Sidebar (Desktop) */}
        {/* We can pass initial state here later if needed */}
        <ProductFilterSidebar activeCategory={categoryParam} activeSubcategory={subcategoryParam} />

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Toolbar */}
          <div className="flex justify-end mb-6">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
              Sort By: Recommend
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductListingCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500 space-y-4">
                <p>No products found matching your criteria.</p>
                <a href="/products" className="text-brand-teal font-semibold hover:underline">
                  View All Products
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
