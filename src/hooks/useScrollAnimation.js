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
        if (isVisible) return; // Optimization: stop observing once visible

        const currentElement = elementRef.current;
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (currentElement) {
                    observer.unobserve(currentElement);
                }
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
