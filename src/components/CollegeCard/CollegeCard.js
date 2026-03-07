'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { useRouter } from 'next/navigation';
import useScrollAnimation from '@/hooks/useScrollAnimation';

function CollegeCard({ college, index = 0 }) {
    const { id, name, logo, cardImage, description, courses, location, established, accreditation, logoBgColor, feesStructureImage, feesStructureLinks } = college;
    // Trigger earlier (50px margin) for smoother feed
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: '50px' });
    const router = useRouter();

    // State for the fees campus chooser popup
    const [showFeesPopup, setShowFeesPopup] = useState(false);
    const feesPopupRef = useRef(null);

    // Close popup when clicking outside
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

    // Use cardImage if available, otherwise use logo — both are raw paths now
    const displayImage = getAssetUrl(cardImage || logo);

    // Handle fees button click
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
            className={`group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-200/60 relative z-10 hover:z-20 cursor-pointer
                ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-[0.98]'
                }`}
            style={{
                // Cap delay to avoid lag on long lists, stagger only local group
                transitionDelay: `${(index % 4) * 50}ms`,
            }}
        >
            {/* College Logo/Cover Section */}
            <div className="h-48 w-full relative overflow-hidden bg-gray-100 border-b border-gray-100/80 group-hover:shadow-inner transition-all">
                {displayImage ? (
                    <Image
                        src={displayImage}
                        alt={`${name} campus`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                            {name.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* College Details Section - Compact */}
            <div className="p-3.5 sm:p-4">
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 line-clamp-1">
                    {name}
                </h3>

                <div className="mb-3">
                    {/* Location & Established - One Line if possible */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500 font-medium">
                        {location && (
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="truncate max-w-[150px]">{location}</span>
                            </div>
                        )}
                        {established && (
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <span>Estd. {established}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative min-h-[3rem] mb-3">
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 bg-gray-50 p-2 rounded-lg border border-gray-100/50">
                        {description || "A premier institution offering quality education with modern facilities and experienced faculty."}
                    </p>
                </div>



                {/* Compact Action Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push('/apply');
                        }}
                        className="col-span-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1.5 px-2 rounded-md text-[11px] shadow-sm shadow-indigo-200 transition-colors uppercase tracking-wide"
                    >
                        Apply Now
                    </button>

                    {/* Fees Structure Button with optional popup */}
                    <div className="col-span-1 relative" ref={feesPopupRef}>
                        <button
                            onClick={handleFeesClick}
                            className="w-full bg-white border border-indigo-100 hover:bg-indigo-50 text-indigo-600 font-semibold py-1.5 px-2 rounded-md text-[11px] transition-colors flex items-center justify-center gap-1"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Fees Structure
                            {feesStructureLinks && feesStructureLinks.length > 0 && (
                                <svg className={`w-3 h-3 transition-transform duration-200 ${showFeesPopup ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            )}
                        </button>

                        {/* Campus Chooser Popup */}
                        {showFeesPopup && feesStructureLinks && (
                            <div
                                className="absolute bottom-full left-0 right-0 mb-1.5 bg-white rounded-lg shadow-xl border border-indigo-100 overflow-hidden z-50 animate-fadeInUp"
                                style={{
                                    animation: 'fadeInUp 0.2s ease-out',
                                }}
                            >
                                <div className="px-2.5 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-[10px] font-semibold tracking-wide uppercase">
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
                                        className="w-full text-left px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-b-0"
                                    >
                                        <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        {link.label}
                                        <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const url = college.brochure
                                ? (college.brochure.startsWith('http') ? college.brochure : getAssetUrl(college.brochure))
                                : (id === 1 ? getAssetUrl('graphic era/geu-brochure-2025-new-2.pdf') : '#');
                            if (url !== '#') window.open(url, '_blank');
                        }}
                        className="col-span-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold py-1.5 px-2 rounded-md text-[11px] border border-amber-100 transition-colors flex items-center justify-center gap-1.5"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Brochure
                    </button>
                </div>
            </div>

            {/* Inline CSS for popup animation */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(6px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default CollegeCard;
