import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CollegeCard({ college, index = 0 }) {
    const { id, name, logo, description, courses, location, established, accreditation, logoBgColor } = college;
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
    const navigate = useNavigate();

    return (
        <div
            ref={ref}
            className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100
                ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDelay: `${index * 80}ms`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
        >
            {/* College Logo Section */}
            <div
                className="p-6 flex items-center justify-center h-52 border-b border-gray-100"
                style={{ backgroundColor: logoBgColor || '#ffffff' }}
            >
                {logo ? (
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="max-h-40 w-full object-contain px-4"
                    />
                ) : (
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                            {name.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* College Details Section */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {name}
                </h3>

                <div className="space-y-2 mb-4">
                    {location && (
                        <div className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm">{location}</span>
                        </div>
                    )}

                    {established && (
                        <div className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm">Established: {established}</span>
                        </div>
                    )}

                    {accreditation && (
                        <div className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm">{accreditation}</span>
                        </div>
                    )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {courses && courses.length > 0 && (
                    <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Popular Courses</p>
                        <div className="flex flex-wrap gap-2">
                            {courses.slice(0, 3).map((course, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
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

                <div className="flex gap-3">
                    <button
                        onClick={() => navigate(`/college/${id}`)}
                        className="flex-1 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Details
                    </button>
                    <button className="flex-1 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Fees Structure
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CollegeCard;
