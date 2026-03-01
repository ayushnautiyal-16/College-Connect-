'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Generate dynamic key facts from college data
const getKeyFacts = (college) => {
    const facts = [];

    // Card 1 — Established & Legacy (Yellow)
    const yearsOld = college.established
        ? new Date().getFullYear() - parseInt(college.established)
        : null;
    facts.push({
        color: 'bg-yellow-400',
        textColor: 'text-gray-900',
        title: `Est. ${college.established || 'N/A'}`,
        type: 'paragraph',
        content: yearsOld
            ? `${yearsOld}+ years of academic excellence, shaping leaders and innovators across multiple disciplines.`
            : `A legacy of academic excellence, shaping leaders and innovators across multiple disciplines.`,
        buttonText: 'Learn More',
    });

    // Card 2 — Placements (Sky Blue)
    if (college.placements) {
        const topRecruiters = college.placements.topRecruiters || [];
        facts.push({
            color: 'bg-sky-400',
            textColor: 'text-white',
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
        });
    }

    // Card 3 — Campus & Accreditation (Purple)
    facts.push({
        color: 'bg-purple-300',
        textColor: 'text-gray-900',
        title: college.campusSize ? `${college.campusSize} Campus` : 'Modern Campus',
        type: 'paragraph',
        content: college.accreditation
            ? `${college.accreditation.replace(/\|/g, ' · ')}. A world-class campus equipped with modern labs, libraries, sports facilities, and comfortable hostels.`
            : `A world-class campus equipped with modern labs, libraries, sports facilities, and comfortable hostels for holistic student development.`,
        buttonText: 'Explore Campus',
    });

    // Card 4 — Courses & Programs (Green)
    const courseList = college.mainCourses || college.courses || [];
    facts.push({
        color: 'bg-green-400',
        textColor: 'text-gray-900',
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
    });

    return facts;
};

export default function KeyFactsSection({ college }) {
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
        <section ref={sectionRef} className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2
                    className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    Key Facts About {college.name}
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {facts.map((fact, idx) => (
                        <div
                            key={idx}
                            className={`
                                ${fact.color} rounded-2xl p-6 shadow-lg
                                hover:scale-105 transition-all duration-300
                                flex flex-col justify-between
                                ${fact.textColor}
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                            style={{
                                transitionDelay: `${200 + idx * 120}ms`,
                                transitionDuration: '600ms',
                            }}
                        >
                            {/* Title */}
                            <div>
                                <h3 className="text-xl font-bold">{fact.title}</h3>

                                {/* Content: paragraph or bullet list */}
                                {fact.type === 'paragraph' ? (
                                    <p className="text-sm mt-4 leading-relaxed opacity-90">
                                        {fact.content}
                                    </p>
                                ) : (
                                    <ul className="mt-4 space-y-2">
                                        {fact.content.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-sm leading-relaxed flex items-start gap-2 opacity-90"
                                            >
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-70" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => router.push('/apply')}
                                className="mt-6 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow hover:shadow-md hover:bg-gray-50 transition duration-200 self-start"
                            >
                                {fact.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
