"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
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
import { User, MapPin, Ticket, Heart, LogOut, RotateCw, Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Mock Cart Data
const fakeCartItems = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    price: 6999,
    image: "/images/iphone17promax/9265d76e-7acd-4d42-becf-4537a5be56f9.webp",
    quantity: 1
  },
  {
    id: 2,
    name: "Xiaomi 15T Pro",
    price: 2999,
    image: "/images/homePage/xiaomi15tpro.webp",
    quantity: 1
  }
];

// Mega Menu Data Types
interface MegaMenuItem {
  title: string;
  subcategories: {
    name: string;
    items: string[];
    bannerImage?: string; // Optional override for subcategory specific banner
  }[];
  trendyTitle?: string;
  trendyItem?: { name: string; url: string };
  secondaryTrendyItem?: { name: string; url: string };
  bannerImage: string;
}

const MEGA_MENU_DATA: Record<string, MegaMenuItem> = {
  'Laptop': {
    title: 'Laptop',
    subcategories: [
      {
        name: 'Gaming Laptop',
        items: ['ROG - Republic of Gamers', 'TUF Gaming', 'ASUS Gaming'],
        bannerImage: '/images/promotionSalesPoster.png'
      },
      {
        name: 'Home Laptop',
        items: ['Copilot + PC devices', 'Tablet & 2 in 1 laptop', 'Thin and light', 'High Performance', 'Everyday use', 'OLED category'],
        bannerImage: '/images/promotionSalesPoster.png'
      },
      {
        name: 'Business Laptop',
        items: ['ExpertBook', 'ProArt'],
        bannerImage: '/images/promotionSalesPoster.png'
      },
      {
        name: 'Apple Mac',
        items: ['MacBook Air', 'MacBook Pro'],
        bannerImage: '/images/promotionSalesPoster.png'
      }
    ],
    trendyTitle: 'Trendy Laptop',
    trendyItem: { name: 'ASUS TUF GAMING A15', url: '/products/asus-tuf-gaming-a15' },
    bannerImage: '/images/laptopPoster.png',
  },
  'Personal Computer': {
    title: 'PCs',
    subcategories: [
      {
        name: 'All-in-One PCs',
        items: ['ASUS AiO', 'Apple iMac'],
        bannerImage: '/images/promotionSalesPoster.png'
      },
      {
        name: 'Tower PCs',
        items: ['ROG Strix', 'Dell XPS'],
        bannerImage: '/images/promotionSalesPoster.png'
      },
      {
        name: 'Gaming Tower PCs',
        items: ['Alienware', 'Omen'],
        bannerImage: '/images/promotionSalesPoster.png'
      },
      {
        name: 'Mini PCs',
        items: ['Mac Mini', 'Intel NUC'],
        bannerImage: '/images/promotionSalesPoster.png'
      }
    ],
    trendyTitle: 'Trendy PCs',
    trendyItem: { name: 'ASUS V400 AiO (V470VA)', url: '/products/asus-v400-aio' },
    secondaryTrendyItem: { name: 'ASUS A3402', url: '/products/asus-a3402' },
    bannerImage: '/images/PCPoster.png',
  },
  'Phone': {
    title: 'Phone',
    subcategories: [
      { name: 'Oppo', items: ['Find X Series', 'Reno Series', 'A Series'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Apple', items: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Huawei', items: ['Pura 70', 'Mate 60', 'Nova 12'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Samsung', items: ['Galaxy S24', 'Galaxy Z Fold', 'Galaxy A'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Xiaomi', items: ['Xiaomi 14', 'Redmi Note 13', 'Poco F6'], bannerImage: '/images/promotionSalesPoster.png' }
    ],
    trendyTitle: 'Trendy Phone',
    trendyItem: { name: 'Apple iPhone 17 Pro Max', url: '/products/iphone-17-pro-max' },
    secondaryTrendyItem: { name: 'XIAOMI 15T PRO', url: '/products/xiaomi-15t-pro' },
    bannerImage: '/images/phonePoster.png',
  },
  'Tablets': {
    title: 'Tablets',
    subcategories: [
      { name: 'Apple', items: ['iPad Pro', 'iPad Air'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Samsung', items: ['Galaxy Tab S9'], bannerImage: '/images/promotionSalesPoster.png' }
    ],
    trendyTitle: 'Trendy Tablets',
    trendyItem: { name: 'Apple iPad 9th generation', url: '/products/ipad-9th-gen' },
    secondaryTrendyItem: { name: 'Lenovo IdeaTab TB-336FU', url: '/products/lenovo-ideatab' },
    bannerImage: '/images/tabletsPoster.png',
  },
  'Accessories': {
    title: 'Accessories',
    subcategories: [
      { name: 'Mice and Mouse Pads', items: ['Gaming Mice', 'Ergonomic Mice'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Headsets and Audio', items: ['Wireless Headsets', 'Earbuds'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Watch', items: ['Sport Watch', 'Smart Watch', 'Digital Watch', 'GPS Watch', 'Watch Strap'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Streaming Kit', items: ['Webcams', 'Microphones'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Adapters and Charges', items: ['Power Banks', 'Cables'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Apparel Bags and Gear', items: ['Backpacks', 'Shirts'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Cases and Protection', items: ['Phone Cases', 'Laptop Sleeves'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Docks Dongles and Cable', items: ['USB Hubs', 'HDMI Cables'], bannerImage: '/images/promotionSalesPoster.png' },
      { name: 'Keyboards', items: ['Wired Keyboards', 'Mechanical Keyboards', 'Membrane Keyboards'], bannerImage: '/images/promotionSalesPoster.png' }
    ],
    bannerImage: '/images/accessoriesPoster.png',
  }
};


export default function Navbar() {
  const router = useRouter(); // Use App Router hook
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategoryName, setActiveSubCategoryName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (term?: string) => {
    const q = term || searchQuery;
    if (q.trim()) {
      router.push(`/products?q=${encodeURIComponent(q)}`);
      setIsMegaMenuOpen(false);
    }
  };

  // Hidden file input ref
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleVoiceSearch = () => {
    setSearchQuery("Listening... 🎤");
    setTimeout(() => {
      const demoTerm = "iPhone 17";
      setSearchQuery(demoTerm);
      handleSearch(demoTerm);
    }, 1500);
  };

  const handleImageSearch = () => {
    // Trigger hidden file input click
    fileInputRef.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSearchQuery("Analyzing image... 🖼️");

      // Simulate analysis delay
      setTimeout(() => {
        const demoTerm = "iPhone 17";
        setSearchQuery(demoTerm);
        handleSearch(demoTerm);

        // Reset file input so same file can be selected again if needed
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 1500);
    }
  };

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

  // Reset states when menu closes/opens
  useEffect(() => {
    if (!isMegaMenuOpen) {
      setActiveCategory(null);
      setActiveSubCategoryName(null);
    }
  }, [isMegaMenuOpen]);

  // Reset subcategory when category changes
  useEffect(() => {
    setActiveSubCategoryName(null);
  }, [activeCategory]);

  const activeContent = activeCategory ? MEGA_MENU_DATA[activeCategory] : null;
  const activeSubData = (activeContent && activeSubCategoryName)
    ? activeContent.subcategories.find(sub => sub.name === activeSubCategoryName)
    : null;

  return (
    <>
      {/* Backdrop Overlay */}
      {isMegaMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" aria-hidden="true" />
      )}

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* ... (Top Bar & Main Header hidden for brevity in replacement, focusing on return structure if possible, but tool requires contiguous block. I'll include surrounding context if replacing full component or large chunk) */}
        {/* Actually, to be safe with tool limits and context, I will replace from 'export default function Navbar' down to the end of the functional component to ensure all state and JSX is updated correctly. */}

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
                        2
                      </span>
                    </div>
                    <span>My Cart</span>
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-900 transition-transform group-data-[state=open]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 p-0">
                    <div className="p-4 border-b border-gray-100">
                      <h4 className="font-semibold text-gray-900">My Cart (2)</h4>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {fakeCartItems.map((item) => (
                        <div key={item.id} className="flex gap-3 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                          <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <button
                  onClick={() => handleSearch()}
                  className="absolute left-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                {/* Voice Search Icon */}
                <button
                  onClick={handleVoiceSearch}
                  className="absolute right-12 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </button>
                {/* Image Search Icon */}
                <button
                  onClick={handleImageSearch}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center gap-8">
              <Link href="/compare" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Compare
              </Link>

              <Link href="/recommendations" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                AI Assistant
              </Link>

              <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Products
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
              {/* Added a margin top to separate from nav line if needed, but 'mt-1' is there. Border rounded bottom. */}
              <div className="bg-white border-t border-gray-100 shadow-xl rounded-b-2xl overflow-hidden mt-0">
                <div className="grid grid-cols-12 min-h-[550px]">
                  {/* Column 1: Main Categories (e.g. Laptop, PC) */}
                  <div className="col-span-2 border-r border-gray-100 py-6">
                    <h3 className="px-6 text-lg font-bold text-[#0D3F4A] mb-4">Categories</h3>
                    <ul className="space-y-1">
                      {Object.keys(MEGA_MENU_DATA).map((catName) => {
                        const isActive = activeCategory === catName;
                        return (
                          <li key={catName}>
                            <Link
                              href={`/products?category=${encodeURIComponent(catName)}`}
                              className={`w-full text-left px-6 py-3 font-medium text-sm transition-colors flex items-center justify-between group 
                              ${isActive
                                  ? 'bg-gray-100/80 text-[#0D3F4A] font-bold border-l-4 border-[#0D3F4A]'
                                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                              onMouseEnter={() => setActiveCategory(catName)}
                              onClick={() => setIsMegaMenuOpen(false)}
                            >
                              {catName}
                              <svg className={`w-4 h-4 text-gray-400 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Render based on if Category and Subcategory are Active */}
                  {activeContent ? (
                    <>
                      {/* Column 2: Subcategories List */}
                      <div className="col-span-3 py-6 px-6 border-r border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-bold text-[#0D3F4A]">{activeContent.title}</h3>
                          <Link href="/products" onClick={() => setIsMegaMenuOpen(false)} className="text-[10px] font-bold text-[#023337] opacity-60 hover:opacity-100">View All</Link>
                        </div>
                        <div className="space-y-1">
                          {activeContent.subcategories.map((sub) => {
                            const isSubActive = activeSubCategoryName === sub.name;
                            return (
                              <Link
                                key={sub.name}
                                href={`/products?category=${encodeURIComponent(activeCategory || '')}&subcategory=${encodeURIComponent(sub.name)}`}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className={`w-full text-left px-4 py-3 font-medium text-sm transition-colors flex items-center justify-between group rounded-md
                                     ${isSubActive
                                    ? 'bg-gray-50 text-[#0D3F4A] font-bold'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                                onMouseEnter={() => setActiveSubCategoryName(sub.name)}
                              >
                                {sub.name}
                                <svg className={`w-4 h-4 text-gray-400 ${isSubActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Trendy Section */}
                        {activeContent.trendyItem && (
                          <div className="mt-8">
                            <h4 className="font-bold text-[#0D3F4A] text-base mb-4">{activeContent.trendyTitle}</h4>
                            <div className="space-y-3">
                              <Link
                                href={activeContent.trendyItem.url}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0D3F4A] transition-colors group"
                              >
                                <Flame className="w-4 h-4 text-[#0D3F4A] fill-[#0D3F4A]" />
                                <span className="uppercase tracking-wide">{activeContent.trendyItem.name}</span>
                              </Link>
                              {activeContent.secondaryTrendyItem && (
                                <Link
                                  href={activeContent.secondaryTrendyItem.url}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0D3F4A] transition-colors group"
                                >
                                  <Flame className="w-4 h-4 text-[#0D3F4A] fill-[#0D3F4A]" />
                                  <span className="uppercase tracking-wide">{activeContent.secondaryTrendyItem.name}</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {activeSubData ? (
                        <>
                          {/* Column 3: Specific Items */}
                          <div className="col-span-3 py-6 px-6 border-r border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                              <h3 className="text-lg font-bold text-[#0D3F4A]">{activeSubData.name}</h3>
                              <Link href="/products" onClick={() => setIsMegaMenuOpen(false)} className="text-[10px] font-bold text-[#023337] opacity-60 hover:opacity-100">View All</Link>
                            </div>
                            <ul className="space-y-4">
                              {activeSubData.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href={`/products?q=${encodeURIComponent(item)}`}
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="flex items-center justify-between text-sm text-gray-600 hover:text-[#0D3F4A] font-medium group"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 4: Banner Image Link */}
                          <div className="col-span-4 relative bg-gray-50 group cursor-pointer hover:opacity-95 transition-opacity overflow-hidden">
                            <Link href="/products" onClick={() => setIsMegaMenuOpen(false)} className="absolute inset-0 z-20"></Link>
                            <Image
                              src={activeSubData.bannerImage || activeContent.bannerImage}
                              alt={activeContent.title}
                              fill
                              className="object-cover object-center z-0"
                              priority
                            />
                          </div>
                        </>
                      ) : (
                        /* Default/Pick Layout when no subcat selected but Category IS selected */
                        <div className="col-span-7 relative bg-white group cursor-pointer hover:opacity-95 transition-opacity h-full min-h-[550px] overflow-hidden">
                          <Link href="/products" onClick={() => setIsMegaMenuOpen(false)} className="absolute inset-0 z-20"></Link>
                          <Image
                            src={activeContent.bannerImage}
                            alt={activeContent.title}
                            fill
                            className="object-cover object-center"
                            priority
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    /* Default/Pick Layout when NO CATEGORY selected */
                    <div className="col-span-10 relative bg-white group cursor-pointer hover:opacity-95 transition-opacity h-full min-h-[550px]">
                      <Link href="/products" onClick={() => setIsMegaMenuOpen(false)} className="absolute inset-0 z-20"></Link>
                      <Image
                        src="/images/PICK.png"
                        alt="Pick of the Week"
                        fill
                        className="object-contain object-center"
                        priority
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
