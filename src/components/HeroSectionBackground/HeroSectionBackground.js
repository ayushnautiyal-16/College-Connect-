'use client';

import React from 'react';

export default function HeroSectionBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Base Background Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#eef2ff]" />

            {/* Premium Flowing Vector Waves (Top Right) */}
            <svg 
                className="absolute top-0 right-0 w-[800px] h-[800px] text-[#1d4e89]/15 transform translate-x-1/4 -translate-y-1/4"
                viewBox="0 0 800 800" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M400 800C620.914 800 800 620.914 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 620.914 179.086 800 400 800ZM400 700C565.685 700 700 565.685 700 400C700 234.315 565.685 100 400 100C234.315 100 100 234.315 100 400C100 565.685 234.315 700 400 700Z" 
                    fill="currentColor"
                />
                <circle cx="400" cy="400" r="200" fill="currentColor" opacity="0.5" />
            </svg>

            {/* Premium Flowing Vector Waves (Bottom Left) */}
            <svg 
                className="absolute bottom-0 left-0 w-[600px] h-[600px] text-[#c5a059]/15 transform -translate-x-1/3 translate-y-1/4"
                viewBox="0 0 600 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="300" cy="300" r="300" fill="currentColor" />
                <circle cx="300" cy="300" r="150" fill="currentColor" opacity="0.3" />
            </svg>

            {/* Floating Glassmorphic Shapes */}
            <div className="absolute top-[15%] left-[5%] w-24 h-24 rounded-2xl bg-white/30 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_rgba(29,78,137,0.15)] transform rotate-12 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-[20%] right-[8%] w-32 h-32 rounded-full bg-white/20 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_rgba(197,160,89,0.15)] transform -rotate-12 animate-[float_8s_ease-in-out_infinite_1s]" />

            {/* Glowing Accent Orbs for Depth */}
            <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-[#1d4e89]/20 blur-[80px]" />
            <div className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-[#6096ba]/20 blur-[100px]" />

            {/* Subtle Grid Pattern for Academic Feel */}
            <div 
                className="absolute inset-0 opacity-[0.06]"  
                style={{
                    backgroundImage: `linear-gradient(#1d4e89 1px, transparent 1px), linear-gradient(90deg, #1d4e89 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)'
                }} 
            />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
                    50% { transform: translateY(-20px) rotate(calc(var(--tw-rotate) + 5deg)); }
                }
            `}</style>
        </div>
    );
}
