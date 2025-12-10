import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold tracking-widest mb-4">AIKON</h3>
            <p className="text-brand-light-blue text-sm leading-relaxed">
              Connect Smart. Your one-stop shop for the latest electronic gadgets and accessories.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
              <li><Link href="/recommendations" className="hover:text-white">Recommendations</Link></li>
              <li><Link href="/compare" className="hover:text-white">Compare</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/return-refund" className="hover:text-white">Return & Refund</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/login" className="hover:text-white">Login</Link></li>
              <li><Link href="/register" className="hover:text-white">Register</Link></li>
              <li><Link href="/orders" className="hover:text-white">My Orders</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aikon E-commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
