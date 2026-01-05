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
            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-1 overflow-hidden border border-gray-200/60
                ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-[0.98]'
                }`}
            style={{
                // Cap delay to avoid lag on long lists, stagger only local group
                transitionDelay: `${(index % 4) * 50}ms`,
            }}
        >
            {/* College Logo Section */}
            <div
                className="p-5 flex items-center justify-center h-40 border-b border-gray-100/80"
                style={{ backgroundColor: logoBgColor || '#ffffff' }}
            >
                {logo ? (
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="max-h-32 w-full object-contain px-4"
                    />
                ) : (
                    <div className="w-28 h-28 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                            {name.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* College Details Section */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {name}
                </h3>

                <div className="space-y-2 mb-4">
                    {location && (
                        <div className="flex items-start text-gray-600">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm leading-relaxed">{location}</span>
                        </div>
                    )}

                    {established && (
                        <div className="flex items-start text-gray-600">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm leading-relaxed">Established: {established}</span>
                        </div>
                    )}

                    {accreditation && (
                        <div className="flex items-start text-gray-600">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm leading-relaxed">{accreditation}</span>
                        </div>
                    )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {courses && courses.length > 0 && (
                    <div className="mb-5">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Popular Courses</p>
                        <div className="flex flex-wrap gap-2">
                            {courses.slice(0, 3).map((course, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full"
                                >
                                    {course}
                                </span>
                            ))}
                            {courses.length > 3 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                    +{courses.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                        onClick={() => navigate(`/college/${id}`)}
                        className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium py-2 px-3 rounded-md transition-all duration-200 ease-in-out text-sm"
                    >
                        Details
                    </button>
                    <button className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium py-2 px-3 rounded-md transition-all duration-200 ease-in-out text-sm">
                        Fees
                    </button>
                    <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-3 rounded-md transition-all duration-200 ease-in-out text-sm">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CollegeCard;
