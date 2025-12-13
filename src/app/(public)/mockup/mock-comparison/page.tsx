'use client';

import { useState } from 'react';
import { X, Pin, PinOff } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoryType = 'option1' | 'option2' | null;

interface MockProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  specs: {
    spec1: string;
    spec2: string;
    spec3: string;
    spec4: string;
    spec5: string;
    spec6: string;
    spec7: string;
    spec8: string[];
    spec9: string;
    spec10: string;
    spec11: string;
    spec12: string;
  };
}

const mockProducts: MockProduct[] = [
  {
    id: 'product-1',
    name: 'Lorem Ipsum Dolor',
    image: 'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+1',
    price: 9999,
    specs: {
      spec1: '0.0" Lorem Ipsum',
      spec2: '0000 x 0000',
      spec3: '000 Lorem',
      spec4: '00 Lorem',
      spec5: '000 Lorem Ipsum',
      spec6: '00 Lorem',
      spec7: '0 Lorem + 0 Dolor',
      spec8: ['00 Lorem', '00 Dolor', '00 Sit'],
      spec9: '0000 Amet',
      spec10: '00.0 Lorem x 00.0 Dolor x 0.00 Sit',
      spec11: '000 Amet',
      spec12: 'Lorem Ipsum v00',
    },
  },
  {
    id: 'product-2',
    name: 'Dolor Sit Amet',
    image: 'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+2',
    price: 9999,
    specs: {
      spec1: '0.0" Dolor Sit',
      spec2: '0000 x 0000',
      spec3: '000 Dolor',
      spec4: '00 Dolor',
      spec5: '000 Dolor Sit',
      spec6: '00 Dolor',
      spec7: '0 Dolor + 0 Sit',
      spec8: ['00 Dolor', '00 Sit', '00 Amet'],
      spec9: '0000 Consectetur',
      spec10: '00.0 Dolor x 00.0 Sit x 0.00 Amet',
      spec11: '000 Consectetur',
      spec12: 'Dolor Sit v00',
    },
  },
  {
    id: 'product-3',
    name: 'Consectetur Adipiscing',
    image: 'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+3',
    price: 9999,
    specs: {
      spec1: '0.0" Consectetur',
      spec2: '0000 x 0000',
      spec3: '000 Consectetur',
      spec4: '00 Adipiscing',
      spec5: '000 Adipiscing',
      spec6: '00 Elit',
      spec7: '0 Sed + 0 Do',
      spec8: ['00 Sed', '00 Do', '00 Eiusmod'],
      spec9: '0000 Tempor',
      spec10: '00.0 Sed x 00.0 Do x 0.00 Eiusmod',
      spec11: '000 Tempor',
      spec12: 'Consectetur v00',
    },
  },
];

