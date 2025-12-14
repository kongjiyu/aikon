'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MockHomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [1, 2, 3, 4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const trendyProducts1 = [
    { title: 'XIAOMI 15T PRO', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod', price: 2999, rating: 4.9, sales: 155, colors: ['#44403C', '#52525B', '#000000'] },
    { title: 'iPhone 17 Pro Max', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod', price: 6999, rating: 4.9, sales: 355, colors: ['#D1D5DB', '#FB923C', '#1E293B'] },
  ];

  const trendyProducts2 = [
    { title: 'ASUS TUF Gaming A15', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod', price: 3499, rating: 4.9, sales: 455, colors: ['#1F2937'] },
    { title: 'Lenovo IdeaTab TB-336FU', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod', price: 829, rating: 4.9, sales: 255, colors: ['#A3A3A3'] },
  ];

  const featuredProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: 'Lorem Ipsum Product',
    price: 2999.00,
    originalPrice: 3999.00,
    rating: 4.9,
  }));

  const vouchers = Array.from({ length: 9 }, (_, i) => ({
    title: i === 3 || i === 7 ? 'RM 10 Discount' : 'Lorem Discount',
    subtitle: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR',
    isActive: i === 3 || i === 7,
  }));

  const categories = [
    { name: 'LAPTOP', link: '/products?category=laptop' },
    { name: 'PERSONAL COMPUTER', link: '/products?category=pc' },
    { name: 'TABLET', link: '/products?category=tablet' },
    { name: 'PHONE', link: '/products?category=phone' },
    { name: 'ACCESSORY', link: '/products?category=accessories' },
  ];

  return (
    <div className="pb-12 grayscale">
      {/* Hero Carousel */}
      <section className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-2xl">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
            className="absolute left-4 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentHeroIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trendy Products (Gadgets) - Left Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-20 items-center h-[850px]">
          <div className="flex-1 w-full relative h-full overflow-hidden group">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <svg className="w-48 h-48 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="flex-1 w-full space-y-8 py-10">
            <div className="text-center md:text-left space-y-3">
              <p className="text-neutral-500 text-xl font-normal font-sans">Trendy Products</p>
              <h2 className="text-4xl font-bold text-slate-800 leading-[50px]">Top-rated gadgets</h2>
              <p className="text-neutral-500 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trendyProducts1.map((product, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-4 transition-all hover:shadow-lg border border-transparent hover:border-gray-100 flex flex-col h-full">
                  <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-50">
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 uppercase tracking-wide">
                      Sale
                    </span>
                    <div className="absolute top-2 right-2 bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <span>★</span>
                      <span>{product.rating}</span>
                    </div>
                    <div className="relative w-full h-full p-4 bg-gray-200 flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-gray-700 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>

                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span>{product.sales} Sales</span>
                    </div>

                    <div className="mt-auto pt-2">
                      <span className="font-bold text-gray-700 text-sm md:text-base">RM{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>

                    {product.colors.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {product.colors.map((color, i) => (
                          <div key={i} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trendy Products (Students) - Right Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-20 items-center h-[850px]">
          <div className="flex-1 w-full relative h-full overflow-hidden group">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <svg className="w-48 h-48 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="flex-1 w-full space-y-8 py-10">
            <div className="text-center md:text-left space-y-3">
              <p className="text-neutral-500 text-xl font-normal font-sans">Trendy Products</p>
              <h2 className="text-4xl font-bold text-slate-800 leading-[50px]">Best for Students</h2>
              <p className="text-neutral-500 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trendyProducts2.map((product, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-4 transition-all hover:shadow-lg border border-transparent hover:border-gray-100 flex flex-col h-full">
                  <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-50">
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 uppercase tracking-wide">
                      Sale
                    </span>
                    <div className="absolute top-2 right-2 bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <span>★</span>
                      <span>{product.rating}</span>
                    </div>
                    <div className="relative w-full h-full p-4 bg-gray-200 flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-gray-700 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>

                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span>{product.sales} Sales</span>
                    </div>

                    <div className="mt-auto pt-2">
                      <span className="font-bold text-gray-700 text-sm md:text-base">RM{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>

                    {product.colors.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {product.colors.map((color, i) => (
                          <div key={i} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[850px] relative z-10">
          {/* Laptop */}
          <div className="col-span-1 relative overflow-hidden group h-[400px] md:h-auto bg-white">
            <div className="w-full h-full bg-gray-400 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute left-0 bottom-0 bg-gray-700/90 w-[300px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-colors">
              <h3 className="text-white text-3xl font-bold mb-4 font-sans leading-tight">Power to go</h3>
              <Link href="/products?category=laptop" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE LAPTOP</Link>
            </div>
          </div>

          {/* Stack: Accessories + Tablet */}
          <div className="col-span-1 flex flex-col gap-4 h-[600px] md:h-auto">
            <div className="flex-1 relative overflow-hidden group bg-teal-950">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute left-0 bottom-0 bg-gray-700/90 w-[300px] h-[160px] p-6 flex flex-col items-center justify-center text-center transition-colors">
                <h3 className="text-white text-xl font-bold mb-4 font-sans">Style, charge, protect</h3>
                <Link href="/products?category=accessories" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE ACCESSORIES</Link>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden group">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute left-0 bottom-0 bg-gray-700/90 w-[300px] h-[160px] p-6 flex flex-col items-center justify-center text-center transition-colors">
                <h3 className="text-white text-2xl font-bold mb-4 font-sans">Big screen, light feel</h3>
                <Link href="/products?category=tablet" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE TABLET</Link>
              </div>
            </div>
          </div>

          {/* PC */}
          <div className="col-span-1 relative overflow-hidden group h-[400px] md:h-auto">
            <div className="w-full h-full bg-gray-400 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute left-0 bottom-0 bg-gray-700/90 w-[300px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-colors">
              <h3 className="text-white text-3xl font-bold mb-4 font-sans leading-tight">Power at <br />your desk</h3>
              <Link href="/products?category=pc" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE PERSONAL COMPUTER</Link>
            </div>
          </div>

          {/* Phone */}
          <div className="col-span-1 relative overflow-hidden group h-[400px] md:h-auto">
            <div className="w-full h-full bg-gray-400 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute left-0 bottom-0 bg-gray-700/90 w-[300px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-colors">
              <h3 className="text-white text-3xl font-bold mb-4 font-sans leading-tight">Life in <br />your hand.</h3>
              <Link href="/products?category=phone" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE PHONE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-sans">Featured Products</h2>
          <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 uppercase tracking-wide">
                  Sale
                </span>
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase">LOREM</p>
              <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-base font-bold text-gray-700">RM {product.price.toFixed(2)}</p>
                <p className="text-xs text-gray-400 line-through">RM {product.originalPrice.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <span>★</span>
                <span>{product.rating}</span>
                <span className="text-gray-400">(00)</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Banner */}
      <section className="relative h-[400px] my-32 w-full max-w-[1920px] mx-auto overflow-visible z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10 bg-gray-500"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans tracking-tight">Don't miss the next sale!</h2>
          <p className="text-white text-xl font-normal mb-8 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p>
          <div className="flex w-full max-w-md bg-gray-700 rounded-[5px] overflow-hidden">
            <button className="w-full py-4 text-center text-white text-3xl font-normal font-sans tracking-tight hover:bg-gray-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Exclusive Vouchers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-6xl font-bold text-gray-900 mb-12 text-center tracking-tight font-sans">Exclusive Vouchers For You</h2>
        
        <div className="relative group">
          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-300 p-3 rounded-full hover:bg-gray-100 text-gray-800 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-300 p-3 rounded-full hover:bg-gray-100 text-gray-800 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-2">
            {vouchers.map((voucher, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[calc(33.333%-16px)] snap-start flex-shrink-0">
                <div className={`relative h-[280px] rounded-lg overflow-hidden shadow-md ${voucher.isActive ? 'bg-gray-700' : 'bg-gray-500'}`}>
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{voucher.title}</h3>
                    <p className="text-xs uppercase tracking-wide mb-4">{voucher.subtitle}</p>
                    <div className="text-xs leading-relaxed whitespace-pre-line">
                      Lorem ipsum dolor sit amet{'\n'}Consectetur adipiscing elit{'\n'}Sed do eiusmod tempor
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Category Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((item) => (
            <Link key={item.name} href={item.link} className="relative aspect-[3/4] overflow-hidden group block">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-x-4 bottom-8 flex justify-center">
                <div className="bg-white px-6 py-3 flex items-center gap-2 shadow-sm group-hover:bg-gray-100 transition-colors w-full justify-center">
                  <span className="text-xs font-bold text-gray-900 tracking-wider uppercase whitespace-nowrap">{item.name}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
