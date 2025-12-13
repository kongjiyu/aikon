
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/lib/mockData';
import ProductListingCard from '@/components/public/ProductListingCard';
import { Star, Truck, ShieldCheck, ArrowRight, Minus, Plus, RefreshCw, Maximize2, X } from 'lucide-react'; // Added Icons
import { useParams } from 'next/navigation';
import Product3DViewer from '@/components/public/Product3DViewer';

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const product = mockProducts.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
    const [selectedStorage, setSelectedStorage] = useState(product.storageOptions?.[0]);
    const [is3DViewActive, setIs3DViewActive] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    // Grid images: show ALL remaining imagesrid layout requested
    // Ensure we have enough images, or fallback to repeating the main one
    const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

    // Main image is the first one
    const mainImage = productImages[0];

    // Grid images: show ALL remaining images
    const gridImages = productImages.slice(1);

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Column: Visual Gallery */}
                <div className="flex flex-col items-center">

                    {/* 1. Main Large Image OR 3D Viewer */}
                    <div className="relative w-full aspect-[4/5] max-w-lg mb-6 flex items-center justify-center group">
                        {is3DViewActive && product.has3DModel && product.modelPath ? (
                            <Product3DViewer modelPath={product.modelPath} />
                        ) : (
                            <div
                                className="relative w-full h-full cursor-pointer"
                                onClick={() => setLightboxImage(mainImage)}
                            >
                                <Image
                                    src={mainImage}
                                    alt={`${product.name} Main View`}
                                    fill
                                    className="object-contain" // Removed scale hover
                                    priority
                                />
                                {/* Enlarge Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                                    <div className="bg-white/80 p-3 rounded-full backdrop-blur-sm shadow-lg">
                                        <Maximize2 className="w-6 h-6 text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 2. 360 View Link */}
                    {product.has3DModel && (
                        <button
                            onClick={() => setIs3DViewActive(!is3DViewActive)}
                            className="flex items-center gap-2 text-blue-600 font-medium mb-12 hover:underline group"
                        >
                            <span>{is3DViewActive ? "Back to Image" : "Click for 360 product view"}</span>
                            <RefreshCw className={`w-4 h-4 transition-transform duration-700 ${is3DViewActive ? 'rotate-180' : ''} group-hover:rotate-180`} />
                        </button>
                    )}

                    {/* 3. Grid Layout (All remaining images) */}
                    {gridImages.length > 0 && (
                        <div className="grid grid-cols-2 gap-x-12 gap-y-12 w-full max-w-lg">
                            {gridImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-[3/4] w-full flex items-center justify-center group cursor-pointer"
                                    onClick={() => setLightboxImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} detail ${index + 1}`}
                                        fill
                                        className="object-contain transition-opacity group-hover:opacity-90"
                                    />
                                    {/* Enlarge Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                                        <div className="bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-lg">
                                            <Maximize2 className="w-5 h-5 text-gray-800" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                {/* Right Column: Details (Standard) */}
                <div className="flex flex-col pt-8">
                    {/* Breadcrumbs (Visual) */}
                    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                        <span>Products</span>
                        <span>/</span>
                        <span className="font-medium text-gray-900">{product.category}</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>

                    {/* Rating & reviews */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center text-yellow-500">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="ml-1 font-bold text-gray-900">{product.rating || '4.8'}</span>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">{product.reviewsCount || 120} Reviews</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-green-600 font-medium">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                    </div>

                    <div className="text-3xl font-bold text-teal-900 mb-8">
                        RM {product.price.toLocaleString()}
                        {product.originalPrice && (
                            <span className="text-xl text-gray-400 line-through ml-4 font-normal">
                                RM {product.originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {product.description}
                    </p>

                    {/* Color Selection */}
                    {product.colors && (
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-900 mb-3">
                                Color: <span className="font-normal text-gray-600">{
                                    product.colorNames
                                        ? product.colorNames[product.colors.indexOf(selectedColor || '')]
                                        : selectedColor
                                }</span>
                            </label>
                            <div className="flex gap-3">
                                {product.colors.map((color, index) => {
                                    const colorName = product.colorNames?.[index] || color;
                                    return (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-teal-900 ring-2 ring-offset-2 ring-teal-900' : 'border-gray-200 hover:border-gray-400'}`}
                                            style={{ backgroundColor: color }}
                                            title={colorName}
                                            aria-label={`Select ${colorName}`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Storage Selection */}
                    {product.storageOptions && (
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-900 mb-3">
                                Storage: <span className="font-normal text-gray-600">{selectedStorage}</span>
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {product.storageOptions.map((storage) => (
                                    <button
                                        key={storage}
                                        onClick={() => setSelectedStorage(storage)}
                                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${selectedStorage === storage
                                            ? 'border-teal-900 bg-teal-50 text-teal-900'
                                            : 'border-gray-200 text-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        {storage}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity & Add to Cart */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                        <button className="flex-1 bg-teal-900 text-white font-bold h-12 rounded-lg hover:bg-teal-800 transition-colors uppercase tracking-wide">
                            Add to Cart
                        </button>
                    </div>

                    {/* Features / Safety */}
                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-900">
                                <Truck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-900">Free Delivery</h4>
                                <p className="text-xs text-gray-500">For orders over RM 500</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-900">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-900">2 Year Warranty</h4>
                                <p className="text-xs text-gray-500">Full coverage protection</p>
                            </div>
                        </div>
                    </div>

                    {/* Specs Summary */}
                    <div className="mt-12 bg-gray-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-4">Key Specifications</h3>
                        <div className="space-y-3 text-sm">
                            {product.specifications && Object.entries(product.specifications).slice(0, 5).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-500 capitalize">{key}</span>
                                    <span className="font-medium text-gray-900">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section (Placeholder for full specs/reviews if needed later) */}

            {/* Recommended Products Section */}
            <div className="mt-20 pt-10 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">People Also Bought</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockProducts
                        .filter(p => p.category === product.category && p.id !== product.id)
                        .slice(0, 4)
                        .map(p => (
                            <ProductListingCard key={p.id} product={p} />
                        ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-5xl h-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={lightboxImage}
                            alt="Full screen view"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
