'use client';

import React, { useEffect, useState } from 'react';

/* ── Thematic SVG Icons ── */
const GradCapSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L4 24l28 16 28-16L32 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 32v14c0 0 6 8 16 8s16-8 16-8V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 24v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="52" cy="46" r="2" fill="currentColor" opacity="0.5" />
    </svg>
);

const BookSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12c0-2 4-4 12-4s12 2 12 4v36c0-2-4-4-12-4s-12 2-12 4V12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 12c0-2 4-4 12-4s12 2 12 4v36c0-2-4-4-12-4s-12 2-12 4V12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 12v36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M16 18h6M16 24h6M16 30h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M40 18h6M40 24h6M40 30h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
);

const RocketSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 6c-6 8-10 18-10 28h20c0-10-4-20-10-28z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 34l-6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M42 34l6 10h-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 44h8v6c0 2-2 4-4 4s-4-2-4-4v-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="32" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
);

const StarSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8l6 14h14l-11 9 4 15-13-9-13 9 4-15L12 22h14l6-14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const LightbulbSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8a16 16 0 00-10 28.4V42h20v-5.6A16 16 0 0032 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 48h16M26 54h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 18v8M26 22l4 4M38 22l-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
);

const PenSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 52l4-16L44 8l8 8-28 28-12 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M36 16l8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M16 36l8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
);

const CompassSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="32,14 38,30 32,50 26,30" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.3" />
        <path d="M32 4v4M32 56v4M4 32h4M56 32h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    </svg>
);

const PaperPlaneSVG = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 32l52-22-22 52-8-22-22-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 36l30-26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
);

/* ── Icon definitions with positions and animations ── */
const bgIcons = [
    { Icon: GradCapSVG, top: '4%', left: '2%', size: 52, rotate: -12, delay: 0, speed: 7, color: 'text-indigo-500/[0.14]' },
    { Icon: BookSVG, top: '12%', right: '2%', size: 48, rotate: 8, delay: 1, speed: 8, color: 'text-blue-500/[0.12]' },
    { Icon: RocketSVG, top: '26%', left: '1%', size: 44, rotate: 15, delay: 0.5, speed: 6, color: 'text-violet-500/[0.13]' },
    { Icon: StarSVG, top: '20%', right: '2%', size: 40, rotate: -20, delay: 2, speed: 9, color: 'text-indigo-400/[0.15]' },
    { Icon: LightbulbSVG, top: '40%', left: '1%', size: 46, rotate: 5, delay: 1.5, speed: 7, color: 'text-blue-400/[0.14]' },
    { Icon: PenSVG, top: '36%', right: '1%', size: 42, rotate: -10, delay: 0.8, speed: 8, color: 'text-indigo-500/[0.12]' },
    { Icon: CompassSVG, top: '53%', left: '2%', size: 48, rotate: 20, delay: 2.5, speed: 6.5, color: 'text-violet-400/[0.14]' },
    { Icon: PaperPlaneSVG, top: '50%', right: '1%', size: 44, rotate: -8, delay: 1.2, speed: 7.5, color: 'text-blue-500/[0.13]' },
    { Icon: GradCapSVG, top: '66%', left: '1%', size: 40, rotate: 10, delay: 3, speed: 8, color: 'text-indigo-400/[0.15]' },
    { Icon: StarSVG, top: '70%', right: '2%', size: 36, rotate: 25, delay: 0.3, speed: 6, color: 'text-violet-500/[0.12]' },
    { Icon: BookSVG, top: '80%', left: '2%', size: 44, rotate: -15, delay: 1.8, speed: 7, color: 'text-blue-400/[0.14]' },
    { Icon: RocketSVG, top: '83%', right: '2%', size: 40, rotate: 12, delay: 2.2, speed: 8.5, color: 'text-indigo-500/[0.13]' },
    { Icon: LightbulbSVG, top: '93%', left: '1%', size: 42, rotate: -6, delay: 0.7, speed: 7, color: 'text-violet-400/[0.15]' },
    { Icon: PaperPlaneSVG, top: '90%', right: '1%', size: 38, rotate: 18, delay: 1.4, speed: 6, color: 'text-blue-500/[0.14]' },
];

