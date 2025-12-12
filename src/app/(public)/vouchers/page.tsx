'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Voucher from '@/components/public/ui/Voucher';
import { Search, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

interface VoucherData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  terms: string;
  backgroundColor: string;
  status: 'available' | 'expired' | 'upcoming';
}

const mockVouchers: VoucherData[] = [
  {
    id: 1,
    title: '11.11 Sale: Up to 50% OFF',
    subtitle: 'up to 50% OFF',
    description: 'Limited-time only',
    terms: '*Terms & conditions applicable',
    backgroundColor: '#2E7D52',
    status: 'available'
  },
  {
    id: 2,
    title: 'RM5 OFF min. spend RM25',
    subtitle: 'Get RM5 off',
    description: 'at least RM25 in a single transaction.',
    terms: '*Terms & conditions applicable',
    backgroundColor: '#6B7280',
    status: 'upcoming'
  },
  {
    id: 3,
    title: '12.12 Special: 12% OFF capped at RM30',
    subtitle: '12% OFF',
    description: 'capped at RM30 per order.',
    terms: '*Terms & conditions applicable',
    backgroundColor: '#EF4444',
    status: 'expired'
  },
  {
    id: 4,
    title: 'RM12 OFF with FPX Online Banking',
    subtitle: 'RM12 off instantly',
    description: 'pay using FPX Online Banking',
    terms: '*Terms & conditions applicable',
    backgroundColor: '#6B7280',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'RM30 OFF min. spend RM150',
    subtitle: 'RM30 discount',
    description: 'orders above RM150.',
    terms: '*Terms & conditions applicable',
    backgroundColor: '#EF4444',
    status: 'expired'
  },
  {
    id: 6,
    title: 'RM10 OFF min. spend RM50',
    subtitle: 'RM10 off',
    description: 'cart reaches RM50 or more.',
    terms: '*Terms & conditions applicable',
    backgroundColor: '#2E7D52',
    status: 'available'
  }
];

