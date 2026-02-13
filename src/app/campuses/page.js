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
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college, index) => (
                                <AnimatedSection
                                    key={college.id}
                                    animationType="fade-up"
                                    delay={(index % 4) * 100}
                                    className="w-full max-w-sm"
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
