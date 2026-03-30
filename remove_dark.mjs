import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('./src');
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(/\s+dark:[a-zA-Z0-9_\-\/[\\]]+/g, '');
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
        count++;
    }
});
console.log(`Removed dark classes from ${count} files.`);
