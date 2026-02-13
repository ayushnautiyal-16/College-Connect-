'use client';

import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

function AnimatedSectionHeader({ leftText, rightText, subtitle }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div ref={ref} className="text-center mb-16 relative">
            {/* Main Heading */}
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                {leftText} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{rightText}</span>
            </h2>

            {/* Decorative Underline */}
            <div className={`h-1.5 w-32 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
                }`}></div>

            {/* Subtitle */}
            {subtitle && (
                <p
                    className={`text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{
                        transitionDelay: '500ms'
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default AnimatedSectionHeader;
