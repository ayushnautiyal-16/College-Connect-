'use client';

import React, { useState, useEffect, useRef } from 'react';

// Dynamic feature generation from college data
const getFeatures = (college) => {
    const features = [];

    // 1. Accreditation / Quality
    if (college.accreditation) {
        const mainAccred = college.accreditation.split('|')[0].trim();
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: mainAccred,
            description: `Certified with ${mainAccred} ensuring world-class education standards and institutional excellence.`,
        });
    }

    // 2. Placements
    if (college.placements) {
        const pkg = college.placements.highestPackage || college.placements.averagePackage || 'Excellent';
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: 'Top Placements',
            description: `Outstanding placement record with highest package of ${pkg} and top recruiters visiting the campus.`,
        });
    }

    // 3. Campus
    if (college.campusSize) {
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: `${college.campusSize} Campus`,
            description: `A sprawling ${college.campusSize} green campus equipped with modern infrastructure, hostels, and recreational facilities.`,
        });
    }

    // 4. Established legacy
    if (college.established) {
        const yearsOld = new Date().getFullYear() - parseInt(college.established);
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: `Est. ${college.established}`,
            description: `Over ${yearsOld}+ years of academic excellence, building a strong legacy in higher education and student development.`,
        });
    }

    // 5. Best Known For
    if (college.bestKnownFor) {
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            title: 'Best Known For',
            description: college.bestKnownFor,
        });
    }

    // 6. Research & Innovation (if available)
    if (college.about?.researchAndInnovation) {
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Research & Innovation',
            description: `${college.about.researchAndInnovation.patentsFiled || 'Multiple'}+ patents filed with ${college.about.researchAndInnovation.annualPublications || 'extensive'} annual publications.`,
        });
    }

    // 7. Courses diversity
    if (college.courses?.length > 5) {
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: `${college.courses.length}+ Programs`,
            description: 'Diverse range of undergraduate, postgraduate, and doctoral programs across multiple disciplines.',
        });
    }

    // 8. International Collaborations (if available)
    if (college.about?.researchAndInnovation?.internationalCollaborations?.length > 0) {
        features.push({
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Global Exposure',
            description: `International collaborations with ${college.about.researchAndInnovation.internationalCollaborations.length}+ universities across the globe for student and faculty exchanges.`,
        });
    }

    // Take only 4 or 8 for clean grid
    return features.slice(0, 8);
};

// Color accents for cards
const cardAccents = [
    { iconBg: 'bg-blue-50', iconColor: 'text-blue-600', borderHover: 'hover:border-blue-200' },
    { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', borderHover: 'hover:border-emerald-200' },
    { iconBg: 'bg-violet-50', iconColor: 'text-violet-600', borderHover: 'hover:border-violet-200' },
    { iconBg: 'bg-amber-50', iconColor: 'text-amber-600', borderHover: 'hover:border-amber-200' },
    { iconBg: 'bg-rose-50', iconColor: 'text-rose-600', borderHover: 'hover:border-rose-200' },
    { iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600', borderHover: 'hover:border-cyan-200' },
    { iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', borderHover: 'hover:border-indigo-200' },
    { iconBg: 'bg-orange-50', iconColor: 'text-orange-600', borderHover: 'hover:border-orange-200' },
];

export default function WhyThisCollegeSection({ college }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    const features = getFeatures(college);

    if (features.length === 0) return null;

    // Use 4 columns if we have 4+ features, otherwise adapt
    const gridCols = features.length >= 4 ? 'lg:grid-cols-4' : features.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-24 px-6"
            id="why-this-college"
            style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)',
            }}
        >
            {/* ──── Subtle Decorative ──── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-5%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-100/30 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-100/30 blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* ─── Heading ─── */}
                <div
                    className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Why{' '}
                        <span className="text-indigo-600">
                            {college.name}
                        </span>
                        ?
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Discover what makes {college.name} a top choice for students seeking quality education, strong placements, and holistic development.
                    </p>
                </div>

                {/* ─── Feature Cards Grid ─── */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6`}>
                    {features.map((feature, idx) => {
                        const accent = cardAccents[idx % cardAccents.length];
                        return (
                            <div
                                key={idx}
                                className={`
                                    bg-white p-6 rounded-2xl
                                    border border-gray-100 ${accent.borderHover}
                                    shadow-sm hover:shadow-lg hover:-translate-y-1
                                    transition-all duration-300
                                    text-center
                                    group
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                                style={{
                                    transitionDelay: `${200 + idx * 100}ms`,
                                    transitionDuration: '600ms',
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className={`
                                        w-14 h-14 mx-auto rounded-xl
                                        ${accent.iconBg}
                                        flex items-center justify-center
                                        ${accent.iconColor}
                                        group-hover:scale-110
                                        transition-transform duration-300
                                    `}
                                >
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

