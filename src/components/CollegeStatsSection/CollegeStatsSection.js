'use client';

import React, { useState, useEffect, useRef } from 'react';
import { collegesData } from '@/utils/collegesData';
import { getAssetUrl } from '@/utils/assets';
import GradientText from '@/components/GradientText/GradientText';

export default function CollegeStatsSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [students, setStudents] = useState(0);
    const [colleges, setColleges] = useState(0);
    const [experience, setExperience] = useState(0);
    const [placement, setPlacement] = useState(0);

    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, [isVisible]);

    // Counter animation
    useEffect(() => {
        if (!isVisible) return;

        const studentInterval = setInterval(() => {
            setStudents(prev => {
                if (prev >= 5000) { clearInterval(studentInterval); return 5000; }
                return prev + 50;
            });
        }, 40);

        const totalColleges = collegesData.length;
        const collegeInterval = setInterval(() => {
            setColleges(prev => {
                if (prev >= totalColleges) { clearInterval(collegeInterval); return totalColleges; }
                return prev + 1;
            });
        }, 100);

        const expInterval = setInterval(() => {
            setExperience(prev => {
                if (prev >= 5) { clearInterval(expInterval); return 5; }
                return prev + 1;
            });
        }, 400);

        const placementInterval = setInterval(() => {
            setPlacement(prev => {
                if (prev >= 98) { clearInterval(placementInterval); return 98; }
                return prev + 2;
            });
        }, 40);

        return () => {
            clearInterval(studentInterval);
            clearInterval(collegeInterval);
            clearInterval(expInterval);
            clearInterval(placementInterval);
        };
    }, [isVisible]);

    const stats = [
        { value: `${students.toLocaleString()}+`, label: 'Students Helped' },
        { value: `${placement}%`, label: 'Placement Rate' },
        { value: `${colleges}+`, label: 'Partner Colleges' },
        { value: `${experience}+`, label: 'Years Experience' },
    ];

    return (
        <section ref={sectionRef} id="stats-section" className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-indigo-950/20">

                    {/* ════════ Left — Image ════════ */}
                    <div className="relative h-[250px] sm:h-64 lg:h-auto md:min-h-[400px] bg-[#0f2238]">
                        <img
                            src={getAssetUrl('graphic era/placement-geu2023-website-copy-2.jpg')}
                            alt="College campus placements"
                            className="w-full h-full object-cover brightness-90"
                        />
                        {/* Subtle dark overlay for premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2238]/40 via-transparent to-transparent" />

                    </div>

                    {/* ════════ Right — Content Panel ════════ */}
                    <div
                        className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center"
                        style={{ background: 'linear-gradient(160deg, #0f2238 0%, #132a4a 50%, #162d4d 100%)' }}
                    >
                        {/* Small Label */}
                        <span className="text-indigo-400 text-sm font-medium tracking-wide mb-3 inline-block">
                            WHY CHOOSE US
                        </span>

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                            Trusted by Thousands{' '}
                            <br className="hidden md:block" />
                            of <GradientText>Students</GradientText>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300/90 leading-relaxed max-w-lg mb-12 text-base">
                            We&apos;ve helped thousands of students find their dream college in Dehradun.
                            Our expert counselors provide end-to-end admission support with transparency
                            and dedication.
                        </p>

                        {/* Stats Grid — 2x2 */}
                        <div className="grid grid-cols-2 gap-0">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className={`py-6 px-4 md:px-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        } ${
                                        // Right column items get left border
                                        idx % 2 !== 0 ? 'border-l border-white/[0.08]' : ''
                                        } ${
                                        // Bottom row items get top border
                                        idx >= 2 ? 'border-t border-white/[0.08]' : ''
                                        }`}
                                    style={{ transitionDelay: `${idx * 150}ms` }}
                                >
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
