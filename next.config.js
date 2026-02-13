/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd1om6fetcnl3e0.cloudfront.net',
            },
        ],
    },
    // Redirect old hash routes if needed
    async rewrites() {
        return [];
    },
};

module.exports = nextConfig;
