export default function Head() {
    const title = 'Apply for Direct Admission in Dehradun Private Colleges – 2026';
    const description =
        'Fill a single application form to get expert counselling and direct admission support for top private colleges in Dehradun across B.Tech, MBA, BBA, BCA, Pharmacy and more.';
    const keywords =
        'apply Dehradun colleges, direct admission form Dehradun, private college application, B.Tech admission Dehradun, MBA admission Dehradun';
    const path = '/apply';
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


