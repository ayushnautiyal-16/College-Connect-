import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../../utils/assets';
import { useParams, useNavigate } from 'react-router-dom';
import { collegesData } from '../../utils/collegesData';
import CollegeHeroSlideshow from '../../components/CollegeHeroSlideshow/CollegeHeroSlideshow';
import CollegeGallery from '../../components/CollegeGallery/CollegeGallery';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import DarkPatternedSection from '../../components/DarkPatternedSection/DarkPatternedSection';

function CollegeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Parse ID safely
    const collegeId = id ? parseInt(id) : null;
    const college = collegeId ? collegesData.find(c => c.id === collegeId) : null;
    const [activeSection, setActiveSection] = useState('overview');

    // Scroll Spy Effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'placements', 'courses', 'infrastructure', 'gallery'];
            const scrollPosition = window.scrollY + 200; // Offset for sticky header

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Animation Refs
    const aboutRef = useScrollAnimation();
    const placementRef = useScrollAnimation();
    const coursesRef = useScrollAnimation();
    const infraRef = useScrollAnimation();
    const highlightRef = useScrollAnimation();
    const galleryRef = useScrollAnimation();
    const enquiryRef = useScrollAnimation();

    // Early return if college not found

    // Early return if college not found
    if (!college || !collegeId) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">College Not Found</h1>
                    <button onClick={() => navigate('/')} className="text-indigo-600 font-medium hover:underline">Back to Home</button>
                </div>
            </div>
        );
    }

    // --- Data Helpers ---
    const getSlideshowImages = (collegeId) => {
        // Mock data logic references internal images or placeholders
        const imageMap = {
            1: [
                getAssetUrl('graphic era/gehu-haldwani-timeline-geu-copy-3-100.jpg'),
                getAssetUrl('graphic era/header-image-1.jpg'),
                getAssetUrl('graphic era/BG-Accreditation-GEU2023-New-scaled.jpg'),
                getAssetUrl('graphic era/grafest-day-third-1.jpg'),
                getAssetUrl('graphic era/grafest-day-third-9.jpg'),
                getAssetUrl('graphic era/q5z0k07Y-grafest-badshah-7-jpeg.webp'),
                getAssetUrl('graphic era/97Md0bko-grafest-badshah-1-jpeg.webp'),
                getAssetUrl('graphic era/ScfG2Scp-IMG_4587-jpg.webp'),
                getAssetUrl('graphic era/RkQ4Fo0h-grafest-badshah-4-jpeg.webp')
            ],
            2: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767954779/1500x500_mtdnmx.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767381831/dit-university-dehradun-229162_ws0ck4.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767954774/Ge54DdyWsAADfss_lnui0u.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767954772/Gceo9oYXsAAhsfR_widqbr.jpg')
            ],
            3: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767953726/Deepa-Panday-Slider-2025-v3_wjgb2p.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767953731/Box-New-color_in8431.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767953729/15_yplf3g.webp'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031601/8_kpjirn.jpg')
            ],
            4: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376541/desk-students_t0muq8.webp'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767956998/FarlyNuVQAEvYsE_s99wgi.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767956994/FaHf3K7UIAIvEN0_ct1bgh.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767956977/FCmXjKUVcAQLMNz_htvnaz.jpg')
            ],
            5: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377026/dbuu-campus-webp-1_wdiaej.webp'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377034/5_wazjsp.webp'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377032/17_mjo5ao.webp'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377035/one_aw66o4.webp')
            ],
            6: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377576/section002-side-image_clige2.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377575/1750750305104_ffszrd.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377577/t5_keegcv.jpg')
            ],
            7: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245387/Himalayan_Institute_of_Technology_Campus_Entry_Gate_fzzkly.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245240/slider-1_jagmt4.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245236/slider-5_us5lez.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245229/sddefault_oe0ias.webp')
            ],
            8: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246250/3-0x0_ktdjzr.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246223/img-slide-2_gwrz2i.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246235/1-0x0_wolccq.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246252/2-0x0_ospmps.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246248/img-slide-3_m1nflh.jpg'),
            ],
            9: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247105/Copy-of-Untitled-1_a3cfou.png'), // Placeholder, user will likely provide specific slider images later.
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247096/4-1_q8sqd2.png'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247094/Untitled-design-100_ncsqlb.png'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247091/dd-college1_kujwjv.jpg')
                // Generic backup
            ],
            10: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328238/sbsu_gallery_0097_q8g1mb.jpg'), // Placeholder
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328234/sbsu_gallery_0133_g97bky.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328237/sbsu_gallery_0092_fir2rb.jpg'),
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328236/sbsu_gallery_0096_gbelvc.jpg')
            ],
            11: [
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328238/sbsu_gallery_0097_q8g1mb.jpg'), // Using generic/college placeholder
                getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg')
            ]
        };
        return imageMap[collegeId] || [
            getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg'),
            getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg')
        ];
    };

    // --- Dynamic Data Helpers ---
    const getCourseDetails = (courseName) => {
        if (!courseName) return { duration: 'Duration Varies', icon: '🎓' };
        const lower = courseName.toLowerCase();
        if (lower.includes('b.tech') || lower.includes('engineering')) return { duration: '4 Years', icon: '💻' };
        if (lower.includes('m.tech')) return { duration: '2 Years', icon: '⚙️' };
        if (lower.includes('mba')) return { duration: '2 Years', icon: '📊' };
        if (lower.includes('bba')) return { duration: '3 Years', icon: '👔' };
        if (lower.includes('bca')) return { duration: '3 Years', icon: '🖥️' };
        if (lower.includes('mca')) return { duration: '2 Years', icon: '💻' };
        if (lower.includes('mbbs')) return { duration: '5.5 Years', icon: '⚕️' };
        if (lower.includes('bpts') || lower.includes('bpt')) return { duration: '4.5 Years', icon: '🦴' };
        if (lower.includes('pharma')) return { duration: '4 Years', icon: '💊' };
        if (lower.includes('nursing')) return { duration: '4 Years', icon: '🏥' };
        if (lower.includes('b.sc')) return { duration: '3 Years', icon: '🔬' };
        if (lower.includes('m.sc')) return { duration: '2 Years', icon: '🧪' };
        if (lower.includes('hotel') || lower.includes('bhm')) return { duration: '4 Years', icon: '🏨' };
        if (lower.includes('law') || lower.includes('llb')) return { duration: '3-5 Years', icon: '⚖️' };
        if (lower.includes('design') || lower.includes('b.des')) return { duration: '4 Years', icon: '🎨' };
        if (lower.includes('education') || lower.includes('b.ed')) return { duration: '2 Years', icon: '📚' };
        if (lower.includes('commerce') || lower.includes('b.com')) return { duration: '3 Years', icon: '📉' };
        return { duration: 'Duration Varies', icon: '🎓' };
    };

    const getFacilityDetails = (facilityName) => {
        if (!facilityName) return { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'bg-gray-50 text-gray-600' };
        const lower = facilityName.toLowerCase();
        if (lower.includes('library')) return { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' };
        if (lower.includes('wifi') || lower.includes('wi-fi')) return { icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' };
        if (lower.includes('sport') || lower.includes('gym')) return { icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' };
        if (lower.includes('hostel')) return { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' };
        if (lower.includes('lab') || lower.includes('computer')) return { icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' };
        if (lower.includes('cafeteria') || lower.includes('food') || lower.includes('canteen')) return { icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-red-50 text-red-600' };
        if (lower.includes('medical') || lower.includes('hospital')) return { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', color: 'bg-teal-50 text-teal-600' };
        if (lower.includes('auditorium')) return { icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'bg-yellow-50 text-yellow-600' };
        if (lower.includes('transport')) return { icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16v-1.5a2.5 2.5 0 00-2-2.32V11A2.5 2.5 0 008.5 8.5H7A2.5 2.5 0 004.5 11v1.18A2.5 2.5 0 002.5 14.5V16h10zM19.5 8.5H18A2.5 2.5 0 0015.5 11v1.18A2.5 2.5 0 0013.5 14.5V16h8v-1.5a2.5 2.5 0 00-2-2.32V11A2.5 2.5 0 0019.5 8.5z', color: 'bg-blue-50 text-blue-600' };
        return { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'bg-gray-50 text-gray-600' };
    };

    const highlights = [
        { label: 'Established', value: college.established || 'N/A', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-blue-500 to-cyan-400' },
        { label: 'Accreditation', value: college.accreditation ? college.accreditation.split('|')[0].trim() : 'N/A', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-emerald-500 to-green-400' },
        { label: 'Campus Area', value: college.campusSize || 'N/A', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', color: 'from-orange-500 to-amber-400' },
        { label: 'Ranking', value: college.rankings?.nirf || college.rankings?.other || 'Top Ranked', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'from-purple-500 to-pink-400' }
    ];

    // Safe access to courses
    const coursesList = college.mainCourses || college.courses || [];
    const courses = coursesList.map(name => {
        const details = getCourseDetails(name);
        return { name: name, duration: details.duration, icon: details.icon };
    });

    const courses_unused = collegeId === 1 ? [
        { name: 'B.Tech (CSE, ME, ECE, Civil)', duration: '4 Years', icon: '💻' },
        { name: 'MBA (Marketing/Finance/HR)', duration: '2 Years', icon: '📊' },
        { name: 'MCA', duration: '2 Years', icon: '🖥️' },
        { name: 'BBA (General/International)', duration: '3 Years', icon: '👔' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📉' },
        { name: 'B.Sc IT', duration: '3 Years', icon: '📱' },
        { name: 'B.Sc Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'B.Sc Nursing', duration: '4 Years', icon: '🏥' },
        { name: 'B.Pharma', duration: '4 Years', icon: '💊' },
        { name: 'D.Pharma', duration: '2 Years', icon: '🔬' },
        { name: 'Hotel Management (BHM)', duration: '4 Years', icon: '🏨' },
        { name: 'BA Journalism & Mass Comm', duration: '3 Years', icon: '🎙️' },
        { name: 'LLB', duration: '3 Years', icon: '⚖️' },
        { name: 'BA LLB (Hons)', duration: '5 Years', icon: '⚖️' },
        { name: 'B.Des (Fashion/Textile)', duration: '4 Years', icon: '👗' },
        { name: 'B.Sc Animation & Gaming', duration: '3 Years', icon: '🎨' },
        { name: 'M.Sc (Biotech/Microbio)', duration: '2 Years', icon: '🧪' },
        { name: 'Ph.D Programs', duration: '3-5 Years', icon: '🎓' },
        { name: 'M.Tech', duration: '2 Years', icon: '⚙️' },
        { name: 'B.A. (Hons) English/Psychology', duration: '3 Years', icon: '📚' }
    ] : collegeId === 2 ? [
        { name: 'B.Tech (CSE, AI, Robotics)', duration: '4 Years', icon: '💻' },
        { name: 'B.Arch', duration: '5 Years', icon: '🏛️' },
        { name: 'B.Pharma', duration: '4 Years', icon: '💊' },
        { name: 'BCA', duration: '3 Years', icon: '🖥️' },
        { name: 'B.Sc (Hons) Physics/Maths', duration: '3 Years', icon: '🔬' },
        { name: 'BA (Hons) Economics/Psych', duration: '3 Years', icon: '📚' },
        { name: 'MBA (Marketing/Finance)', duration: '2 Years', icon: '📊' },
        { name: 'M.Tech (CSE/Civil)', duration: '2 Years', icon: '⚙️' },
        { name: 'M.Pharm', duration: '2 Years', icon: '💊' },
        { name: 'MCA', duration: '2 Years', icon: '💻' },
        { name: 'M.Plan (Urban Planning)', duration: '2 Years', icon: 'city' },
        { name: 'M.Sc (Physics/Maths)', duration: '2 Years', icon: '🧪' },
        { name: 'Ph.D (Engg/Sci/Mgmt)', duration: '3+ Years', icon: '🎓' },
        { name: 'B.Des (UX/UI)', duration: '4 Years', icon: '🎨' },
        { name: 'Diploma in Pharmacy', duration: '2 Years', icon: '⚕️' },
        { name: 'BBA', duration: '3 Years', icon: '👔' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📉' },
        { name: 'MA (English/Clinical Psych)', duration: '2 Years', icon: '📖' },
        { name: 'PG Diploma in Data Science', duration: '1 Year', icon: '📈' }
    ] : collegeId === 3 ? [
        { name: 'B.Tech (CSE, Civil, Aero, ME)', duration: '4 Years', icon: '💻' },
        { name: 'BA LLB (Hons)', duration: '5 Years', icon: '⚖️' },
        { name: 'BBA LLB (Hons)', duration: '5 Years', icon: '⚖️' },
        { name: 'LLB (Hons)', duration: '3 Years', icon: '⚖️' },
        { name: 'BBA (HR/Finance/Marketing)', duration: '3 Years', icon: '👔' },
        { name: 'MBA (Executive/Regular)', duration: '2 Years', icon: '📊' },
        { name: 'BCA (Cyber Security/AI)', duration: '3 Years', icon: '🖥️' },
        { name: 'MCA', duration: '2 Years', icon: '💻' },
        { name: 'B.Sc (Hons) Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'B.Pharm', duration: '4 Years', icon: '💊' },
        { name: 'B.Sc Nursing', duration: '4 Years', icon: '🏥' },
        { name: 'BPT (Physiotherapy)', duration: '4.5 Years', icon: '⚕️' },
        { name: 'BHMCT', duration: '4 Years', icon: '🏨' },
        { name: 'B.Sc (Hons) Food Tech', duration: '3 Years', icon: '🧪' },
        { name: 'M.Tech', duration: '2 Years', icon: '⚙️' },
        { name: 'LLM', duration: '1 Year', icon: '⚖️' },
        { name: 'Ph.D Programs', duration: '3+ Years', icon: '🎓' },
        { name: 'M.Sc (Biotech/Microbio)', duration: '2 Years', icon: '🧬' },
        { name: 'Diploma in Pharmacy', duration: '2 Years', icon: '💊' },
        { name: 'BA (Hons) Journalism', duration: '3 Years', icon: '🎙️' }
    ] : collegeId === 4 ? [
        { name: 'B.Tech (CSE, Upstream/Downstream)', duration: '4 Years', icon: '💻' },
        { name: 'MBA (Oil&Gas/Power/Logistics)', duration: '2 Years', icon: '📊' },
        { name: 'B.Des (Product/Transportation)', duration: '4 Years', icon: '🎨' },
        { name: 'BBA (Aviation/Auto)', duration: '3 Years', icon: '✈️' },
        { name: 'LLB (Hons)', duration: '3 Years', icon: '⚖️' },
        { name: 'BA LLB (Hons) Energy Law', duration: '5 Years', icon: '⚖️' },
        { name: 'BBA LLB (Hons) Corp Law', duration: '5 Years', icon: '⚖️' },
        { name: 'B.Tech (Fire & Safety)', duration: '4 Years', icon: '🔥' },
        { name: 'M.Tech (Petroleum/Energy)', duration: '2 Years', icon: '⚡' },
        { name: 'M.Des (Transportation/Industrial)', duration: '2 Years', icon: '🎨' },
        { name: 'BCA (IoT/Cloud Computing)', duration: '3 Years', icon: '☁️' },
        { name: 'B.Com (Hons) Taxation', duration: '3 Years', icon: '📉' },
        { name: 'B.Sc (Hons) Economics/Data Sci', duration: '3 Years', icon: '📈' },
        { name: 'M.Sc (Petroleum Geosciences)', duration: '2 Years', icon: '🌍' },
        { name: 'Ph.D (Engg/Law/Mgmt)', duration: '3+ Years', icon: '🎓' },
        { name: 'BA (Journalism & Mass Comm)', duration: '3 Years', icon: '🎙️' },
        { name: 'MA (Digital & Mass Media)', duration: '2 Years', icon: '🎥' },
        { name: 'B.Pharma', duration: '4 Years', icon: '💊' },
        { name: 'B.Sc (Clinical Research)', duration: '3 Years', icon: '🔬' },
        { name: 'Integrated BBA-MBA', duration: '5 Years', icon: '👔' }
    ] : collegeId === 5 ? [
        { name: 'B.Tech (CSE, AI, ML, Civil)', duration: '4 Years', icon: '💻' },
        { name: 'B.Tech (Aerospace/Mechanical)', duration: '4 Years', icon: '🚀' },
        { name: 'BBA (HR/Marketing/Finance)', duration: '3 Years', icon: '👔' },
        { name: 'BCA (Data Science/AI)', duration: '3 Years', icon: '🖥️' },
        { name: 'B.Sc (Hons) Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'B.Sc (Hons) Forestry', duration: '4 Years', icon: '🌲' },
        { name: 'B.Pharm', duration: '4 Years', icon: '💊' },
        { name: 'Pharm.D', duration: '6 Years', icon: '⚕️' },
        { name: 'B.Des (Fashion/Interior)', duration: '4 Years', icon: '🎨' },
        { name: 'BA (Journalism & Mass Comm)', duration: '3 Years', icon: '🎙️' },
        { name: 'BHM (Hotel Management)', duration: '4 Years', icon: '🏨' },
        { name: 'B.Sc (Nursing)', duration: '4 Years', icon: '🏥' },
        { name: 'BPT (Physiotherapy)', duration: '4.5 Years', icon: '⚕️' },
        { name: 'MBA (Dual Specialization)', duration: '2 Years', icon: '📊' },
        { name: 'MCA', duration: '2 Years', icon: '💻' },
        { name: 'M.Tech', duration: '2 Years', icon: '⚙️' },
        { name: 'M.Sc (Agronomy/Horticulture)', duration: '2 Years', icon: '🌱' },
        { name: 'Ph.D Programs', duration: '3+ Years', icon: '🎓' },
        { name: 'LLB', duration: '3 Years', icon: '⚖️' },
        { name: 'BA LLB', duration: '5 Years', icon: '⚖️' }
    ] : collegeId === 6 ? [
        { name: 'MBBS', duration: '5.5 Years', icon: '⚕️' },
        { name: 'B.Sc Nursing', duration: '4 Years', icon: '🏥' },
        { name: 'B.Pharma', duration: '4 Years', icon: '💊' },
        { name: 'Pharm.D', duration: '6 Years', icon: '🔬' },
        { name: 'BPT (Physiotherapy)', duration: '4.5 Years', icon: '🦴' },
        { name: 'B.Sc (Agriculture)', duration: '4 Years', icon: '🌾' },
        { name: 'BCA', duration: '3 Years', icon: '💻' },
        { name: 'MCA', duration: '2 Years', icon: '🖥️' },
        { name: 'BBA', duration: '3 Years', icon: '👔' },
        { name: 'MBA (Hospital Admin)', duration: '2 Years', icon: '🏥' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📊' },
        { name: 'B.Ed', duration: '2 Years', icon: '📚' },
        { name: 'M.Ed', duration: '2 Years', icon: '🎓' },
        { name: 'M.Sc (Microbiology/Biotech)', duration: '2 Years', icon: '🧬' },
        { name: 'M.Sc (Agronomy)', duration: '2 Years', icon: '🌱' },
        { name: 'Ph.D Programs', duration: '3+ Years', icon: '🎓' },
        { name: 'BA (Yoga)', duration: '3 Years', icon: '🧘' },
        { name: 'MA (Mass Comm)', duration: '2 Years', icon: '🎙️' },
        { name: 'BHM (Hotel Mgmt)', duration: '4 Years', icon: '🏨' },
        { name: 'M.Com', duration: '2 Years', icon: '📉' }
    ] : collegeId === 7 ? [
        { name: 'Bachelor of Hotel Mgmt (BHM)', duration: '4 Years', icon: '👨‍🍳' },
        { name: 'B.Sc Agriculture (Hons)', duration: '4 Years', icon: '🌾' },
        { name: 'B.Sc Forestry', duration: '4 Years', icon: '🌲' },
        { name: 'BCA', duration: '3 Years', icon: '💻' },
        { name: 'B.Sc IT', duration: '3 Years', icon: '🖥️' },
        { name: 'BBA', duration: '3 Years', icon: '👔' },
        { name: 'MBA', duration: '2 Years', icon: '📊' },
        { name: 'M.Com', duration: '2 Years', icon: '📉' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📚' },
        { name: 'B.Sc Biotechnology', duration: '3 Years', icon: '🧬' },
        { name: 'B.Sc (PCM/ZBC)', duration: '3 Years', icon: '🔬' },
        { name: 'M.Sc Agronomy', duration: '2 Years', icon: '🌱' },
        { name: 'M.Sc Soil Science', duration: '2 Years', icon: '🧪' },
        { name: 'M.Sc Genetics & Plant Breeding', duration: '2 Years', icon: '�' },
        { name: 'M.Sc Botany', duration: '2 Years', icon: '🍃' },
        { name: 'M.Sc Zoology', duration: '2 Years', icon: '�' },
        { name: 'M.Sc Chemistry', duration: '2 Years', icon: '⚗️' },
        { name: 'M.Sc Physics', duration: '2 Years', icon: '⚛️' },
        { name: 'M.Sc Mathematics', duration: '2 Years', icon: '➕' },
        { name: 'M.Sc IT', duration: '2 Years', icon: '💾' },
        { name: 'Diploma in Hotel Mgmt', duration: '1 Year', icon: '🏨' }
    ] : collegeId === 8 ? [
        { name: 'B.Tech (CSE, ME, Civil)', duration: '4 Years', icon: '💻' },
        { name: 'B.Pharma', duration: '4 Years', icon: '💊' },
        { name: 'MBA (Marketing/Finance)', duration: '2 Years', icon: '📊' },
        { name: 'BBA', duration: '3 Years', icon: '👔' },
        { name: 'BCA (Web/Network)', duration: '3 Years', icon: '🖥️' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📉' },
        { name: 'D.Pharma', duration: '2 Years', icon: '🔬' },
        { name: 'M.Tech', duration: '2 Years', icon: '⚙️' },
        { name: 'BA Journalism', duration: '3 Years', icon: '🎙️' },
        { name: 'B.Sc Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'Polytechnic Diploma', duration: '3 Years', icon: '🔧' }
    ] : collegeId === 9 ? [
        { name: 'B.Sc Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📚' },
        { name: 'B.Ed', duration: '2 Years', icon: '👨‍🏫' },
        { name: 'BBA', duration: '3 Years', icon: '👔' },
        { name: 'BCA', duration: '3 Years', icon: '💻' },
        { name: 'B.Sc (PCM/CBZ)', duration: '3 Years', icon: '🔬' },
        { name: 'M.Sc Agronomy', duration: '2 Years', icon: '🌱' },
        { name: 'M.Sc Chemistry', duration: '2 Years', icon: '⚗️' },
        { name: 'MA Yoga', duration: '2 Years', icon: '🧘' },
        { name: 'PG Diploma Yoga', duration: '1/2 Years', icon: '🤸' },
        { name: 'BA', duration: '3 Years', icon: '🎨' }
    ] : collegeId === 10 ? [
        { name: 'B.Pharm', duration: '4 Years', icon: '💊' },
        { name: 'BPT (Physiotherapy)', duration: '4.5 Years', icon: '🦴' },
        { name: 'M.Pharm', duration: '2 Years', icon: '🔬' },
        { name: 'MPT', duration: '2 Years', icon: '⚕️' },
        { name: 'B.Sc Biotechnology', duration: '3 Years', icon: '🧬' },
        { name: 'B.Sc Microbiology', duration: '3 Years', icon: '🦠' },
        { name: 'B.Tech (Biotech/CSE)', duration: '4 Years', icon: '💻' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📊' },
        { name: 'B.Sc Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'M.Sc (Chem/Biotech)', duration: '2 Years', icon: '🧪' },
        { name: 'BBA', duration: '3 Years', icon: '👔' },
        { name: 'B.Sc Medical Lab Tech', duration: '3.5 Years', icon: '🩸' }
    ] : collegeId === 11 ? [
        { name: 'BCA (General/Cyber)', duration: '3 Years', icon: '💻' },
        { name: 'BBA (Corporate/HR)', duration: '3 Years', icon: '👔' },
        { name: 'B.Sc IT', duration: '3 Years', icon: '🖥️' },
        { name: 'BHM (Hotel Mgmt)', duration: '4 Years', icon: '🏨' },
        { name: 'M.Sc IT', duration: '2 Years', icon: '💾' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📊' },
        { name: 'BA (Journalism & Mass)', duration: '3 Years', icon: '🎙️' },
        { name: 'B.Lib (Library Science)', duration: '1 Year', icon: '📚' },
        { name: 'B.Sc Animation', duration: '3 Years', icon: '🎨' },
        { name: 'DHM (Diploma Hotel Mgmt)', duration: '1 Year', icon: '👨‍🍳' },
        { name: 'B.Sc Computer Science', duration: '3 Years', icon: '💻' },
        { name: 'BFA (Fine Arts)', duration: '4 Years', icon: '🎭' },
        { name: 'M.Com', duration: '2 Years', icon: '📉' },
        { name: 'M.Lib', duration: '1 Year', icon: '📖' },
        { name: 'M.Sc Animation', duration: '2 Years', icon: '🎬' },
        { name: 'BA (Yoga)', duration: '3 Years', icon: '🧘' },
        { name: 'B.Sc (PCM/ZBC)', duration: '3 Years', icon: '🔬' },
        { name: 'B.A. (English Hons)', duration: '3 Years', icon: '📝' },
        { name: 'B.A. (Economics Hons)', duration: '3 Years', icon: '📈' },
        { name: 'Certificate in French', duration: '6 Months', icon: '🇫🇷' }
    ] : [
        { name: 'B.Tech Computer Science', duration: '4 Years', icon: '💻' },
        { name: 'MBA (Marketing/Finance)', duration: '2 Years', icon: '📊' },
        { name: 'BBA (Management)', duration: '3 Years', icon: '👔' },
        { name: 'BCA (Applications)', duration: '3 Years', icon: '🖥️' },
        { name: 'M.Tech (CSE/ECE/ME)', duration: '2 Years', icon: '⚙️' },
        { name: 'B.Com (Hons)', duration: '3 Years', icon: '📉' },
        { name: 'B.Sc IT', duration: '3 Years', icon: '📱' },
        { name: 'B.Sc Agriculture', duration: '4 Years', icon: '🌾' },
        { name: 'B.Sc Nursing', duration: '4 Years', icon: '🏥' },
        { name: 'B.Pharma', duration: '4 Years', icon: '💊' },
        { name: 'D.Pharma', duration: '2 Years', icon: '🔬' },
        { name: 'Hotel Management (BHM)', duration: '4 Years', icon: '🏨' }
    ];

    // Safe access to facilities
    const facilitiesList = college.facilities || [];
    const facilities = facilitiesList.map(name => {
        const details = getFacilityDetails(name);
        return { name: name, icon: details.icon, color: details.color };
    });

    const facilities_unused = collegeId === 3 ? [
        { name: 'Moot Court', icon: 'M12 2l-5.5 9h11L12 2zm0 3.5l2.5 4h-5l2.5-4zM2 14h20v2H2v-2zm9 4h2v4h-2v-4z', color: 'bg-amber-50 text-amber-600' },
        { name: 'Central Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Transport', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16v-1.5a2.5 2.5 0 00-2-2.32V11A2.5 2.5 0 008.5 8.5H7A2.5 2.5 0 004.5 11v1.18A2.5 2.5 0 002.5 14.5V16h10zM19.5 8.5H18A2.5 2.5 0 0015.5 11v1.18A2.5 2.5 0 0013.5 14.5V16h8v-1.5a2.5 2.5 0 00-2-2.32V11A2.5 2.5 0 0019.5 8.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Cafeteria', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-green-50 text-green-600' },
        { name: 'Medical', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', color: 'bg-red-50 text-red-600' },
        { name: 'Auditorium', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'bg-purple-50 text-purple-600' }
    ] : collegeId === 4 ? [
        { name: 'Advanced Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Digitized Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Sports Complex', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Modern Hostels', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'High-Speed WiFi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' },
        { name: 'Food Court', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-red-50 text-red-600' }
    ] : collegeId === 5 ? [
        { name: 'Advanced Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Central Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Sports Complex', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Modern Hostels', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'WiFi Campus', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' },
        { name: 'Cafeteria', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-red-50 text-red-600' }
    ] : collegeId === 6 ? [
        { name: 'Medical Hospital', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-3H8v-2h3V8h2v3h3v2h-3v3z', color: 'bg-red-50 text-red-600' },
        { name: 'Advanced Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Central Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Sports Complex', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Modern Hostels', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'Gymnasium', icon: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6H6v2h8V6zm4 0h-2v2h2V6zM4 16a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0H6v2h8v-2zm4 0h-2v2h2v-2z', color: 'bg-violet-50 text-violet-600' }
    ] : collegeId === 7 ? [
        { name: 'Training Kitchens', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-orange-50 text-orange-600' },
        { name: 'Agriculture Farms', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', color: 'bg-green-50 text-green-600' },
        { name: 'Computer Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Smart Classrooms', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' },
        { name: 'Cafeteria', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-red-50 text-red-600' }
    ] : collegeId === 8 ? [
        { name: 'Advanced WiFi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' },
        { name: 'Pharma Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Central Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Sports Complex', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Modern Hostels', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'Transport', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16v-1.5a2.5 2.5 0 00-2-2.32V11A2.5 2.5 0 008.5 8.5H7A2.5 2.5 0 004.5 11v1.18A2.5 2.5 0 002.5 14.5V16h10zM19.5 8.5H18A2.5 2.5 0 0015.5 11v1.18A2.5 2.5 0 0013.5 14.5V16h8v-1.5a2.5 2.5 0 00-2-2.32V11A2.5 2.5 0 0019.5 8.5z', color: 'bg-red-50 text-red-600' }
    ] : collegeId === 9 ? [
        { name: 'Computer Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Rich Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Yoga Center', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Science Labs', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', color: 'bg-purple-50 text-purple-600' },
        { name: 'Cafeteria', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-orange-50 text-orange-600' },
        { name: 'WiFi Campus', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-teal-50 text-teal-600' }
    ] : collegeId === 10 ? [
        { name: 'Herbal Garden', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', color: 'bg-green-50 text-green-600' },
        { name: 'Physiotherapy OPD', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', color: 'bg-blue-50 text-blue-600' },
        { name: 'Advanced Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-purple-50 text-purple-600' },
        { name: 'Central Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Hostels', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'Smart Classrooms', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-teal-50 text-teal-600' }
    ] : collegeId === 11 ? [
        { name: 'Digital Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Computer Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Cafeteria', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z', color: 'bg-green-50 text-green-600' },
        { name: 'Sports Complex', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-orange-50 text-orange-600' },
        { name: 'Modern Hostel', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-red-50 text-red-600' },
        { name: 'WiFi Campus', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' }
    ] : [
        { name: 'Smart Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Sports', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Hostel', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'WiFi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' },
        { name: 'Auditorium', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'bg-red-50 text-red-600' }
    ];

    const allImages = getSlideshowImages(collegeId);
    const heroImages = (collegeId === 1) ? allImages.slice(0, 4) : allImages;
    const galleryImages = (collegeId === 1) ? allImages.slice(4) : allImages;

    // Render Logic
    return (
        <div className="min-h-screen bg-light-primary font-sans text-text-primary selection:bg-brand-primary/10 selection:text-brand-primary pt-24 pb-20 relative">
            {/* Clean subtle background for content readability */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Very subtle grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="hidden">
                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="pillar-pattern" x="0" y="0" width="40" height="80" patternUnits="userSpaceOnUse">
                            {/* Simple Column Fluting */}
                            <path d="M10 0 V80 M20 0 V80 M30 0 V80" fill="none" stroke="#57534e" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pillar-pattern)" />
                </svg>

                {/* 2. Serene Campus Greenery Gradient (Bottom Fade) */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ecfccb]/20 to-transparent mix-blend-multiply"></div>

                {/* 3. Noble Blue Gradient (Top Fade) */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#e0e7ff]/30 to-transparent mix-blend-multiply"></div>

                {/* 4. Abstract "Ivy" Organic Shapes */}
                <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#dbeafe]/40 rounded-full blur-[80px] mix-blend-darken"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40rem] h-[40rem] bg-[#f1f5f9]/60 rounded-full blur-[80px] mix-blend-darken"></div>

                {/* 5. Paper Texture Overlay for "Real" Feel */}
                <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>
            </div>
            <div className="hidden">

                {/* 2. Abstract Geometric Composition */}
                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="blur-me" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
                        </filter>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fecaca" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#fee2e2" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    {/* Floating Shapes */}
                    <circle cx="10%" cy="10%" r="400" fill="url(#grad1)" filter="url(#blur-me)" />
                    <circle cx="90%" cy="50%" r="300" fill="url(#grad2)" filter="url(#blur-me)" />
                    <circle cx="20%" cy="90%" r="350" fill="#ccfbf1" fillOpacity="0.4" filter="url(#blur-me)" />
                </svg>

                {/* 3. Crisp Geometric Accents (Unblurred) */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.4]" xmlns="http://www.w3.org/2000/svg">
                    {/* Circle Outline */}
                    <circle cx="85%" cy="15%" r="150" fill="none" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="10 10" />

                    {/* Triangle Outline */}
                    <path d="M100 800 L300 500 L500 800 Z" fill="none" stroke="#f0f9ff" strokeWidth="2" transform="translate(-100, 100)" />

                    {/* Dotted Grid Cluster */}
                    <pattern id="dot-cluster" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#e5e7eb" />
                    </pattern>
                    <rect x="5%" y="40%" width="200" height="200" fill="url(#dot-cluster)" />
                </svg>

                {/* 4. Glass Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
            </div>
            <div className="hidden">
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#4338ca_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

                <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="college-icons" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            {/* Graduation Hat */}
                            <path d="M10 25 L40 10 L70 25 L40 40 L10 25 M70 25 V45" fill="none" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Open Book */}
                            <path d="M15 65 Q40 75 65 65 V50 Q40 60 15 50 Z" fill="none" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M40 70 V55" fill="none" stroke="#1e1b4b" strokeWidth="1.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#college-icons)" />
                </svg>

                {/* 2. Large Watermark Elements (Fixed corners) */}
                <svg className="absolute top-0 right-0 w-[500px] h-[500px] text-indigo-900/5 -translate-y-1/4 translate-x-1/4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>

                <svg className="absolute bottom-0 left-0 w-[600px] h-[600px] text-indigo-900/5 translate-y-1/4 -translate-x-1/4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>

                {/* 3. Warm Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-transparent to-orange-50/30 mix-blend-multiply"></div>
            </div>
            <div className="hidden">
                {/* Noise Texture for 'Printed' Tactile Feel (using inline SVG for safety) */}
                <div className="absolute inset-0 opacity-[0.6] mix-blend-overlay">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.15" />
                    </svg>
                </div>

                {/* Fluid Mesh Gradients */}
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-l from-rose-100/40 to-orange-100/40 blur-[90px] mix-blend-multiply"></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-blue-200/30 to-cyan-200/30 blur-[100px] mix-blend-multiply"></div>

                {/* Geometric Accents (Bauhaus style) */}
                <div className="absolute top-[15%] right-[10%] w-32 h-32 border border-gray-900/5 rounded-full z-0 opacity-60"></div>
                <div className="absolute top-[16%] right-[12%] w-16 h-16 bg-indigo-600/5 rounded-full z-0"></div>
                <div className="absolute bottom-[20%] left-[5%] w-64 h-64 border border-gray-900/5 rotate-45 z-0 opacity-40"></div>
            </div>

            {/* Content Wrapper ensures z-index above background */}
            <div className="relative z-10">

                {/* --- HEADER --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative mb-8">


                    <div className="text-center pt-2">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                            {college.name}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {college.location}
                        </div>
                    </div>
                </div>

                {/* --- HERO SECTION --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="grid lg:grid-cols-12 gap-6">
                        {/* Hero Slider */}
                        <div className="lg:col-span-8 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                            <CollegeHeroSlideshow images={heroImages} className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                        </div>

                        {/* Vertical Highlights Stack - Centered */}
                        <div className="lg:col-span-4 flex items-center">
                            <div className="w-full grid grid-cols-1 gap-3">
                                {highlights.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`bg-gradient-to-br ${item.color} bg-opacity-10 rounded-lg p-3 border-2 border-opacity-30 shadow-sm flex items-center gap-3 hover:shadow-lg transition-shadow duration-300 group`}
                                        style={{
                                            borderColor: idx === 0 ? '#3b82f6' : idx === 1 ? '#10b981' : idx === 2 ? '#f97316' : '#a855f7',
                                            animation: `float 3s ease-in-out infinite`,
                                            animationDelay: `${idx * 0.5}s`
                                        }}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.color} text-white shadow-md`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-gray-900 leading-tight">
                                                {item.value}
                                            </div>
                                            <div className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mt-0.5">
                                                {item.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MAIN CONTENT --- */}

                {/* 1. About Institute - Premium Clean Design with Full Width Background */}
                <section id="about" ref={aboutRef.ref} className={`py-16 bg-light-primary transition-all duration-700 ${aboutRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
                            <h2 className="text-xl font-bold text-text-primary mb-6">
                                About {college.name}
                            </h2>

                            <div className="space-y-6">
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    {college.bestPart || college.description || `Welcome to ${college.name}.`}
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    {college.description || `${college.name} is committed to providing world-class education with state-of-the-art facilities and experienced faculty members dedicated to student success.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Admission Enquiry Section */}
                <section ref={enquiryRef.ref} className={`py-12 bg-slate-50 transition-all duration-700 delay-100 ${enquiryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
                            <div className="grid grid-cols-1 md:grid-cols-12">
                                {/* Image Side */}
                                <div className="relative h-64 md:h-auto md:col-span-5">
                                    <img
                                        src={getAssetUrl('graphic era/image-3.jpg')}
                                        alt="Student Life"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white p-4">
                                        <h4 className="text-2xl font-bold mb-1 leading-tight text-white">Review Your Journey</h4>
                                        <p className="text-sm text-indigo-100 opacity-90">Unlock your potential with world-class education</p>
                                    </div>
                                </div>

                                {/* Form Side */}
                                <div className="md:col-span-7 p-6 md:p-8 bg-indigo-50 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Admissions Open 2026</h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Applications closing soon. Apply now to secure your seat.
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <button
                                            onClick={() => navigate('/apply')}
                                            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-base shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            Apply Now
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>



                                        <button
                                            onClick={() => navigate('/fees')}
                                            className="w-full py-3.5 rounded-xl bg-white border-2 border-indigo-100 text-indigo-600 font-bold text-sm hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Check Fees
                                        </button>


                                        <button
                                            onClick={() => window.open(getAssetUrl('graphic era/geu-brochure-2025-new-2.pdf'), '_blank')}
                                            className="w-full py-3.5 rounded-xl bg-white border-2 border-gray-100 text-gray-700 font-bold text-sm hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            Download Brochure
                                        </button>
                                    </div>

                                    {/* Social Proof */}
                                    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-indigo-50 flex items-center justify-center overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-white"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-bold text-gray-900 block">150+ students</span>
                                            <span className="text-gray-500 text-xs">counseling today</span>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-500 shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </div>
                                                <span className="text-sm text-gray-600 font-medium leading-relaxed">
                                                    566/6, Bell Road, Clement Town, Dehradun, Uttarakhand - 248002, Uttarakhand
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-500 shrink-0">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                </div>
                                                <span className="text-sm text-gray-900 font-bold">+91 7078964020</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Courses Section - Full Width Clean Background */}
                <section id="courses" ref={coursesRef.ref} className={`py-16 bg-light-primary transition-all duration-700 delay-100 ${coursesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-text-primary mb-2">Courses Offered</h2>
                            <p className="text-text-secondary">Explore our diverse range of undergraduate and postgraduate programs</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {courses.map((course, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className={`group relative rounded-xl border border-border bg-white hover:border-brand-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${coursesRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                            }`}
                                        style={{
                                            transitionDelay: `${idx * 30}ms`
                                        }}
                                    >
                                        <div className="p-4 flex items-center gap-3">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-xl">
                                                {course.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-text-primary line-clamp-1 mb-1">
                                                    {course.name}
                                                </h4>
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-3.5 h-3.5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-xs text-brand-primary font-medium">
                                                        {course.duration}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Infrastructure Section - Full Width Clean Background */}
                <section id="infrastructure" ref={infraRef.ref} className={`py-16 bg-slate-50 transition-all duration-700 delay-200 ${infraRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                            <h2 className="text-xl font-bold text-text-primary mb-8">World-Class Facilities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {facilities.map((fac, idx) => (
                                    <div
                                        key={idx}
                                        className={`group relative overflow-hidden rounded-xl border-2 ${fac.color.split(' ')[0].replace('bg-', 'border-').replace('-50', '-200')} ${fac.color.split(' ')[0]} hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${infraRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                            }`}
                                        style={{
                                            transitionDelay: `${idx * 60}ms`
                                        }}
                                    >
                                        <div className="p-5 flex flex-col items-center justify-center text-center h-32">
                                            <div className={`w-12 h-12 rounded-xl ${fac.color.split(' ')[0].replace('-50', '-100')} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                <svg className={`w-6 h-6 ${fac.color.split(' ')[1]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={fac.icon} />
                                                </svg>
                                            </div>
                                            <span className="text-xs md:text-sm font-bold text-gray-900 leading-tight">
                                                {fac.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                {
                    galleryImages && galleryImages.length > 0 && (
                        <section id="gallery" ref={galleryRef.ref} className={`py-16 bg-light-primary transition-all duration-700 delay-200 ${galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="max-w-5xl mx-auto px-6">
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                                    <h2 className="text-xl font-bold text-text-primary mb-6">Campus Gallery</h2>
                                    <CollegeGallery images={galleryImages} />
                                </div>
                            </div>
                        </section>
                    )
                }

            </div >
        </div >
    );
}

export default CollegeDetails;
