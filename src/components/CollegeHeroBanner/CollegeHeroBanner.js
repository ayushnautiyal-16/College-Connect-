'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function CollegeHeroBanner({ college, images = [] }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideImages = images.length > 0 ? images : ['/placeholder-campus.jpg'];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, [slideImages.length]);

    // Auto-slide every 4 seconds
    useEffect(() => {
        if (slideImages.length <= 1) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide, slideImages.length]);

    const collegeName = college?.name || 'Our College';
    const description = college?.description || '';

    return (
        <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
            {/* Slideshow images */}
            {slideImages.map((src, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url('${src}')` }}
                />
            ))}

            {/* Left-side gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1]" />

            {/* Left-aligned text content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 flex items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl drop-shadow-lg">
                        {collegeName}
                    </h1>
                    {description && (
                        <p className="text-gray-200 text-base md:text-lg mt-4 max-w-lg leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Slide indicators */}
            {slideImages.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                    {slideImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`rounded-full transition-all duration-300 ${i === currentSlide
                                    ? 'w-8 h-2.5 bg-white'
                                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
