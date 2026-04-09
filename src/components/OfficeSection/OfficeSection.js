'use client';

import React, { useState, useEffect, useRef } from 'react';

const offices = [
    {
        name: 'Main Office',
        address1: 'Rajpur Road',
        address2: 'Dehradun, Uttarakhand 248001',
        phone: '+91 7302985700',
        email: 'collegeconnect47@gmail.com',
    },
];

export default function OfficeSection() {
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
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-28 px-4 md:px-6 bg-[#0a1625]">
            <div
                className={`max-w-7xl mx-auto bg-[#0f2238] rounded-2xl p-8 md:p-12 lg:p-14 shadow-xl border border-white/[0.07] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                    {/* Heading */}
                    <div className="mb-10 md:mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
                            <span className="text-indigo-400 text-sm font-medium tracking-wide uppercase">
                                Get in Touch
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Our Office
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed text-sm md:text-base">
                            Visit our Rajpur Road, Dehradun office for personalized counselling and admission guidance.
                        </p>
                    </div>

                    {/* Office Grid */}
                    <div className="grid grid-cols-1 gap-0">
                        {offices.map((office, idx) => (
                            <div
                                key={idx}
                                className={`py-6 px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                                    } ${idx > 0 ? 'lg:border-l border-white/[0.07]' : ''
                                    } ${idx >= 2 ? 'sm:border-t lg:border-t-0 border-white/[0.07]' : ''
                                    } ${idx === 1 ? 'sm:border-l border-white/[0.07]' : ''
                                    }`}
                                style={{ transitionDelay: `${300 + idx * 120}ms` }}
                            >
                                {/* Location icon */}
                                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                                    <svg className="w-4.5 h-4.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>

                                {/* Office Name */}
                                <h3 className="text-white font-semibold text-base mb-3">
                                    {office.name}
                                </h3>

                                {/* Address */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {office.address1}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {office.address2}
                                </p>

                                {/* Phone */}
                                <p className="text-gray-400 text-sm mt-3">
                                    <a href={`tel:${office.phone}`} className="hover:text-white transition-colors duration-200">
                                        {office.phone}
                                    </a>
                                </p>

                                {/* Email */}
                                <p className="mt-1">
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="text-indigo-400 text-sm hover:text-indigo-300 hover:underline transition-colors duration-200"
                                    >
                                        {office.email}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
