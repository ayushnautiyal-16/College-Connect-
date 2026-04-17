'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CollegeAboutSplit({ college, images = [] }) {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.15 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    // Use at least 3 images for the collage
    const collageImages = images.length >= 3 ? images.slice(0, 3) : images;
    const topImage = collageImages[0] || '/placeholder-campus.jpg';
    const bottomImages = collageImages.slice(1, 3);

    // Badge text
    const badgeText = college.accreditation
        ? college.accreditation.split('|')[0].trim()
        : college.established
            ? `Est. ${college.established}`
            : null;

    // Description lines
    const mainDescription =
        college.bestPart ||
        college.description ||
        `${college.name} is committed to providing world-class education with state-of-the-art facilities and experienced faculty members dedicated to student success.`;

    const secondaryDescription =
        college.about?.mission ||
        `Empowering students with quality education, practical skills, and placement-ready training for a successful career.`;

    // Achievement card icons
    const achievementIcons = [
        // Shield/Badge
        <svg key="shield" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        // Globe
        <svg key="globe" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        // University
        <svg key="uni" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
        // Trending Up
        <svg key="trend" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    ];

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-24 px-6"
            style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)',
            }}
        >
            {/* ──── Subtle Decorative Elements ──── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[120px]" />
                <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ════════════════════════════════════ */}
                    {/* LEFT SIDE — IMAGE COLLAGE           */}
                    {/* ════════════════════════════════════ */}
                    <div
                        className={`transition-all duration-700 ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-8'
                            }`}
                    >
                        {/* Top large image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={topImage}
                                alt={`${college.name} campus`}
                                width={800}
                                height={300}
                                className="w-full h-[260px] md:h-[300px] object-cover"
                                priority
                            />

                            {/* Floating badge */}
                            {badgeText && (
                                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-4 py-2 flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                    <span className="text-sm font-semibold text-gray-800">
                                        {badgeText}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Bottom two smaller images */}
                        {bottomImages.length > 0 && (
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                {bottomImages.map((src, i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl overflow-hidden shadow-md group"
                                    >
                                        <Image
                                            src={src}
                                            alt={`${college.name} gallery ${i + 2}`}
                                            width={400}
                                            height={180}
                                            className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ════════════════════════════════════ */}
                    {/* RIGHT SIDE — TEXT CONTENT            */}
                    {/* ════════════════════════════════════ */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-8'
                            }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            About{' '}
                            <span className="text-orange-600">
                                {college.name}
                            </span>
                        </h2>

                        <div className="mt-6 space-y-4">
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                {mainDescription}
                            </p>
                            <p className="text-gray-500 leading-relaxed text-sm italic">
                                {secondaryDescription}
                            </p>
                        </div>

                        {/* Key Achievement Cards */}
                        {college.about?.keyAchievements && (
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {college.about.keyAchievements.slice(0, 4).map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                            {achievementIcons[i % achievementIcons.length]}
                                        </div>
                                        <span className="text-gray-800 text-sm font-medium leading-tight">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={() => router.push('/apply')}
                            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200 animate-bounce hover:animate-none"
                        >
                            Apply Now
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

