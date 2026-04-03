const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'LOGO.jpeg');
const outputPath = path.join(__dirname, 'public', 'LOGO_transparent.png');

sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    // Process pixels to remove white background
    // Loop through each pixel (RGBA)
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      
      // If the pixel is close to white, make it transparent
      if (r > 230 && g > 230 && b > 230) {
        // Full transparency
        data[i+3] = 0;
      } else if (r > 200 && g > 200 && b > 200) {
        // Partial transparency for anti-aliasing edges
        // The closer to white, the more transparent
        const avg = (r + g + b) / 3;
        const alpha = Math.floor(255 - ((avg - 200) / 55) * 255);
        data[i+3] = alpha;
      }
    }
    return sharp(data, { raw: info }).png().toFile(outputPath);
  })
  .then(() => {
    console.log('Successfully created transparent logo!');
  })
  .catch(err => {
    console.error('Error processing logo:', err);
  });
