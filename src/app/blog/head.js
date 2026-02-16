export default function Head() {
    const title = 'Dehradun College Admission Blog – Direct Admission & Fees Guides';
    const description =
        'Read expert articles on private colleges in Dehradun, direct admission, management quota, fees, placements and counselling tips for students and parents.';
    const keywords =
        'Dehradun college admission blog, direct admission guide, private colleges fees Dehradun, management quota articles, counselling tips';
    const path = '/blog';
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


