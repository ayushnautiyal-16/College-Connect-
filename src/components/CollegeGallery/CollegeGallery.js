
import React, { useState, useEffect, useRef } from 'react';

const CollegeGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const scrollRef = useRef(null);
    const autoScrollTimer = useRef(null);

    // Responsive visible count
    const getVisibleCount = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
        return 3;
    };

    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount());
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [currentIndex, visibleCount, images]);

    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollTimer.current = setInterval(() => {
            nextSlide();
        }, 3500);
    };

    const stopAutoScroll = () => {
        if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };

    const nextSlide = () => {
        if (!images || images.length === 0) return;

        setIsTransitioning(true);
        setCurrentIndex((prev) => {
            return (prev + 1) % images.length;
        });
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full relative group">
            {/* Gallery Wrapper */}
            <div className="overflow-hidden rounded-2xl relative">
                <div
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] will-change-transform"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                    }}
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="shrink-0 px-2 box-border"
                            style={{ width: `${100 / visibleCount}%` }}
                        >
                            <div className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-300">
                                <img
                                    src={img}
                                    alt={`Gallery ${idx}`}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                                {/* Optional Caption or Icon */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress / Navigation (Optional Indicators) */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CollegeGallery;
