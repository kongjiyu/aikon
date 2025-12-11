'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { X, Pin, PinOff } from 'lucide-react';
import { iPhoneModels, laptopModels, ComparisonProduct } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// ... imports

type CategoryType = 'phone' | 'laptop' | null;



export default function ComparePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComparePageContent />
    </Suspense>
  );
}

function ComparePageContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);
  const [selectedProducts, setSelectedProducts] = useState<(ComparisonProduct | null)[]>([null, null, null]);
  const [availableProducts, setAvailableProducts] = useState<ComparisonProduct[]>([]);
  const [isPinned, setIsPinned] = useState(false);

  // Load pre-selected products from URL parameters
  useEffect(() => {
    const productsParam = searchParams.get('products');
    if (productsParam) {
      const productIds = productsParam.split(',');

      // Determine category from first product ID
      let category: CategoryType = null;
      let products: ComparisonProduct[] = [];

      if (productIds[0]?.startsWith('iphone')) {
        category = 'phone';
        products = iPhoneModels;
      } else if (productIds[0]?.startsWith('macbook') || productIds[0]?.startsWith('asus') || productIds[0]?.startsWith('dell')) {
        category = 'laptop';
        products = laptopModels;
      }

      if (category) {
        setSelectedCategory(category);
        setAvailableProducts(products);

        // Pre-select the products
        const preSelected: (ComparisonProduct | null)[] = [null, null, null];
        productIds.forEach((id, index) => {
          if (index < 3) {
            const product = products.find(p => p.id === id);
            if (product) {
              preSelected[index] = product;
            }
          }
        });
        setSelectedProducts(preSelected);
      }
    }
  }, [searchParams]);

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    setSelectedProducts([null, null, null]);

    if (category === 'phone') {
      setAvailableProducts(iPhoneModels);
    } else if (category === 'laptop') {
      setAvailableProducts(laptopModels);
    }
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

  const renderSpecificationRow = (label: string, getValue: (product: ComparisonProduct) => string | string[] | undefined) => {
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Compare Products</h1>

          {/* Category Selection */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-gray-700">Select Category:</span>
            <div className="flex gap-3">
              <button
                onClick={() => handleCategorySelect('phone')}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${selectedCategory === 'phone'
                  ? 'bg-[#6B8784] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#6B8784]'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Phones
                </div>
              </button>
              <button
                onClick={() => handleCategorySelect('laptop')}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${selectedCategory === 'laptop'
                  ? 'bg-[#6B8784] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#6B8784]'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Laptops
                </div>
              </button>
            </div>
          </div>

          {!selectedCategory && (
            <p className="text-gray-500 text-sm">Please select a category to start comparing products</p>
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
                    ? 'bg-[#6B8784] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#6B8784]'
                    }`}
                >
                  {isPinned ? (
                    <>
                      <PinOff className="w-4 h-4" />
                      Unpin Products
                    </>
                  ) : (
                    <>
                      <Pin className="w-4 h-4" />
                      Pin Products
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
                  <p className="text-sm text-gray-600">Choose up to 3 products to compare</p>
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
                          <div className="w-32 h-32 mx-auto mb-3 flex items-center justify-center">
                            <Image
                              src={selectedProducts[index]!.image}
                              alt={selectedProducts[index]!.name}
                              width={128}
                              height={128}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {selectedProducts[index]!.name}
                        </h4>
                        <p className="text-[#6B8784] font-bold">
                          RM {selectedProducts[index]!.price.toFixed(2)}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <Select onValueChange={(value) => handleProductSelect(index, value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a model" />
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
            <div className="p-6 bg-[#6B8784] text-white">
              <h2 className="text-xl font-bold">Technical Specifications</h2>
            </div>

            <div className="divide-y divide-gray-200">
              {/* Display Specifications */}
              {selectedProducts.some(p => p?.specifications.display) && (
                <>
                  <div className="p-4 bg-gray-100">
                    <h3 className="font-bold text-gray-900">Display</h3>
                  </div>
                  {renderSpecificationRow('Screen Size', (p) => p.specifications.display?.size)}
                  {renderSpecificationRow('Display Type', (p) => p.specifications.display?.type)}
                  {renderSpecificationRow('Resolution', (p) => p.specifications.display?.resolution)}
                  {renderSpecificationRow('Brightness', (p) => p.specifications.display?.brightness)}
                  {renderSpecificationRow('Refresh Rate', (p) => p.specifications.display?.refreshRate)}
                </>
              )}

              {/* Chip/Processor */}
              {selectedProducts.some(p => p?.specifications.chip || p?.specifications.processor) && (
                <>
                  <div className="p-4 bg-gray-100">
                    <h3 className="font-bold text-gray-900">Performance</h3>
                  </div>
                  {selectedCategory === 'phone' ? (
                    <>
                      {renderSpecificationRow('Chip', (p) => p.specifications.chip?.name)}
                      {renderSpecificationRow('CPU', (p) => p.specifications.chip?.cpu)}
                      {renderSpecificationRow('GPU', (p) => p.specifications.chip?.gpu)}
                    </>
                  ) : (
                    <>
                      {renderSpecificationRow('Processor', (p) => p.specifications.processor?.name)}
                      {renderSpecificationRow('Cores', (p) => p.specifications.processor?.cores)}
                      {renderSpecificationRow('Speed', (p) => p.specifications.processor?.speed)}
                      {renderSpecificationRow('Graphics', (p) => p.specifications.graphics)}
                    </>
                  )}
                </>
              )}

              {/* Memory & Storage */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Memory & Storage</h3>
              </div>
              {selectedCategory === 'laptop' && renderSpecificationRow('Memory (RAM)', (p) => p.specifications.memory)}
              {renderSpecificationRow('Storage Options', (p) => p.specifications.storage)}

              {/* Camera (for phones) */}
              {selectedCategory === 'phone' && selectedProducts.some(p => p?.specifications.camera) && (
                <>
                  <div className="p-4 bg-gray-100">
                    <h3 className="font-bold text-gray-900">Camera</h3>
                  </div>
                  {renderSpecificationRow('Main Camera', (p) => p.specifications.camera?.main)}
                  {renderSpecificationRow('Ultra Wide', (p) => p.specifications.camera?.ultraWide)}
                  {renderSpecificationRow('Telephoto', (p) => p.specifications.camera?.telephoto)}
                  {renderSpecificationRow('Front Camera', (p) => p.specifications.camera?.front)}
                </>
              )}

              {/* Battery */}
              {selectedProducts.some(p => p?.specifications.battery) && (
                <>
                  <div className="p-4 bg-gray-100">
                    <h3 className="font-bold text-gray-900">Battery Life</h3>
                  </div>
                  {renderSpecificationRow('Video Playback', (p) => p.specifications.battery?.videoPlayback)}
                  {selectedCategory === 'phone' && renderSpecificationRow('Audio Playback', (p) => p.specifications.battery?.audioPlayback)}
                </>
              )}

              {/* Connectivity */}
              {renderSpecificationRow('Connectivity', (p) => p.specifications.connectivity)}

              {/* Dimensions & Weight */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Physical Dimensions</h3>
              </div>
              {renderSpecificationRow('Dimensions (H × W × D)', (p) =>
                p.specifications.dimensions ?
                  `${p.specifications.dimensions.height} × ${p.specifications.dimensions.width} × ${p.specifications.dimensions.depth}` :
                  undefined
              )}
              {renderSpecificationRow('Weight', (p) => p.specifications.dimensions?.weight)}

              {/* Operating System */}
              {renderSpecificationRow('Operating System', (p) => p.specifications.os)}

              {/* Colors */}
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-gray-900">Available Colors</h3>
              </div>
              {renderSpecificationRow('Color Options', (p) => p.colors)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
