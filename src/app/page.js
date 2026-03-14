'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import HomeSearch from '@/components/HomeSearch/HomeSearch';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import StepCard from '@/components/StepCard/StepCard';
import CollegeCard from '@/components/CollegeCard/CollegeCard';
import AnimatedSectionHeader from '@/components/AnimatedSectionHeader/AnimatedSectionHeader';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';
import GradientText from '@/components/GradientText/GradientText';
import LogoTicker from '@/components/LogoTicker/LogoTicker';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import CollegeStatsSection from '@/components/CollegeStatsSection/CollegeStatsSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection/SuccessStoriesSection';
import OfficeSection from '@/components/OfficeSection/OfficeSection';
import { collegesData } from '@/utils/collegesData';

function Home() {
    const router = useRouter();

    const initialCollegesCount = 6;
    const displayedColleges = collegesData.slice(0, initialCollegesCount);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            college: 'IIT Delhi',
            rating: 5,
            testimonial: 'College Connect helped me find the perfect college that matched my interests. The counseling was excellent and the entire process was smooth.',
        },
        {
            name: 'Priya Sharma',
            college: 'BITS Pilani',
            rating: 5,
            testimonial: 'The team was incredibly supportive throughout my admission process. They helped me with everything from college selection to application submission.',
        },
        {
            name: 'Amit Patel',
            college: 'NIT Surat',
            rating: 5,
            testimonial: 'Professional service and expert guidance. I got admission in my dream college thanks to College Connect.',
        },
    ];

    const steps = [
        {
            number: 1,
            title: 'Free Consultation',
            description: 'Book a free counseling session with our expert advisors to understand your options.',
        },
        {
            number: 2,
            title: 'College Selection',
            description: 'We help you identify the best colleges based on your preferences, scores, and career goals.',
        },
        {
            number: 3,
            title: 'Application Support',
            description: 'Get assistance with application forms, documentation, and submission process.',
        },
        {
            number: 4,
            title: 'Admission Confirmation',
            description: 'We guide you through the entire admission process until you secure your seat.',
        },
    ];



    return (
        <div className="bg-white">
            {/* Hero Slideshow & Search */}
            <div className="relative bg-light-secondary">
                <HomeSearch />
                <HeroSlider />
            </div>

            {/* Top Colleges Section */}
            <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f6ff 25%, #fff 50%, #f0f9ff 75%, #f5f3ff 100%)' }}>
                {/* Decorative Background Elements */}
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

                    {/* Diagonal decorative lines */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04] hidden md:block">
                        <div className="absolute -top-20 -left-20 w-[600px] h-[1px] bg-indigo-500 rotate-[30deg]" />
                        <div className="absolute -top-10 -left-10 w-[500px] h-[1px] bg-indigo-500 rotate-[30deg]" />
                        <div className="absolute -bottom-20 -right-20 w-[600px] h-[1px] bg-purple-500 rotate-[30deg]" />
                        <div className="absolute -bottom-10 -right-10 w-[500px] h-[1px] bg-purple-500 rotate-[30deg]" />
                    </div>
                </div>

                {/* Top edge gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <AnimatedSectionHeader
                        leftText="Top Colleges in"
                        rightText="Dehradun"
                        subtitle="Discover the best educational institutions in Dehradun offering quality education, excellent infrastructure, and outstanding placement opportunities"
                    />

                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                            {displayedColleges.map((college, index) => (
                                <AnimatedSection
                                    key={college.id}
                                    animationType="fade-up"
                                    delay={index % 3 * 100}
                                    className="w-full"
                                >
                                    <CollegeCard college={college} index={index} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/campuses"
                            className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            View All Colleges
                        </Link>
                    </div>
                </div>

                {/* Bottom edge gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
            </section>

            {/* Stats Section */}
            <CollegeStatsSection />

            {/* Logo Ticker Section */}
            <div className="bg-white">
                <LogoTicker />
            </div>

            {/* Why College Connect - Premium Dark Features Section */}
            <FeaturesSection />

            {/* Success Stories Section */}
            <SuccessStoriesSection />

            {/* CTA Section */}
            <section className="py-24 bg-dark-primary text-text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
                    <AnimatedSection animationType="slide-left">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Start Your College <GradientText>Journey?</GradientText>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection animationType="slide-left" delay={200}>
                        <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed">
                            Take the first step towards your dream college today
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animationType="fade-up" delay={400}>
                        <button
                            onClick={() => router.push('/apply')}
                            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl shadow-xl"
                        >
                            Apply Now
                        </button>
                    </AnimatedSection>
                </div>
            </section>

            {/* Office Section */}
            <OfficeSection />
        </div>
    );
}

export default Home;