export default function MockComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);
  const [selectedProducts, setSelectedProducts] = useState<(MockProduct | null)[]>([null, null, null]);
  const [availableProducts, setAvailableProducts] = useState<MockProduct[]>([]);
  const [isPinned, setIsPinned] = useState(false);

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    setSelectedProducts([null, null, null]);
    setAvailableProducts(mockProducts);
  };

  const handleProductSelect = (index: number, productId: string) => {
    const product = availableProducts.find(p => p.id === productId);
    const newSelected = [...selectedProducts];
    newSelected[index] = product || null;
    setSelectedProducts(newSelected);
  };

  const handleRemoveProduct = (index: number) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = null;
    setSelectedProducts(newSelected);
  };

  const renderSpecificationRow = (label: string, getValue: (product: MockProduct) => string | string[] | undefined) => {
    return (
      <div className="grid grid-cols-4 border-b border-gray-200">
        <div className="p-4 bg-gray-50 font-semibold text-sm text-gray-900">
          {label}
        </div>
        {selectedProducts.map((product, index) => (
          <div key={index} className="p-4 text-sm text-gray-700">
            {product ? (
              Array.isArray(getValue(product)) ? (
                <ul className="space-y-1">
                  {(getValue(product) as string[]).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              ) : (
                getValue(product) || '-'
              )
            ) : (
              '-'
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 grayscale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Compare Products</h1>

          {/* Category Selection */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-gray-700">Select Category:</span>
            <div className="flex gap-3">
              <button
                onClick={() => handleCategorySelect('option1')}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${selectedCategory === 'option1'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-700'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Lorem Ipsum
                </div>
              </button>
              <button
                onClick={() => handleCategorySelect('option2')}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${selectedCategory === 'option2'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-700'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Dolor Sit
                </div>
              </button>
            </div>
          </div>

          {!selectedCategory && (
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          )}
        </div>

        {/* Product Selection Cards */}
        {selectedCategory && (
          <>
            {/* Pin Toggle Button */}
            {selectedProducts.some(p => p !== null) && (
              <div className="flex justify-end mb-3">
                <button
                  onClick={() => setIsPinned(!isPinned)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${isPinned
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-700'
                    }`}
                >
                  {isPinned ? (
                    <>
                      <PinOff className="w-4 h-4" />
                      Lorem Ipsum
                    </>
                  ) : (
                    <>
                      <Pin className="w-4 h-4" />
                      Lorem Ipsum
                    </>
                  )}
                </button>
              </div>
            )}

            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 mb-8 ${isPinned ? 'sticky top-40 z-40' : ''}`}>
              <div className="grid grid-cols-4">
                {/* Labels Column */}
                <div className="p-6 bg-gray-50 border-r border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Models</h3>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>

                {/* Product Selection Slots */}
                {[0, 1, 2].map((index) => (
                  <div key={index} className="p-6 border-r border-gray-200 last:border-r-0">
                    {selectedProducts[index] ? (
                      <div className="text-center">
                        <div className="relative mb-4">
                          <button
                            onClick={() => handleRemoveProduct(index)}
                            className="absolute -top-2 -right-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer z-10"
                            aria-label="Remove product"
                          >
                            <X className="w-5 h-5" />
                          </button>
                          <div className="w-32 h-32 mx-auto mb-3 flex items-center justify-center bg-gray-200 rounded">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {selectedProducts[index]!.name}
                        </h4>
                        <p className="text-gray-700 font-bold">
                          RM {selectedProducts[index]!.price.toFixed(2)}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <Select onValueChange={(value) => handleProductSelect(index, value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Lorem ipsum dolor" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableProducts.map((product) => (
                              <SelectItem key={product.id} value={product.id}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Specifications Comparison Table */}
        {selectedCategory && selectedProducts.some(p => p !== null) && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 bg-gray-700 text-white">
              <h2 className="text-xl font-bold">Technical Specifications</h2>
            </div>

            <div className="divide-y divide-gray-200">
              {/* Display Specifications */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Lorem Ipsum</h3>
              </div>
              {renderSpecificationRow('Lorem Ipsum', (p) => p.specs.spec1)}
              {renderSpecificationRow('Dolor Sit', (p) => p.specs.spec2)}
              {renderSpecificationRow('Amet Consectetur', (p) => p.specs.spec3)}
              {renderSpecificationRow('Adipiscing Elit', (p) => p.specs.spec4)}

              {/* Performance Specifications */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Dolor Sit Amet</h3>
              </div>
              {renderSpecificationRow('Sed Do Eiusmod', (p) => p.specs.spec5)}
              {renderSpecificationRow('Tempor Incididunt', (p) => p.specs.spec6)}

              {/* Camera Specifications */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Consectetur Adipiscing</h3>
              </div>
              {renderSpecificationRow('Ut Labore', (p) => p.specs.spec7)}
              {renderSpecificationRow('Et Dolore', (p) => p.specs.spec8)}

              {/* Battery & Connectivity */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Magna Aliqua</h3>
              </div>
              {renderSpecificationRow('Ut Enim', (p) => p.specs.spec9)}

              {/* Physical Specifications */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Ad Minim Veniam</h3>
              </div>
              {renderSpecificationRow('Quis Nostrud', (p) => p.specs.spec10)}
              {renderSpecificationRow('Exercitation', (p) => p.specs.spec11)}

              {/* Software */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Ullamco Laboris</h3>
              </div>
              {renderSpecificationRow('Nisi Ut', (p) => p.specs.spec12)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
