'use client';

import Link from 'next/link';
import {
    X,
    Calendar as CalendarIcon
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function CreateVoucherWireframe() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Create New Coupon</h2>
                    <p className="text-sm text-gray-500 mt-1">Add a new discount voucher</p>
                </div>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X className="w-6 h-6" />
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-5">
                    {/* Coupon Code */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Coupon Code <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                            placeholder="e.g., SUMMER2024"
                        />
                        <p className="text-xs text-gray-500 mt-1">Code must be unique</p>
                    </div>

                    {/* Coupon Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Coupon Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                            placeholder="e.g., Lorem Sale"
                        />
                        <p className="text-xs text-gray-500 mt-1">Internal reference name</p>
                    </div>

                    {/* Discount Type & Value */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Discount Type <span className="text-red-500">*</span>
                            </label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Percentage</SelectItem>
                                    <SelectItem value="2">Fixed Amount</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Discount Value <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-gray-800"
                                placeholder="20"
                            />
                        </div>
                    </div>

                    {/* Usage Limit */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Usage Limit
                        </label>
                        <input
                            type="number"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                            placeholder="e.g., 1000"
                        />
                        <p className="text-xs text-gray-500 mt-1">Leave blank for unlimited</p>
                    </div>

                    {/* Expiry Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                        </label>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                        </Button>
                        <p className="text-xs text-gray-500 mt-1">Coupon expires at 11:59 PM</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                        className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        className="flex-1 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                    >
                        Create Coupon
                    </button>
                </div>
            </div>
        </div>
    );
}
