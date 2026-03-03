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
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME,
    },
    // Redirect old hash routes if needed
    async rewrites() {
        return [];
    },
};

module.exports = nextConfig;
