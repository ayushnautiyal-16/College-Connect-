import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collegesData } from '../../utils/collegesData';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import CollegeHeroSlideshow from '../../components/CollegeHeroSlideshow/CollegeHeroSlideshow';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CollegeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    // Parse ID safely
    const collegeId = id ? parseInt(id) : null;
    const college = collegeId ? collegesData.find(c => c.id === collegeId) : null;

    // Scroll animation hooks
    const heroRef = useScrollAnimation({ threshold: 0.1 });
    const ratingsRef = useScrollAnimation({ threshold: 0.15 });
    const facilitiesRef = useScrollAnimation({ threshold: 0.15 });
    const recruitersRef = useScrollAnimation({ threshold: 0.15 });
    const overviewRef = useScrollAnimation({ threshold: 0.15 });
    const departmentsRef = useScrollAnimation({ threshold: 0.15 });
    const coursesRef = useScrollAnimation({ threshold: 0.15 });
    const galleryRef = useScrollAnimation({ threshold: 0.15 });
    const ctaRef = useScrollAnimation({ threshold: 0.15 });

    // Trigger hero animations when visible
    useEffect(() => {
        if (heroRef.isVisible) {
            setIsHeroVisible(true);
        }
    }, [heroRef.isVisible]);

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

    // Helper function to get slideshow images for hero
    const getSlideshowImages = (collegeId) => {
        const imageMap = {
            1: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767115121/CvxECGJZ-gehu-dehradun-campus-jpg_khds89.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-2_z9sreu.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031299/grafest-day-one-14_sdcxuj.jpg'
            ],
            2: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767381831/dit-university-dehradun-229162_ws0ck4.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767375828/1697538635_12fe5793c817ecbfefcb_u81rfk.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767375824/images_zg7tmf.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767375838/mobBan_m2okmd.jpg'
            ],
            3: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031598/uu-infra-campus_myxclv.png',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031604/P1016052_e49vrg.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031601/8_kpjirn.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031981/1_tbgxhm.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031980/f14_drxlvn.jpg'
            ],
            4: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376540/images_1_blo4yg.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376540/images_2_yvsxsj.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376541/desk-students_t0muq8.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376541/banner-campus-life-desk_a0xu0p.webp'
            ]
        };

        if (imageMap[collegeId]) {
            return imageMap[collegeId];
        }

        return [
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg',
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg',
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767115121/CvxECGJZ-gehu-dehradun-campus-jpg_khds89.webp'
        ];
    };

    // Gallery images for photo gallery section
    const getGalleryImages = (collegeId) => {
        const slideshowImages = getSlideshowImages(collegeId);
        return slideshowImages.map(url => ({ url, title: '' }));
    };

    const slideshowImages = getSlideshowImages(collegeId);
    const galleryImages = getGalleryImages(collegeId);

    // Helper function to get college ratings
    const getCollegeRating = (collegeId) => {
        const ratingsMap = {
            1: { overall: 4.6, academics: 4.7, infrastructure: 4.8, placement: 4.7, campus: 4.5 },
            2: { overall: 4.4, academics: 4.5, infrastructure: 4.6, placement: 4.4, campus: 4.5 },
            3: { overall: 4.3, academics: 4.4, infrastructure: 4.3, placement: 4.2, campus: 4.3 },
            4: { overall: 4.7, academics: 4.8, infrastructure: 4.7, placement: 4.8, campus: 4.6 },
            5: { overall: 4.2, academics: 4.3, infrastructure: 4.2, placement: 4.1, campus: 4.3 },
            6: { overall: 4.1, academics: 4.2, infrastructure: 4.1, placement: 4.0, campus: 4.2 },
            7: { overall: 4.0, academics: 4.1, infrastructure: 4.0, placement: 3.9, campus: 4.0 },
            8: { overall: 4.2, academics: 4.2, infrastructure: 4.1, placement: 4.1, campus: 4.2 },
            9: { overall: 4.1, academics: 4.2, infrastructure: 4.0, placement: 4.0, campus: 4.1 },
            10: { overall: 4.3, academics: 4.3, infrastructure: 4.2, placement: 4.2, campus: 4.3 },
            11: { overall: 4.0, academics: 4.1, infrastructure: 4.0, placement: 3.9, campus: 4.0 },
            12: { overall: 4.2, academics: 4.2, infrastructure: 4.1, placement: 4.1, campus: 4.2 },
            13: { overall: 4.1, academics: 4.2, infrastructure: 4.0, placement: 4.0, campus: 4.1 },
            14: { overall: 4.3, academics: 4.4, infrastructure: 4.3, placement: 4.2, campus: 4.3 },
            15: { overall: 4.2, academics: 4.2, infrastructure: 4.1, placement: 4.1, campus: 4.2 },
            16: { overall: 4.1, academics: 4.2, infrastructure: 4.0, placement: 4.0, campus: 4.1 },
            17: { overall: 4.0, academics: 4.1, infrastructure: 4.0, placement: 3.9, campus: 4.0 },
            18: { overall: 4.2, academics: 4.2, infrastructure: 4.1, placement: 4.1, campus: 4.2 }
        };
        return ratingsMap[collegeId] || { overall: 4.0, academics: 4.0, infrastructure: 4.0, placement: 4.0, campus: 4.0 };
    };

    // Helper function to get college facilities
    const getCollegeFacilities = (collegeId) => {
        const facilitiesMap = {
            1: [
                { icon: 'campus', title: 'Lush Green Campus', description: 'Sprawling 40-acre campus with beautifully landscaped gardens and modern architecture' },
                { icon: 'lab', title: 'Advanced Laboratories', description: 'State-of-the-art labs equipped with latest technology for practical learning' },
                { icon: 'library', title: 'Digital Library', description: 'Extensive library with 1,00,000+ books and digital resources' },
                { icon: 'hostel', title: 'Modern Hostels', description: 'Well-furnished hostels with all modern amenities and 24/7 security' },
                { icon: 'sports', title: 'Sports Complex', description: 'Comprehensive sports facilities including cricket, football, basketball, and indoor games' },
                { icon: 'wifi', title: 'WiFi Enabled Campus', description: 'High-speed internet connectivity across the entire campus' }
            ],
            2: [
                { icon: 'campus', title: 'Lush Green Campus', description: 'Beautiful 50-acre eco-friendly campus surrounded by hills and greenery' },
                { icon: 'lab', title: 'Smart Classrooms', description: 'Technology-enabled smart classrooms with interactive learning systems' },
                { icon: 'library', title: 'Central Library', description: 'Well-stocked library with extensive collection of books and e-resources' },
                { icon: 'hostel', title: 'Comfortable Hostels', description: 'Separate hostels for boys and girls with modern facilities' },
                { icon: 'sports', title: 'Sports Facilities', description: 'Excellent sports infrastructure including gymnasium and outdoor sports' },
                { icon: 'cafeteria', title: 'Cafeteria & Dining', description: 'Multiple cafeterias serving healthy and delicious meals' }
            ],
            3: [
                { icon: 'campus', title: 'Spacious Campus', description: 'Extensive campus with modern buildings and beautiful landscaping' },
                { icon: 'lab', title: 'Research Labs', description: 'Advanced research laboratories for innovation and experimentation' },
                { icon: 'library', title: 'Learning Resource Center', description: 'Comprehensive library with quiet study areas and digital access' },
                { icon: 'hostel', title: 'Hostel Facilities', description: 'Comfortable accommodation with mess and recreational facilities' },
                { icon: 'sports', title: 'Recreation Center', description: 'Multi-purpose sports complex for various indoor and outdoor activities' },
                { icon: 'auditorium', title: 'Auditorium', description: 'State-of-the-art auditorium for events and conferences' }
            ],
            4: [
                { icon: 'campus', title: 'Premium Campus', description: 'World-class 44-acre campus with cutting-edge infrastructure' },
                { icon: 'lab', title: 'Specialized Labs', description: 'Industry-standard labs for petroleum, energy, and technology programs' },
                { icon: 'library', title: 'Knowledge Center', description: 'Modern library with specialized resources and research materials' },
                { icon: 'hostel', title: 'Luxury Hostels', description: 'Premium accommodation with all modern amenities and facilities' },
                { icon: 'sports', title: 'Sports Complex', description: 'International-standard sports facilities and fitness centers' },
                { icon: 'transport', title: 'Transportation', description: 'Bus facility connecting campus to major areas of the city' }
            ]
        };

        // Default facilities for colleges without specific data
        const defaultFacilities = [
            { icon: 'campus', title: 'Modern Campus', description: 'Well-maintained campus with excellent infrastructure and facilities' },
            { icon: 'lab', title: 'Laboratories', description: 'Well-equipped laboratories for practical and hands-on learning' },
            { icon: 'library', title: 'Library', description: 'Comprehensive library with extensive collection of books and resources' },
            { icon: 'hostel', title: 'Hostel Accommodation', description: 'Comfortable hostel facilities with all essential amenities' },
            { icon: 'sports', title: 'Sports Facilities', description: 'Various sports facilities for physical fitness and recreation' },
            { icon: 'wifi', title: 'Campus Facilities', description: 'Modern amenities including WiFi, cafeteria, and common areas' }
        ];

        return facilitiesMap[collegeId] || defaultFacilities;
    };

    // Helper function to get college departments (Schools) - Mainly for Graphic Era
    const getCollegeDepartments = (collegeId) => {
        if (collegeId === 1) { // Graphic Era
            return [
                { name: 'School of Engineering & Technology', icon: 'engineering', description: 'Cutting-edge engineering programs with modern labs', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000' },
                { name: 'School of Management', icon: 'management', description: 'Developing future business leaders and entrepreneurs', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000' },
                { name: 'School of Computer Applications', icon: 'computer', description: 'Advanced computing and software development', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000' },
                { name: 'School of Commerce', icon: 'commerce', description: 'Excellence in financial and business education', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000' },
                { name: 'School of Humanities', icon: 'humanities', description: 'Exploring society, culture, and human behavior', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000' },
                { name: 'School of Applied Sciences', icon: 'science', description: 'Research-driven scientific education', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000' }
            ];
        }
        return [];
    };

    // Helper function to get detailed courses list - Mainly for Graphic Era
    const getAllCourses = (collegeId) => {
        if (collegeId === 1) { // Graphic Era
            return [
                {
                    category: 'Engineering',
                    courses: [
                        { name: 'B.Tech Computer Science', duration: '4 Years' },
                        { name: 'B.Tech Mechanical', duration: '4 Years' },
                        { name: 'B.Tech Civil', duration: '4 Years' },
                        { name: 'B.Tech Electronics & Comm.', duration: '4 Years' },
                        { name: 'B.Tech Biotech', duration: '4 Years' },
                        { name: 'B.Tech Aerospace', duration: '4 Years' },
                        { name: 'M.Tech', duration: '2 Years' }
                    ]
                },
                {
                    category: 'Management',
                    courses: [
                        { name: 'MBA (General)', duration: '2 Years' },
                        { name: 'MBA (Marketing)', duration: '2 Years' },
                        { name: 'MBA (Finance)', duration: '2 Years' },
                        { name: 'BBA', duration: '3 Years' },
                        { name: 'BBA (International Finance)', duration: '3 Years' },
                        { name: 'B.Com (Hons)', duration: '3 Years' }
                    ]
                },
                {
                    category: 'Computer Applications',
                    courses: [
                        { name: 'BCA', duration: '3 Years' },
                        { name: 'MCA', duration: '2 Years' },
                        { name: 'B.Sc IT', duration: '3 Years' },
                        { name: 'B.Sc Animation & Gaming', duration: '3 Years' },
                        { name: 'M.Sc IT', duration: '2 Years' }
                    ]
                },
                {
                    category: 'Others',
                    courses: [
                        { name: 'B.Sc (Hons)', duration: '3 Years' },
                        { name: 'BA (Hons) Psychology', duration: '3 Years' },
                        { name: 'BA (Hons) Economics', duration: '3 Years' },
                        { name: 'BHM (Hotel Mgmt)', duration: '4 Years' },
                        { name: 'Ph.D Programs', duration: '3-5 Years' }
                    ]
                }
            ];
        }
        return [];
    };

    const departments = getCollegeDepartments(collegeId);
    const detailedCourses = getAllCourses(collegeId);

    const collegeRating = getCollegeRating(collegeId);
    const collegeFacilities = getCollegeFacilities(collegeId);

    // Recruiter logos - common for all colleges
    const recruiterLogos = [
        { id: 1, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946258/Infosys_logo.svg_feindm.png', name: 'Infosys' },
        { id: 2, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946258/Adobe_Corporate_logo.svg_drdl8p.png', name: 'Adobe' },
        { id: 3, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/Amazon_logo.svg_n8i8jw.webp', name: 'Amazon' },
        { id: 4, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946257/Wipro_Primary_Logo_Color_RGB.svg_blpfxt.png', name: 'Wipro' },
        { id: 5, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946253/Google_2015_logo.svg_mq6axm.png', name: 'Google' },
        { id: 6, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946257/Tata_Consultancy_Services_old_logo.svg_njnfta.png', name: 'TCS' },
        { id: 7, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/Accenture.svg_fjqnhy.png', name: 'Accenture' },
        { id: 8, url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/MANKIND.NS-3f70896f_idw63x.png', name: 'Mankind' }
    ];

    // Handle Apply Now - redirect to apply form
    const handleApplyNow = () => {
        navigate('/apply');
    };

    // Handle Fees Structure PDF download
    const handleFeesStructure = () => {
        alert('Fees Structure PDF will be available soon');
    };

    // Handle Brochure download
    const handleBrochure = () => {
        const brochureUrls = {
            1: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767117750/geu-brochure-2025-new-2_11zon_aalytr.pdf',
            2: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767117837/DIT-University-Dehradun-Brochure_njl95k.pdf',
            3: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118116/Brochure_hjnjzb.pdf',
            4: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118540/Student_Bulletin_Final_version_2-compressed_2_easar3.pdf',
            6: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118456/1288imguf_Prospectus-2025_11zon_n7ox07.pdf'
        };
        const brochureUrl = brochureUrls[collegeId];
        if (brochureUrl) {
            window.open(brochureUrl, '_blank');
        } else {
            alert('Brochure will be available soon');
        }
    };

    // Get short intro text (first sentence of description)
    const introText = college.description.split('.')[0] + '.';

    // Highlight badges data
    const highlights = [
        college.established && { icon: 'calendar', label: 'Established', value: college.established, color: 'blue' },
        college.accreditation && { icon: 'badge', label: 'Accredited', value: college.accreditation, color: 'green' },
        college.location && { icon: 'location', label: 'Location', value: college.location, color: 'purple' },
        college.collegeType && { icon: 'building', label: 'Type', value: college.collegeType, color: 'amber' }
    ].filter(Boolean);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 animate-gradient-x animate-page-enter">
            {/* Back Button with Animation */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 mb-4 hover:gap-3"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Back to Colleges</span>
                </button>
            </div>

            {/* Premium Hero Section with Slideshow */}
            <section
                ref={heroRef.ref}
                className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16"
            >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - College Information */}
                    <div className="space-y-8">
                        {/* College Name with Staggered Animation */}
                        <div
                            className={`space-y-4 transform transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '100ms' }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                {college.name}
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"></div>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {introText}
                            </p>
                        </div>

                        {/* Highlights/Accreditations with Staggered Animation */}
                        <div
                            className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            {highlights.map((highlight, index) => {
                                const iconClasses = {
                                    blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
                                    green: 'bg-gradient-to-br from-green-500 to-emerald-600',
                                    purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
                                    amber: 'bg-gradient-to-br from-amber-500 to-orange-600'
                                };

                                const iconBgClasses = {
                                    blue: 'bg-blue-50',
                                    green: 'bg-green-50',
                                    purple: 'bg-purple-50',
                                    amber: 'bg-amber-50'
                                };

                                const iconColorClasses = {
                                    blue: 'text-blue-600',
                                    green: 'text-green-600',
                                    purple: 'text-purple-600',
                                    amber: 'text-amber-600'
                                };

                                return (
                                    <div
                                        key={index}
                                        className={`group relative rounded-lg border border-gray-100 p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden ${iconBgClasses[highlight.color]}`}
                                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                                    >
                                        {/* Animated Background Gradient */}
                                        <div className={`absolute inset-0 ${iconBgClasses[highlight.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                        <div className="relative z-10 flex items-center gap-3">
                                            <div className={`${iconClasses[highlight.color]} rounded-lg p-2 shadow-sm transform group-hover:scale-110 transition-all duration-300`}>
                                                {highlight.icon === 'calendar' && (
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                )}
                                                {highlight.icon === 'badge' && (
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                )}
                                                {highlight.icon === 'location' && (
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                )}
                                                {highlight.icon === 'building' && (
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">{highlight.label}</p>
                                                <p className="text-sm font-semibold text-gray-900 truncate">{highlight.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Popular Courses with Staggered Animation */}
                        {college.courses && college.courses.length > 0 && (
                            <div
                                className={`space-y-4 transform transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: '700ms' }}
                            >
                                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-indigo-500"></span>
                                    Popular Courses
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {college.courses.slice(0, 6).map((course, index) => (
                                        <span
                                            key={index}
                                            className="group px-5 py-2.5 bg-gradient-to-r from-primary-50 to-indigo-50 text-primary-700 text-sm font-semibold rounded-full border-2 border-primary-200 hover:border-primary-400 hover:from-primary-100 hover:to-indigo-100 hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-default"
                                            style={{ transitionDelay: `${800 + index * 50}ms` }}
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons with Enhanced Animation */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 pt-2 transform transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '1000ms' }}
                        >
                            <button
                                onClick={handleFeesStructure}
                                className="group flex-1 relative bg-white border-2 border-primary-500 text-primary-600 hover:text-primary-700 font-bold py-4 px-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>View Fees Structure</span>
                                </div>
                            </button>
                            <button
                                onClick={handleBrochure}
                                className="group flex-1 relative bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    <svg className="w-5 h-5 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download Brochure</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image Slideshow with Animation */}
                    <div
                        className={`order-first lg:order-last transform transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <CollegeHeroSlideshow images={slideshowImages} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Compact Ratings Section */}
            <section
                ref={ratingsRef.ref}
                className={`bg-white py-8 border-b border-gray-100 transform transition-all duration-1000 ease-out ${ratingsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm">

                        {/* Overall Rating Pill */}
                        <div className="flex items-center gap-4 pr-0 md:pr-8 md:border-r border-gray-200">
                            <div className="bg-yellow-400 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold p-1 shadow-md ring-4 ring-yellow-50">
                                {collegeRating.overall}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 leading-none mb-1">Excellent</h3>
                                <p className="text-sm text-gray-500">Overall Rating</p>
                            </div>
                        </div>

                        {/* Compact Stats Grid */}
                        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                            {[
                                { label: 'Academics', value: collegeRating.academics, icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
                                { label: 'Infrastructure', value: collegeRating.infrastructure, icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                                { label: 'Placement', value: collegeRating.placement, icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                                { label: 'Life', value: collegeRating.campus, icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white p-2.5 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                                    <div className="text-gray-400 bg-gray-50 p-1.5 rounded-md">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">{item.value}/5</div>
                                        <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Course Offerings - Only if data exists */}
            {detailedCourses.length > 0 && (
                <section
                    ref={coursesRef.ref}
                    className={`bg-white pb-16 transform transition-all duration-1000 ease-out ${coursesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="p-8 md:p-12 bg-gradient-to-r from-gray-900 to-indigo-900 text-white text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
                                <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Explore our diverse range of industry-aligned programs designed to shape your future.</p>
                            </div>
                            <div className="p-8 md:p-12 bg-white">
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                    {detailedCourses.map((category, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{category.category}</h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {category.courses.map((course, cIdx) => (
                                                    <li key={cIdx} className="flex items-center justify-between gap-3 text-gray-600 group-hover:text-gray-900 transition-colors pl-2 border-l-2 border-transparent hover:border-indigo-300 hover:bg-gray-50 rounded-r-lg p-2">
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                                            <span className="font-medium">{course.name}</span>
                                                        </div>
                                                        <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">{course.duration}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* College Facilities Section */}
            <section
                ref={facilitiesRef.ref}
                className={`bg-gradient-to-b from-gray-50 to-white py-16 transform transition-all duration-1000 ease-out ${facilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Campus Facilities</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full mx-auto mb-3"></div>
                        <p className="text-lg text-gray-600">World-class facilities for an exceptional learning experience</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collegeFacilities.map((facility, index) => {
                            const getIcon = (iconName) => {
                                const icons = {
                                    campus: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    ),
                                    lab: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    ),
                                    library: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    ),
                                    hostel: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    ),
                                    sports: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    ),
                                    wifi: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                        </svg>
                                    ),
                                    cafeteria: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                    ),
                                    auditorium: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    ),
                                    transport: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    )
                                };
                                return icons[iconName] || icons.campus;
                            };

                            return (
                                <div
                                    key={index}
                                    className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${facilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Animated Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl p-3 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                {getIcon(facility.icon)}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Recruiters/Partner Companies Section with Enhanced Animation */}
            <section
                ref={recruitersRef.ref}
                className={`bg-gradient-to-b from-white to-gray-50 py-16 transform transition-all duration-1000 ease-out ${recruitersRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Top Recruiters & Partners</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full mx-auto mb-3"></div>
                        <p className="text-lg text-gray-600">Leading companies that recruit from {college.name}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {recruiterLogos.map((logo, index) => (
                            <div
                                key={logo.id}
                                className={`group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-500 flex items-center justify-center grayscale hover:grayscale-0 transform hover:-translate-y-3 hover:scale-105 overflow-hidden ${recruitersRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="relative z-10 max-h-14 max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                {/* Overview Section with Enhanced Design */}
                <section
                    ref={overviewRef.ref}
                    className={`mb-16 transform transition-all duration-1000 ease-out ${overviewRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-50/50 to-indigo-50/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"></div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Overview</h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">{college.description}</p>
                        </div>
                    </div>
                </section>

                {/* Schools & Departments Section - Only if data exists */}
                {departments.length > 0 && (
                    <section
                        ref={departmentsRef.ref}
                        className={`mb-16 transform transition-all duration-1000 ease-out ${departmentsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Schools & Departments</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full mx-auto mb-3"></div>
                            <p className="text-lg text-gray-600">Centers of excellence fostering learning and innovation</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {departments.map((dept, index) => (
                                <div
                                    key={index}
                                    className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={dept.image}
                                            alt={dept.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                            {dept.description}
                                        </p>
                                        <div className="mt-4 w-12 h-1 bg-primary-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}



                {/* Campus Gallery Section */}
                <section
                    ref={galleryRef.ref}
                    className={`mb-16 transform transition-all duration-1000 ease-out ${galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <PhotoGallery images={galleryImages} />
                </section>

                {/* Enhanced CTA Message & Apply Now Button */}
                <section
                    ref={ctaRef.ref}
                    className={`transform transition-all duration-1000 ease-out ${ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white overflow-hidden">
                        {/* Animated Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-block mb-6">
                                <div className="w-24 h-1 bg-white/30 rounded-full mb-4 mx-auto"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Take the next step towards your future
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Get expert counseling and personalized assistance for your college admission journey
                            </p>
                            <button
                                onClick={handleApplyNow}
                                className="group relative bg-white text-primary-600 hover:text-primary-700 font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10">Apply Now</span>
                                <svg className="w-6 h-6 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CollegeDetails;