export default function VouchersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'current' | 'expired'>('all');
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleApplyVoucher = (voucher: VoucherData) => {
    if (voucher.status === 'available') {
      router.push('/cart');
    }
  };

  const getButtonText = (status: string) => {
    switch (status) {
      case 'expired':
        return 'Expired';
      case 'upcoming':
        return 'Coming Soon';
      default:
        return 'Apply Code';
    }
  };

  const getButtonStyle = (status: string) => {
    if (status === 'available') {
      return 'bg-[#2E7D52] text-white hover:bg-[#256b45] cursor-pointer';
    }
    return 'bg-transparent text-gray-400 cursor-not-allowed border-none';
  };

  // Filter vouchers based on active tab
  const filteredVouchers = mockVouchers.filter(voucher => {
    const matchesSearch = voucher.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voucher.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'current') return matchesSearch && voucher.status === 'available';
    if (activeTab === 'upcoming') return matchesSearch && voucher.status === 'upcoming';
    if (activeTab === 'expired') return matchesSearch && voucher.status === 'expired';
    
    return matchesSearch;
  });

  const voucherCount = {
    all: mockVouchers.length,
    upcoming: mockVouchers.filter(v => v.status === 'upcoming').length,
    current: mockVouchers.filter(v => v.status === 'available').length,
    expired: mockVouchers.filter(v => v.status === 'expired').length
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Voucher ({voucherCount.all})
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'current'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Current
            </button>
            <button
              onClick={() => setActiveTab('expired')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'expired'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Expired
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search order"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <ArrowUpDown className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-gray-600">•••</span>
            </button>
          </div>
        </div>

        {/* Voucher Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="hover:shadow-md transition-shadow rounded-2xl"
            >
              {/* Voucher Card */}
              <Voucher 
                size="medium" 
                backgroundColor={voucher.backgroundColor}
                className="w-full"
              >
                <div className="flex items-center gap-3 w-full px-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/voucherLogo.svg"
                      alt="Voucher Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  {/* Title */}
                  <div className="flex-1 text-white">
                    <h3 className="text-lg font-bold leading-tight">
                      {voucher.title}
                    </h3>
                  </div>
                </div>
              </Voucher>

              {/* Voucher Details */}
              <div className="bg-white p-4 border rounded-b-2xl border-t-0 border-transparent">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {voucher.subtitle}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {voucher.description}
                </p>
                <button
                  onClick={() => setShowTermsModal(true)}
                  className="text-xs text-blue-600 hover:underline mb-4 cursor-pointer"
                >
                  {voucher.terms}
                </button>

                {/* Apply Button */}
                <button
                  onClick={() => handleApplyVoucher(voucher)}
                  disabled={voucher.status !== 'available'}
                  className={`w-full py-2.5 rounded-lg font-medium transition-colors ${getButtonStyle(voucher.status)}`}
                >
                  {getButtonText(voucher.status)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVouchers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No vouchers found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-md" 
            onClick={() => setShowTermsModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="border-b border-gray-200 px-6 py-4 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Voucher Terms and Conditions</h3>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-8">
                {/* 10% Discount */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">10% Discount</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">WELCOME VOUCHER FOR FIRST PURCHASE</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Valid for first-time customers only.</li>
                    <li>• Applicable for a single transaction per user.</li>
                    <li>• Minimum spend of RM 888.</li>
                    <li>• Not stackable with other vouchers or promotions.</li>
                    <li>• Non-transferable and non-exchangeable for cash.</li>
                  </ul>
                </div>

                {/* RM 150 Rebate */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">RM 150 Rebate</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">BIRTHDAY VOUCHER DURING BIRTHDAY MONTH</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Only valid during the customer's birthday month.</li>
                    <li>• Each customer is entitled to 1 birthday voucher per year.</li>
                    <li>• Minimum spend of RM 1000.</li>
                    <li>• Cannot be combined with other vouchers.</li>
                    <li>• Account must have a verified birth date before redemption.</li>
                  </ul>
                </div>

                {/* RM 50 Discount For Both */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">RM 50 Discount For Both</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">REFER 1 FRIEND, BENEFITS 2 PEOPLE</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Referrer and referee both receive the voucher after the referee completes their first order.</li>
                    <li>• Voucher is not valid if the referee cancels or refunds the order.</li>
                    <li>• Each successful referral earns 1 voucher only.</li>
                    <li>• Non-transferable and cannot be sold.</li>
                  </ul>
                </div>

                {/* RM 10 Discount */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">RM 10 Discount</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">1 REVIEW, 1 VOUCHER</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Customer must submit a genuine review with photo or video.</li>
                    <li>• Review must be approved by the system/admin.</li>
                    <li>• One voucher per order review only.</li>
                    <li>• Cannot be used with other review-related rewards.</li>
                  </ul>
                </div>

                {/* 10% Discount within 24 Hour */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">10% Discount within 24 Hour</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">ENCOURAGEMENT TO PROCEED</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Issued only to customers who abandon their cart.</li>
                    <li>• Valid for a limited time (within 24 hours).</li>
                    <li>• Not combinable with other vouchers.</li>
                  </ul>
                </div>

                {/* RM 30 Extra Discount */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">RM 30 Extra Discount</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">DO NOT FORGET YOUR ACCESSORIES</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Only applicable when purchasing selected smartphones/laptops.</li>
                    <li>• Voucher can only be used to purchase accessories.</li>
                    <li>• Valid for one transaction only.</li>
                    <li>• Cannot be stacked with storewide promo codes.</li>
                  </ul>
                </div>

                {/* RM 350 Loyalty Rebate */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">RM 350 Loyalty Rebate</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">AN APPRECIATION GIFT SPECIAL FOR YOU</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Rewarded when total spending reaches the RM 3,500.</li>
                    <li>• Automatically issued once spending threshold is met.</li>
                    <li>• One voucher per milestone level.</li>
                    <li>• No minimum spend unless stated.</li>
                  </ul>
                </div>

                {/* Free Accessory worth RM 50 */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Free Accessory worth RM 50</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">A NEW YEAR, A NEW ACCESSORY</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Only available during festive periods (CNY, Raya, Christmas).</li>
                    <li>• Valid for limited time stated on the voucher.</li>
                    <li>• Minimum spend may apply.</li>
                    <li>• Not applicable for bundled items or clearance products.</li>
                  </ul>
                </div>

                {/* 18% Discount */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">18% Discount</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-3">DISCOUNT FOR NEWLY DEBUT PRODUCT</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Applicable for early shoppers during product launches/campaigns.</li>
                    <li>• Valid only within the promo period.</li>
                    <li>• Limited to one redemption per user.</li>
                    <li>• Cannot be stacked with pre-order discounts or launch bundles.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end bg-white">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-6 py-2.5 rounded-lg bg-[#6B8784] text-white font-medium hover:bg-[#5a726f] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
