export const metadata = {
    title: 'Top Private Colleges in Dehradun – Courses, Fees, Rankings (2026)',
    description:
        'Browse top private colleges in Dehradun with details on courses, fees, rankings, placements and campus facilities to help you choose the right institute.',
    keywords: [
        'top private colleges Dehradun',
        'Dehradun colleges list',
        'engineering colleges Dehradun',
        'MBA colleges Dehradun',
        'BBA BCA admission Dehradun',
        'best colleges Dehradun 2026',
    ],
    alternates: {
        canonical: '/campuses',
    },
    openGraph: {
        title: 'Top Private Colleges in Dehradun – Courses, Fees, Rankings (2026)',
        description:
            'Browse top private colleges in Dehradun with details on courses, fees, rankings, placements and campus facilities.',
        url: '/campuses',
        type: 'website',
        images: [{ url: '/icon.png', alt: 'College Connect' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Top Private Colleges in Dehradun (2026)',
        description:
            'Courses, fees, rankings, placements for top Dehradun colleges.',
        images: ['/icon.png'],
    },
};

export default function CampusesLayout({ children }) {
    return children;
}
