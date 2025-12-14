"use client";

import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Sidebar from '@/components/admin/Sidebar';
import TopNav from '@/components/admin/TopNav';

export default function AdminLayoutShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const mainElement = mainRef.current;
        if (!mainElement) return;

        const handleScroll = () => {
            if (mainElement.scrollTop > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        mainElement.addEventListener('scroll', handleScroll);
        return () => mainElement.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        mainRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'} h-full`}>
                <TopNav />
                <main ref={mainRef} className="flex-1 p-6 overflow-y-auto scroll-smooth">
                    {children}
                </main>

                {/* Admin Scroll To Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 animate-in fade-in zoom-in duration-300"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} />
                    </button>
                )}
            </div>
        </div>
    );
}
