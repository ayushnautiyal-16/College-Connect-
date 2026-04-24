'use client';

import React from 'react';

export default function ApplyPageBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#f4f9ff]" style={{ zIndex: 0 }}>
            
            {/* 1. Base Gradient Layer to give it a soft, non-flat look */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe]/60 via-[#f0f9ff]/40 to-[#f8fafc]/80" />

            {/* 2. Crisp, subtle grid pattern for structure */}
            <div 
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #bae6fd 1px, transparent 1px),
                        linear-gradient(to bottom, #bae6fd 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    maskImage: 'linear-gradient(to bottom, black 10%, transparent 85%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 85%)'
                }}
            />

            {/* 3. Ambient Light Orbs (Blurred Gradients) */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top Right Aura */}
                <div 
                    className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-[140px] opacity-[0.25] animate-blob"
                    style={{ background: 'linear-gradient(135deg, #7dd3fc, #3b82f6)' }}
                />
                
                {/* Center Left Aura */}
                <div 
                    className="absolute top-[25%] -left-[10%] w-[700px] h-[700px] rounded-full mix-blend-multiply filter blur-[140px] opacity-[0.25] animate-blob"
                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', animationDelay: '2s' }}
                />
                
                {/* Bottom Right Aura */}
                <div 
                    className="absolute top-[60%] right-[5%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[140px] opacity-[0.20] animate-blob"
                    style={{ background: 'linear-gradient(135deg, #60a5fa, #bae6fd)', animationDelay: '4s' }}
                />
            </div>

            {/* 4. Glassmorphism Noise Texture */}
            <div 
                className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* 5. Edge Fades to keep content legible */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f4f9ff] to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f4f9ff] to-transparent opacity-100" />
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#f4f9ff]/60 to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#f4f9ff]/60 to-transparent" />
        </div>
    );
}
