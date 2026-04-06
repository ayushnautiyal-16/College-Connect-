'use client';

import React, { useState, useEffect, useRef } from 'react';

const getFaqsForCollege = (college) => {
    const name = (college.name || '').toLowerCase();

    if (name.includes('graphic era')) {
        return [
            {
                question: 'Is attendance mandatory at Graphic Era University?',
                answer: 'Yes, a minimum of 75% attendance is mandatory for all students to be eligible to appear in semester-end examinations. Attendance is tracked digitally, and students falling short may face academic penalties or examination debarment.',
            },
            {
                question: 'What is the eligibility criteria for B.Tech admission?',
                answer: 'Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 60% aggregate marks from a recognised board. Admission is based on JEE Main / UPCET scores or through the university\'s own entrance exam and counseling process.',
            },
            {
                question: 'Is there a dress code on campus?',
                answer: 'Yes, Graphic Era University follows a formal dress code policy on weekdays. Students are expected to wear university-prescribed uniforms during lectures and lab sessions. Casual attire is permitted during extracurricular activities and weekends.',
            },
            {
                question: 'Does the university provide hostel accommodation?',
                answer: 'Yes, the university offers separate hostel facilities for boys and girls with 24/7 security, Wi-Fi, mess facilities, and recreational areas. Hostel allotment is on a first-come, first-served basis, and fees are payable on a yearly basis.',
            },
            {
                question: 'What placement support does the university offer?',
                answer: 'The Training & Placement Cell organises year-round activities including aptitude training, mock interviews, group discussions, soft-skill workshops, and direct campus recruitment drives. Over 500+ companies visit the campus annually with the highest package reaching ₹54 LPA.',
            },
            {
                question: 'Are there scholarship opportunities available?',
                answer: 'Yes, Graphic Era offers merit-based and need-based scholarships covering up to 100% tuition fee waiver. Scholarships are awarded based on entrance exam ranks, board examination percentages, sports achievements, and defence/government quota eligibility.',
            },
        ];
    }

    // Default FAQs for other colleges
    return [
        {
            question: `Is attendance mandatory at ${college.name}?`,
            answer: 'Yes, a minimum of 75% attendance is required for all students to appear in semester examinations. Regular attendance is monitored through digital tracking systems.',
        },
        {
            question: 'What is the eligibility criteria for admissions?',
            answer: 'Eligibility varies by program. For engineering courses, candidates must have passed 10+2 with PCM (60% minimum). For management programs, a graduation degree is required. Specific details are available on the admissions page.',
        },
        {
            question: 'Is there a dress code on campus?',
            answer: 'Yes, the university follows a formal dress code policy during academic hours. Students are expected to maintain a professional appearance in classrooms and laboratories.',
        },
        {
            question: 'Does the university provide hostel facilities?',
            answer: 'Yes, separate hostel facilities are available for boys and girls with modern amenities, 24/7 security, mess, Wi-Fi, and recreational areas.',
        },
        {
            question: 'What placement support is available?',
            answer: 'The university has a dedicated Training & Placement Cell that conducts workshops, mock interviews, and campus drives with leading companies throughout the year.',
        },
        {
            question: 'Are scholarships available?',
            answer: 'Yes, merit-based and need-based scholarships are offered covering partial to full tuition fee waivers based on academic performance and entrance exam scores.',
        },
    ];
};

export default function FAQSection({ college }) {
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    const faqs = getFaqsForCollege(college);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-20 px-6"
            style={{
                background: 'linear-gradient(180deg, #faf5ff 0%, #f0f0ff 50%, #eef2ff 100%)',
            }}
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-8%] w-[400px] h-[400px] rounded-full bg-violet-200/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[100px]" />

                {/* Decorative question marks */}
                <svg className="absolute top-16 left-[8%] w-24 h-24 text-violet-300/[0.06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                </svg>
                <svg className="absolute bottom-20 right-[10%] w-16 h-16 text-indigo-300/[0.05] rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                </svg>

                {/* Geometric accents */}
                <div className="absolute top-[30%] right-[5%] w-20 h-20 border border-violet-200/20 rounded-2xl rotate-12" />
                <div className="absolute bottom-[25%] left-[6%] w-14 h-14 border border-indigo-200/20 rounded-full" />
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Heading */}
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold mb-4">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Got Questions?
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm">
                        Everything you need to know about {college.name}
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`
                                    rounded-2xl border transition-all duration-500
                                    ${isOpen
                                        ? 'bg-white shadow-lg shadow-violet-100/50 border-violet-200'
                                        : 'bg-white/70 backdrop-blur-sm shadow-sm border-gray-100 hover:border-violet-100 hover:shadow-md'
                                    }
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                `}
                                style={{
                                    transitionDelay: `${150 + idx * 80}ms`,
                                }}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left cursor-pointer group"
                                >
                                    {/* Number badge */}
                                    <div className={`
                                        w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0
                                        transition-all duration-300
                                        ${isOpen
                                            ? 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-md shadow-violet-200'
                                            : 'bg-violet-50 text-violet-600 group-hover:bg-violet-100'
                                        }
                                    `}>
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>

                                    <h3 className={`flex-1 text-[15px] font-semibold leading-snug transition-colors duration-300 ${
                                        isOpen ? 'text-violet-900' : 'text-gray-800 group-hover:text-violet-700'
                                    }`}>
                                        {faq.question}
                                    </h3>

                                    {/* Toggle icon */}
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                                        transition-all duration-400
                                        ${isOpen
                                            ? 'bg-violet-100 rotate-180'
                                            : 'bg-gray-50 group-hover:bg-violet-50'
                                        }
                                    `}>
                                        <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-violet-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? '300px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem]">
                                        <div className="h-px bg-gradient-to-r from-violet-100 via-indigo-100 to-transparent mb-4" />
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-gray-400 text-sm mb-3">Still have questions?</p>
                    <div className="relative inline-block group">
                        <a
                            href="tel:+917302985700"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contact Us
                        </a>
                        {/* Hover tooltip showing phone number */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 rounded-lg bg-gray-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none">
                            📞 +91 73029 85700
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
