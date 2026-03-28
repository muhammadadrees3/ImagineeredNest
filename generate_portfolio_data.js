const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'images', 'sample', 'graphic-design');
const categoriesMap = {
  'banner': { cat: 'banner_design', title: 'Banner Design', tag: 'Graphic · Banner' },
  'book cover': { cat: 'book_cover_design', title: 'Book Cover Design', tag: 'Graphic · Book Cover' },
  'brochure': { cat: 'brochure_design', title: 'Brochure Design', tag: 'Graphic · Brochure' },
  'card': { cat: 'card_design', title: 'Card Design', tag: 'Graphic · Card' },
  'logos': { cat: 'logo_design', title: 'Logo Design', tag: 'Graphic · Logo' },
  'magazine': { cat: 'magazine_design', title: 'Magazine Design', tag: 'Graphic · Magazine' },
  'packaging': { cat: 'packaging_design', title: 'Packaging Design', tag: 'Graphic · Packaging' },
  'poster': { cat: 'poster_design', title: 'Poster Design', tag: 'Graphic · Poster' },
  'standee': { cat: 'standee_design', title: 'Standee Design', tag: 'Graphic · Standee' },
  't-shirt': { cat: 'tshirt_design', title: 'T-Shirt Design', tag: 'Graphic · T-Shirt' },
  'thumbnail': { cat: 'thumbnail_design', title: 'Thumbnail Design', tag: 'Graphic · Thumbnail' }
};

const items = [];
let idCounter = 400; // Starting ID for graphic design

const dirs = fs.readdirSync(baseDir, { withFileTypes: true });
for (const dir of dirs) {
  if (dir.isDirectory() && dir.name !== 'dummy') {
    const dirName = dir.name.toLowerCase();
    const mapInfo = categoriesMap[dirName];
    if (!mapInfo) continue;

    const files = fs.readdirSync(path.join(baseDir, dir.name)).filter(f => f.match(/\.(jpg|jpeg|png|webp|gif|JPG|PNG)$/));
    
    // Group files by prefix before '-' if hyphen exists
    // If no hyphen, prefix is just the filename without extension
    const groups = {};
    for (const file of files) {
      // Find base prefix, e.g., 'logo1' from 'logo1-1.jpg'
      const match = file.match(/^(.*?)(-\d+)?\.[^.]+$/);
      const prefix = match ? match[1] : file.split('.')[0];
      if (!groups[prefix]) groups[prefix] = [];
      groups[prefix].push(file);
    }

    const prefixes = Object.keys(groups).sort((a,b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));

    for (const prefix of prefixes) {
      groups[prefix].sort((a,b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));
      const filesUrl = groups[prefix].map(f => `/images/sample/graphic-design/${dir.name}/${f}`);
      
      items.push({
        id: idCounter++,
        serviceType: 'graphic',
        category: mapInfo.cat,
        title: mapInfo.title,
        tag: mapInfo.tag,
        image: filesUrl[0],
        extraImages: filesUrl,
        alt: mapInfo.title
      });
    }
  }
}

const formatObject = (obj) => {
  return `  { id: ${obj.id}, serviceType: '${obj.serviceType}', category: '${obj.category}', title: '${obj.title}', tag: '${obj.tag}', image: '${obj.image}', extraImages: [${obj.extraImages.map(img => `'${img}'`).join(', ')}], alt: '${obj.alt}' }`;
};

const output = items.map(formatObject).join(',\n');
console.log(output);
