
'use client';

import { useState } from 'react';
import FeaturedProductCard from '@/components/public/FeaturedProductCard';

export default function FeaturedProductsSection() {
    // Hardcoded products as requested
    const products = [
        {
            id: 'PROD_FP_1',
            name: 'ASUS TUF Gaming A15',
            description: 'Running, Engineered mesh',
            price: 3499.00,
            originalPrice: 4599.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/asustufgaminga15.webp',
            isSale: true
        },
        {
            id: 'PROD_FP_2',
            name: 'XIAOMI 15T PRO',
            description: 'Running, Engineered mesh',
            price: 2999.00,
            originalPrice: 3399.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/xiaomi15tpro.webp',
            isSale: true
        },
        {
            id: 'PROD_FP_3',
            name: 'iPhone 17 Pro Max',
            description: 'Running, Engineered mesh',
            price: 6999.00,
            originalPrice: 7599.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/iphone17promax.webp',
            isSale: true
        },
        {
            id: 'PROD_FP_4',
            name: 'Apple iMac 2023',
            description: 'Running, Engineered mesh',
            price: 7299.00,
            originalPrice: 8299.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/appleimac2023.png',
            isSale: true
        },
        {
            id: 'PROD_FP_5',
            name: 'Lenovo IdeaTab TB-336FU',
            description: 'Running, Engineered mesh',
            price: 829.00,
            originalPrice: 999.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/lenovoIdeaTabTB-336fu.png',
            isSale: true
        },
        {
            id: 'PROD_FP_6',
            name: 'Acer Aspire Go 14',
            description: 'Running, Engineered mesh',
            price: 2699.00,
            originalPrice: 3299.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/acerAspireGo14.png',
            isSale: true
        },
        {
            id: 'PROD_FP_7',
            name: 'Apple Watch Ultra 3 GPS',
            description: 'Running, Engineered mesh',
            price: 3699.00,
            originalPrice: 4399.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/appleWatchUltra3GPS.png',
            isSale: true
        },
        {
            id: 'PROD_FP_8',
            name: 'Apple AirPods Pro (2nd gen)',
            description: 'Running, Engineered mesh',
            price: 799.00,
            originalPrice: 1099.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/appleAirPodsPro(2ndgen).png',
            isSale: true
        },
        {
            id: 'PROD_FP_9',
            name: 'Samsung Galaxy A36 5G',
            description: 'Processor: 2.4GHz, 1.8GHz Weight (g): 195',
            price: 1399.00,
            originalPrice: 1599.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/samsungGalaxyA365g.png',
            isSale: true
        },
        {
            id: 'PROD_FP_10',
            name: 'Apple iPhone FineWoven Wallet',
            description: 'Running, Engineered mesh',
            price: 299.00,
            originalPrice: 319.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/appleIphoneFineWovenWallet.png',
            isSale: true
        },
        {
            id: 'PROD_FP_11',
            name: 'iPhone 17',
            description: 'Running, Engineered mesh',
            price: 6999.00,
            originalPrice: 7599.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/iphone17.png',
            isSale: true
        },
        {
            id: 'PROD_FP_12',
            name: 'Harman Kardon Soundsticks 5',
            description: 'Running, Engineered mesh',
            price: 1899.00,
            originalPrice: 2299.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/harmanKardonSoundsticks5.png',
            isSale: true
        },
        {
            id: 'PROD_FP_13',
            name: 'HUAWEI Watch GT 5',
            description: 'Running, Engineered mesh',
            price: 999.00,
            originalPrice: 1000.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/huaweiWatchGT5.png',
            isSale: true
        },
        {
            id: 'PROD_FP_14',
            name: 'Harman Kardon Aura Studio 4',
            description: 'Running, Engineered mesh',
            price: 2699.00,
            originalPrice: 3299.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/harmanKardonAuraStudio4.png',
            isSale: true
        },
        {
            id: 'PROD_FP_15',
            name: 'Samsung Galaxy Buds3',
            description: 'Running, Engineered mesh',
            price: 599.00,
            originalPrice: 699.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/samsungGalaxyBuds3.png',
            isSale: true
        },
        {
            id: 'PROD_FP_16',
            name: 'HONOR MagicPad 2 WiFi',
            description: 'Running, Engineered mesh',
            price: 2499.00,
            originalPrice: 3099.00,
            rating: 4.9,
            reviewsCount: 15,
            image: '/images/homePage/honorMagicPad2Wifi.png',
            isSale: true
        }
    ];

    const [visibleCount, setVisibleCount] = useState(8);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 8, products.length));
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
                {products.slice(0, visibleCount).map((item) => (
                    <FeaturedProductCard
                        key={item.id}
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        originalPrice={item.originalPrice}
                        rating={item.rating || 5.0}
                        reviewsCount={item.reviewsCount}
                        image={item.image}
                        isSale={item.isSale}
                    />
                ))}
            </div>

            {/* Load More Button & Count */}
            {visibleCount < products.length && (
                <div className="text-center mt-16 space-y-4">
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 bg-white border border-slate-800 text-slate-800 font-bold text-xs hover:bg-slate-800 hover:text-white transition-colors uppercase tracking-widest"
                    >
                        LOAD MORE
                    </button>
                    <p className="text-gray-500 text-xs">
                        Showing {visibleCount} of {products.length} results
                    </p>
                </div>
            )}
            {/* If all loaded, showing the count is also nice, or just hide the button but show count */}
            {visibleCount >= products.length && (
                <div className="text-center mt-16 text-gray-500 text-xs">
                    Showing {products.length} of {products.length} results
                </div>
            )}
        </section>
    );
}
