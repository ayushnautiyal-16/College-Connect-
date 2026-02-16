export default function Head() {
    const title = 'About College Connect – Dehradun Private College Admission Experts';
    const description =
        'Learn about College Connect, your trusted admission counselling partner for private colleges in Dehradun. Expert guidance on courses, colleges, fees and placements.';
    const keywords =
        'about college connect, admission experts Dehradun, private colleges counselling, education consultancy, Dehradun college guidance';
    const path = '/about';
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


