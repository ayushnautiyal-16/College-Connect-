export default function Head() {
    const title = 'Contact College Connect – Free Counselling for Dehradun Colleges';
    const description =
        'Contact College Connect to get free counselling and expert guidance for admissions to private colleges in Dehradun. Talk to our senior admission counsellors.';
    const keywords =
        'contact college connect, admission counselling Dehradun, free counselling, private colleges Dehradun contact, education consultant';
    const path = '/contact';
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


