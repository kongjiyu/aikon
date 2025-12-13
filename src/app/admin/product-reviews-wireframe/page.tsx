'use client';

import { useState } from 'react';
import {
    Star,
    MessageSquare,
    ThumbsUp,
    Search,
    Send,
    X,
    ShoppingBag
} from 'lucide-react';

export default function ProductReviewsWireframe() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Product Reviews</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage customer feedback</p>
                </div>
            </div>

            {/* Reviews Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl font-bold text-gray-900">4.8</h2>
                    <div className="flex gap-1 my-2 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                    <p className="text-sm text-gray-500">Average Rating</p>
                </div>

                <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
                    <div className="space-y-3">
                        {[5, 4, 3, 2, 1].map((stars) => (
                            <div key={stars} className="flex items-center gap-3">
                                <div className="flex items-center gap-1 w-12">
                                    <span className="text-sm font-medium text-gray-700">{stars}</span>
                                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                                </div>
                                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-yellow-400"
                                        style={{ width: `${stars * 15}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm font-medium text-gray-600 w-12 text-right">{stars * 10}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <div className="relative max-w-md">
                        <input
                            type="text"
                            placeholder="Search reviews..."
                            className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100">
                                    <img src="https://placehold.co/100x100" className="w-full h-full rounded-full" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-bold text-gray-900">Reviewer Name {i}</h4>
                                                <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                                    <ShoppingBag size={10} />
                                                    Verified
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500">Review on <span className="text-gray-900 font-medium">Dolor Sit Amet {i}</span></p>
                                        </div>
                                        <div className="text-xs text-gray-400 text-right">
                                            2 hours ago
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 my-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={14} fill="currentColor" className="text-yellow-400" />
                                        ))}
                                        <span className="text-xs font-semibold ml-2 text-gray-700">5.0</span>
                                    </div>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>

                                    {/* Admin Reply Mock */}
                                    {i === 2 && (
                                        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                    A
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold text-gray-900 mb-1">Admin Response</p>
                                                    <p className="text-sm text-gray-700">Lorem ipsum reply from admin.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between mt-3">
                                        <button className="flex items-center gap-1 text-xs text-gray-500">
                                            <ThumbsUp size={12} /> Helpful ({i * 5})
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <button
                                                className="flex items-center gap-1 text-xs text-brand-dark hover:text-gray-900 font-medium transition-colors"
                                            >
                                                <MessageSquare size={12} /> Reply to Customer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 border-t border-gray-100 text-center">
                    <button className="text-sm font-medium text-brand-dark hover:text-gray-900 transition-colors">Load More</button>
                </div>
            </div>
        </div>
    );
}
