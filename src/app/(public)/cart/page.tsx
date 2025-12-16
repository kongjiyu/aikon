'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Trash2, Heart, ArrowRight, Ticket } from 'lucide-react';
import { mockProducts, initialCartItems, CartItem } from '@/lib/mockData';

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [wishlist, setWishlist] = useState<string[]>([]); // Track wishlist product IDs

  const toggleCheck = (id: string) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const addToCart = (productId: string) => {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
      // Increase quantity if already in cart
      setCartItems(cartItems.map(item =>
        item.productId === productId ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      // Add new item to cart
      const newCartItem: CartItem = {
        id: `cart-${Date.now()}`,
        productId: productId,
        variant: 'Default',
        storage: '',
        qty: 1,
        checked: false
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        // Remove from wishlist
        return prev.filter(id => id !== productId);
      } else {
        // Add to wishlist
        return [...prev, productId];
      }
    });
  };

  // Calculate Totals
  const selectedItems = cartItems.filter(item => item.checked);
  // In a real app, price would come from DB. Here we find it in mockProducts
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      // Logic would typically include "checked" check for checkout, but design shows total of all items or just display
      // Design "Total Price" column is per row. "Total (0 item)" suggests only Checked items count towards bottom total.
      if (!item.checked) return acc;

      const product = mockProducts.find(p => p.id === item.productId);
      return acc + (product ? product.price * item.qty : 0);
    }, 0);
  };

  const totalAmount = calculateTotal();
  const checkedCount = cartItems.filter(i => i.checked).length;

  const handleCheckout = () => {
    if (checkedCount > 0) {
      // Save checked cart items to localStorage
      localStorage.setItem('checkoutItems', JSON.stringify(cartItems));
      router.push('/checkout');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Cart</h1>
      </div>

      {/* Cart Table */}
      <div>
        {/* Header and Items - Linked together */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 bg-[#6B8784] text-white py-4 px-6 text-sm font-medium text-center">
            <div className="col-span-5 text-left pl-2">Product</div>
            <div className="col-span-2">Unit Price</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Total Price</div>
            <div className="col-span-1"></div>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => {
              const product = mockProducts.find(p => p.id === item.productId);
              if (!product) return null;

              const lineTotal = product.price * item.qty;

              return (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-6 items-center text-center group">
                  <div className="col-span-5 text-left flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck(item.id)}
                      className="w-5 h-5 rounded border-gray-300 text-brand-teal focus:ring-brand-teal"
                    />
                    <div className="w-16 h-16 rounded-lg p-2 flex-shrink-0">
                      <img src={product.images?.[0] || product.image} alt={product.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg leading-tight">{product.name}</h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center">
                        <span className="min-w-[100px]">{item.variant}</span>
                        {item.storage && (
                          <>
                            <span className="w-px h-4 bg-gray-300 mx-2"></span>
                            <span className="min-w-[100px]">{item.storage}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex flex-col items-center">
                      <span className="text-gray-400 line-through text-xs">RM {(product.price * 1.2).toFixed(2)}</span>
                      <span className="text-gray-900 font-medium">RM {product.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <span className="font-medium text-gray-900">{item.qty}</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <span className="font-bold text-gray-900">RM {lineTotal.toFixed(2)}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <button onClick={() => removeItem(item.id)} className="text-red-500 font-medium text-sm hover:underline hover:text-red-600">Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Voucher & Total */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 mt-4">
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <Ticket size={16} />
            <span>Up to 10% off voucher available</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium border-b border-gray-100 pb-4">
            <Truck size={16} />
            <span>Up to RM5.00 off shipping for orders over RM30.00</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Ticket size={16} />
              <span>Voucher / Discount</span>
            </div>
            <div className="text-right">
              <span className="text-gray-500 text-sm mr-2">Total ({checkedCount} item):</span>
              <span className="text-2xl font-bold text-gray-900">RM {totalAmount.toFixed(0)}.00</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={checkedCount === 0}
              className={`px-8 py-3 rounded text-white font-medium transition-colors ${checkedCount > 0 ? 'bg-brand-dark hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'}`}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-brand-dark rounded-full"></div>
          <h2 className="text-lg font-bold text-gray-900">You may also like</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl group relative">
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10">-40%</span>

              {/* Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="p-1.5 bg-white rounded-full shadow transition-colors"
                >
                  <Heart
                    size={16}
                    className={wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700 hover:text-red-500'}
                  />
                </button>
              </div>

              {/* Clickable Product Area */}
              <Link href={`/products/${product.id}`} className="block cursor-pointer">
                {/* Image */}
                <div className="aspect-square bg-white rounded-lg p-4 mb-4 flex items-center justify-center relative group-hover:shadow-sm transition-shadow">
                  <img src={product.images?.[0] || product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />

                  {/* Hover Button - Moved inside image container */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product.id);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-black text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg whitespace-nowrap z-20">
                    Add To Cart
                  </button>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">{product.name}</h3>
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="text-red-500 font-bold">RM {product.price}</span>
                    <span className="text-gray-400 line-through">RM {(product.price * 1.3).toFixed(0)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 text-[10px]">
                      {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                    </div>
                    <span className="text-gray-400 text-[10px]">(88)</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

function Truck({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>
  )
}
