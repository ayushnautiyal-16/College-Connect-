'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const qualityPoints = [
    {
        icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
        title: 'World-Class Faculty',
        description: 'Learn from experienced professors, industry practitioners, and researchers who bring real-world expertise to every classroom.',
    },
    {
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        title: 'Advanced Research Labs',
        description: 'State-of-the-art laboratories equipped with cutting-edge technology for hands-on learning and innovative research.',
    },
    {
        icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Industry Placements',
        description: 'Strong corporate partnerships ensuring top placement opportunities with leading national and international companies.',
    },
    {
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
        title: 'Vibrant Campus Life',
        description: 'A sprawling green campus with modern hostels, sports facilities, clubs, and a thriving student community.',
    },
];

export default function UniversityQualitiesSection({ college, images = [] }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );

        const el = document.getElementById('university-qualities');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    // Use provided images or fallbacks
    const sectionImages = images.length > 0 ? images : ['/placeholder.jpg'];
    const mainImg = sectionImages[0];
    const overlayImg1 = sectionImages[1] || sectionImages[0];
    const overlayImg2 = sectionImages[2] || sectionImages[0];
    const rowImages = sectionImages.slice(1, 4);
    while (rowImages.length < 3) {
        rowImages.push(sectionImages[0]);
    }

    return (
        <section
            id="university-qualities"
            className="relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #1f2937 50%, #312e81 100%)',
            }}
        >
            {/* ──── Subtle Diagonal Line Overlay ──── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px)',
                }}
            />

            {/* ──── Radial Glow (right side) ──── */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.08] blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.06] blur-[120px] pointer-events-none" />

            {/* ──── Content ──── */}
            <div className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* ════════════════════════════ */}
                        {/* LEFT SIDE — TEXT CONTENT     */}
                        {/* ════════════════════════════ */}
                        <div
                            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            {/* Small label */}
                            <p className="text-indigo-300 text-sm font-medium mb-4 tracking-wider uppercase">
                                Why Choose Us
                            </p>

                            {/* Main heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Why Choose{' '}
                                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
                                    {college?.name || 'Our University'}
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 mt-2 leading-relaxed max-w-xl text-base md:text-lg mb-10">
                                {college?.bestPart
                                    || college?.description
                                    || 'We are committed to providing world-class education with state-of-the-art facilities and experienced faculty members dedicated to student success.'}
                            </p>

                            {/* Quality Points */}
                            <div className="space-y-6">
                                {qualityPoints.map((point, i) => (
                                    <div
                                        key={i}
                                        className={`flex gap-4 items-start transition-all duration-700 delay-[${(i + 1) * 150}ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                                            }`}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/10 flex items-center justify-center mt-0.5">
                                            <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={point.icon} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-base mb-1">{point.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ════════════════════════════ */}
                        {/* RIGHT SIDE — IMAGE SECTION   */}
                        {/* ════════════════════════════ */}
                        <div
                            className={`relative transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                        >
                            {/* Main Large Image */}
                            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                                <Image
                                    src={mainImg}
                                    alt={`${college?.name || 'University'} campus`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                            </div>

                            {/* Overlapping Small Image — Top Right */}
                            <div className="absolute -top-6 -right-4 md:-right-8 w-36 h-36 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg rotate-3 border-4 border-[#1e1b4b]/60 z-20 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src={overlayImg1}
                                    alt={`${college?.name || 'University'} highlight 1`}
                                    fill
                                    className="object-cover"
                                    sizes="160px"
                                />
                            </div>

                            {/* Overlapping Small Image — Bottom Left */}
                            <div className="absolute -bottom-6 -left-4 md:-left-8 w-36 h-36 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg -rotate-3 border-4 border-[#1e1b4b]/60 z-20 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src={overlayImg2}
                                    alt={`${college?.name || 'University'} highlight 2`}
                                    fill
                                    className="object-cover"
                                    sizes="160px"
                                />
                            </div>

                            {/* Extra Images Row Below */}
                            <div className="grid grid-cols-3 gap-4 mt-10">
                                {rowImages.map((src, i) => (
                                    <div
                                        key={i}
                                        className="relative h-[120px] rounded-xl overflow-hidden shadow-md group cursor-pointer"
                                    >
                                        <Image
                                            src={src}
                                            alt={`${college?.name || 'University'} gallery ${i + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 33vw, 17vw"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
