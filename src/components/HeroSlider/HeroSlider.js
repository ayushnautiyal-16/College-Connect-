'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { getAssetUrl } from '@/utils/assets';
import { useRouter } from 'next/navigation';
import '@/styles/apply-animations.css'; // Import custom animations
import { motion, AnimatePresence } from 'framer-motion';

function HeroSlider() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const progressIntervalRef = useRef(null);
  const [loadedSlides, setLoadedSlides] = useState(new Set([0]));

  // Slides data is memoized to prevent re-creation on every render
  const slides = useMemo(() => [
    {
      id: 1,
      headline: 'Admissions Open 2026',
      ctaText: 'Apply Now',
      ctaLink: '/apply',
      video: getAssetUrl('graphic era/geu-homepage-video.mp4'),
      bgGradient: 'from-blue-600 via-indigo-600 to-purple-600',
      videoDuration: 20,
    },
    {
      id: 2,
      headline: 'Your Dream College',
      ctaText: 'Get Free Counselling',
      ctaLink: '/contact',
      video: getAssetUrl('UPES/Life at UPES _ UPES Dehradun(1080P_HD) (1).mp4'),
      bgGradient: 'from-primary-600 via-primary-500 to-primary-700',
      videoDuration: 20,
    },
    {
      id: 3,
      headline: 'Expert Admission Guidance',
      ctaText: 'Expert Admission Counselling',
      ctaLink: '/campuses',
      video: getAssetUrl('uttaranchal/Why Uttaranchal University is North India’s Top Choice  750+ Recruiters & 2356+ Placements in 2024! - Uttaranchal University (1080p, h264, youtube).mp4'),
      bgGradient: 'from-green-600 via-emerald-600 to-teal-600',
      videoDuration: 20,
    },
  ], []);

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);

    // Mark current slide and next slide as loaded (preload next)
    setLoadedSlides((prev) => {
      const next = new Set(prev);
      next.add(currentSlide);
      next.add((currentSlide + 1) % slides.length);
      return next;
    });

    // Handle video auto-advance for slides with video
    const currentSlideData = slides[currentSlide];
    if (currentSlideData && currentSlideData.video) {
      const currentVideo = videoRefs.current[currentSlide];

      // Pause all other videos
      videoRefs.current.forEach((vid, i) => {
        if (vid && i !== currentSlide) {
          vid.pause();
        }
      });

      // Play current video
      if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(console.error);
      }

      // Auto-advance after video duration
      const videoTimeout = setTimeout(() => {
        setCurrentSlide((current) => (current + 1) % slides.length);
      }, currentSlideData.videoDuration * 1000);

      return () => clearTimeout(videoTimeout);
    }
  }, [currentSlide, slides]);

  // Auto-slide functionality with progress bar
  useEffect(() => {
    // Skip auto-slide for any slide that has video (video handles its own timing)
    const currentSlideData = slides[currentSlide];
    if (currentSlideData && currentSlideData.video) {
      return;
    }

    if (isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    // Progress bar animation (0 to 100 over 5 seconds)
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 2; // Increment by 2 for smoother animation (100 steps in 5 seconds = 2 per 100ms)
      });
    }, 100); // Update every 100ms

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, currentSlide, slides]);

  // Handle slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleCTAClick = (link) => {
    router.push(link);
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="wait">
          {slides.map((slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Video background with lightweight preload */}
                {slide.video && (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay={index === currentSlide}
                      muted
                      loop={false}
                      playsInline
                      preload="metadata" // avoid heavy auto-preload
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
                  </>
                )}

                {/* Pure gradient fallback when there is no video configured */}
                {!slide.video && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90`} />
                )}

                {/* Content Container */}
                <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 h-full">
                  <div className="flex flex-col justify-end h-full pb-16 md:pb-20">
                    {/* Left Bottom - Text Content */}
                    <div
                      className={`text-white transition-all duration-700 ease-in-out relative z-30 max-w-2xl opacity-100 transform translate-x-0`}
                    >
                      <div className="relative z-10">
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-2xl text-white animate-text-glow">
                          {slide.headline}
                        </h1>
                        <button
                          onClick={() => handleCTAClick(slide.ctaLink)}
                          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm tracking-wide transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 animate-pulse-white hover:animate-none"
                        >
                          {slide.ctaText}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/50 rounded-full ${index === currentSlide
              ? 'bg-white w-12 h-3'
              : 'bg-white/50 hover:bg-white/75 w-3 h-3'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div
          className={`h-full bg-white transition-all ${isPaused ? 'duration-300' : 'duration-100'} ease-linear`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

export default HeroSlider;

