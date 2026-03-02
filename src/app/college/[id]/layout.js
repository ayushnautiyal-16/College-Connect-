import { collegesData } from '@/utils/collegesData';
import { getAbsoluteAssetUrl } from '@/utils/assets';

export async function generateMetadata({ params }) {
    const id = parseInt(params.id, 10);
    const college = Number.isNaN(id) ? null : collegesData.find(c => c.id === id);

    if (!college) {
        return {
            title: 'College Not Found',
            description:
                'The requested college page could not be found on College Connect.',
        };
    }

    const title = `${college.name} – Courses, Fees, Placements & Admission 2026`;

    const description =
        college.description ||
        `Explore courses, fees, placements and admission details for ${college.name} in Dehradun.`;

    const keywords = [
        college.name,
        college.location,
        'Dehradun college',
        'private college',
        'admissions 2026',
        'courses',
        'fees',
        'placements',
        ...(college.mainCourses || []).slice(0, 5),
    ];

    // Use cardImage → logo as fallback → /icon.png as last resort
    const ogImagePath = college.cardImage || college.logo;
    const ogImageUrl = getAbsoluteAssetUrl(ogImagePath) || '/icon.png';

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `/college/${college.id}`,
        },
        openGraph: {
            title,
            description,
            url: `/college/${college.id}`,
            type: 'website',
            siteName: 'College Connect',
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${college.name} Campus - College Connect`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${college.name} – Admission 2026`,
            description,
            images: [ogImageUrl],
        },
    };
}

export default function CollegeLayout({ children }) {
    return children;
}
