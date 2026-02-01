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
        accreditation: 'NAAC A Grade | UGC | COA',
        description: 'A Center of Excellence for engineering, architecture, and pharmacy education.',
        courses: ['B.Tech', 'B.Arch', 'B.Pharma', 'MBA', 'B.Des'],
        collegeType: 'Private University',
        campusSize: '21 Acres',
        placementRate: '90%',
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
        bestPart: 'DIT University, with its 25+ years of legacy, is a preferred destination for higher learning. The 21-acre campus offers a serene yet technologically advanced environment. DIT is known for its excellent placement support, with the highest package touching ₹ 58 LPA and an average of ₹ 6-7 LPA. The university provides a true "Holistic Education" experience with active student societies, national-level hackathons, and global collaborations.'
    },
    {
        id: 3,
        name: 'Uttaranchal University',
        logo: getAssetUrl('uttaranchal/uu-infra-campus.png'),
        logoBgColor: '#ffffff',
        location: 'Arcadia Grant, P.O. Chandanwari, Premnagar, Dehradun',
        established: '2013',
        accreditation: 'NAAC A+ Grade | UGC | BCI',
        description: 'The first university in Uttarakhand to receive NAAC A+ in its first cycle.',
        courses: ['B.Tech', 'B.A. LL.B', 'MBA', 'B.Sc Agriculture', 'BCA'],
        collegeType: 'Private University',
        campusSize: '70 Acres',
        placementRate: '85%',
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
                description: 'Practical-intensive course with organic farms and poly-house training facilities.'
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
        accreditation: 'NAAC A Grade | QS 5 Star | NBA',
        description: 'Asia\'s first core sector university with domain-specific super specializations.',
        courses: ['B.Tech', 'MBA', 'B.Des', 'BBA', 'LL.B'],
        collegeType: 'Private University',
        campusSize: '44 Acres',
        placementRate: '95%',
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
                name: 'B.Des (Design)',
                description: 'Creative design program recognized globally, with outstanding studio facilities and industry mentors.'
            }
        ],
        bestPart: 'UPES Dehradun is a globally recognized institution, famous for its domain-specific programs in Energy, Transportation, and Infrastructure. With a placement record of 95%+ and highest packages exceeding ₹ 50 LPA, it is a top choice for specialized education. The university offers a stunning campus at the foothills of the Himalayas, fostering a culture of innovation, research, and holistic growth through its "School for Life" initiative.'
    },
    {
        id: 5,
        name: 'Dev Bhoomi Uttarakhand University',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766816036/devbhoomi-logo_w9bkus.webp'),
        logoBgColor: '#ffffff',
        location: 'Chakrata Road, Manduwala, Dehradun',
        established: '2005',
        accreditation: 'NAAC Accredited | BCI | PCI',
        description: 'A multidisciplinary university known for its focus on practical skills and huge campus.',
        courses: ['B.Tech', 'B.Pharma', 'B.Sc Agriculture', 'BBA', 'MBA'],
        collegeType: 'Private University',
        campusSize: '42 Acres',
        placementRate: '80%',
        bestKnownFor: 'Top-notch Pharmacy, Agriculture, and Engineering programs',
        mainCourses: ['B.Tech CSE', 'B.Pharma', 'B.Sc Agriculture', 'MBA', 'BHM', 'BBA', 'Polytechnic'],
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
        bestPart: 'Dev Bhoomi Uttarakhand University (DBUU) has transformed from a top engineering college into a full-fledged university. It is celebrated for its diverse course offerings and a massive 42-acre campus. The university maintains an excellent placement rate, with the highest package reaching ₹ 40 LPA. It focuses on "Value-Based Education" and provides a supportive environment for students from diverse backgrounds.',
        brochure: 'https://drive.google.com/file/d/1Qv8vfTB8-mWpacOS72YdXi23ePlgNjm3/view'
    },
    {
        id: 6,
        name: 'Shri Guru Ram Rai University',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767118111/logo_3_whg5oy.png'),
        logoBgColor: '#ffffff',
        location: 'Patel Nagar, Dehradun',
        established: '2017',
        accreditation: 'UGC | NMC | INC | PCI',
        description: 'A university with a 70+ year legacy of education and 1500-bed super specialty hospital.',
        courses: ['MBBS', 'B.Sc Nursing', 'B.Pharma', 'MBA', 'B.Tech'],
        collegeType: 'Private University',
        campusSize: '82.5 Acres',
        placementRate: '85%',
        bestKnownFor: 'Medical, Paramedical, and Nursing education along with traditional courses',
        mainCourses: ['MBBS', 'B.Sc Nursing', 'B.Pharma', 'MBA', 'B.Sc Agriculture', 'B.Tech', 'M.Sc'],
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
        bestPart: 'Shri Guru Ram Rai (SGRR) University carries the rich legacy of the SGRR Education Mission (Est. 1952). It is unique for its massive 80+ acre campus and the attached Shri Mahant Indiresh Hospital, making it a prime hub for medical and health sciences. The university offers highly affordable quality education with placements reaching ₹ 12-18 LPA. It is deeply rooted in community service and holistic student growth.'
    },
    {
        id: 7,
        name: 'Himalayan Institute of Technology (HIT)',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766816124/logo-hit_gayllo.png'),
        logoBgColor: '#ffffff',
        location: 'Haridwar Road, Near Central Excise office, Dehradun',
        established: '2001',
        accreditation: 'UGC Recognized | HNBGU Affiliated',
        description: 'Dehradun\'s top institute for Hotel Management, Agriculture, and IT.',
        courses: ['BHM', 'B.Sc Agriculture', 'BCA', 'BBA', 'B.Sc IT'],
        collegeType: 'Private Institute',
        campusSize: '5 Acres',
        placementRate: '95%',
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
        bestPart: 'Himalayan Institute of Technology (HIT) has established itself as a premier institute since 2001. It is widely acclaimed for its Hotel Management and Agriculture programs, providing extensive practical exposure. The institute boasts a 95% placement assistance record with packages reaching up to ₹ 10-13.5 LPA. HIT is known for its experienced faculty, disciplined environment, and focus on skill-based education.'
    },
    {
        id: 8,
        name: 'GRD Institute of Management & Technology',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766816816/logo_pjxpio.png'),
        logoBgColor: '#2A2866',
        location: '214, Rajpur Road, Dehradun',
        established: '2002',
        accreditation: 'AICTE Approved | PCI | UTU Affiliated',
        description: 'A prestigious institute offering quality technical and management education on Rajpur Road.',
        courses: ['B.Tech', 'B.Pharma', 'MBA', 'Diploma', 'BBA'],
        collegeType: 'Private Institute',
        campusSize: '14 Acres',
        placementRate: '80%',
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
        bestPart: 'GRD Institute of Management & Technology (GRD-IMT) is located on the scenic Rajpur Road, offering one of the most beautiful campuses in Dehradun. Established in 2002 (under the GRD Trust est. 1989), it is known for its strong discipline and academic rigor. The institute offers excellent placement support, with the highest packages going up to ₹ 18-20 LPA. It blends academic excellence with a vibrant campus life featuring various clubs and sports facilities.'
    },

    {
        id: 10,
        name: 'Sardar Bhagwan Singh University',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767020054/sbs-logo_pkmszc.svg'),
        logoBgColor: '#ffffff',
        location: 'Balawala, Dehradun',
        established: '1994',
        accreditation: 'NAAC Accredited | UGC | PCI | IAP',
        description: 'North India\'s pioneer institute in Biomedical, Pharmacy, and Physiotherapy education.',
        courses: ['B.Pharma', 'BPT', 'B.Sc Biotech', 'M.Pharma', 'MPT'],
        collegeType: 'Private University',
        campusSize: '25 Acres',
        placementRate: '80%',
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
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766817379/logo_logo_logo_logo-new1_c1kfpu.png'),
        logoBgColor: '#ffffff',
        location: '60, Chakrata Road, Yamuna Colony, Dehradun',
        established: '2002',
        accreditation: 'UGC Recognized | HNBGU Affiliated',
        description: 'The first institute to introduce IT education in Uttarakhand, focusing on holistic growth.',
        courses: ['BCA', 'B.Sc IT', 'BBA', 'BHM', 'B.Lib'],
        collegeType: 'Private Institute',
        campusSize: '3 Acres',
        placementRate: '90%',
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
        bestPart: 'ITM Dehradun, established in 2002, holds the distinction of being the first institute to facilitate IT education in Uttarakhand. Located centrally on Chakrata Road, it offers easy accessibility and a focused learning environment. The institute claims a 90% placement record with packages reaching up to ₹ 15 LPA. ITM is dedicated to creating industry-ready professionals through its skill-centric curriculum and regular technical workshops.'
    },
    {
        id: 12,
        name: 'SAI Group Of Institutions',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766817452/1_vyyky6.png'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2011',
        accreditation: 'AICTE Approved',
        description: 'Prominent group offering quality engineering & management with modern facilities.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma'],
        collegeType: 'Private Educational Group',
        bestKnownFor: 'Comprehensive educational ecosystem with focus on overall personality development',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma', 'B.Tech CSE', 'B.Tech ME', 'B.Tech ECE'],
        bestCourses: [
            {
                name: 'B.Tech',
                description: 'Engineering programs with emphasis on practical skills and industry readiness'
            },
            {
                name: 'MBA',
                description: 'Management program with leadership development and corporate exposure'
            },
            {
                name: 'B.Pharma',
                description: 'Pharmaceutical education with modern labs and industry partnerships'
            }
        ],
        bestPart: 'SAI Group of Institutions provides a comprehensive educational experience with well-maintained infrastructure and experienced faculty. The group emphasizes holistic development through academic excellence, sports, cultural activities, and personality development programs. With active placement cell and industry connections, students receive placement opportunities with packages averaging 3-5.5 LPA. The institutions also focus on social responsibility through various community service initiatives.'
    },
    {
        id: 13,
        name: 'Shivalik College of Engineering',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767018477/shivaliklogo_wyab9r.png'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2006',
        accreditation: 'AICTE Approved',
        description: 'Premier engineering college with strong industry linkages and technical excellence.',
        courses: ['B.Tech', 'M.Tech', 'Polytechnic', 'Diploma'],
        collegeType: 'Private Engineering College',
        bestKnownFor: 'Quality technical education with excellent faculty-student ratio and hands-on practical training',
        mainCourses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Tech Civil', 'M.Tech', 'Polytechnic', 'Diploma Engineering'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Industry-focused CSE program with modern labs, coding competitions, and placement training'
            },
            {
                name: 'B.Tech Electronics & Communication',
                description: 'Comprehensive ECE program with advanced labs and focus on emerging technologies'
            },
            {
                name: 'B.Tech Mechanical Engineering',
                description: 'Core mechanical engineering with workshops, CAD labs, and industry collaborations'
            }
        ],
        bestPart: 'Shivalik College of Engineering is recognized for its commitment to technical excellence and student-centric approach. The college features well-equipped laboratories, experienced faculty members, and a supportive learning environment. With regular industry visits, guest lectures, and workshop sessions, students gain practical exposure to real-world engineering challenges. The placement cell actively works with companies to secure opportunities with packages ranging from 3-6 LPA. The college also encourages participation in technical competitions, sports, and cultural events for overall personality development.'
    },
    {
        id: 14,
        name: 'IMS Unison University',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035781/Ims_logo_new_v2gjsf.png'),
        logoBgColor: '#B6BDAD',
        location: 'Dehradun',
        established: '2006',
        accreditation: 'UGC Approved',
        description: 'Premier university with industry-relevant curriculum and excellent career support.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Com'],
        collegeType: 'Private University',
        bestKnownFor: 'Management education with strong industry interface and excellent placement support',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Com', 'B.Tech CSE', 'B.Tech ECE', 'M.Tech'],
        bestCourses: [
            {
                name: 'MBA',
                description: 'Comprehensive management program with industry exposure and live projects'
            },
            {
                name: 'B.Tech Computer Science',
                description: 'Industry-aligned CSE program with focus on emerging technologies'
            },
            {
                name: 'BBA',
                description: 'Business administration with entrepreneurship and leadership focus'
            }
        ],
        bestPart: 'IMS Unison University is known for its strong management programs and industry connections. The university provides excellent placement opportunities with average packages of 4-6 LPA. The campus offers modern infrastructure, well-equipped labs, and a vibrant learning environment with active student clubs and industry interactions.'
    },
    {
        id: 15,
        name: 'Combined Institute of Medical Sciences & UIHMT',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035368/logo-cimsr_ei3ray.png'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2008',
        accreditation: 'UGC Approved',
        description: 'Specialized institution for medical sciences & healthcare with industry partnerships.',
        courses: ['B.Sc Nursing', 'BBA Healthcare', 'Hospitality', 'Medical Lab Technology', 'B.Pharma'],
        collegeType: 'Private Institute',
        bestKnownFor: 'Specialized programs in medical sciences and healthcare management',
        mainCourses: ['B.Sc Nursing', 'BBA Healthcare Management', 'Hospitality Management', 'Medical Lab Technology', 'B.Pharma', 'D.Pharma', 'B.Sc Medical'],
        bestCourses: [
            {
                name: 'B.Sc Nursing',
                description: 'Comprehensive nursing program with clinical training and hospital tie-ups'
            },
            {
                name: 'BBA Healthcare Management',
                description: 'Healthcare management program with focus on hospital administration'
            },
            {
                name: 'Hospitality Management',
                description: 'Hospitality and tourism management with industry internships'
            }
        ],
        bestPart: 'Combined Institute of Medical Sciences & UIHMT offers specialized education in healthcare and hospitality sectors. The institute maintains strong partnerships with hospitals and healthcare organizations providing students with practical training and placement opportunities. Average placement packages range from 3-5 LPA with opportunities in hospitals, clinics, and hospitality industry.'
    },
    {
        id: 16,
        name: 'Nav Chetna Group of Colleges',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035368/Nav-Chetna-Logo-new-r5w8c9orrpjj4fhhddlipo289lmebs0nfghda7oyzu_wimoeo.png'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2009',
        accreditation: 'AICTE Approved',
        description: 'Leading group offering quality programs with a focus on practical career skills.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma'],
        collegeType: 'Private Educational Group',
        bestKnownFor: 'Comprehensive educational ecosystem with focus on skill development',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma', 'B.Tech CSE', 'B.Tech ECE', 'M.Tech'],
        bestCourses: [
            {
                name: 'B.Tech',
                description: 'Engineering programs with emphasis on practical skills and industry readiness'
            },
            {
                name: 'MBA',
                description: 'Management program with leadership development and corporate exposure'
            },
            {
                name: 'B.Pharma',
                description: 'Pharmaceutical education with modern labs and industry partnerships'
            }
        ],
        bestPart: 'Nav Chetna Group of Colleges provides a comprehensive educational experience with well-maintained infrastructure and experienced faculty. The group emphasizes skill development through workshops, industry visits, and hands-on training. With active placement cell, students receive placement opportunities with packages averaging 3-5 LPA.'
    },
    {
        id: 17,
        name: 'Tulas Institute',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035368/TulasLogo.f88dd71b_u2a3xv.png'),
        logoBgColor: '#888888',
        location: 'Dehradun',
        established: '2010',
        accreditation: 'AICTE Approved',
        description: 'Modern institute fostering innovation and strong industry collaborations.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'M.Tech'],
        collegeType: 'Private Institute',
        bestKnownFor: 'Innovation-focused education with strong industry connections',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'M.Tech', 'B.Tech CSE', 'B.Tech IT', 'B.Tech ECE'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Technology-focused program with innovation labs and startup culture'
            },
            {
                name: 'MBA',
                description: 'Management program with entrepreneurship and leadership focus'
            },
            {
                name: 'BCA',
                description: 'Computer applications with emphasis on software development'
            }
        ],
        bestPart: 'Tulas Institute emphasizes innovation and practical learning, providing students with an environment that encourages creative thinking. The institute offers modern labs, experienced faculty, and strong industry partnerships for internships and placements with packages ranging from 3-5.5 LPA.'
    },
    {
        id: 18,
        name: 'Coer University',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035367/coer-logo_xz3idz.webp'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2012',
        accreditation: 'UGC Approved',
        description: 'Modern university focused on research, innovation, and industry-ready education.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Sc'],
        collegeType: 'Private University',
        bestKnownFor: 'Emerging university with strong focus on research and industry-ready education',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Sc', 'M.Tech', 'B.Tech CSE', 'B.Com'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Modern engineering program with emphasis on AI, ML, and emerging technologies'
            },
            {
                name: 'MBA',
                description: 'Management program with industry collaborations and practical exposure'
            },
            {
                name: 'BBA',
                description: 'Business administration with entrepreneurship development focus'
            }
        ],
        bestPart: 'Core University is a rapidly growing institution with modern infrastructure and a focus on quality education. The university emphasizes practical learning through industry visits, internships, and live projects. With dedicated placement cell, students receive placement opportunities with packages ranging from 3-6 LPA.'
    },
    {
        id: 19,
        name: 'Quantum University',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035366/qu-logo-name_kjvdad.svg'),
        logoBgColor: '#ffffff',
        location: 'Roorkee, Uttarakhand',
        established: '2011',
        accreditation: 'UGC Approved',
        description: 'Premier university with state-of-the-art infrastructure and strong placements.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma'],
        collegeType: 'Private University',
        bestKnownFor: 'Quality education with strong industry connections and placement support',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma', 'M.Tech', 'B.Tech CSE', 'B.Tech ECE'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Industry-focused CSE program with modern labs and placement training'
            },
            {
                name: 'MBA',
                description: 'Management program with leadership development and corporate exposure'
            },
            {
                name: 'B.Pharma',
                description: 'Pharmaceutical education with advanced labs and industry partnerships'
            }
        ],
        bestPart: 'Quantum University offers quality education with modern infrastructure and experienced faculty. The university maintains strong industry partnerships providing students with internships and placement opportunities. Average placement packages range from 4-6 LPA with highest packages reaching up to 30 LPA.'
    },
    {
        id: 20,
        name: 'Dolphin College',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035366/dibns-logo_olfuby.webp'),
        logoBgColor: '#888888',
        location: 'Dehradun',
        established: '2007',
        accreditation: 'AICTE Approved',
        description: 'Quality education in engineering & management with personalized student attention.',
        courses: ['B.Tech', 'BBA', 'BCA', 'B.Com', 'B.Sc'],
        collegeType: 'Private College',
        bestKnownFor: 'Affordable quality education with personalized attention and career guidance',
        mainCourses: ['B.Tech', 'BBA', 'BCA', 'B.Com', 'B.Sc', 'B.Tech CSE', 'B.Tech IT', 'BA'],
        bestCourses: [
            {
                name: 'B.Tech',
                description: 'Practical engineering education with small class sizes for personalized learning'
            },
            {
                name: 'BCA',
                description: 'Computer applications with focus on software development skills'
            },
            {
                name: 'BBA',
                description: 'Business administration with entrepreneurship and leadership focus'
            }
        ],
        bestPart: 'Dolphin College is known for its student-centric approach with affordable fee structure and personalized attention. The college maintains a supportive learning environment with dedicated faculty mentoring. With consistent placement support, students secure positions with packages ranging from 2.5-4.5 LPA.'
    },
    {
        id: 21,
        name: 'BFIT - Baba Farid Institute of Technology',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035367/Bfit-logo-1_aoxy1t.webp'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2005',
        accreditation: 'AICTE Approved',
        description: 'Premier technical institute with experienced faculty and placement support.',
        courses: ['B.Tech', 'M.Tech', 'MCA', 'Polytechnic', 'Diploma'],
        collegeType: 'Private Technical Institute',
        bestKnownFor: 'Strong technical education foundation with experienced faculty',
        mainCourses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Tech Civil', 'M.Tech', 'MCA', 'Polytechnic'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Focused CSE program with strong coding culture and technical activities'
            },
            {
                name: 'B.Tech Electronics & Communication',
                description: 'Comprehensive ECE program with advanced electronics labs'
            },
            {
                name: 'M.Tech',
                description: 'Advanced technical programs with research opportunities'
            }
        ],
        bestPart: 'BFIT provides a focused technical education environment with experienced faculty members dedicated to student success. The institute maintains modern labs and workshops for hands-on learning. With strong emphasis on placement training, students receive packages ranging from 3-5 LPA with opportunities in both core engineering and IT sectors.'
    },
    {
        id: 9,
        name: 'D.D. College Dehradun',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1766816816/logo_pjxpio.png'), // Keeping placeholder as no specific logo URL was provided/found in snippets to replace immediately.
        logoBgColor: '#ffffff',
        location: '25, Nimbuwala, Garhi Cantt., Dehradun, Uttarakhand',
        established: '2014',
        accreditation: 'NAAC Assessed',
        description: 'Reputed institution offering diverse programs in Agriculture, Sciences, Commerce & Education.',
        courses: ['B.Sc Agriculture', 'B.Com (Hons)', 'B.Ed', 'BBA', 'BCA', 'M.Sc', 'MA', 'Yoga'],
        collegeType: 'Private Institute',
        bestKnownFor: 'Affordable quality education with focus on holistic development',
        mainCourses: ['B.Sc Agriculture', 'B.Com (Hons)', 'B.Ed', 'BBA', 'BCA', 'B.Sc (PCM/CBZ)', 'M.Sc Agronomy', 'M.Sc Chemistry', 'MA Yoga', 'PG Diploma in Yoga', 'BA'],
        bestCourses: [
            {
                name: 'B.Sc Agriculture',
                description: 'Focus on modern agricultural practices with field training'
            },
            {
                name: 'B.Ed',
                description: 'NCTE approved program for aspiring educators'
            },
            {
                name: 'MA/PG Diploma in Yoga',
                description: 'Specialized course maximizing wellness and career opportunities in health sector'
            }
        ],
        bestPart: 'D.D. College, established in 2014, has quickly emerged as a significant center for learning in Dehradun. Located in the serene Garhi Cantt area, it offers a peaceful environment conducive to studies. Affiliated with key universities like HNBGU and Sri Dev Suman University, the college is known for its affordable fee structure, diverse course offerings ranging from Agriculture to Yoga, and a commitment to student support with facilities like well-equipped labs and a rich library.'
    },
    {
        id: 22,
        name: 'Guru Nanak College',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035367/logo_vlerv7.webp'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2008',
        accreditation: 'AICTE Approved',
        description: 'Quality education across disciplines with dedicated faculty and student success.',
        courses: ['B.Tech', 'BBA', 'BCA', 'B.Com', 'B.Sc'],
        collegeType: 'Private College',
        bestKnownFor: 'Community-focused education with personalized attention and career guidance',
        mainCourses: ['B.Tech', 'BBA', 'BCA', 'B.Com', 'B.Sc', 'B.Tech CSE', 'BA', 'M.Sc'],
        bestCourses: [
            {
                name: 'B.Tech',
                description: 'Practical engineering education with small class sizes for personalized learning'
            },
            {
                name: 'BBA',
                description: 'Business administration with entrepreneurship and leadership development'
            },
            {
                name: 'BCA',
                description: 'Computer applications with emphasis on software development'
            }
        ],
        bestPart: 'Guru Nanak College is known for its student-centric approach with small class sizes ensuring personalized attention. The college maintains a supportive learning environment with dedicated faculty mentoring. With affordable fee structure and consistent placement support, students secure positions with packages ranging from 2.5-4.5 LPA.'
    },
    {
        id: 23,
        name: 'JBIT - Jai Bharat Institute of Technology',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035366/images_h0a51d.png'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2006',
        accreditation: 'AICTE Approved',
        description: 'Premier technical education with modern infrastructure and strong industry links.',
        courses: ['B.Tech', 'M.Tech', 'MCA', 'Polytechnic', 'Diploma'],
        collegeType: 'Private Engineering Institute',
        bestKnownFor: 'Quality technical education with excellent faculty-student ratio',
        mainCourses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Tech Civil', 'M.Tech', 'Polytechnic'],
        bestCourses: [
            {
                name: 'B.Tech Computer Science',
                description: 'Industry-focused CSE program with modern labs and coding competitions'
            },
            {
                name: 'B.Tech Electronics & Communication',
                description: 'Comprehensive ECE program with advanced labs and emerging technologies'
            },
            {
                name: 'B.Tech Mechanical Engineering',
                description: 'Core mechanical engineering with workshops and industry collaborations'
            }
        ],
        bestPart: 'JBIT is recognized for its commitment to technical excellence and student-centric approach. The institute features well-equipped laboratories, experienced faculty members, and a supportive learning environment. With regular industry visits and workshop sessions, students gain practical exposure. The placement cell actively works with companies to secure opportunities with packages ranging from 3-6 LPA.'
    },
    {
        id: 24,
        name: 'Doon Group of Colleges',
        logo: getAssetUrl('https://res.cloudinary.com/djjdvw3wc/image/upload/v1767035367/logo_2_b55nw4.png'),
        logoBgColor: '#ffffff',
        location: 'Dehradun',
        established: '2004',
        accreditation: 'AICTE Approved',
        description: 'Quality engineering & management programs with comprehensive student development.',
        courses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma'],
        collegeType: 'Private Educational Group',
        bestKnownFor: 'Comprehensive educational ecosystem with focus on overall development',
        mainCourses: ['B.Tech', 'MBA', 'BBA', 'BCA', 'B.Pharma', 'B.Tech CSE', 'B.Tech ME', 'B.Tech ECE'],
        bestCourses: [
            {
                name: 'B.Tech',
                description: 'Engineering programs with emphasis on practical skills and industry readiness'
            },
            {
                name: 'MBA',
                description: 'Management program with leadership development and corporate exposure'
            },
            {
                name: 'B.Pharma',
                description: 'Pharmaceutical education with modern labs and industry partnerships'
            }
        ],
        bestPart: 'Doon Group of Colleges provides a comprehensive educational experience with well-maintained infrastructure and experienced faculty. The group emphasizes holistic development through academic excellence, sports, cultural activities, and personality development programs. With active placement cell and industry connections, students receive placement opportunities with packages averaging 3-5.5 LPA.'
    }
];
