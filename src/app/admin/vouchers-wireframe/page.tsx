'use client';

import { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  Ticket,
  Copy,
  Calendar as CalendarIcon,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function VouchersWireframe() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [date, setDate] = useState<Date>();
  const [codeError, setCodeError] = useState(false);

  return (
    <div className="space-y-6 grayscale">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lorem Ipsum Dolor</h1>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors"
        >
          <Plus size={18} />
          Lorem Ipsum
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Lorem Ipsum</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">24</h3>
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
            <Ticket size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Lorem Dolor</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">1,203</h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
            <Copy size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Lorem Sit</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">8</h3>
          </div>
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700">
            <CalendarIcon size={24} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Controls */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Lorem ipsum dolor sit..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Lorem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Lorem Ipsum</SelectItem>
                  <SelectItem value="1">Lorem Dolor</SelectItem>
                  <SelectItem value="2">Lorem Sit</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Lorem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Lorem Ipsum</SelectItem>
                  <SelectItem value="1">Lorem %</SelectItem>
                  <SelectItem value="2">Lorem $</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-6 py-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-gray-700">
                <tr>
                  <th className="px-4 py-3 font-medium">Lorem / Ipsum</th>
                  <th className="px-4 py-3 font-medium">Lorem Dolor</th>
                  <th className="px-4 py-3 font-medium">Lorem Sit</th>
                  <th className="px-4 py-3 font-medium">Lorem Amet</th>
                  <th className="px-4 py-3 font-medium">Lorem Ipsum</th>
                  <th className="px-4 py-3 font-medium text-center">Lorem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { code: 'LOREM2024', name: 'Lorem Ipsum Dolor', discount: '20%', type: 'Lorem', used: 245, total: 500, status: 'active', date: 'Dec 31, 2024' },
                  { code: 'DOLOR2024', name: 'Dolor Sit Amet', discount: '$50', type: 'Ipsum', used: 189, total: 300, status: 'active', date: 'Jan 15, 2025' },
                  { code: 'SITAMET24', name: 'Consectetur Elit', discount: '15%', type: 'Lorem', used: 456, total: 1000, status: 'active', date: 'Feb 28, 2025' },
                  { code: 'CONSECTE', name: 'Sed Eiusmod Tempor', discount: '$25', type: 'Ipsum', used: 302, total: 500, status: 'expired', date: 'Nov 30, 2024' },
                  { code: 'EIUSMOD1', name: 'Incididunt Labore', discount: '30%', type: 'Lorem', used: 78, total: 200, status: 'active', date: 'Mar 31, 2025' },
                  { code: 'TEMPOR99', name: 'Ut Dolore Magna', discount: '$100', type: 'Ipsum', used: 34, total: 100, status: 'active', date: 'Apr 15, 2025' },
                  { code: 'LABORE24', name: 'Aliqua Veniam', discount: '25%', type: 'Lorem', used: 567, total: 750, status: 'active', date: 'May 30, 2025' },
                  { code: 'MAGNA365', name: 'Quis Nostrud', discount: '$75', type: 'Ipsum', used: 123, total: 250, status: 'expired', date: 'Oct 31, 2024' },
                ].map((voucher, i) => (
                  <tr key={i} className="hover:bg-gray-50 group transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-gray-900 border border-dashed border-gray-300 bg-gray-50 px-2 py-1 rounded w-fit text-xs">
                          {voucher.code}
                        </span>
                        <span className="text-xs text-gray-500">{voucher.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-gray-900">{voucher.discount}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 w-fit">
                          {voucher.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gray-600"
                            style={{ width: `${(voucher.used / voucher.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">
                          {voucher.used} / {voucher.total}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${voucher.status === 'active'
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-gray-200 text-gray-700'
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${voucher.status === 'active' ? 'bg-gray-600' : 'bg-gray-600'
                            }`}
                        ></span>
                        {voucher.status === 'active' ? 'Lorem' : 'Ipsum'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600">{voucher.date}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setShowEditModal(true)}
                          className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700 transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => setShowDeleteModal(true)}
                          className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            <ChevronLeft size={16} /> Lorem
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${page === 1 ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            Lorem <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowCreateModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor Sit</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Ipsum *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${codeError
                      ? 'border-red-300 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-gray-900'
                      }`}
                    placeholder="Lorem IPSUM2024"
                    onChange={(e) => setCodeError(e.target.value === 'DUPLICATE')}
                  />
                  {codeError && (
                    <p className="text-xs text-red-600 mt-1">Lorem ipsum dolor sit amet</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Dolor *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Lorem Sit Amet"
                  />
                </div>

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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Sit Amet
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Lorem 1000"
                  />
                </div>

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
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setShowSuccessModal(true);
                  }}
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal - Similar to Create */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowEditModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Ipsum *
                  </label>
                  <input
                    type="text"
                    defaultValue="LOREM2024"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Dolor *
                  </label>
                  <input
                    type="text"
                    defaultValue="Lorem Ipsum Dolor"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lorem Ipsum *
                    </label>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full">
                        <SelectValue />
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
                      defaultValue="20"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lorem Sit Amet
                  </label>
                  <input
                    type="number"
                    defaultValue="500"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setShowSuccessModal(true);
                  }}
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowDeleteModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 size={32} className="text-red-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Lorem Ipsum Dolor?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Lorem
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setShowSuccessModal(true);
                  }}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-gray-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lorem Ipsum Dolor Sit!
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
              >
                Lorem ipsum!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
