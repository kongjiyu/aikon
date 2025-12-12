'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock address data
const mockAddresses = [
  {
    id: 1,
    firstName: 'chia',
    lastName: 'yx',
    phoneCode: '+60',
    phone: '18 999 9133',
    email: 'ahmad.firdaus@example.my',
    address: '12, Jalan Kempas 3/4, Taman Kempas',
    stateArea: 'Johor Bahru, Johor',
    isDefault: true
  },
  {
    id: 2,
    firstName: 'chia',
    lastName: 'yx',
    phoneCode: '+60',
    phone: '18 999 9133',
    email: 'ahmad.firdaus@example.my',
    address: '12, Jalan Kempas 3/4, Taman Kempas',
    stateArea: 'Johor Bahru, Johor',
    isDefault: false
  },
  {
    id: 3,
    firstName: 'chia',
    lastName: 'yx',
    phoneCode: '+60',
    phone: '18 999 9133',
    email: 'ahmad.firdaus@example.my',
    address: '12, Jalan Kempas 3/4, Taman Kempas',
    stateArea: 'Johor Bahru, Johor',
    isDefault: false
  }
];

interface AddressForm {
  id?: number;
  firstName: string;
  lastName: string;
  phoneCode: string;
  phone: string;
  email: string;
  address: string;
  stateArea: string;
  isDefault: boolean;
}

export default function AddressBookPage() {
  const router = useRouter();
  const [addresses, setAddresses] = useState(mockAddresses);
  const [showNewAddressModal, setShowNewAddressModal] = useState(false);
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState<AddressForm | null>(null);
  const [formData, setFormData] = useState<AddressForm>({
    firstName: '',
    lastName: '',
    phoneCode: '+60',
    phone: '',
    email: '',
    address: '',
    stateArea: '',
    isDefault: false
  });

  const handleEdit = (id: number) => {
    const addressToEdit = addresses.find(addr => addr.id === id);
    if (addressToEdit) {
      setEditingAddress(addressToEdit);
      setFormData(addressToEdit);
      setShowEditAddressModal(true);
    }
  };

  const handleAddNew = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneCode: '+60',
      phone: '',
      email: '',
      address: '',
      stateArea: '',
      isDefault: false
    });
    setShowNewAddressModal(true);
  };

  const handleSubmitNew = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress = {
      ...formData,
      id: addresses.length + 1
    };
    setAddresses([...addresses, newAddress]);
    setShowNewAddressModal(false);
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id ? { ...formData, id: editingAddress.id } : addr
      ));
      setShowEditAddressModal(false);
      setEditingAddress(null);
    }
  };

  const handleInputChange = (field: keyof AddressForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Addresses</h1>
          <button
            onClick={handleAddNew}
            className="px-6 py-2.5 bg-[#6B8784] hover:bg-[#5a726f] text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            Add New Address
          </button>
        </div>

        {/* Address Cards */}
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Name and Phone */}
                  <div className="mb-3">
                    <p className="text-gray-900 font-medium">
                      {address.firstName}{address.lastName} | {address.phoneCode} {address.phone}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="mb-2">
                    <p className="text-gray-900">{address.email}</p>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="text-gray-700">{address.address}, {address.stateArea}</p>
                  </div>
                </div>

                {/* Right Side - Default Badge and Edit Button */}
                <div className="flex flex-col items-end gap-3 ml-6">
                  {address.isDefault && (
                    <span className="text-red-500 font-medium text-sm">
                      Default
                    </span>
                  )}
                  <button
                    onClick={() => handleEdit(address.id)}
                    className="px-8 py-2 bg-[#6B8784] hover:bg-[#5a726f] text-white font-medium rounded-lg transition-colors"
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End of List */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-400 text-sm">End Of List</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
      </div>

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
            <form onSubmit={handleSubmitNew} className="p-6">
              <div className="space-y-4">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex gap-2">
                  <Select value={formData.phoneCode} onValueChange={(value) => handleInputChange('phoneCode', value)}>
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
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="xxx@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* State Area Dropdown */}
                <div>
                  <Select value={formData.stateArea} onValueChange={(value) => handleInputChange('stateArea', value)}>
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

      {/* Edit Address Modal */}
      {showEditAddressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowEditAddressModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Edit Address</h2>
              <button
                onClick={() => setShowEditAddressModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmitEdit} className="p-6">
              <div className="space-y-4">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex gap-2">
                  <Select 
                    key={`edit-phone-${editingAddress?.id}`}
                    value={formData.phoneCode} 
                    onValueChange={(value) => handleInputChange('phoneCode', value)}
                  >
                    <SelectTrigger className="w-[100px] !h-[50px] py-2.5">
                      <SelectValue placeholder="+60" />
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
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="xxx@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                    required
                  />
                </div>

                {/* State Area Dropdown */}
                <div>
                  <Select value={formData.stateArea} onValueChange={(value) => handleInputChange('stateArea', value)}>
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
    </>
  );
}
