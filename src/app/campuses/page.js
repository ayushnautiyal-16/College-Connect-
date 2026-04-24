'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CollegeCard from '@/components/CollegeCard/CollegeCard';
import AnimatedSectionHeader from '@/components/AnimatedSectionHeader/AnimatedSectionHeader';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import GradientText from '@/components/GradientText/GradientText';
import { collegesData } from '@/utils/collegesData';
import { Suspense } from 'react';

function CampusesContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('query') || '';
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    const colleges = collegesData;

    const filteredColleges = colleges.filter((college) => {
        const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            college.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            college.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 pb-20 relative bg-[#faf6ff] overflow-hidden">
            {/* Opalescent Glassmorphism & Mesh Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 1. Base Gradient Blobs (Animated) */}
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 rounded-full blur-[100px] animate-float" style={{ animationDuration: '12s' }} />
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-gradient-to-bl from-cyan-400/30 to-blue-500/30 rounded-full blur-[120px] animate-float-delayed" style={{ animationDuration: '14s' }} />
                <div className="absolute bottom-[-10%] left-[15%] w-[55%] h-[55%] bg-gradient-to-tr from-rose-400/25 to-amber-400/25 rounded-full blur-[100px] animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }} />

                {/* 2. Abstract Geometric Glass Rings */}
                <div className="absolute top-[10%] right-[12%] w-64 h-64 border border-white/60 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)] animate-float-delayed z-0" />
                <div className="absolute bottom-[20%] left-[8%] w-48 h-48 border border-white/50 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-float z-0" style={{ animationDuration: '9s' }} />

                {/* 3. Global Frosted Glass Overlay - This creates the milky, sophisticated blur */}
                <div className="absolute inset-0 bg-white/55 backdrop-blur-[60px] z-0" />

                {/* 4. Fine Grain Noise Texture for deep premium aesthetic */}
                <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <AnimatedSectionHeader
                    leftText="Top Colleges in"
                    rightText="Dehradun"
                    subtitle="Discover the best colleges in Dehradun offering quality education in engineering, management, and various other disciplines."
                />

                <AnimatedSection animationType="fade-up" delay={100} className="mb-16 relative z-10">
                    <div className="relative w-full max-w-2xl mx-auto group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className={`relative flex items-center bg-white rounded-full p-2 transition-all duration-300 shadow-xl ${searchQuery ? 'ring-2 ring-indigo-500' : 'ring-1 ring-slate-200'}`}>
                            <div className="pl-4 pr-3 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search colleges by name, location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent text-slate-700 placeholder-slate-400 text-lg font-medium focus:outline-none py-2"
                            />
                            <button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 ml-2"
                                onClick={(e) => e.preventDefault()}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </AnimatedSection>

                <div className="mb-6">
                    <p className="text-gray-600 text-lg">
                        Showing <span className="font-semibold text-gray-900">{filteredColleges.length}</span> colleges
                    </p>
                </div>

                <section className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college, index) => (
                                <AnimatedSection
                                    key={college.id}
                                    animationType="fade-up"
                                    delay={(index % 4) * 100}
                                    className="w-full"
                                >
                                    <CollegeCard college={college} index={index} />
                                </AnimatedSection>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No colleges found</h3>
                                <p className="text-gray-600">Try adjusting your search query</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mt-24 pt-16 relative">
                    {/* Premium Background */}
                    <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-[100px] opacity-50"></div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-pink-300/20 to-cyan-300/20 rounded-full blur-[100px] opacity-50"></div>
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-[20px]"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                                Success <GradientText>Stories</GradientText>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Hear from students who transformed their futures with our guidance
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    name: 'Rajesh Kumar',
                                    college: 'Graphic Era University',
                                    rating: 5,
                                    testimonial: 'The counseling team at College Connect helped me choose the perfect college that matched my interests. The entire process was transparent and supportive.',
                                    delay: 0
                                },
                                {
                                    name: 'Priya Sharma',
                                    college: 'DIT University',
                                    rating: 5,
                                    testimonial: 'I was confused about my career path, but their expert guidance made everything clear. Got admission in my dream college!',
                                    delay: 100
                                },
                                {
                                    name: 'Amit Patel',
                                    college: 'UPES',
                                    rating: 5,
                                    testimonial: 'Amazing support from start to finish. They guided me through every step and made sure I got the best college for my goals.',
                                    delay: 200
                                }
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="group h-full"
                                    style={{
                                        animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
                                        animationDelay: `${testimonial.delay}ms`
                                    }}
                                >
                                    <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group-hover:border-indigo-300">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                                            &quot;{testimonial.testimonial}&quot;
                                        </p>

                                        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-6"></div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                                                <p className="text-gray-600 text-sm">{testimonial.college}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default function Campuses() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-lg text-gray-500">Loading...</div></div>}>
            <CampusesContent />
        </Suspense>
    );
}
