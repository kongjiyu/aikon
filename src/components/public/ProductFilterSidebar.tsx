
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-100 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full mb-4 group"
            >
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">{title}</h3>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
                    {children}
                </div>
            )}
        </div>
    );
}

import {
    Field,
    FieldDescription,
    FieldTitle,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"
import Image from 'next/image';

const BRAND_LOGOS: Record<string, string> = {
    'Apple': '/images/brands/apple.svg',
    'Samsung': '/images/brands/samsung.svg',
    'Xiaomi': '/images/brands/xiaomi.svg',
    'Asus': '/images/brands/asus.svg',
    'Lenovo': '/images/brands/lenovo.svg',
    'Sony': '/images/brands/sony.svg',
    'HP': '/images/brands/hp.svg',
    'Dell': '/images/brands/dell.svg',
};

interface ProductFilterSidebarProps {
    activeCategory?: string | null;
    activeSubcategory?: string | null;
}

export default function ProductFilterSidebar({ activeCategory, activeSubcategory }: ProductFilterSidebarProps) {
    const [priceRange, setPriceRange] = useState([0, 10000]);

    return (
        <aside className="w-64 flex-shrink-0 hidden lg:block pr-8">
            {/* Quick Filters */}
            <div className="space-y-4 mb-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 border border-gray-300 rounded-sm flex items-center justify-center group-hover:border-gray-500 transition-colors">
                        {/* Checkbox state logic would go here */}
                    </div>
                    <span className="text-sm font-medium text-gray-900">In Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 border border-gray-300 rounded-sm flex items-center justify-center group-hover:border-gray-500 transition-colors">

                    </div>
                    <span className="text-sm font-medium text-gray-900">On Sale</span>
                </label>
            </div>

            {/* Category */}
            <FilterSection title="Category" defaultOpen={true}>
                {['Laptop', 'Personal Computer', 'Phone', 'Tablets', 'Accessories'].map((cat) => {
                    const isActive = activeCategory?.toLowerCase() === cat.toLowerCase();
                    return (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-4 h-4 border rounded-[2px] transition-colors ${isActive ? 'bg-teal-900 border-teal-900' : 'border-gray-300 group-hover:border-gray-900'}`} />
                            <span className={`text-sm ${isActive ? 'font-bold text-teal-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
                        </label>
                    );
                })}
            </FilterSection>

            {/* Tags / Subcategories */}
            <FilterSection title="Tags" defaultOpen={true}>
                {['Gaming Laptop', 'Flagship', 'High Performance', 'Business', 'Desktops', 'Smartphones', 'Wireless', 'Apple Mac'].map((tag) => {
                    const isActive = activeSubcategory?.toLowerCase() === tag.toLowerCase();
                    return (
                        <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-4 h-4 border rounded-[2px] transition-colors ${isActive ? 'bg-teal-900 border-teal-900' : 'border-gray-300 group-hover:border-gray-900'}`} />
                            <span className={`text-sm ${isActive ? 'font-bold text-teal-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{tag}</span>
                        </label>
                    );
                })}
            </FilterSection>



            {/* Brand (Visual Tiles) */}
            <FilterSection title="Brand">
                <div className="grid grid-cols-2 gap-2">
                    {Object.entries(BRAND_LOGOS).map(([brand, logoPath]) => (
                        <div key={brand} className="aspect-[3/2] bg-white rounded hover:bg-gray-50 cursor-pointer flex items-center justify-center border border-gray-200 hover:border-gray-900 p-4 transition-all group">
                            <div className="relative w-full h-full">
                                <Image
                                    src={logoPath}
                                    alt={brand}
                                    fill
                                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </FilterSection>

            {/* Price Range */}
            <FilterSection title="Price Range" defaultOpen={true}>
                <div className="w-full">
                    <Field>
                        <FieldDescription className="mb-4">
                            Set your budget range (RM
                            <span className="font-medium tabular-nums text-gray-900 mx-1">{priceRange[0]}</span> -{" "}
                            RM<span className="font-medium tabular-nums text-gray-900 mx-1">{priceRange[1]}</span>).
                        </FieldDescription>
                        <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={10000}
                            min={0}
                            step={100}
                            className="w-full"
                            aria-label="Price Range"
                        />
                    </Field>
                </div>
            </FilterSection>
        </aside>
    );
}

