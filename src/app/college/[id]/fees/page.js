'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { collegesData } from '@/utils/collegesData';
import { getAssetUrl } from '@/utils/assets';
import '@/styles/apply-animations.css';

export default function CollegeFeesPage({ params }) {
    const { id } = use(params);
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const college = collegesData.find(c => c.id === parseInt(id));

    // Trigger entrance animations
    useEffect(() => {
        setIsVisible(true);
        if (!college) {
            // Handle case where college isn't found if needed
        }
    }, [college]);

    if (!college) {
        return <div className="min-h-screen pt-24 pb-12 flex items-center justify-center text-gray-600">College Not Found</div>;
    }

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
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Valid 10-digit number required';
        }
        if (!formData.course) newErrors.course = 'Please select a course';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate API call
            setTimeout(() => {
                setSubmitted(true);
            }, 800);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 pt-24 overflow-hidden font-sans bg-slate-50">
            {/* Dynamic Animated Background - Light Theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-200/40 rounded-full blur-[100px] animate-float opacity-60 mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-fuchsia-200/40 rounded-full blur-[100px] animate-float-delayed opacity-60 mix-blend-multiply"></div>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-100/60 rounded-full blur-[80px] animate-pulse opacity-50 mix-blend-multiply"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Side: Text/Info */}
                <div className="hidden lg:block space-y-8 pr-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-indigo-100 shadow-sm text-xs font-bold tracking-wide text-indigo-600 uppercase animate-fade-in-up">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                        </span>
                        Official Fee Structure 2026
                    </div>

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-gray-900 animate-slide-in-left">
                        Know The Real Cost<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-text-shimmer bg-[length:200%_auto]">
                            Before You Join
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-xl animate-fade-in-up animation-delay-200">
                        Get the complete, transparent fee breakdown for <span className="text-indigo-700 font-bold decoration-wavy underline decoration-indigo-300">{college.name}</span>. No hidden charges, just verified information directly to your inbox.
                    </p>

                    {/* Trust Badges - Light Theme */}
                    <div className="grid grid-cols-2 gap-6 pt-6 animate-fade-in-up animation-delay-400">
                        <div className="group p-6 rounded-2xl bg-white/60 border border-white/50 shadow-lg shadow-indigo-100/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">100%</div>
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Transparent</div>
                        </div>
                        <div className="group p-6 rounded-2xl bg-white/60 border border-white/50 shadow-lg shadow-indigo-100/50 backdrop-blur-sm hover:border-fuchsia-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-fuchsia-600 transition-colors">24/7</div>
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Support</div>
                        </div>
                    </div>

                    {/* Fee Structure Image Preview */}
                    {college.feesStructureImage && (
                        <div className="mt-8 animate-fade-in-up animation-delay-500">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                Official Fee Structure
                            </h3>
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                                onClick={() => window.open(getAssetUrl(college.feesStructureImage), '_blank')}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm transform scale-90 group-hover:scale-100 transition-all duration-300">
                                        Click to Expand
                                    </span>
                                </div>
                                <img
                                    src={getAssetUrl(college.feesStructureImage)}
                                    alt={`${college.name} Fee Structure`}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Form Card - Light Theme */}
                <div className="relative group perspective-1000 animate-fade-scale-up animation-delay-300">
                    {/* Animated Border Gradient */}
                    <div className="absolute -inset-[3px] rounded-[2.5rem] bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 opacity-30 blur-xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

                    <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-indigo-200/50 overflow-hidden border border-white/60 isolate">
                        {/* Subtle Pattern Overlay */}
                        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        {/* Card Content */}
                        <div className="relative z-10 p-8 md:p-10">
                            {submitted ? (
                                <div className="py-20 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
                                    <div className="relative group/check">
                                        <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl scale-150 animate-pulse"></div>
                                        <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 group-hover/check:scale-110 transition-transform duration-300">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-bold text-gray-900">Request Sent! 🚀</h2>
                                        <p className="text-gray-500 text-base max-w-xs mx-auto">Check your email/WhatsApp shortly for the detailed fee structure.</p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/')}
                                        className="px-8 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-semibold transition-all duration-300 flex items-center gap-2 text-sm hover:scale-105 active:scale-95 shadow-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                        Back to Home
                                    </button>
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                                            Request Fee Structure
                                        </h2>
                                        <p className="text-gray-500 text-sm font-medium">
                                            Fill in your details to get the latest 2026 fee breakdown.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name Input */}
                                        <div className="group space-y-1.5 direction-ltr">
                                            <label className="text-[10px] font-bold text-gray-500 group-focus-within:text-indigo-600 uppercase tracking-widest ml-1 transition-colors">
                                                Full Name
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none font-semibold text-gray-700 placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-sm ${errors.name ? 'border-red-400/50 focus:border-red-500 bg-red-50' : ''}`}
                                                    placeholder="e.g. Alex Johnson"
                                                />
                                            </div>
                                            {errors.name && <span className="text-[11px] text-red-500 ml-1 flex items-center gap-1 font-semibold tracking-wide animate-pulse">{errors.name}</span>}
                                        </div>

                                        {/* Mobile Input */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-500 group-focus-within:text-fuchsia-600 uppercase tracking-widest ml-1 transition-colors">
                                                Mobile Number
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-fuchsia-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    maxLength="10"
                                                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none font-semibold text-gray-700 placeholder-gray-400 focus:bg-white focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 transition-all duration-300 shadow-sm ${errors.phone ? 'border-red-400/50 focus:border-red-500 bg-red-50' : ''}`}
                                                    placeholder="e.g. 98765 43210"
                                                />
                                            </div>
                                            {errors.phone && <span className="text-[11px] text-red-500 ml-1 flex items-center gap-1 font-semibold tracking-wide animate-pulse">{errors.phone}</span>}
                                        </div>

                                        {/* Email Input */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-500 group-focus-within:text-indigo-600 uppercase tracking-widest ml-1 transition-colors">
                                                Email Address
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none font-semibold text-gray-700 placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-sm ${errors.email ? 'border-red-400/50 focus:border-red-500 bg-red-50' : ''}`}
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            {errors.email && <span className="text-[11px] text-red-500 ml-1 flex items-center gap-1 font-semibold tracking-wide animate-pulse">{errors.email}</span>}
                                        </div>

                                        {/* Course Select */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-500 group-focus-within:text-cyan-600 uppercase tracking-widest ml-1 transition-colors">
                                                Interested Course
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                                </div>
                                                <select
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-10 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none font-semibold text-gray-700 cursor-pointer appearance-none focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 shadow-sm ${errors.course ? 'border-red-400/50 focus:border-red-500 bg-red-50' : ''}`}
                                                >
                                                    <option value="" disabled hidden className="text-gray-400">Select a course...</option>
                                                    <option value="B.Tech" className="text-gray-900 bg-white hover:bg-gray-100 py-2">B.Tech - Engineering</option>
                                                    <option value="MBA" className="text-gray-900 bg-white hover:bg-gray-100 py-2">MBA - Management</option>
                                                    <option value="BBA" className="text-gray-900 bg-white hover:bg-gray-100 py-2">BBA - Business Administration</option>
                                                    <option value="BCA" className="text-gray-900 bg-white hover:bg-gray-100 py-2">BCA - Computer Applications</option>
                                                    <option value="B.Pharma" className="text-gray-900 bg-white hover:bg-gray-100 py-2">B.Pharma - Pharmacy</option>
                                                    <option value="Other" className="text-gray-900 bg-white hover:bg-gray-100 py-2">Other Programs</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-cyan-500 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                            {errors.course && <span className="text-[11px] text-red-500 ml-1 flex items-center gap-1 font-semibold tracking-wide animate-pulse">{errors.course}</span>}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="relative w-full mt-2 group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-xy"></div>
                                            <div className="relative h-full w-full bg-white rounded-[11px] items-center justify-center flex transition-all duration-300 group-hover:bg-opacity-0">
                                                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 group-hover:text-white py-4 px-8 tracking-widest flex items-center gap-2 text-sm uppercase transition-colors">
                                                    Download Fee Structure
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform text-indigo-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                                </span>
                                            </div>
                                        </button>

                                        <p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1.5 font-medium">
                                            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            Your details are 100% confidential
                                        </p>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
