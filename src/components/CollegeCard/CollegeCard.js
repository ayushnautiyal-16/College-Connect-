import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CollegeCard({ college, index = 0 }) {
    const { id, name, logo, description, courses, location, established, accreditation, logoBgColor } = college;
    // Trigger earlier (50px margin) for smoother feed
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: '50px' });
    const navigate = useNavigate();

    return (
        <div
            ref={ref}
            className={`group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-200/60 relative z-10 hover:z-20
                ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-[0.98]'
                }`}
            style={{
                // Cap delay to avoid lag on long lists, stagger only local group
                transitionDelay: `${(index % 4) * 50}ms`,
            }}
        >
            {/* College Logo Section - Compact */}
            <div
                className="h-32 flex items-center justify-center p-4 border-b border-gray-100/80 relative"
                style={{ backgroundColor: logoBgColor || '#ffffff' }}
            >
                {logo ? (
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="max-h-24 max-w-[80%] object-contain"
                    />
                ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                            {name.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* College Details Section - Compact */}
            <div className="p-5 sm:p-6">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
                        {name}
                    </h3>
                    {/* Accreditation Badge - Moved here */}
                    {accreditation && (
                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100/50">
                            {accreditation}
                        </span>
                    )}
                </div>

                <div className="mb-4">
                    {/* Location & Established - One Line if possible */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 font-medium">
                        {location && (
                            <div className="flex items-center">
                                <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="truncate max-w-[150px]">{location}</span>
                            </div>
                        )}
                        {established && (
                            <div className="flex items-center">
                                <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <span>Estd. {established}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative min-h-[3.5rem]">
                    <p className="text-gray-600 text-[13px] leading-relaxed mb-4 line-clamp-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100/50">
                        {description || "A premier institution offering quality education with modern facilities and experienced faculty."}
                    </p>
                </div>

                {courses && courses.length > 0 && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                            {courses.slice(0, 3).map((course, index) => (
                                <span
                                    key={index}
                                    className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-semibold rounded"
                                >
                                    {course}
                                </span>
                            ))}
                            {courses.length > 3 && (
                                <span className="px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-medium rounded">
                                    +{courses.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Compact Action Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                    <button
                        onClick={() => navigate(`/college/${id}`)}
                        className="col-span-1 bg-white border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600 font-semibold py-1.5 px-2 rounded text-xs transition-colors"
                    >
                        Details
                    </button>
                    <button className="col-span-1 bg-white border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600 font-semibold py-1.5 px-2 rounded text-xs transition-colors">
                        Fees
                    </button>
                    <button
                        onClick={() => navigate('/apply')}
                        className="col-span-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1.5 px-2 rounded text-xs shadow-sm shadow-indigo-200 transition-colors"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CollegeCard;
