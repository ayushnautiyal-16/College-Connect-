'use client';

import React from 'react';
import { getAssetUrl } from '@/utils/assets';
import { useRouter } from 'next/navigation';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import '@/styles/apply-animations.css';
import CountUpAnimation from '@/components/CountUpAnimation';

function About() {
    const router = useRouter();

    const heroRef = useScrollAnimation({ threshold: 0.1 });
    const whoWeAreRef = useScrollAnimation({ threshold: 0.15 });
    const whatWeDoRef = useScrollAnimation({ threshold: 0.15 });
    const whyChooseRef = useScrollAnimation({ threshold: 0.15 });
    const missionVisionRef = useScrollAnimation({ threshold: 0.15 });
    const approachRef = useScrollAnimation({ threshold: 0.15 });
    const trustRef = useScrollAnimation({ threshold: 0.15 });

    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'College Counseling',
            description: 'Expert guidance to help you choose colleges that match your academic goals and career aspirations.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Admission Assistance',
            description: 'End-to-end support throughout the admission process, from application to enrollment.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: 'Eligibility Guidance',
            description: 'Clear advice on eligibility criteria, entrance exams, and admission requirements for each college.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Documentation Support',
            description: 'Assistance with preparing and organizing all necessary documents for a smooth admission process.',
        },
    ];

    const whyChooseUs = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Local Dehradun Expertise',
            description: 'Deep knowledge of all private colleges in Dehradun and their unique strengths.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Honest & Transparent',
            description: "No hidden agendas—we recommend colleges based solely on what's best for you"
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: 'Personalized Counseling',
            description: 'Every student is unique. We tailor our guidance to your interests, goals, and eligibility.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Strong College Network',
            description: 'Established relationships with top colleges in Dehradun for smooth admissions.',
        },
    ];

    const approachSteps = [
        { number: '01', title: 'Understand Your Goals', description: 'We begin by listening—understanding your interests, academic background, and career aspirations.' },
        { number: '02', title: 'Recommend Suitable Colleges', description: 'Based on your profile, we shortlist colleges that align with your goals and eligibility.' },
        { number: '03', title: 'Guide the Admission Process', description: 'We assist with applications, documentation, and all admission formalities step-by-step.' },
        { number: '04', title: 'Ongoing Support', description: "Our support continues even after admission—we're here whenever you need guidance." },
    ];

    const trustStats = [
        { number: '8+', label: 'Years of Experience' },
        { number: '5000+', label: 'Students Guided' },
        { number: '50+', label: 'Partner Colleges' },
        { number: '95%', label: 'Success Rate' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden relative">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-200/20 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-purple-200/20 rounded-full blur-[120px] animate-float-delayed"></div>
            </div>

            <section ref={heroRef.ref} className="relative z-10 text-white min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-slate-900/80 to-purple-900/90 z-10"></div>
                    <img src={getAssetUrl("serious-teacher-checking-assignment-two-students_hmsmoy.jpg")} alt="Teacher guiding students" className="w-full h-full object-cover animate-pulse-slow" style={{ animationDuration: '20s' }} />
                </div>
                <div className={`container mx-auto px-4 relative z-20 text-center transform transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex justify-center mb-6 md:mb-8">
                        <span className="inline-block py-1.5 px-4 md:py-2 md:px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-indigo-300 text-xs md:text-sm font-semibold tracking-wide uppercase animate-slide-up shadow-lg">✨ Best Education Consultancy in Dehradun</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-2xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-indigo-200 drop-shadow-lg">Your Path to the</span> <br />
                        <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] animate-text-shimmer">Right College</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-200 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-90 px-4">Expert admission counseling. We match students with colleges that fit their goals and potential perfectly.</p>
                    <button onClick={() => router.push('/contact')} className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-indigo-700 font-bold rounded-full shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-sm md:text-base">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative z-10 flex items-center gap-2">Get Free Counseling<svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                    </button>
                </div>
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 opacity-70">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            <section ref={whoWeAreRef.ref} className="py-16 md:py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <h2 className={`text-3xl md:text-5xl font-bold text-slate-800 relative inline-block transition-all duration-1000 ease-out ${whoWeAreRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                Who We Are
                                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000 delay-500 ${whoWeAreRef.isVisible ? 'w-1/2' : 'w-0'}`}></div>
                            </h2>
                            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                                <p className={`bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all duration-1000 delay-300 ease-out ${whoWeAreRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>We are a dedicated team of education counselors based in Dehradun, specializing in admission guidance for private colleges across the city. With years of experience in the education sector, we understand the challenges students and parents face when choosing the right college.</p>
                                <p className={`bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all duration-1000 delay-500 ease-out ${whoWeAreRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Our mission is simple: to provide <span className="text-indigo-600 font-semibold">honest, transparent, and personalized counseling</span> that helps every student find a college that aligns with their strengths, interests, and future goals.</p>
                            </div>
                        </div>
                        <div className={`relative group transition-all duration-1000 delay-700 ease-out ${whoWeAreRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                            <img src={getAssetUrl("happy-teacher-with-students-background_ztskqv.jpg")} alt="Team" className="relative rounded-[2rem] shadow-2xl z-10 transform transition-transform duration-500 group-hover:-translate-y-2 object-cover aspect-[4/3] w-full" />
                            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-indigo-100 animate-float-delayed hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600"><svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></div>
                                    <div><div className="font-bold text-slate-800 text-sm md:text-base">Trusted Guidance</div><div className="text-xs md:text-sm text-slate-500">100% Satisfaction</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={whatWeDoRef.ref} className="py-16 md:py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs md:text-sm">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Comprehensive Support</h2>
                        <p className="text-slate-600 text-base md:text-lg">Guiding you through every step of your admission journey with precision and care.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden text-center">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 md:mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 mx-auto">{service.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={whyChooseRef.ref} className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className={`transform transition-all duration-1000 text-center lg:text-left ${whyChooseRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Students <br /><span className="text-indigo-400">Choose Us</span></h2>
                            <div className="space-y-4 md:space-y-6">
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} className={`flex flex-col sm:flex-row gap-4 md:gap-6 p-5 md:p-6 rounded-2xl border border-transparent transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 group items-center sm:items-start text-center sm:text-left ${whyChooseRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-inner">{item.icon}</div>
                                        <div><h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white group-hover:text-amber-300 transition-colors">{item.title}</h3><p className="text-slate-200 leading-relaxed font-medium text-sm md:text-base">{item.description}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`relative transform transition-all duration-1000 delay-200 ${whyChooseRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <img src={getAssetUrl("red-haired-lady-eyeglasses-holds-books-shows-ok-sign_jmfod2.jpg")} alt="Student 1" className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover transform translate-y-8 md:translate-y-12" />
                                <img src={getAssetUrl("front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_i2xkzc.jpg")} alt="Student 2" className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={trustRef.ref} className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-x divide-white/20">
                        {trustStats.map((stat, idx) => (
                            <div key={idx} className="p-2 md:p-4">
                                <div className="text-3xl md:text-5xl font-black mb-2 flex justify-center">{trustRef.isVisible && <CountUpAnimation target={stat.number} />}</div>
                                <div className="text-indigo-100 font-medium uppercase tracking-wide text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={approachRef.ref} className="py-16 md:py-24 bg-slate-50 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Approach</h2>
                        <p className="text-slate-600 mt-2 md:mt-4 text-sm md:text-base">Simple, transparent, and effective process.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {approachSteps.map((step, idx) => (
                            <div key={idx} className="flex gap-4 md:gap-6 items-start bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-indigo-50">
                                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl rotate-3 flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-lg">{step.number}</div>
                                <div><h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h3><p className="text-slate-700 leading-relaxed font-medium text-sm md:text-base">{step.description}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={missionVisionRef.ref} className="py-0 relative z-10">
                <div className="grid md:grid-cols-2">
                    <div className={`relative bg-indigo-950 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center lg:items-start lg:text-left overflow-hidden group transition-all duration-1000 ${missionVisionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-white/10 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-3xl md:text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Our Mission</h3>
                        <p className="text-blue-50 leading-relaxed text-lg md:text-xl font-medium relative z-10 max-w-lg mx-auto lg:mx-0">To empower students with <span className="text-cyan-300 font-bold">expert guidance</span> and <span className="text-amber-300 font-bold">transparent counseling</span>, helping them make informed decisions about their education path.</p>
                    </div>
                    <div className={`relative bg-gradient-to-br from-white to-indigo-50 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center lg:items-start lg:text-left border-t md:border-t-0 md:border-l border-indigo-100 overflow-hidden group transition-all duration-1000 delay-200 ${missionVisionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 group-hover:bg-indigo-200/50 transition-colors duration-500"></div>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-2xl shadow-indigo-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10">
                            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-3xl md:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-900 tracking-tight relative z-10">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium relative z-10 max-w-lg mx-auto lg:mx-0">To become the <span className="text-indigo-600 font-bold">most trusted name</span> in admission counseling, recognized for our integrity and dedication to <span className="text-purple-600 font-bold">student success</span>.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white text-center relative z-10">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8">Ready to Start?</h2>
                    <p className="text-lg md:text-xl text-slate-700 mb-8 md:mb-10 font-medium">Take the first step towards your dream college with our expert guidance.</p>
                    <button onClick={() => router.push('/contact')} className="px-8 py-4 md:px-10 md:py-5 bg-indigo-600 text-white font-bold rounded-full shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all duration-300 text-sm md:text-base">Book Your Free Session</button>
                </div>
            </section>
        </div>
    );
}

export default About;
