import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSlider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const progressIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      headline: 'Admissions Open 2025',
      ctaText: 'Apply Now',
      ctaLink: '/contact',
      video: 'https://res.cloudinary.com/djjdvw3wc/video/upload/v1766775114/geu-homepage-video_nrlm4m.mp4',
      bgGradient: 'from-blue-600 via-indigo-600 to-purple-600',
      videoDuration: 20, // Auto-advance after 20 seconds
    },
    {
      id: 2,
      headline: 'Your Dream College',
      ctaText: 'Get Free Counseling',
      ctaLink: '/contact',
      video: 'https://res.cloudinary.com/djjdvw3wc/video/upload/v1766775565/Life_at_UPES_UPES_Dehradun_-_UPES_1080p_h264_hepxuc.mp4',
      bgGradient: 'from-primary-600 via-primary-500 to-primary-700',
      videoDuration: 20,
    },
    {
      id: 3,
      headline: 'Expert Admission Guidance',
      ctaText: 'Explore Colleges',
      ctaLink: '/campuses',
      video: 'https://res.cloudinary.com/djjdvw3wc/video/upload/v1766776995/Why_Uttaranchal_University_is_North_India_s_Top_Choice_750_Recruiters_2356_Placements_in_2024_-_Uttaranchal_University_1080p_h264_apekiz.mp4',
      bgGradient: 'from-green-600 via-emerald-600 to-teal-600',
      videoDuration: 20,
    },
  ];

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);

    // Handle video auto-advance for slides with video
    const currentSlideData = slides[currentSlide];
    if (currentSlideData && currentSlideData.video) {
      // Reset video if it exists
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(console.error);
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
  }, [isPaused, slides.length, currentSlide, slides]);

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
    navigate(link);
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
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Video Background for video slides */}
            {slide.video && (
              <>
                <video
                  ref={index === currentSlide ? videoRef : null}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop={false}
                  playsInline
                >
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent"></div>
              </>
            )}

            {/* Gradient Background for non-video slides */}
            {!slide.video && (
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90`}></div>
            )}

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 h-full">
              <div className="flex flex-col justify-end h-full pb-16 md:pb-20">
                {/* Left Bottom - Text Content */}
                <div
                  className={`text-white transition-all duration-700 ease-in-out relative z-30 max-w-2xl ${index === currentSlide
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform -translate-x-8'
                    }`}
                >
                  <div className="relative z-10">
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-2xl text-white">
                      {slide.headline}
                    </h1>
                    <button
                      onClick={() => handleCTAClick(slide.ctaLink)}
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50"
                    >
                      {slide.ctaText}
                    </button>
                  </div>
                </div>

                {/* Right Side - Image (only for non-video slides) */}
                {!slide.video && (
                  <div
                    className={`flex-1 flex items-center justify-center transition-all duration-700 ease-in-out ${index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-8'
                      }`}
                  >
                    <div className="w-full max-w-md lg:max-w-lg">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
                        <div className="text-8xl md:text-9xl text-center">
                          {slide.image}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
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

