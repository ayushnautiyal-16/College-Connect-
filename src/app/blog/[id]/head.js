import { blogPosts } from '@/data/blogData';

export default function Head({ params }) {
    const { id } = params;
    const post = blogPosts.find(p => p.id === id);

    const defaultTitle = 'College Admission Blog | College Connect Dehradun';
    const defaultDescription =
        'Expert guides on direct admission, private colleges, fees and counselling for Dehradun colleges.';

    const title = post
        ? `${post.title} | College Admission Blog Dehradun`
        : defaultTitle;

    const description = post?.excerpt || defaultDescription;

    const keywords = post
        ? `${post.category}, Dehradun private colleges, admission guide, ${post.title}`
        : 'Dehradun colleges blog, admission guide, private colleges, management quota, fees, counselling';

    const path = post ? `/blog/${post.id}` : '/blog';
    const image = '/icon.png';

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* OpenGraph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="article" />
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


