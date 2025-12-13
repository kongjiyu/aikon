
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VoucherCard, { VoucherCardProps } from './VoucherCard';

const VOUCHERS: VoucherCardProps[] = [
    {
        title: "10% Discount",
        subtitle: "WELCOME VOUCHER FOR FIRST PURCHASE",
        description: `Valid for first-time customers only.\nApplicable for a single transaction per user.\nMinimum spend of RM 888.`
    },
    {
        title: "RM 150 Rebate",
        subtitle: "BIRTHDAY VOUCHER DURING BIRTHDAY MONTH",
        description: `Only valid during the customer’s birthday month.\nEach customer is entitled to 1 birthday voucher per year.\nMinimum spend of RM 1000.`
    },
    {
        title: "RM 50 Discount For Both",
        subtitle: "REFER 1 FRIEND, BENEFITS 2 PEOPLE",
        description: `Referrer and referee both receive the voucher.\nVoucher is not valid if the referee cancels.\nEach successful referral earns 1 voucher only.`
    },
    {
        title: "RM 10 Discount",
        subtitle: "1 review, 1 voucher",
        description: `Customer must submit a genuine review with photo.\nOne voucher per order review only.`,
        isActive: true
    },
    {
        title: "10% Discount within 24 Hour",
        subtitle: "encouragement to proceed",
        description: `Issued only to customers who abandon their cart.\nValid for a limited time (within 24 hours).`
    },
    {
        title: "RM 30 Extra Discount",
        subtitle: "DO NOT FORGET YOUR ACCESSORIES",
        description: `Only applicable when purchasing selected products.\nVoucher can only be used to purchase accessories.`
    },
    {
        title: "RM 350 Loyalty Rebate",
        subtitle: "AN APPRECIATION GIFT SPECIAL FOR YOU",
        description: `Rewarded when total spending reaches the RM 3,500.\nOne voucher per milestone level.`
    },
    {
        title: "Free Accessory worth RM 50",
        subtitle: "A NEW YEAR, A NEW ACCESSORY",
        description: `Only available during festive periods.\nNot applicable for bundled items.`,
        isActive: true
    },
    {
        title: "18% Discount",
        subtitle: "DISCOUNT FOR NEWLY DEBUT PRODUCT",
        description: `Applicable for early shoppers during product launches.\nValid only within the promo period.`
    }
];

export default function VoucherCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        // Approx card width + gap. 
        // We'll calculate it dynamically or estimate roughly 400px scroll 
        // or getting the width of the first child.
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth; // Scroll one full container width

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative group">
            <button
                onClick={() => scroll('left')}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 p-3 rounded-full hover:bg-slate-50 text-slate-800 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 p-3 rounded-full hover:bg-slate-50 text-slate-800 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {VOUCHERS.map((voucher, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[calc(33.333%-16px)] snap-start flex-shrink-0"
                    >
                        <VoucherCard {...voucher} />
                    </div>
                ))}
            </div>

            {/* Mobile Scroll Indicator Hint */}
            <div className="flex justify-center gap-1 md:hidden mt-2">
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            </div>
        </div>
    );
}
