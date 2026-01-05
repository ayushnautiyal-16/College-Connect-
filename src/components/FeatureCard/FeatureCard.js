import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function FeatureCard({ icon, title, description, index = 0 }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-1000 ease-out transform perspective-1000 ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-12'
                }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Top Gradient Acccent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>

            {/* Icon Container with continuous pulse */}
            <div className={`w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner ${isVisible ? 'animate-pulse' : ''}`}>
                {icon}
            </div>

            {/* Content */}
            <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                {description}
            </p>
        </div>
    );
}

export default FeatureCard;
