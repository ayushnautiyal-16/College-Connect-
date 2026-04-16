const SITE_URL = 'https://www.collegeconnectedu.com';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/privacy-policy'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
