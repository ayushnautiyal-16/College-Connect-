import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collegesData } from '../../utils/collegesData';
import CollegeHeroSlideshow from '../../components/CollegeHeroSlideshow/CollegeHeroSlideshow';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CollegeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Parse ID safely
    const collegeId = id ? parseInt(id) : null;
    const college = collegeId ? collegesData.find(c => c.id === collegeId) : null;

    // Scroll animation hooks
    const overviewRef = useScrollAnimation({ threshold: 0.1 });
    const statsRef = useScrollAnimation({ threshold: 0.1 });
    const coursesRef = useScrollAnimation({ threshold: 0.1 });
    const placementsRef = useScrollAnimation({ threshold: 0.1 });
    const facilitiesRef = useScrollAnimation({ threshold: 0.1 });

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
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767115121/CvxECGJZ-gehu-dehradun-campus-jpg_khds89.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767381831/dit-university-dehradun-229162_ws0ck4.jpg'
            ],
            2: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767954779/1500x500_mtdnmx.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767381831/dit-university-dehradun-229162_ws0ck4.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767954774/Ge54DdyWsAADfss_lnui0u.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767954772/Gceo9oYXsAAhsfR_widqbr.jpg'
            ],
            3: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767953726/Deepa-Panday-Slider-2025-v3_wjgb2p.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767953731/Box-New-color_in8431.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767953729/15_yplf3g.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767031601/8_kpjirn.jpg'
            ],
            4: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767376541/desk-students_t0muq8.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767956998/FarlyNuVQAEvYsE_s99wgi.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767956994/FaHf3K7UIAIvEN0_ct1bgh.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767956977/FCmXjKUVcAQLMNz_htvnaz.jpg'
            ],
            5: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377026/dbuu-campus-webp-1_wdiaej.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377034/5_wazjsp.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377032/17_mjo5ao.webp',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377035/one_aw66o4.webp'
            ],
            6: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377576/section002-side-image_clige2.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377575/1750750305104_ffszrd.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377577/t7_uelxey.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377577/t5_keegcv.jpg'
            ]
        };
        return imageMap[collegeId] || [
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg',
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg'
        ];
    };

    const highlights = [
        { label: 'Established', value: collegeId === 1 ? '1993' : collegeId === 2 ? '1998' : collegeId === 3 ? '2013' : collegeId === 4 ? '2003' : collegeId === 5 ? '2005' : collegeId === 6 ? '2017' : (college.established || '1998'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-blue-500 to-cyan-400' },
        { label: 'Accreditation', value: collegeId === 1 ? 'NAAC A+' : collegeId === 2 ? 'UGC Approved' : collegeId === 3 ? 'NAAC A+' : collegeId === 4 ? 'NAAC A Grade' : collegeId === 5 ? 'NAAC A Grade' : collegeId === 6 ? 'NAAC A++' : (college.accreditation || 'NAAC A+'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-emerald-500 to-green-400' },
        { label: 'Campus Area', value: collegeId === 1 ? '30 Acres' : collegeId === 2 ? '23 Acres' : collegeId === 3 ? '70+ Acres' : collegeId === 4 ? '44 Acres' : collegeId === 5 ? '42 Acres' : collegeId === 6 ? '80+ Acres' : '40 Acres', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', color: 'from-orange-500 to-amber-400' },
        { label: 'Network', value: collegeId === 1 ? '50k+ Alum' : collegeId === 2 ? '10k+ Alum' : collegeId === 3 ? '20k+ Alum' : collegeId === 4 ? '22k+ Alum' : collegeId === 5 ? '22k+ Alum' : collegeId === 6 ? '18k+ Alum' : '15k+ Alum', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'from-purple-500 to-pink-400' }
    ];

    const courses = collegeId === 1 ? [
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

    const facilities = collegeId === 3 ? [
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
    ] : [
        { name: 'Smart Labs', icon: 'M9.75 17h4.5M9.75 17a2.25 2.25 0 01-2.25-2.25v-4.125a.75.75 0 01.164-.44l2.516-3.355a.75.75 0 00.07-.44V3h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.39c0 .156.024.309.07.44l2.516 3.355c.123.164.164.315.164.44V14.75A2.25 2.25 0 0114.25 17h-4.5z', color: 'bg-blue-50 text-blue-600' },
        { name: 'Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Sports', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
        { name: 'Hostel', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', color: 'bg-orange-50 text-orange-600' },
        { name: 'WiFi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', color: 'bg-purple-50 text-purple-600' },
        { name: 'Auditorium', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'bg-red-50 text-red-600' }
    ];

    const slideshowImages = getSlideshowImages(collegeId);

    // Render Logic
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* --- HERO SECTION --- */}
            <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
                <CollegeHeroSlideshow images={slideshowImages} className="absolute inset-0" />

                {/* Modern Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                {/* Back Navigation */}
                <div className="absolute top-8 left-6 md:left-12 z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all duration-300"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </div>

                {/* Hero Text Content */}
                <div className="absolute bottom-0 left-0 w-full z-10 px-6 md:px-12 pb-16">
                    <div className="container mx-auto">
                        <div className="max-w-4xl space-y-4 animate-fade-in-up">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30">
                                    {collegeId === 1 ? '★ 4.8/5 Rating' : collegeId === 2 ? '★ 4.0/5 Rating' : collegeId === 3 ? '★ 4.2/5 Rating' : collegeId === 4 ? '★ 4.1/5 Rating' : collegeId === 5 ? '★ 3.8/5 Rating' : collegeId === 6 ? '★ 3.9/5 Rating' : '★ Top Rated'}
                                </span>
                                {college.accreditation && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/20 backdrop-blur-md text-white border border-white/20">
                                        {collegeId === 2 ? 'UGC Approved' : collegeId === 3 ? 'NAAC A+' : collegeId === 4 ? 'NAAC A Grade' : collegeId === 5 ? 'NAAC A Grade' : collegeId === 6 ? 'NAAC A++ Grade' : college.accreditation} Accredited
                                    </span>
                                )}
                            </div>

                            {/* Title with Text Gradient Effect - Updated */}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none drop-shadow-2xl animate-page-enter">
                                {college.name}
                            </h1>

                            {/* Location & Meta */}
                            <div className="flex items-center gap-6 text-slate-200 text-lg">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>{collegeId === 6 ? 'Patel Nagar, Dehradun' : collegeId === 2 ? 'Mussoorie Diversion Road, Dehradun' : collegeId === 3 ? 'Premnagar, Dehradun' : collegeId === 4 ? 'Bidholi, Dehradun' : collegeId === 5 ? 'Chakrata Road, Dehradun' : college.location}</span>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                    <span>Est. {collegeId === 2 ? '1998' : collegeId === 3 ? '2013' : collegeId === 4 ? '2003' : collegeId === 5 ? '2005' : collegeId === 6 ? '2017' : (college.established || '1998')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT LAYOUT --- */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 -mt-10 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT MAIN CONTENT (8 Cols) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* 1. KEY HIGHLIGHTS (Floating Cards) */}
                        <div ref={statsRef.ref} className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${statsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
                            {highlights.map((item, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
                                    </div>
                                    <div className="text-2xl font-bold text-slate-800 tracking-tight">{item.value}</div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* 2. OVERVIEW / ABOUT */}
                        <section ref={overviewRef.ref} className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:shadow-2xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-500 ease-out ${overviewRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-100`}>
                            {/* Decorative Blur */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60 group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-1000"></div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Overview
                            </h2>

                            <div className="relative z-10">
                                <div className="prose prose-lg text-slate-600 leading-relaxed mb-8 transition-colors duration-300 group-hover:text-slate-700">
                                    <p>
                                        <span className="text-5xl float-left mr-3 mt-[-10px] font-serif text-indigo-500 opacity-20 animate-pulse">❝</span>
                                        {collegeId === 1 ? (
                                            <>
                                                Graphic Era Deemed to be University is the culmination of the vision of its founder, Prof (Dr) Kamal Ghanshala, who had the dream to change the destiny of thousands of youth through quality and holistic education.
                                                <br /><br />
                                                Established in 1993, the university has now metamorphosed into a global center of learning and is known for its academic excellence, world-class faculty, and state-of-the-art infrastructure. With a legacy spanning over three decades, Graphic Era has created a niche for itself in the field of technical and professional education.
                                            </>
                                        ) : collegeId === 2 ? (
                                            <>
                                                DIT University, formerly known as Dehradun Institute of Technology, was established in 1998 and has since evolved into a premier centre of excellence. Located in the serene foothills of Mussoorie, the university offers a sprawling 21-acre campus equipped with modern infrastructure and world-class facilities.
                                                <br /><br />
                                                Accredited with NAAC 'A' Grade and approved by UGC, DIT University is renowned for its holistic approach to education, combining rigorous academics with extensive industry exposure. With over 25 years of legacy, it continues to foster innovation, leadership, and professional growth among students from across the nation.
                                            </>
                                        ) : collegeId === 3 ? (
                                            <>
                                                Uttaranchal University, established in 2013, is a premier institution located in Dehradun, recognized for its commitment to academic excellence and research. It is the first university in Uttarakhand to be accredited with the prestigious NAAC A+ Grade in its very first cycle.
                                                <br /><br />
                                                With a focus on law, engineering, and management, the university offers a world-class learning environment with state-of-the-art infrastructure. Its rigorous curriculum, experienced faculty, and strong industry partnerships ensure students are well-prepared for global challenges, making it a preferred destination for higher education.
                                            </>
                                        ) : collegeId === 4 ? (
                                            <>
                                                UPES University, established in 2003 through the UPES Act, 2003, is a visionary institution located in Dehradun. Recognized by UGC and accredited with NAAC 'A' Grade, UPES is globally renowned for its specialized programs in Energy, Petroleum, Core Sectors, and Allied areas.
                                                <br /><br />
                                                With a 90%+ placement track record and partnerships with industry giants, UPES offers a unique blend of domain-focused education and practical learning. The university is dedicated to developing future leaders through its forward-thinking curriculum, world-class faculty, and vibrant campus life.
                                            </>
                                        ) : collegeId === 5 ? (
                                            <>
                                                Dev Bhoomi Uttarakhand University (DBUU), established in 2005 (formerly DBIT), is a premier self-governed institution spread across a 42-acre lush green campus in Dehradun. The university offers over 120+ programs across Engineering, Management, Pharmacy, and other disciplines.
                                                <br /><br />
                                                Accredited AND recognized by UGC, PCI, and AICTE, DBUU focuses on creating industry-ready professionals. With its advanced "Corporate Resource Centre," the university ensures robust industry interfaces and consistent placement success, making it a top choice for students in the region.
                                            </>
                                        ) : collegeId === 6 ? (
                                            <>
                                                Shri Guru Ram Rai University (SGRRU), established in 2017 in Dehradun, Uttarakhand, by Shri Mahant Devendra Dass Ji Maharaj, is a premier 82.5-acre private university offering over 125 programs across 11 schools, including Medicine, Nursing, Agriculture, and Management.
                                                <br /><br />
                                                Recognized by the UGC and accredited by bodies like ICAR, NMC, and INC, SGRRU provides a research-driven environment focused on value-based education.
                                            </>
                                        ) : (
                                            college.description || `Welcome to ${college.name}, a center of academic excellence and holistic development. Our institution stands as a beacon of knowledge, fostering innovation and leadership in every student. With world-class faculty and state-of-the-art infrastructure, we ensure a transformative learning experience.`
                                        )}
                                    </p>
                                </div>

                                {/* Animated Stats/Badges within Overview */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                                    {[
                                        { label: 'Ranking', value: collegeId === 1 ? 'NIRF Rank 52' : collegeId === 2 ? 'NAAC A Grade' : collegeId === 3 ? 'NAAC A+ Grade' : collegeId === 4 ? 'NAAC A Grade' : collegeId === 5 ? 'NAAC A Grade' : collegeId === 6 ? 'NAAC A++ Grade' : 'Top 100 NIRF', sub: 'Accreditation', icon: '🏆' },
                                        { label: 'Legacy', value: collegeId === 1 ? '30+ Years' : collegeId === 2 ? '25+ Years' : collegeId === 3 ? '10+ Years' : collegeId === 4 ? '20+ Years' : collegeId === 5 ? '19+ Years' : collegeId === 6 ? '70+ Years' : '30+ Years', sub: 'Of Eminence', icon: '🏛️' },
                                        { label: 'Global', value: collegeId === 1 ? '50k+ Alumni Network' : collegeId === 2 ? '10k+ Alumni Network' : collegeId === 3 ? '20k+ Alumni Network' : collegeId === 4 ? '22k+ Alumni Network' : collegeId === 5 ? '22k+ Alumni Network' : collegeId === 6 ? '18k+ Alumni Network' : 'Alumni Network', sub: 'Spread across 50+ Nations', icon: '🌍' }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-transparent hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group/stat">
                                            <div className="text-3xl filter drop-shadow-sm group-hover/stat:scale-110 transition-transform duration-300">{stat.icon}</div>
                                            <div>
                                                <div className="font-bold text-slate-800 text-sm group-hover/stat:text-indigo-900 transition-colors">{stat.value}</div>
                                                <div className="text-xs text-slate-400 font-medium group-hover/stat:text-indigo-500 transition-colors">{stat.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. PLACEMENTS (Premium Dark Card) */}
                        <section ref={placementsRef.ref} className={`relative rounded-3xl overflow-hidden p-8 text-white shadow-2xl shadow-indigo-900/20 ${placementsRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700 delay-200`}>
                            {/* Dark Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"></div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4">
                                        Placement Success
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">Launch Your Career With Industry Giants</h2>
                                    <p className="text-indigo-200/80 mb-8">Our students regularly secure top-tier positions at Fortune 500 companies with record-breaking packages.</p>

                                    <div className="flex flex-wrap gap-4">
                                        {(collegeId === 1 ? ['Google', 'Flipkart', 'Adobe', 'Amazon', 'Microsoft', 'TVS'] : collegeId === 2 ? ['Palo Alto', 'Adobe', 'Commvault', 'Amazon', 'Microsoft', 'Infosys'] : collegeId === 3 ? ['Google', 'Wipro', 'Amazon', 'Deloitte', 'TCS', 'Microsoft'] : collegeId === 4 ? ['ExxonMobil', 'Amazon', 'Microsoft', 'Shell', 'ONGC', 'Halliburton'] : collegeId === 5 ? ['Adobe', 'TCS', 'Wipro', 'IBM', 'HDFC Bank', 'Amazon'] : collegeId === 6 ? ['Accenture', 'Infosys', 'Wipro', 'Deloitte', 'HCL', 'ICICI Bank'] : ['Google', 'Microsoft', 'Amazon', 'Adobe']).map(company => (
                                            <span key={company} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transform transition-transform hover:scale-[1.02]">
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm text-indigo-200 uppercase tracking-wide">Highest Package</p>
                                            <div className="text-4xl lg:text-5xl font-bold text-white mt-1">
                                                ₹ {collegeId === 1 ? '54.03' : collegeId === 2 ? '58.00' : collegeId === 3 ? '1.50' : collegeId === 4 ? '50.00' : collegeId === 5 ? '40.00' : collegeId === 6 ? '12.00' : '54.80'} <span className="text-2xl text-indigo-300">{collegeId === 3 ? 'Cr' : 'LPA'}</span>
                                            </div>
                                        </div>
                                        <div className="h-px bg-white/10"></div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs text-indigo-200 uppercase">Average Package</p>
                                                <p className="text-xl font-bold">₹ {collegeId === 1 ? '6.42' : collegeId === 2 ? '5.80' : collegeId === 3 ? '11.00' : collegeId === 4 ? '7.02' : collegeId === 5 ? '5.50' : collegeId === 6 ? '4.00' : '8.50'} LPA</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-indigo-200 uppercase">Total Offers</p>
                                                <p className="text-xl font-bold">{collegeId === 1 ? '3,500+' : collegeId === 2 ? '1,450+' : collegeId === 3 ? '2,350+' : collegeId === 4 ? '2,482+' : collegeId === 5 ? '14,500+' : collegeId === 6 ? '300+' : '2,500+'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. COURSES OFFERED */}
                        <section ref={coursesRef.ref} className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 ${coursesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-100 text-pink-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </span>
                                Courses Offered
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {courses.map((course, idx) => (
                                    <div key={idx} className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all duration-300 cursor-default">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                                                {course.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{course.name}</h3>
                                                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Full Time • On Campus</p>
                                            </div>
                                        </div>
                                        <div className="text-right pl-2">
                                            <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Duration</span>
                                            <span className="inline-block px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold border border-indigo-100">
                                                {course.duration}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. FACILITIES (Bento Grid) */}
                        {/* 5. FACILITIES (Premium Interactive Grid) */}
                        <section ref={facilitiesRef.ref} className={`space-y-8 ${facilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-400`}>
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 shadow-sm shadow-emerald-200">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </span>
                                    <span>World-Class Infrastructure</span>
                                </h2>
                                <span className="hidden md:block text-xs font-semibold tracking-wider text-slate-400 uppercase">State-of-the-Art Facilities</span>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                                {facilities.map((fac, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative h-40 rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all duration-500 ease-out cursor-default"
                                    >
                                        {/* Hover Gradient Background */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${fac.color.replace('text-', 'from-').replace('600', '50/50')} to-white pointer-events-none`}></div>

                                        {/* Decorative Circle */}
                                        <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${fac.color.replace('text-', 'bg-').replace('600', '100')} opacity-20 group-hover:scale-[2.5] transition-transform duration-700 ease-in-out`}></div>

                                        <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
                                            {/* Icon */}
                                            <div className={`mb-3 p-3 rounded-2xl bg-slate-50 group-hover:bg-white group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 ${fac.color}`}>
                                                <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={fac.icon} />
                                                </svg>
                                            </div>

                                            {/* Text */}
                                            <h3 className="text-base font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{fac.name}</h3>
                                            <div className="w-0 group-hover:w-1/2 h-0.5 mt-2 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-all duration-500 text-indigo-500"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT SIDEBAR (4 Cols) - Sticky */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="sticky top-24 space-y-6">

                            {/* Apply Now Card (Glassmorphic) */}
                            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-indigo-100 border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">Admissions Open 2026</h3>
                                <p className="text-sm text-slate-500 mb-6">Applications are filling fast. Secure your spot at {college.name} today.</p>

                                <button
                                    onClick={() => navigate('/apply')}
                                    className="w-full py-4 rounded-xl bg-[#4338CA] text-white font-bold text-lg hover:bg-[#3730a3] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-500/20 mb-3 flex items-center justify-center gap-2"
                                >
                                    <span>Apply Now</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>

                                <button
                                    onClick={() => window.open('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767117750/geu-brochure-2025-new-2_11zon_aalytr.pdf', '_blank')}
                                    className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-700 font-bold hover:border-slate-200 hover:bg-slate-50 transition-all duration-200"
                                >
                                    Download Brochure
                                </button>

                                <div className="mt-6 flex items-center justify-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                        ))}
                                    </div>
                                    <span className="text-xs text-slate-500 font-medium ml-1">200+ applied this week</span>
                                </div>
                            </div>

                            {/* Contact Info Widget */}
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Contact Details</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mt-0.5 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <span className="text-sm text-slate-600 leading-snug">
                                            {collegeId === 6 ? 'Patel Nagar, Dehradun, Uttarakhand 248001' : `${college.location}, Uttarakhand 248002`}
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <span className="text-sm text-slate-600">+91 7078964020</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CollegeDetails;
