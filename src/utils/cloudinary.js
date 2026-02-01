/**
 * AWS CloudFront CDN Configuration
 * Use CloudFront for serving images from S3
 */

export const cloudinaryConfig = {
  cloudName: process.env.CLOUD_NAME || 'djjdvw3wc', // Legacy Cloudinary (not used)
  cloudFrontUrl: process.env.CLOUDFRONT_URL || 'https://d1om6fetcnl3e0.cloudfront.net',
};

/**
 * Get CloudFront image URL
 * @param {string} imagePath - The path to the image in S3 (e.g., 'colleges/image.jpg')
 * @param {object} options - Transformation options (ignored for now, CloudFront serves as-is)
 * @returns {string} CloudFront image URL
 */
export const getCloudinaryImageUrl = (imagePath, options = {}) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

  // Encode spaces and special characters
  const encodedPath = encodeURI(cleanPath);

  return `${cloudinaryConfig.cloudFrontUrl}/${encodedPath}`;
};

/**
 * Get CloudFront video URL
 * @param {string} videoPath - The path to the video in S3 (e.g., 'videos/demo.mp4')
 * @param {object} options - Transformation options (ignored for CloudFront)
 * @returns {string} CloudFront video URL
 */
export const getCloudinaryVideoUrl = (videoPath, options = {}) => {
  // Remove leading slash if present
  const cleanPath = videoPath.startsWith('/') ? videoPath.slice(1) : videoPath;

  // Encode spaces and special characters
  const encodedPath = encodeURI(cleanPath);

  return `${cloudinaryConfig.cloudFrontUrl}/${encodedPath}`;
};

export default cloudinaryConfig;

