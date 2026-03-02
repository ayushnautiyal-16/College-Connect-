/**
 * Asset Management Utility
 * Images are served via Next.js rewrite: /assets/* → CloudFront CDN
 * This hides the CloudFront URL from end users.
 */

/**
 * Generates the asset URL for a given path.
 * Returns /assets/encoded-path which Next.js rewrites to CloudFront behind the scenes.
 *
 * @param {string} path - The filename or path of the asset (e.g., 'my-image.jpg' or 'DBUU/campus.webp').
 * @returns {string} The proxied asset URL.
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

    return `/assets/${encodedPath}`;
};

/**
 * Builds a full absolute CDN URL — only use for OG/meta images
 * that need absolute URLs for social media crawlers.
 *
 * @param {string} path - The raw asset path.
 * @returns {string|null} The full absolute URL or null.
 */
export const getAbsoluteAssetUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;

    let cleanPath = path;
    if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.slice(1);
    }

    const encodedPath = cleanPath
        .split('/')
        .map(segment => encodeURIComponent(segment))
        .join('/');

    return `https://d1om6fetcnl3e0.cloudfront.net/${encodedPath}`;
};
