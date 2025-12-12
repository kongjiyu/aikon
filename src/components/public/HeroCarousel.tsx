
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
    '/images/homePage/hero-1.png',
    '/images/homePage/hero-2.png',
    '/images/homePage/hero-3.png',
    '/images/homePage/hero-4.png',
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    };

    // Auto-slide functionality (optional, disabled if only 1 slide)
    useEffect(() => {
        if (HERO_IMAGES.length <= 1) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group">
                {/* Aspect Ratio Container - Responsive Height */}
                {/* Mobile: 250px, Tablet: 350px, Desktop: 450px */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-2xl">
                    {HERO_IMAGES.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`Hero Slide ${index + 1}`}
                                fill
                                className="object-contain md:object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows (Only show if > 1 slide) */}
            {HERO_IMAGES.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {HERO_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
