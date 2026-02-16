'use client';

import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

function FeatureCard({ icon, title, description, index = 0 }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`group relative overflow-hidden rounded-2xl border border-slate-100/80 bg-white/90 backdrop-blur-sm p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-200 transition-all duration-700 ease-out transform perspective-1000 ${
                isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-12'
            }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Subtle radial glow behind content */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-indigo-100/60 blur-3xl" />
                <div className="absolute -bottom-10 left-0 h-32 w-32 rounded-full bg-sky-100/60 blur-3xl" />
            </div>

            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

            {/* Icon Container with subtle motion */}
            <div
                className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50 text-indigo-600 flex items-center justify-center shadow-inner shadow-slate-200 group-hover:from-indigo-600 group-hover:via-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                } group-hover:-translate-y-1`}
            >
                {icon}
            </div>

            {/* Content */}
            <h3 className="relative z-10 font-bold text-xl text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {title}
            </h3>
            <p className="relative z-10 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                {description}
            </p>
        </div>
    );
}

export default FeatureCard;
