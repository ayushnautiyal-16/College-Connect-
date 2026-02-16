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

const team = [
    { name: 'Ayush Nautiyal', role: 'Founder & Lead Counselor', image: 'serious-teacher-checking-assignment-two-students_hmsmoy.jpg' },
    { name: 'Priya Sharma', role: 'Senior Counselor', image: 'red-haired-lady-eyeglasses-holds-books-shows-ok-sign_jmfod2.jpg' },
    { name: 'Rahul Verma', role: 'Admission Expert', image: 'front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_i2xkzc.jpg' },
    { name: 'Anjali Gupta', role: 'Student Relations', image: 'happy-teacher-with-students-background_ztskqv.jpg' },
    { name: 'Vikram Singh', role: 'Operations Head', image: 'serious-teacher-checking-assignment-two-students_hmsmoy.jpg' },
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
        <div className="min-h-screen bg-[#0b1b2b] font-sans selection:bg-indigo-500/30 text-white">

            {/* 2. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center overflow-hidden">

                {/* Background Grid Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                        We&apos;re shaping the future of <GradientText>student connections</GradientText>
                    </h1>
                    <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
                        College Connect allows students to find their dream college with expert guidance, transparent processes, and a personalized approach.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <button onClick={() => router.push('/contact')} className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20 transform hover:-translate-y-0.5">
                            Get Started
                        </button>
                        <button onClick={() => router.push('/campuses')} className="px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-white font-semibold transition-all transform hover:-translate-y-0.5">
                            View Colleges
                        </button>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                        <img src={getAssetUrl('graphic era/grafest-day-third-2.jpg')} alt="College fest" className="rounded-2xl shadow-xl object-cover h-48 w-full hover:scale-[1.02] transition-transform duration-500" />
                        <img src={getAssetUrl('shivalik college/shivalik.png')} alt="Shivalik College Campus" className="rounded-2xl shadow-xl object-cover h-64 w-full hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="space-y-4">
                        <img src={getAssetUrl('DIT/DIT_University_image_39615.avif')} alt="DIT University Campus" className="rounded-2xl shadow-xl object-cover h-64 w-full hover:scale-[1.02] transition-transform duration-500" />
                        <img src={getAssetUrl('graphic era/eb251c1788b84cfdb137fc104b4b7da2_top-placement.webp')} alt="Successful Placements" className="rounded-2xl shadow-xl object-cover h-48 w-full hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                </div>
            </section>

            {/* 3. OUR MISSION SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            To empower students with expert guidance and transparent counseling, helping them make informed decisions about their education path. We strive to become the most trusted name in admission counseling in Dehradun.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We believe that every student deserves access to quality education and the right mentorship to unlock their full potential.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="border-l-4 border-indigo-500 pl-6 py-2">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-gray-400 font-medium text-sm lg:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FULL WIDTH IMAGE BANNER */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-2xl group">
                    <img src={getAssetUrl('graphic era/eb251c1788b84cfdb137fc104b4b7da2_top-placement.webp')} alt="Successful Placements" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b2b]/80 via-transparent to-transparent"></div>
                </div>
            </section>

            {/* 5. OUR VALUES SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Principles that guide our counseling and student interactions every day.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((val, idx) => (
                        <div key={idx} className="bg-[#0f2238] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10">
                            <h3 className="text-xl font-semibold text-white mb-3">{val.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. TRUSTED BY SECTION */}
            <section className="py-16 px-6 border-y border-white/5 bg-[#0a1826]">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Trusted by Top Institutes</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
                        {partners.map((partner, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-bold text-gray-300 cursor-default select-none">{partner}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. OUR TEAM SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">The education experts dedicated to shaping your career.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 justify-items-center">
                    {team.map((member, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden mx-auto border-2 border-indigo-500/20 group-hover:border-indigo-500 transition-colors shadow-lg relative">
                                <img src={getAssetUrl(member.image)} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-white text-sm font-bold">{member.name}</h3>
                            <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. FROM THE BLOG SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Insights</h2>
                        <p className="text-gray-400 mt-2">Expert advice and updates from our blog.</p>
                    </div>
                    <button onClick={() => router.push('/blog')} className="text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors flex items-center gap-1">
                        View all posts
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} onClick={() => router.push('/blog')} className="group cursor-pointer bg-[#0f2238] rounded-2xl p-4 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
                            <div className="rounded-xl overflow-hidden h-48 mb-6 relative">
                                <img src={getAssetUrl(blog.image)} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">{blog.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{blog.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
