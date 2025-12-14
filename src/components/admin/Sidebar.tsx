"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Ticket,
  PlusCircle,
  List,
  MessageSquare,
  UserCog,
  Store,
  LogOut,
  ChevronLeft,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

const menuItems = [
  {
    category: 'Main menu',
    items: [
      { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { name: 'Order Management', href: '/admin/orders', icon: ShoppingCart },
      { name: 'Customers', href: '/admin/customers', icon: Users },
      { name: 'Coupon Code', href: '/admin/vouchers', icon: Ticket },
      { name: 'Refund List', href: '/admin/refunds', icon: RotateCcw },
    ],
  },
  {
    category: 'Product',
    items: [
      { name: 'Add Products', href: '/admin/products/add', icon: PlusCircle },
      { name: 'Product List', href: '/admin/products', icon: List },
      { name: 'Product Reviews', href: '/admin/products/reviews', icon: MessageSquare },
    ],
  },
  {
    category: 'Admin',
    items: [
      { name: 'Admin Profile', href: '/admin/roles', icon: UserCog },
    ],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} z-40`}>
      <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'gap-2'} relative`}>
        {!isCollapsed && (
          <>
            <div className="flex items-center">
              <Image
                src="/images/headerPic.png"
                alt="AIKON Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            {/* Toggle Button - when expanded */}
            <button
              onClick={toggleSidebar}
              className="absolute right-3 top-7 bg-white border border-gray-200 rounded-full p-1 shadow-sm text-gray-500 hover:text-gray-900 z-[60] focus:outline-none">
              <ChevronLeft size={14} />
            </button>
          </>
        )}
        {isCollapsed && (
          /* Toggle Button - when collapsed, replaces logo */
          <button
            onClick={toggleSidebar}
            className="bg-white border border-gray-200 rounded-full p-2 shadow-sm text-gray-500 hover:text-gray-900 focus:outline-none">
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-6 mt-4">
        {menuItems.map((section) => (
          <div key={section.category}>
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2 whitespace-nowrap overflow-hidden">
                {section.category}
              </h3>
            )}
            {isCollapsed && (
              <div className="h-px bg-gray-100 mx-2 mb-3"></div>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors group relative ${isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        } ${isCollapsed ? 'justify-center' : ''}`}
                    >
                      <item.icon size={20} className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />

                      {!isCollapsed && <span className="flex-1 whitespace-nowrap overflow-hidden">{item.name}</span>}

                      {/* Tooltip for collapsed mode */}
                      {isCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-md">
                          {item.name}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className={`flex items-center ${isCollapsed ? 'justify-center flex-col gap-2' : 'gap-3'} mb-4 px-2`}>
          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img src="https://ui-avatars.com/api/?name=Dealport&background=0D8ABC&color=fff" alt="User" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Dealport</p>
              <p className="text-xs text-gray-500 truncate">Mark@thedesigner...</p>
            </div>
          )}
          {!isCollapsed && <LogOut size={16} className="text-gray-400 ml-auto cursor-pointer hover:text-gray-600 flex-shrink-0" />}
        </div>

        <Link href="/" className={`flex items-center text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 border border-gray-200 ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          <Store size={16} className="flex-shrink-0" />
          {!isCollapsed && (
            <>
              <span className="whitespace-nowrap">Your Shop</span>
              <span className="ml-auto text-gray-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </span>
            </>
          )}
        </Link>
      </div>
    </aside>
  );
}
