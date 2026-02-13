'use client';

import React, { useState, useEffect } from 'react';

function CollegeHeroSlideshow({ images, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!images || images.length === 0 || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4500); // Auto-slide every 4.5 seconds

        return () => clearInterval(interval);
    }, [images, isPaused]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className || ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={typeof image === 'string' ? image : image.url}
                        alt={typeof image === 'string' ? `Campus image ${index + 1}` : (image.title || `Campus image ${index + 1}`)}
                        className={`w-full h-full object-cover ${(typeof image === 'string' && (
                            image.includes('5_wazjsp.webp') ||
                            image.includes('section002-side-image_clige2.jpg') ||
                            image.includes('1750750305104_ffszrd.jpg') ||
                            image.includes('t7_uelxey.jpg') ||
                            image.includes('t5_keegcv.jpg')
                        ))
                            ? 'object-[center_35%]'
                            : ''
                            }`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Gradient Overlay for better text visibility if needed */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            ))}

            {/* Slide Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 backdrop-blur-sm ${index === currentIndex
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CollegeHeroSlideshow;
