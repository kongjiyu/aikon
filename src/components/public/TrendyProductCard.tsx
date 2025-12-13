import Image from 'next/image';
import Link from 'next/link';

interface TrendyProductCardProps {
    title: string;
    description?: string;
    price: number;
    originalPrice?: number;
    rating: number;
    sales: number;
    image: string;
    colors?: string[];
    isSale?: boolean;
    isNew?: boolean;
}

export default function TrendyProductCard({
    title,
    description,
    price,
    originalPrice,
    rating,
    sales,
    image,
    colors = [],
    isSale = false,
    isNew = false,
}: TrendyProductCardProps) {
    return (
        <div className="group bg-white rounded-xl p-4 transition-all hover:shadow-lg border border-transparent hover:border-gray-100 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-50">
                {isSale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 uppercase tracking-wide">
                        Sale
                    </span>
                )}
                {isNew && !isSale && (
                    <span className="absolute top-2 left-2 bg-brand-teal text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 uppercase tracking-wide">
                        New
                    </span>
                )}

                {/* Wishlist/Cart overlay buttons */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-teal hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-dark hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-brand-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <span>★</span>
                    <span>{rating}</span>
                </div>

                <div className="relative w-full h-full p-4">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-brand-teal transition-colors line-clamp-2">
                    {title}
                </h3>
                {description && (
                    <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
                )}

                {/* Sales count */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    <span>{sales} Sales</span>
                </div>

                {/* Price */}
                <div className="mt-auto pt-2">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[#14B8A6] text-sm md:text-base">RM{price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                        {originalPrice && (
                            <span className="text-xs text-gray-400 line-through">RM{originalPrice.toLocaleString()}</span>
                        )}
                    </div>
                </div>

                {/* Colors */}
                {colors.length > 0 && (
                    <div className="flex gap-1 mt-2">
                        {colors.map((color, i) => (
                            <div key={i} className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: color }} />
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="pt-3 mt-auto">
                    <Link href="#" className="flex items-center justify-center gap-2 text-sm font-bold text-brand-teal border border-brand-teal rounded-full py-2.5 px-5 hover:bg-brand-teal hover:text-white transition-all w-fit">
                        Learn More
                        <div className="w-2.5 h-4 relative">
                            <div className="w-2.5 h-4 bg-current" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)', transform: 'scale(0.4)' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
