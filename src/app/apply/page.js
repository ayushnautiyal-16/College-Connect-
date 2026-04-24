'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAssetUrl } from '@/utils/assets';
import '@/styles/apply-animations.css';
import GradientText from '@/components/GradientText/GradientText';
import { trackGoogleAdsFormConversion } from '@/lib/trackGoogleAdsConversion';
import { collegesData } from '@/utils/collegesData';
import CollegeCard from '@/components/CollegeCard/CollegeCard';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import ApplyJourneyIllustration from '@/components/ApplyJourneyIllustration/ApplyJourneyIllustration';
import ApplyPageBackground from '@/components/ApplyPageBackground/ApplyPageBackground';
import HeroSectionBackground from '@/components/HeroSectionBackground/HeroSectionBackground';
import WhyChooseUsV4 from '@/components/WhyChooseUsV4/WhyChooseUsV4';
import FAQSection from '@/components/FAQSection/FAQSection';


export default function ApplyPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        preferredCollege: '',
        otherCollege: '',
        preferredCourse: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // Trigger entrance animations on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const collegesList = [
        'Graphic Era University',
        'DIT University',
        'Uttaranchal University',
        'UPES',
        'Dev Bhoomi Uttarakhand University',
        'Shri Guru Ram Rai University',
        'Other'
    ];

    const courses = [
        'B.Tech / Engineering',
        'MBA / Management',
        'BBA / Business Administration',
        'BCA / Computer Applications',
        'B.Pharma / Pharmacy',
        'LLB / Law',
        'B.Sc / Science',
        'B.Com / Commerce',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
            newErrors.mobileNumber = 'Valid 10-digit number required';
        }
        if (!formData.preferredCollege) newErrors.preferredCollege = 'Please select a college';
        if (formData.preferredCollege === 'Other' && !formData.otherCollege?.trim()) {
            newErrors.otherCollege = 'Please specify your college name';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setSubmitError(null);

            const college = formData.preferredCollege === 'Other'
                ? formData.otherCollege
                : formData.preferredCollege;

            try {
                const response = await fetch('/api/apply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        mobileNumber: formData.mobileNumber,
                        preferredCollege: college,
                        preferredCourse: formData.preferredCourse || null,
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    trackGoogleAdsFormConversion();
                    setFormData({ fullName: '', mobileNumber: '', preferredCollege: '', otherCollege: '', preferredCourse: '' });
                    router.push('/thank-you');
                } else {
                    setSubmitError(result.message || 'Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Apply form submission error:', error);
                setSubmitError('Network error. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    /* ── Scroll Reveal Observer ── */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const topColleges = collegesData.slice(0, 3);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            college: 'Graphic Era University',
            rating: 5,
            testimonial: 'College Connect helped me find the perfect college that matched my interests. The counseling was excellent and the entire process was smooth.',
        },
        {
            name: 'Priya Sharma',
            college: 'DIT University',
            rating: 5,
            testimonial: 'The team was incredibly supportive throughout my admission process. They helped me with everything from college selection to application submission.',
        },
        {
            name: 'Amit Patel',
            college: 'Uttaranchal University',
            rating: 5,
            testimonial: 'I was confused about which college to choose. College Connect made it easy with their expert guidance and helped me secure admission quickly.',
        },
    ];

    return (
        <div className="min-h-screen relative flex flex-col font-sans overflow-x-hidden bg-[#f0f5ff]">
            {/* HERO SECTION WITH FORM */}
            <section className="relative pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 overflow-hidden z-10">
                
                {/* ── Hero-Specific Premium Background ── */}
                <HeroSectionBackground />

                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                        {/* Left Content */}
                        <div className="flex flex-col gap-8 md:gap-10 pt-0">
                            {/* Heading Group */}
                            <div className="flex flex-col gap-5 pt-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
                                    Get Direct Admission in <br className="hidden sm:block" />
                                    <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block mt-1 pb-1">
                                        Top Colleges of Dehradun
                                    </span>
                                </h1>

                                <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-100 shadow-sm">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-emerald-800 text-sm md:text-base">
                                        Without Donation or Confusion
                                    </span>
                                </div>

                            </div>

                            <div className="flex flex-col gap-3 md:gap-4">
                                <h3 className="text-xs sm:text-sm md:text-base font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Expert Admission Guidance for Private Universities &amp; Colleges in Dehradun.
                                </h3>

                                {/* Key Benefits */}
                                <ul className="flex flex-col gap-2.5">
                                    {[
                                        "Get admission in top Dehradun colleges",
                                        "No hidden charges / No donation guidance",
                                        "Personalized career counselling",
                                        "Application & documentation support",
                                        "Scholarship guidance available"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs sm:text-sm md:text-base text-gray-800 font-semibold group bg-white/40 border border-white/60 px-3 py-2.5 md:px-4 md:py-3 rounded-xl shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] backdrop-blur-md hover:bg-white/70 hover:shadow-md hover:-translate-y-px transition-all cursor-default">
                                            <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm shadow-indigo-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="tracking-tight">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2 border-t border-gray-100">
                                <div className="p-4 md:p-5 rounded-lg md:rounded-xl bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white/90 hover:shadow-lg transition-all flex flex-col justify-center">
                                    <div className="text-xl md:text-2xl font-black text-indigo-600 leading-tight">Personalized</div>
                                    <div className="text-xs md:text-sm font-semibold text-gray-600 mt-1">Counselling</div>
                                </div>
                                <div className="p-4 md:p-5 rounded-lg md:rounded-xl bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white/90 hover:shadow-lg transition-all">
                                    <div className="text-2xl md:text-3xl font-black text-blue-600">100%</div>
                                    <div className="text-xs md:text-sm font-semibold text-gray-600 mt-1">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="w-full">
                            <div className="relative rounded-[2.5rem] p-6 md:p-8 lg:p-12 sticky top-32 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden">
                                {/* Premium Glass Background */}
                                <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl z-0" />
                                
                                {/* Ambient Internal Glows */}
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl z-0" />
                                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-sky-400/20 rounded-full blur-3xl z-0" />

                                {/* Form Content Wrapper */}
                                <div className="relative z-10">
                                    {/* Removed absolute Admissions Open Badge */}

                                    {/* Limited Seats Badge (Top Right) */}
                                    <div className="absolute -top-8 -right-2 md:-top-10 md:-right-4 flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white shadow-md shadow-orange-500/30 border border-orange-400/50 z-20">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-200 opacity-75"></span>
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-100 opacity-50" style={{ animationDelay: '500ms' }}></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                        </span>
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Limited Seats</span>
                                    </div>
                                {submitted ? (
                                    <div className="py-12 md:py-16 flex flex-col items-center justify-center text-center space-y-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl" />
                                            <div className="relative w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-lg md:text-2xl font-bold text-gray-900">Application Received! 🎉</h2>
                                            <p className="text-gray-600 text-xs md:text-sm max-w-xs mx-auto">Thank you! Our team will review your profile and contact you shortly.</p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="px-4 md:px-6 py-2 md:py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-xs md:text-sm transition-all flex items-center gap-2"
                                        >
                                            <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                            Submit Another
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="mb-6 md:mb-8 flex flex-col items-start">
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100 border border-indigo-200 rounded-full mb-3 md:mb-4 shadow-sm">
                                                <svg className="w-3.5 h-3.5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4l1-1h4l1 1h4a2 2 0 012 2v14a2 2 0 01-2 2zm-7-4h2v2h-2v-2zm-4-4h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM8 7h2v2H8V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z" />
                                                </svg>
                                                <span className="text-[10px] md:text-xs font-bold text-indigo-700 uppercase tracking-wider">
                                                    Admissions Open 2026
                                                </span>
                                            </div>
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                                                Quick Apply
                                            </h2>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                Fill in your details to get started
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                            {/* Name Input */}
                                            <div className="group">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5 md:mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <svg className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        className={`w-full pl-9 md:pl-11 pr-4 py-3 text-sm rounded-xl bg-white border text-slate-700 placeholder:text-slate-400 transition-all outline-none ${errors.fullName
                                                            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
                                                            : 'border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                                                            }`}
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                {errors.fullName && <span className="text-xs text-red-600 font-medium mt-1 block">{errors.fullName}</span>}
                                            </div>

                                            {/* Mobile Input */}
                                            <div className="group">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5 md:mb-2">
                                                    Mobile Number *
                                                </label>
                                                <div className="relative">
                                                    <svg className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                    <input
                                                        type="tel"
                                                        name="mobileNumber"
                                                        value={formData.mobileNumber}
                                                        onChange={handleChange}
                                                        maxLength="10"
                                                        className={`w-full pl-9 md:pl-11 pr-4 py-3 text-sm rounded-xl bg-white border text-slate-700 placeholder:text-slate-400 transition-all outline-none ${errors.mobileNumber
                                                            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
                                                            : 'border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                                                            }`}
                                                        placeholder="9876543210"
                                                    />
                                                </div>
                                                {errors.mobileNumber && <span className="text-xs text-red-600 font-medium mt-1 block">{errors.mobileNumber}</span>}
                                            </div>

                                            {/* College Select */}
                                            <div className="group">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5 md:mb-2">
                                                    Dream College *
                                                </label>
                                                <div className="relative">
                                                    <svg className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                                    <select
                                                        name="preferredCollege"
                                                        value={formData.preferredCollege}
                                                        onChange={handleChange}
                                                        className={`w-full pl-9 md:pl-11 pr-8 md:pr-10 py-3 text-sm rounded-xl bg-white border text-slate-700 appearance-none transition-all outline-none cursor-pointer ${errors.preferredCollege
                                                            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
                                                            : 'border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                                                            }`}
                                                    >
                                                        <option value="" disabled hidden>Select a college</option>
                                                        {collegesList.map((col, i) => <option key={i} value={col}>{col}</option>)}
                                                    </select>
                                                    <svg className="absolute right-3 md:right-3.5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                                {errors.preferredCollege && <span className="text-xs text-red-600 font-medium mt-1 block">{errors.preferredCollege}</span>}
                                            </div>

                                            {/* Other College Input */}
                                            {formData.preferredCollege === 'Other' && (
                                                <div className="group animate-in fade-in slide-in-from-top-2 duration-300">
                                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5 md:mb-2">
                                                        College Name *
                                                    </label>
                                                    <div className="relative">
                                                        <svg className="absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                                        <input
                                                            type="text"
                                                            name="otherCollege"
                                                            value={formData.otherCollege}
                                                            onChange={handleChange}
                                                            className={`w-full pl-9 md:pl-11 pr-4 py-3 text-sm rounded-xl bg-white border text-slate-700 placeholder:text-slate-400 transition-all outline-none ${errors.otherCollege
                                                                ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
                                                                : 'border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                                                                }`}
                                                            placeholder="Enter college name"
                                                        />
                                                    </div>
                                                    {errors.otherCollege && <span className="text-xs text-red-600 font-medium mt-1 block">{errors.otherCollege}</span>}
                                                </div>
                                            )}

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full mt-6 md:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 text-base rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                                {!isSubmitting && (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                                )}
                                            </button>

                                            {submitError && (
                                                <div className="p-2.5 md:p-3.5 rounded-lg bg-red-50 border border-red-200">
                                                    <p className="text-xs md:text-sm text-red-700 font-medium">{submitError}</p>
                                                </div>
                                            )}

                                            <p className="text-center text-xs text-gray-600 flex items-center justify-center gap-1.5 font-medium">
                                                <svg className="w-3.5 md:w-4 h-3.5 md:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                Your data is secure & confidential
                                            </p>
                                        </form>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUsV4 />


            {/* TOP COLLEGES SECTION */}
            <section className="py-10 md:py-14 relative z-10 scroll-reveal">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                            Colleges You Can
                            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">Get Into</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                            Top Dehradun Colleges We Work With
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {topColleges.map((college, index) => (
                            <CollegeCard key={college.id} college={college} index={index} />
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-lg md:text-xl font-semibold text-gray-700 underline decoration-indigo-500 decoration-2 underline-offset-4 mb-4">
                        </p>
                    </div>

                    <div className="mt-8 md:mt-12 text-center">
                        <button
                            onClick={() => router.push('/campuses')}
                            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm rounded-lg transition-all shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 mx-auto"
                        >
                            View All Colleges
                            <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* JOURNEY ILLUSTRATION SECTION */}
            <section className="py-16 md:py-20 relative overflow-hidden z-10 scroll-reveal" style={{
                background: 'linear-gradient(135deg, #0f0a1e 0%, #131030 25%, #0e1528 50%, #0c1220 75%, #0a0f1a 100%)',
            }}>
                {/* ── Layer 1: Subtle grid pattern ── */}
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />

                {/* ── Layer 2: Radial gradient accents ── */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{
                        background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
                    }} />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06]" style={{
                        background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
                    }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04]" style={{
                        background: 'radial-gradient(ellipse, #14b8a6 0%, transparent 70%)',
                    }} />
                </div>

                {/* ── Layer 3: Floating glow orbs ── */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-10 right-20 w-2 h-2 bg-indigo-400 rounded-full opacity-40 animate-pulse" />
                    <div className="absolute top-1/3 left-16 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-16 right-1/3 w-1 h-1 bg-teal-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* ── Layer 4: Top & bottom edge fades ── */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0f0a1e] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

                {/* ── Content ── */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-20">
                    <div className="text-center mb-8 md:mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs font-semibold text-indigo-300 mb-4 backdrop-blur-sm">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            Your Application Journey
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                            How It <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">Works</span>
                        </h2>
                        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
                            A simple, guided process to secure your dream college admission.
                        </p>
                    </div>
                    <ApplyJourneyIllustration />
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="py-10 md:py-14 relative overflow-hidden z-10 scroll-reveal">

                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-indigo-100 text-indigo-700 text-xs md:text-sm font-bold mb-4 md:mb-6">
                            <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            Success Stories
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                            What Our
                            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">Students Say</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                            Join thousands of students who got admitted to their dream colleges with our guidance and support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                    {/* Quote Icon */}
                                    <div className="text-indigo-200 mb-4 md:mb-6">
                                        <svg className="w-8 md:w-10 h-8 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-3 md:mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-4 md:w-5 h-4 md:h-5 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial */}
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow italic font-medium">
                                        "{t.testimonial}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-4 md:pt-6 border-t border-gray-100">
                                        <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-lg">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm md:text-base">{t.name}</h4>
                                            <p className="text-xs md:text-sm text-gray-600 font-medium">{t.college}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
}
