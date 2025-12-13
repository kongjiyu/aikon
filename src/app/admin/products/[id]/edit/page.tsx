'use client';

import Link from 'next/link';
import { ChevronRight, Save, Image as ImageIcon, Upload, Trash2, Plus, X, CheckCircle } from 'lucide-react';
import { mockProducts } from '@/lib/mockData';
import { useState, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ValidationErrors {
  name?: string;
  description?: string;
  price?: string;
  stock?: string;
  category?: string;
}

export default function ProductEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  // Form state
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description || '',
    price: product.price.toString(),
    discountPrice: '',
    stock: product.stock.toString(),
    category: product.category,
    tags: '',
  });

  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const [colors, setColors] = useState<string[]>(product.colors || []);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const colorInputRef = useRef<HTMLInputElement>(null);

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

  const handleAddColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    if (!colors.includes(newColor)) {
      setColors([...colors, newColor]);
      setSelectedColor(newColor);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Edit Product</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Link href="/admin/products" className="hover:text-brand-dark">Products</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/products" className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Cancel
          </Link>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">General Information</h3>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                }`}
                placeholder="Enter product name"
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
                rows={5}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                onBlur={() => handleBlur('description')}
                className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                  errors.description ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                }`}
                placeholder="Describe your product in detail"
              />
              {errors.description && touched.description && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Pricing & Inventory</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Base Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">RM</span>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    onBlur={() => handleBlur('price')}
                    className={`w-full pl-12 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                      errors.price ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                    }`}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
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
                  <span className="absolute left-3 top-2 text-gray-500">RM</span>
                  <input
                    type="number"
                    value={formData.discountPrice}
                    onChange={(e) => handleInputChange('discountPrice', e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-12 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SKU</label>
                <input
                  type="text"
                  defaultValue={product.id}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => handleInputChange('stock', e.target.value)}
                  onBlur={() => handleBlur('stock')}
                  className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                    errors.stock ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-teal'
                  }`}
                  placeholder="0"
                  min="0"
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

          {/* Variants Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Variants</h3>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Product Colors</label>
              <div className="flex flex-wrap gap-4">
                {colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-brand-dark ring-2 ring-brand-teal/20 scale-110' : 'border-gray-200 hover:scale-105'
                      }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
                <button
                  onClick={() => colorInputRef.current?.click()}
                  className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal transition-all"
                >
                  <Plus size={18} />
                </button>
                <input
                  type="color"
                  ref={colorInputRef}
                  onChange={handleAddColor}
                  className="absolute opacity-0 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900">Product Image</h3>
              <button className="text-sm text-brand-teal font-medium hover:underline">Add Media</button>
            </div>

            {/* Main Preview */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-center justify-center min-h-[250px] relative group">
              {selectedImage ? (
                <img src={selectedImage} alt={product.name} className="max-w-full max-h-[250px] object-contain" />
              ) : (
                <div className="text-gray-400 flex flex-col items-center">
                  <ImageIcon size={48} className="mb-2 opacity-50" />
                  <span className="text-sm">No image selected</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images && product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 p-1 relative ${selectedImage === img ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-transparent hover:border-gray-200'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}

              {/* Upload Placeholder */}
              <button className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                <Upload size={20} />
                <span className="text-[10px] mt-1 font-medium">Add</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-4">Category</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Product Category <span className="text-red-500">*</span>
              </label>
              <Select 
                value={formData.category.toLowerCase()} 
                onValueChange={(value) => {
                  handleInputChange('category', value.charAt(0).toUpperCase() + value.slice(1));
                  handleBlur('category');
                }}
              >
                <SelectTrigger className={`w-full ${
                  errors.category ? 'border-red-300 focus:ring-red-200' : ''
                }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smartphones">Smartphones</SelectItem>
                  <SelectItem value="laptops">Laptops</SelectItem>
                  <SelectItem value="tablets">Tablets</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="wearables">Wearables</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && touched.category && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                  {errors.category}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Product Tags</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                placeholder="e.g. New Arrival, Best Seller"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Changes Saved Successfully! 🎉</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Your product <span className="font-semibold text-brand-dark">{formData.name}</span> has been updated.
                </p>
                <p className="text-xs text-gray-500">
                  All changes have been saved and are now live in your catalog.
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
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 px-4 py-2.5 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Continue Editing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
