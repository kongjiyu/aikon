"use client";

import { useState, useMemo } from 'react';
import {
    Star,
    MessageSquare,
    ThumbsUp,
    Search,
    Filter,
    Image as ImageIcon,
    ShoppingBag,
    Send,
    X
} from 'lucide-react';
import ReviewsBarChart from '@/components/admin/charts/ReviewsBarChart';

interface Review {
    id: string;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    product: string;
    comment: string;
    likes: number;
    photos?: string[];
    verified: boolean;
    adminReply?: string;
}

const mockReviews: Review[] = [
    { 
        id: '1',
        user: 'Alex Morgan', 
        avatar: 'https://ui-avatars.com/api/?name=Alex+Morgan&background=random', 
        rating: 5, 
        date: '2 hours ago', 
        product: 'Apple iPhone 13 Pro', 
        comment: 'Absolutely love this phone! The camera quality is insane and battery life lasts all day. Highly recommend!', 
        likes: 12,
        photos: [
            'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
            'https://images.unsplash.com/photo-1632633173522-966f29c5f15e?w=400'
        ],
        verified: true
    },
    { 
        id: '2',
        user: 'Sarah Jen', 
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Jen&background=random', 
        rating: 4, 
        date: '1 day ago', 
        product: 'Nike Air Jordan High', 
        comment: 'Great quality shoes, but the shipping took a bit longer than expected. Comfortable fit though.', 
        likes: 4,
        verified: true
    },
    { 
        id: '3',
        user: 'Mike Ross', 
        avatar: 'https://ui-avatars.com/api/?name=Mike+Ross&background=random', 
        rating: 1, 
        date: '2 days ago', 
        product: 'Electric Hair Trimmer', 
        comment: 'Stopped working after one use. Requesting refund immediately. Very disappointed with the quality.', 
        likes: 0,
        photos: [
            'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400'
        ],
        verified: true
    },
    { 
        id: '4',
        user: 'Emily White', 
        avatar: 'https://ui-avatars.com/api/?name=Emily+White&background=random', 
        rating: 5, 
        date: '3 days ago', 
        product: 'Smart Fitness Tracker', 
        comment: 'Best tracker for the price point. App sync is flawless. Would recommend to anyone starting their fitness journey.', 
        likes: 28,
        photos: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400',
            'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=400',
            'https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=400'
        ],
        verified: true
    },
    { 
        id: '5',
        user: 'John Smith', 
        avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=random', 
        rating: 5, 
        date: '5 days ago', 
        product: 'Sony WH-1000XM4 Headphones', 
        comment: 'The noise cancellation is phenomenal! Perfect for traveling and working from home. Battery lasts forever.', 
        likes: 18,
        verified: true
    },
    { 
        id: '6',
        user: 'Lisa Anderson', 
        avatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=random', 
        rating: 4, 
        date: '1 week ago', 
        product: 'MacBook Pro 14"', 
        comment: 'Great performance and display quality. Only downside is the price, but you get what you pay for!', 
        likes: 34,
        photos: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'
        ],
        verified: true,
        adminReply: 'Thank you for your feedback! We appreciate your purchase and are glad you\'re enjoying your MacBook Pro. 🎉'
    },
];

