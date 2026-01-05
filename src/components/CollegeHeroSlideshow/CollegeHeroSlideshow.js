import React, { useState, useEffect } from 'react';

function CollegeHeroSlideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (images.length === 0 || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4500); // Auto-slide every 4.5 seconds

        return () => clearInterval(interval);
    }, [images.length, isPaused]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div
            className="relative w-full h-full min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={typeof image === 'string' ? image : image.url}
                        alt={typeof image === 'string' ? `Campus image ${index + 1}` : (image.title || `Campus image ${index + 1}`)}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                </div>
            ))}
            
            {/* Slide Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-white/50 hover:bg-white/75'
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

