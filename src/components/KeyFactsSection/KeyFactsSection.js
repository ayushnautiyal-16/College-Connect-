'use client';

import React, { useState, useEffect, useRef } from 'react';

// Smooth scroll to a section by ID
const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Icon SVGs for each card
const cardIcons = [
    <svg key="clock" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="trend" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    <svg key="building" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    <svg key="book" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
];

// Accent styles per card
const cardAccents = [
    { cardBg: 'bg-amber-50/80', iconBg: 'bg-amber-100', iconColor: 'text-amber-700', dotColor: 'bg-amber-400', border: 'border-amber-200/60' },
    { cardBg: 'bg-sky-50/80', iconBg: 'bg-sky-100', iconColor: 'text-sky-700', dotColor: 'bg-sky-400', border: 'border-sky-200/60' },
    { cardBg: 'bg-violet-50/80', iconBg: 'bg-violet-100', iconColor: 'text-violet-700', dotColor: 'bg-violet-400', border: 'border-violet-200/60' },
    { cardBg: 'bg-emerald-50/80', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700', dotColor: 'bg-emerald-400', border: 'border-emerald-200/60' },
];

// Generate dynamic key facts from college data
const getKeyFacts = (college) => {
    const facts = [];

    const yearsOld = college.established
        ? new Date().getFullYear() - parseInt(college.established)
        : null;
    facts.push({
        title: `Est. ${college.established || 'N/A'}`,
        type: 'paragraph',
        content: yearsOld
            ? `${yearsOld}+ years of academic excellence, shaping leaders and innovators across multiple disciplines.`
            : `A legacy of academic excellence, shaping leaders and innovators across multiple disciplines.`,
        buttonText: 'Learn More',
        scrollTarget: 'about-section',
    });

    if (college.placements) {
        const topRecruiters = college.placements.topRecruiters || [];
        facts.push({
            title: `${college.placements.placementRate || '80%+'} Placements`,
            type: 'list',
            content: [
                `Highest Package: ${college.placements.highestPackage || 'Excellent'}`,
                `Average Package: ${college.placements.averagePackage || 'Competitive'}`,
                topRecruiters.length > 0
                    ? `Top Recruiters: ${topRecruiters.slice(0, 3).join(', ')}`
                    : 'Strong industry connections',
                'Dedicated placement cell & training',
            ],
            buttonText: 'View Placements',
            scrollTarget: 'placements-section',
        });
    }

    facts.push({
        title: college.campusSize ? `${college.campusSize} Campus` : 'Modern Campus',
        type: 'paragraph',
        content: college.accreditation
            ? `${college.accreditation.replace(/\|/g, ' \u00b7 ')}. A world-class campus equipped with modern labs, libraries, sports facilities, and comfortable hostels.`
            : `A world-class campus equipped with modern labs, libraries, sports facilities, and comfortable hostels for holistic student development.`,
        buttonText: 'Explore Campus',
        scrollTarget: 'gallery',
    });

    const courseList = college.mainCourses || college.courses || [];
    facts.push({
        title: `${courseList.length || '10'}+ Programs`,
        type: 'list',
        content: courseList.length > 0
            ? courseList.slice(0, 4).map((c) => (typeof c === 'string' ? c : c.name))
            : [
                'Engineering & Technology',
                'Management & Business',
                'Science & Research',
                'Professional Courses',
            ],
        buttonText: 'View Courses',
        scrollTarget: 'courses-section',
    });

    return facts;
};

export default function KeyFactsSection({ college }) {
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

    const facts = getKeyFacts(college);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-16 px-6"
            style={{ background: '#F5F1DC' }}
        >
            {/* ──── Decorative Background SVGs ──── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Soft blurs */}
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-amber-200/20 blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-yellow-100/30 blur-[120px]" />

                {/* Graduation Cap — top left */}
                <svg className="absolute top-8 left-[8%] w-20 h-20 text-amber-800/[0.06]" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M32 8L2 24l30 16 30-16L32 8zm0 36L8 30v14c0 4 10.7 10 24 10s24-6 24-10V30L32 44z"/>
                </svg>

                {/* Open Book — top right */}
                <svg className="absolute top-16 right-[10%] w-24 h-24 text-amber-700/[0.05] rotate-12" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M32 14C28 10 20 8 10 8v38c10 0 18 2 22 6 4-4 12-6 22-6V8C44 8 36 10 32 14zM30 44c-3-3-10-5-18-5V12c8 0 15 2 18 5v27zm4 0V17c3-3 10-5 18-5v27c-8 0-15 2-18 5z"/>
                </svg>

                {/* Lightbulb — mid left */}
                <svg className="absolute top-[45%] left-[3%] w-16 h-16 text-yellow-600/[0.07] -rotate-12" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M32 4C21 4 12 13 12 24c0 7.5 4 14 10 17.5V48a2 2 0 002 2h16a2 2 0 002-2v-6.5c6-3.5 10-10 10-17.5C52 13 43 4 32 4zm6 46H26a2 2 0 000 4h12a2 2 0 000-4zm0 6H26a2 2 0 000 4h12a2 2 0 000-4z"/>
                </svg>

                {/* Pencil — bottom right */}
                <svg className="absolute bottom-12 right-[6%] w-14 h-14 text-amber-800/[0.06] rotate-45" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M50.3 5.7a6 6 0 00-8.5 0L8 39.6 5 59l19.4-3L58.3 22a6 6 0 000-8.5l-8-7.8zM22 52l-12 2 2-12L40.8 13.2l10 10L22 52z"/>
                </svg>

                {/* Atom / Science — mid right */}
                <svg className="absolute top-[30%] right-[4%] w-20 h-20 text-amber-600/[0.05]" fill="currentColor" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="5"/>
                    <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                    <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" transform="rotate(60 32 32)"/>
                    <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" transform="rotate(120 32 32)"/>
                </svg>

                {/* Trophy — bottom left */}
                <svg className="absolute bottom-16 left-[12%] w-16 h-16 text-yellow-700/[0.06] rotate-6" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M48 8H42V6a2 2 0 00-2-2H24a2 2 0 00-2 2v2H16a6 6 0 00-6 6v4c0 6.6 5.4 12 12 12h.5C24.6 36.3 28 40.7 30 44v6h-6a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-6v-6c2-3.3 5.4-7.7 7.5-14H42c6.6 0 12-5.4 12-12v-4a6 6 0 00-6-6zM14 18v-4a2 2 0 012-2h6v14c-4.4 0-8-3.6-8-8zm34-4v4c0 4.4-3.6 8-8 8V12h6a2 2 0 012 2z"/>
                </svg>

                {/* Dotted circles — decorative */}
                <svg className="absolute top-[60%] left-[45%] w-32 h-32 text-amber-700/[0.04]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5"/>
                </svg>

                {/* Small diamond shapes scattered */}
                <svg className="absolute top-[20%] left-[35%] w-6 h-6 text-amber-600/[0.08]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)"/>
                </svg>
                <svg className="absolute bottom-[30%] right-[30%] w-4 h-4 text-yellow-700/[0.1]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)"/>
                </svg>
                <svg className="absolute top-[75%] left-[25%] w-5 h-5 text-amber-500/[0.07]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="6"/>
                </svg>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Heading */}
                <div
                    className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Key Facts About{' '}
                        <span className="text-amber-800">{college.name}</span>
                    </h2>
                </div>

                {/* Staggered cards — top row: 2 wider, bottom row: 2 wider, offset */}
                <div className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {facts.slice(0, 2).map((fact, idx) => {
                            const accent = cardAccents[idx];
                            const colSpan = idx === 0 ? 'md:col-span-2' : 'md:col-span-3';
                            return (
                                <div
                                    key={idx}
                                    className={`
                                        ${colSpan} ${accent.cardBg} rounded-xl p-5
                                        border ${accent.border} shadow-sm
                                        hover:shadow-md hover:-translate-y-0.5 transition-all duration-300
                                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                                    `}
                                    style={{
                                        transitionDelay: `${150 + idx * 100}ms`,
                                        transitionDuration: '500ms',
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-lg ${accent.iconBg} flex items-center justify-center ${accent.iconColor} flex-shrink-0`}>
                                            {cardIcons[idx]}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-gray-900">{fact.title}</h3>
                                            {fact.type === 'paragraph' ? (
                                                <p className="text-sm mt-1.5 leading-relaxed text-gray-500">
                                                    {fact.content}
                                                </p>
                                            ) : (
                                                <ul className="mt-1.5 space-y-1">
                                                    {fact.content.map((item, i) => (
                                                        <li key={i} className="text-sm leading-relaxed flex items-start gap-1.5 text-gray-500">
                                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.dotColor} flex-shrink-0`} />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => scrollToSection(fact.scrollTarget)}
                                        className={`mt-4 group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${accent.iconColor} bg-gradient-to-r ${accent.iconBg} hover:shadow-md hover:scale-[1.03] active:scale-[0.98] border border-current/10`}
                                    >
                                        {fact.buttonText}
                                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Row 2 — reversed widths for stagger effect */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {facts.slice(2, 4).map((fact, rawIdx) => {
                            const idx = rawIdx + 2;
                            const accent = cardAccents[idx];
                            const colSpan = rawIdx === 0 ? 'md:col-span-3' : 'md:col-span-2';
                            return (
                                <div
                                    key={idx}
                                    className={`
                                        ${colSpan} ${accent.cardBg} rounded-xl p-5
                                        border ${accent.border} shadow-sm
                                        hover:shadow-md hover:-translate-y-0.5 transition-all duration-300
                                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                                    `}
                                    style={{
                                        transitionDelay: `${350 + rawIdx * 100}ms`,
                                        transitionDuration: '500ms',
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-lg ${accent.iconBg} flex items-center justify-center ${accent.iconColor} flex-shrink-0`}>
                                            {cardIcons[idx]}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-gray-900">{fact.title}</h3>
                                            {fact.type === 'paragraph' ? (
                                                <p className="text-sm mt-1.5 leading-relaxed text-gray-500">
                                                    {fact.content}
                                                </p>
                                            ) : (
                                                <ul className="mt-1.5 space-y-1">
                                                    {fact.content.map((item, i) => (
                                                        <li key={i} className="text-sm leading-relaxed flex items-start gap-1.5 text-gray-500">
                                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.dotColor} flex-shrink-0`} />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => scrollToSection(fact.scrollTarget)}
                                        className={`mt-4 group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${accent.iconColor} bg-gradient-to-r ${accent.iconBg} hover:shadow-md hover:scale-[1.03] active:scale-[0.98] border border-current/10`}
                                    >
                                        {fact.buttonText}
                                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
