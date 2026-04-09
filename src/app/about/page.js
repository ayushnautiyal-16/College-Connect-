'use client';

import React from 'react';
import { getAssetUrl } from '@/utils/assets';
import { useRouter } from 'next/navigation';
import GradientText from '@/components/GradientText/GradientText';

// Data from existing page + placeholders for new sections
const stats = [
    { number: '5,000+', label: 'Students Guided' },
    { number: '50+', label: 'Partner Colleges' },
    { number: '95%', label: 'Success Rate' },
    { number: '8+', label: 'Years Experience' },
];

const values = [
    {
        title: 'Local Dehradun Expertise',
        description: 'Deep knowledge of all private colleges in Dehradun and their unique strengths.'
    },
    {
        title: 'Honest & Transparent',
        description: "No hidden agendas—we recommend colleges based solely on what's best for you."
    },
    {
        title: 'Personalized Counseling',
        description: 'Every student is unique. We tailor our guidance to your interests, goals, and eligibility.'
    },
    {
        title: 'Strong College Network',
        description: 'Established relationships with top colleges in Dehradun for smooth admissions.'
    },
    {
        title: 'End-to-End Support',
        description: 'From application forms to hostel booking, we are with you at every step.'
    },
    {
        title: 'Student First Approach',
        description: 'Your career and future are our top priority, always.'
    }
];

const blogs = [
    { title: 'Top 10 Colleges in Dehradun', desc: 'A comprehensive guide to the best engineering and management institutes.', image: 'header-image-1_ccchxr.jpg' },
    { title: 'How to Choose Your Branch', desc: 'Expert tips on selecting the right engineering stream for your future.', image: 'happy-teacher-with-students-background_ztskqv.jpg' },
    { title: 'Placement Trends 2026', desc: 'Analyzing the latest placement statistics and salary packages.', image: 'serious-teacher-checking-assignment-two-students_hmsmoy.jpg' },
];

const partners = ['Graphic Era', 'UPES', 'DIT University', 'Uttaranchal University', 'JBIT', 'Tula\'s Institute'];

export default function AboutPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#fdf7ff_45%,#f6fffb_100%)] text-slate-900 font-sans selection:bg-fuchsia-200/70">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-50/70 via-sky-50/70 to-emerald-50/70 pointer-events-none" />
                <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-violet-300/35 blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 -left-14 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 left-1/3 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-14 md:pb-16 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                            We&apos;re shaping the future of <GradientText>student connections</GradientText>
                        </h1>
                        <p className="text-slate-600 mt-6 text-lg max-w-xl leading-relaxed">
                            College Connect helps students find their dream college with expert guidance, transparent processes, and a personalized approach.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button
                                onClick={() => router.push('/contact')}
                                className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all shadow-lg shadow-violet-500/30 transform hover:-translate-y-0.5"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => router.push('/campuses')}
                                className="px-8 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                            >
                                View Colleges
                            </button>
                        </div>
                    </div>

                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <img src={getAssetUrl('graphic era/grafest-day-third-2.jpg')} alt="College fest" className="rounded-2xl shadow-xl object-cover h-48 w-full border border-white/70 hover:scale-[1.02] transition-transform duration-500" />
                            <img src={getAssetUrl('shivalik college/shivalik.png')} alt="Shivalik College Campus" className="rounded-2xl shadow-xl object-cover h-64 w-full border border-white/70 hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                        <div className="space-y-4">
                            <img src={getAssetUrl('DIT/DIT_University_image_39615.avif')} alt="DIT University Campus" className="rounded-2xl shadow-xl object-cover h-64 w-full border border-white/70 hover:scale-[1.02] transition-transform duration-500" />
                            <img src={getAssetUrl('graphic era/eb251c1788b84cfdb137fc104b4b7da2_top-placement.webp')} alt="Successful Placements" className="rounded-2xl shadow-xl object-cover h-48 w-full border border-white/70 hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white/85 backdrop-blur-sm border border-violet-100 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(124,58,237,0.08)]">
                        <h2 className="text-3xl font-bold text-slate-900 mb-5">Our Mission</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-5">
                            To empower students with expert guidance and transparent counseling, helping them make informed decisions about their education path. We strive to become the most trusted name in admission counseling in Dehradun.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We believe every student deserves access to quality education and the right mentorship to unlock their full potential.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white/90 backdrop-blur-sm border border-cyan-100 rounded-2xl px-6 py-6 shadow-[0_10px_30px_rgba(6,182,212,0.12)]">
                                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                                <div className="text-slate-600 font-semibold text-sm lg:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mt-0 mb-6 md:mb-8">
                    <img
                        src={getAssetUrl('Gemini_Generated_Image_93l2m793l2m793l2.png')}
                        alt="Our Core Values banner"
                        className="w-full h-auto max-h-[360px] object-cover rounded-3xl border border-violet-100 shadow-xl"
                    />
                </div>
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
                        Principles that guide our counseling and student interactions every day.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((val, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-fuchsia-100 hover:border-violet-300 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_26px_rgba(99,102,241,0.09)] hover:shadow-[0_16px_34px_rgba(168,85,247,0.18)]">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">{val.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white/75 backdrop-blur-sm border-y border-violet-100">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-8 md:mb-10">Trusted by Top Institutes</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-14">
                        {partners.map((partner, idx) => (
                            <span key={idx} className="text-lg md:text-2xl font-bold text-slate-500 hover:text-violet-600 transition-colors cursor-default select-none">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Insights</h2>
                        <p className="text-slate-600 mt-2">Expert advice and updates from our blog.</p>
                    </div>
                    <button onClick={() => router.push('/blog')} className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-white text-sm font-semibold hover:from-violet-700 hover:to-fuchsia-700 transition-all shadow-md shadow-violet-500/20">
                        View all posts
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} onClick={() => router.push('/blog')} className="group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-cyan-100 hover:border-violet-300 transition-all hover:-translate-y-1 shadow-[0_8px_20px_rgba(14,165,233,0.10)] hover:shadow-[0_14px_30px_rgba(139,92,246,0.14)]">
                            <div className="rounded-xl overflow-hidden h-48 mb-6 relative">
                                <img src={getAssetUrl(blog.image)} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{blog.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{blog.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
