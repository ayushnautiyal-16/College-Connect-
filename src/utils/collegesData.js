import { getAssetUrl } from './assets';

export const collegesData = [
    {
        id: 1,
        name: 'Graphic Era University',
        logo: getAssetUrl('graphic era/col_14360.jpg'),
        logoBgColor: '#374151',
        location: '566/6, Bell Road, Clement Town, Dehradun, Uttarakhand - 248002',
        established: '1993',
        accreditation: 'NAAC A+ Grade | NBA Accredited | UGC Recognized',

        // Enhanced: Rankings
        rankings: {
            nirf: 'Band 151-200 (Engineering) 2023',
            state: 'Top 3 in Uttarakhand',
            qs: 'QS I-Gauge Diamond Rated',
            other: 'Times Higher Education Impact Rankings participant'
        },

        description: 'Graphic Era (Deemed to be University), is the highest ranked Deemed University in Uttarakhand.',

        // Enhanced: Detailed About
        about: {
            mission: 'To provide quality education, foster innovation, and develop industry-ready professionals with strong ethical values.',
            vision: 'To be a globally recognized institution creating leaders who shape the future through knowledge and innovation.',
            keyAchievements: [
                'NAAC A+ Grade accreditation',
                '50,000+ alumni network worldwide',
                'MOUs with 200+ international universities',
                'Highest package: ₹54.03 LPA (2023)',
                'Innovation Hub with 100+ patents filed'
            ],
            notableAlumni: [
                'Working in Google, Microsoft, Amazon, Adobe',
                'Entrepreneurs with successful startups',
                'Government officials and policy makers'
            ]
        },

        // Enhanced: Comprehensive Course List (15+)
        courses: [
            'B.Tech (CSE, ME, ECE, Civil, EE)',
            'B.Tech (AI & ML, Cyber Security, Data Science)',
            'MBA (Marketing, Finance, HR, Operations)',
            'MCA',
            'M.Tech (CSE, ME, ECE)',
            'BBA',
            'BCA',
            'B.Sc (IT, Agriculture, Microbiology)',
            'B.Sc (Nursing, Biotechnology)',
            'B.Com (Hons)',
            'BA (Journalism & Mass Communication)',
            'B.Pharma',
            'D.Pharma',
            'BHM (Hotel Management)',
            'B.Des (Fashion, Interior)',
            'LLB / BA LLB (Hons)',
            'Ph.D (Engineering, Management, Sciences)'
        ],

        collegeType: 'Deemed-to-be University',
        campusSize: '30+ Acres',

        // Enhanced: Detailed Placement Information
        placements: {
            placementRate: '94%',
            averagePackage: '₹5-8 LPA',
            highestPackage: '₹54.03 LPA',
            medianPackage: '₹4.5 LPA',
            topRecruiters: [
                'Microsoft', 'Amazon', 'Google', 'Adobe',
                'Infosys', 'TCS', 'Wipro', 'Cognizant',
                'Deloitte', 'PwC', 'KPMG', 'EY',
                'Capgemini', 'Tech Mahindra', 'HCL'
            ],
            sectorWise: {
                it: '65%',
                core: '15%',
                management: '10%',
                others: '10%'
            }
        },

        // Enhanced: Comprehensive Facilities List
        facilities: [
            'Central Library with 1,00,000+ books',
            'Digital Library & E-Resources',
            'State-of-the-art Computer Labs',
            'Advanced Engineering Laboratories',
            'Research & Development Centers',
            'Separate Boys & Girls Hostels',
            'Multi-cuisine Cafeteria',
            '24/7 Medical Facility',
            'Sports Complex (Indoor & Outdoor)',
            'Gymnasium & Fitness Center',
            'Auditorium (1000+ capacity)',
            'Seminar Halls & Conference Rooms',
            'High-speed WiFi Campus',
            'Banking & ATM Facilities',
            'Transportation Services',
            'Entrepreneurship Cell',
            'Innovation & Incubation Center',
            'Placement Training Center'
        ],

        bestKnownFor: 'Exceptional placements, NAAC A+ accreditation, and robust research infrastructure',
        mainCourses: ['B.Tech CSE', 'B.Tech AI & ML', 'MBA', 'BCA', 'M.Tech', 'B.Pharma', 'B.Sc IT', 'Ph.D'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science & Engineering',
                description: 'Flagship program with specializations in AI, ML, Cyber Security, and Data Science. Highest placement record with packages up to ₹54 LPA.'
            },
            {
                name: 'MBA (Master of Business Administration)',
                description: 'Industry-integrated curriculum with dual specialization options and exposure to global business practices. Strong corporate connections.'
            },
            {
                name: 'B.Sc Information Technology',
                description: 'Practical-focused IT program bridging the gap between academic concepts and industry needs with hands-on training.'
            }
        ],
        bestPart: 'Graphic Era University (Est. 1993) is a landmark of higher education in Uttarakhand with NAAC A+ Grade accreditation. Renowned for unmatchable placement records (94% placement rate), the university has placed students in top companies like Microsoft, Google, and Amazon. With 50,000+ global alumni, world-class infrastructure, high-tech labs, and vibrant campus life featuring tech fests and celebrity events, GEU provides a perfect blend of academic excellence and holistic development.'
    },
    {
        id: 2,
        name: 'DIT University',
        logo: getAssetUrl('DIT/DIT_University_image_39602.avif'),
        logoBgColor: '#030C1E',
        location: 'Mussoorie Diversion Road, Makka Wala, Dehradun',
        established: '1998',
        accreditation: 'NAAC A Grade | NBA | UGC Approved | COA',

        // Enhanced: Rankings
        rankings: {
            nirf: 'Ranked 201-300 (Engineering) | #81 (Pharmacy) 2024',
            qs: 'QS I-Gauge Diamond Rated',
            other: 'Top 10 Engineering Colleges in North India'
        },

        description: 'A distinguished center of higher learning known for its academic excellence, pro-active industry collaborations, and holistic development.',

        // Enhanced: Detailed About
        about: {
            mission: 'To provide high-quality education that empowers students to achieve their full potential and contribute to societal development.',
            vision: 'To be a globally recognized university that leads in academic excellence, research innovation, and societal transformation.',
            keyAchievements: [
                'Excellent placement record of 90%+',
                'Collaborations with 70+ International Universities',
                'Center of Excellence in AI & Robotics',
                'VEDA - One of the best libraries in North India'
            ],
            notableAlumni: [
                'Successful Entrepreneurs',
                'Senior Engineers at Microsoft & Google',
                'Defense Officers'
            ]
        },

        courses: ['B.Tech', 'B.Arch', 'B.Pharma', 'MBA', 'B.Des', 'BCA', 'B.Sc'],
        collegeType: 'Private University',
        campusSize: '21 Acres',

        // Enhanced: Placements
        placements: {
            placementRate: '90%',
            averagePackage: '₹5.76 LPA',
            highestPackage: '₹44.00 LPA',
            topRecruiters: [
                'Zscaler', 'Adobe', 'Amazon', 'Trilogy',
                'Commvault', 'Morgan Stanley', 'Cognizant', 'Infosys'
            ]
        },

        // Enhanced: Facilities
        facilities: [
            'VEDA - Central Library with 1.2L+ books',
            'High-Performance Computing Lab',
            'Separate Hostels with 1200+ capacity',
            'Gymnasium "Shakti" & Sports Complex',
            'On-campus Infirmary with 24/7 Ambulance',
            'Smart Classrooms & Amphitheater',
            'Cafeteria & Food Court'
        ],

        bestKnownFor: 'Holistic education, architectural excellence, and strong industry linkages',
        mainCourses: ['B.Tech CSE', 'B.Arch', 'B.Pharma', 'MBA', 'B.Des', 'BCA', 'BA (Hons)', 'M.Tech'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Rigorous engineering curriculum with minors in Robotics, Data Science, and IoT.'
            },
            {
                name: 'B.Arch',
                description: 'Top-tier architecture program approved by COA, focusing on sustainable design.'
            },
            {
                name: 'B.Pharma',
                description: 'Research-driven pharmacy course with state-of-the-art labs and hospital training.'
            }
        ],
        bestPart: 'DIT University (Est. 1998) stands as a beacon of quality education in the Himalayas. With NIRF 2024 ranking in the 201-300 band for Engineering and #81 for Pharmacy, it proves its academic mettle. The 21-acre campus features the iconic VEDA library and advanced labs. Placements are robust with the highest package reaching ₹44 LPA and top recruiters like Adobe and Zscaler visiting regularly.'
    },
    {
        id: 3,
        name: 'Uttaranchal University',
        logo: getAssetUrl('uttaranchal/uu-infra-campus.png'),
        logoBgColor: '#ffffff',
        location: 'Arcadia Grant, P.O. Chandanwari, Premnagar, Dehradun',
        established: '2013',
        accreditation: 'NAAC A+ Grade | UGC | BCI | ICAR',

        rankings: {
            nirf: 'Ranked #75 (Pharmacy) | 201-300 (Engineering) 2025',
            other: 'Ranked #39 (Law) by India Today 2023'
        },

        description: 'The first private university in Uttarakhand to receive NAAC A+ Grade in its first cycle.',

        about: {
            mission: 'To provide a transformative educational experience through quality teaching, research, and innovation.',
            vision: 'To be a world-class university fostering creativity, entrepreneurship, and humanistic values.',
            keyAchievements: [
                'NAAC A+ Grade Accreditation',
                'Highest International Package: ₹1.24 Cr',
                'National Moot Court Competition Winners',
                'ICAR Accreditation for Agriculture'
            ]
        },

        courses: ['B.Tech', 'B.A. LL.B', 'MBA', 'B.Sc Agriculture', 'BCA'],
        collegeType: 'Private University',
        campusSize: '70 Acres',

        placements: {
            placementRate: '85%',
            averagePackage: '₹4.5 - 6 LPA',
            highestPackage: '₹1.24 Cr (Intl) | ₹40.5 LPA (Dom)',
            topRecruiters: [
                'Trident', 'Hitachi', 'Virtusa', 'Google',
                'Deloitte', 'Decathlon', 'Amazon'
            ]
        },

        facilities: [
            'Lush Green 70-Acre Campus',
            'Central Library with 1.25L+ books',
            'Moot Court for Law Students',
            'Agricultural Farms & Poly-houses',
            'Food Court & Cafeterias',
            'On-campus ATM & Medical Facilities',
            'Separate Hostels'
        ],

        bestKnownFor: 'Law, Engineering, and Management programs with NAAC A+ quality assurance',
        mainCourses: ['B.Tech CSE', 'B.A. LL.B (Hons)', 'MBA', 'B.Sc Agriculture', 'BCA', 'BBA', 'M.Sc'],
        bestCourses: [
            {
                name: 'B.A. LL.B (Hons)',
                description: 'Prestigious law school with moot courts, legal aid clinics, and high judicial success rate.'
            },
            {
                name: 'B.Tech Computer Science',
                description: 'Advanced curriculum with industry collaborations (Google, IBM) and innovation labs.'
            },
            {
                name: 'B.Sc Agriculture',
                description: 'Practical-intensive course with organic farms and poly-house training facilities, ICAR accredited.'
            }
        ],
        bestPart: 'Uttaranchal University is a hub of academic excellence, being the first in the state to achieve NAAC A+ grade in its maiden cycle. Known for its rigorous academic discipline and lush green 70-acre campus, it offers placements with a highest domestic package of ₹ 40.50 LPA and international offers up to ₹ 1.24 Cr. The university hosts vibrant cultural fests and national level seminars, ensuring complete personality development.'
    },
    {
        id: 4,
        name: 'University of Petroleum and Energy Studies (UPES)',
        logo: getAssetUrl('UPES/IMG-20251230-WA0013(5).webp'),
        logoBgColor: '#ffffff',
        location: 'Energy Acres, Bidholi, Dehradun',
        established: '2003',
        accreditation: 'NAAC A Grade | QS 5 Star | NBA | IACBE',

        rankings: {
            nirf: 'Ranked #43 (Engineering) | #45 (Research) NIRF 2025',
            qs: 'QS 5-Star Rating (Employability, Facilities)',
            other: 'Top 50 Universities in India'
        },

        description: 'Asia\'s first core sector university with domain-specific super specializations and world-class infrastructure.',

        about: {
            mission: 'To develop industry-focused professionals with an international outlook and foster outcome-based education.',
            vision: 'To be an institution of global standing for developing competent talent in Energy, Transportation, and Infrastructure.',
            keyAchievements: [
                '92% Placement Record',
                'Highest Package: ₹50 LPA',
                'World-renowned domain specific programs',
                'Collaborations with global leaders like IBM, Xebia'
            ]
        },

        courses: ['B.Tech', 'MBA', 'B.Des', 'BBA', 'LL.B'],
        collegeType: 'Private University',
        campusSize: '44 Acres',

        placements: {
            placementRate: '95%',
            averagePackage: '₹14.6 LPA (CSE) | ₹8.5 LPA (Overall)',
            highestPackage: '₹50.09 LPA',
            topRecruiters: [
                'Schlumberger', 'Microsoft', 'Hyundai', 'Airbus',
                'Boeing', 'Adani Group', 'Reliance Industries', 'Dell'
            ]
        },

        facilities: [
            'Sprawling 44-Acre Campus in Himalayas',
            'Advanced Design Studios & Computing Centers',
            'Flight Simulators & Energy Labs',
            'LRC - Learning Resource Center (Lib)',
            'Food Courts & Multi-cuisine Cafeterias',
            'Modern On-campus Hostels',
            '24/7 Infirmary & Ambulance'
        ],

        bestKnownFor: 'Domain-specific programs in Energy, Oil & Gas, Aviation, and Design',
        mainCourses: ['B.Tech CSE', 'MBA Oil & Gas', 'B.Des', 'BBA Aviation', 'B.Tech APE', 'LL.B', 'B.Tech Automotive'],
        bestCourses: [
            {
                name: 'B.Tech Applied Petroleum Engineering',
                description: 'World-renowned program with upstream & downstream specialization and near-100% placement in energy giants.'
            },
            {
                name: 'MBA Oil & Gas Management',
                description: 'Niche management course tailored for the energy sector with global career pathways.'
            },
            {
                name: 'B.Tech Computer Science',
                description: 'High-demand program with specializations in Cloud, AI, and DevOps in collaboration with IBM/Xebia. Avg Package ₹14.6 LPA.'
            }
        ],
        bestPart: 'UPES Dehradun is a globally recognized institution, famous for its domain-specific programs in Energy, Transportation, and Infrastructure. With a placement record of 95%+ and highest packages exceeding ₹ 50 LPA, it is a top choice for specialized education. The university offers a stunning campus at the foothills of the Himalayas, fostering a culture of innovation, research, and holistic growth through its "School for Life" initiative.'
    },
    {
        id: 5,
        name: 'Dev Bhoomi Uttarakhand University',
        logo: getAssetUrl('devbhoomi-logo_w9bkus.webp'),
        cardImage: 'DBUU/campus-infra-dbuu.webp',
        logoBgColor: '#ffffff',
        location: 'Chakrata Road, Manduwala, Dehradun',
        established: '2005',
        accreditation: 'NAAC A Grade | BCI | PCI | COA',
        rankings: {
            nirf: 'NAAC A Grade Accredited University',
            outlook: 'Ranked #169 Engineering (Outlook-ICARE 2025)',
            other: 'Best Emerging University by Asian Education Conclave'
        },
        description: 'A multidisciplinary university known for its focus on practical skills, diverse courses, and massive 42-acre campus.',
        about: {
            mission: 'To set benchmarks in academic excellence and foster a thriving research environment for holistic student development.',
            vision: 'To cultivate a society of lifelong learners capable of critical thinking and leadership.',
            keyAchievements: [
                'NAAC A Grade Accreditation',
                'Highest Package: ₹40 LPA',
                '42-Acre Lush Green Campus',
                '14,000+ Job Opportunities Created'
            ]
        },
        courses: ['B.Tech', 'B.Pharma', 'B.Sc Agriculture', 'BBA', 'MBA', 'BHM', 'B.Des'],
        collegeType: 'Private University',
        campusSize: '42 Acres',
        placements: {
            placementRate: '80%',
            averagePackage: '₹5.5 LPA',
            highestPackage: '₹40.00 LPA',
            topRecruiters: [
                'ServiceNow', 'Daffodil', 'Hitachi', 'Amazon',
                'Tommy Hilfiger', 'Tech Mahindra', 'Rubico'
            ]
        },
        facilities: [
            'Sprawling 42-Acre Campus',
            'Central Library with 45,000+ Books',
            'Advanced Computer & Engineering Labs',
            'On-Campus Hospital & Medical Facilities',
            'Professional Sports Complex & Gym',
            'Separate Hostels for Boys & Girls',
            'Banking & ATM Facilities'
        ],
        bestKnownFor: 'Top-notch Pharmacy, Agriculture, and Engineering programs with NAAC A Grade quality',
        mainCourses: ['B.Tech CSE', 'B.Pharma', 'B.Sc Agriculture', 'MBA', 'BHM', 'BBA', 'Polytechnic', 'B.Des'],
        bestCourses: [
            {
                name: 'B.Pharma',
                description: 'Leading pharmacy college in the region with excellent labs and manufacturing unit for training.'
            },
            {
                name: 'B.Sc Agriculture',
                description: 'Extensive on-field training with own agricultural lands and research centers.'
            },
            {
                name: 'B.Tech Computer Science',
                description: 'Updated engineering syllabus with focus on coding, app development, and placement readiness.'
            }
        ],
        bestPart: 'Dev Bhoomi Uttarakhand University (DBUU) has transformed from a top engineering college into a full-fledged NAAC A Grade university. It is celebrated for its diverse course offerings and a massive 42-acre campus. The university maintains an excellent placement rate, with the highest package reaching ₹ 40 LPA. It focuses on "Value-Based Education" and provides a supportive environment for students from diverse backgrounds.',
        brochure: 'https://drive.google.com/file/d/1Qv8vfTB8-mWpacOS72YdXi23ePlgNjm3/view'
    },
    {
        id: 13,
        name: 'Shivalik College of Engineering',
        logo: getAssetUrl('shivaliklogo_wyab9r.png'),
        cardImage: 'shivalik college/U7A9935-1024x607.jpg',
        brochure: getAssetUrl('shivalik college/PROSPECTUS_compressed.pdf'),
        logoBgColor: '#ffffff',
        location: 'Sihniwala, Dehradun',
        established: '2006',
        accreditation: 'NAAC A+ Grade | AICTE | PCI',
        rankings: {
            times: 'Ranked #68 Engineering (Times 2025)',
            outlook: '#180 Engineering (Outlook-ICARE 2025)',
            other: 'Uttarakhand’s First Autonomous Private College'
        },
        description: 'Premier engineering college with strong industry linkages, NAAC A+ accreditation, and technical excellence.',
        about: {
            mission: 'To create an environment conducive to learning and growth through value-based quality education.',
            vision: 'To be a premier technical institution providing experiential learning and multi-disciplinary research.',
            keyAchievements: [
                'NAAC A+ Grade Accreditation',
                'Highest Package: ₹36.5 LPA (Google/Autodesk)',
                '500+ Recruiting Companies',
                'Center of Excellence with Industry Leaders'
            ]
        },
        courses: ['B.Tech', 'M.Tech', 'B.Pharma', 'Polytechnic', 'BBA'],
        collegeType: 'Private College',
        campusSize: '20 Acres',
        placements: {
            placementRate: '92%',
            averagePackage: '₹7.00 LPA',
            highestPackage: '₹36.50 LPA',
            topRecruiters: [
                'Google', 'Autodesk', 'Amazon', 'Accenture',
                'Byjus', 'TCS', 'Wipro'
            ]
        },
        facilities: [
            '20-Acre Eco-Friendly Campus',
            'Modern Gym & Sports Complex',
            'Advanced Robotics & IoT Labs',
            '24/7 Ambulance & Medical Support',
            'Digital Library & Smart Classrooms',
            'Comfortable Hostels with Mess',
            'Cafeteria & Recreation Zones'
        ],
        bestKnownFor: 'Quality technical education with excellent faculty-student ratio and hands-on practical training',
        mainCourses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Tech Civil', 'B.Pharma', 'BBA', 'B.Sc Agriculture'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Industry-focused CSE program with modern labs, coding competitions, and placement training'
            },
            {
                name: 'B.Pharma',
                description: 'Certified pharmacy program with advanced labs and hospital training partnerships'
            },
            {
                name: 'B.Tech Mechanical Engineering',
                description: 'Core mechanical engineering with workshops, CAD labs, and industry collaborations'
            }
        ],
        bestPart: 'Shivalik College of Engineering is recognized for its commitment to technical excellence, holding the prestigious NAAC A+ accreditation. As Uttarakhand\'s first autonomous private college, it offers a curriculum tailored to industry needs. The 20-acre campus is a hub of innovation with advanced labs and a placement record boasting packages up to ₹36.5 LPA. The college emphasizes experiential learning and holistic development.'
    },
    {
        id: 6,
        name: 'Shri Guru Ram Rai University',
        logo: getAssetUrl('logo_3_whg5oy.png'),
        cardImage: 'SGRR/DSC05047-2048x1365.jpg',
        logoBgColor: '#ffffff',
        location: 'Patel Nagar, Dehradun',
        established: '2017',
        accreditation: 'UGC | NMC | INC | PCI | NAAC A Grade (College)',
        rankings: {
            nirf: 'Associated with NAAC A Grade PG College',
            other: 'Top Medical & Professional University in Region'
        },
        description: 'A university with a 70+ year legacy of education and 1500-bed super specialty hospital.',
        about: {
            mission: 'To provide a comprehensive and sustainable educational experience fostering scientific thinking and ethical values.',
            vision: 'To be a centre of excellence nurturing innovation, creativity, and socially responsible professionals.',
            keyAchievements: [
                '1500-Bed Shri Mahant Indiresh Hospital',
                '70+ Years of Educational Legacy',
                'Wide range of Medical & Professional Courses',
                'Strong Community Service Focus'
            ]
        },
        courses: ['MBBS', 'B.Sc Nursing', 'B.Pharma', 'MBA', 'B.Tech', 'B.Sc Agriculture'],
        collegeType: 'Private University',
        campusSize: '82.5 Acres',
        placements: {
            placementRate: '85%',
            averagePackage: '₹4.00 LPA',
            highestPackage: '₹12.00 LPA',
            topRecruiters: [
                'Max Healthcare', 'Apollo Hospitals', 'Infosys', 'Wipro',
                'Da Milano', 'Axis Bank', 'Ipca Labs'
            ]
        },
        facilities: [
            '1500-Bed Super Specialty Hospital',
            'Massive 80+ Acre Campus',
            'Central Library with Digital Resources',
            'Advanced Medical & Science Labs',
            'Hostels for 2000+ Students',
            'Sports Complex & Gymnasium',
            'Bank & ATM Facilities (SBI/PNB)'
        ],
        bestKnownFor: 'Medical, Paramedical, and Nursing education along with traditional courses',
        mainCourses: ['MBBS', 'B.Sc Nursing', 'B.Pharma', 'MBA', 'B.Sc Agriculture', 'B.Tech', 'M.Sc', 'B.Com (Hons)'],
        bestCourses: [
            {
                name: 'MBBS / B.Sc Nursing',
                description: 'Top medical programs attached to the 1500-bed Shri Mahant Indiresh Hospital for clinical training.'
            },
            {
                name: 'B.Pharma',
                description: 'Excellent pharmaceutical education with focus on drug development and healthcare.'
            },
            {
                name: 'MBA',
                description: 'Affordable and quality management education with hospital management specialization options.'
            }
        ],
        bestPart: 'Shri Guru Ram Rai (SGRR) University carries the rich legacy of the SGRR Education Mission (Est. 1952). It is unique for its massive 80+ acre campus and the attached Shri Mahant Indiresh Hospital, making it a prime hub for medical and health sciences. The university offers highly affordable quality education with placements reaching ₹ 12 LPA. It is deeply rooted in community service and holistic student growth.'
    },
    {
        id: 7,
        name: 'Himalayan Institute of Technology (HIT)',
        logo: getAssetUrl('logo-hit_gayllo.png'),
        cardImage: 'HIT/maxresdefault.jpg',
        feesStructureImage: 'HIT/WhatsApp Image 2026-01-23 at 10.51.14 PM.jpeg',
        logoBgColor: '#ffffff',
        location: 'Haridwar Road, Near Central Excise office, Dehradun',
        established: '2001',
        accreditation: 'NAAC A Grade | UGC Recognized | HNBGU Affiliated',
        rankings: {
            other: 'Ranked #1 for Hotel Management in Dehradun',
            nirf: 'NAAC A Grade Accredited Institute'
        },
        description: 'Dehradun\'s top NAAC A Grade institute for Hotel Management, Agriculture, and IT.',
        about: {
            mission: 'To prepare students for global challenges by providing technical and professional education of the highest standard.',
            vision: 'To be a premier institute of choice for students and industry.',
            keyAchievements: [
                'NAAC A Grade Accreditation',
                'Ranked #1 in Hotel Management',
                'Excellent Placement Record',
                '22+ Years of Academic Excellence'
            ]
        },
        courses: ['BHM', 'B.Sc Agriculture', 'BCA', 'BBA', 'B.Sc IT'],
        collegeType: 'Private Institute',
        campusSize: '5 Acres',
        placements: {
            placementRate: '95%',
            averagePackage: '₹5.00 LPA',
            highestPackage: '₹13.50 LPA',
            topRecruiters: [
                'Oberoi Group', 'Taj Hotels', 'Wipro', 'TCS',
                'Marriott', 'Tech Mahindra', 'Hyatt'
            ]
        },
        facilities: [
            'Advanced Training Kitchens & Restaurant',
            'Agricultural Farms for Field Training',
            'Smart Classrooms & Computer Labs',
            'Well-Stocked Library',
            'Separate Hostels with Mess',
            'Transport Facility',
            'Cafeteria & Sports Court'
        ],
        bestKnownFor: 'Excellent Hotel Management and Agriculture courses with hands-on training',
        mainCourses: ['BHM', 'B.Sc Agriculture', 'B.Sc Forestry', 'BCA', 'BBA', 'M.Sc Agronomy', 'B.Com'],
        bestCourses: [
            {
                name: 'Bachelor of Hotel Management (BHM)',
                description: 'Premier course with state-of-the-art kitchens and training in top 5-star hotel chains.'
            },
            {
                name: 'B.Sc Agriculture',
                description: 'Field-based learning with focus on modern farming techniques and research.'
            },
            {
                name: 'BCA / B.Sc IT',
                description: 'Technical programs focused on software skills and IT industry placement.'
            }
        ],
        bestPart: 'Himalayan Institute of Technology (HIT) has established itself as a premier institute since 2001, boasting a NAAC "A" Grade accreditation. It is widely acclaimed for its Hotel Management and Agriculture programs, providing extensive practical exposure. The institute boasts a 95% placement assistance record with packages reaching up to ₹ 13.5 LPA. HIT is known for its experienced faculty, disciplined environment, and focus on skill-based education.'
    },
    {
        id: 8,
        name: 'GRD Institute of Management & Technology',
        logo: getAssetUrl('logo_pjxpio.png'),
        cardImage: 'GRD/grt-imtd-dehradun.webp',
        logoBgColor: '#2A2866',
        location: '214, Rajpur Road, Dehradun',
        established: '2002',
        accreditation: 'NAAC Accredited | AICTE | PCI | UTU Affiliated',
        rankings: {
            other: 'Ranked among Top Management & Tech Institutes in Dehradun'
        },
        description: 'A prestigious institute offering quality technical and management education on Rajpur Road.',
        about: {
            mission: 'To prepare students for professional careers through rigorous academic and practical training.',
            vision: 'To be a centre of learning and research that contributes to society.',
            keyAchievements: [
                'NAAC Accreditation',
                'High Placement Rate',
                'Beautiful 14-Acre Campus',
                'Strong Alumni Network'
            ]
        },
        courses: ['B.Tech', 'B.Pharma', 'MBA', 'Diploma', 'BBA'],
        collegeType: 'Private Institute',
        campusSize: '14 Acres',
        placements: {
            placementRate: '80%',
            averagePackage: '₹5.00 LPA',
            highestPackage: '₹12.00 LPA',
            topRecruiters: [
                'Infosys', 'TCS', 'Wipro', 'HCL',
                'Rubico', 'Amazon', 'Byjus'
            ]
        },
        facilities: [
            'Scenic 14-Acre Campus on Rajpur Road',
            'Well-Equipped Pharma & Tech Labs',
            'Library with Digital Access',
            'On-Campus Hostels & Mess',
            'Sports Ground & Gym',
            'Transport Facility',
            'WiFi Enabled Campus'
        ],
        bestKnownFor: 'Engineering and Pharmacy education with a beautiful campus location',
        mainCourses: ['B.Tech CSE', 'B.Pharma', 'MBA', 'B.Tech Civil', 'B.Tech ME', 'D.Pharma', 'Polytechnic'],
        bestCourses: [
            {
                name: 'B.Pharma',
                description: 'Well-established pharmacy department with modern labs and high placement rate.'
            },
            {
                name: 'B.Tech Computer Science',
                description: 'Engineering program with focus on technical skills and innovation.'
            },
            {
                name: 'MBA',
                description: 'Management course with dual specialization and industry interaction.'
            }
        ],
        bestPart: 'GRD Institute of Management & Technology (GRD-IMT) is located on the scenic Rajpur Road, offering one of the most beautiful campuses in Dehradun. Established in 2002 (under the GRD Trust est. 1989), it is NAAC accredited and known for its strong discipline. The institute offers excellent placement support, with the highest packages going up to ₹ 12 LPA. It blends academic excellence with a vibrant campus life featuring various clubs and sports facilities.'
    },

    {
        id: 10,
        name: 'Sardar Bhagwan Singh University',
        logo: getAssetUrl('sbs-logo_pkmszc.svg'),
        cardImage: 'SBS/sbsu_gallery_0097.jpg',
        logoBgColor: '#ffffff',
        location: 'Balawala, Dehradun',
        established: '1994',
        accreditation: 'NAAC Accredited | UGC | PCI | IAP',
        rankings: {
            other: 'North India’s Premier Institute for Allied Health Sciences'
        },
        description: 'North India\'s pioneer university in Biomedical, Pharmacy, and Physiotherapy education.',
        about: {
            mission: 'To educate and train students in professional sciences to serve humanity.',
            vision: 'To become a centre of excellence in pharmaceutical and allied health education.',
            keyAchievements: [
                'Pioneers in Physiotherapy Education',
                '25+ Acres of Green Campus',
                '15,000+ Alumni Network',
                'Rich Herbal Garden & Research Labs'
            ]
        },
        courses: ['B.Pharma', 'BPT', 'B.Sc Biotech', 'M.Pharma', 'MPT'],
        collegeType: 'Private University',
        campusSize: '25 Acres',
        placements: {
            placementRate: '85%',
            averagePackage: '₹3.50 LPA',
            highestPackage: '₹8.00 LPA',
            topRecruiters: [
                'Cipla', 'Sun Pharma', 'Dr. Reddys', 'Mankind',
                'Max Hospitals', 'Apollo'
            ]
        },
        facilities: [
            'Extensive Herbal Garden',
            'Physiotherapy OPD & Clinics',
            'Sophisticated Research Laboratories',
            'Girls & Boys Hostels',
            'Sports Ground & Gym',
            'Cafeteria & WiFi Campus'
        ],
        bestKnownFor: 'Excellence in Allied Health Sciences, Pharmacy, and Physiotherapy',
        mainCourses: ['B.Pharma', 'BPT', 'B.Sc Biotechnology', 'B.Sc Microbiology', 'M.Pharma', 'MPT', 'BMLT'],
        bestCourses: [
            {
                name: 'B.Pharma',
                description: 'Oldest and most prestigious pharmacy program in the region with top industry alumni.'
            },
            {
                name: 'BPT (Physiotherapy)',
                description: 'Highly acclaimed physiotherapy course with extensive clinical hands-on training.'
            },
            {
                name: 'B.Sc Biotechnology',
                description: 'Research-oriented biotech program with advanced laboratories and projects.'
            }
        ],
        bestPart: 'Sardar Bhagwan Singh University (formerly SBSPGI) is the region\'s first and oldest institute dedicated to biomedical and allied health sciences since 1994. It is the gold standard for Pharmacy and Physiotherapy education in Uttarakhand. The university boasts a vast herbal garden, highly sophisticated research labs, and a 25-acre green campus. With over 15,000 alumni globally, it offers stable placements in top pharma and healthcare companies.'
    },
    {
        id: 11,
        name: 'Institute Of Technology & Management (ITM)',
        logo: getAssetUrl('logo_logo_logo_logo-new1_c1kfpu.png'),
        cardImage: 'ITM/itm-infra-imgnew.jpg',
        logoBgColor: '#ffffff',
        location: '60, Chakrata Road, Yamuna Colony, Dehradun',
        established: '2002',
        accreditation: 'UGC Recognized | HNBGU Affiliated',
        rankings: {
            other: 'Pioneer Institute for IT & Animation in Dehradun'
        },
        description: 'The first institute to introduce IT education in Uttarakhand, focusing on holistic growth.',
        about: {
            mission: 'To empower students with technical and professional skills for a successful career.',
            vision: 'To be a leader in IT and Management education in the region.',
            keyAchievements: [
                'First IT Institute in Uttarakhand',
                'Strong Alumni Base in IT Sector',
                'Central Location Advantage',
                'Excellent Animation Studio'
            ]
        },
        courses: ['BCA', 'B.Sc IT', 'BBA', 'BHM', 'B.Lib'],
        collegeType: 'Private Institute',
        campusSize: '3 Acres',
        placements: {
            placementRate: '90%',
            averagePackage: '₹4.00 LPA',
            highestPackage: '₹15.00 LPA',
            topRecruiters: [
                'Wipro', 'TCS', 'Indigo', 'Tech Mahindra',
                'Radisson', 'Justdial'
            ]
        },
        facilities: [
            'Centrally Located Campus',
            'Modern IT Labs',
            'Animation & Design Studio',
            'Library',
            'Cafeteria',
            'WiFi Enabled Campus'
        ],
        bestKnownFor: 'Pioneering IT education and specialized Management/Animation courses',
        mainCourses: ['BCA', 'B.Sc IT', 'BBA', 'BHM', 'B.Sc Animation', 'M.Sc IT', 'B.Com', 'B.Lib'],
        bestCourses: [
            {
                name: 'BCA / B.Sc IT',
                description: 'Legacy IT programs with strong alumni base and practical software training.'
            },
            {
                name: 'B.Sc Animation',
                description: 'Creative program for aspiring animators with modern studio facilities.'
            },
            {
                name: 'BHM',
                description: 'Hotel management course with internships in premium hospitality chains.'
            }
        ],
        bestPart: 'ITM Dehradun, established in 2002, holds the distinction of being the first institute to facilitate IT education in Uttarakhand. Located centrally on Chakrata Road, it offers easy accessibility. The institute claims a 90% placement record with packages reaching up to ₹ 15 LPA. ITM is dedicated to creating industry-ready professionals through its skill-centric curriculum and regular technical workshops.'
    },
    {
        id: 12,
        name: 'SAI Group Of Institutions',
        logo: getAssetUrl('1_vyyky6.png'),
        cardImage: 'SAI GROUP/sai-group-of-institutions-dehradun.avif',
        logoBgColor: '#ffffff',
        location: 'Rajpur Road, Dehradun',
        established: '2003',
        accreditation: 'NAAC Accredited | HNBGU | SDSUV Affiliated',
        rankings: {
            other: 'Premier Institute for Paramedical & Allied Sciences'
        },
        description: 'A dedicated group of institutions focusing on Para-Medical, Management, and Nursing education.',
        about: {
            mission: 'To serve society by creating skilled healthcare and management professionals.',
            keyAchievements: [
                'NAAC Accreditation',
                'Strong Hospital Linkages',
                '20+ Years Educational Legacy'
            ]
        },
        courses: ['BPT', 'B.Sc Nursing', 'B.Pharma', 'BHA', 'B.Sc Agriculture', 'BMRIT'],
        collegeType: 'Private Group',
        campusSize: '15 Acres',
        placements: {
            placementRate: '80%',
            averagePackage: '₹3.50 LPA',
            highestPackage: '₹6.50 LPA',
            topRecruiters: [
                'Max Healthcare', 'Synergy Hospital', 'Patanjali', 'Fortis',
                'Divya Pharmacy', 'Apollo Hospitals'
            ]
        },
        facilities: [
            'Advanced Physiotherapy Labs',
            'Pathology & Microbiology Labs',
            'Well-stocked Library',
            'Hostel Facilities',
            'Transport Service',
            'Hospital Tie-ups for Training'
        ],
        bestKnownFor: 'Healthcare, Nursing, and Paramedical sciences with practical training focus',
        mainCourses: ['BPT', 'B.Sc Nursing', 'B.Pharma', 'BHA', 'B.Sc Agriculture', 'BMRIT', 'B.Sc Forestry', 'MPT'],
        bestCourses: [
            {
                name: 'Bachelor of Physiotherapy (BPT)',
                description: 'Core healthcare program with clinical training in reputed hospitals.'
            },
            {
                name: 'B.Sc Nursing',
                description: 'Comprehensive nursing education with focus on patient care and medical ethics.'
            },
            {
                name: 'B.Pharma',
                description: 'Pharmaceutical science course with industry-relevant curriculum.'
            }
        ],
        bestPart: 'SAI Group of Institutions (Est. 2003) is a prominent name in Dehradun for healthcare and allied sciences education. Accredited by NAAC, it offers a range of specialized courses like BPT, Nursing, and Hospital Administration. The group is known for its practical approach, ensuring students get hands-on experience through hospital tie-ups. With a dedicated placement cell, it secures career opportunities for students in leading hospitals and healthcare organizations.'
    },

    {
        id: 14,
        name: 'IMS Unison University',
        logo: getAssetUrl('Ims_logo_new_v2gjsf.png'),
        cardImage: 'IMS/ims-unison-university-dehradun-campus.jpg',
        logoBgColor: '#B6BDAD',
        location: 'Makkawala Greens, Mussoorie Diversion Road, Dehradun',
        established: '1996',
        accreditation: 'NAAC A+ Grade | UGC | BCI Approved',
        rankings: {
            nirf: 'NAAC A+ Grade Accredited University',
            other: 'Ranked Among Top Private Universities in North India'
        },
        description: 'A premier industry-focused university known for Law, Management, and Mass Communication.',
        about: {
            mission: 'To provide superior quality education and foster an environment of innovation and research.',
            vision: 'To be a globally renowned university specializing in professional education.',
            keyAchievements: [
                'NAAC A+ Grade Accreditation',
                'Highest Package: ₹16 LPA',
                '400+ Recruiters',
                'State-of-the-Art Infrastructure'
            ]
        },
        courses: ['MBA', 'BBA', 'BA LL.B', 'BHM', 'B.A (J&MC)'],
        collegeType: 'Private University',
        campusSize: '15 Acres',
        placements: {
            placementRate: '95%',
            averagePackage: '₹5.86 LPA',
            highestPackage: '₹16.00 LPA',
            topRecruiters: [
                'Audi', 'Sony', 'Times of India', 'Amazon',
                'Axis Bank', 'Berger Paints', 'ITC'
            ]
        },
        facilities: [
            '47,000+ Books Central Library',
            'Computer Labs with latest Software',
            'Moot Court for Law Students',
            'Mass Communication Media Studio',
            'On-Campus Hostels with Gym',
            'Medical Infirmary',
            'Cafeteria & Bakery'
        ],
        bestKnownFor: 'Excellence in Legal Studies, Management, and Mass Communication',
        mainCourses: ['MBA', 'BBA', 'BA LL.B (Hons)', 'BBA LL.B (Hons)', 'BHM', 'B.A (J&MC)', 'PhD'],
        bestCourses: [
            {
                name: 'BA LL.B (Hons)',
                description: 'Flagship 5-year integrated law program with moot court training and internships.'
            },
            {
                name: 'MBA',
                description: 'Industry-integrated management course with dual specialization options.'
            },
            {
                name: 'B.A (Journalism & Mass Comm)',
                description: 'Practical course with access to modern media studios and newsroom setups.'
            }
        ],
        bestPart: 'IMS Unison University (IUU) boasts a legacy of over 25 years (Est. 1996). With a prestigious NAAC A+ Grade, it stands as one of the top choices for Law and Management in the region. The university records a stellar 95% placement rate with top brands like Audi and Sony recruiting. Its beautifully designed campus features a moot court, media studios, and a massive library, offering a truly premium academic experience.'
    },
    {
        id: 15,
        name: 'Combined Institute of Medical Sciences & UIHMT',
        logo: getAssetUrl('logo-cimsr_ei3ray.png'),
        cardImage: 'CIMS/cims-dehradun.jpg',
        logoBgColor: '#ffffff',
        location: 'Haridwar Road, Kuuanwala, Dehradun',
        established: '2002',
        accreditation: 'UGC Approved | HNBGU Affiliated | INC',
        rankings: {
            other: 'Reputed Institute for Nursing & Hospital Administration'
        },
        description: 'Specialized institution dedicated to Medical Sciences, Nursing, and Healthcare Management.',
        about: {
            mission: 'To create world-class healthcare professionals through rigorous training and compassion.',
            keyAchievements: [
                'Associated with CMI Hospital',
                'High Placement Rate in Healthcare Sector',
                'Comprehensive Nursing Programs'
            ]
        },
        courses: ['B.Sc Nursing', 'GNM', 'B.Pharma', 'BHA', 'B.Sc Agriculture'],
        collegeType: 'Private Institute',
        campusSize: '10 Acres',
        placements: {
            placementRate: '85%',
            averagePackage: '₹3.00 LPA',
            highestPackage: '₹5.50 LPA',
            topRecruiters: [
                'Max Hospitals', 'Apollo', 'CMI Hospital', 'Kailash Hospital',
                'Medanta', 'Fortis'
            ]
        },
        facilities: [
            'Associated Multi-Specialty Hospital',
            'Advanced Nursing & Medical Labs',
            'Herbal Gardens',
            'Hostel Accommodation',
            'Library',
            'Sports Facilities'
        ],
        bestKnownFor: 'Nursing and Allied Health Sciences with hospital-based training',
        mainCourses: ['B.Sc Nursing', 'GNM', 'ANM', 'B.Pharma', 'BHA', 'BPT', 'B.Sc Agriculture'],
        bestCourses: [
            {
                name: 'B.Sc Nursing',
                description: 'Degree program with intensive clinical training in attached hospitals.'
            },
            {
                name: 'GNM (General Nursing)',
                description: 'Diploma course focusing on patient care and practical nursing skills.'
            },
            {
                name: 'Bachelor of Hospital Administration',
                description: 'Management course tailored for hospital operations and healthcare administration.'
            }
        ],
        bestPart: 'Combined Institute of Medical Sciences (CIMS) is a dedicated hub for healthcare education in Dehradun. Established in 2002, it is affiliated with HNBGU and recognized by the Indian Nursing Council. With its association with the CMI Hospital, it offers students unparalleled access to real-time medical training. Placements are robust in the healthcare sector, with graduates securing roles in top hospitals like Max and Apollo.'
    },
    {
        id: 16,
        name: 'Nav Chetna Group of Colleges',
        logo: getAssetUrl('Nav-Chetna-Logo-new-r5w8c9orrpjj4fhhddlipo289lmebs0nfghda7oyzu_wimoeo.png'),
        cardImage: 'NAV CHETNA/nav-chetna-college-dehradun.jpg',
        logoBgColor: '#ffffff',
        location: 'Manduwala, Dehradun',
        established: '2005',
        accreditation: 'UGC Recognized | Uttarakhand Govt Approved',
        rankings: {
            other: 'Known for Professional Courses in Dehradun'
        },
        description: 'A growing educational group focusing on Computer Applications, Management, and Paramedical courses.',
        about: {
            mission: 'To impart value-based education and develop future-ready professionals.',
            keyAchievements: [
                'Excellent Academic Results',
                'Focus on Holistic Development',
                'Modern Campus Infrastructure'
            ]
        },
        courses: ['BCA', 'BBA', 'B.Sc IT', 'B.Sc Forestry', 'B.Lib'],
        collegeType: 'Private College',
        campusSize: '10 Acres',
        placements: {
            placementRate: '75%',
            averagePackage: '₹4.30 LPA',
            highestPackage: '₹5.75 LPA',
            topRecruiters: [
                'Asian Paints', 'Havells', 'Justdial', 'Axis Bank',
                'UltraTech Cement', 'PolicyBazaar'
            ]
        },
        facilities: [
            'Lush Green Campus',
            'Computing Labs',
            'Library with Reading Room',
            'Transport Facility',
            'Sports Ground',
            'Cafeteria'
        ],
        bestKnownFor: 'Affordable professional education in IT and Management',
        mainCourses: ['BCA', 'BBA', 'B.Sc IT', 'B.Sc Forestry', 'B.Sc Agriculture', 'B.Lib', 'BHM'],
        bestCourses: [
            {
                name: 'BCA',
                description: 'Focus on software development, web design, and programming languages.'
            },
            {
                name: 'B.Sc Forestry',
                description: 'Specialized program for careers in environmental conservation and forest management.'
            },
            {
                name: 'BHM',
                description: 'Hotel Management course with training in hospitality operations.'
            }
        ],
        bestPart: 'Nav Chetna College, established in 2005, is known for offering quality professional education at an affordable cost. Located in the education hub of Manduwala, it provides a serene environment for learning. The college focuses on practical skills and personality development. With placement packages averaging around ₹4.3 LPA and top recruiters like Asian Paints participating, it serves as a solid launchpad for careers in IT and Management.'
    },
    {
        id: 17,
        name: 'Tulas Institute',
        logo: getAssetUrl('TulasLogo.f88dd71b_u2a3xv.png'),
        cardImage: 'TULAS/tulas-institute-dehradun.jpg',
        logoBgColor: '#ffffff',
        location: 'Dhoolkot, Chakrata Road, Dehradun',
        established: '2006',
        accreditation: 'NAAC A+ Grade | AICTE | UA',
        rankings: {
            nirf: 'NAAC A+ Grade Accredited Institute',
            other: 'Top Ranked Engineering College in North India'
        },
        description: 'A Premier "A+" Grade institute known for excellence in Engineering, Management, and Agriculture.',
        about: {
            mission: 'To promote intellectual and skilled human capital generation for sustainable development.',
            keyAchievements: [
                'NAAC A+ Grade',
                'Highest Package: ₹36.5 LPA',
                'Microsoft Innovation Centre',
                'Apple Certified Labs'
            ]
        },
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Sc Agriculture'],
        collegeType: 'Private Institute',
        campusSize: '22 Acres',
        placements: {
            placementRate: '90%',
            averagePackage: '₹5.60 LPA',
            highestPackage: '₹36.50 LPA',
            topRecruiters: [
                'Adobe', 'BYJUS', 'TCS', 'Wipro',
                'Optimal', 'Cummins', 'Deutsche Bank'
            ]
        },
        facilities: [
            'Microsoft Innovation Centre',
            'Apple Student Developer Society',
            '22-Acre Green Campus',
            'Well-Equipped Gym & Sports',
            'Auditorium with 500+ Capacity',
            'Girls & Boys Hostels'
        ],
        bestKnownFor: 'Technical Innovation, Apple/Microsoft Labs, and High Placements',
        mainCourses: ['B.Tech CSE', 'B.Tech Civil', 'B.Tech ME', 'MBA', 'BBA', 'BCA', 'B.Sc Agriculture', 'BJMC'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Top-tier program with access to Microsoft Innovation Centre and Apple Labs.'
            },
            {
                name: 'B.Sc Agriculture',
                description: 'Practical-rich course with own agricultural lands and research facilities.'
            },
            {
                name: 'MBA',
                description: 'Corporate-focused management program with excellent placement track record.'
            }
        ],
        bestPart: 'Tulas Institute (Est. 2006) is a jewel in Dehradun’s education landscape, holding the prestigious NAAC A+ Grade. It is renowned for its state-of-the-art infrastructure, including a legitimate Microsoft Innovation Center. The institute focuses on industry-readiness, reflected in its impressive placement record with a highest package of ₹36.5 LPA. The 22-acre lush green campus offers a perfect blend of academic rigor and student life.'
    },
    {
        id: 18,
        name: 'COER University',
        logo: getAssetUrl('coer-logo_xz3idz.webp'),
        cardImage: 'COER/coer-university-roorkee.jpg',
        logoBgColor: '#ffffff',
        location: '7th KM on Roorkee Haridwar Road, VardhmanHW, Roorkee',
        established: '1998',
        accreditation: 'NAAC A+ Grade | AICTE | UGC Recognized',
        rankings: {
            nirf: 'NAAC A+ Grade University',
            other: 'Best Technical University in Roorkee Region'
        },
        description: 'A prestigious university with a legacy of engineering excellence and 95% placement record.',
        about: {
            mission: 'To impart technical education of international standards and conduct research at the cutting edge.',
            vision: 'To be a global centre of learning and innovation.',
            keyAchievements: [
                'NAAC A+ Grade',
                'Highest Package: ₹44 LPA',
                'Distinguished Alumni Network',
                '25+ Years Legacy'
            ]
        },
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Sc Agriculture'],
        collegeType: 'Private University',
        campusSize: '75 Acres',
        placements: {
            placementRate: '95%',
            averagePackage: '₹5.20 LPA',
            highestPackage: '₹44.00 LPA',
            topRecruiters: [
                'HCL', 'Infosys', 'Wipro', 'Tech Mahindra',
                'Rubico', 'Amazon', 'Adobe'
            ]
        },
        facilities: [
            'Sprawling 75-Acre Campus',
            'Advanced Computing Centre',
            'Central Library with Digital Archives',
            'Student Activity Centre',
            'Medical Centre & Ambulance',
            'Hostels for 2500+ Students',
            'Bank & ATM'
        ],
        bestKnownFor: 'Strong technical foundations and dominant placement record in the region',
        mainCourses: ['B.Tech CSE', 'B.Tech Civil', 'MBA', 'BBA', 'MCA', 'BCA', 'B.Sc Agriculture', 'B.Com'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Flagship program with specialization options in AI, ML, and Data Science.'
            },
            {
                name: 'MBA',
                description: 'Management program focused on creating future corporate leaders.'
            },
            {
                name: 'B.Sc Agriculture',
                description: 'Research-backed agriculture course with practical field exposure.'
            }
        ],
        bestPart: 'COER University (formerly College of Engineering Roorkee) is an institution with a rich legacy dating back to 1998. Located on the Roorkee-Haridwar highway, it boasts a massive 75-acre campus. It is NAAC A+ accredited, reflecting its academic quality. The university is famous for its disciplined academic structure and consistent placement performance, with the highest package reaching ₹44 LPA. It offers a vibrant campus life with numerous technical and cultural fests.'
    },
    {
        id: 19,
        name: 'Quantum University',
        logo: getAssetUrl('qu-logo-name_kjvdad.svg'),
        cardImage: 'QUANTUM/quantum-university-roorkee.jpg',
        logoBgColor: '#ffffff',
        location: 'Mandawar, Roorkee - Dehradun Highway, Roorkee',
        established: '2017',
        accreditation: 'UGC Approved | PCI | BCI | NAAC Accredited',
        rankings: {
            other: 'Awarded Best Private University in North India'
        },
        description: 'A modern university known for its unique interdisciplinary pedagogy and high placements.',
        about: {
            mission: 'To serve the country by providing employment-oriented global education.',
            vision: 'To be a centre of excellence in holistic education.',
            keyAchievements: [
                'Highest Package: ₹33.5 LPA',
                'Interdisciplinary Education Model',
                'Collaboration with top industries',
                'State-of-the-art Labs'
            ]
        },
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma', 'B.Sc'],
        collegeType: 'Private University',
        campusSize: '30 Acres',
        placements: {
            placementRate: '85%',
            averagePackage: '₹5.80 LPA',
            highestPackage: '₹33.50 LPA',
            topRecruiters: [
                'Wipro', 'TCS', 'Amazon', 'Capgemini',
                'Quick Heal', 'Axis Bank', 'Genpact'
            ]
        },
        facilities: [
            'Interdisciplinary Labs',
            'Auditoriums & Seminar Halls',
            'Library with E-resources',
            'Sports Complex',
            'Hostels with Modern Amenities',
            'Cafeteria',
            'Gymnasium'
        ],
        bestKnownFor: 'Interdisciplinary "Passion Programs" and strong placement support',
        mainCourses: ['B.Tech CSE', 'MBA', 'BBA', 'BCA', 'B.Pharma', 'B.Sc Agriculture', 'B.Sc Animation', 'BJMC'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Advanced CSE program with specializations in Cyber Security and AI.'
            },
            {
                name: 'MBA',
                description: 'Dynamic management course with dual specialization and industrial visits.'
            },
            {
                name: 'B.Pharma',
                description: 'Approved pharmacy program with focus on drug research and manufacturing.'
            }
        ],
        bestPart: 'Quantum University is distinct for its "Interdisciplinary pedagogy" which allows students to study technology with humanities, agriculture with economics, etc. It offers "Passion Programs" allowing students to pursue recognized courses in their hobbies like photography or theater alongside their degree. With a placement record of 85% and a highest package of ₹33.5 LPA, it blends academic rigor with holistic personal growth.'
    },
    {
        id: 20,
        name: 'Dolphin (PG) Institute',
        logo: getAssetUrl('dibns-logo_olfuby.webp'),
        cardImage: 'DOLPHIN/dolphin-institute-dehradun.jpg',
        logoBgColor: '#ffffff',
        location: 'Manduwala, Dehradun',
        established: '2002',
        accreditation: 'NAAC A+ Grade | HNBGU Affiliated',
        rankings: {
            nirf: 'NAAC A+ Grade Institute (CGPA 3.42)',
            other: 'Best Institute for Biomedical & Natural Sciences'
        },
        description: 'A premier institute dedicated to Biomedical, Natural, and Paramedical Sciences.',
        about: {
            mission: 'To create a centre of excellence in the field of Para-Medical and Natural Sciences.',
            vision: 'To provide quality education ensuring employability and ethical values.',
            keyAchievements: [
                'NAAC A+ Accreditation',
                'Research-Driven Curriculum',
                'High Placement in Pharma & Biotech',
                'State-of-the-art Research Labs'
            ]
        },
        courses: ['BPT', 'B.Sc Agriculture', 'B.Sc Forestry', 'M.Sc', 'BMLT'],
        collegeType: 'Private Institute',
        campusSize: '7 Acres',
        placements: {
            placementRate: '85%',
            averagePackage: '₹4.50 LPA',
            highestPackage: '₹9.00 LPA',
            topRecruiters: [
                'Biocon', 'Cipla', 'Wockhardt', 'Fortis Healthcare',
                'Apollo Hospitals', 'Lal Path Labs'
            ]
        },
        facilities: [
            'Advanced Biomedical Labs',
            'Physiotherapy OPD',
            'Polyhouse & Botanical Garden',
            'Central Library',
            'Hostel Facilities',
            'Sports Complex'
        ],
        bestKnownFor: 'Research-focused education in Biomedical and Natural Sciences',
        mainCourses: ['BPT', 'B.Sc Agriculture', 'B.Sc Forestry', 'B.Sc Biotechnology', 'M.Sc Microbiology', 'MPT', 'BMLT'],
        bestCourses: [
            {
                name: 'Bachelor of Physiotherapy (BPT)',
                description: 'Rigorous 4.5-year program with clinical internships in top hospitals.'
            },
            {
                name: 'B.Sc Biotechnology',
                description: 'Research-oriented program with access to advanced molecular biology labs.'
            },
            {
                name: 'B.Sc Forestry',
                description: 'Field-based course focusing on forest management and conservation.'
            }
        ],
        bestPart: 'Dolphin (PG) Institute of Biomedical & Natural Sciences is a niche institution that excels in life sciences. Accredited with a prestigious NAAC A+ Grade, it offers high-quality education in Physiotherapy, Biotechnology, and Forestry. The institute is known for its rigorous academic environment and focus on research. Placements are particularly strong in the Pharmaceutical and Healthcare sectors, with top companies like Biocon and Cipla recruiting graduates.'
    },
    {
        id: 21,
        name: 'BFIT Group of Institutions',
        logo: getAssetUrl('Bfit-logo-1_aoxy1t.webp'),
        cardImage: 'BFIT/bfit-dehradun-campus.jpg',
        logoBgColor: '#ffffff',
        location: 'Chakrata Road, Suddhowala, Dehradun',
        established: '2002',
        accreditation: 'NAAC A Grade | UGC | AICTE',
        rankings: {
            other: 'One of the Most Popular Colleges for Technical Education'
        },
        description: 'A popular institution offering a wide range of technical and professional courses with 100% placement focus.',
        about: {
            mission: 'To provide a platform for educational excellence and holistic development.',
            vision: 'To be a globally recognized institution for technical education.',
            keyAchievements: [
                'NAAC A Grade',
                '19,000+ Placed Students',
                'Highest Package: ₹25 LPA',
                'Vibrant Campus Life'
            ]
        },
        courses: ['B.Sc Agriculture', 'B.Tech', 'MBA', 'BCA', 'BHM', 'B.Pharma'],
        collegeType: 'Private Group',
        campusSize: '10 Acres',
        placements: {
            placementRate: '85%',
            averagePackage: '₹5.00 LPA',
            highestPackage: '₹25.00 LPA',
            topRecruiters: [
                'HDFC Bank', 'Infosys', 'IBM', 'Policy Bazaar',
                'Tech Mahindra', 'Amazon', 'Ashok Leyland'
            ]
        },
        facilities: [
            'Digital Library',
            'Modern Laboratories',
            'Hostel with Mess',
            'Sports Complex',
            'Cafeteria',
            'Transport',
            'Gym'
        ],
        bestKnownFor: 'Wide variety of courses and strong focus on student placements',
        mainCourses: ['B.Sc Agriculture', 'B.Tech', 'MBA', 'BCA', 'BHM', 'B.Pharma', 'M.Sc', 'MPH', 'B.A'],
        bestCourses: [
            {
                name: 'B.Sc Agriculture',
                description: 'Popular course with practical field training and good placement outcome.'
            },
            {
                name: 'B.Tech Computer Science',
                description: 'Core engineering program with focus on software skills and coding.'
            },
            {
                name: 'BHM',
                description: 'Hotel Management program with training in hospitality services.'
            }
        ],
        bestPart: 'BFIT Group of Institutions (Est. 2002) is accredited with NAAC A Grade and is one of the most vibrant campuses in Dehradun. Known for its "Zero Unemployment" mission, it aggressively works on student placements, boasting a highest package of ₹25 LPA. The college offers a very wide spectrum of courses from Agriculture to Engineering, making it a diverse hub of learning. The campus atmosphere is lively, with students from all over India.'
    },
    {
        id: 9,
        name: 'D.D. College Dehradun',
        logo: getAssetUrl('logo_pjxpio.png'),
        cardImage: 'D.D College/maxresdefault.jpg',
        logoBgColor: '#ffffff',
        location: '25, Nimbuwala, Garhi Cantt., Dehradun',
        established: '2014',
        accreditation: 'UGC Recognized | HNBGU Affiliated',
        rankings: {
            other: 'Reputed for Agriculture & Education Courses'
        },
        description: 'A serene campus in Garhi Cantt offering quality education in Agriculture, Education, and Commerce.',
        about: {
            mission: 'To provide affordable and high-quality education to all sections of society.',
            keyAchievements: [
                '100% Placement Assistance',
                'Serene & Pollution Free Campus',
                'Modern Agriculture Farms'
            ]
        },
        courses: ['B.Sc Agriculture', 'B.Com (Hons)', 'B.Ed', 'BBA', 'BCA'],
        collegeType: 'Private Institute',
        campusSize: '2 Acres',
        placements: {
            placementRate: '65%',
            averagePackage: '₹3.50 LPA',
            highestPackage: '₹6.00 LPA',
            topRecruiters: [
                'Patanjali', 'HDFC Bank', 'TCS', 'Wipro',
                'Curefit', 'Zorba Yoga'
            ]
        },
        facilities: [
            '2-Acre Green Campus',
            'Well-Equipped Agriculture Labs',
            'Modern Computer Centre',
            'Library with Reading Hall',
            'Hostel Facilities',
            'Cafeteria'
        ],
        bestKnownFor: 'Affordable quality education with focus on Agriculture and B.Ed',
        mainCourses: ['B.Sc Agriculture', 'B.Com (Hons)', 'B.Ed', 'BBA', 'BCA', 'B.Sc (PCM/CBZ)', 'M.Sc Agronomy', 'MA Yoga'],
        bestCourses: [
            {
                name: 'B.Sc Agriculture',
                description: 'Practical-oriented agriculture program with field training.'
            },
            {
                name: 'B.Ed',
                description: 'Popular teacher training course approved by NCTE.'
            },
            {
                name: 'MA Yoga',
                description: 'Specialized wellness program with career opportunities in health sector.'
            }
        ],
        bestPart: 'D.D. College, established in 2014, is situated in the peaceful Cantonment area of Garhi Cantt. It is a preferred choice for students seeking affordable quality education, especially in Agriculture and B.Ed. The college emphasizes holistic development and provides 100% placement assistance, with students securing roles in organizations like Patanjali and Curefit. Its serene environment is perfect for focused academic pursuits.'
    },
    {
        id: 22,
        name: 'Guru Nanak College',
        logo: getAssetUrl('logo_vlerv7.webp'),
        cardImage: 'GURU NANAK/guru-nanak-college-dehradun.jpg',
        logoBgColor: '#ffffff',
        location: 'Jhajhra, Chakrata Road, Dehradun',
        established: '2009',
        accreditation: 'AICTE Approved | PCI | UBTE | HNBGU',
        rankings: {
            other: 'Known for Pharmacy and Paramedical Excellence'
        },
        description: 'Reputed college offering specialized programs in Pharmacy, Paramedical, and Nursing.',
        about: {
            mission: 'To provide quality professional education and training.',
            keyAchievements: [
                '95% Placement Rate',
                'Highest Package: ₹1.01 Cr (International)',
                '17+ B.Pharma Placements',
                'Global Career Opportunities'
            ]
        },
        courses: ['B.Pharma', 'D.Pharma', 'B.Sc Nursing', 'BMLT', 'BPT'],
        collegeType: 'Private College',
        campusSize: '5 Acres',
        placements: {
            placementRate: '95%',
            averagePackage: '₹5.00 LPA',
            highestPackage: '₹1.01 Cr',
            topRecruiters: [
                'Windlas Biotech', 'Swarnimaksh Life Sciences', 'NecLife',
                'Career Buddy Club (Dubai)', 'Apollo'
            ]
        },
        facilities: [
            'Advanced Pharmacy Labs',
            'Herbal Gardens',
            'Simulation Centre',
            'Library',
            'Hostel Facilities',
            'Transport'
        ],
        bestKnownFor: 'Exceptional placements in Pharmacy and International career collaborations',
        mainCourses: ['B.Pharma', 'D.Pharma', 'B.Sc Nursing', 'BMLT', 'BPT', 'B.Sc Optometry', 'BHM'],
        bestCourses: [
            {
                name: 'B.Pharma',
                description: 'Top-ranked pharmacy course with high placement record in pharma industry.'
            },
            {
                name: 'B.Sc Nursing',
                description: 'Professional nursing course with clinical training.'
            },
            {
                name: 'BMLT',
                description: 'Lab technology course with hands-on diagnostic training.'
            }
        ],
        bestPart: 'Guru Nanak College, Dehradun, has carved a niche for itself in Pharmacy and Paramedical education. With a stated placement rate of 95% and headline-grabbing international packages (up to ₹1 Cr), it is a top destination for students aspiring for global careers in healthcare. The college facilitates international placements through collaborations like the Career Buddy Club, Dubai. It offers a focused learning environment with advanced labs and experienced faculty.'
    },
    {
        id: 23,
        name: 'JBIT - JB Institute of Technology',
        logo: getAssetUrl('images_h0a51d.png'),
        cardImage: 'JBIT/jbit-dehradun-campus.jpg',
        logoBgColor: '#ffffff',
        location: 'Nh-72, Chakrata Road, Dehradun',
        established: '2009',
        accreditation: 'AICTE Approved | NAAC Approved | UTU Affiliated',
        rankings: {
            other: 'Top Emerging Engineering College'
        },
        description: 'Technical campus offering affordable education with good industry exposure.',
        about: {
            mission: 'To provide affordable technical education to the masses.',
            keyAchievements: [
                'NAAC Approval',
                '8000+ Alumni',
                'Highest Package: ₹9.2 LPA',
                '25-Acre Campus'
            ]
        },
        courses: ['B.Tech', 'M.Tech', 'BBA', 'BCA', 'B.Sc Agriculture'],
        collegeType: 'Private Engineering Institute',
        campusSize: '25 Acres',
        placements: {
            placementRate: '83%',
            averagePackage: '₹3.20 LPA',
            highestPackage: '₹9.20 LPA',
            topRecruiters: [
                'Hero', 'Wipro', 'Amazon', 'Mahindra',
                'TCS', 'HDFC Bank', 'Samsung'
            ]
        },
        facilities: [
            '25-Acre Wi-Fi Campus',
            'Digital Library',
            'Engineering Labs',
            'Workshops',
            'Hostels',
            'Sports Facilities',
            'Gym'
        ],
        bestKnownFor: 'Affordable engineering education and 100% placement support efforts',
        mainCourses: ['B.Tech CSE', 'B.Tech ME', 'B.Tech CE', 'B.Tech ECE', 'BBA', 'BCA', 'B.Sc Agriculture', 'D.Pharma'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Technical program with focus on coding skills and software development.'
            },
            {
                name: 'B.Sc Agriculture',
                description: 'Field-oriented course with practical training in agricultural techniques.'
            },
            {
                name: 'B.Tech Mechanical',
                description: 'Core engineering course with extensive workshop practice.'
            }
        ],
        bestPart: 'JBIT (JB Institute of Technology) is a popular choice for students seeking affordable technical education. Located on a 25-acre campus, it offers a peaceful learning environment. The institute has "NAAC Approval" and an active placement cell that brings in major companies like Hero and Wipro. With a placement rate of over 80% and packages up to ₹9.2 LPA, JBIT ensures a good ROI for its students.'
    },
    {
        id: 24,
        name: 'Doon Group of Colleges',
        logo: getAssetUrl('logo_2_b55nw4.png'),
        cardImage: 'DOON GROUP/doon-group-of-colleges-campus.jpg',
        logoBgColor: '#ffffff',
        location: 'Selaqui, Dehradun',
        established: '2004',
        accreditation: 'AICTE Approved | ISO 9001:2008 Certified',
        rankings: {
            other: 'Known for Agriculture and Professional Courses'
        },
        description: 'A well-established group offering diverse courses in Agriculture, Engineering, and Management.',
        about: {
            mission: 'To provide quality education and training to create employable professionals.',
            keyAchievements: [
                'ISO Certification',
                'Strong Agriculture Department',
                'Training & Placement Cell',
                'Lush Green Campus'
            ]
        },
        courses: ['B.Sc Agriculture', 'B.Tech', 'MBA', 'B.Pharma', 'B.Sc Forestry'],
        collegeType: 'Private Educational Group',
        campusSize: '15 Acres',
        placements: {
            placementRate: '70%',
            averagePackage: '₹4.00 LPA',
            highestPackage: '₹6.50 LPA',
            topRecruiters: [
                'PepsiCo', 'Fortis', 'Mahindra', 'Coca-Cola',
                'Apollo Hospitals', 'Tech Mahindra'
            ]
        },
        facilities: [
            'Agriculture Farms & Labs',
            'Central Library',
            'Computer Centre',
            'Hostels',
            'Transport',
            'Canteen'
        ],
        bestKnownFor: 'Agriculture and Forestry courses with practical field training',
        mainCourses: ['B.Sc Agriculture', 'B.Sc Forestry', 'B.Tech', 'MBA', 'B.Pharma', 'B.Ed', 'BHM'],
        bestCourses: [
            {
                name: 'B.Sc Agriculture',
                description: 'Comprehensive agriculture program with own farms for practical learning.'
            },
            {
                name: 'B.Sc Forestry',
                description: 'Specialized course in forest management and conservation.'
            },
            {
                name: 'B.Pharma',
                description: 'Pharmacy course with focus on pharmaceutical industry standards.'
            }
        ],
        bestPart: 'Doon Group of Colleges (DGC), located in Selaqui, is a prominent name for Agriculture and Forestry education. Established in 2004, the group has expanded to offer Engineering and Management courses. It focuses on practical learning, especially for its agriculture students who benefit from on-campus farms. The placement cell is active, bringing in companies like PepsiCo and Fortis, ensuring a steady start for its graduates.'
    },
];
