export default function Head() {
    const title = 'Top Private Colleges in Dehradun – Courses, Fees, Rankings (2026)';
    const description =
        'Browse top private colleges in Dehradun with details on courses, fees, rankings, placements and campus facilities to help you choose the right institute.';
    const keywords =
        'top private colleges Dehradun, Dehradun colleges list, engineering colleges Dehradun, MBA colleges Dehradun, BBA BCA admission Dehradun';
    const path = '/campuses';
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


