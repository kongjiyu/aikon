import { Search, Bell, Sun, Moon, User } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <h1 className="text-xl font-bold text-brand-dark">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search data, users, or reports"
            className="w-80 pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-teal outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button className="p-1 rounded-full bg-white shadow-sm text-yellow-500">
                <Sun size={16} />
            </button>
            <button className="p-1 rounded-full text-gray-400">
                <Moon size={16} />
            </button>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-brand-dark overflow-hidden flex items-center justify-center text-white">
            <User size={20} />
        </div>
      </div>
    </header>
  );
}
