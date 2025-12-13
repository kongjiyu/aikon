'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function RolesWireframePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    name: 'Lorem Ipsum',
    email: 'lorem@ipsum.com',
    role: 'Lorem Dolor'
  });

  const validateEmail = (email: string) => {
    if (!email || email.trim() === '') {
      setEmailError('Lorem ipsum dolor sit amet');
      return false;
    }
    if (!email.includes('@')) {
      setEmailError('Lorem ipsum dolor sit @ amet');
      return false;
    }
    const parts = email.split('@');
    if (parts[1] === '') {
      setEmailError('Lorem ipsum dolor sit @ amet consectetur');
      return false;
    }
    if (!parts[1].includes('.')) {
      setEmailError('Lorem ipsum dolor sit . amet');
      return false;
    }
    if (email.includes(' ')) {
      setEmailError('Lorem ipsum dolor sit amet consectetur');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'email') {
      validateEmail(value);
    }
  };

  const handleSave = () => {
    if (!validateEmail(formData.email)) {
      return;
    }
    setIsEditing(false);
    setShowSuccessModal(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEmailError('');
  };

  return (
    <div className="max-w-5xl mx-auto grayscale">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {!isEditing && (
          <div>
            {/* Profile Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 shrink-0 flex items-center justify-center text-gray-500 font-bold text-2xl">
                    L
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{formData.name}</h2>
                    <p className="text-gray-600">{formData.email}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-700 text-white text-xs font-medium rounded-full">
                      {formData.role}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsEditing(true)} 
                  className="px-8 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>
              <div className="space-y-5 max-w-2xl">
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Lorem</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    disabled 
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" 
                  />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Lorem</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    disabled 
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed" 
                  />
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Lorem</label>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Lorem Ipsum Dolor Sit</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Lorem</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent" 
                    placeholder="Lorem ipsum dolor"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-8">
                    <label className="w-32 text-gray-700 text-right font-medium">Lorem</label>
                    <div className="flex-1">
                      <input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent ${
                          emailError 
                            ? 'border-gray-500 focus:ring-gray-500' 
                            : 'border-gray-300 focus:ring-gray-700'
                        }`}
                        placeholder="Lorem ipsum dolor"
                      />
                      {emailError && (
                        <p className="text-gray-600 text-sm mt-1 ml-0">
                          {emailError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <label className="w-32 text-gray-700 text-right font-medium">Lorem</label>
                  <input 
                    type="text" 
                    value={formData.role} 
                    disabled
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" 
                  />
                  <span className="text-xs text-gray-500">Lorem ipsum dolor sit</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={handleCancel} 
                  className="w-32 px-8 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button 
                  onClick={handleSave} 
                  className="w-32 px-8 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  Lorem
                </button>
              </div>
            </div>

            {/* Profile Picture Section */}
            <div className="p-8 bg-gray-50 flex flex-col items-center justify-start">
              <div className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 shrink-0 mx-auto mb-4 flex items-center justify-center text-gray-500 font-bold text-4xl">
                  L
                </div>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-white transition-colors mb-4">
                  Lorem Ipsum
                </button>
                <p className="text-xs text-gray-500">Lorem ipsum: lorem 1 MB</p>
                <p className="text-xs text-gray-500">Lorem ipsum: JPEG, PNG</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-gray-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lorem Ipsum Dolor Sit Amet!
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
              >
                Lorem ipsum!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
