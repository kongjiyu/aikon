'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import {
  Star,
  Heart,
  Share2,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
  ShoppingCart
} from 'lucide-react';
import { mockProducts } from '@/lib/mockData';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-dark">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-brand-dark">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery Section */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100">
            <img src={selectedImage} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.images?.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`aspect-square rounded-lg border-2 bg-gray-50 p-2 ${selectedImage === img ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-transparent hover:border-gray-200'
                  }`}
              >
                <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" className="text-gray-300" />
              </div>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className="w-px h-4 bg-gray-300"></span>
              <span className="text-green-600 font-medium">In Stock</span>
            </div>
          </div>

          <div className="flex items-end gap-3 border-b border-gray-100 pb-8">
            <span className="text-3xl font-bold text-gray-900">RM {product.price.toFixed(2)}</span>
            <span className="text-gray-400 line-through mb-1">RM {(product.price * 1.2).toFixed(2)}</span>
            <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded mb-1">-20%</span>
          </div>

          <div className="space-y-6">
            {/* Colors */}
            <div className="space-y-3">
              <span className="text-sm font-medium text-gray-900">Colours:</span>
              <div className="flex gap-3">
                {product.colors?.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-brand-dark ring-2 ring-brand-teal/20 scale-110' : 'border-gray-200 hover:scale-105'
                      }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size / Storage (Mock) */}
            <div className="space-y-3">
              <span className="text-sm font-medium text-gray-900">Storage:</span>
              <div className="flex gap-3">
                {['128GB', '256GB', '512GB', '1TB'].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-brand-dark hover:text-brand-dark transition-all focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center border border-gray-300 rounded-lg h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-gray-500 hover:text-brand-dark"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-gray-500 hover:text-brand-dark"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button className="flex-1 bg-brand-dark text-white font-medium rounded-lg h-12 hover:bg-gray-800 transition-colors">
                Buy Now
              </button>
              <button className="px-6 border border-gray-300 rounded-lg h-12 hover:bg-gray-50 transition-colors">
                <Heart size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="border border-gray-200 rounded-xl p-4 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Free Delivery</h4>
                <p className="text-xs text-gray-500 underline mt-0.5 cursor-pointer">Enter your Postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border-t border-gray-100 pt-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                <RotateCcw size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Return Delivery</h4>
                <p className="text-xs text-gray-500 mt-0.5">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items (Reusing format from Cart for consistency) */}
      <div className="space-y-6 pt-12 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-brand-dark rounded-full"></div>
          <h2 className="text-lg font-bold text-gray-900">Related Items</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group relative">
              <span className="absolute top-4 left-4 bg-gray-500 text-white text-[10px] font-bold px-2 py-1 rounded">-30%</span>
              <div className="aspect-square bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center">
                <img src={product.images?.[0] || product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">{product.name}</h3>
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="text-red-500 font-bold">RM {product.price}</span>
                  <span className="text-gray-400 line-through">RM {(product.price * 1.3).toFixed(0)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
