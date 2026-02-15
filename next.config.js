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
        DB_HOST: process.env.DB_HOST || 'collegeconnect-db.cb0geo68eveh.ap-south-1.rds.amazonaws.com',
        DB_USER: process.env.DB_USER || 'collegeadmin',
        DB_PASSWORD: process.env.DB_PASSWORD || 'CollegeConnect991605',
        DB_NAME: process.env.DB_NAME || 'collegeconnect',
    },
    // Redirect old hash routes if needed
    async rewrites() {
        return [];
    },
};

module.exports = nextConfig;
