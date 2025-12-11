'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar - Language and Account/Cart */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/images/language.svg" 
                  alt="Language" 
                  width={20} 
                  height={20}
                  className="object-contain"
                />
              </button>
              <Select 
                value={selectedLanguage} 
                onValueChange={setSelectedLanguage}
                open={isLanguageOpen}
                onOpenChange={setIsLanguageOpen}
              >
                <SelectTrigger className="w-[130px] h-8 border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Bahasa Melayu">Bahasa Melayu</SelectItem>
                  <SelectItem value="Mandarin">Mandarin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* My Account & My Cart */}
            <div className="flex items-center gap-6">
              <Link href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>My Account</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>My Cart</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Logo and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 gap-2">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/headerPic.png" 
              alt="AIKON - Connect Smart" 
              width={120} 
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Search Bar - Extended to ~2/3 of screen */}
          <div className="flex-1 max-w-5xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for..."
                className="w-full pl-10 pr-20 py-3 bg-gray-50 border border-gray-300 rounded-[38px] text-sm focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {/* Voice Search Icon */}
              <button className="absolute right-12 top-3.5 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </button>
              {/* Image Search Icon */}
              <button className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <div className="flex items-center gap-8">
            <Link href="/compare" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              Compare
            </Link>
            
            <Link href="/recommendations" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
              <span>AI Assistant</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link href="/products" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
              <span>Products</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link href="/products" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
              <span>All Categories</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Track Order */}
          <Link href="/orders" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
            <Image 
              src="/images/trackOrder.png" 
              alt="Track Order" 
              width={16} 
              height={16}
            />
            <span>Track Order</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
