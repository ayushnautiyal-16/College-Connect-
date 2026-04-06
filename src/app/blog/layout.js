export const metadata = {
    title: 'Best Colleges in Dehradun 2026 – Admission, Fees, Placements & Reviews | College Connect',
    description:
        'Discover the best private colleges in Dehradun for 2026. Get expert insights on direct admission, fees structure, placements, scholarships, hostel facilities, and career guidance. Your one-stop blog for Dehradun college admissions.',
    keywords: [
        'best college in dehradun',
        'best private college in dehradun',
        'top colleges in dehradun',
        'dehradun college admission 2026',
        'direct admission in dehradun',
        'best engineering college dehradun',
        'best mba college dehradun',
        'graphic era university',
        'private university dehradun fees',
        'management quota dehradun',
        'college placements dehradun',
        'best btech college dehradun',
        'low fees college dehradun',
        'dehradun university ranking',
        'college connect dehradun',
        'admission counselling dehradun',
        'scholarship dehradun colleges',
        'hostel facilities dehradun',
        'dehradun college reviews',
        'top 10 colleges dehradun',
    ],
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Best Colleges in Dehradun 2026 – Admissions, Fees & Placements Blog',
        description:
            'Expert guides on best colleges in Dehradun. Compare fees, placements, rankings & get free admission counselling for top private universities.',
        url: '/blog',
        type: 'website',
        siteName: 'College Connect',
        images: [{ url: '/icon.png', alt: 'College Connect – Best Colleges in Dehradun Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Colleges in Dehradun 2026 – Admission Blog | College Connect',
        description:
            'Expert articles on best colleges, direct admission process, fees, placements & career guidance for Dehradun universities.',
        images: ['/icon.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BlogLayout({ children }) {
    return children;
}
