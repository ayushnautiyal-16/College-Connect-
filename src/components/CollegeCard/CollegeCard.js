import React from 'react';
import { getAssetUrl } from '../../utils/assets';
import { getCloudinaryImageUrl } from '../../utils/cloudinary';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CollegeCard({ college, index = 0 }) {
    const { id, name, logo, cardImage, description, courses, location, established, accreditation, logoBgColor, feesStructureImage } = college;
    // Trigger earlier (50px margin) for smoother feed
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: '50px' });
    const navigate = useNavigate();

    // Use cardImage if available, otherwise use logo
    const displayImage = cardImage ? getCloudinaryImageUrl(cardImage) : logo;

    return (
        <div
            ref={ref}
            onClick={() => navigate(`/college/${id}`)}
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
                    <img
                        src={displayImage}
                        alt={`${name} campus`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
                            navigate('/apply');
                        }}
                        className="col-span-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1.5 px-2 rounded-md text-[11px] shadow-sm shadow-indigo-200 transition-colors uppercase tracking-wide"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (feesStructureImage) {
                                window.open(getCloudinaryImageUrl(feesStructureImage), '_blank');
                            } else {
                                navigate(`/college/${id}/fees`);
                            }
                        }}
                        className="col-span-1 bg-white border border-indigo-100 hover:bg-indigo-50 text-indigo-600 font-semibold py-1.5 px-2 rounded-md text-[11px] transition-colors flex items-center justify-center gap-1"
                    >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Fees Structure
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const url = college.brochure || (id === 1 ? getAssetUrl('graphic era/geu-brochure-2025-new-2.pdf') : '#');
                            if (url !== '#') window.open(url, '_blank');
                        }}
                        className="col-span-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold py-1.5 px-2 rounded-md text-[11px] border border-amber-100 transition-colors flex items-center justify-center gap-1.5"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Brochure
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CollegeCard;
