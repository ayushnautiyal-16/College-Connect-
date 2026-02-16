'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import HomeSearch from '@/components/HomeSearch/HomeSearch';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import StepCard from '@/components/StepCard/StepCard';
import CollegeCard from '@/components/CollegeCard/CollegeCard';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import AnimatedSectionHeader from '@/components/AnimatedSectionHeader/AnimatedSectionHeader';
import SimpleAnimatedHeader from '@/components/SimpleAnimatedHeader/SimpleAnimatedHeader';
import LogoTicker from '@/components/LogoTicker/LogoTicker';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { collegesData } from '@/utils/collegesData';

function Home() {
    const router = useRouter();
    const [students, setStudents] = useState(0);
    const [colleges, setColleges] = useState(0);
    const [experience, setExperience] = useState(0);
    const [statsVisible, setStatsVisible] = useState(false);

    // Counter animation effect
    useEffect(() => {
        if (statsVisible) {
            const studentInterval = setInterval(() => {
                setStudents(prev => {
                    if (prev >= 5000) {
                        clearInterval(studentInterval);
                        return 5000;
                    }
                    return prev + 50;
                });
            }, 40);

            const totalColleges = collegesData.length;
            const collegeInterval = setInterval(() => {
                setColleges(prev => {
                    if (prev >= totalColleges) {
                        clearInterval(collegeInterval);
                        return totalColleges;
                    }
                    return prev + 1;
                });
            }, 100);

            const expInterval = setInterval(() => {
                setExperience(prev => {
                    if (prev >= 5) {
                        clearInterval(expInterval);
                        return 5;
                    }
                    return prev + 1;
                });
            }, 400);

            return () => {
                clearInterval(studentInterval);
                clearInterval(collegeInterval);
                clearInterval(expInterval);
            };
        }
    }, [statsVisible]);

    // Intersection observer for stats animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !statsVisible) {
                        setStatsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const statsElement = document.getElementById('stats-section');
        if (statsElement) {
            observer.observe(statsElement);
        }

        return () => {
            if (statsElement) {
                observer.unobserve(statsElement);
            }
        };
    }, [statsVisible]);

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

    const successStories = [
        {
            name: 'Aarav Sharma',
            college: 'Graphic Era University, Dehradun',
            course: 'B.Tech CSE',
            year: '2023 Batch',
            highlight: 'Placed in a top product company',
            story: 'With average 12th marks and no clear college roadmap, Aarav used our counselling to shortlist realistic options. He joined Graphic Era University for CSE and, after four years of focused mentoring and profile-building support, secured a role as a software engineer at a leading product company.',
        },
        {
            name: 'Simran Kaur',
            college: 'DIT University, Dehradun',
            course: 'BBA',
            year: '2022 Batch',
            highlight: 'Switched stream with confidence',
            story: 'Simran wanted to move from Science to Management but was confused about college reputation and fees. We helped her compare DIT University with other private colleges on placements, fees, and campus life. Today she is a BBA graduate working in a reputed finance firm in NCR.',
        },
        {
            name: 'Rahul Verma',
            college: 'Uttaranchal University, Dehradun',
            course: 'LLB (Hons.)',
            year: '2021 Batch',
            highlight: 'First-generation lawyer in the family',
            story: 'Rahul was a first-generation learner with a limited budget but a strong interest in law. Through our detailed counselling and college shortlisting, he joined Uttaranchal University for LLB (Hons.) and now practices at a well-known law firm in Dehradun.',
        },
    ];

    const features = [
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                    <path d="M2 8C3.65685 8 5 6.65685 5 5C5 3.34315 3.65685 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
            ),
            title: 'Expert Counseling',
            description: 'Get guidance from experienced education consultants who understand the admission process.',
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                    <path d="M17 17L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Wide College Database',
            description: 'Access information about thousands of colleges across various streams and locations.',
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 3H9C7.89543 3 7 3.89543 7 5V19C7 20.1046 7.89543 21 9 21H17C18.1046 21 19 20.1046 19 19V8L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 11L21.0001 7.00002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    <path d="M3 11V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
            ),
            title: 'Application Assistance',
            description: 'Complete support for filling applications, documentation, and submission.',
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 4L16.01 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 8L20.01 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'High Success Rate',
            description: 'Join thousands of successful students who got admission in their dream colleges.',
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
            <section className="py-20 bg-light-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <AnimatedSectionHeader
                        leftText="Top Colleges in"
                        rightText="Dehradun"
                        subtitle="Discover the best educational institutions in Dehradun offering quality education, excellent infrastructure, and outstanding placement opportunities"
                    />

                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                            {displayedColleges.map((college, index) => (
                                <AnimatedSection
                                    key={college.id}
                                    animationType="fade-up"
                                    delay={index % 3 * 100}
                                    className="w-full max-w-sm"
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
            </section>

            {/* Stats Section */}
            <section id="stats-section" className="py-12 md:py-16 bg-dark-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}></div>

                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        <AnimatedSection animationType="fade-up" delay={0}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 text-center border border-white/20">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                                    {students.toLocaleString()}+
                                </div>
                                <div className="text-white/90 text-sm md:text-base font-semibold">Students Helped</div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animationType="fade-up" delay={150}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 text-center border border-white/20">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">{colleges}+</div>
                                <div className="text-white/90 text-sm md:text-base font-semibold">Partner Colleges</div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animationType="fade-up" delay={300}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 text-center border border-white/20">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">{experience}+</div>
                                <div className="text-white/90 text-sm md:text-base font-semibold">Years Experience</div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Logo Ticker Section */}
            <div className="bg-white">
                <LogoTicker />
            </div>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-brand-primary/5 via-indigo-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234F46E5' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}></div>

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-gradient-to-tl from-brand-secondary/20 to-indigo-300/20 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-start">
                        {/* Left narrative column */}
                        <AnimatedSection animationType="slide-left">
                            <div className="space-y-6">
                                <SimpleAnimatedHeader
                                    title="Why Choose College Connect?"
                                    subtitle="We don’t just help you pick a college – we design your entire admission journey with clarity and confidence."
                                />

                                {/* Key points list */}
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm">
                                    <h3 className="text-sm font-semibold tracking-wide text-slate-700 uppercase mb-4">
                                        Built for students & parents
                                    </h3>
                                    <div className="space-y-3 text-sm md:text-base text-slate-700">
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                                                ✓
                                            </span>
                                            <p className="leading-relaxed">
                                                <span className="font-semibold">Transparent guidance</span> – no fake promises, no hidden charges, only verified college information.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">
                                                ✓
                                            </span>
                                            <p className="leading-relaxed">
                                                <span className="font-semibold">Personalised shortlisting</span> based on your marks, budget, and preferred course &amp; city.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xs font-bold">
                                                ✓
                                            </span>
                                            <p className="leading-relaxed">
                                                <span className="font-semibold">End‑to‑end support</span> from first call to fee payment, hostel booking, and reporting to campus.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust badges */}
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs md:text-sm font-semibold text-slate-800 shadow-sm border border-slate-200">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                        100% Free Counselling
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-xs md:text-sm font-semibold shadow-sm">
                                        <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400" />
                                        Verified Private Colleges
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs md:text-sm font-semibold text-slate-800 shadow-sm border border-slate-200">
                                        ⭐ 4.9/5 Student Satisfaction
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Right feature grid column */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {features.map((feature, index) => (
                                <AnimatedSection
                                    key={index}
                                    animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                                    delay={index * 120}
                                >
                                    <FeatureCard
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                        index={index}
                                    />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Dehradun Success Stories Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs md:text-sm font-semibold text-emerald-700 mb-3">
                            Real Stories from Dehradun
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Success Stories from Dehradun Colleges
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base">
                            A few examples of how the right counselling, college choice, and consistent guidance
                            changed students&apos; careers.
                        </p>
                    </div>

                    <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                        {successStories.map((story, idx) => (
                            <Card
                                key={idx}
                                className="flex h-full flex-col border-slate-200/90 bg-white/95 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <CardHeader className="pb-3">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-1">
                                        {story.highlight}
                                    </p>
                                    <CardTitle className="text-base md:text-lg">
                                        {story.name}
                                    </CardTitle>
                                    <CardDescription className="mt-1 text-xs md:text-sm">
                                        {story.course} &middot; {story.college}
                                        <br />
                                        <span className="text-slate-400">{story.year}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0 pb-5 text-sm leading-relaxed text-slate-600">
                                    {story.story}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


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
                            Ready to Start Your College Journey?
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
        </div>
    );
}

export default Home;
