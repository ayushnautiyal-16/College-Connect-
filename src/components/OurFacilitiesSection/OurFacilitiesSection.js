'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Map facility names to icons, descriptions, and gradient placeholder colors
const facilityMeta = {
    library: {
        description: 'Extensive collection of books, journals, and digital resources for academic research.',
        gradient: 'from-indigo-600 to-blue-500',
        icon: '📚',
    },
    lab: {
        description: 'Cutting-edge equipment and technology for hands-on practical learning.',
        gradient: 'from-blue-600 to-cyan-500',
        icon: '🔬',
    },
    computer: {
        description: 'High-speed internet, modern workstations, and licensed software for students.',
        gradient: 'from-violet-600 to-purple-500',
        icon: '💻',
    },
    hostel: {
        description: 'Comfortable living spaces with modern amenities for a secure campus life.',
        gradient: 'from-orange-500 to-amber-400',
        icon: '🏠',
    },
    sport: {
        description: 'Professional grounds, courts, and fitness center for physical development.',
        gradient: 'from-green-600 to-emerald-500',
        icon: '🏅',
    },
    gym: {
        description: 'Fully equipped fitness center with modern exercise machines and trainers.',
        gradient: 'from-green-600 to-teal-500',
        icon: '💪',
    },
    cafeteria: {
        description: 'Multi-cuisine dining options serving fresh, hygienic, and affordable meals.',
        gradient: 'from-red-500 to-orange-400',
        icon: '☕',
    },
    food: {
        description: 'Multiple food courts with diverse cuisines and comfortable seating.',
        gradient: 'from-red-500 to-rose-400',
        icon: '🍽️',
    },
    medical: {
        description: '24/7 healthcare support with qualified doctors and emergency services.',
        gradient: 'from-teal-500 to-cyan-400',
        icon: '🏥',
    },
    hospital: {
        description: 'On-campus or attached hospital for comprehensive medical care and training.',
        gradient: 'from-teal-600 to-emerald-400',
        icon: '🏥',
    },
    infirmary: {
        description: 'Round-the-clock medical room with first aid, ambulance, and doctor on call.',
        gradient: 'from-teal-500 to-green-400',
        icon: '⚕️',
    },
    transport: {
        description: 'Regular bus services connecting campus to city and nearby areas.',
        gradient: 'from-blue-500 to-indigo-400',
        icon: '🚌',
    },
    wifi: {
        description: 'Campus-wide high-speed wireless internet for seamless connectivity.',
        gradient: 'from-purple-500 to-pink-400',
        icon: '📶',
    },
    auditorium: {
        description: 'Large-capacity auditorium for seminars, conferences, and cultural events.',
        gradient: 'from-yellow-500 to-amber-400',
        icon: '🎭',
    },
    seminar: {
        description: 'Well-equipped seminar halls for academic discussions and presentations.',
        gradient: 'from-amber-500 to-yellow-400',
        icon: '🎤',
    },
    smart: {
        description: 'Interactive digital classrooms with projectors and modern teaching aids.',
        gradient: 'from-cyan-500 to-blue-400',
        icon: '📱',
    },
    classroom: {
        description: 'Spacious, well-ventilated classrooms designed for an optimal learning experience.',
        gradient: 'from-sky-500 to-blue-400',
        icon: '🏫',
    },
    research: {
        description: 'Dedicated R&D centers supporting innovation, patents, and publications.',
        gradient: 'from-fuchsia-500 to-purple-400',
        icon: '🧪',
    },
    innovation: {
        description: 'Incubation and innovation centers fostering entrepreneurship and startups.',
        gradient: 'from-pink-500 to-rose-400',
        icon: '💡',
    },
    placement: {
        description: 'Dedicated placement cell with training programs and industry connections.',
        gradient: 'from-emerald-500 to-green-400',
        icon: '🎯',
    },
    banking: {
        description: 'On-campus banking and ATM facilities for students and staff convenience.',
        gradient: 'from-slate-500 to-gray-400',
        icon: '🏧',
    },
    kitchen: {
        description: 'Professional training kitchens with industry-standard equipment for hospitality students.',
        gradient: 'from-orange-600 to-red-400',
        icon: '👨‍🍳',
    },
    farm: {
        description: 'Agricultural land and poly-houses for practical field-based training.',
        gradient: 'from-lime-600 to-green-500',
        icon: '🌾',
    },
    herbal: {
        description: 'Extensive herbal garden supporting pharmaceutical research and education.',
        gradient: 'from-green-500 to-lime-400',
        icon: '🌿',
    },
    moot: {
        description: 'Simulated courtroom for law students to practice argumentation and trial skills.',
        gradient: 'from-amber-600 to-yellow-500',
        icon: '⚖️',
    },
    default: {
        description: 'Modern infrastructure designed for a comfortable and productive campus experience.',
        gradient: 'from-gray-600 to-slate-500',
        icon: '✨',
    },
};

// Match a facility name to its meta
const getFacilityMeta = (facilityName) => {
    const lower = facilityName.toLowerCase();
    for (const key of Object.keys(facilityMeta)) {
        if (key !== 'default' && lower.includes(key)) {
            return facilityMeta[key];
        }
    }
    return facilityMeta.default;
};

export default function OurFacilitiesSection({ college, images = [] }) {
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

    const facilitiesList = college.facilities || [];
    const displayFacilities = facilitiesList.slice(0, 8);

    if (displayFacilities.length === 0) return null;

    return (
        <section ref={sectionRef} className="bg-gray-100 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2
                    className={`text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    Our Facilities
                </h2>
                <p
                    className={`text-gray-600 text-center mb-14 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    State-of-the-art infrastructure designed to provide the best learning environment at {college.name}
                </p>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayFacilities.map((facilityName, idx) => {
                        const meta = getFacilityMeta(facilityName);
                        const hasImage = images[idx];

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative rounded-2xl overflow-hidden shadow-md
                                    hover:shadow-xl transition-all duration-300
                                    group cursor-default
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                                style={{
                                    transitionDelay: `${200 + idx * 80}ms`,
                                    transitionDuration: '600ms',
                                }}
                            >
                                {/* Image or gradient placeholder */}
                                {hasImage ? (
                                    <Image
                                        src={images[idx]}
                                        alt={facilityName}
                                        width={400}
                                        height={230}
                                        className="w-full h-[230px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div
                                        className={`w-full h-[230px] rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                                    >
                                        <span className="text-5xl opacity-40">{meta.icon}</span>
                                    </div>
                                )}

                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl" />

                                {/* Text on image */}
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-lg font-semibold leading-snug">
                                        {facilityName}
                                    </h3>
                                    <p className="text-sm text-gray-200 mt-1 leading-relaxed line-clamp-2">
                                        {meta.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
