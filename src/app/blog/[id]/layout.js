import { blogPosts } from '@/data/blogData';

export async function generateMetadata({ params }) {
    const { id } = params;
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
            description:
                'The requested blog post could not be found on College Connect.',
        };
    }

    const title = `${post.title} – College Admission Blog`;

    const description =
        post.excerpt ||
        'Expert guides on direct admission, private colleges, fees and counselling for Dehradun colleges.';

    const keywords = [
        post.category,
        'Dehradun private colleges',
        'admission guide',
        post.title,
        'college admission blog',
    ];

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `/blog/${post.id}`,
        },
        openGraph: {
            title,
            description,
            url: `/blog/${post.id}`,
            type: 'article',
            siteName: 'College Connect',
            images: [
                {
                    url: '/icon.png',
                    alt: `${post.title} - College Connect Blog`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/icon.png'],
        },
    };
}

export default function BlogPostLayout({ children }) {
    return children;
}
