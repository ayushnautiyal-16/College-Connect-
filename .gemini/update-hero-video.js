const fs = require('fs');

const filePath = 'd:/campusFinder/src/components/HeroSlider/HeroSlider.js';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the video URL in slide 3
const oldVideo = "uttaranchal/Why Uttaranchal University is North India's Top Choice  750+ Recruiters & 2356+ Placements in 2024! - Uttaranchal University (1080p, h264, youtube).mp4";
const newVideo = "UPES/Life at UPES _ UPES Dehradun(1080P_HD) (1).mp4";

// Find the second occurrence (slide 3) and replace it
let occurrences = 0;
content = content.replace(new RegExp(oldVideo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), (match) => {
    occurrences++;
    return occurrences === 2 ? newVideo : match;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated HeroSlider.js - Slide 3 now uses UPES video');
