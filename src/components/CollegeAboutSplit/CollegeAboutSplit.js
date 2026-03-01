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

    return (
        <section
            ref={sectionRef}
            className="bg-white py-20 px-6"
        >
            <div className="max-w-7xl mx-auto">
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
                                <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4 text-blue-600"
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
                                    <span className="text-sm font-medium text-gray-800">
                                        {badgeText}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Bottom two smaller images */}
                        {bottomImages.length > 0 && (
                            <div className="grid grid-cols-2 gap-6 mt-6">
                                {bottomImages.map((src, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl overflow-hidden shadow-md group"
                                    >
                                        <Image
                                            src={src}
                                            alt={`${college.name} gallery ${i + 2}`}
                                            width={400}
                                            height={180}
                                            className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
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
                            About {college.name}
                        </h2>

                        <div className="mt-6 space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                {mainDescription}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {secondaryDescription}
                            </p>
                        </div>

                        {/* Key Highlights */}
                        {college.about?.keyAchievements && (
                            <div className="mt-6 space-y-2">
                                {college.about.keyAchievements.slice(0, 4).map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <svg
                                            className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-700 text-sm font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={() => router.push('/apply')}
                            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 inline-flex items-center gap-2 group"
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
