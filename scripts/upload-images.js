import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, '../.env.local') });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Root public directory
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  console.error(`❌ Folder not found: ${publicDir}`);
  process.exit(1);
}

// Function to recursively find files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file)) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

const allImageFiles = getAllFiles(publicDir);

if (allImageFiles.length === 0) {
  console.log('⚠️  No images found in public/ folder.');
  process.exit(0);
}

console.log(`📁 Found ${allImageFiles.length} image(s) across all folders. Starting upload...\n`);

(async () => {
  for (const filePath of allImageFiles) {
    // Determine the relative path to maintain folder structure
    const relativePath = path.relative(publicDir, filePath);
    const folderPath = path.dirname(relativePath).replace(/\\/g, '/'); // Use forward slashes for Cloudinary
    
    // Construct Cloudinary folder path
    // If image is in public/images/subfolder, it will be in company-website/images/subfolder
    const cloudinaryFolder = folderPath === '.' ? 'company-website' : `company-website/${folderPath}`;

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: cloudinaryFolder,
        use_filename: true,
        unique_filename: false, // Keep the same name if possible
      });
      console.log(`✅ ${relativePath} → ${result.secure_url}`);
    } catch (err) {
      console.error(`❌ Failed to upload ${relativePath}:`, err.message);
    }
  }

  console.log('\n🎉 Comprehensive upload complete!');
})();
