import React, { useState, useEffect } from 'react';
import './Apply.css';

function Apply() {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        preferredCollege: '',
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
        <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden font-sans">
            {/* Dynamic Background with deeper rich colors */}
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-950/90 to-slate-950/90 z-0"></div>

                {/* Animated Orbs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
                    <div className="absolute top-[10%] left-[10%] w-[35rem] h-[35rem] bg-indigo-600 rounded-full blur-[120px] animate-float mix-blend-screen"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-pink-600 rounded-full blur-[130px] animate-float-delayed mix-blend-screen"></div>
                    <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[30rem] h-[30rem] bg-purple-600 rounded-full blur-[110px] animate-float mix-blend-screen"></div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className={`relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Left Side: Text/Info */}
                <div className="text-white hidden lg:block space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-indigo-300">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                        Admissions Open 2024-25
                    </div>

                    <h1 className="text-6xl font-black leading-tight tracking-tight">
                        Shape Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
                            Dream Future
                        </span>
                    </h1>

                    <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
                        Join thousands of successful students who found their perfect college match. Get <span className="text-white font-semibold">free expert counseling</span> today.
                    </p>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="text-3xl font-bold text-white mb-1">5000+</div>
                            <div className="text-indigo-200 text-sm font-medium">Students Placed</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-purple-200 text-sm font-medium">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Card */}
                <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">

                    {submitted ? (
                        <div className="h-[520px] flex flex-col items-center justify-center text-center space-y-6 animate-check">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full"></div>
                                <div className="relative w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-4xl font-black text-gray-800 tracking-tight">You're All Set! 🚀</h2>
                                <p className="text-gray-500 text-lg">Our expert counselors will call you shortly.</p>
                            </div>
                            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-indigo-700 text-sm">
                                Check your email for a welcome kit!
                            </div>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-gray-500 font-semibold hover:text-indigo-600 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                Submit Another Application
                            </button>
                        </div>
                    ) : (
                        <div className="relative">
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl font-black mb-2 text-gradient-animated tracking-tight">
                                    Apply Now
                                </h2>
                                <p className="text-gray-500 font-medium">
                                    Unlock your potential with expert guidance
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div className={`relative group transition-all duration-300 ${activeField === 'name' ? 'scale-[1.02]' : ''}`}>
                                    <label className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5 block ml-1">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('name')}
                                            onBlur={() => setActiveField(null)}
                                            className={`w-full pl-12 pr-4 py-3.5 rounded-xl glass-input outline-none font-medium text-gray-700 placeholder-gray-400 ${errors.fullName ? 'border-red-400 shake bg-red-50' : ''}`}
                                            placeholder="e.g. John Doe"
                                        />
                                    </div>
                                    {errors.fullName && <span className="text-xs text-red-500 font-semibold absolute -bottom-5 left-1 animate-slide-in">{errors.fullName}</span>}
                                </div>

                                {/* Mobile Input */}
                                <div className={`relative group transition-all duration-300 ${activeField === 'mobile' ? 'scale-[1.02]' : ''}`}>
                                    <label className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5 block ml-1">
                                        Mobile Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        </div>
                                        <input
                                            type="tel"
                                            name="mobileNumber"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('mobile')}
                                            onBlur={() => setActiveField(null)}
                                            maxLength="10"
                                            className={`w-full pl-12 pr-4 py-3.5 rounded-xl glass-input outline-none font-medium text-gray-700 placeholder-gray-400 ${errors.mobileNumber ? 'border-red-400 shake bg-red-50' : ''}`}
                                            placeholder="e.g. 98765 43210"
                                        />
                                    </div>
                                    {errors.mobileNumber && <span className="text-xs text-red-500 font-semibold absolute -bottom-5 left-1 animate-slide-in">{errors.mobileNumber}</span>}
                                </div>

                                {/* College Select */}
                                <div className={`relative group transition-all duration-300 ${activeField === 'college' ? 'scale-[1.02]' : ''}`}>
                                    <label className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5 block ml-1">
                                        Dream College
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors z-10">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        </div>
                                        <select
                                            name="preferredCollege"
                                            value={formData.preferredCollege}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('college')}
                                            onBlur={() => setActiveField(null)}
                                            className={`w-full pl-12 pr-10 py-3.5 rounded-xl glass-input outline-none font-medium text-gray-700 cursor-pointer appearance-none ${errors.preferredCollege ? 'border-red-400 shake bg-red-50' : ''}`}
                                        >
                                            <option value="">Select your target college...</option>
                                            {colleges.map((col, i) => <option key={i} value={col}>{col}</option>)}
                                        </select>
                                        <div className="absolute right-4 top-4 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                    {errors.preferredCollege && <span className="text-xs text-red-500 font-semibold absolute -bottom-5 left-1 animate-slide-in">{errors.preferredCollege}</span>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group relative w-full mt-6 bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-600/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Animated Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                    <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                                        Get Started Now
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                    </span>
                                </button>

                                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Your data is 100% secure with us
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Apply;
