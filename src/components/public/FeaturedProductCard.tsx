
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProductCardProps {
    title: string;
    description?: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewsCount?: number;
    image: string;
    isSale?: boolean;
}

export default function FeaturedProductCard({
    title,
    description,
    price,
    originalPrice,
    rating,
    reviewsCount = 0,
    image,
    isSale = false,
}: FeaturedProductCardProps) {
    return (
        <div className="group flex flex-col h-full bg-transparent">
            {/* Image Container */}
            <div className="relative aspect-square mb-4 bg-[#F3F4F6] rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
                {isSale && (
                    <span className="absolute top-3 left-3 bg-[#E5E7EB] text-slate-600 text-[10px] font-bold px-2 py-1 rounded-sm z-10 uppercase tracking-wide">
                        SALE!
                    </span>
                )}

                {/* Heart Icon (Bottom Right) */}
                <button className="absolute bottom-3 right-3 z-10 p-1.5 bg-transparent hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                <div className="relative w-full h-full p-8">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col space-y-1">
                <h3 className="font-bold text-slate-900 text-sm leading-tight">
                    {title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-1">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span key={star} className="text-black text-xs">★</span>
                        ))}
                    </div>
                    <span className="text-[10px] text-black font-bold">{rating}</span>
                    <span className="text-[10px] text-gray-400">({reviewsCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                    {originalPrice && (
                        <span className="text-xs text-gray-400 line-through">RM{originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    )}
                    <span className="font-bold text-[#10B981] text-sm">RM{price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>

                {/* Specification */}
                <div className="mt-auto">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Specification:</p>
                    <p className="text-[10px] text-gray-500 leading-tight">{description || 'Running, Engineered mesh'}</p>
                </div>
            </div>
        </div>
    );
}
