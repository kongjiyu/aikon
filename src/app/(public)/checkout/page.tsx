'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Ticket, X, Tag, CheckCircle2 } from 'lucide-react';
import { mockProducts, initialCartItems, CartItem } from '@/lib/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock addresses
const availableAddresses = [
  {
    id: 'addr-1',
    name: 'albert',
    phone: '(+60) 12 345 6778',
    address: 'PV101 Platinum Lake Condominium, Jalan Danau Saujana, Danau Kota, W.P. Kuala Lumpur, 53300 W.P. Kuala Lumpur',
    isDefault: true
  },
  {
    id: 'addr-2',
    name: 'John Doe',
    phone: '(+60) 11 222 3344',
    address: 'B-12-3, The Gardens Residences, Jalan Bangsar, Mid Valley City, 59200 Kuala Lumpur',
    isDefault: false
  },
  {
    id: 'addr-3',
    name: 'Mary Tan',
    phone: '(+60) 16 888 9999',
    address: '45-2, Menara KLCC, Jalan Ampang, City Centre, 50088 Kuala Lumpur',
    isDefault: false
  }
];

// Mock vouchers
const availableVouchers = [
  {
    id: 'voucher-1',
    type: 'Free Shipping',
    code: 'FREESHIP123',
    description: 'No Min. Spend',
    terms: '*Terms & conditions',
    isBestChoice: true,
    discount: 0
  },
  {
    id: 'voucher-2',
    type: 'RM 10 Off',
    code: 'FINFIRST10',
    description: 'Min. Spend RM 60',
    terms: '*Terms & conditions',
    isBestChoice: false,
    discount: 10
  }
];

