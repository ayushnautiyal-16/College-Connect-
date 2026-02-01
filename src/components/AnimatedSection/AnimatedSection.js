import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * AnimatedSection - Wrapper component for scroll-triggered entrance animations
 * @param {string} animationType - Type of animation: 'slide-left', 'slide-right', 'fade-up'
 * @param {number} delay - Animation delay in milliseconds
 * @param {ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 */
function AnimatedSection({
    children,
    animationType = 'slide-left',
    delay = 0,
    className = ''
}) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const getAnimationClass = () => {
        switch (animationType) {
            case 'slide-left':
                return 'animate-slide-in-left';
            case 'slide-right':
                return 'animate-slide-in-right';
            case 'fade-up':
                return 'animate-fade-scale-up';
            case 'zoom-in':
                return 'animate-zoom-in';
            default:
                return 'animate-slide-in-left';
        }
    };

    const getDelayClass = () => {
        if (delay === 100) return 'animation-delay-100';
        if (delay === 200) return 'animation-delay-200';
        if (delay === 300) return 'animation-delay-300';
        if (delay === 400) return 'animation-delay-400';
        if (delay === 500) return 'animation-delay-500';
        if (delay === 600) return 'animation-delay-600';
        return '';
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'} ${getDelayClass()}`}
        >
            {children}
        </div>
    );
}

export default AnimatedSection;
