'use client';

import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import GradientText from '@/components/GradientText/GradientText';

function AnimatedSectionHeader({ leftText, rightText, subtitle }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div ref={ref} className="text-center mb-16 relative">
            {/* Main Heading */}
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                {leftText}{' '}
                <span className="relative inline-block">
                    <GradientText>{rightText}</GradientText>
                    {/* Shimmer underline under gradient word */}
                    <span
                        className={`absolute -bottom-1 left-0 h-[3px] rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                        style={{
                            background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #a855f7, #6366f1)',
                            backgroundSize: '200% 100%',
                            animation: isVisible ? 'shimmer 3s linear infinite' : 'none',
                            transitionDelay: '600ms',
                        }}
                    />
                </span>
            </h2>

            {/* Decorative Underline with Diamond */}
            <div className={`flex items-center justify-center gap-2 mb-8 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`h-[2px] rounded-full bg-gradient-to-r from-transparent to-indigo-400 transition-all duration-1000 delay-500 ${isVisible ? 'w-12' : 'w-0'}`} />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                <div className={`h-[2px] rounded-full bg-gradient-to-l from-transparent to-purple-400 transition-all duration-1000 delay-500 ${isVisible ? 'w-12' : 'w-0'}`} />
            </div>

            {/* Subtitle with blur reveal */}
            {subtitle && (
                <p
                    className={`text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
                        }`}
                    style={{
                        transitionDelay: '500ms'
                    }}
                >
                    {subtitle}
                </p>
            )}

            {/* Shimmer animation */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    );
}

export default AnimatedSectionHeader;
