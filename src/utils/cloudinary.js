/**
 * Cloudinary Configuration
 * Access Cloudinary environment variables
 */

export const cloudinaryConfig = {
  cloudName: process.env.CLOUD_NAME || 'djjdvw3wc',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
};

/**
 * Get Cloudinary image URL
 * @param {string} publicId - The public ID of the image
 * @param {object} options - Transformation options
 * @returns {string} Cloudinary image URL
 */
export const getCloudinaryImageUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
  } = options;

  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformString = transformations.length > 0 
    ? `${transformations.join(',')}/` 
    : '';

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformString}${publicId}`;
};

/**
 * Get Cloudinary video URL
 * @param {string} publicId - The public ID of the video
 * @param {object} options - Transformation options
 * @returns {string} Cloudinary video URL
 */
export const getCloudinaryVideoUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'mp4',
  } = options;

  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformString = transformations.length > 0 
    ? `${transformations.join(',')}/` 
    : '';

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload/${transformString}${publicId}`;
};

export default cloudinaryConfig;

