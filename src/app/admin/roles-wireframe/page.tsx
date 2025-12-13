'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function RolesWireframe() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                {!isEditing && (
                    <div>
                        {/* Profile Header */}
                        <div className="p-8 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                        <img
                                            src="https://placehold.co/100x100"
                                            alt="Placeholder"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Jane Doe</h2>
                                        <p className="text-gray-600">jane.doe@example.com</p>
                                        <span className="inline-block mt-2 px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
                                            Administrator
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Details</h3>
                                <div className="space-y-5 max-w-2xl">
                                    <div className="flex items-center gap-8">
                                        <label className="w-32 text-gray-700 text-right font-medium">Full Name</label>
                                        <input
                                            type="text"
                                            value="Jane Doe"
                                            disabled
                                            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <label className="w-32 text-gray-700 text-right font-medium">Email Address</label>
                                        <input
                                            type="email"
                                            value="jane.doe@example.com"
                                            disabled
                                            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <label className="w-32 text-gray-700 text-right font-medium">Role</label>
                                        <input
                                            type="text"
                                            value="Administrator"
                                            disabled
                                            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )}

            {isEditing && (
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Edit Form */}
                    <div className="lg:col-span-2 p-8 border-r border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Edit Profile</h3>
                        <div className="space-y-5">
                            <div className="flex items-center gap-8">
                                <label className="w-32 text-gray-700 text-right font-medium">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="Jane Doe"
                                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-8">
                                    <label className="w-32 text-gray-700 text-right font-medium">Email Address</label>
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            defaultValue="jane.doe@example.com"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <label className="w-32 text-gray-700 text-right font-medium">Role</label>
                                <input
                                    type="text"
                                    value="Administrator"
                                    disabled
                                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                                <span className="text-xs text-gray-500">Read-only</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-8">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="w-32 px-8 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                className="w-32 px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Profile Picture Section */}
                    <div className="p-8 bg-gray-50 flex flex-col items-center justify-start">
                        <div className="text-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mx-auto mb-4">
                                <img
                                    src="https://placehold.co/100x100"
                                    alt="Placeholder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-white transition-colors mb-4">
                                Upload Photo
                            </button>
                            <p className="text-xs text-gray-500">Max file size: 2MB</p>
                            <p className="text-xs text-gray-500">Allowed extensions: .jpg, .png</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div >
            );
}
