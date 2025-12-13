'use client';

import React from 'react';
import { 
  ArrowLeft, 
  Copy, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function AdminCustomerDetailWireframePage() {
  return (
    <div className="space-y-6 grayscale">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="#" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Lorem Ipsum Dolor</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Profile Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-900 truncate">Lorem Ipsum Dolor</h2>
                <p className="text-sm text-gray-500 truncate">lorem.ipsum@dolor.sit</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    #LOREM000
                  </span>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Copy size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Lorem Ipsum Dolor</h3>
              
              <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                <Phone size={18} className="text-gray-400" />
                <span className="text-sm text-gray-700">+000000000000</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-sm text-gray-700">000 Lorem St, Ipsum Dolor</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Lorem Ipsum</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <MessageCircle size={18} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Instagram size={18} />
                </button>
              </div>
            </div>

            {/* Activity */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Lorem Ipsum</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Lorem Ipsum:</span>
                  <span className="font-medium text-gray-900">00.00.0000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Lorem ipsum:</span>
                  <span className="font-medium text-gray-900">00.00.0000</span>
                </div>
              </div>
            </div>

            {/* Order Overview */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Lorem Ipsum Dolor</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 bg-gray-100 rounded-lg text-center">
                  <p className="text-xl font-bold text-gray-700">000</p>
                  <p className="text-[10px] text-gray-500 uppercase mt-1">Lorem Ipsum</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg text-center">
                  <p className="text-xl font-bold text-gray-700">000</p>
                  <p className="text-[10px] text-gray-500 uppercase mt-1">Lorem Sit</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg text-center">
                  <p className="text-xl font-bold text-gray-700">00</p>
                  <p className="text-[10px] text-gray-500 uppercase mt-1">Dolor Amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Orders / Detailed Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Lorem Ipsum Dolor</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Lorem ID</th>
                    <th className="px-4 py-3">Ipsum</th>
                    <th className="px-4 py-3">Dolor</th>
                    <th className="px-4 py-3">Sit</th>
                    <th className="px-4 py-3">Amet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">#LOREM-000{i}</td>
                      <td className="px-4 py-3 text-gray-600">Ipsum 00, 0000</td>
                      <td className="px-4 py-3 text-gray-600">0 dolor</td>
                      <td className="px-4 py-3 font-medium text-gray-900">RM 0,000.00</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                          Lorem Ipsum
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Notes Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
             <h3 className="font-bold text-gray-800 mb-4">Lorem Ipsum</h3>
             <textarea 
                className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none text-gray-700 bg-gray-50"
                rows={4}
                disabled
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
             ></textarea>
             <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900">Lorem Ipsum</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
