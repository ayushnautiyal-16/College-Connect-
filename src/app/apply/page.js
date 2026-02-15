'use client';

import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '@/utils/assets';
import '@/styles/apply-animations.css';

export default function ApplyPage() {
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
    const [activeField, setActiveField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // Trigger entrance animations on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const colleges = [
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
                    setSubmitted(true);
                    setFormData({ fullName: '', mobileNumber: '', preferredCollege: '', otherCollege: '', preferredCourse: '' });
                    setTimeout(() => setSubmitted(false), 5000);
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

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 pt-24 overflow-x-hidden font-sans bg-slate-900">
            {/* Dynamic Animated Background - Dark Theme - Static now */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-fuchsia-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-500/20 rounded-full blur-[80px] opacity-30 mix-blend-screen"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Side: Text/Info */}
                <div className="hidden lg:block space-y-8 pr-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm text-xs font-bold tracking-wide text-indigo-300 uppercase">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                        </span>
                        Admissions Open 2026-27
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight text-white">
                        Your Admission,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-[length:200%_auto]">
                            Our Responsibility
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-xl">
                        Unsure about which college or course to choose? Our expert counselors provide personalized guidance to help you decide. Secure verified admission in <span className="text-indigo-400 font-bold decoration-wavy underline decoration-indigo-500/50">Dehradun&apos;s private colleges</span> with our trusted support.
                    </p>

                    {/* Trust Badges - Dark Theme */}
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-cyan-500/20">
                            <div className="text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">5000+</div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Students Placed</div>
                        </div>
                        <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/20 backdrop-blur-sm hover:border-fuchsia-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-fuchsia-500/20">
                            <div className="text-4xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">100%</div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Success Rate</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Card - Dark Theme */}
                <div className="relative group perspective-1000">
                    {/* Animated Border Gradient */}
                    <div className="absolute -inset-[3px] rounded-[2.5rem] bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden border border-white/10 isolate">
                        {/* Subtle Pattern Overlay */}
                        <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] invert"></div>

                        {/* Card Content */}
                        <div className="relative z-10 p-8 md:p-10">
                            {submitted ? (
                                <div className="py-20 flex flex-col items-center justify-center text-center space-y-8">
                                    <div className="relative group/check">
                                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150"></div>
                                        <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover/check:scale-110 transition-transform duration-300">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-bold text-white">Application Sent! 🚀</h2>
                                        <p className="text-gray-400 text-base max-w-xs mx-auto">Get ready! We&apos;re reviewing your profile and will be in touch shortly.</p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-300 font-semibold transition-all duration-300 flex items-center gap-2 text-sm hover:scale-105 active:scale-95 shadow-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                        Submit Another
                                    </button>
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                            Apply Now
                                        </h2>
                                        <p className="text-gray-400 text-sm font-medium">
                                            Fill in your details to begin your journey.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name Input */}
                                        <div className="group space-y-1.5 direction-ltr">
                                            <label className="text-[10px] font-bold text-gray-400 group-focus-within:text-indigo-400 uppercase tracking-widest ml-1 transition-colors">
                                                Full Name
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/50 border border-slate-700 outline-none font-semibold text-gray-200 placeholder-gray-500 focus:bg-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-sm ${errors.fullName ? 'border-red-500/50 focus:border-red-500 bg-red-900/10' : ''}`}
                                                    placeholder="e.g. Alex Johnson"
                                                />
                                            </div>
                                            {errors.fullName && <span className="text-[11px] text-red-400 ml-1 flex items-center gap-1 font-semibold tracking-wide">{errors.fullName}</span>}
                                        </div>

                                        {/* Mobile Input */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-400 group-focus-within:text-fuchsia-400 uppercase tracking-widest ml-1 transition-colors">
                                                Mobile Number
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-fuchsia-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="mobileNumber"
                                                    value={formData.mobileNumber}
                                                    onChange={handleChange}
                                                    maxLength="10"
                                                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/50 border border-slate-700 outline-none font-semibold text-gray-200 placeholder-gray-500 focus:bg-slate-800 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 transition-all duration-300 shadow-sm ${errors.mobileNumber ? 'border-red-500/50 focus:border-red-500 bg-red-900/10' : ''}`}
                                                    placeholder="e.g. 98765 43210"
                                                />
                                            </div>
                                            {errors.mobileNumber && <span className="text-[11px] text-red-400 ml-1 flex items-center gap-1 font-semibold tracking-wide">{errors.mobileNumber}</span>}
                                        </div>

                                        {/* College Select */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-400 group-focus-within:text-cyan-400 uppercase tracking-widest ml-1 transition-colors">
                                                Dream College
                                            </label>
                                            <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                                </div>
                                                <select
                                                    name="preferredCollege"
                                                    value={formData.preferredCollege}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-10 py-4 rounded-xl bg-slate-800/50 border border-slate-700 outline-none font-semibold text-gray-200 cursor-pointer appearance-none focus:bg-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 shadow-sm ${errors.preferredCollege ? 'border-red-500/50 focus:border-red-500 bg-red-900/10' : ''}`}
                                                >
                                                    <option value="" disabled hidden className="text-gray-500">Select your target college...</option>
                                                    {colleges.map((col, i) => <option key={i} value={col} className="text-gray-200 bg-slate-800 hover:bg-slate-700 py-2">{col}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                            {errors.preferredCollege && <span className="text-[11px] text-red-400 ml-1 flex items-center gap-1 font-semibold tracking-wide">{errors.preferredCollege}</span>}
                                        </div>

                                        {/* Other College Input (Conditional) */}
                                        {formData.preferredCollege === 'Other' && (
                                            <div className="group space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 group-focus-within:text-cyan-400 uppercase tracking-widest ml-1 transition-colors">
                                                    Specify College Name
                                                </label>
                                                <div className="relative transition-all duration-300 transform focus-within:-translate-y-0.5">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="otherCollege"
                                                        value={formData.otherCollege}
                                                        onChange={handleChange}
                                                        className={`w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/50 border border-slate-700 outline-none font-semibold text-gray-200 placeholder-gray-500 focus:bg-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 shadow-sm ${errors.otherCollege ? 'border-red-500/50 focus:border-red-500 bg-red-900/10' : ''}`}
                                                        placeholder="Enter college name"
                                                    />
                                                </div>
                                                {errors.otherCollege && <span className="text-[11px] text-red-400 ml-1 flex items-center gap-1 font-semibold tracking-wide">{errors.otherCollege}</span>}
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative w-full mt-2 group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                                            <div className="relative h-full w-full bg-slate-900 rounded-[11px] items-center justify-center flex transition-all duration-300 group-hover:bg-opacity-0">
                                                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:text-white py-4 px-8 tracking-widest flex items-center gap-2 text-sm uppercase transition-colors">
                                                    {isSubmitting ? 'Submitting...' : 'Get Started Now'}
                                                    {!isSubmitting && (
                                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform text-indigo-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                                    )}
                                                </span>
                                            </div>
                                        </button>

                                        {submitError && (
                                            <p className="text-center text-xs text-red-400 mt-2 font-medium">{submitError}</p>
                                        )}

                                        <p className="text-center text-[10px] text-gray-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
                                            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            100% Secure &amp; Confidential
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