// Mock banks
const banks = [
  { id: 'maybank', name: 'Maybank2u', logo: '🏦', color: '#FDB913' },
  { id: 'cimb', name: 'CIMB Clicks', logo: '🏦', color: '#D32027' },
  { id: 'public', name: 'Public Bank', logo: '🏦', color: '#E31E24' },
  { id: 'rhb', name: 'RHB Now', logo: '🏦', color: '#00539F' },
  { id: 'ambank', name: 'Ambank', logo: '🏦', color: '#D52B1E' },
  { id: 'mybsn', name: 'MyBSN', logo: '🏦', color: '#00AEEF' },
  { id: 'bankrakyat', name: 'Bank Rakyat', logo: '🏦', color: '#F26522' },
  { id: 'uob', name: 'UOB', logo: '🏦', color: '#0B3B8C' },
  { id: 'affin', name: 'Affin Bank', logo: '🏦', color: '#003DA5' },
  { id: 'bankislam', name: 'Bank Islam', logo: '🏦', color: '#00843D' },
  { id: 'hsbc', name: 'HSBC Online', logo: '🏦', color: '#DB0011' },
  { id: 'standard', name: 'Standard Chartered Bank', logo: '🏦', color: '#0072CE' },
  { id: 'kuwait', name: 'Kuwait Finance House', logo: '🏦', color: '#007C3F' },
  { id: 'muamalat', name: 'Bank Muamalat', logo: '🏦', color: '#006B3F' },
  { id: 'ocbc', name: 'OCBC Online', logo: '🏦', color: '#D72229' },
  { id: 'alliance', name: 'Alliance Bank (Personal)', logo: '🏦', color: '#003F87' },
  { id: 'agrobank', name: 'Agrobank', logo: '🏦', color: '#D32027' },
  { id: 'hongleong', name: 'Hong Leong Connect', logo: '🏦', color: '#D32027' }
];

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('Online Banking');
  const [protectionStates, setProtectionStates] = useState<{[key: string]: boolean}>({});
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(availableAddresses[0]);
  const [tempSelectedAddress, setTempSelectedAddress] = useState(availableAddresses[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<typeof availableVouchers[0] | null>(null);
  const [tempSelectedVoucher, setTempSelectedVoucher] = useState<typeof availableVouchers[0] | null>(null);
  const [voucherCode, setVoucherCode] = useState('');
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>('saved-card-1');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showNewAddressModal, setShowNewAddressModal] = useState(false);
  const [newAddressForm, setNewAddressForm] = useState({
    firstName: '',
    lastName: '',
    phoneCode: '+60',
    phone: '',
    email: '',
    address: '',
    stateArea: ''
  });

  // Load checked items from localStorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem('checkoutItems');
    if (storedItems) {
      const allItems: CartItem[] = JSON.parse(storedItems);
      // Filter only checked items
      setCartItems(allItems.filter(item => item.checked));
    }
  }, []);
  
  // Toggle protection for individual item
  const toggleProtection = (itemId: string) => {
    setProtectionStates(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Handle place order
  const handlePlaceOrder = () => {
    setShowSuccessModal(true);
  };

  // Handle success modal close and redirect
  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    // Clear cart items from localStorage
    localStorage.removeItem('checkoutItems');
    // Redirect to orders page
    router.push('/orders');
  };

  // Calculate totals
  const merchandiseSubtotal = cartItems.reduce((acc, item) => {
    const product = mockProducts.find(p => p.id === item.productId);
    return acc + (product ? product.price * item.qty : 0);
  }, 0);

  const protectionPrice = 125.80;
  const totalProtection = Object.values(protectionStates).filter(Boolean).length * protectionPrice;
  const shippingPrice = 5.19;
  const totalPayment = merchandiseSubtotal + totalProtection + shippingPrice;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      {/* Delivery Address */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-gray-700" />
            <h2 className="font-semibold text-gray-900">Delivery Address</h2>
          </div>
          <button 
            onClick={() => setShowAddressModal(true)}
            className="text-blue-600 text-sm hover:underline font-medium"
          >
            Change
          </button>
        </div>
        
        <div className="space-y-1 pl-7">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-900">{selectedAddress.name} {selectedAddress.phone}</span>
            {selectedAddress.isDefault && (
              <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded">Default</span>
            )}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {selectedAddress.address}
          </p>
        </div>
      </div>

      {/* Address Selection Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col shadow-xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Select Delivery Address</h3>
              <button 
                onClick={() => {
                  setShowAddressModal(false);
                  setTempSelectedAddress(selectedAddress);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              {availableAddresses.map((address) => (
                <div
                  key={address.id}
                  onClick={() => setTempSelectedAddress(address)}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    tempSelectedAddress.id === address.id
                      ? 'border-[#6B8784] bg-[#6B8784]'
                      : 'border-gray-200 hover:border-[#6B8784]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`font-medium ${
                      tempSelectedAddress.id === address.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {address.name} {address.phone}
                    </span>
                    {address.isDefault && (
                      <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded">Default</span>
                    )}
                  </div>
                  <p className={`text-sm ${
                    tempSelectedAddress.id === address.id ? 'text-white' : 'text-gray-600'
                  }`}>
                    {address.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer with Buttons */}
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3 justify-between bg-white">
              <button
                onClick={() => {
                  setShowAddressModal(false);
                  setShowNewAddressModal(true);
                }}
                className="px-6 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Add Address
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowAddressModal(false);
                    setTempSelectedAddress(selectedAddress);
                  }}
                  className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setSelectedAddress(tempSelectedAddress);
                    setShowAddressModal(false);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#6B8784] text-white font-medium hover:bg-[#5a726f] transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Ordered */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
        {/* Table Header */}
        <div className="bg-[#6B8784] text-white">
          <div className="grid grid-cols-10 gap-4 px-6 py-3 text-sm font-medium">
            <div className="col-span-5">Product Ordered</div>
            <div className="col-span-2 text-center">Unit Price</div>
            <div className="col-span-1 text-center">Quantity</div>
            <div className="col-span-2 text-center">Item Subtotal</div>
          </div>
        </div>

        {/* Product Items */}
        <div>
          {cartItems.map((item, index) => {
            const product = mockProducts.find(p => p.id === item.productId);
            if (!product) return null;

            const lineTotal = product.price * item.qty;

            return (
              <div key={item.id} className={index > 0 ? 'border-t border-gray-200' : ''}>
                {/* Product Row */}
                <div className="px-6 py-5">
                  {/* Main Product Row */}
                  <div className="grid grid-cols-10 gap-4 items-start mb-4">
                    <div className="col-span-5 flex items-start gap-4">
                      <div className="w-20 h-20 rounded-lg flex-shrink-0 flex items-center justify-center p-2">
                        <img 
                          src={product.images?.[0] || product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="text-gray-900">{item.variant}</span>
                          {item.storage && (
                            <>
                              <span>|</span>
                              <span className="text-gray-900">{item.storage}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center font-semibold text-gray-900 pt-2">
                      RM {product.price.toFixed(2)}
                    </div>
                    
                    <div className="col-span-1 text-center font-semibold text-gray-900 pt-2">
                      {item.qty}
                    </div>
                    
                    <div className="col-span-2 text-center font-semibold text-gray-900 pt-2">
                      RM {lineTotal.toFixed(2)}
                    </div>
                  </div>

                  {/* Electronic Device Protection Row */}
                  <div className="grid grid-cols-10 gap-4 items-start">
                    <div className="col-span-5 flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={protectionStates[item.id] || false}
                        onChange={() => toggleProtection(item.id)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#6B8784] focus:ring-[#6B8784]"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-500 mb-1">Electronic Device Protection</h4>
                        <p className="text-xs text-gray-400">
                          Protect your mobile phones from accidental and liquid damage.<br />
                          This service is provided by Igloo.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center text-gray-500 font-semibold">
                      RM {protectionPrice.toFixed(2)}
                    </div>
                    
                    <div className="col-span-1 text-center text-gray-500 font-semibold">
                      1
                    </div>
                    
                    <div className="col-span-2 text-center text-gray-500 font-semibold">
                      RM {protectionPrice.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Shipping Option */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="grid grid-cols-10 gap-4 items-center">
            <div className="col-span-8">
              <div className="mb-1">
                <span className="font-medium text-gray-900">Shipping Option:</span>
                <span className="ml-2 text-gray-900">Doorstep Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Guaranteed to get by 11 - 13 Dec</span>
              </div>
            </div>
            <div className="col-span-2 text-center font-semibold text-gray-900">RM {shippingPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Voucher / Discount */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Ticket size={18} className="text-gray-700" />
            <span className="font-medium text-gray-900">Voucher / Discount</span>
            {selectedVoucher && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span>•</span>
                <span>{selectedVoucher.type}</span>
                <span className="text-green-600">({selectedVoucher.code})</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => {
              setShowVoucherModal(true);
              setTempSelectedVoucher(selectedVoucher);
            }}
            className="text-blue-600 text-sm hover:underline font-medium"
          >
            {selectedVoucher ? 'Change' : 'Select Voucher'}
          </button>
        </div>
      </div>

      {/* Voucher Selection Modal */}
      {showVoucherModal && (
        <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Select Voucher / Discount</h3>
              <button 
                onClick={() => {
                  setShowVoucherModal(false);
                  setTempSelectedVoucher(selectedVoucher);
                  setVoucherCode('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              {/* Add Voucher Input */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Add Voucher</h4>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter Voucher Code"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                  />
                  <button className="px-6 py-2.5 bg-[#6B8784] text-white rounded-lg font-medium hover:bg-[#5a726f] transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Available Vouchers */}
              <div className="space-y-4">
                {/* None Option */}
                <div
                  onClick={() => setTempSelectedVoucher(null)}
                  className={`border-2 rounded-lg p-1 cursor-pointer transition-all ${
                    tempSelectedVoucher === null
                      ? 'border-green-500'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center h-6">
                    <div className="flex items-center gap-1">
                      <X size={16} className="text-gray-400" />
                      <span className="text-xs font-medium text-gray-900">None</span>
                    </div>
                  </div>
                </div>

                {/* Vouchers in a row */}
                <div className="grid grid-cols-2 gap-4">
                  {availableVouchers.map((voucher, index) => (
                    <div
                      key={voucher.id}
                      onClick={() => setTempSelectedVoucher(voucher)}
                      className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        tempSelectedVoucher?.id === voucher.id
                          ? 'border-green-500'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {/* Voucher Image Only */}
                      <img 
                        src={`/images/voucher${index + 1}.svg`}
                        alt={`Voucher ${index + 1}`}
                        className="w-full h-44 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="mt-6 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 text-[#6B8784] border-gray-300 rounded focus:ring-[#6B8784]"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTermsModal(true);
                    }}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Terms and Conditions
                  </button>
                </label>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3 justify-end bg-white">
              <button
                onClick={() => {
                  setShowVoucherModal(false);
                  setTempSelectedVoucher(selectedVoucher);
                  setVoucherCode('');
                  setTermsAccepted(false);
                }}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedVoucher(tempSelectedVoucher);
                  setShowVoucherModal(false);
                  setVoucherCode('');
                  setTermsAccepted(false);
                }}
                disabled={tempSelectedVoucher !== null && !termsAccepted}
                className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                  (tempSelectedVoucher !== null && !termsAccepted)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#6B8784] text-white hover:bg-[#5a726f] cursor-pointer'
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
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

      {/* Add Card Modal */}
      {showAddCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-md" 
            onClick={() => setShowAddCardModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="border-b border-gray-200 px-6 py-4 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Add New Card</h3>
                <button
                  onClick={() => setShowAddCardModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={19}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                  />
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="JOHN DOE"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                  />
                </div>

                {/* Expiry Date and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      maxLength={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3 justify-end bg-white">
              <button
                onClick={() => {
                  setShowAddCardModal(false);
                  setCardNumber('');
                  setCardName('');
                  setExpiryDate('');
                  setCvv('');
                }}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Save card logic here
                  setSelectedCard('saved-card-1');
                  setShowAddCardModal(false);
                  setCardNumber('');
                  setCardName('');
                  setExpiryDate('');
                  setCvv('');
                }}
                className="px-6 py-2.5 rounded-lg bg-[#6B8784] text-white font-medium hover:bg-[#5a726f] transition-colors"
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Method */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
        <h2 className="font-semibold text-gray-900 mb-4">Payment Method</h2>
        
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setSelectedPayment('Online Banking')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedPayment === 'Online Banking'
                ? 'bg-[#6B8784] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
            }`}
          >
            Online Banking
          </button>
          
          <button
            onClick={() => setSelectedPayment('Credit / Debit Card')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedPayment === 'Credit / Debit Card'
                ? 'bg-[#6B8784] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
            }`}
          >
            Credit / Debit Card
          </button>
          
          <button
            onClick={() => setSelectedPayment('Cash On Delivery')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedPayment === 'Cash On Delivery'
                ? 'bg-[#6B8784] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
            }`}
          >
            Cash On Delivery
          </button>
        </div>

        {/* Bank Selection - Show when Online Banking is selected */}
        {selectedPayment === 'Online Banking' && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Select Bank:</h3>
            <div className="grid grid-cols-3 gap-3">
              {banks.map((bank) => (
                <button
                  key={bank.id}
                  onClick={() => setSelectedBank(bank.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    selectedBank === bank.id
                      ? 'border-[#6B8784] bg-[#6B8784] bg-opacity-100'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-2xl">
                    {bank.logo}
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedBank === bank.id ? 'text-white' : 'text-gray-900'
                  }`}>{bank.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Card Selection - Show when Credit / Debit Card is selected */}
        {selectedPayment === 'Credit / Debit Card' && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Select Card:</h3>
            <div className="space-y-3">
              {/* Default Saved Card */}
              <button
                onClick={() => setSelectedCard('saved-card-1')}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  selectedCard === 'saved-card-1'
                    ? 'border-[#6B8784] bg-[#6B8784] bg-opacity-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img 
                  src="/images/visa.svg"
                  alt="Visa"
                  className="w-10 h-8 object-contain"
                />
                <span className={`text-sm font-medium ${
                  selectedCard === 'saved-card-1' ? 'text-white' : 'text-gray-900'
                }`}>PUBLIC BANK BERHAD **** 4007</span>
              </button>
              
              {/* Add Card Button */}
              <button
                onClick={() => setShowAddCardModal(true)}
                className="px-4 py-2 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all text-gray-700 text-sm font-medium flex items-center gap-2 w-fit"
              >
                <span className="text-lg">⊕</span>
                <span>Add New Card</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Payment Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-2.5">
          <div className="flex justify-between text-gray-600">
            <span>Merchandise Subtotal :</span>
            <span className="font-semibold text-gray-900">RM {merchandiseSubtotal.toFixed(2)}</span>
          </div>
          
          {totalProtection > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Electronic Device Protection :</span>
              <span className="font-semibold text-gray-900">RM {totalProtection.toFixed(2)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-gray-600">
            <span>Shipping Subtotal :</span>
            <span className="font-semibold text-gray-900">RM {shippingPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
            <span>Total Payment :</span>
            <span>RM {totalPayment.toFixed(2)}</span>
          </div>
        </div>

        <button 
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-[#6B8784] hover:bg-[#5a726f] text-white font-semibold py-3.5 rounded-lg transition-colors"
        >
          Place Order
        </button>
      </div>

      {/* Success Purchase Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Content */}
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} className="text-green-600" />
                </div>
              </div>

              {/* Success Message */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Purchase Successful!
              </h2>
              <p className="text-gray-600 mb-2">
                Thank you for your order!
              </p>
              <p className="text-gray-600 mb-8">
                Your order has been placed successfully and is being processed.
              </p>

              {/* Order Details */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Order Total:</span>
                  <span className="text-lg font-bold text-gray-900">RM {totalPayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Payment Method:</span>
                  <span className="text-sm font-medium text-gray-900">{selectedPayment}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSuccessClose}
                className="w-full bg-[#6B8784] hover:bg-[#5a726f] text-white font-semibold py-3.5 rounded-lg transition-colors"
              >
                View My Orders
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Address Modal */}
      {showNewAddressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowNewAddressModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">New Address</h2>
              <button
                onClick={() => setShowNewAddressModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={(e) => {
              e.preventDefault();
              // Add logic to save new address here
              setShowNewAddressModal(false);
              setShowAddressModal(true);
            }} className="p-6">
              <div className="space-y-4">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={newAddressForm.firstName}
                      onChange={(e) => setNewAddressForm({...newAddressForm, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={newAddressForm.lastName}
                      onChange={(e) => setNewAddressForm({...newAddressForm, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex gap-2">
                  <Select value={newAddressForm.phoneCode} onValueChange={(value) => setNewAddressForm({...newAddressForm, phoneCode: value})}>
                    <SelectTrigger className="w-[100px] !h-[50px] py-2.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+60">+60</SelectItem>
                      <SelectItem value="+65">+65</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                      <SelectItem value="+86">+86</SelectItem>
                      <SelectItem value="+61">+61</SelectItem>
                      <SelectItem value="+81">+81</SelectItem>
                      <SelectItem value="+82">+82</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={newAddressForm.phone}
                    onChange={(e) => setNewAddressForm({...newAddressForm, phone: e.target.value})}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="xxx@gmail.com"
                    value={newAddressForm.email}
                    onChange={(e) => setNewAddressForm({...newAddressForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={newAddressForm.address}
                    onChange={(e) => setNewAddressForm({...newAddressForm, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* State Area Dropdown */}
                <div>
                  <Select value={newAddressForm.stateArea} onValueChange={(value) => setNewAddressForm({...newAddressForm, stateArea: value})}>
                    <SelectTrigger className="w-full !h-[50px] py-2.5">
                      <SelectValue placeholder="State Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Johor Bahru, Johor">Johor Bahru, Johor</SelectItem>
                      <SelectItem value="Kuala Lumpur">Kuala Lumpur</SelectItem>
                      <SelectItem value="Selangor">Selangor</SelectItem>
                      <SelectItem value="Penang">Penang</SelectItem>
                      <SelectItem value="Melaka">Melaka</SelectItem>
                      <SelectItem value="Perak">Perak</SelectItem>
                      <SelectItem value="Negeri Sembilan">Negeri Sembilan</SelectItem>
                      <SelectItem value="Pahang">Pahang</SelectItem>
                      <SelectItem value="Terengganu">Terengganu</SelectItem>
                      <SelectItem value="Kelantan">Kelantan</SelectItem>
                      <SelectItem value="Kedah">Kedah</SelectItem>
                      <SelectItem value="Perlis">Perlis</SelectItem>
                      <SelectItem value="Sabah">Sabah</SelectItem>
                      <SelectItem value="Sarawak">Sarawak</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Confirm Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#6B8784] hover:bg-[#5a726f] text-white font-semibold rounded-lg transition-colors"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
