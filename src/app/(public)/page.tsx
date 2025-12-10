import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Connect Smart with <span className="text-brand-light-blue">AIKON</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Discover the latest electronic gadgets that enhance your lifestyle. From smart home devices to personal tech, we have it all.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="bg-brand-teal hover:bg-brand-sage text-white px-8 py-3 rounded-full font-medium transition-colors">
                Shop Now
              </Link>
              <Link href="/recommendations" className="bg-transparent border border-white hover:bg-white hover:text-brand-dark text-white px-8 py-3 rounded-full font-medium transition-colors">
                AI Recommendations
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            {/* Hero Image Placeholder */}
            <div className="w-80 h-80 bg-brand-sage rounded-full flex items-center justify-center opacity-80">
               <span className="text-4xl">📱🎧⌚️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Smartphones', 'Laptops', 'Audio', 'Wearables'].map((category) => (
            <Link key={category} href={`/products?category=${category.toLowerCase()}`} className="group">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-brand-light-blue group-hover:text-white transition-colors">
                  {category === 'Smartphones' && '📱'}
                  {category === 'Laptops' && '💻'}
                  {category === 'Audio' && '🎧'}
                  {category === 'Wearables' && '⌚️'}
                </div>
                <h3 className="font-medium text-gray-900">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-brand-dark">Best Sellers</h2>
            <Link href="/products" className="text-brand-teal hover:text-brand-dark font-medium text-sm">View All →</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-4xl text-gray-300">📦</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">Premium Wireless Headphones</h3>
                <p className="text-sm text-gray-500 mb-3">Audio</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-dark">$299.00</span>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-teal hover:text-white transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-light-grey rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-lg">
                <h2 className="text-3xl font-bold text-brand-dark">Get 20% Off Your First Order</h2>
                <p className="text-gray-600">Sign up for our newsletter and get exclusive deals on the latest tech.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-brand-teal" />
                    <button className="bg-brand-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800">Subscribe</button>
                </div>
            </div>
            <div className="text-6xl">
                🎁
            </div>
        </div>
      </section>
    </div>
  );
}
