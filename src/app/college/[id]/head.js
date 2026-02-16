import { collegesData } from '@/utils/collegesData';

export default function Head({ params }) {
    const id = parseInt(params.id, 10);
    const college = Number.isNaN(id) ? null : collegesData.find(c => c.id === id);

    const defaultTitle = 'College Details | College Connect Dehradun';
    const defaultDescription =
        'Detailed information about top private colleges in Dehradun – courses, fees, placements and facilities.';

    const title = college
        ? `${college.name} - Courses, Fees, Placements & Admission 2026`
        : defaultTitle;

    const description = college
        ? college.description ||
          `Explore courses, fees, placements and admission details for ${college.name} in Dehradun.`
        : defaultDescription;

    const keywords = college
        ? `${college.name}, ${college.location}, Dehradun college, private college, admissions, courses, fees, placements`
        : 'Dehradun colleges, private colleges, admissions, courses, fees, placements';

    const path = college ? `/college/${college.id}` : '/college';
    const image = '/icon.png';

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* OpenGraph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={path} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={path} />
        </>
    );
}


