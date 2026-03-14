'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { useRouter } from 'next/navigation';
import useScrollAnimation from '@/hooks/useScrollAnimation';

function CollegeCard({ college, index = 0 }) {
    const { id, name, logo, cardImage, description, courses, location, established, accreditation, logoBgColor, feesStructureImage, feesStructureLinks } = college;
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: '50px' });
    const router = useRouter();

    const [showFeesPopup, setShowFeesPopup] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const feesPopupRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (feesPopupRef.current && !feesPopupRef.current.contains(event.target)) {
                setShowFeesPopup(false);
            }
        }
        if (showFeesPopup) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showFeesPopup]);

    const displayImage = getAssetUrl(cardImage || logo);

    const handleFeesClick = (e) => {
        e.stopPropagation();
        if (feesStructureLinks && feesStructureLinks.length > 0) {
            setShowFeesPopup(!showFeesPopup);
        } else if (feesStructureImage) {
            window.open(getAssetUrl(feesStructureImage), '_blank');
        } else {
            router.push(`/college/${id}/fees`);
        }
    };

    return (
        <div
            ref={ref}
            onClick={() => router.push(`/college/${id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`college-card group relative rounded-2xl overflow-hidden cursor-pointer
                ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-[0.96]'
                }`}
            style={{
                transitionDelay: `${(index % 4) * 70}ms`,
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
        >
            {/* Glow border effect on hover */}
            <div
                className="absolute -inset-[1px] rounded-2xl z-0 transition-all duration-500"
                style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #6366f1)',
                    opacity: isHovered ? 0.6 : 0,
                }}
            />

            {/* Card inner container */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-white"
                style={{
                    boxShadow: isHovered
                        ? '0 20px 40px -12px rgba(99, 102, 241, 0.2), 0 8px 20px -8px rgba(0,0,0,0.08)'
                        : '0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
            >

                {/* Hero Image Section with Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                    {displayImage ? (
                        <Image
                            src={displayImage}
                            alt={`${name} campus`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out"
                            style={{
                                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                            <span className="text-5xl font-bold text-white/80">
                                {name.charAt(0)}
                            </span>
                        </div>
                    )}

                    {/* Gradient overlay from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* College Name overlaid on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-3">
                        <h3 className="text-[17px] font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
                            {name}
                        </h3>
                    </div>


                </div>

                {/* Card Body */}
                <div className="p-4 pt-3 space-y-2.5">

                    {/* Location */}
                    {location && (
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                            <svg className="w-3 h-3 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="truncate">{location}</span>
                        </div>
                    )}

                    {/* Description */}
                    <p className="text-[12px] leading-relaxed text-slate-500 line-clamp-2">
                        {description || "A premier institution offering quality education with modern facilities and experienced faculty."}
                    </p>

                    {/* Subtle divider */}
                    <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.15), transparent)' }} />

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                        {/* Apply Now */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push('/apply');
                            }}
                            className="col-span-1 relative overflow-hidden rounded-xl py-2 px-3 text-[11px] font-bold text-white uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-indigo-400/30 hover:-translate-y-0.5 active:translate-y-0"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            }}
                        >
                            Apply Now
                        </button>

                        {/* Fees Structure */}
                        <div className="col-span-1 relative" ref={feesPopupRef}>
                            <button
                                onClick={handleFeesClick}
                                className="w-full rounded-xl py-2 px-3 text-[11px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200 transition-all duration-300 flex items-center justify-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Fees
                                {feesStructureLinks && feesStructureLinks.length > 0 && (
                                    <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${showFeesPopup ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                )}
                            </button>

                            {/* Campus Chooser Popup */}
                            {showFeesPopup && feesStructureLinks && (
                                <div
                                    className="absolute bottom-full left-0 right-0 mb-2 rounded-xl overflow-hidden z-50"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.97)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(99, 102, 241, 0.2)',
                                        boxShadow: '0 -8px 30px rgba(99, 102, 241, 0.12), 0 4px 12px rgba(0,0,0,0.06)',
                                        animation: 'popupSlideUp 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                                    }}
                                >
                                    <div className="px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] uppercase text-white"
                                        style={{
                                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        }}
                                    >
                                        Select Campus
                                    </div>
                                    {feesStructureLinks.map((link, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(link.url, '_blank');
                                                setShowFeesPopup(false);
                                            }}
                                            className="w-full text-left px-3 py-2.5 text-[11px] font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 flex items-center gap-2"
                                            style={{
                                                borderBottom: i < feesStructureLinks.length - 1 ? '1px solid #f1f5f9' : 'none',
                                            }}
                                        >
                                            <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 bg-indigo-100">
                                                <svg className="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                            </span>
                                            <span className="flex-1">{link.label}</span>
                                            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Download Brochure - full width */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const url = college.brochure
                                    ? (college.brochure.startsWith('http') ? college.brochure : getAssetUrl(college.brochure))
                                    : (id === 1 ? getAssetUrl('graphic era/geu-brochure-2025-new-2.pdf') : '#');
                                if (url !== '#') window.open(url, '_blank');
                            }}
                            className="col-span-2 rounded-xl py-2 px-3 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-100 hover:bg-amber-100 hover:border-amber-200 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes popupSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(8px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}

export default CollegeCard;
