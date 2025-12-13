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
import { useRouter } from 'next/navigation';

interface ValidationErrors {
  name?: string;
  description?: string;
  price?: string;
  stock?: string;
  category?: string;
}

export default function AddProductPage() {
  const router = useRouter();

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
        if (!value.trim()) return 'Product name is required';
        if (value.trim().length < 3) return 'Product name must be at least 3 characters';
        if (value.trim().length > 100) return 'Product name must not exceed 100 characters';
        break;
      case 'description':
        if (!value.trim()) return 'Description is required';
        if (value.trim().length < 10) return 'Description must be at least 10 characters';
        if (value.trim().length > 1000) return 'Description must not exceed 1000 characters';
        break;
      case 'price':
        if (!value) return 'Price is required';
        const priceNum = parseFloat(value);
        if (isNaN(priceNum)) return 'Price must be a valid number';
        if (priceNum <= 0) return 'Price must be greater than 0';
        if (priceNum > 999999) return 'Price must not exceed RM 999,999';
        break;
      case 'stock':
        if (!value) return 'Stock quantity is required';
        const stockNum = parseInt(value);
        if (isNaN(stockNum)) return 'Stock must be a valid number';
        if (stockNum < 0) return 'Stock cannot be negative';
        if (stockNum > 99999) return 'Stock must not exceed 99,999 units';
        break;
      case 'category':
        if (!value || value === '') return 'Please select a category';
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
      // Save logic here (would normally call API)
      setShowSuccessModal(true);
    }
  };
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="/admin/products" className="hover:text-brand-dark">Products</Link>
            <ChevronRight size={14} />
            <span>Add New</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/products"
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Save Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Basic Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Basic Details</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="e.g. iPhone 15 Pro Max 256GB Natural Titanium"
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={6}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  onBlur={() => handleBlur('description')}
                  placeholder="Enter detailed product description, specifications, and features..."
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 resize-none ${
                    errors.description ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                  }`}
                />
                {errors.description && touched.description && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Pricing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Base Price <span className="text-red-500">*</span>
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
                      errors.price ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                    }`}
                  />
                </div>
                {errors.price && touched.price && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                    {errors.price}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Discount Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500 text-sm font-medium">RM</span>
                  <input 
                    type="number" 
                    value={formData.discountPrice}
                    onChange={(e) => handleInputChange('discountPrice', e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-brand-dark focus:ring-brand-teal" />
                  <span className="text-sm text-gray-600">Charge tax on this product</span>
                </label>
              </div>
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Inventory</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
                <input 
                  type="text" 
                  value={formData.sku}
                  onChange={(e) => handleInputChange('sku', e.target.value)}
                  placeholder="e.g. IPH-15-PRO-MAX-256"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode</label>
                <input 
                  type="text" 
                  value={formData.barcode}
                  onChange={(e) => handleInputChange('barcode', e.target.value)}
                  placeholder="ISBN, UPC, GTIN, etc."
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  value={formData.stock}
                  onChange={(e) => handleInputChange('stock', e.target.value)}
                  onBlur={() => handleBlur('stock')}
                  placeholder="0"
                  min="0"
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                    errors.stock ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                  }`}
                />
                {errors.stock && touched.stock && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Images</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500 group-hover:text-brand-dark transition-colors">
                <UploadCloud size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Click to upload image</p>
              <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Organization</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => {
                    handleInputChange('category', value);
                    handleBlur('category');
                  }}
                >
                  <SelectTrigger className={`w-full ${
                    errors.category ? 'border-red-300 focus:ring-red-200' : ''
                  }`}>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphones">Smartphones</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="tablets">Tablets</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="wearables">Wearables</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="cameras">Cameras</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && touched.category && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                    {errors.category}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <Select defaultValue="published">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="Add tags..."
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                    New Arrival <button className="hover:text-red-500"><X size={12} /></button>
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                    Best Seller <button className="hover:text-red-500"><X size={12} /></button>
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
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Added Successfully! 🎉</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Your product <span className="font-semibold text-brand-dark">{formData.name}</span> has been created.
                </p>
                <p className="text-xs text-gray-500">
                  The product is now live in your catalog and ready for customers to view.
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => router.push('/admin/products')}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Products
                </button>
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    // Reset form
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
                  className="flex-1 px-4 py-2.5 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Add Another
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
