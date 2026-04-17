'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GradientText from '@/components/GradientText/GradientText';

export default function CollegeDetailsHero({ college, images = [] }) {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Prepare images
    const heroImages = images.length > 0 ? images : ['/placeholder.jpg'];
    const slideshowImages = heroImages.slice(0, Math.min(heroImages.length, 8));
    const thumbImages = heroImages.slice(0, 4);
    while (thumbImages.length < 2) {
        thumbImages.push(thumbImages[0] || '/placeholder.jpg');
    }

    // Entrance animation
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Auto-slide
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, [slideshowImages.length]);

    useEffect(() => {
        if (slideshowImages.length <= 1) return;
        const interval = setInterval(nextSlide, 4500);
        return () => clearInterval(interval);
    }, [nextSlide, slideshowImages.length]);

    // Placement info
    const placementRate = college.placements?.placementRate || college.placementRate || null;
    const highestPackage = college.placements?.highestPackage || null;

    return (
        <section
            className="relative w-full overflow-hidden min-h-screen flex items-center"
            style={{
                background: 'linear-gradient(145deg, #0b1220 0%, #0f1b35 40%, #1b2240 100%)',
            }}
        >
            {/* ──── Large Grid Lines Overlay ──── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.10]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '240px 240px',
                }}
            />

            {/* ──── Soft Radial Glows ──── */}
            <div className="absolute top-[10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-indigo-500/[0.07] blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-slate-400/[0.04] blur-[120px] pointer-events-none" />
            <div className="absolute top-[60%] right-[30%] w-[350px] h-[350px] rounded-full bg-cyan-500/[0.04] blur-[100px] pointer-events-none" />
            <div className="absolute top-[-10%] left-[50%] w-[400px] h-[400px] rounded-full bg-purple-500/[0.05] blur-[130px] pointer-events-none" />

            {/* ──── Content ──── */}
            <div className="relative z-10 w-full py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* ════════════════════════════════════ */}
                        {/* LEFT SIDE — IMAGE SECTION            */}
                        {/* ════════════════════════════════════ */}
                        <div
                            className={`transition-all duration-1000 delay-150 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                        >
                            {/* ── Top Large Image Slideshow ── */}
                            <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 lg:-ml-16 group">
                                {slideshowImages.map((src, i) => (
                                    <div
                                        key={i}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                            }`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`${college.name} campus view ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={i === 0}
                                        />
                                    </div>
                                ))}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                                {/* Slide indicators */}
                                {slideshowImages.length > 1 && (
                                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                                        {slideshowImages.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentSlide(i)}
                                                className={`rounded-full transition-all duration-300 ${i === currentSlide
                                                    ? 'w-8 h-2 bg-white'
                                                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                                                    }`}
                                                aria-label={`Go to slide ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Location badge */}
                                <div className="absolute top-5 left-5 z-30 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {college.location ? college.location.split(',').slice(0, 2).join(',') : 'Dehradun'}
                                    </span>
                                </div>
                            </div>

                            {/* ── Bottom Smaller Image Cards ── */}
                            <div className="grid grid-cols-2 gap-6 mt-6">
                                {thumbImages.slice(0, 2).map((src, i) => (
                                    <div
                                        key={i}
                                        className="relative h-[180px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                                    >
                                        <Image
                                            src={src}
                                            alt={`${college.name} gallery ${i + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ════════════════════════════════════ */}
                        {/* RIGHT SIDE — COLLEGE INFO            */}
                        {/* ════════════════════════════════════ */}
                        <div
                            className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {/* Label / Badge */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                                    {college.accreditation ? college.accreditation.split('|')[0].trim() : 'Admissions Open 2026'}
                                </span>
                            </div>

                            {/* College Name */}
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                                <GradientText colorTheme="orange">{college.name || 'Our College'}</GradientText>
                            </h1>

                            {/* Description */}
                            <p className="text-gray-400 mt-2 max-w-xl leading-relaxed text-base md:text-lg">
                                {college.bestPart
                                    ? college.bestPart.length > 300
                                        ? college.bestPart.substring(0, 300) + '...'
                                        : college.bestPart
                                    : college.description
                                    || `Discover world-class education, vibrant campus life, and outstanding career opportunities at ${college.name}.`}
                            </p>

                            {/* Stats Boxes */}
                            <div className="grid grid-cols-2 gap-3 mt-8 mb-8">
                                {college.established && (
                                    <div className="group relative rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-blue-500/10 cursor-default">
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">Established</span>
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold text-white pl-0.5">{college.established}</div>
                                    </div>
                                )}

                                {college.campusSize && (
                                    <div className="group relative rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-emerald-500/10 cursor-default">
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">Campus</span>
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold text-white pl-0.5">{college.campusSize}</div>
                                    </div>
                                )}

                                {placementRate && (
                                    <div className="group relative rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-violet-500/10 cursor-default">
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">Placements</span>
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold text-white pl-0.5">{placementRate}</div>
                                    </div>
                                )}

                                {highestPackage && (
                                    <div className="group relative rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-amber-500/10 cursor-default">
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">Highest Package</span>
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold text-white pl-0.5">{highestPackage}</div>
                                    </div>
                                )}
                            </div>

                            {/* Accreditation tags */}
                            {college.accreditation && (
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {college.accreditation.split('|').map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.05] border border-white/[0.08] text-gray-300/80 tracking-wide"
                                        >
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* CTA Button */}
                            <button
                                onClick={() => router.push('/apply')}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center gap-2.5 group"
                            >
                                Apply Now
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ──── Bottom Gradient Fade ──── */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fafc] to-transparent z-20 pointer-events-none" />
        </section>
    );
}
