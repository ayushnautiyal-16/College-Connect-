'use client';

import React, { useState, useEffect, useCallback } from 'react';

const CollegeGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Determine number of visible images based on screen size
    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    // Start with server-safe default (3), then sync on mount to avoid hydration mismatch
    const [visibleCount, setVisibleCount] = useState(3);

    // Handle window resize & initial sync
    useEffect(() => {
        setVisibleCount(getVisibleCount());
        const handleResize = () => setVisibleCount(getVisibleCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-advance slideshow
    useEffect(() => {
        if (!images || images.length <= visibleCount || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = images.length - visibleCount;
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 4000); // Advance every 4 seconds

        return () => clearInterval(interval);
    }, [images, visibleCount, isPaused]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    if (!images || images.length === 0) return null;

    const maxDots = Math.max(1, images.length - visibleCount + 1);

    return (
        <div
            className="w-full relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slideshow Container */}
            <div className="overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                    }}
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 px-2"
                            style={{ width: `${100 / visibleCount}%` }}
                        >
                            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                {/* Image */}
                                <img
                                    src={img}
                                    alt={`Campus Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Premium Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                {/* Image Number Badge */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-gray-800 shadow-lg">
                                        {idx + 1} / {images.length}
                                    </div>
                                </div>

                                {/* Camera Icon */}
                                <div className="absolute bottom-4 left-4 opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                    <div className="p-2.5 bg-white/25 backdrop-blur-md rounded-full text-white shadow-lg border border-white/20">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress Indicators / Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
                {Array.from({ length: maxDots }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${idx === currentIndex
                            ? 'w-10 h-2 bg-indigo-600'
                            : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CollegeGallery;
