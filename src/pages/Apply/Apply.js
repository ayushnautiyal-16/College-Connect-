import React, { useState, useEffect } from 'react';
import './Apply.css';

function Apply() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate API call
            setTimeout(() => {
                setSubmitted(true);
                setFormData({ fullName: '', mobileNumber: '', preferredCollege: '', preferredCourse: '' });
                // Reset after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            }, 800);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 pt-24 overflow-hidden font-sans bg-slate-900">
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-black"></div>

                {/* Moving Gradients/Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/30 rounded-full blur-[120px] animate-float mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-fuchsia-600/30 rounded-full blur-[120px] animate-float-delayed mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[100px] animate-float mix-blend-screen"></div>
            </div>

            {/* Main Content Container */}
            <div className={`relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Left Side: Text/Info */}
                <div className="hidden lg:block space-y-8 pr-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.3)] text-xs font-bold tracking-wide text-indigo-300 uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                        </span>
                        Admissions Open 2026-27
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-2xl">
                        Your Admission,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 animate-gradient-x">
                            Our Responsibility
                        </span>
                    </h1>

                    <p className="text-slate-300 text-lg leading-relaxed font-medium max-w-xl">
                        Unsure about which college or course to choose? Our expert counselors provide personalized guidance to help you decide. Secure verified admission in <span className="text-white font-bold decoration-wavy underline decoration-indigo-500">Dehradun's private colleges</span> with our trusted support.
                    </p>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="group p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">5000+</div>
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Students Placed</div>
                        </div>
                        <div className="group p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md hover:border-fuchsia-500/30 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]">
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">100%</div>
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Success Rate</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Card */}
                <div className="relative group perspective-1000">
                    {/* Animated Border Gradient */}
                    <div className="absolute -inset-[2px] rounded-[2.2rem] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

                    <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 isolate">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376541/desk-students_t0muq8.webp"
                                alt="Students Studying"
                                className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900/90"></div>
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10 p-8 md:p-10">
                            {submitted ? (
                                <div className="py-20 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
                                    <div className="relative group/check">
                                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150 animate-pulse"></div>
                                        <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover/check:scale-110 transition-transform duration-300">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-bold text-white">Application Sent! 🚀</h2>
                                        <p className="text-slate-400 text-base max-w-xs mx-auto">Get ready! We're reviewing your profile and will be in touch shortly.</p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300 flex items-center gap-2 text-sm hover:scale-105 active:scale-95"
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
                                        <p className="text-slate-400 text-sm">
                                            Fill in your details to begin your journey.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name Input */}
                                        <div className="group space-y-1.5 direction-ltr">
                                            <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest ml-1">
                                                Full Name
                                            </label>
                                            <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0f172a] border border-slate-700 outline-none font-medium text-white placeholder-slate-600 focus:bg-[#1e293b] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 ${errors.fullName ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                                    placeholder="e.g. Alex Johnson"
                                                />
                                            </div>
                                            {errors.fullName && <span className="text-[10px] text-red-400 ml-1 flex items-center gap-1 font-medium tracking-wide animate-pulse">{errors.fullName}</span>}
                                        </div>

                                        {/* Mobile Input */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest ml-1">
                                                Mobile Number
                                            </label>
                                            <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-slate-500 group-focus-within:text-fuchsia-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="mobileNumber"
                                                    value={formData.mobileNumber}
                                                    onChange={handleChange}
                                                    maxLength="10"
                                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0f172a] border border-slate-700 outline-none font-medium text-white placeholder-slate-600 focus:bg-[#1e293b] focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all duration-300 ${errors.mobileNumber ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                                    placeholder="e.g. 98765 43210"
                                                />
                                            </div>
                                            {errors.mobileNumber && <span className="text-[10px] text-red-400 ml-1 flex items-center gap-1 font-medium tracking-wide animate-pulse">{errors.mobileNumber}</span>}
                                        </div>

                                        {/* College Select */}
                                        <div className="group space-y-1.5">
                                            <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest ml-1">
                                                Dream College
                                            </label>
                                            <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                    <svg className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                                </div>
                                                <select
                                                    name="preferredCollege"
                                                    value={formData.preferredCollege}
                                                    onChange={handleChange}
                                                    className={`w-full pl-12 pr-10 py-3.5 rounded-xl bg-[#0f172a] border border-slate-700 outline-none font-medium text-white cursor-pointer appearance-none focus:bg-[#1e293b] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ${errors.preferredCollege ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                                >
                                                    <option value="" disabled hidden className="text-slate-500">Select your target college...</option>
                                                    {colleges.map((col, i) => <option key={i} value={col} className="bg-slate-800 text-white">{col}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                            {errors.preferredCollege && <span className="text-[10px] text-red-400 ml-1 flex items-center gap-1 font-medium tracking-wide animate-pulse">{errors.preferredCollege}</span>}
                                        </div>

                                        {/* Other College Input (Conditional) */}
                                        {formData.preferredCollege === 'Other' && (
                                            <div className="group space-y-1.5 animate-slide-up">
                                                <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest ml-1">
                                                    Specify College Name
                                                </label>
                                                <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <svg className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="otherCollege"
                                                        value={formData.otherCollege}
                                                        onChange={handleChange}
                                                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0f172a] border border-slate-700 outline-none font-medium text-white placeholder-slate-600 focus:bg-[#1e293b] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ${errors.otherCollege ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                                        placeholder="Enter college name"
                                                    />
                                                </div>
                                                {errors.otherCollege && <span className="text-[10px] text-red-400 ml-1 flex items-center gap-1 font-medium tracking-wide animate-pulse">{errors.otherCollege}</span>}
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="relative w-full mt-2 group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-shadow duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 animate-gradient-xy"></div>
                                            <div className="relative bg-[#0f172a] h-full w-full rounded-[11px] items-center justify-center flex transition-all duration-300 group-hover:bg-transparent">
                                                <span className="font-bold text-white py-4 px-8 tracking-wider flex items-center gap-2 text-sm uppercase group-hover:scale-105 transition-transform">
                                                    Get Started Now
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                                </span>
                                            </div>
                                        </button>

                                        <p className="text-center text-[10px] text-slate-500 mt-4 flex items-center justify-center gap-2">
                                            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            100% Secure Data
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

export default Apply;
