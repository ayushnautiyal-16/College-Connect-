import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - ref and isVisible state
 */
function useScrollAnimation(options = {}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentElement = elementRef.current;

        const defaultOptions = {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px', // Trigger slightly before entering viewport
            ...options,
        };

        const observer = new IntersectionObserver(([entry]) => {
            // Only trigger animation once when element becomes visible
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
            }
        }, defaultOptions);

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isVisible, options]);

    return { ref: elementRef, isVisible };
}

export default useScrollAnimation;
