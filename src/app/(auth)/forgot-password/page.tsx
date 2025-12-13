'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset link requested for:', email);
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Redirect to login page
    router.push('/login');
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/loginPic.jpeg"
              alt="Forgot Password"
              fill
              className="object-cover opacity-100"
              priority
            />
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Forgotten Your Password?</h1>
            <p className="text-gray-600 mb-8">
              There is nothing to worry about, we'll send you a message to help you reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Placeholder"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8784] focus:border-transparent"
                  required
                />
              </div>

              {/* Send Reset Link Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#6B8784] hover:bg-[#5a726f] text-white font-semibold rounded-lg transition-colors"
              >
                Send Reset Link
              </button>

              {/* Back to Login Button */}
              <Link
                href="/login"
                className="block w-full py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-center"
              >
                Back To Login
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleModalClose}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Email Sent Successfully!
              </h2>

              {/* Message */}
              <p className="text-gray-600 mb-2">
                Don't worry! We've sent a password reset link to your email address.
              </p>
              <p className="text-gray-600 mb-6">
                Please check your inbox and follow the instructions to reset your password. If you don't see the email, please check your spam folder.
              </p>

              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="w-full py-3 bg-[#6B8784] hover:bg-[#5a726f] text-white font-semibold rounded-lg transition-colors"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
