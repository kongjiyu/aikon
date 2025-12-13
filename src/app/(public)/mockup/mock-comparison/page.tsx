'use client';

import { useState } from 'react';
import Image from 'next/image';
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
      <div className="grid grid-cols-4 border-b border-gray-300">
        <div className="p-4 bg-gray-100 font-semibold text-sm text-gray-900">
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
    <div className="min-h-screen bg-gray-100 py-8 grayscale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h1>

          {/* Category Selection */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-gray-700">Lorem Ipsum:</span>
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

          {/* Product Selection Dropdowns */}
          {selectedCategory && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => (
                <div key={index}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lorem #{index + 1}
                  </label>
                  <Select
                    value={selectedProducts[index]?.id || ''}
                    onValueChange={(value) => handleProductSelect(index, value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Lorem ipsum dolor" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableProducts
                        .filter(p => !selectedProducts.some((sp, i) => i !== index && sp?.id === p.id))
                        .map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedCategory && selectedProducts.some(p => p !== null) && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
            {/* Sticky Header */}
            <div className={`${isPinned ? 'sticky top-0 z-10 shadow-md' : ''}`}>
              <div className="grid grid-cols-4 bg-gray-100 border-b-2 border-gray-400">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Lorem Ipsum</h3>
                    <button
                      onClick={() => setIsPinned(!isPinned)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      title={isPinned ? 'Lorem ipsum' : 'Dolor sit'}
                    >
                      {isPinned ? (
                        <PinOff className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Pin className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
                {selectedProducts.map((product, index) => (
                  <div key={index} className="p-4 border-l border-gray-300">
                    {product ? (
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{product.name}</h4>
                            <p className="text-lg font-bold text-gray-800">RM {product.price.toLocaleString()}.00</p>
                          </div>
                          <button
                            onClick={() => handleRemoveProduct(index)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors">
                          Button Text
                        </button>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        Lorem ipsum dolor
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              {/* Display Specifications */}
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold text-gray-900">Lorem Ipsum</h3>
              </div>
              {renderSpecificationRow('Lorem Ipsum', (p) => p.specs.spec1)}
              {renderSpecificationRow('Dolor Sit', (p) => p.specs.spec2)}
              {renderSpecificationRow('Amet Consectetur', (p) => p.specs.spec3)}
              {renderSpecificationRow('Adipiscing Elit', (p) => p.specs.spec4)}

              {/* Performance Specifications */}
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold text-gray-900">Dolor Sit Amet</h3>
              </div>
              {renderSpecificationRow('Sed Do Eiusmod', (p) => p.specs.spec5)}
              {renderSpecificationRow('Tempor Incididunt', (p) => p.specs.spec6)}

              {/* Camera Specifications */}
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold text-gray-900">Consectetur Adipiscing</h3>
              </div>
              {renderSpecificationRow('Ut Labore', (p) => p.specs.spec7)}
              {renderSpecificationRow('Et Dolore', (p) => p.specs.spec8)}

              {/* Battery & Connectivity */}
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold text-gray-900">Magna Aliqua</h3>
              </div>
              {renderSpecificationRow('Ut Enim', (p) => p.specs.spec9)}

              {/* Physical Specifications */}
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold text-gray-900">Ad Minim Veniam</h3>
              </div>
              {renderSpecificationRow('Quis Nostrud', (p) => p.specs.spec10)}
              {renderSpecificationRow('Exercitation', (p) => p.specs.spec11)}

              {/* Software */}
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold text-gray-900">Ullamco Laboris</h3>
              </div>
              {renderSpecificationRow('Nisi Ut', (p) => p.specs.spec12)}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedCategory && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lorem Ipsum Dolor Sit</h3>
              <p className="text-gray-600">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
