"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, MapPin, Ticket, Heart, LogOut, RotateCw } from 'lucide-react';

// Mock Cart Data
const fakeCartItems = [
  {
    id: 1,
    name: "Smartphone X Pro",
    price: 3999,
    image: "/images/product_01.png", // Fallback if regular placeholder needed: https://placehold.co/100
    quantity: 1
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 499,
    image: "/images/product_06.png",
    quantity: 2
  }
];

// Mega Menu Data Types
interface MegaMenuItem {
  title: string;
  subcategories: string[];
  trendyTitle: string;
  trendyItem: { name: string; url: string };
  secondaryTrendyItem?: { name: string; url: string };
  bannerImage: string;
}

const MEGA_MENU_DATA: Record<string, MegaMenuItem> = {
  'Laptop': {
    title: 'Laptop',
    subcategories: ['Gaming Laptop', 'Home Laptop', 'Business Laptop', 'Apple Mac'],
    trendyTitle: 'Trendy Laptop',
    trendyItem: { name: 'ASUS TUF GAMING A15', url: '/products/asus-tuf' },
    bannerImage: '/images/laptopPoster.png',
  },
  'Personal Computer': {
    title: 'PCs',
    subcategories: ['All-in-One PCs', 'Tower PCs', 'Gaming Tower PCs', 'Mini PCs'],
    trendyTitle: 'Trendy PCs',
    trendyItem: { name: 'ASUS V400 AIO (V470VA)', url: '/products/asus-v400' },
    secondaryTrendyItem: { name: 'ASUS A3402', url: '/products/asus-a3402' },
    bannerImage: '/images/PCPoster.png',
  },
  'Phone': {
    title: 'Phone',
    subcategories: ['Smartphones', 'Gaming Phones', 'Feature Phones'],
    trendyTitle: 'Trendy Phones',
    trendyItem: { name: 'Smartphone X Pro', url: '/products/phone-x-pro' },
    bannerImage: '/images/phonePoster.png',
  },
  'Tablets': {
    title: 'Tablets',
    subcategories: ['iPad', 'Android Tablets', 'Graphics Tablets'],
    trendyTitle: 'Trendy Tablets',
    trendyItem: { name: 'Pad Air 5', url: '/products/pad-air' },
    bannerImage: '/images/tabletsPoster.png',
  },
  'Accessories': {
    title: 'Accessories',
    subcategories: ['Mouse', 'Keyboard', 'Audio', 'Cables'],
    trendyTitle: 'Trendy Accessories',
    trendyItem: { name: 'Mechanical Keyboard', url: '/products/keyboard' },
    bannerImage: '/images/accessoriesPoster.png',
  }
};

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Laptop');

  // Close MegaMenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMegaMenuOpen && !target.closest('.mega-menu-container') && !target.closest('.mega-menu-trigger')) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  const activeContent = MEGA_MENU_DATA[activeCategory as keyof typeof MEGA_MENU_DATA] || MEGA_MENU_DATA['Laptop'];

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
                <SelectTrigger className="w-[130px] h-8 border-none shadow-none focus:ring-0 bg-transparent">
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
              {/* My Account Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-700 hover:text-gray-900 focus:outline-none group">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>My Account</span>
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-900 transition-transform group-data-[state=open]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile" className="flex items-center w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/address-book" className="flex items-center w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>Address Book</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/vouchers" className="flex items-center w-full">
                      <Ticket className="mr-2 h-4 w-4" />
                      <span>Voucher</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/wishlist" className="flex items-center w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Wishlist</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 focus:text-red-600">
                    <Link href="/login" className="flex items-center w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* My Cart Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-700 hover:text-gray-900 focus:outline-none group">
                  <div className="relative">
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {/* Badge */}
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
                      3
                    </span>
                  </div>
                  <span>My Cart</span>
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-900 transition-transform group-data-[state=open]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-0">
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-900">My Cart (3)</h4>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {fakeCartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs text-gray-400">img</span>
                          {/* Using a placeholder text/icon instead of Image component for now if image paths are invalid, but user said 'fake product' so simple boxes or dummy images work */}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h5>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-sm font-bold text-[#748E8B] mt-1">RM {item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-600">Total</span>
                      <span className="text-lg font-bold text-gray-900">RM 4,997</span>
                    </div>
                    <Link
                      href="/cart"
                      className="block w-full text-center py-2.5 bg-[#2B3433] text-white rounded-lg hover:bg-black transition-colors font-medium text-sm"
                    >
                      View Cart
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Logo and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

            {/* All Categories Trigger */}
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm focus:outline-none mega-menu-trigger"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              <span>All Categories</span>
              <svg
                className={`w-3 h-3 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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

        {/* Full Width Mega Menu */}
        {isMegaMenuOpen && (
          <div className="absolute top-full left-0 w-full z-50 mega-menu-container">
            <div className="bg-white border border-gray-100 shadow-xl rounded-b-2xl overflow-hidden mt-1">
              <div className="grid grid-cols-12 min-h-[450px]">
                {/* Column 1: Categories Sidebar */}
                <div className="col-span-3 border-r border-gray-100 py-6">
                  <h3 className="px-6 text-lg font-bold text-[#0D3F4A] mb-4">Categories</h3>
                  <ul className="space-y-1">
                    {/* Render Categories Dynamically */}
                    {Object.keys(MEGA_MENU_DATA).map((catName) => {
                      const isActive = activeCategory === catName;
                      return (
                        <li key={catName}>
                          <button
                            className={`w-full text-left px-6 py-3 font-medium text-sm transition-colors flex items-center justify-between group
                              ${isActive
                                ? 'bg-gray-100/80 text-[#0D3F4A] font-bold border-l-4 border-[#0D3F4A]'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                            onMouseEnter={() => setActiveCategory(catName)}
                          >
                            {catName}
                            <svg className={`w-4 h-4 text-gray-400 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 2: Subcategories (Dynamic) */}
                <div className="col-span-3 py-6 px-6 border-r border-gray-100">
                  <h3 className="text-lg font-bold text-[#0D3F4A] mb-6">{activeContent.title}</h3>
                  <div className="space-y-6">
                    <ul className="space-y-4">
                      {activeContent.subcategories.map((sub: string) => (
                        <li key={sub}>
                          <Link href={`/products?category=${encodeURIComponent(sub)}`} className="flex items-center justify-between text-sm text-gray-600 hover:text-[#0D3F4A] font-medium group">
                            {sub}
                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-gray-100">
                      <Link href="/products" className="flex items-center gap-2 text-sm font-bold text-[#0D3F4A] hover:underline">
                        <RotateCw className="w-4 h-4" />
                        Explore All
                      </Link>
                    </div>

                    <div className="pt-6">
                      <h4 className="text-lg font-bold text-[#0D3F4A] mb-4">{activeContent.trendyTitle}</h4>

                      <div className="space-y-4">
                        <Link href={activeContent.trendyItem.url} className="flex items-center gap-3 group">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0D3F4A] group-hover:scale-110 transition-transform flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#0D3F4A] leading-tight">{activeContent.trendyItem.name}</span>
                        </Link>

                        {/* Secondary Trendy Item (e.g. for PCs) */}
                        {activeContent.secondaryTrendyItem && (
                          <Link href={activeContent.secondaryTrendyItem.url} className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0D3F4A] group-hover:scale-110 transition-transform flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0D3F4A] leading-tight">{activeContent.secondaryTrendyItem.name}</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Banner Image Link */}
                <div className="col-span-6 relative bg-gray-50 group cursor-pointer hover:opacity-95 transition-opacity">
                  <Link href="/products" className="absolute inset-0 z-20"></Link>
                  <Image
                    src={activeContent.bannerImage}
                    alt={activeContent.title}
                    fill
                    className="object-cover object-center z-0"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
