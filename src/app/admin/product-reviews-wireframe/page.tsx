"use client";

import { useState } from 'react';
import {
    Star,
    MessageSquare,
    ThumbsUp,
    Search,
    ShoppingBag,
    Send,
    X
} from 'lucide-react';

export default function ProductReviewsWireframePage() {
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyText, setReplyText] = useState('');
    const [editingReview, setEditingReview] = useState<string | null>(null);
    const [editedComment, setEditedComment] = useState('');

    const handleSubmitReply = (reviewId: string) => {
        setReplyText('');
        setReplyingTo(null);
    };

    const handleCancelReply = () => {
        setReplyText('');
        setReplyingTo(null);
    };

    const handleSaveEdit = (reviewId: string) => {
        setEditingReview(null);
        setEditedComment('');
    };

    const handleCancelEdit = () => {
        setEditingReview(null);
        setEditedComment('');
    };

    return (
        <div className="space-y-6 grayscale">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dolor</h1>
                    <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            {/* Reviews Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl font-bold text-gray-900">0.0</h2>
                    <div className="flex gap-1 my-2 text-gray-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" className={i > 4 ? "text-gray-300" : ""} />)}
                    </div>
                    <p className="text-sm text-gray-500">Lorem Ipsum</p>
                </div>

                <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Lorem Ipsum Dolor</h3>
                    <div className="space-y-3">
                        {[
                            { stars: 5, count: 70, percentage: 70 },
                            { stars: 4, count: 20, percentage: 20 },
                            { stars: 3, count: 5, percentage: 5 },
                            { stars: 2, count: 2, percentage: 2 },
                            { stars: 1, count: 3, percentage: 3 },
                        ].map((item) => (
                            <div key={item.stars} className="flex items-center gap-3">
                                <div className="flex items-center gap-1 w-12">
                                    <span className="text-sm font-medium text-gray-700">{item.stars}</span>
                                    <Star size={14} className="text-gray-400" fill="currentColor" />
                                </div>
                                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${
                                            item.stars >= 4 ? 'bg-gray-500' : 
                                            item.stars === 3 ? 'bg-gray-400' : 
                                            'bg-gray-500'
                                        }`}
                                        style={{ width: `${item.percentage}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm font-medium text-gray-600 w-12 text-right">{item.count}</span>
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
                            placeholder="Lorem ipsum dolor sit amet consectetur..."
                            className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">
                                    L
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-bold text-gray-900">Lorem Ipsum</h4>
                                                {i % 2 === 0 && (
                                                    <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-medium">
                                                        <ShoppingBag size={10} />
                                                        Lorem Ipsum
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500">lorem <span className="text-gray-900 font-medium">Lorem Ipsum Dolor Sit</span></p>
                                        </div>
                                        <div className="text-xs text-gray-400 text-right">
                                            {i} ipsum ago
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 my-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={14} fill="currentColor" className={star <= (i % 2 === 0 ? 5 : 4) ? "text-gray-400" : "text-gray-200"} />
                                        ))}
                                        <span className="text-xs font-semibold ml-2 text-gray-700">{i % 2 === 0 ? '5' : '4'}.0</span>
                                    </div>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>

                                    {/* Admin Reply */}
                                    {i === 6 && editingReview !== `${i}` && (
                                        <div className="mt-3 bg-gray-100 border border-gray-200 rounded-lg p-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                    A
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold text-gray-900 mb-1">Lorem Ipsum</p>
                                                    <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Edit Admin Reply Form */}
                                    {editingReview === `${i}` && (
                                        <div className="mt-3 bg-gray-100 border border-gray-200 rounded-lg p-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                    A
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold text-gray-900 mb-2">Lorem Ipsum Dolor</p>
                                                    <textarea
                                                        value={editedComment}
                                                        onChange={(e) => setEditedComment(e.target.value)}
                                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                                                        rows={3}
                                                    />
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => handleSaveEdit(`${i}`)}
                                                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-700 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                                                        >
                                                            <Send size={12} /> Lorem Ipsum
                                                        </button>
                                                        <button
                                                            onClick={handleCancelEdit}
                                                            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
                                                        >
                                                            <X size={12} /> Lorem
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Reply Form */}
                                    {replyingTo === `${i}` && (
                                        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                                            <textarea
                                                value={replyText}
                                                onChange={(e) => setReplyText(e.target.value)}
                                                placeholder="Lorem ipsum dolor sit amet..."
                                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                                                rows={3}
                                            />
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => handleSubmitReply(`${i}`)}
                                                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-700 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                                                >
                                                    <Send size={12} /> Lorem Ipsum
                                                </button>
                                                <button
                                                    onClick={handleCancelReply}
                                                    className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
                                                >
                                                    <X size={12} /> Lorem
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between mt-3">
                                        <button className="flex items-center gap-1 text-xs text-gray-500">
                                            <ThumbsUp size={12} /> Lorem ({i * 2})
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {i === 6 && editingReview !== `${i}` && replyingTo !== `${i}` && (
                                                <button 
                                                    onClick={() => {
                                                        setEditingReview(`${i}`);
                                                        setEditedComment('Lorem ipsum dolor sit amet');
                                                    }}
                                                    className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                                >
                                                    <MessageSquare size={12} /> Lorem Ipsum
                                                </button>
                                            )}
                                            {i !== 6 && replyingTo !== `${i}` && editingReview !== `${i}` && (
                                                <button 
                                                    onClick={() => setReplyingTo(`${i}`)}
                                                    className="flex items-center gap-1 text-xs text-gray-700 hover:text-gray-900 font-medium transition-colors"
                                                >
                                                    <MessageSquare size={12} /> Lorem ipsum dolor
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 border-t border-gray-100 text-center">
                    <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Lorem Ipsum Dolor</button>
                </div>
            </div>
        </div>
    );
}
