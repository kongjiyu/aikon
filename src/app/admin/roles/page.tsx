'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, X } from 'lucide-react';

export default function AdminProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    name: 'Dealport',
    email: 'Mark@thedesigner.com',
    role: 'Super Administrator'
  });

  const validateEmail = (email: string) => {
    // Check if email is empty
    if (!email || email.trim() === '') {
      setEmailError('Email address is required');
      return false;
    }
    
    // Check if email contains @
    if (!email.includes('@')) {
      setEmailError('Email must contain an @ symbol');
      return false;
    }
    
    // Check if there's text before @
    const parts = email.split('@');
    if (parts[0].length === 0) {
      setEmailError('Email must have a username before the @ symbol');
      return false;
    }
    
    // Check if there's a domain after @
    if (parts.length < 2 || parts[1].length === 0) {
      setEmailError('Email must have a domain after the @ symbol (e.g., gmail.com)');
      return false;
    }
    
    // Check if domain has a dot
    if (!parts[1].includes('.')) {
      setEmailError('Email domain must contain a dot (e.g., gmail.com)');
      return false;
    }
    
    // Check if there's text after the dot
    const domainParts = parts[1].split('.');
    if (domainParts[domainParts.length - 1].length === 0) {
      setEmailError('Email must have an extension after the dot (e.g., .com, .org)');
      return false;
    }
    
    // Check for spaces
    if (email.includes(' ')) {
      setEmailError('Email address cannot contain spaces');
      return false;
    }
    
    // Check for multiple @ symbols
    if (parts.length > 2) {
      setEmailError('Email address can only contain one @ symbol');
      return false;
    }
    
    // Final regex check for overall format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address format');
      return false;
    }
    
    // Clear error if validation passes
    setEmailError('');
    return true;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Validate email in real-time
    if (field === 'email') {
      validateEmail(value);
    }
  };

  const handleSave = () => {
    // Validate email before saving
    if (!validateEmail(formData.email)) {
      return;
    }

    setIsEditing(false);
    setShowSuccessModal(true);
    console.log('Saving admin profile data:', formData);
    // Add API call here to save the data
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEmailError('');
    // Reset form data to original values if needed
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Profile</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {!isEditing && (
          <div>
            {/* Profile Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src="https://ui-avatars.com/api/?name=Dealport&background=0D8ABC&color=fff&size=96" 
                      alt="Admin Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{formData.name}</h2>
                    <p className="text-gray-600">{formData.email}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
                      {formData.role}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsEditing(true)} 
                  className="px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Details</h3>
              <div className="space-y-5 max-w-2xl">
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Name</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    disabled 
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" 
                  />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Email</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    disabled 
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" 
                  />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Role</label>
                  <input 
                    type="text" 
                    value={formData.role} 
                    disabled 
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {isEditing && (
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Edit Form */}
            <div className="lg:col-span-2 p-8 border-r border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Edit Profile Details</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Name</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-8">
                    <label className="w-32 text-gray-700 text-right font-medium">Email</label>
                    <div className="flex-1">
                      <input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent ${
                          emailError 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-gray-800'
                        }`}
                        placeholder="Enter your email"
                      />
                      {emailError && (
                        <p className="text-red-500 text-sm mt-1 ml-0">
                          {emailError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Role</label>
                  <input 
                    type="text" 
                    value={formData.role} 
                    disabled
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" 
                  />
                  <span className="text-xs text-gray-500">Role cannot be changed</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={handleCancel} 
                  className="w-32 px-8 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave} 
                  className="w-32 px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Profile Picture Section */}
            <div className="p-8 bg-gray-50 flex flex-col items-center justify-start">
              <div className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mx-auto mb-4">
                  <img 
                    src="https://ui-avatars.com/api/?name=Dealport&background=0D8ABC&color=fff&size=128" 
                    alt="Admin Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-white transition-colors mb-4">
                  Select Image
                </button>
                <p className="text-xs text-gray-500">File size: maximum 1 MB</p>
                <p className="text-xs text-gray-500">File extension: JPEG, PNG</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
                Profile Updated Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Your profile information has been saved. All changes are now active.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
