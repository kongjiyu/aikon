import React from 'react';
import Voucher from './Voucher';

/**
 * Example usage of the Voucher component
 * This file demonstrates different ways to use the Voucher component
 */

const VoucherExamples = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Voucher Component Examples</h1>
      
      <div className="space-y-12">
        {/* Basic Voucher */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Basic Voucher (Empty)</h2>
          <Voucher />
        </div>

        {/* Different Sizes */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Different Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <div>
              <p className="text-sm text-gray-600 mb-2">Small</p>
              <Voucher size="small" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Medium (Default)</p>
              <Voucher size="medium" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Large</p>
              <Voucher size="large" />
            </div>
          </div>
        </div>

        {/* With Content */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Voucher with Content</h2>
          <Voucher size="large">
            <div className="text-center text-white">
              <p className="text-sm font-medium mb-1">DISCOUNT</p>
              <p className="text-4xl font-bold">50%</p>
              <p className="text-xs mt-2">Valid until Dec 31, 2025</p>
            </div>
          </Voucher>
        </div>

        {/* Different Colors */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Different Colors</h2>
          <div className="flex flex-wrap gap-6">
            <Voucher backgroundColor="#2E7D52">
              <div className="text-center text-white">
                <p className="text-xl font-bold">Green</p>
                <p className="text-sm">Default</p>
              </div>
            </Voucher>
            <Voucher backgroundColor="#6B8784">
              <div className="text-center text-white">
                <p className="text-xl font-bold">Teal</p>
                <p className="text-sm">Theme Color</p>
              </div>
            </Voucher>
            <Voucher backgroundColor="#DC2626">
              <div className="text-center text-white">
                <p className="text-xl font-bold">Red</p>
                <p className="text-sm">Hot Deal</p>
              </div>
            </Voucher>
            <Voucher backgroundColor="#7C3AED">
              <div className="text-center text-white">
                <p className="text-xl font-bold">Purple</p>
                <p className="text-sm">Premium</p>
              </div>
            </Voucher>
          </div>
        </div>

        {/* Realistic Voucher Example */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Realistic Voucher Design</h2>
          <div className="flex flex-wrap gap-6">
            {/* Discount Voucher */}
            <Voucher size="large" backgroundColor="#2E7D52">
              <div className="text-white w-full h-full flex flex-col items-center justify-center">
                <p className="text-sm font-medium uppercase tracking-wider">Save Big</p>
                <p className="text-5xl font-bold my-2">RM50</p>
                <p className="text-xs opacity-90">Min. spend RM200</p>
                <p className="text-xs opacity-75 mt-2">Code: SAVE50</p>
              </div>
            </Voucher>

            {/* Percentage Voucher */}
            <Voucher size="large" backgroundColor="#6B8784">
              <div className="text-white w-full h-full flex flex-col items-center justify-center">
                <p className="text-sm font-medium uppercase tracking-wider">Special Offer</p>
                <div className="flex items-baseline my-2">
                  <p className="text-6xl font-bold">30</p>
                  <p className="text-3xl font-bold">%</p>
                </div>
                <p className="text-xs opacity-90">OFF</p>
                <p className="text-xs opacity-75 mt-2">Valid: Dec 12-31</p>
              </div>
            </Voucher>

            {/* Free Shipping Voucher */}
            <Voucher size="large" backgroundColor="#DC2626">
              <div className="text-white w-full h-full flex flex-col items-center justify-center">
                <p className="text-sm font-medium uppercase tracking-wider">Limited Time</p>
                <p className="text-3xl font-bold my-2">FREE</p>
                <p className="text-xl font-semibold">SHIPPING</p>
                <p className="text-xs opacity-90 mt-2">No min. purchase</p>
              </div>
            </Voucher>
          </div>
        </div>

        {/* Small Vouchers in List */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Voucher List (Small Size)</h2>
          <div className="space-y-3">
            {[
              { title: '10% OFF', subtitle: 'First order', code: 'FIRST10', color: '#2E7D52' },
              { title: 'RM20 OFF', subtitle: 'Min. RM100', code: 'SAVE20', color: '#6B8784' },
              { title: 'FREE GIFT', subtitle: 'Purchase above RM150', code: 'GIFT2024', color: '#7C3AED' },
            ].map((voucher, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <Voucher size="small" backgroundColor={voucher.color}>
                  <div className="text-white text-center">
                    <p className="text-sm font-bold">{voucher.title}</p>
                  </div>
                </Voucher>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{voucher.subtitle}</p>
                  <p className="text-sm text-gray-600">Code: {voucher.code}</p>
                </div>
                <button className="px-4 py-2 bg-[#6B8784] hover:bg-[#5a726f] text-white rounded-lg transition-colors">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherExamples;
