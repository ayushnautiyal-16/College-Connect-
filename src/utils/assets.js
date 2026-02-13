/**
 * Asset Management Utility
 * Handles image and resource URLs via AWS CloudFront CDN
 */

// Environment variable access (NEXT_PUBLIC_ prefix for client-side access in Next.js)
const cloudFrontUrl = process.env.NEXT_PUBLIC_CLOUDFRONT_URL || 'https://d1om6fetcnl3e0.cloudfront.net';

export const assetConfig = {
    cloudFrontUrl,
};

/**
 * Generates the full CloudFront URL for a given asset path.
 * 
 * @param {string} path - The filename or path of the asset (e.g., 'my-image.jpg' or 'images/my-image.jpg').
 * @returns {string} The full CDN URL.
 */
export const getAssetUrl = (path) => {
    if (!path) return '';

    // If it's already a full URL, return it as-is (e.g. data URI or external link)
    if (path.startsWith('http')) {
        return path;
    }

    let cleanPath = path;

    // Remove leading slash if present to avoid double slashes
    if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.slice(1);
    }

    // Encode path segments to handle spaces and special characters
    const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');

    return `${assetConfig.cloudFrontUrl}/${encodedPath}`;
};
