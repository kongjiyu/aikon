'use client';

import Link from 'next/link';
import { 
  ChevronRight, 
  UploadCloud, 
  X, 
  Image as ImageIcon,
  CheckCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

interface ValidationErrors {
  name?: string;
  description?: string;
  price?: string;
  stock?: string;
  category?: string;
}

export default function ProductsAddWireframePage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountPrice: '',
    stock: '',
    category: '',
    tags: '',
    sku: '',
    barcode: '',
  });

  // Validation state
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Validation functions
  const validateField = (fieldName: string, value: string): string | undefined => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Lorem ipsum dolor sit amet';
        if (value.trim().length < 3) return 'Lorem ipsum dolor sit amet consectetur';
        if (value.trim().length > 100) return 'Lorem ipsum dolor sit amet consectetur adipiscing';
        break;
      case 'description':
        if (!value.trim()) return 'Lorem ipsum dolor sit amet';
        if (value.trim().length < 10) return 'Lorem ipsum dolor sit amet consectetur';
        if (value.trim().length > 1000) return 'Lorem ipsum dolor sit amet consectetur adipiscing';
        break;
      case 'price':
        if (!value) return 'Lorem ipsum dolor sit amet';
        const priceNum = parseFloat(value);
        if (isNaN(priceNum)) return 'Lorem ipsum dolor sit amet consectetur';
        if (priceNum <= 1) return 'Lorem ipsum dolor sit amet consectetur';
        if (priceNum > 999999) return 'Lorem ipsum dolor sit amet consectetur adipiscing';
        break;
      case 'stock':
        if (!value) return 'Lorem ipsum dolor sit amet';
        const stockNum = parseInt(value);
        if (isNaN(stockNum)) return 'Lorem ipsum dolor sit amet consectetur';
        if (stockNum < 1) return 'Lorem ipsum dolor sit amet consectetur';
        if (stockNum > 99999) return 'Lorem ipsum dolor sit amet consectetur adipiscing';
        break;
      case 'category':
        if (!value || value === '') return 'Lorem ipsum dolor sit amet';
        break;
    }
    return undefined;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    newErrors.name = validateField('name', formData.name);
    newErrors.description = validateField('description', formData.description);
    newErrors.price = validateField('price', formData.price);
    newErrors.stock = validateField('stock', formData.stock);
    newErrors.category = validateField('category', formData.category);

    setErrors(newErrors);
    setTouched({
      name: true,
      description: true,
      price: true,
      stock: true,
      category: true,
    });

    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSave = () => {
    if (validateForm()) {
      setShowSuccessModal(true);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto grayscale">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum Dolor</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="/admin/products" className="hover:text-gray-700">Lorem Ipsum</Link>
            <ChevronRight size={14} />
            <span>Lorem Ipsum</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/products"
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Lorem
          </Link>
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Lorem Ipsum
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Basic Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum Dolor <span className="text-gray-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-gray-400 focus:ring-gray-300' : 'border-gray-200 focus:ring-gray-300'
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum <span className="text-gray-500">*</span>
                </label>
                <textarea 
                  rows={6}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  onBlur={() => handleBlur('description')}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do..."
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 resize-none ${
                    errors.description ? 'border-gray-400 focus:ring-gray-300' : 'border-gray-200 focus:ring-gray-300'
                  }`}
                />
                {errors.description && touched.description && (
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum <span className="text-gray-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500 text-sm font-medium">RM</span>
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    onBlur={() => handleBlur('price')}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className={`w-full pl-10 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                      errors.price ? 'border-gray-400 focus:ring-gray-300' : 'border-gray-200 focus:ring-gray-300'
                    }`}
                  />
                </div>
                {errors.price && touched.price && (
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
                    {errors.price}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Lorem Ipsum Dolor</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500 text-sm font-medium">RM</span>
                  <input 
                    type="number" 
                    value={formData.discountPrice}
                    onChange={(e) => handleInputChange('discountPrice', e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-gray-700 focus:ring-gray-300" />
                  <span className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur</span>
                </label>
              </div>
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lorem</label>
                <input 
                  type="text" 
                  value={formData.sku}
                  onChange={(e) => handleInputChange('sku', e.target.value)}
                  placeholder="Lorem ipsum dolor"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lorem Ipsum</label>
                <input 
                  type="text" 
                  value={formData.barcode}
                  onChange={(e) => handleInputChange('barcode', e.target.value)}
                  placeholder="Lorem ipsum dolor sit"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum <span className="text-gray-500">*</span>
                </label>
                <input 
                  type="number" 
                  value={formData.stock}
                  onChange={(e) => handleInputChange('stock', e.target.value)}
                  onBlur={() => handleBlur('stock')}
                  placeholder="0"
                  min="0"
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                    errors.stock ? 'border-gray-400 focus:ring-gray-300' : 'border-gray-200 focus:ring-gray-300'
                  }`}
                />
                {errors.stock && touched.stock && (
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
                    {errors.stock}
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Media & Organization */}
        <div className="space-y-8">
          
          {/* Media */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500 group-hover:text-gray-700 transition-colors">
                <UploadCloud size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Lorem ipsum dolor sit</p>
              <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 relative group cursor-pointer">
                  <ImageIcon size={20} />
                  <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <X className="text-white" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lorem Ipsum <span className="text-gray-500">*</span>
                </label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => {
                    handleInputChange('category', value);
                    handleBlur('category');
                  }}
                >
                  <SelectTrigger className={`w-full ${
                    errors.category ? 'border-gray-400 focus:ring-gray-300' : ''
                  }`}>
                    <SelectValue placeholder="Lorem Ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lorem1">Lorem Ipsum</SelectItem>
                    <SelectItem value="lorem2">Lorem Dolor</SelectItem>
                    <SelectItem value="lorem3">Lorem Sit</SelectItem>
                    <SelectItem value="lorem4">Lorem Amet</SelectItem>
                    <SelectItem value="lorem5">Lorem Consectetur</SelectItem>
                    <SelectItem value="lorem6">Lorem Adipiscing</SelectItem>
                    <SelectItem value="lorem7">Lorem Elit</SelectItem>
                    <SelectItem value="lorem8">Lorem Sed</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && touched.category && (
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
                    {errors.category}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lorem</label>
                <Select defaultValue="published">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Lorem Ipsum</SelectItem>
                    <SelectItem value="draft">Lorem</SelectItem>
                    <SelectItem value="scheduled">Lorem Dolor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lorem</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="Lorem ipsum..."
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                    Lorem Ipsum <button className="hover:text-gray-700"><X size={12} /></button>
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                    Lorem Dolor <button className="hover:text-gray-700"><X size={12} /></button>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <CheckCircle size={32} className="text-gray-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lorem Ipsum Dolor Sit Amet! 🎉</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Lorem ipsum <span className="font-semibold text-gray-700">{formData.name || 'Lorem Ipsum'}</span> dolor sit amet.
                </p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Lorem Ipsum Dolor
                </button>
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    setFormData({
                      name: '',
                      description: '',
                      price: '',
                      discountPrice: '',
                      stock: '',
                      category: '',
                      tags: '',
                      sku: '',
                      barcode: '',
                    });
                    setErrors({});
                    setTouched({});
                  }}
                  className="flex-1 px-4 py-2.5 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