export default function ApplyPageBackground() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallax = (factor) => `translateY(${scrollY * factor}px)`;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

            {/* ═══════════════ Layer 0: Base Canvas ═══════════════ */}
            <div className="absolute inset-0" style={{
                background: `
                    radial-gradient(ellipse 120% 80% at 50% 0%, #dbeafe 0%, transparent 55%),
                    radial-gradient(ellipse 100% 60% at 80% 100%, #e0e7ff 0%, transparent 50%),
                    radial-gradient(ellipse 80% 50% at 10% 60%, #dbeafe 0%, transparent 50%),
                    linear-gradient(180deg, #f0f5ff 0%, #f7f9ff 40%, #f0f4ff 70%, #eef2ff 100%)
                `
            }} />

            {/* ═══════════════ Layer 1: Floating Mesh Orbs (Parallax) ═══════════════ */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12]"
                    style={{
                        top: '-5%', right: '-8%',
                        background: 'radial-gradient(circle, #818cf8 0%, #6366f1 40%, transparent 70%)',
                        filter: 'blur(80px)',
                        transform: parallax(-0.05),
                        transition: 'transform 0.1s linear',
                    }}
                />
                <div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-[0.10]"
                    style={{
                        top: '30%', left: '-12%',
                        background: 'radial-gradient(circle, #60a5fa 0%, #3b82f6 40%, transparent 70%)',
                        filter: 'blur(80px)',
                        transform: parallax(-0.08),
                        transition: 'transform 0.1s linear',
                    }}
                />
                <div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08]"
                    style={{
                        top: '65%', right: '5%',
                        background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 40%, transparent 70%)',
                        filter: 'blur(80px)',
                        transform: parallax(-0.12),
                        transition: 'transform 0.1s linear',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-[0.07]"
                    style={{
                        top: '50%', left: '40%',
                        background: 'radial-gradient(circle, #67e8f9 0%, #22d3ee 40%, transparent 70%)',
                        filter: 'blur(80px)',
                        transform: parallax(-0.06),
                        transition: 'transform 0.1s linear',
                    }}
                />
            </div>

            {/* ═══════════════ Layer 2: Thematic College SVG Icons ═══════════════ */}
            <div className="absolute inset-0 overflow-hidden">
                {bgIcons.map(({ Icon, top, left, right, size, rotate, delay, speed, color }, i) => (
                    <div
                        key={i}
                        className={`absolute ${color}`}
                        style={{
                            top, left, right,
                            width: size, height: size,
                            transform: `rotate(${rotate}deg)`,
                            animation: `floatIcon ${speed}s ease-in-out ${delay}s infinite`,
                        }}
                    >
                        <Icon className="w-full h-full" />
                    </div>
                ))}
            </div>

            {/* ═══════════════ Layer 3: Dot Grid Pattern ═══════════════ */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, #94a3b8 0.6px, transparent 0.6px)',
                    backgroundSize: '32px 32px',
                    opacity: 0.10,
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 50%, transparent 90%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 50%, transparent 90%)',
                }}
            />

            {/* ═══════════════ Layer 4: Horizontal Light Beams ═══════════════ */}
            <div
                className="absolute w-full h-[1px] left-0 opacity-[0.12]"
                style={{
                    top: '38%',
                    background: 'linear-gradient(90deg, transparent 5%, #818cf8 30%, #60a5fa 50%, #818cf8 70%, transparent 95%)',
                    boxShadow: '0 0 30px 8px rgba(99,102,241,0.06)',
                    transform: parallax(-0.03),
                    transition: 'transform 0.1s linear',
                }}
            />
            <div
                className="absolute w-full h-[1px] left-0 opacity-[0.06]"
                style={{
                    top: '72%',
                    background: 'linear-gradient(90deg, transparent 10%, #a78bfa 35%, #60a5fa 50%, #a78bfa 65%, transparent 90%)',
                    boxShadow: '0 0 20px 4px rgba(139,92,246,0.04)',
                    transform: parallax(-0.04),
                    transition: 'transform 0.1s linear',
                }}
            />

            {/* ═══════════════ Layer 5: Glass Noise Texture ═══════════════ */}
            <div
                className="absolute inset-0 opacity-[0.018] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* ═══════════════ Layer 6: Edge Vignette ═══════════════ */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f0f5ff] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f0f5ff] to-transparent" />
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#f0f5ff]/50 to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#f0f5ff]/50 to-transparent" />

            {/* ═══════════════ Keyframes ═══════════════ */}
            <style jsx>{`
                @keyframes floatIcon {
                    0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
                    50% { transform: translateY(-12px) rotate(var(--r, 0deg)); }
                }
            `}</style>
        </div>
    );
}
