"use strict";
"use client";

import { useState, useEffect } from 'react';
import {
  Search,
  ChevronRight,
  ShoppingBag,
  CreditCard,
  Truck,
  RotateCcw,
  Package,
  HelpCircle,
  MessageCircle,
  Mail
} from 'lucide-react';

// FAQ Data
const categories = [
  { id: 'all', label: 'All Topics', icon: HelpCircle },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'shipping', label: 'Shipping', icon: Truck },
  { id: 'returns', label: 'Returns', icon: RotateCcw },
  { id: 'product', label: 'Product', icon: Package },
];

const faqData = [
  {
    id: 1,
    category: 'shopping',
    question: "Do I need an account to place an order?",
    answer: "No, you can place an order as a guest. However, creating an account allows you to track your orders, save your shipping details, and view your purchase history."
  },
  {
    id: 2,
    category: 'shopping',
    question: "How do I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order status in your account dashboard."
  },
  {
    id: 3,
    category: 'shopping',
    question: "Can I modify or cancel my order?",
    answer: "We process orders quickly to ensure fast delivery. If you need to make changes, please contact our support team immediately. Once an order has been processed or shipped, it cannot be modified."
  },
  {
    id: 4,
    category: 'payment',
    question: "What is a Payment Gateway?",
    answer: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players."
  },
  {
    id: 5,
    category: 'payment',
    question: "Do I need to pay even when there is no transaction?",
    answer: "No, you do not need to pay whenever there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!"
  },
  {
    id: 6,
    category: 'payment',
    question: "What platforms does the payment gateway support?",
    answer: "Our payment gateway supports all major ecommerce platforms including Shopify, WooCommerce, Magento, and custom-built websites. We also provide SDKs for iOS and Android mobile apps."
  },
  {
    id: 7,
    category: 'payment',
    question: "Does it provide international payments support?",
    answer: "Yes, we support over 100 currencies and allow you to accept payments from customers globally. Automatic currency conversion is handled at competitive exchange rates."
  },
  {
    id: 8,
    category: 'shipping',
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location. You can view the shipping options at checkout."
  },
  {
    id: 9,
    category: 'returns',
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in their original packaging. Please visit our Returns Center to initiate a return. Return shipping costs may apply unless the item is defective."
  },
  {
    id: 10,
    category: 'product',
    question: "Are your products authentic?",
    answer: "Yes, we are an authorized retailer for all the brands we carry. All products are guaranteed to be 100% authentic and come with original manufacturer warranties."
  }
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(4); // Default to "What is a Payment Gateway?" or first item

  // Filter Logic
  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery) return matchesSearch;
    return matchesCategory;
  });

  // Automatically select the first result when filtering
  useEffect(() => {
    if (filteredFaqs.length > 0) {
      // Keep current selection if it's in the filtered list
      const currentStillVisible = filteredFaqs.find(f => f.id === activeQuestionId);
      if (!currentStillVisible) {
        setActiveQuestionId(filteredFaqs[0].id);
      }
    } else {
      setActiveQuestionId(null);
    }
  }, [activeCategory, searchQuery]);

  const activeFaq = faqData.find(f => f.id === activeQuestionId);

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex overflow-x-auto gap-6 mt-6 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap text-sm font-medium pb-2 border-b-2 transition-colors flex items-center gap-2
                  ${activeCategory === cat.id
                    ? 'text-gray-900 border-gray-900'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
              >
                {/* <cat.icon size={14} /> Optional: Hide icons for cleaner look typical of the ref design */}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Question List */}
          <div className="md:col-span-5 lg:col-span-4 space-y-2">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => setActiveQuestionId(faq.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl flex justify-between items-center group transition-all duration-200
                    ${activeQuestionId === faq.id
                      ? 'bg-brand-dark text-white shadow-lg shadow-gray-200 scale-[1.02]'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100' // Added border-transparent to prevent layout shift
                    }`}
                >
                  <span className={`text-sm font-medium pr-4 leading-relaxed ${activeQuestionId === faq.id ? 'text-gray-100' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`flex-shrink-0 transition-transform ${activeQuestionId === faq.id ? 'text-white' : 'text-gray-400 group-hover:translate-x-1'}`}
                  />
                </button>
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No questions found.
              </div>
            )}
          </div>

          {/* Right Column: Answer Detail Panel */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className={`sticky top-48 transition-opacity duration-300 ${activeFaq ? 'opacity-100' : 'opacity-0'}`}>
              {activeFaq && (
                <div className="bg-[#F0F5F4] rounded-2xl p-8 md:p-12 min-h-[400px]">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                    {activeFaq.question}
                  </h2>
                  <div className="prose prose-lg text-gray-600 leading-relaxed">
                    <p>{activeFaq.answer}</p>

                    {/* Placeholder for extra content often found in these layouts */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-sm text-gray-500 italic">
                        Was this answer helpful?
                        <button className="ml-2 text-gray-900 underline font-medium hover:text-brand-teal">Yes</button> •
                        <button className="ml-2 text-gray-900 underline font-medium hover:text-brand-teal">No</button>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Contact CTA */}
        <div className="mt-24 pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">INFORMATION</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              At AIKON, we create smart, innovative tools that make staying connected simple and enjoyable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">NAVIGATION</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button className="hover:text-gray-900">Compare</button></li>
              <li><button className="hover:text-gray-900">AI Assistant</button></li>
              <li><button className="hover:text-gray-900">Products</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">CONTACT US</h3>
            <div className="text-sm text-gray-500 space-y-2">
              <p className="flex items-start justify-center md:justify-start gap-2">
                <span className="flex-shrink-0 mt-1"><RotateCcw size={14} /></span>
                <span>Plaza Low Yat, No 7, Jalan Bintang, Bukit Bintang Central, 55100 Kuala Lumpur</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={14} />
                <span>Aikon888@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
