import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function SimpleAnimatedHeader({ title, subtitle }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div ref={ref} className="text-center mb-20 relative">
            <h2
                className={`text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
            >
                {title}
            </h2>

            {/* Decorative Gradient Line */}
            <div className={`h-1.5 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
                }`}></div>

            {subtitle && (
                <p
                    className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

export default SimpleAnimatedHeader;
