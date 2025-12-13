"use client";

import { useState, useMemo } from 'react';
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar as CalendarIcon,
  Ticket,
  Copy,
  Trash2,
  Edit,
  X,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

type Coupon = {
  id: string;
  code: string;
  name: string;
  discount: string;
  type: string;
  used: number;
  limit: number | string;
  status: 'Active' | 'Expired' | 'Scheduled';
  date: string;
};

export default function CouponsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [couponToDelete, setCouponToDelete] = useState<string | null>(null);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [codeError, setCodeError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [expiryDate, setExpiryDate] = useState<Date | undefined>(undefined);
  
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    discountType: 'percent',
    discountValue: '',
    usageLimit: '',
    expiryDate: '',
    status: 'Active'
  });

  const [coupons, setCoupons] = useState<Coupon[]>([
    { id: '1', code: 'SUMMER2025', name: 'Summer Sale', discount: '20% OFF', type: 'Percent', used: 450, limit: 1000, status: 'Active', date: 'Dec 31, 2025' },
    { id: '2', code: 'WELCOME10', name: 'New User Promo', discount: 'RM10.00', type: 'Fixed', used: 890, limit: '∞', status: 'Active', date: 'No Expiry' },
    { id: '3', code: 'FLASH50', name: 'Flash Deal', discount: '50% OFF', type: 'Percent', used: 100, limit: 100, status: 'Expired', date: 'Oct 01, 2025' },
    { id: '4', code: 'FREESHIP', name: 'Free Shipping', discount: 'Free Ship', type: 'Shipping', used: 230, limit: 500, status: 'Active', date: 'Jan 15, 2026' },
    { id: '5', code: 'VIPMEMBER', name: 'VIP Exclusive', discount: '15% OFF', type: 'Percent', used: 45, limit: 200, status: 'Scheduled', date: 'Starts Dec 20' },
  ]);

  // Filter and search coupons
  const filteredCoupons = useMemo(() => {
    return coupons.filter(coupon => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        coupon.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coupon.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Status filter
      const matchesStatus = statusFilter === 'all' || coupon.status === statusFilter;
      
      // Type filter
      const matchesType = typeFilter === 'all' || coupon.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [coupons, searchQuery, statusFilter, typeFilter]);

  const validateCouponCode = (code: string): string => {
    if (!code.trim()) {
      return 'Coupon code is required';
    }
    if (code.length < 3) {
      return 'Coupon code must be at least 3 characters';
    }
    if (code.length > 20) {
      return 'Coupon code must not exceed 20 characters';
    }
    if (!/^[A-Z0-9]+$/.test(code)) {
      return 'Coupon code must only contain uppercase letters and numbers';
    }
    if (/\s/.test(code)) {
      return 'Coupon code cannot contain spaces';
    }
    return '';
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'code') {
      const error = validateCouponCode(value);
      setCodeError(error);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate coupon code
    const error = validateCouponCode(formData.code);
    if (error) {
      setCodeError(error);
      return;
    }
    
    // Add API call here to create coupon
    console.log('Creating coupon:', formData);
    setShowCreateModal(false);
    setSuccessMessage('Coupon created successfully! 🎉');
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      code: '',
      name: '',
      discountType: 'percent',
      discountValue: '',
      usageLimit: '',
      expiryDate: '',
      status: 'Active'
    });
    setCodeError('');
    setExpiryDate(undefined);
  };

  const handleEdit = (coupon: Coupon) => {
    setEditingCoupon(coupon);
    setFormData({
      code: coupon.code,
      name: coupon.name,
      discountType: coupon.type.toLowerCase(),
      discountValue: coupon.discount.replace(/[^0-9.]/g, ''),
      usageLimit: typeof coupon.limit === 'number' ? coupon.limit.toString() : '',
      expiryDate: '',
      status: coupon.status
    });
    setShowEditModal(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update coupon in the list
    setCoupons(prev => prev.map(c => 
      c.id === editingCoupon?.id 
        ? { ...c, name: formData.name, status: formData.status as any }
        : c
    ));
    
    setShowEditModal(false);
    setSuccessMessage('Your changes have been saved! 👍');
    setShowSuccessModal(true);
    setEditingCoupon(null);
  };

  const handleDeleteClick = (couponId: string) => {
    setCouponToDelete(couponId);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = () => {
    if (couponToDelete) {
      setCoupons(prev => prev.filter(c => c.id !== couponToDelete));
      setShowDeleteConfirm(false);
      setCouponToDelete(null);
      setSuccessMessage('Coupon removed successfully! ✨');
      setShowSuccessModal(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coupon Codes</h1>
          <p className="text-sm text-gray-500 mt-1">Manage discount vouchers and promo codes</p>
        </div>
        <Button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Create New Coupon
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Active Coupons</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">24</h3>
          </div>
          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
            <Ticket size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Used</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">1,203</h3>
          </div>
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Copy size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Expired</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">8</h3>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
            <CalendarIcon size={20} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Controls */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by code or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#748E8B]/50 transition-shadow shadow-sm"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
            <div className="flex items-center gap-3">
              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Expired">Expired</SelectItem>
                  <SelectItem value="Scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Percent">Percentage</SelectItem>
                  <SelectItem value="Fixed">Fixed Amount</SelectItem>
                  <SelectItem value="Shipping">Free Shipping</SelectItem>
                </SelectContent>
              </Select>

              {/* Filter Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter size={16} />
                    More Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('all');
                    setTypeFilter('all');
                  }}>
                    Clear All Filters
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={statusFilter === 'Active'}
                    onCheckedChange={(checked) => setStatusFilter(checked ? 'Active' : 'all')}
                  >
                    Active Only
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={statusFilter === 'Expired'}
                    onCheckedChange={(checked) => setStatusFilter(checked ? 'Expired' : 'all')}
                  >
                    Expired Only
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* Results Count */}
          {(searchQuery || statusFilter !== 'all' || typeFilter !== 'all') && (
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filteredCoupons.length}</span> of <span className="font-semibold">{coupons.length}</span> coupons
            </div>
          )}
        </div>

        {/* Table */}
        <div className="px-6 py-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-brand-sage">
                <tr>
                  <th className="px-4 py-3 font-medium">Code / Name</th>
                  <th className="px-4 py-3 font-medium">Discount</th>
                  <th className="px-4 py-3 font-medium">Usage</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Valid Until</th>
                  <th className="px-4 py-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredCoupons.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <Filter className="text-gray-400" size={32} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Vouchers Found</h3>
                        <p className="text-sm text-gray-500 max-w-sm">
                          We couldn't find any vouchers matching your criteria. Try adjusting your search or filter settings.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredCoupons.map((coupon) => (
                    <tr key={coupon.id} className="hover:bg-gray-50 group transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 border border-dashed border-gray-300 bg-gray-50 px-2 py-0.5 rounded w-fit mb-1">{coupon.code}</span>
                        <span className="text-xs text-gray-400">{coupon.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-medium text-gray-900">{coupon.discount}</span>
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{coupon.type}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${coupon.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} style={{ width: typeof coupon.limit === 'number' ? `${(coupon.used / coupon.limit) * 100}%` : '50%' }}></div>
                        </div>
                        <span className="text-xs">{coupon.used} / {coupon.limit}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${coupon.status === 'Active' ? 'bg-green-50 text-green-600' :
                          coupon.status === 'Expired' ? 'bg-red-50 text-red-600' :
                            'bg-yellow-50 text-yellow-600'
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${coupon.status === 'Active' ? 'bg-green-500' :
                            coupon.status === 'Expired' ? 'bg-red-500' :
                              'bg-yellow-500'
                          }`}></span>
                        {coupon.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-500">
                      {coupon.date}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEdit(coupon)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(coupon.id)}
                          className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            <ChevronLeft size={16} /> Previous
          </button>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 text-white text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">5</button>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Create New Coupon Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowCreateModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Create New Coupon</h2>
                <p className="text-sm text-gray-500 mt-1">Add a new discount coupon for your customers</p>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="space-y-5">
                {/* Coupon Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => handleInputChange('code', e.target.value.toUpperCase())}
                    className={`w-full px-4 py-2.5 border ${codeError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-800'} rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent`}
                    placeholder="e.g., SUMMER2025"
                    required
                  />
                  {codeError && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertTriangle size={12} />
                      {codeError}
                    </p>
                  )}
                  {!codeError && (
                    <p className="text-xs text-gray-500 mt-1">Use uppercase letters and numbers only (3-20 characters)</p>
                  )}
                </div>

                {/* Coupon Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="e.g., Summer Sale"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">A friendly name to identify this coupon</p>
                </div>

                {/* Discount Type & Value */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Type <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.discountType} onValueChange={(value) => handleInputChange('discountType', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percent">Percentage (%)</SelectItem>
                        <SelectItem value="fixed">Fixed Amount (RM)</SelectItem>
                        <SelectItem value="shipping">Free Shipping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Value {formData.discountType !== 'shipping' && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="number"
                      value={formData.discountValue}
                      onChange={(e) => handleInputChange('discountValue', e.target.value)}
                      className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent ${
                        formData.discountType === 'shipping' 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-white focus:ring-gray-800'
                      }`}
                      placeholder={formData.discountType === 'percent' ? '20' : formData.discountType === 'fixed' ? '10' : 'N/A'}
                      min="0"
                      disabled={formData.discountType === 'shipping'}
                      required={formData.discountType !== 'shipping'}
                    />
                  </div>
                </div>

                {/* Usage Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usage Limit
                  </label>
                  <input
                    type="number"
                    value={formData.usageLimit}
                    onChange={(e) => handleInputChange('usageLimit', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="e.g., 1000"
                    min="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty for unlimited usage</p>
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {expiryDate ? format(expiryDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={expiryDate}
                        onSelect={(date) => {
                          setExpiryDate(date);
                          if (date) {
                            handleInputChange('expiryDate', format(date, "yyyy-MM-dd"));
                          } else {
                            handleInputChange('expiryDate', '');
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-gray-500 mt-1">Leave empty if coupon never expires</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  Create Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>

              {/* Success Message */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {successMessage}
              </h3>
              <p className="text-gray-600 mb-6">
                {successMessage.includes('created') && "Your new coupon is now active and ready to share with your customers. Happy selling!"}
                {successMessage.includes('saved') && "All your updates have been applied successfully. Keep up the great work!"}
                {successMessage.includes('removed') && "The coupon has been deleted from your system. Your catalog is up to date!"}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
              >
                Perfect, thanks!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Coupon Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowEditModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Edit Coupon</h2>
                <p className="text-sm text-gray-500 mt-1">Update coupon details and settings</p>
              </div>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleEditSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="space-y-5">
                {/* Coupon Code (Read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    value={formData.code}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1">Coupon code cannot be changed</p>
                </div>

                {/* Coupon Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="e.g., Summer Sale"
                    required
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Expired">Expired</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Usage Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usage Limit
                  </label>
                  <input
                    type="number"
                    value={formData.usageLimit}
                    onChange={(e) => handleInputChange('usageLimit', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="e.g., 1000"
                    min="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty for unlimited usage</p>
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {expiryDate ? format(expiryDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={expiryDate}
                        onSelect={(date) => {
                          setExpiryDate(date);
                          if (date) {
                            handleInputChange('expiryDate', format(date, "yyyy-MM-dd"));
                          } else {
                            handleInputChange('expiryDate', '');
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-gray-500 mt-1">Leave empty if coupon never expires</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowDeleteConfirm(false)}
          ></div>

          {/* Dialog Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6">
              {/* Warning Icon */}
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={24} className="text-red-600" />
              </div>

              {/* Confirmation Message */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Delete this coupon?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                This action cannot be undone. The coupon will be permanently removed from your system.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
