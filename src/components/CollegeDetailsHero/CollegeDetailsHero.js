'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GradientText from '@/components/GradientText/GradientText';

export default function CollegeDetailsHero({ college, images = [] }) {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Use up to 4 images for the layout
    const heroImages = images.slice(0, 4);
    while (heroImages.length < 4) {
        heroImages.push(heroImages[0] || '/placeholder.jpg');
    }

    return (
        <section className="relative w-full overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24 px-4 md:px-6"
            style={{ background: 'linear-gradient(160deg, #0f172a 0%, #131d36 30%, #162040 55%, #1a2744 80%, #1e2d4a 100%)' }}
        >
            {/* ──── Subtle Grid Pattern ──── */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* ──── Soft Radial Glows ──── */}
            <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-indigo-500/8 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-6%] w-[450px] h-[450px] rounded-full bg-slate-400/6 blur-[100px] pointer-events-none" />
            <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

            {/* ──── Content Container ──── */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* ════════ Left Side — Text Content ════════ */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Top Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-[11px] font-semibold text-gray-300/90 tracking-wider uppercase">
                                {college.accreditation ? college.accreditation.split('|')[0].trim() : 'Admissions Open 2026'}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                            Our College{' '}
                            <br />
                            <GradientText>{college.name || 'Community'}</GradientText>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300/90 text-lg leading-relaxed max-w-lg mb-5">
                            {college.bestPart
                                || college.description
                                || `Discover world-class education, vibrant campus life, and outstanding career opportunities at ${college.name}.`}
                        </p>

                        <p className="text-gray-400/80 text-sm leading-relaxed max-w-lg mb-10">
                            Located in {college.location || 'Dehradun'}, our campus offers state-of-the-art infrastructure,
                            experienced faculty, and a thriving student community that prepares you for a successful career.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mb-10">
                            {college.established && (
                                <div>
                                    <div className="text-2xl font-bold text-white">{college.established}</div>
                                    <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold mt-1">Established</div>
                                </div>
                            )}
                            {college.campusSize && (
                                <div>
                                    <div className="text-2xl font-bold text-white">{college.campusSize}</div>
                                    <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold mt-1">Campus</div>
                                </div>
                            )}
                            {college.placementRate && (
                                <div>
                                    <div className="text-2xl font-bold text-white">{college.placementRate}</div>
                                    <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold mt-1">Placements</div>
                                </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => router.push('/apply')}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center gap-2.5"
                        >
                            Apply Now
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* ════════ Right Side — Image Layout ════════ */}
                    <div className={`transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                        {/* Large Main Image */}
                        <div className="relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 mb-5 group">
                            <img
                                src={heroImages[0]}
                                alt={`${college.name} campus`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            {/* Location Badge */}
                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                                <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {college.location || 'Dehradun'}
                                </span>
                            </div>
                        </div>

                        {/* Bottom 3 Images Grid — Asymmetric */}
                        <div className="grid grid-cols-3 gap-4">
                            {/* Image 1 — Shorter */}
                            <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src={heroImages[1]}
                                    alt={`${college.name} life 1`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            {/* Image 2 — Taller, wider feel */}
                            <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src={heroImages[2]}
                                    alt={`${college.name} life 2`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            {/* Image 3 — Standard */}
                            <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src={heroImages[3]}
                                    alt={`${college.name} life 3`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ──── Bottom Gradient Fade to page background ──── */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f8fafc] to-transparent" />
        </section>
    );
}
