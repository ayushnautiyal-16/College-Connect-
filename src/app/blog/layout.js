export const metadata = {
    title: 'Dehradun College Admission Blog – Direct Admission & Fees Guides',
    description:
        'Read expert articles on private colleges in Dehradun, direct admission, management quota, fees, placements and counselling tips for students and parents.',
    keywords: [
        'Dehradun college admission blog',
        'direct admission guide',
        'private colleges fees Dehradun',
        'management quota articles',
        'counselling tips',
        'college admission tips 2026',
    ],
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Dehradun College Admission Blog – Direct Admission & Fees Guides',
        description:
            'Expert articles on private colleges in Dehradun, direct admission, fees, placements and counselling tips.',
        url: '/blog',
        type: 'website',
        images: [{ url: '/icon.png', alt: 'College Connect Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'College Admission Blog – Dehradun Guides',
        description:
            'Expert articles on direct admission, fees, placements for Dehradun colleges.',
        images: ['/icon.png'],
    },
};

export default function BlogLayout({ children }) {
    return children;
}
