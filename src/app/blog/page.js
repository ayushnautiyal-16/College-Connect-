'use client';

import React, { useEffect, useState, useRef } from 'react';
import { getAssetUrl } from '@/utils/assets';
import { useRouter } from 'next/navigation';
import { blogPosts, categories, seoTitles } from '@/data/blogData';

export default function BlogPage() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState('All');
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsHeroVisible(true), 100);
    }, []);

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(p => p.category === activeCategory);

    const featuredPost = blogPosts[0];
    const gridPosts = activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts;

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* ════════════════════════════  HERO  ════════════════════════════ */}
            <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={getAssetUrl("blog1.jpg")}
                        alt="Best Colleges in Dehradun – Campus View"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 40%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className={`transition-all duration-700 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 tracking-wide">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            COLLEGE CONNECT BLOG
                        </span>
                    </div>

                    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.15] transition-all duration-700 delay-100 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        Your Guide to the{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            Best Colleges
                        </span>
                        <br className="hidden md:block" /> in Dehradun
                    </h1>

                    <p className={`text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        Expert insights on admissions, fees, placements, scholarships & campus life for top private universities in Dehradun, Uttarakhand.
                    </p>

                    {/* SEO keyword tags */}
                    <div className={`flex flex-wrap justify-center gap-2 mt-8 transition-all duration-700 delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        {['Best College in Dehradun', 'Direct Admission 2026', 'Low Fees', 'Top Placements', 'Scholarships'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.07] border border-white/10 text-white/70 text-[11px] font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════  CATEGORIES FILTER  ════════════════════ */}
            <section className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                                activeCategory === 'All'
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                        >
                            All Posts
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                                        : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* ═══════════════  FEATURED POST (only in All)  ═══════════════ */}
                {activeCategory === 'All' && featuredPost && (
                    <FeaturedCard post={featuredPost} router={router} />
                )}

                {/* ══════════════════  BLOG GRID  ══════════════════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {gridPosts.map((post, idx) => (
                        <BlogCard key={post.id} post={post} index={idx} router={router} />
                    ))}
                </div>

                {/* ═════════════  TRENDING SEO TOPICS  ═════════════ */}
                <TrendingTopics />

                {/* ════════════════  NEWSLETTER CTA  ════════════════ */}
                <NewsletterCTA />

            </div>

            {/* ═══════════  SEO SCHEMA (JSON-LD)  ═══════════ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "College Connect Blog – Best Colleges in Dehradun",
                        "description": "Expert articles on best colleges in Dehradun including admission guides, fees structure, placements, hostel, and scholarship information.",
                        "url": "https://collegeconnect.co.in/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "College Connect",
                        },
                        "blogPost": blogPosts.map(p => ({
                            "@type": "BlogPosting",
                            "headline": p.title,
                            "description": p.excerpt,
                            "author": { "@type": "Person", "name": p.author },
                            "datePublished": p.date,
                            "url": `https://collegeconnect.co.in/blog/${p.id}`,
                        })),
                    }),
                }}
            />
        </div>
    );
}


/* ═══════════════════════════════════════════════════════════════ */
/*  Sub-components                                                */
/* ═══════════════════════════════════════════════════════════════ */

function FeaturedCard({ post, router }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
        if (ref.current) obs.observe(ref.current);
        return () => { if (ref.current) obs.unobserve(ref.current); };
    }, []);

    return (
        <div
            ref={ref}
            className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div
                onClick={() => router.push(`/blog/${post.id}`)}
                className="group relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
                {/* Image side */}
                <div className={`relative h-72 lg:h-auto overflow-hidden bg-gradient-to-br ${post.imageGradient}`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    <svg className="absolute inset-0 w-full h-full opacity-10">
                        <pattern id="feat-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#feat-dots)" />
                    </svg>
                    <div className="absolute bottom-6 left-6">
                        <span className="px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-wide">
                            ⭐ Featured Article
                        </span>
                    </div>
                </div>

                {/* Content side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5 text-sm">
                        <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs">{post.category}</span>
                        <span className="text-gray-400">{post.date}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                                <p className="text-xs text-gray-400">{post.readTime}</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function BlogCard({ post, index, router }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => { if (ref.current) obs.unobserve(ref.current); };
    }, []);

    return (
        <article
            ref={ref}
            onClick={() => router.push(`/blog/${post.id}`)}
            className={`
                group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm
                hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer
                flex flex-col h-full
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
        >
            {/* Image */}
            <div className={`h-52 w-full relative overflow-hidden bg-gradient-to-br ${post.imageGradient}`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-[11px] font-bold rounded-full shadow-sm">
                        {post.category}
                    </span>
                </div>
                {/* Read time badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 bg-black/30 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
                        {post.readTime}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                    <span>{post.date}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                    {post.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                            {post.author.charAt(0)}
                        </div>
                        <span className="text-xs font-medium text-gray-500">{post.author}</span>
                    </div>
                    <span className="text-indigo-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Read
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </article>
    );
}


function TrendingTopics() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => { if (ref.current) obs.unobserve(ref.current); };
    }, []);

    return (
        <div ref={ref} className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    Trending Now
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    What Students Are{' '}
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Searching</span>
                </h2>
                <p className="mt-2 text-gray-400 text-sm">Top queries from students looking for the best colleges in Dehradun</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
                    {seoTitles.map((title, i) => (
                        <div key={i} className="flex items-start gap-4 p-3 hover:bg-white rounded-xl transition-all duration-200 cursor-pointer group">
                            <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center text-[11px] font-bold flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mt-0.5">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm text-gray-600 font-medium group-hover:text-indigo-700 transition-colors leading-relaxed">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function NewsletterCTA() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
        if (ref.current) obs.observe(ref.current);
        return () => { if (ref.current) obs.unobserve(ref.current); };
    }, []);

    return (
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative overflow-hidden rounded-3xl" style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0c1631 70%, #1a1145 100%)',
            }}>
                {/* Decorative blobs */}
                <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/15 blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-violet-500/15 blur-[100px]" />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="nl-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#818cf8" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#nl-grid)" />
                    </svg>
                </div>

                <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold mb-6">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        Stay Updated
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        Get Free Admission{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Alerts & Tips
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
                        Subscribe to receive weekly scholarship alerts, admission deadlines, and expert career guidance directly in your inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/15 backdrop-blur-sm transition-all text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-5 text-xs text-gray-600">No spam. Unsubscribe anytime.</p>
                </div>
            </div>
        </div>
    );
}
