import Link from 'next/link';
import {
  ChevronRight,
  Printer,
  Download,
  Mail,
  MapPin,
  Phone,
  Package
} from 'lucide-react';

export default function OrderDetailWireframePage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto grayscale">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum Dolor</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="#" className="hover:text-gray-700">Lorem</Link>
            <ChevronRight size={14} />
            <span>#LOREM-0000</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Printer size={18} />
          </button>
          <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Download size={18} />
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <Mail size={16} /> Lorem Ipsum
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Order Info */}
        <div className="lg:col-span-2 space-y-8">

          {/* Order Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Lorem Ipsum Dolor <span className="text-gray-500 font-normal">(0)</span></h3>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                Lorem
              </span>
            </div>
            <div className="divide-y divide-gray-50">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Lorem Ipsum Dolor Sit Amet</h4>
                    <p className="text-sm text-gray-500">Lorem Ipsum</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">RM {i},000.00</p>
                    <p className="text-sm text-gray-500">{i} x RM {i}00.00</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-white border-t border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 text-lg">Lorem Ipsum Dolor</h4>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Lorem Ipsum</span>
                <span>(00%) - RM 000.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Lorem</span>
                <span>RM 00.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ipsum</span>
                <span>+ RM 000.00</span>
              </div>
              <div className="pt-4 border-t border-gray-100 border-dashed flex justify-between items-baseline">
                <span className="text-gray-600 font-medium">Dolor</span>
                <span className="text-gray-900 font-bold text-xl">RM 0,000.00</span>
              </div>
            </div>
          </div>

          {/* Order Timeline Horizontal */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                  <div 
                    className="h-full bg-gray-600 transition-all duration-500"
                    style={{ width: '66%' }}
                  ></div>
                </div>

                {[
                  { label: 'Lorem Ipsum', date: '0000 Lorem 00', status: 'completed' },
                  { label: 'Dolor Sit', date: '0000 Ipsum 00', status: 'completed' },
                  { label: 'Amet Consectetur', date: '0000 Dolor 00', status: 'completed' },
                  { label: 'Adipiscing', date: '0000 Sit 00', status: 'pending' },
                ].map((stage, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      stage.status === 'completed' 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {stage.status === 'completed' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-current"></div>
                      )}
                    </div>
                    <p className={`text-sm font-medium text-center ${
                      stage.status === 'completed' ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {stage.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{stage.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Customer & Address */}
        <div className="space-y-8">

          {/* Customer Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Lorem Ipsum</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Lorem Ipsum Dolor</h4>
                <p className="text-sm text-gray-500">Lorem ID: #LOREM000</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <span>lorem.ipsum@dolor.sit</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>+000-000-0000</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>
            <div className="flex gap-3">
              <MapPin size={20} className="text-gray-400 shrink-0 mt-1" />
              <p className="text-sm text-gray-600 leading-relaxed">
                000 Lorem Ipsum, <br />
                Dolor Sit Amet, XX 00000, <br />
                Consectetur Adipiscing
              </p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-6 bg-gray-300 rounded"></div>
              <span className="text-sm text-gray-900 font-medium">**** **** **** 0000</span>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
            <div className="mt-4 w-full py-2 text-center rounded-lg text-sm font-medium border border-gray-300 text-gray-700 bg-gray-100">
              Lorem
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
