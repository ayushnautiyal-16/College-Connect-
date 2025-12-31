# Cloudinary Setup Instructions

## Step 1: Create .env file

Project root directory (`d:\campusFinder`) mein `.env` file manually create karo.

File content:
```env
# Cloudinary Configuration
CLOUD_NAME=djjdvw3wc

# Add other Cloudinary credentials from your dashboard when needed:
# CLOUDINARY_API_KEY=your_api_key_here
# CLOUDINARY_API_SECRET=your_api_secret_here
```

## Step 2: Using Cloudinary in your code

### Import the utility:
```javascript
import { getCloudinaryImageUrl, getCloudinaryVideoUrl, cloudinaryConfig } from '../utils/cloudinary';
```

### Get Image URL:
```javascript
// Simple usage
const imageUrl = getCloudinaryImageUrl('sample-image-id');

// With transformations
const imageUrl = getCloudinaryImageUrl('sample-image-id', {
  width: 800,
  height: 600,
  crop: 'fill',
  quality: 'auto',
  format: 'auto'
});
```

### Get Video URL:
```javascript
const videoUrl = getCloudinaryVideoUrl('sample-video-id', {
  width: 1280,
  height: 720,
  quality: 'auto',
  format: 'mp4'
});
```

## Example Usage in Components:

```javascript
import { getCloudinaryImageUrl } from '../utils/cloudinary';

function MyComponent() {
  const imageUrl = getCloudinaryImageUrl('college-campus-image', {
    width: 1200,
    height: 800,
    crop: 'fill'
  });

  return <img src={imageUrl} alt="College Campus" />;
}
```

## Notes:
- `.env` file already added to `.gitignore` - safe from git commits
- Cloud name already configured: `djjdvw3wc`
- Other credentials (API_KEY, API_SECRET) add karne ke liye Cloudinary dashboard se le sakte ho

