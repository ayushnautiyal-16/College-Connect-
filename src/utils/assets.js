/**
 * Asset Management Utility
 * Handles image and resource URLs via AWS CloudFront CDN
 */

const cloudFrontUrl = 'https://d1om6fetcnl3e0.cloudfront.net';

/**
 * Generates the full CloudFront URL for a given asset path.
 *
 * @param {string} path - The filename or path of the asset (e.g., 'my-image.jpg' or 'DBUU/campus.webp').
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
    const encodedPath = cleanPath
        .split('/')
        .map(segment => encodeURIComponent(segment))
        .join('/');

    return `${cloudFrontUrl}/${encodedPath}`;
};

/**
 * Alias for getAssetUrl — returns full absolute CDN URL.
 * Use for OG/meta images that need absolute URLs for social media crawlers.
 *
 * @param {string} path - The raw asset path.
 * @returns {string|null} The full absolute URL or null.
 */
export const getAbsoluteAssetUrl = (path) => {
    if (!path) return null;
    return getAssetUrl(path) || null;
};
