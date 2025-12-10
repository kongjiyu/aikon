"use client";

import {
    Star,
    MessageSquare,
    ThumbsUp,
    MoreHorizontal,
    CheckCircle,
    XCircle,
    Search,
    Filter,
    AlertCircle
} from 'lucide-react';
import ReviewsBarChart from '@/components/admin/charts/ReviewsBarChart';

export default function ProductReviewsPage() {
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
                    <div className="h-40">
                        <ReviewsBarChart
                            data={[70, 20, 5, 2, 3]}
                            colors={['#22c55e', '#22c55e', '#facc15', '#ef4444', '#ef4444']}
                        />
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Search reviews..."
                            className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex bg-gray-50 p-1 rounded-lg">
                            <button className="px-3 py-1.5 text-xs font-medium bg-white shadow-sm rounded-md text-gray-900">All</button>
                            <button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">Published</button>
                            <button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">Pending</button>
                        </div>
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                            <Filter size={16} />
                        </button>
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {[
                        { user: 'Alex Morgan', avatar: 'https://ui-avatars.com/api/?name=Alex+Morgan&background=random', rating: 5, date: '2 hours ago', product: 'Apple iPhone 13 Pro', comment: 'Absolutely love this phone! The camera quality is insane and battery life lasts fully today. Highly verified purchase.', status: 'Published', likes: 12 },
                        { user: 'Sarah Jen', avatar: 'https://ui-avatars.com/api/?name=Sarah+Jen&background=random', rating: 4, date: '1 day ago', product: 'Nike Air Jordan High', comment: 'Great quality shoes, but the shipping took a bit longer than expected. Comfortable fit though.', status: 'Published', likes: 4 },
                        { user: 'Mike Ross', avatar: 'https://ui-avatars.com/api/?name=Mike+Ross&background=random', rating: 1, date: '2 days ago', product: 'Electric Hair Trimmer', comment: 'Stopped working after one use. Requirement refund immediately. Very disappointed with the quality.', status: 'Pending', likes: 0 },
                        { user: 'Emily White', avatar: 'https://ui-avatars.com/api/?name=Emily+White&background=random', rating: 5, date: '3 days ago', product: 'Smart Fitness Tracker', comment: 'Best tracker for the price point. App sync is flawless. Would recommend to anyone starting their fitness journey.', status: 'Published', likes: 28 },
                    ].map((review, i) => (
                        <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full bg-gray-100" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900">{review.user}</h4>
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

                                    <div className="flex items-center gap-4 mt-2">
                                        <div className={`text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 ${review.status === 'Published' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                                            }`}>
                                            {review.status === 'Published' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                            {review.status}
                                        </div>

                                        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900">
                                            <ThumbsUp size={12} /> Helpful ({review.likes})
                                        </button>

                                        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 ml-auto">
                                            <MessageSquare size={12} /> Reply
                                        </button>

                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal size={16} />
                                        </button>
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
