'use client';

import { useState } from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function CreateVoucherWireframe() {
  const [date, setDate] = useState<Date>();
  const [codeError, setCodeError] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-6 grayscale">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Lorem Ipsum Dolor Sit</h2>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="space-y-6">
          {/* Coupon Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lorem Ipsum * 
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
                codeError
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-gray-900'
              }`}
              placeholder="Lorem IPSUM2024"
              onChange={(e) => setCodeError(e.target.value === 'DUPLICATE')}
            />
            {codeError && (
              <p className="text-xs text-red-600 mt-1">Lorem ipsum dolor sit amet</p>
            )}
            {!codeError && (
              <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit amet</p>
            )}
          </div>

          {/* Coupon Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lorem Dolor *
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Lorem Sit Amet"
            />
            <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit amet</p>
          </div>

          {/* Discount Type & Value */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lorem Ipsum *
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Lorem ipsum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Lorem %</SelectItem>
                  <SelectItem value="2">Ipsum $</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lorem Dolor *
              </label>
              <input
                type="number"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="20"
              />
            </div>
          </div>

          {/* Usage Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lorem Sit Amet
            </label>
            <input
              type="number"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Lorem 1000"
            />
            <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit amet</p>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lorem Ipsum Dolor
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>{date ? date.toLocaleDateString() : "Lorem ipsum dolor"}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit 11:59 PM</p>
          </div>

          {/* Minimum Purchase */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lorem Dolor Sit (Lorem)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Lorem $50"
            />
            <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit amet</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lorem Consectetur (Lorem)
            </label>
            <textarea
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
              placeholder="Lorem ipsum dolor sit amet consectetur..."
              rows={4}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
          <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Lorem
          </button>
          <button className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors">
            Lorem Ipsum
          </button>
        </div>
      </div>
    </div>
  );
}
