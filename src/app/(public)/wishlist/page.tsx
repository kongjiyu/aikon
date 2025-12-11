'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

// Mock wishlist data
const mockWishlistItems = [
  {
    id: 1,
    name: 'HAVIT G92 Game Controller',
    color: 'Red',
    price: 168.90,
    originalPrice: 318.00,
    rating: 5,
    reviews: 51,
    image: '/images/product-placeholder.jpg'
  },
  {
    id: 2,
    name: 'MacBook Pro 14"',
    specs: 'Space Gray | 32GB | 1 TB',
    price: 4599.90,
    originalPrice: 5299.00,
    rating: 4,
    reviews: 88,
    image: '/images/product-placeholder.jpg'
  },
  {
    id: 3,
    name: 'Apex Fox Mouse',
    color: 'Light Green',
    price: 69.90,
    originalPrice: 83.88,
    rating: 5,
    reviews: 72,
    image: '/images/product-placeholder.jpg'
  },
  {
    id: 4,
    name: 'AirPods Max',
    color: 'Space Gray',
    price: 258.90,
    originalPrice: 329.00,
    rating: 5,
    reviews: 63,
    image: '/images/product-placeholder.jpg'
  }
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
        <p className="text-gray-600 mt-1">{wishlistItems.length} items</p>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-6 relative">
            {/* Heart Icon */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
            >
              <Heart className="w-5 h-5 text-white fill-white" />
            </button>

            <div className="flex gap-6">
              {/* Product Image */}
              <div className="w-40 h-40 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">No Image</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                
                {/* Color/Specs */}
                {item.color && (
                  <p className="text-sm text-gray-600 mb-3">{item.color}</p>
                )}
                {item.specs && (
                  <p className="text-sm text-gray-600 mb-3">{item.specs}</p>
                )}

                {/* Price */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-bold text-red-600">RM {item.price.toFixed(2)}</span>
                  <span className="text-base text-gray-400 line-through">RM {item.originalPrice.toFixed(2)}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  {renderStars(item.rating)}
                  <span className="text-sm text-gray-600">({item.reviews})</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4"></div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 px-4 py-2.5 bg-[#6B8784] hover:bg-[#5a726f] text-white font-medium rounded-lg transition-colors">
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* End of List */}
      {wishlistItems.length > 0 && (
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-400 text-sm">End Of List</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {wishlistItems.length === 0 && (
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600">Add items you love to your wishlist!</p>
        </div>
      )}
    </div>
  );
}