export default function ProductReviewsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [reviews, setReviews] = useState<Review[]>(mockReviews);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyText, setReplyText] = useState('');
    const [editingReview, setEditingReview] = useState<string | null>(null);
    const [editedComment, setEditedComment] = useState('');

    // Filter reviews based on search only
    const filteredReviews = useMemo(() => {
        return reviews.filter(review => {
            // Search filter
            const matchesSearch = searchQuery === '' || 
                review.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                review.comment.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesSearch;
        });
    }, [reviews, searchQuery]);

    const handleSubmitReply = (reviewId: string) => {
        if (replyText.trim()) {
            setReviews(prevReviews => 
                prevReviews.map(review => 
                    review.id === reviewId 
                        ? { ...review, adminReply: replyText }
                        : review
                )
            );
            setReplyText('');
            setReplyingTo(null);
        }
    };

    const handleCancelReply = () => {
        setReplyText('');
        setReplyingTo(null);
    };

    const handleEditReview = (reviewId: string, currentReply: string) => {
        setEditingReview(reviewId);
        setEditedComment(currentReply);
    };

    const handleSaveEdit = (reviewId: string) => {
        if (editedComment.trim()) {
            setReviews(prevReviews => 
                prevReviews.map(review => 
                    review.id === reviewId 
                        ? { ...review, adminReply: editedComment }
                        : review
                )
            );
            setEditingReview(null);
            setEditedComment('');
        }
    };

    const handleCancelEdit = () => {
        setEditingReview(null);
        setEditedComment('');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Product Reviews</h1>
                    <p className="text-sm text-gray-500 mt-1">Monitor and manage customer feedback</p>
                </div>
            </div>

            {/* Reviews Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl font-bold text-gray-900">4.8</h2>
                    <div className="flex gap-1 my-2 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" className={i > 4 ? "text-gray-300" : ""} />)}
                    </div>
                    <p className="text-sm text-gray-500">Average Rating</p>
                </div>

                <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
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
                                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                                </div>
                                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${
                                            item.stars >= 4 ? 'bg-green-500' : 
                                            item.stars === 3 ? 'bg-yellow-400' : 
                                            'bg-red-500'
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
                            placeholder="Search reviews by user, product, or comment..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    </div>
                </div>

                {searchQuery && (
                    <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-semibold">{filteredReviews.length}</span> of <span className="font-semibold">{reviews.length}</span> reviews
                        </p>
                    </div>
                )}

                <div className="divide-y divide-gray-50">
                    {filteredReviews.map((review) => (
                        <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full bg-gray-100" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-bold text-gray-900">{review.user}</h4>
                                                {review.verified && (
                                                    <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                                        <ShoppingBag size={10} />
                                                        Verified Purchase
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500">purchased <span className="text-gray-900 font-medium">{review.product}</span></p>
                                        </div>
                                        <div className="text-xs text-gray-400 text-right">
                                            {review.date}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 my-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={14} fill="currentColor" className={star <= review.rating ? "text-yellow-400" : "text-gray-200"} />
                                        ))}
                                        <span className="text-xs font-semibold ml-2 text-gray-700">{review.rating}.0</span>
                                    </div>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                        {review.comment}
                                    </p>

                                    {/* Admin Reply */}
                                    {review.adminReply && editingReview !== review.id && (
                                        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                    A
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold text-gray-900 mb-1">Admin Response</p>
                                                    <p className="text-sm text-gray-700">{review.adminReply}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Edit Admin Reply Form */}
                                    {editingReview === review.id && (
                                        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                    A
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold text-gray-900 mb-2">Edit Admin Response</p>
                                                    <textarea
                                                        value={editedComment}
                                                        onChange={(e) => setEditedComment(e.target.value)}
                                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal resize-none"
                                                        rows={3}
                                                    />
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => handleSaveEdit(review.id)}
                                                            className="flex items-center gap-1 px-3 py-1.5 bg-brand-dark text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                                                        >
                                                            <Send size={12} /> Save Changes
                                                        </button>
                                                        <button
                                                            onClick={handleCancelEdit}
                                                            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
                                                        >
                                                            <X size={12} /> Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Reply Form */}
                                    {replyingTo === review.id && (
                                        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                                            <textarea
                                                value={replyText}
                                                onChange={(e) => setReplyText(e.target.value)}
                                                placeholder="Write your reply to this customer..."
                                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal resize-none"
                                                rows={3}
                                            />
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => handleSubmitReply(review.id)}
                                                    className="flex items-center gap-1 px-3 py-1.5 bg-brand-dark text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                                                >
                                                    <Send size={12} /> Send Reply
                                                </button>
                                                <button
                                                    onClick={handleCancelReply}
                                                    className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
                                                >
                                                    <X size={12} /> Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between mt-3">
                                        <button className="flex items-center gap-1 text-xs text-gray-500">
                                            <ThumbsUp size={12} /> Helpful ({review.likes})
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {review.adminReply && editingReview !== review.id && replyingTo !== review.id && (
                                                <button 
                                                    onClick={() => handleEditReview(review.id, review.adminReply)}
                                                    className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                                >
                                                    <MessageSquare size={12} /> Edit Reply
                                                </button>
                                            )}
                                            {!review.adminReply && replyingTo !== review.id && editingReview !== review.id && (
                                                <button 
                                                    onClick={() => setReplyingTo(review.id)}
                                                    className="flex items-center gap-1 text-xs text-brand-dark hover:text-gray-900 font-medium transition-colors"
                                                >
                                                    <MessageSquare size={12} /> Reply to Customer
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
                    <button className="text-sm font-medium text-brand-dark hover:text-gray-900 transition-colors">Load More Reviews</button>
                </div>
            </div>
        </div>
    );
}
