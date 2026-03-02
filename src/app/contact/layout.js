export const metadata = {
    title: 'Contact College Connect – Free Counselling for Dehradun Colleges',
    description:
        'Contact College Connect to get free counselling and expert guidance for admissions to private colleges in Dehradun. Talk to our senior admission counsellors.',
    keywords: [
        'contact college connect',
        'admission counselling Dehradun',
        'free counselling',
        'private colleges Dehradun contact',
        'education consultant',
    ],
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact College Connect – Free Counselling for Dehradun Colleges',
        description:
            'Get free counselling and expert guidance for admissions to private colleges in Dehradun.',
        url: '/contact',
        type: 'website',
        images: [{ url: '/icon.png', alt: 'College Connect' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact College Connect – Free Counselling Dehradun',
        description:
            'Free counselling for admissions to private colleges in Dehradun.',
        images: ['/icon.png'],
    },
};

export default function ContactLayout({ children }) {
    return children;
}
