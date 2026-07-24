const fs = require('fs');
const path = require('path');

const targetDir = 'src/app/providers';

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
    
    content = content.replace(/green-(\d+)/g, 'emerald-$1');
    content = content.replace(/red-(\d+)/g, 'emerald-$1');
    content = content.replace(/rose-(\d+)/g, 'emerald-$1');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
console.log('LQ providers done');
