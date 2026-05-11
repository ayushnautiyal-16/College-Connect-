'use client';

import React from 'react';

export default function HeroSectionBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Base Gradient — matches WhyChooseUs palette */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 25%, #c7d2fe 60%, #e0e7ff 100%)' }} />

            {/* Bottom Wave Separator — blends into page */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: '80px' }}>
                <path d="M0,50 C240,10 480,70 720,40 C960,10 1200,60 1440,30 L1440,80 L0,80 Z" fill="#f0f5ff" />
            </svg>

            {/* Dot Grid Pattern — same as WhyChooseUs */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="heroDots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.2" fill="#4f46e5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#heroDots)" />
            </svg>

            {/* Floating Gradient Orbs — matching colors */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
            <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-tl from-blue-300/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
            <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-r from-sky-200/20 to-indigo-200/20 rounded-full blur-3xl" />

            {/* Top-right dashed circle rings */}
            <svg className="absolute -top-10 -right-10 w-52 h-52 opacity-[0.08] text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" strokeWidth="1.5" strokeDasharray="8 6" />
                <circle cx="100" cy="100" r="60" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="100" cy="100" r="30" strokeWidth="1" strokeDasharray="3 6" />
            </svg>

            {/* Bottom-left hexagon */}
            <svg className="absolute -bottom-8 -left-8 w-44 h-44 opacity-[0.05] text-purple-600" fill="currentColor" viewBox="0 0 200 200">
                <polygon points="100,10 180,50 180,130 100,170 20,130 20,50" />
            </svg>

            {/* Floating diamond — right side */}
            <svg className="absolute top-24 right-[20%] w-10 h-10 opacity-[0.08] text-indigo-500 animate-bounce" style={{ animationDuration: '5s' }} viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" />
            </svg>

            {/* Floating triangle — left side */}
            <svg className="absolute top-[40%] left-[8%] w-8 h-8 opacity-[0.07] text-blue-500 animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }} viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 22,20 2,20" />
            </svg>

            {/* Slow spinning plus — top center */}
            <svg className="absolute top-16 left-[45%] w-7 h-7 opacity-[0.08] text-indigo-400 animate-spin" style={{ animationDuration: '25s' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2v20M2 12h20" />
            </svg>

            {/* Small circle — bottom right area */}
            <svg className="absolute bottom-[25%] right-[12%] w-6 h-6 opacity-[0.06] text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>

            {/* Glassmorphic floating cards */}
            <div className="absolute top-[18%] left-[6%] w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(79,70,229,0.08)] transform rotate-12 animate-[heroFloat_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-[22%] right-[6%] w-28 h-28 rounded-full bg-white/15 backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_rgba(99,102,241,0.08)] transform -rotate-12 animate-[heroFloat_8s_ease-in-out_infinite_1.5s]" />

            <style jsx>{`
                @keyframes heroFloat {
                    0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
                    50% { transform: translateY(-18px) rotate(calc(var(--tw-rotate) + 4deg)); }
                }
            `}</style>
        </div>
    );
}
