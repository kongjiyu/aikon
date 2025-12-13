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

export default function MockRecommendationsPage() {
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
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
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
    router.push('/mockup/mock-comparison');
  };

  // Mockup recommendations
  const recommendations = [
    {
      id: 'product-1',
      name: 'Lorem Ipsum Product',
      image: 'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image',
      price: 9999.00,
      rating: 0,
      reason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      highlights: ['Lorem ipsum', 'Dolor sit', 'Amet consectetur', 'Adipiscing elit'],
    },
    {
      id: 'product-2',
      name: 'Dolor Sit Amet',
      image: 'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image',
      price: 9999.00,
      rating: 0,
      reason: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      highlights: ['Duis aute', 'Irure dolor', 'Reprehenderit', 'Voluptate velit'],
    },
    {
      id: 'product-3',
      name: 'Consectetur Adipiscing',
      image: 'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image',
      price: 9999.00,
      rating: 0,
      reason: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
      highlights: ['Sed ut', 'Perspiciatis', 'Unde omnis', 'Iste natus'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 grayscale">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-gray-600" />
            <h1 className="text-3xl font-bold text-gray-900">Lorem Ipsum Dolor Sit</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Lorem ipsum dolor sit amet? <span className="text-gray-500">*</span>
              </label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData({...formData, category: value})}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Lorem ipsum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Lorem Ipsum</SelectItem>
                  <SelectItem value="option2">Dolor Sit</SelectItem>
                  <SelectItem value="option3">Amet Consectetur</SelectItem>
                  <SelectItem value="option4">Adipiscing Elit</SelectItem>
                  <SelectItem value="option5">Sed Do Eiusmod</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Lorem Ipsum <span className="text-gray-500">*</span>
                </label>
                <Select 
                  value={formData.budget} 
                  onValueChange={(value) => setFormData({...formData, budget: value})}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lorem ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="range1">Lorem 0 - 00</SelectItem>
                    <SelectItem value="range2">Dolor 00 - 000</SelectItem>
                    <SelectItem value="range3">Amet 000 - 0000</SelectItem>
                    <SelectItem value="range4">Consectetur 0000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Battery Life */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Dolor Sit Amet
                </label>
                <Select 
                  value={formData.battery} 
                  onValueChange={(value) => setFormData({...formData, battery: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lorem ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Lorem ipsum</SelectItem>
                    <SelectItem value="medium">Dolor sit amet</SelectItem>
                    <SelectItem value="high">Consectetur adipiscing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Storage */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Consectetur Adipiscing
                </label>
                <Select 
                  value={formData.storage} 
                  onValueChange={(value) => setFormData({...formData, storage: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lorem ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="128gb">000 Lorem</SelectItem>
                    <SelectItem value="256gb">000 Dolor</SelectItem>
                    <SelectItem value="512gb">000 Sit</SelectItem>
                    <SelectItem value="1tb">0 Amet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Camera Quality */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Sed Do Eiusmod
                </label>
                <Select 
                  value={formData.camera} 
                  onValueChange={(value) => setFormData({...formData, camera: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lorem ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Lorem ipsum</SelectItem>
                    <SelectItem value="medium">Dolor sit</SelectItem>
                    <SelectItem value="high">Amet consectetur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Performance */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Tempor Incididunt
                </label>
                <Select 
                  value={formData.performance} 
                  onValueChange={(value) => setFormData({...formData, performance: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lorem ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Lorem ipsum</SelectItem>
                    <SelectItem value="moderate">Dolor sit amet</SelectItem>
                    <SelectItem value="high">Consectetur elit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Use Case */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Ut Labore
                </label>
                <Select 
                  value={formData.useCase} 
                  onValueChange={(value) => setFormData({...formData, useCase: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lorem ipsum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="work">Lorem ipsum</SelectItem>
                    <SelectItem value="gaming">Dolor sit</SelectItem>
                    <SelectItem value="photography">Amet consectetur</SelectItem>
                    <SelectItem value="general">Adipiscing elit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Button Text
              </button>
            </div>
          </form>
        </div>

        {/* Recommendations Section */}
        {showRecommendations && (
          <div ref={recommendationsRef} className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-gray-800" />
                <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dolor Sit</h2>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>

            {/* Recommendation Cards */}
            <div className="space-y-6">
              {recommendations.map((product, index) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Rank Badge */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                          index === 0 ? 'bg-gray-700' : index === 1 ? 'bg-gray-600' : 'bg-gray-500'
                        }`}>
                          #{index + 1}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image and Basic Info */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-40 h-40 mb-4 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-2xl font-bold text-gray-800 mb-2">RM 0,000.00</p>
                          <div className="flex items-center gap-1 text-gray-500">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-lg">★</span>
                            ))}
                            <span className="ml-1 text-sm">(0.0)</span>
                          </div>
                        </div>

                        {/* Reason */}
                        <div className="md:col-span-2">
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-gray-700" />
                              Lorem Ipsum Dolor Sit
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {product.reason}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-gray-900 mb-3">Lorem Ipsum:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {product.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors">
                              Button Text
                            </button>
                            <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 py-2 px-4 rounded-lg font-medium text-sm border border-gray-300 transition-colors">
                              Button Text
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compare Button */}
            <div className="bg-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lorem ipsum dolor sit amet?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <button
                onClick={handleCompare}
                className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Button Text
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
