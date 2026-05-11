'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import ApplyPageBackground from '@/components/ApplyPageBackground/ApplyPageBackground';

/* ── Confetti Particle ── */
function ConfettiPiece({ delay, left, color, size }) {
    return (
        <div
            className="absolute rounded-sm opacity-0"
            style={{
                left: `${left}%`,
                top: '-5%',
                width: `${size}px`,
                height: `${size * 0.6}px`,
                backgroundColor: color,
                animation: `confettiFall 3s ${delay}s ease-out forwards`,
            }}
        />
    );
}

/* ── Animated Checkmark SVG ── */
function AnimatedCheckmark() {
    return (
        <svg className="w-9 h-9" viewBox="0 0 52 52">
            <circle
                className="stroke-white fill-none"
                cx="26" cy="26" r="24"
                strokeWidth="3"
                style={{
                    strokeDasharray: 166,
                    strokeDashoffset: 166,
                    animation: 'checkCircle 0.6s 0.3s ease-in-out forwards',
                }}
            />
            <path
                className="stroke-white fill-none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    strokeDasharray: 48,
                    strokeDashoffset: 48,
                    animation: 'checkStroke 0.4s 0.8s ease-in-out forwards',
                }}
            />
        </svg>
    );
}

export default function ThankYouPage() {
    const router = useRouter();
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Trigger entrance after mount
        const t = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(t);
    }, []);

    /* confetti config */
    const confettiColors = ['#6366f1', '#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
    const confettiPieces = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        delay: Math.random() * 1.5,
        left: Math.random() * 100,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: 6 + Math.random() * 8,
    }));

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* 
              GTM is already loaded from root layout.js — no duplicate script needed.
              Push a custom event so GTM can fire conversion tags on this page.
            */}
            <Script
                id="gtm-thankyou-event"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'event': 'form_submission_success',
                            'page_type': 'thank_you'
                        });
                    `
                }}
            />

            {/* Background */}
            <ApplyPageBackground />

            {/* Confetti Layer */}
            <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
                {confettiPieces.map((p) => (
                    <ConfettiPiece key={p.id} {...p} />
                ))}
            </div>

            {/* Main Card */}
            <div
                className={`max-w-sm w-full relative z-10 transition-all duration-1000 ease-out ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                    }`}
            >
                <div className="relative bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] border border-white/80 overflow-hidden">

                    {/* Decorative gradient orbs inside card */}
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* Success Icon */}
                        <div
                            className={`mb-5 transition-all duration-700 delay-300 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                        >
                            <div className="relative">
                                {/* Pulsing rings */}
                                <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-400/20 animate-ping" style={{ animationDuration: '2s' }} />
                                <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-400/10 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />

                                {/* Icon circle */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
                                    <AnimatedCheckmark />
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1
                            className={`text-2xl md:text-3xl font-black bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 tracking-tight transition-all duration-700 delay-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        >
                            Thank You!
                        </h1>

                        {/* Emoji celebration */}
                        <div
                            className={`text-xl mb-3 transition-all duration-500 delay-700 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        >
                            🎉
                        </div>

                        {/* Description */}
                        <p
                            className={`text-gray-600 text-xs md:text-sm leading-relaxed mb-6 transition-all duration-700 delay-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            Your application has been received successfully. Our expert counsellors will review your profile and get in touch with you shortly.
                        </p>

                        {/* Action Buttons */}
                        <div
                            className={`w-full space-y-2.5 transition-all duration-700 delay-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        >
                            <button
                                onClick={() => router.back()}
                                className="w-full bg-white/80 hover:bg-white text-gray-600 font-medium py-2.5 px-4 rounded-xl text-sm border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500 group-hover:-translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Go Back
                            </button>

                            <Link
                                href="/"
                                className="w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-[length:200%_100%] hover:bg-right text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-500 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Return to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframe Animations */}
            <style jsx>{`
                @keyframes checkCircle {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes checkStroke {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes confettiFall {
                    0% {
                        opacity: 1;
                        transform: translateY(0) rotate(0deg) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(100vh) rotate(720deg) scale(0.3);
                    }
                }
            `}</style>
        </div>
    );
}
