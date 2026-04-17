'use client';

import React, { useState, useEffect, useRef } from 'react';
import GradientText from '@/components/GradientText/GradientText';

const testimonials = [
    {
        name: 'Aarav Sharma',
        role: 'B.Tech CSE · Graphic Era University, 2023',
        quote:
            'With average 12th marks and no clear college roadmap, I used College Connect\'s counselling to shortlist realistic options. I joined Graphic Era for CSE and secured a role as a software engineer at a leading product company.',
        avatar: '',
        highlight: 'Placed at a top product company',
    },
    {
        name: 'Simran Kaur',
        role: 'BBA · DIT University, 2022',
        quote:
            'I wanted to move from Science to Management but was confused about fees and reputation. College Connect helped me compare colleges on placements and campus life. Today I work in a reputed finance firm in NCR.',
        avatar: '',
        highlight: 'Stream switch with confidence',
    },
    {
        name: 'Rahul Verma',
        role: 'LLB (Hons.) · Uttaranchal University, 2021',
        quote:
            'As a first-generation learner with a limited budget, I had a strong interest in law. Through detailed counselling and college shortlisting, I joined Uttaranchal University and now practice at a well-known law firm.',
        avatar: '',
        highlight: 'First-gen lawyer in the family',
    },
    {
        name: 'Priya Negi',
        role: 'MBA · UPES Dehradun, 2023',
        quote:
            'College Connect guided me from selecting the right MBA specialization to preparing for interviews. Their step-by-step support made the entire journey stress-free and I landed a great role right after campus placements.',
        avatar: '',
        highlight: 'Landed dream MBA placement',
    },
    {
        name: 'Karan Singh',
        role: 'B.Pharma · SBSU, 2022',
        quote:
            'I was unsure about which pharmacy college to choose. The team helped me compare fee structures and placement records. I graduated from SBSU and now work in a leading pharmaceutical company.',
        avatar: '',
        highlight: 'Found the perfect fit',
    },
    {
        name: 'Ananya Joshi',
        role: 'BCA · Doon Business School, 2023',
        quote:
            'Coming from a small town, I had no idea how to navigate the admission process. College Connect made everything seamless — from application to hostel arrangement. I\'m now a confident IT professional.',
        avatar: '',
        highlight: 'Small-town to IT professional',
    },
];

// Color palettes for avatar gradients
const gradientPalettes = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #a18cd1, #fbc2eb)',
];

export default function SuccessStoriesSection() {
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

    const getInitials = (name) =>
        name.split(' ').map((n) => n[0]).join('').toUpperCase();

    return (
        <section ref={sectionRef} className="pt-8 pb-14 md:pt-10 md:pb-20 px-4 md:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f6ff 25%, #fff 50%, #f0f9ff 75%, #f5f3ff 100%)' }}>
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft gradient blobs */}
                <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-indigo-200/25 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-8%] left-[-5%] w-[450px] h-[450px] bg-purple-200/20 rounded-full blur-[100px]" />
                <div className="absolute top-[50%] left-[55%] w-[300px] h-[300px] bg-cyan-100/20 rounded-full blur-[80px]" />

                {/* Subtle dot-grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }} />

                {/* Decorative accent rings */}
                <div className="absolute top-16 right-16 w-36 h-36 border border-indigo-200/30 rounded-full hidden lg:block" />
                <div className="absolute top-24 right-24 w-20 h-20 border border-purple-200/25 rounded-full hidden lg:block" />
                <div className="absolute bottom-20 left-12 w-28 h-28 border border-cyan-200/25 rounded-full hidden lg:block" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ──── Heading ──── */}
                <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-[10px] md:text-[11px] font-semibold text-indigo-600 tracking-wide uppercase mb-3">
                        Real Student Stories
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Success Stories from Our{' '}
                        <br className="block sm:hidden" />
                        <GradientText>Students</GradientText>
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
                        How the right counselling and college choice transformed these students&apos; careers.
                    </p>
                </div>

                {/* ──── Testimonials Grid ──── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className={`bg-white p-4 sm:p-5 outline-none rounded-xl shadow-sm border border-gray-100/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${200 + idx * 100}ms`, transitionDuration: '700ms' }}
                        >
                            {/* Star Rating */}
                            <div className="flex items-center gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-gray-600 text-[13px] leading-relaxed flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Highlight tag */}
                            <div className="mt-3 mb-4">
                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {t.highlight}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    {t.avatar ? (
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                                        />
                                    ) : (
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-gray-100 flex-shrink-0"
                                            style={{ background: gradientPalettes[idx % gradientPalettes.length] }}
                                        >
                                            <span className="text-white text-xs font-bold">
                                                {getInitials(t.name)}
                                            </span>
                                        </div>
                                    )}
                                    {/* Info */}
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold text-gray-900 truncate">
                                            {t.name}
                                        </div>
                                        <div className="text-xs text-gray-500 truncate">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
