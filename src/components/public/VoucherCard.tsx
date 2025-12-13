import React from 'react';

export interface VoucherCardProps {
    title: string;
    subtitle: string;
    description: string;
    isActive?: boolean;
}

export default function VoucherCard({ title, subtitle, description, isActive = false }: VoucherCardProps) {
    // Styles based on Figma "active" vs "inactive" (using Primary/Secondary colors implied)
    // Primary appears to be the Brand Teal (#4A6767 or similar), Secondary maybe Darker or Lighter.
    // Using brand colors from existing design system: brand-dark (#0F172A) and brand-teal (#14B8A6).

    const borderColor = isActive ? 'outline-brand-teal' : 'outline-gray-200';
    const titleColor = isActive ? 'text-brand-teal' : 'text-brand-dark';

    return (
        <div className={`h-full min-h-[250px] p-6 rounded-[10px] outline outline-[3px] outline-offset-[-3px] ${isActive ? 'outline-brand-teal bg-teal-50/30' : 'outline-gray-200 bg-white'} hover:outline-brand-dark transition-all flex flex-col justify-between gap-4 group cursor-pointer`}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h3 className={`text-3xl font-bold ${titleColor} font-sans leading-tight group-hover:text-brand-dark transition-colors`}>
                        {title}
                    </h3>
                </div>
                <p className={`text-sm font-semibold uppercase tracking-tight ${isActive ? 'text-brand-teal' : 'text-gray-500'} group-hover:text-brand-dark`}>
                    {subtitle}
                </p>
            </div>

            <div className="text-xs font-medium text-gray-500 leading-relaxed">
                {description.split('\n').map((line, i) => (
                    <span key={i} className="block mb-1">• {line}</span>
                ))}
            </div>

            <div className={`mt-auto text-xs font-bold underline decoration-2 underline-offset-4 ${isActive ? 'text-brand-teal' : 'text-gray-400'} group-hover:text-brand-dark`}>
                {isActive ? 'Collect Now' : 'View Details'}
            </div>
        </div>
    );
}
