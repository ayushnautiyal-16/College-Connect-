'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Unique SVG icons per course (matched by keyword in course name)
const getCourseIcon = (courseName) => {
    const n = courseName.toLowerCase();

    // Engineering variants
    if (n.includes('computer science') || n.includes('cse'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>;
    if (n.includes('artificial intelligence') || n.includes('ai'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
    if (n.includes('data science'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
    if (n.includes('mechanical'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    if (n.includes('civil'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    if (n.includes('electronics') || n.includes('ece'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    if (n.includes('cyber'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    if (n.includes('m.tech'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>;

    // Management
    if (n.includes('mba'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
    if (n.includes('bba'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

    // Computer Applications
    if (n.includes('mca'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    if (n.includes('bca') || n.includes('b.sc it'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

    // Science
    if (n.includes('agriculture'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

    // Pharmacy
    if (n.includes('b.pharma'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    if (n.includes('d.pharma'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;

    // Hospitality
    if (n.includes('hotel'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;

    // Arts / Journalism
    if (n.includes('journalism'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
    if (n.includes('ba english') || n.includes('ba '))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;

    // Law
    if (n.includes('llb') || n.includes('law'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;

    // Design
    if (n.includes('des') || n.includes('fashion'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;

    // Commerce
    if (n.includes('b.com') || n.includes('commerce'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

    // Research
    if (n.includes('ph.d'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;

    // Education
    if (n.includes('b.ed'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;

    // Medical / Nursing
    if (n.includes('nursing') || n.includes('medical'))
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

    // Default fallback — academic cap
    return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
};

// Category gradient mapping for icon backgrounds
const categoryGradients = {
    'Engineering': 'from-blue-500 to-indigo-600',
    'Management': 'from-violet-500 to-purple-600',
    'Computer Applications': 'from-cyan-500 to-blue-600',
    'Science': 'from-green-500 to-emerald-600',
    'Pharmacy': 'from-teal-500 to-cyan-600',
    'Hospitality': 'from-orange-500 to-amber-600',
    'Arts': 'from-pink-500 to-rose-600',
    'Law': 'from-amber-500 to-yellow-600',
    'Design': 'from-rose-500 to-pink-600',
    'Commerce': 'from-indigo-500 to-blue-600',
    'Research': 'from-purple-500 to-violet-600',
    'Education': 'from-sky-500 to-blue-600',
    'Medical': 'from-red-500 to-rose-600',
};

// College-specific course lists
const getCoursesForCollege = (college) => {
    const name = (college.name || '').toLowerCase();

    if (name.includes('graphic era')) {
        return [
            { name: 'B.Tech Computer Science & Engineering', duration: '4 Years', category: 'Engineering' },
            { name: 'B.Tech Artificial Intelligence & ML', duration: '4 Years', category: 'Engineering' },
            { name: 'B.Tech Data Science', duration: '4 Years', category: 'Engineering' },
            { name: 'B.Tech Mechanical Engineering', duration: '4 Years', category: 'Engineering' },
            { name: 'B.Tech Civil Engineering', duration: '4 Years', category: 'Engineering' },
            { name: 'B.Tech Electronics & Comm.', duration: '4 Years', category: 'Engineering' },
            { name: 'B.Tech Cyber Security', duration: '4 Years', category: 'Engineering' },
            { name: 'MBA (Marketing / Finance / HR)', duration: '2 Years', category: 'Management' },
            { name: 'BBA (General / International)', duration: '3 Years', category: 'Management' },
            { name: 'MCA', duration: '2 Years', category: 'Computer Applications' },
            { name: 'BCA', duration: '3 Years', category: 'Computer Applications' },
            { name: 'B.Sc Agriculture', duration: '4 Years', category: 'Science' },
            { name: 'B.Pharma', duration: '4 Years', category: 'Pharmacy' },
            { name: 'D.Pharma', duration: '2 Years', category: 'Pharmacy' },
            { name: 'Hotel Management (BHM)', duration: '4 Years', category: 'Hospitality' },
            { name: 'BA Journalism & Mass Comm.', duration: '3 Years', category: 'Arts' },
            { name: 'BA LLB (Hons)', duration: '5 Years', category: 'Law' },
            { name: 'B.Des (Fashion / Textile)', duration: '4 Years', category: 'Design' },
            { name: 'B.Com (Hons)', duration: '3 Years', category: 'Commerce' },
            { name: 'Ph.D Programs', duration: '3-5 Years', category: 'Research' },
        ];
    }

    // Default courses (for other colleges)
    return [
        { name: 'B.Tech Computer Science', duration: '4 Years', category: 'Engineering' },
        { name: 'B.Tech AI & ML', duration: '4 Years', category: 'Engineering' },
        { name: 'B.Tech Mechanical', duration: '4 Years', category: 'Engineering' },
        { name: 'B.Tech Civil', duration: '4 Years', category: 'Engineering' },
        { name: 'B.Tech ECE', duration: '4 Years', category: 'Engineering' },
        { name: 'MBA', duration: '2 Years', category: 'Management' },
        { name: 'BBA', duration: '3 Years', category: 'Management' },
        { name: 'MCA', duration: '2 Years', category: 'Computer Applications' },
        { name: 'BCA', duration: '3 Years', category: 'Computer Applications' },
        { name: 'B.Com', duration: '3 Years', category: 'Commerce' },
        { name: 'B.Sc IT', duration: '3 Years', category: 'Science' },
        { name: 'B.Pharma', duration: '4 Years', category: 'Pharmacy' },
        { name: 'D.Pharma', duration: '2 Years', category: 'Pharmacy' },
        { name: 'Hotel Management', duration: '4 Years', category: 'Hospitality' },
        { name: 'LLB', duration: '3 Years', category: 'Law' },
        { name: 'B.Ed', duration: '2 Years', category: 'Education' },
        { name: 'M.Tech', duration: '2 Years', category: 'Engineering' },
        { name: 'B.Sc Nursing', duration: '4 Years', category: 'Medical' },
        { name: 'BA English', duration: '3 Years', category: 'Arts' },
        { name: 'Ph.D Programs', duration: '3-5 Years', category: 'Research' },
    ];
};

// Category color mapping
const categoryColors = {
    'Engineering': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700' },
    'Management': { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700' },
    'Computer Applications': { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', badge: 'bg-cyan-100 text-cyan-700' },
    'Science': { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', badge: 'bg-green-100 text-green-700' },
    'Pharmacy': { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100', badge: 'bg-teal-100 text-teal-700' },
    'Hospitality': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700' },
    'Arts': { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', badge: 'bg-pink-100 text-pink-700' },
    'Law': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', badge: 'bg-amber-100 text-amber-700' },
    'Design': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', badge: 'bg-rose-100 text-rose-700' },
    'Commerce': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
    'Research': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', badge: 'bg-purple-100 text-purple-700' },
    'Education': { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-100', badge: 'bg-sky-100 text-sky-700' },
    'Medical': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', badge: 'bg-red-100 text-red-700' },
};

const defaultColor = { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-100', badge: 'bg-gray-100 text-gray-700' };

export default function TopCoursesSection({ college }) {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
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

    const allCourses = getCoursesForCollege(college);
    const categories = ['All', ...new Set(allCourses.map(c => c.category))];
    const filteredCourses = activeCategory === 'All'
        ? allCourses
        : allCourses.filter(c => c.category === activeCategory);

    return (
        <section
            id="courses-section"
            ref={sectionRef}
            className="relative overflow-hidden py-20 px-6 bg-white"
        >
            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
                <div className="absolute top-[-5%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-50/60 blur-[100px]" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full bg-violet-50/50 blur-[80px]" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Heading */}
                <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Top Courses at{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            {college.name}
                        </span>
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto">
                        Explore {allCourses.length}+ programs designed to shape your career
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                                activeCategory === cat
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredCourses.map((course, idx) => {
                        const colors = categoryColors[course.category] || defaultColor;
                        const gradient = categoryGradients[course.category] || 'from-gray-500 to-slate-600';
                        const icon = getCourseIcon(course.name);
                        return (
                            <div
                                key={idx}
                                className={`
                                    ${colors.bg} rounded-xl p-5 border ${colors.border}
                                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                                    cursor-pointer group
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                                `}
                                style={{
                                    transitionDelay: `${200 + (idx % 8) * 60}ms`,
                                    transitionDuration: '500ms',
                                }}
                                onClick={() => router.push('/apply')}
                            >
                                <div className="flex items-start gap-3.5">
                                    {/* Premium gradient icon */}
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                                        {icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-indigo-700 transition-colors duration-200">
                                            {course.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
                                                {course.category}
                                            </span>
                                            <span className="text-[11px] text-gray-400 font-medium">
                                                {course.duration}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Arrow on hover */}
                                    <svg className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1 group-hover:translate-x-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Apply CTA */}
                <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button
                        onClick={() => router.push('/apply')}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transform hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                        Apply for Admission
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
