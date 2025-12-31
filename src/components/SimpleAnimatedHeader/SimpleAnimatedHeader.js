import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function SimpleAnimatedHeader({ title, subtitle }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <div ref={ref} className="text-center mb-16">
            <h2
                className={`font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-[1600ms] transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                    }`}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-[1200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    style={{
                        transitionDelay: '500ms',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default SimpleAnimatedHeader;
