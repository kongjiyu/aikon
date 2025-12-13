
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/mockData';

interface ProductListingCardProps {
    product: Product;
}

export default function ProductListingCard({ product }: ProductListingCardProps) {
    return (
        <Link href={`/products/${product.id}`} className="group block cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-square bg-[#F5F5F5] overflow-hidden rounded-lg mb-3">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="space-y-1">
                {/* Product Type / Category */}
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {product.tags?.[0] || product.category}
                </p>

                {/* Product Name */}
                <h3 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2 min-h-[2.5em]">
                    {product.name}
                </h3>

                {/* Price */}
                <p className="text-base font-bold text-gray-900 pt-1">
                    RM{product.price.toFixed(2)}
                </p>
            </div>
        </Link>
    );
}
