const fs = require('fs');
const path = require('path');

const targetDir = 'src';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(targetDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Replace all unwanted colors with emerald
    content = content.replace(/teal-(\d+)/g, 'emerald-$1');
    content = content.replace(/indigo-(\d+)/g, 'emerald-$1');
    content = content.replace(/purple-(\d+)/g, 'emerald-$1');
    content = content.replace(/pink-(\d+)/g, 'emerald-$1');
    content = content.replace(/cyan-(\d+)/g, 'emerald-$1');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
console.log('LQ done');
