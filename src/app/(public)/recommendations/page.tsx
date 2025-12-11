'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RecommendationsPage() {
  const router = useRouter();
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    category: '',
    budget: '',
    battery: '',
    storage: '',
    camera: '',
    performance: '',
    useCase: '',
  });
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Auto-scroll to recommendations when they appear
  useEffect(() => {
    if (showRecommendations && recommendationsRef.current) {
      setTimeout(() => {
        const element = recommendationsRef.current;
        if (element) {
          // Get the element's position
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          // Offset for header (80px for navbar height + 20px padding)
          const offsetPosition = elementPosition - 180;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [showRecommendations]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecommendations(true);
  };

  const handleCompare = () => {
    // Redirect to comparison page with pre-selected iPhone models
    router.push('/compare?products=iphone-16-pro-max,iphone-16-pro,iphone-16');
  };

  // Hardcoded AI recommendations (assuming user wants to buy a phone)
  const recommendations = [
    {
      id: 'iphone-16-pro-max',
      name: 'iPhone 16 Pro Max',
      image: '/images/myOrder1.png',
      price: 5499.00,
      rating: 4.9,
      reason: 'Best overall choice for your needs. Features the longest battery life (up to 33 hours video playback), largest display (6.9"), and most powerful camera system with 5x telephoto zoom. Perfect for content creation and power users who demand the best performance.',
      highlights: ['33 hours battery', '6.9" display', '5x telephoto', 'A18 Pro chip'],
    },
    {
      id: 'iphone-16-pro',
      name: 'iPhone 16 Pro',
      image: '/images/myOrder2.png',
      price: 4899.00,
      rating: 4.8,
      reason: 'Excellent balance of features and portability. Offers the same A18 Pro chip and camera system as the Pro Max in a more compact 6.3" form factor. Ideal for users who want pro features without the larger size.',
      highlights: ['27 hours battery', '6.3" display', 'A18 Pro chip', 'Compact size'],
    },
    {
      id: 'iphone-16',
      name: 'iPhone 16',
      image: '/images/myOrder1.png',
      price: 3899.00,
      rating: 4.7,
      reason: 'Best value option with flagship performance. The A18 chip delivers excellent speed for daily tasks and gaming. Great camera quality with 48MP main sensor. Perfect for users who want the latest features at a more accessible price point.',
      highlights: ['22 hours battery', 'A18 chip', '48MP camera', 'Great value'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-[#6B8784]" />
            <h1 className="text-3xl font-bold text-gray-900">AI Gadget Recommender</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us what you're looking for, and our AI will recommend the perfect gadgets tailored to your needs
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                What type of gadget are you looking for? <span className="text-red-500">*</span>
              </label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData({...formData, category: value})}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Smartphone</SelectItem>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="tablet">Tablet</SelectItem>
                  <SelectItem value="smartwatch">Smartwatch</SelectItem>
                  <SelectItem value="earbuds">Earbuds/Headphones</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Budget Range <span className="text-red-500">*</span>
                </label>
                <Select 
                  value={formData.budget} 
                  onValueChange={(value) => setFormData({...formData, budget: value})}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-2000">Under RM 2,000</SelectItem>
                    <SelectItem value="2000-4000">RM 2,000 - RM 4,000</SelectItem>
                    <SelectItem value="4000-6000">RM 4,000 - RM 6,000</SelectItem>
                    <SelectItem value="above-6000">Above RM 6,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Battery Life */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Battery Life Priority
                </label>
                <Select 
                  value={formData.battery} 
                  onValueChange={(value) => setFormData({...formData, battery: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Not important</SelectItem>
                    <SelectItem value="medium">Moderate (1 day use)</SelectItem>
                    <SelectItem value="high">Very important (2+ days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Storage */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Storage Requirement
                </label>
                <Select 
                  value={formData.storage} 
                  onValueChange={(value) => setFormData({...formData, storage: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="128gb">128GB</SelectItem>
                    <SelectItem value="256gb">256GB</SelectItem>
                    <SelectItem value="512gb">512GB</SelectItem>
                    <SelectItem value="1tb">1TB or more</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Camera Quality */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Camera Quality Importance
                </label>
                <Select 
                  value={formData.camera} 
                  onValueChange={(value) => setFormData({...formData, camera: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select importance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Basic quality is fine</SelectItem>
                    <SelectItem value="medium">Good quality photos</SelectItem>
                    <SelectItem value="high">Professional quality</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Performance */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Performance Needs
                </label>
                <Select 
                  value={formData.performance} 
                  onValueChange={(value) => setFormData({...formData, performance: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select performance level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic tasks (browsing, social media)</SelectItem>
                    <SelectItem value="moderate">Moderate (multitasking, light gaming)</SelectItem>
                    <SelectItem value="high">High performance (gaming, video editing)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                How will you primarily use this gadget? <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.useCase}
                onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                rows={4}
                placeholder="E.g., I need a phone for photography and content creation. I travel frequently and need long battery life. Gaming is also important to me..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8784] focus:border-transparent outline-none resize-none text-sm text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6B8784] text-white py-4 rounded-lg font-semibold text-base hover:bg-[#5a736f] transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get AI Recommendations
            </button>
          </form>
        </div>

        {/* AI Recommendations Section */}
        {showRecommendations && (
          <div ref={recommendationsRef} className="space-y-6">
            <div className="bg-gradient-to-r from-[#6B8784] to-[#5a736f] rounded-lg shadow-sm p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6" />
                <h2 className="text-2xl font-bold">AI Recommendations</h2>
              </div>
              <p className="text-white/90">
                Based on your preferences, we've found the perfect gadgets for you!
              </p>
            </div>

            {/* Recommendation Cards */}
            {recommendations.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      'bg-amber-700'
                    }`}>
                      #{index + 1}
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="w-32 h-32 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#6B8784]">RM {product.price.toFixed(2)}</p>
                      </div>
                    </div>

                    {/* AI Reason */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-blue-900 mb-1">Why we recommend this:</p>
                          <p className="text-sm text-blue-800">{product.reason}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {product.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Compare Button */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Want to see a detailed comparison?
              </h3>
              <p className="text-gray-600 mb-4">
                Compare all three recommended phones side-by-side to make the best decision
              </p>
              <button
                onClick={handleCompare}
                className="inline-flex items-center gap-2 bg-[#6B8784] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a736f] transition-colors"
              >
                Compare These 3 Models
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
