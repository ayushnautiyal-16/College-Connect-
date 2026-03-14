'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CollegeCard from '@/components/CollegeCard/CollegeCard';
import AnimatedSectionHeader from '@/components/AnimatedSectionHeader/AnimatedSectionHeader';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
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
        <div className="min-h-screen py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f6ff 25%, #fff 50%, #f0f9ff 75%, #f5f3ff 100%)' }}>
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft gradient blobs */}
                <div className="absolute top-[-8%] left-[-5%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-purple-200/25 rounded-full blur-[100px] animate-float-delayed" />
                <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-cyan-100/25 rounded-full blur-[80px]" />

                {/* Subtle dot-grid pattern */}
                <div className="absolute inset-0 opacity-[0.035]" style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }} />

                {/* Decorative accent rings */}
                <div className="absolute top-20 right-20 w-40 h-40 border border-indigo-200/40 rounded-full hidden lg:block" />
                <div className="absolute top-28 right-28 w-24 h-24 border border-purple-200/30 rounded-full hidden lg:block" />
                <div className="absolute bottom-24 left-16 w-32 h-32 border border-cyan-200/30 rounded-full hidden lg:block" />
                <div className="absolute bottom-32 left-24 w-16 h-16 border border-indigo-200/40 rounded-full hidden lg:block" />
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
