import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collegesData } from '../../utils/collegesData';
import CollegeHeroSlideshow from '../../components/CollegeHeroSlideshow/CollegeHeroSlideshow';
import CollegeGallery from '../../components/CollegeGallery/CollegeGallery';
import useScrollAnimation from '../../hooks/useScrollAnimation';

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
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1767377577/t5_keegcv.jpg'
            ],
            7: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245387/Himalayan_Institute_of_Technology_Campus_Entry_Gate_fzzkly.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245240/slider-1_jagmt4.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245236/slider-5_us5lez.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768245229/sddefault_oe0ias.webp'
            ],
            8: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246250/3-0x0_ktdjzr.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246223/img-slide-2_gwrz2i.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246235/1-0x0_wolccq.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246252/2-0x0_ospmps.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768246248/img-slide-3_m1nflh.jpg',
            ],
            9: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247105/Copy-of-Untitled-1_a3cfou.png', // Placeholder, user will likely provide specific slider images later.
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247096/4-1_q8sqd2.png',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247094/Untitled-design-100_ncsqlb.png',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768247091/dd-college1_kujwjv.jpg'
                // Generic backup
            ],
            10: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328238/sbsu_gallery_0097_q8g1mb.jpg', // Placeholder
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328234/sbsu_gallery_0133_g97bky.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328237/sbsu_gallery_0092_fir2rb.jpg',
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328236/sbsu_gallery_0096_gbelvc.jpg'
            ],
            11: [
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1768328238/sbsu_gallery_0097_q8g1mb.jpg', // Using generic/college placeholder
                'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg'
            ]
        };
        return imageMap[collegeId] || [
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948328/grafest-day-third-1_dqyeno.jpg',
            'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766948329/grafest-day-one-7_iczpwg.jpg'
        ];
    };

    const highlights = [
        { label: 'Established', value: collegeId === 1 ? '1993' : collegeId === 2 ? '1998' : collegeId === 3 ? '2013' : collegeId === 4 ? '2003' : collegeId === 5 ? '2005' : collegeId === 6 ? '2017' : collegeId === 7 ? '2001' : collegeId === 8 ? '1989' : collegeId === 9 ? '2008' : collegeId === 10 ? '1994' : collegeId === 11 ? '2002' : (college.established || '1998'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-blue-500 to-cyan-400' },
        { label: 'Accreditation', value: collegeId === 1 ? 'NAAC A+' : collegeId === 2 ? 'UGC Approved' : collegeId === 3 ? 'NAAC A+' : collegeId === 4 ? 'NAAC A Grade' : collegeId === 5 ? 'NAAC A Grade' : collegeId === 6 ? 'NAAC A++' : collegeId === 7 ? 'UGC Recog.' : collegeId === 8 ? 'AICTE Appr.' : collegeId === 9 ? 'NAAC Assessed' : collegeId === 10 ? 'NAAC Accredited' : collegeId === 11 ? 'NAAC Accredited' : (college.accreditation || 'NAAC A+'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-emerald-500 to-green-400' },
        { label: 'Campus Area', value: collegeId === 1 ? '30 Acres' : collegeId === 2 ? '23 Acres' : collegeId === 3 ? '70+ Acres' : collegeId === 4 ? '44 Acres' : collegeId === 5 ? '42 Acres' : collegeId === 6 ? '80+ Acres' : collegeId === 7 ? '5 Acres' : collegeId === 8 ? '14 Acres' : collegeId === 9 ? '1.5 Acres' : collegeId === 10 ? '25 Acres' : collegeId === 11 ? '3 Acres' : '40 Acres', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', color: 'from-orange-500 to-amber-400' },
        { label: 'Network', value: collegeId === 1 ? '50k+ Alum' : collegeId === 2 ? '10k+ Alum' : collegeId === 3 ? '20k+ Alum' : collegeId === 4 ? '22k+ Alum' : collegeId === 5 ? '22k+ Alum' : collegeId === 6 ? '18k+ Alum' : collegeId === 7 ? '10k+ Alum' : collegeId === 8 ? '15k+ Alum' : collegeId === 9 ? '10k+ Alum' : collegeId === 10 ? '15k+ Alum' : collegeId === 11 ? '10k+ Alum' : '15k+ Alum', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'from-purple-500 to-pink-400' }
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

    const slideshowImages = getSlideshowImages(collegeId);

    // Render Logic
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* --- HEADER SECTION --- */}
            <div className="container mx-auto px-4 pt-4 pb-6 animate-fade-in-down">
                <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all duration-300 mb-3"
                >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    <span className="text-xs font-bold uppercase tracking-wider">Back</span>
                </button>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 bg-clip-text text-transparent mb-1.5 tracking-tight animate-fade-in-up">
                            {college.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm md:text-base font-medium animate-fade-in-up delay-100">
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                {college.location}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- HERO GRID --- */}
            <div className="container mx-auto px-4 mb-16 animate-fade-in-up">
                <div className="grid lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                    {/* 1. HERO SLIDER */}
                    <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100 relative group h-[300px] lg:h-full">
                        <CollegeHeroSlideshow images={slideshowImages} className="transform transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-6 left-6 text-white z-10 hidden md:block">
                            <p className="text-lg font-medium opacity-90">Experience the Campus</p>
                        </div>
                    </div>

                    {/* 2. KEY HIGHLIGHTS GRID */}
                    <div className="lg:col-span-1 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6 px-1">
                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Key Highlights</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-grow h-full">
                            {/* Card 1: Established */}
                            <div className="bg-orange-50/80 rounded-3xl p-4 shadow-lg shadow-orange-100/50 border border-orange-100 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full min-h-[130px]">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-full blur-2xl -mr-6 -mt-6"></div>
                                <div className="w-10 h-10 rounded-full bg-white text-orange-500 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-orange-900 relative z-10">
                                    {college.established || 'N/A'}
                                </div>
                                <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mt-1 relative z-10">Established</div>
                            </div>

                            {/* Card 2: Accreditation */}
                            <div className="bg-emerald-50/80 rounded-3xl p-4 shadow-lg shadow-emerald-100/50 border border-emerald-100 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full min-h-[130px]">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-full blur-2xl -mr-6 -mt-6"></div>
                                <div className="w-10 h-10 rounded-full bg-white text-emerald-500 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                                </div>
                                <div className="text-lg md:text-xl font-bold text-emerald-900 leading-tight px-1 relative z-10">
                                    {college.accreditation ? college.accreditation.split('|')[0].trim() : 'Approved'}
                                </div>
                                <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1 relative z-10">Accredited</div>
                            </div>

                            {/* Card 3: Campus Size */}
                            <div className="bg-blue-50/80 rounded-3xl p-4 shadow-lg shadow-blue-100/50 border border-blue-100 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full min-h-[130px]">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-full blur-2xl -mr-6 -mt-6"></div>
                                <div className="w-10 h-10 rounded-full bg-white text-blue-500 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <div className="text-lg md:text-xl font-bold text-blue-900 relative z-10">
                                    {college.campusSize || 'Large Campus'}
                                </div>
                                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1 relative z-10">Campus Size</div>
                            </div>

                            {/* Card 4: Placement Rate */}
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-4 shadow-lg shadow-indigo-200 flex flex-col justify-center items-center text-center text-white group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full min-h-[130px]">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform relative z-10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div className="text-xl md:text-2xl font-bold relative z-10">
                                    {college.placementRate || 'Excellent'}
                                </div>
                                <div className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1 relative z-10">Placements</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT LAYOUT --- */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT MAIN CONTENT (8 Cols) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* --- VERTICAL SECTIONS --- */}
                        <div className="space-y-20 relative">

                            {/* Decorative Line (Optional side accent) */}
                            <div className="hidden lg:block absolute left-[-24px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-200/50 to-indigo-500/0"></div>

                            {/* 1. ABOUT SECTION */}
                            <div id="about" className="scroll-mt-48 space-y-8">
                                <section
                                    ref={aboutRef.ref}
                                    className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:shadow-2xl hover:border-indigo-100 transition-all duration-700 transform ${aboutRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60 group-hover:bg-indigo-100 transition-all duration-1000"></div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </span>
                                        About {college.name}
                                    </h2>
                                    <div className="relative z-10 prose prose-lg text-slate-600 leading-relaxed mb-8">
                                        <p>
                                            <span className="text-5xl float-left mr-3 mt-[-10px] font-serif text-indigo-500 opacity-20">❝</span>
                                            {college.bestPart || college.description || `Welcome to ${college.name}.`}
                                        </p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                                        {[
                                            { label: 'Ranking', value: collegeId === 1 ? 'NIRF Rank 52' : collegeId === 11 ? 'NAAC Accredited' : 'Top Rated', sub: 'Accreditation', icon: '🏆' },
                                            { label: 'Legacy', value: collegeId === 1 ? '30+ Years' : collegeId === 11 ? '22+ Years' : '20+ Years', sub: 'Of Eminence', icon: '🏛️' },
                                            { label: 'Global', value: collegeId === 1 ? '50k+ Alum' : collegeId === 11 ? '10k+ Alum' : 'Alumni Network', sub: 'Worldwide', icon: '🌍' }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-transparent hover:bg-slate-50 transition-colors">
                                                <div className="text-3xl filter-none opacity-100 placeholder:opacity-100">{stat.icon}</div>
                                                <div>
                                                    <div className="font-bold text-slate-800 text-sm">{stat.value}</div>
                                                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>


                            {/* 2. PLACEMENT SUCCESS */}
                            <div id="placement-success" className="scroll-mt-36">
                                <section
                                    ref={placementRef.ref}
                                    className={`bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl overflow-hidden relative transition-all duration-700 transform ${placementRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    {/* Abstract shapes bg */}
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-20 -ml-16 -mb-16"></div>

                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        </span>
                                        Placement Success
                                    </h2>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                                        <div className="space-y-6">
                                            <p className="text-indigo-200/80 mb-8">Our students regularly secure top-tier positions at Fortune 500 companies.</p>
                                            <div className="flex flex-wrap gap-3">
                                                {(collegeId === 11 ? ['Infosys', 'Wipro', 'HCL', 'Amazon', 'Genpact', 'Deloitte'] : ['Google', 'Amazon', 'Microsoft', 'Adobe', 'TCS']).map(company => (
                                                    <span key={company} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">{company}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform transition-transform hover:scale-[1.02]">
                                            <div className="mb-6">
                                                <p className="text-sm text-indigo-200 uppercase tracking-wide">Highest Package</p>
                                                <div className="text-5xl font-bold text-white mt-2">₹ {collegeId === 11 ? '15.00' : '54.03'} <span className="text-2xl text-indigo-300">LPA</span></div>
                                            </div>
                                            <div className="h-px bg-white/10 mb-6"></div>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="text-xs text-indigo-200 uppercase">Avg Package</p>
                                                    <p className="text-xl font-bold">₹ {collegeId === 11 ? '4.00' : '6.42'} LPA</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-indigo-200 uppercase">Total Offers</p>
                                                    <p className="text-xl font-bold">{collegeId === 11 ? '500+' : '3,500+'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* 3. COURSES OFFERED */}
                            <div id="courses-offered" className="scroll-mt-36">
                                <section
                                    ref={coursesRef.ref}
                                    className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-700 transform ${coursesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-100 text-pink-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                        </span>
                                        Courses Offered
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {courses.map((course, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all duration-300">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-xl">{course.icon}</div>
                                                    <div>
                                                        <h3 className="text-sm font-bold text-slate-800">{course.name}</h3>
                                                        <p className="text-[10px] text-slate-500 font-medium">Full Time • On Campus</p>
                                                    </div>
                                                </div>
                                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold border border-indigo-100">{course.duration}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* 4. INFRASTRUCTURE & FACILITIES */}
                            <div id="infrastructure-facilities" className="scroll-mt-36">
                                <section
                                    ref={infraRef.ref}
                                    className={`space-y-8 transition-all duration-700 transform ${infraRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                            </span>
                                            <span>World-Class Infrastructure</span>
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                                        {facilities.map((fac, idx) => (
                                            <div key={idx} className="group relative h-40 rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all duration-500">
                                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${fac.color.replace('text-', 'from-').replace('600', '50/50')} to-white`}></div>
                                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
                                                    <div className={`mb-3 p-3 rounded-2xl bg-slate-50 group-hover:bg-white ${fac.color} transition-colors`}>
                                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={fac.icon} /></svg>
                                                    </div>
                                                    <h3 className="text-base font-bold text-slate-700 group-hover:text-slate-900">{fac.name}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* 5. CAMPUS LIFE */}
                            <div id="campus-life" className="scroll-mt-36">
                                <section
                                    ref={galleryRef.ref}
                                    className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-700 transform ${galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </span>
                                        Campus Life & Gallery
                                    </h2>
                                    <CollegeGallery images={slideshowImages} />
                                </section>
                            </div>
                        </div>

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
                                            {college.location}, Uttarakhand
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
