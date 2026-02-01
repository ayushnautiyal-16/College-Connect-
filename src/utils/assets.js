/**
 * Asset Management Utility
 * Handles image and resource URLs via AWS CloudFront CDN
 */

// Safe environment variable access
let cloudFrontUrl = 'https://d1om6fetcnl3e0.cloudfront.net';
try {
    // This check allows Webpack to replace process.env.CLOUDFRONT_URL
    // while preventing ReferenceError at runtime if process is undefined
    if (process.env.CLOUDFRONT_URL) {
        cloudFrontUrl = process.env.CLOUDFRONT_URL;
    }
} catch (e) {
    // Fallback to default if process is explicitly undefined in environment
    console.warn('Could not read CLOUDFRONT_URL from environment, using default.');
}

export const assetConfig = {
    cloudFrontUrl,
};

/**
 * Generates the full CloudFront URL for a given asset path.
 * 
 * @param {string} path - The filename or path of the asset (e.g., 'my-image.jpg' or 'images/my-image.jpg').
 *                        If a full Cloudinary URL is passed, it attempts to extract the filename.
 * @returns {string} The full CDN URL.
 */
export const getAssetUrl = (path) => {
    if (!path) return '';

    // If it's already a full URL that isn't Cloudinary, return it (e.g. data URI or external link)
    if (path.startsWith('http') && !path.includes('cloudinary')) {
        return path;
    }

    let cleanPath = path;

    // Logic to handle accidental passing of full Cloudinary URLs during migration
    // Extracts the filename from a Cloudinary URL pattern
    if (path.includes('cloudinary.com')) {
        // Splits by slash and takes the last segment (filename)
        const parts = path.split('/');
        cleanPath = parts[parts.length - 1];
    }

    // Remove leading slash if present to avoid double slashes
    if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.slice(1);
    }

    // Encode path segments to handle spaces and special characters
    const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');

    return `${assetConfig.cloudFrontUrl}/${encodedPath}`;
};
