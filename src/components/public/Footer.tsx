import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-3xl font-bold text-brand-dark tracking-widest leading-none">AIKON</span>
              <span className="text-[10px] tracking-[0.2em] text-gray-500">CONNECT SMART</span>
            </Link>

            <div className="flex items-center justify-center w-24 h-36 bg-gray-100 rounded-lg mx-auto md:mx-0 border-2 border-brand-dark">
              {/* Placeholder for the Robot Character Image */}
              <div className="text-center">
                <div className="text-2xl">🤖</div>
              </div>
            </div>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="font-bold text-brand-dark uppercase tracking-wider mb-6 text-sm">Information</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              At AIKON, we create smart, innovative tools that make staying connected simple and enjoyable. Our mission is to bring technology and people closer with seamless, user-focused solutions.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 bg-gray-100 rounded text-gray-600 hover:bg-brand-dark hover:text-white transition-all"><Facebook size={18} /></Link>
              <Link href="#" className="p-2 bg-gray-100 rounded text-gray-600 hover:bg-brand-dark hover:text-white transition-all"><Twitter size={18} /></Link>
              <Link href="#" className="p-2 bg-gray-100 rounded text-gray-600 hover:bg-brand-dark hover:text-white transition-all"><Instagram size={18} /></Link>
              <Link href="#" className="p-2 bg-gray-100 rounded text-gray-600 hover:bg-brand-dark hover:text-white transition-all"><Linkedin size={18} /></Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-brand-dark uppercase tracking-wider mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link href="/compare" className="hover:text-brand-teal flex items-center gap-2"><ChevronRight size={14} /> Compare</Link></li>
              <li><Link href="/ai-assistant" className="hover:text-brand-teal flex items-center gap-2"><ChevronRight size={14} /> AI Assistant</Link></li>
              <li><Link href="/products" className="hover:text-brand-teal flex items-center gap-2"><ChevronRight size={14} /> Products</Link></li>
              <li><Link href="/categories" className="hover:text-brand-teal flex items-center gap-2"><ChevronRight size={14} /> All Categories</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 className="font-bold text-brand-dark uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="shrink-0 text-brand-dark mt-0.5" />
                <span className="leading-relaxed">Plaza Low Yat is 7, Jalan Bintang, Off Jalan Bukit Bintang Central, 55100 Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={20} className="shrink-0 text-brand-dark" />
                <span>Aikon888@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 text-center bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 pb-8">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Aikon Connect Smart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ChevronRight({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  )
}
