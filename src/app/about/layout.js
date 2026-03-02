export const metadata = {
    title: 'About College Connect – Dehradun Private College Admission Experts',
    description:
        'Learn about College Connect, your trusted admission counselling partner for private colleges in Dehradun. Expert guidance on courses, colleges, fees and placements.',
    keywords: [
        'about college connect',
        'admission experts Dehradun',
        'private colleges counselling',
        'education consultancy',
        'Dehradun college guidance',
    ],
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About College Connect – Dehradun Private College Admission Experts',
        description:
            'Learn about College Connect, your trusted admission counselling partner for private colleges in Dehradun.',
        url: '/about',
        type: 'website',
        images: [{ url: '/icon.png', alt: 'College Connect' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About College Connect – Admission Experts Dehradun',
        description:
            'Your trusted admission counselling partner for private colleges in Dehradun.',
        images: ['/icon.png'],
    },
};

export default function AboutLayout({ children }) {
    return children;
}
