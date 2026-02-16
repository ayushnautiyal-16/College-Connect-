'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import GradientText from '@/components/GradientText/GradientText';

// Avatar gradient palette for author initials
const avatarGradients = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #a18cd1, #fbc2eb)',
];

export default function CollegeBlogSection() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Show only the first 3 posts
    const displayedPosts = blogPosts.slice(0, 3);

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
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const getInitials = (name) =>
        name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 40%, #f0f4ff 70%, #faf5ff 100%)' }}
        >
            {/* ── Background Decorations ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-8%] w-[550px] h-[550px] bg-indigo-200/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-8%] w-[450px] h-[450px] bg-purple-200/15 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-cyan-100/15 rounded-full blur-[80px]" />

                {/* Subtle dot grid */}
                <div className="absolute inset-0 opacity-[0.025]" style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }} />

                {/* Accent rings */}
                <div className="absolute top-20 left-16 w-32 h-32 border border-indigo-200/25 rounded-full hidden lg:block" />
                <div className="absolute bottom-28 right-20 w-24 h-24 border border-purple-200/20 rounded-full hidden lg:block" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* ── Heading ── */}
                <div className={`text-center mb-14 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 tracking-wide uppercase mb-4">
                        Latest Insights
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        From the <GradientText>Blog</GradientText>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                        Expert advice, campus reviews, and the latest trends in higher education to help you make informed decisions.
                    </p>
                </div>

                {/* ── Blog List ── */}
                <div className="space-y-10 md:space-y-14">
                    {displayedPosts.map((post, idx) => (
                        <div
                            key={post.id}
                            className={`group flex flex-col md:flex-row gap-6 md:gap-10 items-start cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${300 + idx * 150}ms` }}
                            onClick={() => router.push(`/blog/${post.id}`)}
                        >
                            {/* Image */}
                            <div className={`w-full md:w-[320px] lg:w-[360px] h-[220px] md:h-[240px] rounded-2xl overflow-hidden flex-shrink-0 shadow-md shadow-slate-200/60 bg-gradient-to-br ${post.imageGradient} relative group-hover:shadow-xl transition-shadow duration-300`}>
                                {/* Decorative pattern inside gradient */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="w-full h-full" width="100%" height="100%">
                                        <pattern id={`dots-${idx}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                                            <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
                                        </pattern>
                                        <rect x="0" y="0" width="100%" height="100%" fill={`url(#dots-${idx})`} />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                                {/* Category badge on image */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-[11px] font-bold rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                {/* Date + Read Time */}
                                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>{post.readTime}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-indigo-600 transition-colors duration-200 mb-3">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base line-clamp-2 mb-5">
                                    {post.excerpt}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-gray-100"
                                        style={{ background: avatarGradients[idx % avatarGradients.length] }}
                                    >
                                        <span className="text-white text-[10px] font-bold">
                                            {getInitials(post.author)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                                        <div className="text-xs text-gray-400">Contributor</div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-b border-gray-100 mt-6 md:mt-8" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── View All CTA ── */}
                <div className={`text-center mt-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '800ms' }}>
                    <button
                        onClick={() => router.push('/blog')}
                        className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-8 py-3.5 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300 group"
                    >
                        View All Articles
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
