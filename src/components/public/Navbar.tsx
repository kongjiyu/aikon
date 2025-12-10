import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-dark tracking-widest">
              AIKON
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Navigation Links & Icons */}
          <div className="flex items-center gap-6">
            <Link href="/products" className="text-gray-600 hover:text-brand-dark font-medium hidden sm:block">
              Products
            </Link>
            
            <div className="flex items-center gap-4">
              <Link href="/wishlist" className="text-gray-500 hover:text-brand-dark relative">
                <span className="text-xl">♡</span>
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span> */}
              </Link>
              <Link href="/cart" className="text-gray-500 hover:text-brand-dark relative">
                <span className="text-xl">🛒</span>
                {/* <span className="absolute -top-1 -right-1 bg-brand-teal text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span> */}
              </Link>
              <Link href="/login" className="text-gray-500 hover:text-brand-dark">
                <span className="text-xl">👤</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
