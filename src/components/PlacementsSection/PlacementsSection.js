'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getAssetUrl } from '@/utils/assets';
import Image from 'next/image';

// Placement descriptions per college (keyed by college name pattern)
const getPlacementDescription = (college) => {
    const name = (college.name || '').toLowerCase();

    if (name.includes('graphic era')) {
        return 'Placements are at the core of University Education, especially in a rapidly growing country like India. Graphic Era (Deemed to be University) has earned widespread recognition since its establishment for maintaining an exceptional track record of consistently high student placements.';
    }
    if (name.includes('dit')) {
        return 'DIT University has built a strong reputation for placements with top-tier companies visiting the campus every year. The dedicated placement cell ensures students are industry-ready through training programs, mock interviews, and direct industry interaction.';
    }
    if (name.includes('uttaranchal')) {
        return 'Uttaranchal University is renowned for its outstanding placement record, providing students with opportunities in top national and international companies through its proactive Training & Placement Cell.';
    }
    if (name.includes('upes')) {
        return 'UPES has consistently delivered impressive placement outcomes with industry-specific programs. The university\'s strong corporate connections ensure students secure roles in leading companies across energy, technology, and management sectors.';
    }
    if (name.includes('dev bhoomi')) {
        return 'Dev Bhoomi Uttarakhand University provides comprehensive placement support, connecting students with top recruiters. The placement cell organizes workshops, seminars, and campus drives to prepare students for successful careers.';
    }
    // Default
    return `${college.name} is committed to ensuring excellent career opportunities for its students through dedicated placement support, industry partnerships, and comprehensive training programs that make graduates job-ready from day one.`;
};

// Get placement images based on college
const getPlacementImages = (college) => {
    const name = (college.name || '').toLowerCase();

    if (name.includes('dit')) {
        return {
            leftImage: getAssetUrl('DIT/Screenshot 2026-04-09 000708.png'),
            rightImage: getAssetUrl('DIT/event-image.webp')
        };
    }

    if (name.includes('uttaranchal')) {
        return {
            leftImage: getAssetUrl('uttaranchal/Deepa-Panday-Slider-2025-v3.jpg'),
            rightImage: getAssetUrl('uttaranchal/uttaranchal-University-RECRUITERS.png')
        };
    }

    if (name.includes('upes')) {
        return {
            leftImage: getAssetUrl('UPES/Screenshot 2026-04-14 173328.png'),
            rightImage: getAssetUrl('UPES/IMG-20251230-WA0012(3).webp')
        };
    }

    if (name.includes('dev bhoomi')) {
        return {
            leftImage: getAssetUrl('DBUU/Screenshot 2026-04-17 235818.png'),
            rightImage: getAssetUrl('DBUU/Screenshot 2026-04-17 235932.png')
        };
    }

    if (name.includes('shivalik')) {
        return {
            leftImage: getAssetUrl('shivalik college/Screenshot 2026-04-18 002352.png'),
            rightImage: getAssetUrl('shivalik college/Screenshot 2026-04-18 002826.png')
        };
    }

    if (name.includes('shri guru ram rai') || name.includes('sgrr')) {
        return {
            leftImage: getAssetUrl('SGRR/placements.webp'),
            rightImage: getAssetUrl('SGRR/placemtnsSGRR.png')
        };
    }

    // Default (Graphic Era)
    return {
        leftImage: 'https://d1om6fetcnl3e0.cloudfront.net/graphic era/𝐏𝐥𝐚𝐜𝐞𝐦𝐞𝐧𝐭𝐬 𝟐𝟎𝟐𝟓 & 𝟐𝟎𝟐𝟔 - 𝐆𝐄𝐇𝐔 𝐁𝐡𝐢𝐦𝐭𝐚𝐥 Another proud moment for Grap.jpg',
        rightImage: getAssetUrl('graphic era/2_Mobile-3.jpg')
    };
};

export default function PlacementsSection({ college }) {
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

    const description = getPlacementDescription(college);
    const placementImages = getPlacementImages(college);

    return (
        <section
            id="placements-section"
            ref={sectionRef}
            className="relative overflow-hidden py-20 px-6"
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0c1631 70%, #1a1145 100%)',
            }}
        >
            {/* ──── Premium Dark Decorative Background ──── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Mesh gradient blobs */}
                <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-8%] w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-[130px]" />
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-[100px]" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`
                    }}
                />

                {/* Subtle grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="placement-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#818cf8" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#placement-grid)" />
                </svg>

                {/* Decorative SVGs */}
                <svg className="absolute top-10 right-[7%] w-20 h-20 text-indigo-400/[0.06]" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M32 4l-8 16h-20l16 12-6 20 18-14 18 14-6-20 16-12h-20z" />
                </svg>
                <svg className="absolute bottom-14 left-[8%] w-16 h-16 text-cyan-400/[0.05] rotate-12" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M32 8L2 24l30 16 30-16L32 8zm0 36L8 30v14c0 4 10.7 10 24 10s24-6 24-10V30L32 44z" />
                </svg>
                <svg className="absolute top-[55%] left-[45%] w-10 h-10 text-violet-400/[0.05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                {/* Geometric accent rings */}
                <div className="absolute top-[15%] right-[15%] w-40 h-40 border border-indigo-400/[0.06] rounded-full" />
                <div className="absolute bottom-[20%] left-[12%] w-24 h-24 border border-violet-400/[0.08] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Placements at{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                            {college.name}
                        </span>
                    </h2>
                </div>

                {/* Main content — Format 1: Editorial Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    {/* LEFT: Large Hero Visual */}
                    <div
                        className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        <div className="relative h-full min-h-[280px] md:min-h-[420px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
                            <img
                                src={placementImages.leftImage}
                                alt={`${college.name} Placement Records`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5">
                                <p className="text-white text-lg md:text-2xl font-semibold mt-1">Placement Ecosystem at {college.name}</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Editorial Content + Supporting Visual */}
                    <div
                        className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        <div className="h-full rounded-3xl border border-white/12 bg-[#111a33]/85 backdrop-blur-sm p-6 md:p-8 flex flex-col">
                            <p className="text-gray-200 leading-relaxed text-[15px] md:text-base">
                                {description}
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                                    <p className="text-[11px] uppercase tracking-wider text-violet-300 font-semibold">Career Prep</p>
                                    <p className="text-white text-sm mt-1">Interview & aptitude training</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                                    <p className="text-[11px] uppercase tracking-wider text-cyan-300 font-semibold">Recruiters</p>
                                    <p className="text-white text-sm mt-1">Strong hiring partnerships</p>
                                </div>
                            </div>

                            <div className="mt-5 relative rounded-2xl overflow-hidden border border-white/10 group">
                                <Image
                                    src={placementImages.rightImage}
                                    alt={`${college.name} Placements`}
                                    width={700}
                                    height={420}
                                    className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
