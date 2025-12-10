import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  User,
  MapPin,
  ChevronDown,
  Heart,
  Menu,
  Mic,
  ScanLine
} from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center text-xs text-gray-600">
          <div className="flex items-center gap-2 truncate max-w-xl">
            <MapPin size={14} className="flex-shrink-0" />
            <span className="truncate">Plaza Low Yat is 7, Jalan Bintang, Off Jalan Bukit Bintang, Bukit Bintang Central, 55100 Kuala Lumpur, Malaysia</span>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <Link href="/profile" className="flex items-center gap-1 hover:text-brand-dark">
              <User size={14} /> My Account <ChevronDown size={12} />
            </Link>
            <Link href="/cart" className="flex items-center gap-1 hover:text-brand-dark">
              <ShoppingCart size={14} /> My Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-3xl font-bold text-brand-dark tracking-widest leading-none">AIKON</span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 group-hover:text-brand-teal transition-colors">CONNECT SMART</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl relative hidden md:block">
            <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand-teal/20 transition-all">
              <Search className="text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 placeholder-gray-400"
              />
              <div className="flex items-center gap-3 border-l border-gray-300 pl-3">
                <button className="text-gray-400 hover:text-brand-dark transition-colors">
                  <Mic size={18} />
                </button>
                <button className="text-gray-400 hover:text-brand-dark transition-colors">
                  <ScanLine size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Cart/Menu (Visible on mobile only) */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="text-gray-600">
              <ShoppingCart size={24} />
            </Link>
            <button className="text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-50/50 border-t border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-8">
            <Link href="/compare" className="text-gray-600 hover:text-brand-dark transition-colors">
              Compare
            </Link>
            <Link href="/ai-assistant" className="text-gray-600 hover:text-brand-dark transition-colors flex items-center gap-1">
              AI Assistant <ChevronDown size={14} />
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-brand-dark transition-colors flex items-center gap-1">
              Products <ChevronDown size={14} />
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-brand-dark transition-colors flex items-center gap-1">
              All Categories <ChevronDown size={14} />
            </Link>
          </div>

          <Link href="/track-order" className="flex items-center gap-2 text-gray-500 hover:text-brand-dark transition-colors">
            <ScanLine size={16} /> Track Order
          </Link>
        </div>
      </div>
    </header>
  );
}
