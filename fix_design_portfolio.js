// fix_design_portfolio.js
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'images', 'sample', 'design');
const categoriesMap = {
  'web_ui': { cat: 'web', title: 'Web UX/UI', tag: 'UI/UX · Web' },
  'app_ui': { cat: 'mobile', title: 'Mobile UX/UI', tag: 'UI/UX · Mobile' },
  'desktop_ui': { cat: 'system', title: 'Desktop UX/UI', tag: 'UI/UX · System' }
};

const items = [];
let idCounter = 300; // Starting ID for UI/UX design

const dirs = fs.readdirSync(baseDir, { withFileTypes: true });
for (const dir of dirs) {
  if (dir.isDirectory()) {
    const dirName = dir.name.toLowerCase();
    const mapInfo = categoriesMap[dirName];
    if (!mapInfo) continue;

    const files = fs.readdirSync(path.join(baseDir, dir.name)).filter(f => f.match(/\.(jpg|jpeg|png|webp|gif|JPG|PNG)$/));
    
    const groups = {};
    for (const file of files) {
      const match = file.match(/^(.*?)(-\d+)?\.[^.]+$/);
      const prefix = match ? match[1] : file.split('.')[0];
      if (!groups[prefix]) groups[prefix] = [];
      groups[prefix].push(file);
    }

    const prefixes = Object.keys(groups).sort((a,b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));

    for (const prefix of prefixes) {
      groups[prefix].sort((a,b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));
      const filesUrl = groups[prefix].map(f => `/images/sample/design/${dir.name}/${f}`);
      
      items.push({
        id: idCounter++,
        serviceType: 'design',
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

const outputStr = '  // UI/UX Design\n' + items.map(formatObject).join(',\n') + '\n';

// Replace in portfolio_data.ts
const portfolioPath = path.join(__dirname, 'src', 'app', 'data', 'portfolio_data.ts');
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

const regex = /\/\/ UI\/UX Design[\s\S]*?(?=\n\s*\/\/ Graphic Design)/;
portfolioContent = portfolioContent.replace(regex, outputStr);
fs.writeFileSync(portfolioPath, portfolioContent, 'utf8');

console.log("SUCCESS");
