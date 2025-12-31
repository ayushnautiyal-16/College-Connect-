import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collegesData } from '../../utils/collegesData';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CollegeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Parse ID safely
    const collegeId = id ? parseInt(id) : null;
    const college = collegeId ? collegesData.find(c => c.id === collegeId) : null;

    // Scroll animation hooks - always initialize
    const heroRef = useScrollAnimation({ threshold: 0.1 });
    const highlightsRef = useScrollAnimation({ threshold: 0.15 });
    const overviewRef = useScrollAnimation({ threshold: 0.15 });
    const feesRef = useScrollAnimation({ threshold: 0.15 });
    const galleryRef = useScrollAnimation({ threshold: 0.15 });

    // Early return if college not found
    if (!college || !collegeId) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">College Not Found</h1>
                    <p className="text-gray-600 mb-4">The college you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    // Gallery images based on college
    let galleryImages = [];

    if (college.id === 1) {
        galleryImages = [
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767115121/CvxECGJZ-gehu-dehradun-campus-jpg_khds89.webp', title: 'GEHU Dehradun Campus' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-2_z9sreu.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031299/grafest-day-one-14_sdcxuj.jpg', title: '' }
        ];
    } else if (college.id === 3) {
        galleryImages = [
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031598/uu-infra-campus_myxclv.png', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031604/P1016052_e49vrg.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031601/8_kpjirn.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031981/1_tbgxhm.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031980/f14_drxlvn.jpg', title: '' }
        ];
    } else {
        galleryImages = [
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg', title: '' },
            { url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg', title: '' }
        ];
    }

    // Get hero image - use first gallery image for all colleges
    // For Graphic Era, use specific campus image, for others use first gallery image
    let heroImage;
    if (college.id === 1) {
        // Graphic Era University - use specific campus image
        heroImage = 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767115121/CvxECGJZ-gehu-dehradun-campus-jpg_khds89.webp';
    } else if (galleryImages.length > 0) {
        // Use first gallery image for all other colleges
        heroImage = galleryImages[0].url;
    } else {
        // Fallback image if no gallery images available
        heroImage = 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767115121/CvxECGJZ-gehu-dehradun-campus-jpg_khds89.webp';
    }

    // Handle Apply Now - redirect to contact form
    const handleApplyNow = () => {
        navigate('/contact');
    };

    // Handle Fees Structure PDF download (placeholder - you'll add PDF link later)
    const handleFeesStructure = () => {
        // TODO: Add PDF link here
        alert('Fees Structure PDF will be available soon');
    };

    // Handle Brochure download
    const handleBrochure = () => {
        // Brochure URLs for different colleges
        const brochureUrls = {
            1: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767117750/geu-brochure-2025-new-2_11zon_aalytr.pdf', // Graphic Era University
            2: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767117837/DIT-University-Dehradun-Brochure_njl95k.pdf', // DIT University
            3: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118116/Brochure_hjnjzb.pdf', // Uttaranchal University
            4: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118540/Student_Bulletin_Final_version_2-compressed_2_easar3.pdf', // UPES
            6: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118456/1288imguf_Prospectus-2025_11zon_n7ox07.pdf' // Shri Guru Ram Rai University
        };

        const brochureUrl = brochureUrls[college.id];

        if (brochureUrl) {
            // Open brochure PDF in new tab
            window.open(brochureUrl, '_blank');
        } else {
            alert('Brochure will be available soon');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section with College Name and Image Background - Full Screen */}
            <section
                ref={heroRef.ref}
                className="relative h-screen overflow-hidden"
            >
                {/* Background Image - Full Size and Clearly Visible */}
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt={college.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            console.error('Image failed to load:', heroImage);
                            e.target.style.display = 'none';
                        }}
                        onLoad={() => {
                            console.log('Image loaded successfully:', heroImage);
                        }}
                        loading="eager"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block'
                        }}
                    />
                    {/* Very Light Overlay Only for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {/* College Name with White Background for Visibility */}
                        <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-6 md:px-8 py-4 md:py-5 border border-white/50 shadow-2xl">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
                                {college.name}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
                {/* Back Button - Smaller */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 group"
                >
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Back</span>
                </button>

                {/* Key Highlights Section - Smaller and Refined */}
                <section
                    ref={highlightsRef.ref}
                    className={`mb-12 transform transition-all duration-700 ${highlightsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Key Highlights</h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Established Card */}
                        <div className="group relative bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transform group-hover:scale-105 transition-all duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Established</h3>
                                <p className="text-xl font-bold text-gray-800">{college.established}</p>
                            </div>
                        </div>

                        {/* Accreditation Card */}
                        <div className="group relative bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transform group-hover:scale-105 transition-all duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Accreditation</h3>
                                <p className="text-base font-bold text-gray-800 leading-tight">{college.accreditation}</p>
                            </div>
                        </div>

                        {/* Type Card */}
                        <div className="group relative bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transform group-hover:scale-105 transition-all duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Type</h3>
                                <p className="text-base font-bold text-gray-800 leading-tight">{college.collegeType}</p>
                            </div>
                        </div>

                        {/* Ranking Card */}
                        <div className="group relative bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-50 to-orange-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transform group-hover:scale-105 transition-all duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Ranking</h3>
                                <p className="text-lg font-bold text-gray-800">Top Tier</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section - Clean and Refined */}
                <section
                    ref={overviewRef.ref}
                    className={`mb-12 transform transition-all duration-700 ${overviewRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 overflow-hidden">
                        {/* Subtle Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-5">
                                <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Overview</h2>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-1"></div>
                                </div>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{college.description}</p>
                        </div>
                    </div>
                </section>

                {/* Fees Structure & Brochure Buttons - Refined */}
                <section
                    ref={feesRef.ref}
                    className={`mb-12 transform transition-all duration-700 ${feesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 overflow-hidden">
                        {/* Subtle Decorative Elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Fees Structure</h2>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleFeesStructure}
                                    className="group flex-1 relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    <svg className="w-5 h-5 relative z-10 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="relative z-10 text-sm md:text-base">Download Fees Structure</span>
                                </button>
                                <button
                                    onClick={handleBrochure}
                                    className="group flex-1 relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    <svg className="w-5 h-5 relative z-10 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="relative z-10 text-sm md:text-base">Download Brochure</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Gallery Section */}
                <section
                    ref={galleryRef.ref}
                    className={`mb-12 transform transition-all duration-700 ${galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <PhotoGallery images={galleryImages} />
                </section>

                {/* Apply Now Button - Refined */}
                <section className="mb-12">
                    <div className="relative bg-gradient-to-br from-primary-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-10 text-white text-center overflow-hidden">
                        {/* Subtle Animated Background */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="absolute top-5 left-5 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-5 right-5 w-48 h-48 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-base md:text-lg mb-6 text-white/90 max-w-xl mx-auto">
                                Get expert guidance and take the first step towards your dream career
                            </p>
                            <button
                                onClick={handleApplyNow}
                                className="group relative bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base overflow-hidden inline-flex items-center gap-2"
                            >
                                <span className="relative z-10">Apply Now</span>
                                <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CollegeDetails;
