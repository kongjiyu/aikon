'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Alexa',
    lastName: 'Rawles',
    gender: 'Female',
    email: 'alexarawles@gmail.com',
    phoneCode: '+60',
    phone: '12 223 3344'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving profile data:', formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">PROFILE</h1>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {!isEditing && (
          <div>
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <Image src="/images/profileIcon.svg" alt="Profile" width={96} height={96} className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{formData.firstName} {formData.lastName}</h2>
                    <p className="text-gray-600">{formData.email}</p>
                  </div>
                </div>
                <button onClick={() => setIsEditing(true)} className="px-8 py-2.5 bg-[#6B8784] hover:bg-[#5a726f] text-white font-medium rounded-lg transition-colors">Edit</button>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">My Details</h3>
              <div className="space-y-5 max-w-2xl">
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">First Name</label>
                  <input type="text" value={formData.firstName} disabled className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Last Name</label>
                  <input type="text" value={formData.lastName} disabled className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Gender</label>
                  <input type="text" value={formData.gender} disabled className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Email</label>
                  <input type="email" value={formData.email} disabled className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Phone Number</label>
                  <input type="tel" value={`${formData.phoneCode} ${formData.phone}`} disabled className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" />
                </div>
              </div>
            </div>
          </div>
        )}
        {isEditing && (
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 p-8 border-r border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Edit Details</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">First Name</label>
                  <input type="text" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Gender</label>
                  <div className="flex-1 flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={(e) => handleInputChange('gender', e.target.value)} className="w-4 h-4 text-[#6B8784] focus:ring-[#6B8784] border-gray-300" /><span className="text-gray-700">Male</span></label>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={(e) => handleInputChange('gender', e.target.value)} className="w-4 h-4 text-[#6B8784] focus:ring-[#6B8784] border-gray-300" /><span className="text-gray-700">Female</span></label>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={(e) => handleInputChange('gender', e.target.value)} className="w-4 h-4 text-[#6B8784] focus:ring-[#6B8784] border-gray-300" /><span className="text-gray-700">Other</span></label>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent" />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right">Phone Number</label>
                  <div className="flex-1 flex gap-2">
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
                      </SelectContent>
                    </Select>
                    <input type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button onClick={handleCancel} className="w-32 px-8 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
                <button onClick={handleSave} className="w-32 px-8 py-2.5 bg-[#6B8784] hover:bg-[#5a726f] text-white font-medium rounded-lg transition-colors">Save</button>
              </div>
            </div>
            <div className="p-8 bg-gray-50 flex flex-col items-center justify-start">
              <div className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                  <Image src="/images/profileIcon.svg" alt="Profile" width={128} height={128} className="object-cover" />
                </div>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-white transition-colors mb-4">Select Image</button>
                <p className="text-xs text-gray-500">File size: maximum 1 MB</p>
                <p className="text-xs text-gray-500">File extension: JPEG, PNG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
